import json

from .gemini_utils import generate_with_retry, parse_json_from_response
from .prompt_loader import load_prompt, render_prompt


def _default_group_key(order: int) -> str:
    return f"solo_{order}"


def _normalize_split_group_keys(items: list[dict]) -> None:
    for idx, item in enumerate(items):
        order = item.get("order", idx + 1)
        gk = item.get("groupKey")
        if not isinstance(gk, str) or not gk.strip():
            item["groupKey"] = _default_group_key(int(order))


def _inject_group_keys_from_split(
    matched_items: list[dict], split_items: list[dict]
) -> None:
    split_group_by_order: dict[int, str] = {}
    for idx, s_item in enumerate(split_items):
        order = int(s_item.get("order", idx + 1))
        gk = s_item.get("groupKey")
        split_group_by_order[order] = (
            gk if isinstance(gk, str) and gk.strip() else _default_group_key(order)
        )

    for idx, m_item in enumerate(matched_items):
        order = int(m_item.get("order", idx + 1))
        gk = m_item.get("groupKey")
        if isinstance(gk, str) and gk.strip():
            continue
        m_item["groupKey"] = split_group_by_order.get(order, _default_group_key(order))


def _split_scene_into_items(
    client,
    model: str,
    topic: str,
    scene: dict,
    append_ai_log=None,
) -> list[dict]:
    """
    Sub-step 2A：纯分镜阶段。
    只决定在哪里切分，输出含 narrativeRole / visualFocus / emotionTone / estimatedSeconds 等元数据。
    不涉及任何模板选型。
    """
    scene_text = scene.get("text", "")
    scene_name = scene.get("sceneName", "未命名场景")

    prompt_template = load_prompt("item_split_step.md")
    prompt = render_prompt(
        prompt_template,
        {
            "TOPIC": topic,
            "SCENE_NAME": scene_name,
            "SCENE_TEXT": scene_text,
        },
    )
    try:
        resp = generate_with_retry(client, model, prompt, append_ai_log=append_ai_log)
        res_json = parse_json_from_response(resp.text)
        items = res_json.get("items", [])
    except Exception as e:
        print(f"   ❌ Scene {scene.get('sceneId')} 分镜阶段失败: {e}，回退为单 item")
        items = [
            {
                "order": 1,
                "text": scene_text,
                "narrativeRole": "explain",
                "visualFocus": "场景内容",
                "emotionTone": "calm",
                "splitSignal": "strong",
                "estimatedSeconds": round(len(scene_text) / 4.5, 1),
                "reasoning": "分镜失败，回退为单 item",
            }
        ]

    # 确保 order 字段存在
    for idx, item in enumerate(items):
        if "order" not in item:
            item["order"] = idx + 1
    _normalize_split_group_keys(items)

    return items


def _assign_templates_to_items(
    client,
    model: str,
    topic: str,
    scene: dict,
    split_items: list[dict],
    template_guide: str,
    append_ai_log=None,
) -> list[dict]:
    """
    Sub-step 2B：模板匹配阶段。
    以分镜元数据为输入，通过决策树匹配最佳模板，附带全局连续性审查。
    """
    scene_name = scene.get("sceneName", "未命名场景")

    prompt_template = load_prompt("item_template_step.md")
    prompt = render_prompt(
        prompt_template,
        {
            "TOPIC": topic,
            "SCENE_NAME": scene_name,
            "SPLIT_ITEMS": json.dumps(split_items, ensure_ascii=False, indent=2),
            "TEMPLATE_GUIDE": template_guide,
        },
    )
    try:
        resp = generate_with_retry(client, model, prompt, append_ai_log=append_ai_log)
        res_json = parse_json_from_response(resp.text)
        matched_items = res_json.get("items", [])
    except Exception as e:
        print(f"   ❌ Scene {scene.get('sceneId')} 模板匹配阶段失败: {e}，回退为 CENTER_FOCUS")
        matched_items = [
            {
                "order": item.get("order", idx + 1),
                "narrativeType": "LOGIC",
                "reasoning": "模板匹配失败，回退为 CENTER_FOCUS",
                "template": "CENTER_FOCUS",
                "text": item.get("text", ""),
            }
            for idx, item in enumerate(split_items)
        ]

    # 确保 order 字段存在
    for idx, item in enumerate(matched_items):
        if "order" not in item:
            item["order"] = idx + 1
    _inject_group_keys_from_split(matched_items, split_items)

    return matched_items


def analyze_items_for_scene(
    client,
    model: str,
    topic: str,
    scene: dict,
    template_guide: str,
    append_ai_log=None,
) -> dict:
    """
    两阶段解耦的 Item 分析入口：
    1. Sub-step 2A：纯分镜（item_split_step.md）
    2. Sub-step 2B：模板匹配（item_template_step.md）
    """
    scene_id = scene.get("sceneId", "?")

    # 阶段 2A：分镜
    split_items = _split_scene_into_items(
        client, model, topic, scene, append_ai_log=append_ai_log
    )
    print(
        f"      Scene {scene_id}: 2A 分镜完成 → {len(split_items)} 个镜头"
    )

    # 阶段 2B：模板匹配
    matched_items = _assign_templates_to_items(
        client, model, topic, scene, split_items, template_guide, append_ai_log=append_ai_log
    )
    print(
        f"      Scene {scene_id}: 2B 模板匹配完成 → {[it.get('template', '?') for it in matched_items]}"
    )

    scene["items"] = matched_items
    return scene
