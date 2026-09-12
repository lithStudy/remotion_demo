import re
import time
from dataclasses import dataclass
from datetime import datetime
from types import SimpleNamespace
from typing import Any, Callable, Literal, Optional

from .gemini_utils import parse_json_from_response  # re-export for compatibility

LlmProvider = Literal["gemini", "deepseek", "mimo"]


@dataclass(frozen=True)
class LlmClient:
    provider: LlmProvider
    raw: Any
    base_url: str | None = None
    # DeepSeek thinking：默认阶段（joint / scene / fix 等）
    deepseek_thinking_enabled: bool = True
    deepseek_reasoning_effort: str | None = "medium"
    # DeepSeek thinking：param 阶段（可关以提速）
    deepseek_param_thinking_enabled: bool = False
    deepseek_param_reasoning_effort: str | None = None


def _normalize_provider(value: Any) -> LlmProvider:
    v = str(value or "").strip().lower()
    if v in ("deepseek", "ds"):
        return "deepseek"
    if v in ("mimo", "xiaomi"):
        return "mimo"
    return "gemini"


def _as_bool(value: Any, default: bool) -> bool:
    if value is None:
        return default
    if isinstance(value, bool):
        return value
    s = str(value).strip().lower()
    if s in ("1", "true", "yes", "on"):
        return True
    if s in ("0", "false", "no", "off"):
        return False
    return default


def _as_optional_str(value: Any) -> str | None:
    if value is None:
        return None
    s = str(value).strip()
    return s or None


def _deepseek_settings_from_config(config: dict) -> dict[str, Any]:
    """从 config.yaml 读取 DeepSeek thinking 相关项。"""
    return {
        "deepseek_thinking_enabled": _as_bool(config.get("deepseek_thinking_enabled"), True),
        # 历史硬编码为 high，默认改为 medium 以降低 Step1 墙钟时间；质量不够可改回 high
        "deepseek_reasoning_effort": _as_optional_str(config.get("deepseek_reasoning_effort", "medium")),
        "deepseek_param_thinking_enabled": _as_bool(config.get("deepseek_param_thinking_enabled"), False),
        "deepseek_param_reasoning_effort": _as_optional_str(config.get("deepseek_param_reasoning_effort")),
    }


def create_llm_client(config: dict, provider: Any | None = None) -> LlmClient:
    """
    根据 config 创建 LLM Client（Gemini / DeepSeek）。
    - Gemini: 需要环境变量 GEMINI_API_KEY
    - DeepSeek(OpenAI兼容): 需要环境变量 DEEPSEEK_API_KEY
    """
    import os

    resolved = _normalize_provider(provider if provider is not None else config.get("llm_provider", "gemini"))
    ds = _deepseek_settings_from_config(config)

    if resolved == "deepseek":
        from openai import OpenAI

        api_key = os.environ.get("DEEPSEEK_API_KEY", "")
        if not api_key:
            raise ValueError("未设置 DEEPSEEK_API_KEY，请在 .env 中配置")
        base_url = str(config.get("deepseek_base_url", "https://api.deepseek.com")).strip() or "https://api.deepseek.com"
        client = OpenAI(api_key=api_key, base_url=base_url)
        return LlmClient(provider="deepseek", raw=client, base_url=base_url, **ds)

    if resolved == "mimo":
        from openai import OpenAI

        api_key = os.environ.get("MIMO_API_KEY", "")
        if not api_key:
            raise ValueError("未设置 MIMO_API_KEY，请在 .env 中配置")
        base_url = str(config.get("mimo_base_url", "https://api.xiaomimimo.com/v1")).strip() or "https://api.xiaomimimo.com/v1"
        client = OpenAI(api_key=api_key, base_url=base_url)
        return LlmClient(provider="mimo", raw=client, base_url=base_url, **ds)

    # default: gemini
    from google import genai

    api_key = os.environ.get("GEMINI_API_KEY", "")
    if not api_key:
        raise ValueError("未设置 GEMINI_API_KEY，请在 .env 中配置")
    client = genai.Client(api_key=api_key)
    return LlmClient(provider="gemini", raw=client, **ds)


def _log_request(
    prompt: str,
    model: str,
    provider: str,
    retries: int,
    append_ai_log: Callable[[str], None] | None,
    *,
    llm_stage: str | None = None,
    thinking_enabled: bool | None = None,
    reasoning_effort: str | None = None,
) -> None:
    request_at = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    print("\n" + "=" * 40 + " AI PROMPT " + "=" * 40)
    if provider == "deepseek":
        print(
            f"[deepseek] stage={llm_stage or 'default'} "
            f"thinking={thinking_enabled} effort={reasoning_effort or '-'}"
        )
    print(prompt)
    print("=" * 91 + "\n")
    if append_ai_log is not None:
        lines = [
            "",
            "=" * 40 + " REQUEST " + "=" * 40,
            f"time: {request_at}",
            f"provider: {provider}",
            f"model: {model}",
            f"retries: {retries}",
        ]
        if provider == "deepseek":
            lines.extend(
                [
                    f"llm_stage: {llm_stage or 'default'}",
                    f"thinking_enabled: {thinking_enabled}",
                    f"reasoning_effort: {reasoning_effort or ''}",
                ]
            )
        lines.extend(
            [
                "",
                "[PROMPT]",
                prompt,
                "=" * 91,
                "",
            ]
        )
        append_ai_log("\n".join(lines))


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


