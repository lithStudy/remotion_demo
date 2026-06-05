"""Step0 / Step1 共用的 LLM 运行时配置。"""

from template_registry import generate_ai_prompt_guide
from utils.llm_utils import create_llm_client


def create_llm_runtime(
    config: dict,
    *,
    llm_provider: str | None = None,
    llm_model: str | None = None,
) -> tuple:
    """返回 (client, model, provider, template_guide)。"""
    client = create_llm_client(config, provider=llm_provider)

    provider = str(getattr(client, "provider", "gemini")).lower().strip()
    if llm_model and str(llm_model).strip():
        model = str(llm_model).strip()
    elif provider == "deepseek":
        model = config.get("deepseek_model", "deepseek-v4-pro")
    elif provider == "mimo":
        model = config.get("mimo_model", "mimo-v2-pro")
    else:
        model = config.get("gemini_model", "gemini-2.0-flash")

    image_style = config.get("image_style", "简洁线条插画风格，无背景，无文字")
    template_guide = generate_ai_prompt_guide(image_style, include_examples=False)
    return client, model, provider, template_guide
