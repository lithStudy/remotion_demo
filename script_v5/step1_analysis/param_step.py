import json
import sys
from pathlib import Path

# 确保 script_v5 在模块搜索路径中
_SCRIPT_V5 = str(Path(__file__).resolve().parent.parent)
if _SCRIPT_V5 not in sys.path:
    sys.path.insert(0, _SCRIPT_V5)

from template_registry import _format_schema_node  # noqa: E402
from utils.gemini_utils import generate_with_retry, parse_json_from_response
from .prompt_loader import load_prompt, render_prompt


def ensure_item_param_has_content(item: dict) -> None:
    """Step3 后兜底：模型可能漏掉 content（尤其 TEXT_FOCUS 的 schema 未列 content 时）。"""
    param = item.get("param")
    if not isinstance(param, dict):
        item["param"] = {}
        param = item["param"]
    content = param.get("content")
    has_nonempty = (
        isinstance(content, list)
        and any(
            isinstance(ci, dict) and str(ci.get("text", "")).strip()
            for ci in content
        )
    )
    if has_nonempty:
        return
    t = item.get("text", "")
    if isinstance(t, str) and t.strip():
        param["content"] = [{"text": t.strip()}]
        return
    cs = param.get("coreSentence")
    if isinstance(cs, str) and cs.strip():
        param["content"] = [{"text": cs.strip()}]


def analyze_param_for_item(
    client,
    model: str,
    scene_text: str,
    item: dict,
    template_registry: dict,
    append_ai_log=None,
) -> dict:
    item_text = item.get("text", "")
    template_name = item.get("template", "CENTER_FOCUS")
    tmpl_info = template_registry.get(template_name, template_registry.get("CENTER_FOCUS", {}))

    # 生成可读性更好的 schema 说明（替代原始 JSON dump）
    schema = tmpl_info.get("param_schema", {})
    if schema:
        schema_lines: list[str] = []
        for field, node in schema.items():
            if isinstance(node, dict):
                schema_lines.extend(_format_schema_node(field, node, indent=0))
        schema_str = "\n".join(schema_lines)
    else:
        schema_str = "（无额外参数）"
    # 将 content 条数限制附加到 schema_str，让模型感知上下界
    cmin = tmpl_info.get("content_min_items")
    cmax = tmpl_info.get("content_max_items")
    if cmin is not None or cmax is not None:
        hints = []
        if cmin is not None:
            hints.append(f"content 至少 {cmin} 条")
        if cmax is not None:
            hints.append(f"content 至多 {cmax} 条（超出会被校验器告警）")
        schema_str += f"\n\n// content 条数限制：{'；'.join(hints)}"
    example_str = json.dumps(tmpl_info.get("example", {}), ensure_ascii=False, indent=2)
    content_str = json.dumps(item.get("content", []), ensure_ascii=False, indent=2)

    prompt_template = load_prompt("param_step.md")
    prompt = render_prompt(
        prompt_template,
        {
            "SCENE_TEXT": scene_text,
            "ITEM_TEXT": item_text,
            "TEMPLATE_NAME": template_name,
            "SCHEMA_STR": schema_str,
            "EXAMPLE_STR": example_str,
            "CONTENT_STR": content_str,
        },
    )
    try:
        resp = generate_with_retry(client, model, prompt, append_ai_log=append_ai_log)
        res_json = parse_json_from_response(resp.text)
        item["param"] = res_json.get("param", {})
        # 注入预拆分的 content
        if "content" in item:
            item["param"]["content"] = item["content"]
    except Exception as e:
        print(f"   ❌ 解析 Item {item.get('order')} ({template_name}) 的 param 彻底失败: {e}")
        item["param"] = {"content": item.get("content", [{"text": item_text}]), "anchors": []}

    ensure_item_param_has_content(item)
    return item