def _call_openai_compatible(
    provider: str,
    client: Any,
    model: str,
    prompt: str,
    *,
    reasoning_effort: str | None = None,
    thinking_enabled: bool | None = None,
) -> SimpleNamespace:
    """统一 OpenAI 兼容格式的调用（DeepSeek / MiMo）。"""
    kwargs: dict[str, Any] = dict(
        model=model,
        messages=_deepseek_messages_from_prompt(prompt),
        stream=False,
    )
    # thinking 模式（DeepSeek / MiMo-V2-Pro 等均支持）；False 时显式关闭，避免服务端默认开启
    if reasoning_effort:
        kwargs["reasoning_effort"] = reasoning_effort
    if thinking_enabled is True:
        kwargs["extra_body"] = {"thinking": {"type": "enabled"}}
    elif thinking_enabled is False:
        kwargs["extra_body"] = {"thinking": {"type": "disabled"}}
    resp = client.chat.completions.create(**kwargs)
    response_text = _extract_text_from_openai_chat_response(resp)
    return SimpleNamespace(text=response_text, raw=resp)


def _resolve_deepseek_call_options(
    client: LlmClient,
    *,
    llm_stage: str,
    deepseek_reasoning_effort: Optional[str],
    deepseek_thinking_enabled: Optional[bool],
) -> tuple[bool, str | None]:
    """
    解析本次 DeepSeek 调用的 thinking / effort。
    - 显式 kwargs 优先
    - llm_stage=param 走 param 专用配置（默认关 thinking）
    - 其余走默认配置（默认 medium）
    """
    stage = str(llm_stage or "default").strip().lower() or "default"

    if deepseek_thinking_enabled is not None:
        thinking_enabled = bool(deepseek_thinking_enabled)
    elif stage == "param":
        thinking_enabled = bool(getattr(client, "deepseek_param_thinking_enabled", False))
    else:
        thinking_enabled = bool(getattr(client, "deepseek_thinking_enabled", True))

    if deepseek_reasoning_effort is not None:
        effort = _as_optional_str(deepseek_reasoning_effort)
    elif stage == "param":
        effort = _as_optional_str(getattr(client, "deepseek_param_reasoning_effort", None))
    else:
        effort = _as_optional_str(getattr(client, "deepseek_reasoning_effort", "medium"))

    if not thinking_enabled:
        return False, None
    return True, effort or "medium"


def generate_with_retry(
    client: LlmClient,
    model: str,
    prompt: str,
    retries: int = 3,
    append_ai_log: Callable[[str], None] | None = None,
    *,
    llm_stage: str = "default",
    deepseek_reasoning_effort: Optional[str] = None,
    deepseek_thinking_enabled: Optional[bool] = None,
):
    """
    带指数退避的 LLM 请求重试封装。
    - 返回值需兼容旧代码：具有 `.text` 字段（供 parse_json_from_response 解析）
    - llm_stage: \"default\" | \"param\"；param 默认关闭 DeepSeek thinking 以提速
    """
    provider = getattr(client, "provider", "gemini")
    thinking_enabled: bool | None = None
    reasoning_effort: str | None = None
    if provider == "deepseek":
        thinking_enabled, reasoning_effort = _resolve_deepseek_call_options(
            client,
            llm_stage=llm_stage,
            deepseek_reasoning_effort=deepseek_reasoning_effort,
            deepseek_thinking_enabled=deepseek_thinking_enabled,
        )

    _log_request(
        prompt,
        model,
        provider,
        retries,
        append_ai_log,
        llm_stage=llm_stage,
        thinking_enabled=thinking_enabled,
        reasoning_effort=reasoning_effort,
    )

    for attempt in range(retries):
        try:
            if provider == "deepseek":
                result = _call_openai_compatible(
                    provider,
                    client.raw,
                    model,
                    prompt,
                    reasoning_effort=reasoning_effort,
                    thinking_enabled=thinking_enabled,
                )
                _log_response(result.text, attempt + 1, retries, append_ai_log)
                return result

            if provider == "mimo":
                result = _call_openai_compatible(
                    provider, client.raw, model, prompt,
                    reasoning_effort=None,
                    thinking_enabled=None,
                )
                _log_response(result.text, attempt + 1, retries, append_ai_log)
                return result

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

