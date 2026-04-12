"""
场景脚本中与口播 content 时间轴、锚点清洗相关的共用逻辑。

- Step1：仅归一化 content 为 {"text"} 并清洗 param 锚点（不写 startFrame/durationFrames）。
- Step3：按音频覆盖时间轴（见 step3_generate_audio.upgrade_content_with_timing）。
- Step4：若检测到尚未有音频时间轴，在内存中按文案长度注入预览帧（不写回 JSON）。
"""

from __future__ import annotations

from utils import extract_content_text


def sanitize_anchors(param: dict, content_len: int, item_order) -> list[dict]:
    """校验并清洗 param.anchors，丢弃非法条目，返回有效列表。"""
    anchors = param.get("anchors", [])
    if not isinstance(anchors, list):
        print(f"   ⚠️ item order={item_order} 的 anchors 非数组，已清空")
        return []

    valid = []
    for idx, anchor_item in enumerate(anchors):
        if not isinstance(anchor_item, dict):
            print(f"   ⚠️ item order={item_order} anchors[{idx}] 非对象，已丢弃")
            continue
        anchor_text = str(anchor_item.get("text", "")).strip()
        show_from = anchor_item.get("showFrom")
        if not anchor_text:
            print(f"   ⚠️ item order={item_order} anchors[{idx}] 缺少 text，已丢弃")
            continue
        if not isinstance(show_from, int) or show_from < 0 or show_from >= content_len:
            print(f"   ⚠️ item order={item_order} anchors[{idx}].showFrom 非法，已丢弃")
            continue
        valid.append({
            "text": anchor_text,
            "showFrom": show_from,
            "color": anchor_item.get("color"),
            "anim": anchor_item.get("anim"),
            "audioEffect": anchor_item.get("audioEffect"),
        })
    return valid


def core_sentence_text_for_anchor_match(param: dict) -> str:
    """TEXT_FOCUS：将 param.coreSentence（string[]）规范为一段连续文本，用于锚点子串校验。"""
    cs = param.get("coreSentence", "")
    if not isinstance(cs, list):
        return ""
    return "".join(str(x).strip() for x in cs)


def sanitize_core_sentence_anchors(param: dict, item_order) -> list[dict]:
    """TEXT_FOCUS：校验并清洗 param.coreSentenceAnchors，丢弃非法条目。"""
    raw = param.get("coreSentenceAnchors", [])
    if not isinstance(raw, list):
        print(f"   ⚠️ item order={item_order} 的 coreSentenceAnchors 非数组，已清空")
        return []

    core_sentence = core_sentence_text_for_anchor_match(param)
    valid: list[dict] = []
    for idx, entry in enumerate(raw):
        if not isinstance(entry, dict):
            print(f"   ⚠️ item order={item_order} coreSentenceAnchors[{idx}] 非对象，已丢弃")
            continue
        phrase = str(entry.get("coreSentenceAnchor", "")).strip()
        if not phrase:
            print(f"   ⚠️ item order={item_order} coreSentenceAnchors[{idx}] 缺少 coreSentenceAnchor，已丢弃")
            continue
        if core_sentence and phrase not in core_sentence:
            print(
                f"   ⚠️ item order={item_order} coreSentenceAnchors[{idx}] "
                f"不在 coreSentence 内，已丢弃"
            )
            continue
        out: dict = {"coreSentenceAnchor": phrase}
        if "color" in entry:
            out["color"] = entry.get("color")
        valid.append(out)
    return valid


def apply_param_anchors_sanitization(item: dict) -> None:
    """根据模板与当前 content 条数，写入清洗后的 anchors / coreSentenceAnchors。"""
    param = item.get("param", {})
    if not isinstance(param, dict):
        item["param"] = {}
        param = item["param"]

    content = item.get("content", [])
    if not isinstance(content, list):
        content = []
    content_len = len(content)
    template = item.get("template", "")
    order = item.get("order", "?")

    if template == "TEXT_FOCUS":
        param.pop("anchors", None)
        param["coreSentenceAnchors"] = sanitize_core_sentence_anchors(param, order)
    else:
        param["anchors"] = sanitize_anchors(param, content_len, order)


def normalize_content_text_only(scene_scripts: dict) -> None:
    """将每条 content 归一为仅含文案的对象，去掉 startFrame / durationFrames 等。"""
    for scene in scene_scripts.get("scenes", []):
        for item in scene.get("items", []):
            content = item.get("content", [])
            if not isinstance(content, list) or not content:
                continue
            item["content"] = [
                {"text": extract_content_text(ci)}
                for ci in content
            ]


def finalize_step1_content_and_anchors(scene_scripts: dict) -> None:
    """Step1：content 仅保留 text + 清洗锚点（无时间轴）。"""
    normalize_content_text_only(scene_scripts)
    for scene in scene_scripts.get("scenes", []):
        for item in scene.get("items", []):
            item.pop("totalDurationFrames", None)
            apply_param_anchors_sanitization(item)


def inject_text_length_content_timings(scene_scripts: dict, fps: int, config: dict) -> None:
    """
    按文案长度注入 startFrame / durationFrames 与 item.totalDurationFrames，并再次清洗锚点。
    与原先 Step1 的 _inject_preview_timings 算法一致。
    """
    min_frames = int(config.get("preview_min_duration_frames", max(1, fps)))
    frames_per_char = float(config.get("preview_frames_per_char", 2.2))

    for scene in scene_scripts.get("scenes", []):
        for item in scene.get("items", []):
            param = item.get("param", {})
            if not isinstance(param, dict):
                item["param"] = {}
                param = item["param"]

            content = item.get("content", [])
            if not isinstance(content, list) or not content:
                continue

            upgraded_content = []
            cursor = 0
            for content_item in content:
                text = extract_content_text(content_item)
                text_len = max(1, len(text.strip()))
                duration_frames = max(min_frames, int(round(text_len * frames_per_char)))
                upgraded_content.append(
                    {
                        "text": text,
                        "startFrame": cursor,
                        "durationFrames": duration_frames,
                    }
                )
                cursor += duration_frames

            item["content"] = upgraded_content
            template = item.get("template", "")
            if template == "TEXT_FOCUS":
                param.pop("anchors", None)
                param["coreSentenceAnchors"] = sanitize_core_sentence_anchors(
                    param, item.get("order", "?")
                )
            else:
                param["anchors"] = sanitize_anchors(
                    param, len(upgraded_content), item.get("order", "?")
                )
            item["totalDurationFrames"] = max(cursor, min_frames)


def needs_text_length_timings_from_scripts(scripts_data: dict) -> bool:
    """
    若首场景、首个 item 的首条 content 上缺少完整的 int 型 startFrame 与 durationFrames，
    视为尚未执行 Step3 音频时间轴处理，Step4 需按文案长度在内存中补全。
    """
    scenes = scripts_data.get("scenes")
    if not isinstance(scenes, list) or not scenes:
        return False
    first_scene = scenes[0]
    if not isinstance(first_scene, dict):
        return False
    items = first_scene.get("items")
    if not isinstance(items, list) or not items:
        return False
    first_item = items[0]
    if not isinstance(first_item, dict):
        return False
    content = first_item.get("content")
    if not isinstance(content, list) or not content:
        return False
    first = content[0]
    if isinstance(first, str):
        return True
    if not isinstance(first, dict):
        return True
    sf = first.get("startFrame")
    df = first.get("durationFrames")
    if isinstance(sf, int) and isinstance(df, int):
        return False
    return True
