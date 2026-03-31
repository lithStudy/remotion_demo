import json
import re
import time
from datetime import datetime
from typing import Callable

_JSON_CFG = None


def json_generate_config():
    """延迟导入，首轮与重试共用。"""
    global _JSON_CFG
    if _JSON_CFG is not None:
        return _JSON_CFG
    from google.genai import types

    _JSON_CFG = types.GenerateContentConfig(response_mime_type="application/json")
    return _JSON_CFG


def parse_json_from_response(response_text: str) -> dict:
    response_text = response_text.strip()
    if response_text.startswith("```"):
        response_text = re.sub(r"^```(?:json)?\s*\n?", "", response_text)
        response_text = re.sub(r"\n?```\s*$", "", response_text)
    return json.loads(response_text)


def generate_with_retry(
    client,
    model: str,
    prompt: str,
    retries: int = 3,
    append_ai_log: Callable[[str], None] | None = None,
):
    """带指数退避的 API 请求重试封装。"""
    request_at = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    print("\n" + "=" * 40 + " AI PROMPT " + "=" * 40)
    print(prompt)
    print("=" * 91 + "\n")
    if append_ai_log is not None:
        append_ai_log(
            "\n".join(
                [
                    "",
                    "=" * 40 + " REQUEST " + "=" * 40,
                    f"time: {request_at}",
                    f"model: {model}",
                    f"retries: {retries}",
                    "",
                    "[PROMPT]",
                    prompt,
                    "=" * 91,
                    "",
                ]
            )
        )

    for attempt in range(retries):
        try:
            resp = client.models.generate_content(
                model=model,
                contents=prompt,
                config=json_generate_config(),
            )
            response_text = getattr(resp, "text", "")
            if append_ai_log is not None:
                append_ai_log(
                    "\n".join(
                        [
                            "-" * 40 + " RESPONSE " + "-" * 40,
                            f"time: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}",
                            f"attempt: {attempt + 1}/{retries}",
                            "",
                            "[OUTPUT]",
                            str(response_text),
                            "-" * 91,
                            "",
                        ]
                    )
                )
            return resp
        except Exception as e:
            if append_ai_log is not None:
                append_ai_log(
                    "\n".join(
                        [
                            "-" * 40 + " ERROR " + "-" * 40,
                            f"time: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}",
                            f"attempt: {attempt + 1}/{retries}",
                            f"error: {e}",
                            "-" * 89,
                            "",
                        ]
                    )
                )
            if attempt < retries - 1:
                print(f"   ⚠️ API请求异常 ({e})，2秒后进行第 {attempt + 1} 次重试...")
                time.sleep(2 * (attempt + 1))
            else:
                raise
