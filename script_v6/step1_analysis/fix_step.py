import json

from utils.llm_utils import generate_with_retry, parse_json_from_response
from .prompt_loader import load_prompt, render_prompt


def gemini_fix_after_warnings(
    client,
    model: str,
    text: str,
    draft: dict,
    warnings: list[str],
    template_guide: str,
    append_ai_log=None,
) -> dict:
    """校验告警后的单次修订调用；不得改写 item.content 内原文。"""
    prompt_template = load_prompt("fix_after_warnings.md")
    fix_prompt = render_prompt(
        prompt_template,
        {
            "TEXT": text,
            "WARNINGS": json.dumps(warnings, ensure_ascii=False, indent=2),
            "DRAFT": json.dumps(draft, ensure_ascii=False, indent=2),
            "TEMPLATE_GUIDE": template_guide,
        },
    )
    resp = generate_with_retry(client, model, fix_prompt, append_ai_log=append_ai_log)
    return parse_json_from_response(resp.text)
