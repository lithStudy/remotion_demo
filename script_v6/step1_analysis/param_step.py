import json

from utils.llm_utils import generate_with_retry, parse_json_from_response
from .prompt_loader import load_prompt, render_prompt
from validation_errors import ScriptValidationError


def ensure_item_has_content(item: dict) -> None:
    """严格校验：要求 item.content 至少有一条有效口播。"""
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
    raise ScriptValidationError(
        "item.content 缺失或无有效 text（严格模式：不兜底回填）",
        order=item.get("order"),
        template=item.get("template"),
        path="item.content",
    )


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
    # 为提示词提供稳定的索引字段：CONTENT_STR 内每条口播都带 index
    content_indexed = []
    for idx, ci in enumerate(item.get("content", []) or []):
        if isinstance(ci, dict):
            content_indexed.append({"index": idx, **ci})
        else:
            content_indexed.append({"index": idx, "value": ci})
    content_str = json.dumps(content_indexed, ensure_ascii=False, indent=2)

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
    def _normalize_param_root(parsed):
        """LLM 偶发输出 JSON 数组或单元素包一层，统一成含 param 的 dict。"""
        if isinstance(parsed, dict):
            return parsed
        if isinstance(parsed, list):
            if len(parsed) == 1 and isinstance(parsed[0], dict):
                return parsed[0]
            for el in parsed:
                if isinstance(el, dict) and "param" in el:
                    return el
        return None

    try:
        resp = generate_with_retry(client, model, prompt, append_ai_log=append_ai_log)
        res_json = parse_json_from_response(resp.text)
        res_json = _normalize_param_root(res_json)
        if not isinstance(res_json, dict):
            raise ScriptValidationError(
                "LLM 返回的根节点非对象（expected { \"param\": ... }）",
                order=item.get("order"),
                template=template_name,
                path="item.param",
            )
        raw_param = res_json.get("param", {})
        if not isinstance(raw_param, dict):
            raise ScriptValidationError(
                "LLM 返回的 param 非对象",
                order=item.get("order"),
                template=template_name,
                path="item.param",
            )
        item["param"] = raw_param
    except Exception as e:
        if isinstance(e, ScriptValidationError):
            raise
        raise ScriptValidationError(
            f"解析 Item param 失败: {e}",
            order=item.get("order"),
            template=template_name,
            path="item.param",
        )

    ensure_item_has_content(item)
    return item
