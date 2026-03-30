import json

from utils.gemini_utils import generate_with_retry, parse_json_from_response
from .prompt_loader import load_prompt, render_prompt



def ensure_item_has_content(item: dict) -> None:
    """兜底：保证 item.content 至少有一条有效口播（程序切句或 item.text / coreSentence）。"""
    content = item.get("content")
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
        item["content"] = [{"text": t.strip()}]
        return
    param = item.get("param")
    if isinstance(param, dict):
        cs = param.get("coreSentence")
        if isinstance(cs, str) and cs.strip():
            item["content"] = [{"text": cs.strip()}]


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

    schema_str = json.dumps(tmpl_info.get("param_schema", {}), ensure_ascii=False, indent=2)
    # 将 content 条数限制附加到 schema_str，让模型感知上下界（口播在 item.content，非 param）
    cmin = tmpl_info.get("content_min_items")
    cmax = tmpl_info.get("content_max_items")
    if cmin is not None or cmax is not None:
        hints = []
        if cmin is not None:
            hints.append(f"口播分句（item.content）至少 {cmin} 条")
        if cmax is not None:
            hints.append(f"口播分句至多 {cmax} 条（超出会被校验器告警）")
        schema_str += f"\n\n// 口播条数（已由程序写入 CONTENT_STR，勿在 param 中输出 content）：{'；'.join(hints)}"
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
        raw_param = res_json.get("param", {})
        item["param"] = raw_param if isinstance(raw_param, dict) else {}
    except Exception as e:
        print(f"   ❌ 解析 Item {item.get('order')} ({template_name}) 的 param 彻底失败: {e}")
        item["param"] = {"anchors": []}

    ensure_item_has_content(item)
    return item
