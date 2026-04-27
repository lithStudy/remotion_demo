import json
import re

from utils.llm_utils import generate_with_retry, parse_json_from_response
from .prompt_loader import load_prompt, render_prompt
from utils import split_text_to_content

def _default_group_key(order: int) -> str:
    return f"solo_{order}"


def _confidence_level(value) -> str:
    """
    统一 joint 输出的置信度格式：low | medium | high
    允许模型返回: low/medium/high 或 0~1 数值。
    """
    if isinstance(value, str):
        v = value.strip().lower()
        if v in ("low", "medium", "high"):
            return v
    if isinstance(value, (int, float)):
        if value < 0.4:
            return "low"
        if value < 0.75:
            return "medium"
        return "high"
    return "medium"


def _looks_directional_upgrade(text: str) -> bool:
    t = str(text or "")
    # 方向性/纠偏/升级表达：更像 CognitiveShift/DosAndDonts，而非中立 SplitCompare
    return any(token in t for token in ("升级为", "而不是", "不再", "别再", "应该", "要…才", "要...才", "要才"))


def _looks_concept_naming(text: str) -> bool:
    t = str(text or "")
    return bool(re.search(r"(这叫|叫做|称为|我们把它叫|这就是)", t))


def _looks_quote_contrast(text: str) -> bool:
    t = str(text or "")
    # 两个及以上中文引号对，常见于“安全到达”vs“机毁人亡”这类对照
    return t.count("“") >= 2 and t.count("”") >= 2


def _collect_joint_refine_reasons(items: list[dict]) -> list[str]:
    reasons: list[str] = []

    for idx, it in enumerate(items):
        if not isinstance(it, dict):
            continue
        text = str(it.get("text", ""))
        tmpl = str(it.get("template", "")).strip()
        conf = _confidence_level(it.get("confidence"))

        if conf == "low":
            reasons.append(f"low_confidence: order={idx+1} 模型自评低置信度，需更原子化切分或更换模板")

        if tmpl == "SPLIT_COMPARE" and _looks_directional_upgrade(text):
            reasons.append(f"directional_vs_split_compare: order={idx+1} 文案是升级/纠偏导向，但模板为 SPLIT_COMPARE（中立并列），建议改为 COGNITIVE_SHIFT 或 DOS_AND_DONTS 或拆分")

        if tmpl == "CENTER_FOCUS":
            # 文案有明显“对照 + 命名”混杂时，CENTER_FOCUS 往往承接不住
            if _looks_quote_contrast(text) and _looks_concept_naming(text):
                reasons.append(f"mixed_structures: order={idx+1} 同段同时出现对照引号+概念命名信号，需拆分成更原子化 item（概念命名 vs 对照/结论）")

    return reasons


def _joint_split_and_template(
    client,
    model: str,
    topic: str,
    scene: dict,
    template_guide: str,
    append_ai_log=None,
) -> list[dict]:
    """
    Joint Step2：一次性完成分镜 + 模板选型。
    """
    if "text" not in scene or not scene["text"].strip():
        raise ValueError("scene['text'] 不能为空")
    scene_text = scene["text"]
    scene_name = scene.get("sceneName", "未命名场景")

    prompt_template = load_prompt("item_joint_step.md")
    prompt = render_prompt(
        prompt_template,
        {
            "TOPIC": topic,
            "SCENE_NAME": scene_name,
            "SCENE_TEXT": scene_text,
            "TEMPLATE_GUIDE": template_guide,
        },
    )
    resp = generate_with_retry(client, model, prompt, append_ai_log=append_ai_log)
    res_json = parse_json_from_response(resp.text)
    items = res_json.get("items", [])
    if not items:
        raise RuntimeError(f"❌ Scene {scene.get('sceneId')} joint 分镜+选型失败，未能生成有效 items。")

    # 轻量清洗：确保关键字段存在
    cleaned = []
    for it in items:
        if not isinstance(it, dict):
            continue
        text = it.get("text")
        template = it.get("template")
        narrative_type = it.get("narrativeType")
        if not isinstance(text, str) or not text.strip():
            continue
        if not isinstance(template, str) or not template.strip():
            continue
        if not isinstance(narrative_type, str) or not narrative_type.strip():
            continue
        it["template"] = template.strip()
        it["narrativeType"] = narrative_type.strip()
        it["confidence"] = _confidence_level(it.get("confidence"))
        cleaned.append(it)

    if not cleaned:
        raise RuntimeError(f"❌ Scene {scene.get('sceneId')} joint 输出 items 无有效条目。")

    return cleaned


