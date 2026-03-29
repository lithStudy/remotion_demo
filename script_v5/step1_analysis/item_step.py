import json

from utils.gemini_utils import generate_with_retry, parse_json_from_response
from .prompt_loader import load_prompt, render_prompt
from utils import split_text_to_content

def _default_group_key(order: int) -> str:
    return f"solo_{order}"


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
    if "text" not in scene or not scene["text"].strip():
        raise ValueError("scene['text'] 不能为空")
    scene_text = scene["text"]
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
    resp = generate_with_retry(client, model, prompt, append_ai_log=append_ai_log)
    res_json = parse_json_from_response(resp.text)
    items = res_json.get("items", [])
    if not items:
        raise RuntimeError(f"❌ Scene {scene.get('sceneId')} 分镜阶段失败，未能生成有效 items。")

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
    resp = generate_with_retry(client, model, prompt, append_ai_log=append_ai_log)
    res_json = parse_json_from_response(resp.text)
    matched_items = res_json.get("items", [])
    if not matched_items:
        raise RuntimeError(f"❌ Scene {scene.get('sceneId')} 模板匹配阶段失败，未能生成有效 items，阻止继续。")

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

    # 拆分字幕长度，并设置序号
    for idx, item in enumerate(matched_items):
        item["content"] = split_text_to_content(item.get("text", ""))
        item["order"] = idx + 1

    scene["items"] = matched_items
    return scene
