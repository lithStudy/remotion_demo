import re
import time
from dataclasses import dataclass
from datetime import datetime
from types import SimpleNamespace
from typing import Any, Callable, Literal, Optional

from .gemini_utils import parse_json_from_response  # re-export for compatibility

LlmProvider = Literal["gemini", "deepseek"]


@dataclass(frozen=True)
class LlmClient:
    provider: LlmProvider
    raw: Any
    base_url: str | None = None


def _normalize_provider(value: Any) -> LlmProvider:
    v = str(value or "").strip().lower()
    if v in ("deepseek", "ds"):
        return "deepseek"
    return "gemini"


def create_llm_client(config: dict, provider: Any | None = None) -> LlmClient:
    """
    根据 config 创建 LLM Client（Gemini / DeepSeek）。
    - Gemini: 需要环境变量 GEMINI_API_KEY
    - DeepSeek(OpenAI兼容): 需要环境变量 DEEPSEEK_API_KEY
    """
    import os

    resolved = _normalize_provider(provider if provider is not None else config.get("llm_provider", "gemini"))

    if resolved == "deepseek":
        from openai import OpenAI

        api_key = os.environ.get("DEEPSEEK_API_KEY", "")
        if not api_key:
            raise ValueError("未设置 DEEPSEEK_API_KEY，请在 .env 中配置")
        base_url = str(config.get("deepseek_base_url", "https://api.deepseek.com")).strip() or "https://api.deepseek.com"
        client = OpenAI(api_key=api_key, base_url=base_url)
        return LlmClient(provider="deepseek", raw=client, base_url=base_url)

    # default: gemini
    from google import genai

    api_key = os.environ.get("GEMINI_API_KEY", "")
    if not api_key:
        raise ValueError("未设置 GEMINI_API_KEY，请在 .env 中配置")
    client = genai.Client(api_key=api_key)
    return LlmClient(provider="gemini", raw=client)


def _log_request(
    prompt: str,
    model: str,
    provider: str,
    retries: int,
    append_ai_log: Callable[[str], None] | None,
) -> None:
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
                    f"provider: {provider}",
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


def _log_response(
    response_text: str,
    attempt: int,
    retries: int,
    append_ai_log: Callable[[str], None] | None,
) -> None:
    if append_ai_log is None:
        return
    append_ai_log(
        "\n".join(
            [
                "-" * 40 + " RESPONSE " + "-" * 40,
                f"time: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}",
                f"attempt: {attempt}/{retries}",
                "",
                "[OUTPUT]",
                str(response_text),
                "-" * 91,
                "",
            ]
        )
    )


def _log_error(
    error: Exception,
    attempt: int,
    retries: int,
    append_ai_log: Callable[[str], None] | None,
) -> None:
    if append_ai_log is None:
        return
    append_ai_log(
        "\n".join(
            [
                "-" * 40 + " ERROR " + "-" * 40,
                f"time: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}",
                f"attempt: {attempt}/{retries}",
                f"error: {error}",
                "-" * 89,
                "",
            ]
        )
    )


def _deepseek_messages_from_prompt(prompt: str) -> list[dict]:
    # 与用户示例保持一致：给一个稳定的 system
    return [
        {"role": "system", "content": "You are a helpful assistant"},
        {"role": "user", "content": prompt},
    ]


def _extract_text_from_openai_chat_response(resp: Any) -> str:
    try:
        choice0 = resp.choices[0]
        msg = getattr(choice0, "message", None)
        if msg is None:
            return ""
        return str(getattr(msg, "content", "") or "")
    except Exception:
        return ""


def generate_with_retry(
    client: LlmClient,
    model: str,
    prompt: str,
    retries: int = 3,
    append_ai_log: Callable[[str], None] | None = None,
    *,
    deepseek_reasoning_effort: Optional[str] = None,
    deepseek_thinking_enabled: Optional[bool] = None,
):
    """
    带指数退避的 LLM 请求重试封装。
    - 返回值需兼容旧代码：具有 `.text` 字段（供 parse_json_from_response 解析）
    """
    provider = getattr(client, "provider", "gemini")
    _log_request(prompt, model, provider, retries, append_ai_log)

    for attempt in range(retries):
        try:
            if provider == "deepseek":
                reasoning_effort = deepseek_reasoning_effort or "high"
                thinking_enabled = True if deepseek_thinking_enabled is None else bool(deepseek_thinking_enabled)
                extra_body = {"thinking": {"type": "enabled"}} if thinking_enabled else None

                resp = client.raw.chat.completions.create(
                    model=model,
                    messages=_deepseek_messages_from_prompt(prompt),
                    stream=False,
                    reasoning_effort=reasoning_effort,
                    extra_body=extra_body,
                )
                response_text = _extract_text_from_openai_chat_response(resp)
                _log_response(response_text, attempt + 1, retries, append_ai_log)
                return SimpleNamespace(text=response_text, raw=resp)

            # gemini
            from .gemini_utils import json_generate_config

            resp = client.raw.models.generate_content(
                model=model,
                contents=prompt,
                config=json_generate_config(),
            )
            response_text = getattr(resp, "text", "")
            _log_response(response_text, attempt + 1, retries, append_ai_log)
            return resp

        except Exception as e:
            _log_error(e, attempt + 1, retries, append_ai_log)
            if attempt < retries - 1:
                print(f"   ⚠️ API请求异常 ({e})，2秒后进行第 {attempt + 1} 次重试...")
                time.sleep(2 * (attempt + 1))
            else:
                raise