def _joint_refine_items(
    client,
    model: str,
    topic: str,
    scene: dict,
    template_guide: str,
    current_items: list[dict],
    refine_reasons: list[str],
    append_ai_log=None,
) -> list[dict]:
    """
    Joint refine：在不改写原文的前提下，按理由调整 item 边界/模板，最多调用一次。
    """
    scene_text = scene.get("text", "")
    scene_name = scene.get("sceneName", "未命名场景")

    prompt_template = load_prompt("item_joint_refine_step.md")
    prompt = render_prompt(
        prompt_template,
        {
            "TOPIC": topic,
            "SCENE_NAME": scene_name,
            "SCENE_TEXT": scene_text,
            "TEMPLATE_GUIDE": template_guide,
            "CURRENT_ITEMS": json.dumps(current_items, ensure_ascii=False, indent=2),
            "REFINE_REASONS": json.dumps(refine_reasons, ensure_ascii=False, indent=2),
        },
    )
    resp = generate_with_retry(client, model, prompt, append_ai_log=append_ai_log)
    res_json = parse_json_from_response(resp.text)
    items = res_json.get("items", [])
    if not items:
        raise RuntimeError(f"❌ Scene {scene.get('sceneId')} joint refine 失败，未能生成有效 items。")

    # 与 joint 首次输出一致：轻量清洗
    cleaned = []
    for it in items:
        if not isinstance(it, dict):
            continue
        text = it.get("text")
        template = it.get("template")
        narrative_type = it.get("narrativeType")
        if not isinstance(text, str) or not text.strip():
            continue
        if not isinstance(template, str) or not template.strip():
            continue
        if not isinstance(narrative_type, str) or not narrative_type.strip():
            continue
        it["template"] = template.strip()
        it["narrativeType"] = narrative_type.strip()
        it["confidence"] = _confidence_level(it.get("confidence"))
        cleaned.append(it)

    if not cleaned:
        raise RuntimeError(f"❌ Scene {scene.get('sceneId')} joint refine 输出 items 无有效条目。")

    return cleaned


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
    step2_mode: str = "joint",
) -> dict:
    """
    Step2 Item 分析入口：
    - joint：一次性完成分镜 + 模板选型（优先）
    - legacy：保留 2A 分镜 + 2B 选型（兜底/回滚）
    """
    scene_id = scene.get("sceneId", "?")

    matched_items: list[dict] = []

    if str(step2_mode).strip().lower() != "legacy":
        try:
            matched_items = _joint_split_and_template(
                client,
                model,
                topic,
                scene,
                template_guide,
                append_ai_log=append_ai_log,
            )
            print(
                f"      Scene {scene_id}: joint 分镜+选型完成 → {[it.get('template', '?') for it in matched_items]}"
            )

            refine_reasons = _collect_joint_refine_reasons(matched_items)
            if refine_reasons:
                matched_items = _joint_refine_items(
                    client,
                    model,
                    topic,
                    scene,
                    template_guide,
                    matched_items,
                    refine_reasons,
                    append_ai_log=append_ai_log,
                )
                print(
                    f"      Scene {scene_id}: joint refine 完成 → {[it.get('template', '?') for it in matched_items]}"
                )

        except Exception as ex:
            print(f"      Scene {scene_id}: ⚠️ joint 失败，回落 legacy（原因：{ex}）")
            matched_items = []

    if not matched_items:
        # legacy path：阶段 2A：分镜
        split_items = _split_scene_into_items(
            client, model, topic, scene, append_ai_log=append_ai_log
        )
        print(f"      Scene {scene_id}: 2A 分镜完成 → {len(split_items)} 个镜头")

        # legacy path：阶段 2B：模板匹配
        matched_items = _assign_templates_to_items(
            client, model, topic, scene, split_items, template_guide, append_ai_log=append_ai_log
        )
        print(f"      Scene {scene_id}: 2B 模板匹配完成 → {[it.get('template', '?') for it in matched_items]}")

        # legacy refine：模板语义不一致 / 低置信度（最多一次）
        refine_reasons = _collect_joint_refine_reasons(matched_items)
        if refine_reasons:
            matched_items = _joint_refine_items(
                client,
                model,
                topic,
                scene,
                template_guide,
                matched_items,
                refine_reasons,
                append_ai_log=append_ai_log,
            )
            print(f"      Scene {scene_id}: legacy→refine 完成 → {[it.get('template', '?') for it in matched_items]}")

    # 拆分字幕长度，并设置序号
    for idx, item in enumerate(matched_items):
        item["content"] = split_text_to_content(item.get("text", ""))
        item["order"] = idx + 1

    scene["items"] = matched_items
    return scene
