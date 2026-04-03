#!/usr/bin/env python3
"""
Step 1: 口播文案分析（模板驱动 v3）
将口播文案拆解为场景脚本 JSON，AI 分三步处理：
1) 场景拆分 2) Item 模板选型 3) Item 参数细化。

用法：
  python step1_analyze_script.py --input 文案.txt --output output_dir --name video_name
"""

import argparse
import json
import re
import shutil
import sys
from pathlib import Path

from scene_script_validate import validate_and_normalize_scene_scripts
from step1_analysis import (
    analyze_items_for_scene,
    analyze_param_for_item,
    analyze_scenes,
    gemini_fix_after_warnings,
)
from template_registry import TEMPLATE_REGISTRY, generate_ai_prompt_guide
from utils import AiLogger, load_config, load_env
from validation_errors import ScriptValidationError

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
if hasattr(sys.stderr, "reconfigure"):
    sys.stderr.reconfigure(encoding="utf-8", errors="replace")


# ─────────────────────────────────────────────────────────────
# 质量指标收集
# ─────────────────────────────────────────────────────────────

def _looks_like_list_intro_without_points(text: str, next_text: str | None = None) -> bool:
    normalized = str(text or "").strip()
    if not normalized:
        return False

    has_count_hint = any(token in normalized for token in ("两个", "两点", "三个", "三点", "四个", "四点"))
    has_explicit_points = bool(
        re.search(r"(第一|第二|第三|一是|二是|三是|1[、\.]|2[、\.]|3[、\.])", normalized)
    )
    next_has_explicit_points = bool(
        next_text
        and re.search(r"^\s*(第一|第二|第三|一是|二是|三是|1[、\.]|2[、\.]|3[、\.])", str(next_text))
    )
    return has_count_hint and not has_explicit_points and (
        normalized.endswith(("：", ":")) or next_has_explicit_points
    )


def _collect_template_quality_metrics(scenes: list[dict]) -> dict:
    mixed_group_scenes: list[str] = []
    total_step_list = 0
    single_point_step_list = 0
    suspicious_list_multi_group_items: list[str] = []
    total_items = 0

    for scene in scenes:
        scene_id = scene.get("sceneId", "?")
        items = scene.get("items", [])
        total_items += len(items)

        for idx, item in enumerate(items):
            if item.get("template") != "STEP_LIST":
                if item.get("template") == "LIST_MULTI_GROUP":
                    next_text = items[idx + 1].get("text", "") if idx + 1 < len(items) else ""
                    if _looks_like_list_intro_without_points(item.get("text", ""), next_text):
                        suspicious_list_multi_group_items.append(
                            f"{scene_id}#order={item.get('order', idx + 1)}"
                        )
                continue
            total_step_list += 1
            content = item.get("content", [])
            if isinstance(content, list) and len(content) <= 1:
                single_point_step_list += 1

        group_templates: dict[str, set[str]] = {}
        for item in items:
            gk = item.get("groupKey")
            if not isinstance(gk, str) or not gk.strip():
                continue
            t = item.get("template")
            if not isinstance(t, str) or not t.strip():
                continue
            group_templates.setdefault(gk, set()).add(t)
        if any(len(tset) > 1 for tset in group_templates.values()):
            mixed_group_scenes.append(scene_id)

    single_step_ratio = (
        (single_point_step_list / total_step_list) if total_step_list > 0 else 0.0
    )
    return {
        "total_items": total_items,
        "total_step_list": total_step_list,
        "single_point_step_list": single_point_step_list,
        "single_step_ratio": single_step_ratio,
        "mixed_group_scenes": mixed_group_scenes,
        "suspicious_list_multi_group_items": suspicious_list_multi_group_items,
    }


# ─────────────────────────────────────────────────────────────
# 清理 / 资源管理
# ─────────────────────────────────────────────────────────────

def _cleanup_related_resources(video_name: str, output_dir: Path, config: dict, script_dir: Path) -> None:
    """Step1 执行前清理与当前视频相关的历史产物，避免旧资源干扰新生成结果。"""
    project_root = Path(config.get("project_root", script_dir.parent))
    scenes_dir = project_root / "src" / "remotions" / video_name / "scenes"
    images_dir = project_root / "public" / "images" / video_name
    audio_dir = project_root / "public" / "audio" / video_name

    output_script_path = output_dir / "scene-scripts.json"
    cleanup_targets = [scenes_dir, images_dir, audio_dir]
    if output_script_path != cleanup_targets[0]:
        cleanup_targets.append(output_script_path)

    print("\n🧹 Step1 预清理相关资源...")
    removed_any = False
    for target in cleanup_targets:
        if target.is_dir():
            shutil.rmtree(target)
            print(f"   ✅ 已删除目录: {target}")
            removed_any = True
            continue
        if target.is_file():
            target.unlink()
            print(f"   ✅ 已删除文件: {target}")
            removed_any = True

    if not removed_any:
        print("   ℹ️ 未发现可清理的历史资源")


# ─────────────────────────────────────────────────────────────
# 预览时间轴注入
# ─────────────────────────────────────────────────────────────

def _sanitize_anchors(param: dict, content_len: int, item_order) -> list[dict]:
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


def _sanitize_core_sentence_anchors(param: dict, item_order) -> list[dict]:
    """TEXT_FOCUS：校验并清洗 param.coreSentenceAnchors，丢弃非法条目。"""
    raw = param.get("coreSentenceAnchors", [])
    if not isinstance(raw, list):
        print(f"   ⚠️ item order={item_order} 的 coreSentenceAnchors 非数组，已清空")
        return []

    core_sentence = str(param.get("coreSentence", "") or "")
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


def _inject_preview_timings(scene_scripts: dict, fps: int, config: dict) -> None:
    """
    为 Step1 结果注入默认时间轴，避免无音频预览时字幕重叠。
    Step3 会在生成真实音频后覆盖这些字段。
    """
    from utils import extract_content_text

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
                param["coreSentenceAnchors"] = _sanitize_core_sentence_anchors(
                    param, item.get("order", "?")
                )
            else:
                param["anchors"] = _sanitize_anchors(
                    param, len(upgraded_content), item.get("order", "?")
                )
            item["totalDurationFrames"] = max(cursor, min_frames)


def _cover_methodology_steps_from_config(config: dict) -> list[str] | None:
    raw = config.get("cover_methodology_steps")
    if not isinstance(raw, list):
        return None
    out: list[str] = []
    for x in raw:
        if isinstance(x, str) and x.strip():
            out.append(x.strip())
    return out if out else None


def _inject_cover_for_step4(
    result: dict,
    video_name: str,
    config: dict,
) -> None:
    """
    为 step4 的 StaticCover 片头写入顶层 cover（若尚无有效 cover）。
    - title：优先使用命令行/配置的成片名 video_name；若为空则用 topic 截断作兜底。
    - subtitle：使用 Step1 产出的 topic。
    - durationFrames / themeColor / badge / seriesLabel / seriesLabelEn /
      methodologySteps / methodologyStepsEn：来自 config.json（可选）。
    若 cover_duration_frames<=0 或未配置为生成，则不写入 cover。
    """
    existing = result.get("cover")
    if isinstance(existing, dict):
        try:
            dur = int(existing.get("durationFrames", 0))
        except (TypeError, ValueError):
            dur = 0
        t = str(existing.get("title", "") or "").strip()
        s = str(existing.get("subtitle", "") or "").strip()
        if dur > 0 and t and s:
            if not str(existing.get("seriesLabel", "") or "").strip():
                series_label = config.get("cover_series_label")
                if isinstance(series_label, str) and series_label.strip():
                    existing["seriesLabel"] = series_label.strip()
            if not str(existing.get("seriesLabelEn", "") or "").strip():
                en = config.get("cover_series_label_en")
                if isinstance(en, str) and en.strip():
                    existing["seriesLabelEn"] = en.strip()
            ms = existing.get("methodologySteps")
            if not isinstance(ms, list) or not any(
                isinstance(x, str) and x.strip() for x in ms
            ):
                parsed = _cover_methodology_steps_from_config(config)
                if parsed:
                    existing["methodologySteps"] = parsed
            if not str(existing.get("methodologyStepsEn", "") or "").strip():
                mse = config.get("cover_methodology_steps_en")
                if isinstance(mse, str) and mse.strip():
                    existing["methodologyStepsEn"] = mse.strip()
            return

    topic = str(result.get("topic", "") or "").strip()
    if not topic:
        return

    try:
        duration = int(config.get("cover_duration_frames", 5))
    except (TypeError, ValueError):
        duration = 5
    if duration <= 0:
        return

    title = str(video_name or "").strip() or topic[:40]

    cover: dict = {
        "durationFrames": duration,
        "title": title,
        "subtitle": topic,
    }
    tc = config.get("cover_theme_color")
    if isinstance(tc, str) and tc.strip():
        cover["themeColor"] = tc.strip()
    badge = config.get("cover_badge")
    if isinstance(badge, str) and badge.strip():
        cover["badge"] = badge.strip()
    series_label = config.get("cover_series_label")
    if isinstance(series_label, str) and series_label.strip():
        cover["seriesLabel"] = series_label.strip()
    series_label_en = config.get("cover_series_label_en")
    if isinstance(series_label_en, str) and series_label_en.strip():
        cover["seriesLabelEn"] = series_label_en.strip()
    parsed_steps = _cover_methodology_steps_from_config(config)
    if parsed_steps:
        cover["methodologySteps"] = parsed_steps
    methodology_steps_en = config.get("cover_methodology_steps_en")
    if isinstance(methodology_steps_en, str) and methodology_steps_en.strip():
        cover["methodologyStepsEn"] = methodology_steps_en.strip()

    result["cover"] = cover


def _merge_dash_only_captions(scene_scripts: dict) -> None:
    """
    合并仅包含破折号的字幕条目（例如单独一条 "—"）。
    典型场景：上一条已以 "—" 结尾，下一条又只有 "—"，不应拆为两段字幕。
    规则：若 content[i].text 仅由 -/–/— 及空白组成，则合并到上一条：
    - 延长上一条 durationFrames 覆盖当前条目
    - 文本默认不追加（避免出现重复 "——"），除非上一条不以破折号结尾
    """
    dash_only_re = re.compile(r"^\s*[-–—]+\s*$")

    for scene in scene_scripts.get("scenes", []):
        for item in scene.get("items", []):
            content = item.get("content", [])
            if not isinstance(content, list) or len(content) < 2:
                continue

            merged: list[dict] = []
            for entry in content:
                if not isinstance(entry, dict):
                    merged.append(entry)
                    continue

                text = str(entry.get("text", ""))
                if dash_only_re.match(text) and merged:
                    prev = merged[-1]
                    if isinstance(prev, dict):
                        prev_text = str(prev.get("text", ""))
                        dash = text.strip() or "—"
                        if not prev_text.rstrip().endswith(("-", "–", "—")):
                            prev["text"] = prev_text + dash

                        # 延长上一条的时长，覆盖当前破折号条目
                        prev_start = prev.get("startFrame")
                        prev_dur = prev.get("durationFrames")
                        cur_start = entry.get("startFrame")
                        cur_dur = entry.get("durationFrames")
                        if (
                            isinstance(prev_start, int)
                            and isinstance(prev_dur, int)
                            and isinstance(cur_start, int)
                            and isinstance(cur_dur, int)
                        ):
                            prev_end = prev_start + prev_dur
                            cur_end = cur_start + cur_dur
                            new_end = max(prev_end, cur_end)
                            prev["durationFrames"] = max(1, new_end - prev_start)
                    # 丢弃当前仅破折号条目
                    continue

                merged.append(entry)

            item["content"] = merged


# ─────────────────────────────────────────────────────────────
# AI 分析管线（拆分为职责单一的子函数）
# ─────────────────────────────────────────────────────────────

def _run_ai_analysis_pipeline(
    client,
    model: str,
    text: str,
    template_guide: str,
    ai_logger: AiLogger | None,
) -> dict:
    """
    纯 AI 编排：依次执行场景拆分、Item 分镜+模板匹配、Item 参数细化三个阶段。
    返回带有 scenes / topic 等字段的原始结果字典。
    """
    append_log = ai_logger.append if ai_logger else None

    # 阶段 1：场景拆分
    result = analyze_scenes(client, model, text, append_ai_log=append_log)
    scenes = result.get("scenes", [])
    print(f"   ✅ [Step 1/3] 完成，拆解为 {len(scenes)} 个 Scene。")

    # 阶段 2：两阶段 Item 分析（2A 分镜 + 2B 模板匹配）
    print("   [Step 2/3] 正在两阶段拆解 Items（2A 分镜 + 2B 模板匹配）...")
    topic = result.get("topic", "未命名主题")
    for scene in scenes:
        analyze_items_for_scene(
            client, model, topic, scene, template_guide, append_ai_log=append_log
        )

    total_items = sum(len(s.get("items", [])) for s in scenes)
    print(f"   ✅ [Step 2/3] 完成，共拆解为 {total_items} 个 Item。")
    quality_metrics = _collect_template_quality_metrics(scenes)
    print(
        "   📏 [Step 2 质量指标] "
        f"STEP_LIST={quality_metrics['total_step_list']}, "
        f"单条STEP_LIST={quality_metrics['single_point_step_list']} "
        f"({quality_metrics['single_step_ratio']:.0%})"
    )
    if quality_metrics["mixed_group_scenes"]:
        print(
            "   ⚠️ [Step 2 质量告警] 存在同组模板混搭场景: "
            f"{quality_metrics['mixed_group_scenes']}"
        )
    if quality_metrics["suspicious_list_multi_group_items"]:
        print(
            "   ⚠️ [Step 2 质量告警] 存在疑似总起句误判为 LIST_MULTI_GROUP的 item: "
            f"{quality_metrics['suspicious_list_multi_group_items']}"
        )

    # 阶段 3：逐 Item 参数细化
    print("   [Step 3/3] 正在循环拆解 Text 与 Anchors...")
    for scene in scenes:
        scene_text_full = scene.get("text", "")
        for item in scene.get("items", []):
            # 清除 Step2 可能产生的冗余 AI 注入字段，确保 Step3 参数纯净
            allowed_keys = {"order", "narrativeType", "reasoning", "template", "text", "groupKey", "content"}
            for rk in [k for k in list(item.keys()) if k not in allowed_keys]:
                item.pop(rk)

            analyze_param_for_item(
                client,
                model,
                scene_text_full,
                item,
                TEMPLATE_REGISTRY,
                append_ai_log=append_log,
            )

    print("   ✅ [Step 3/3] 完成。")
    return result


def _cleanup_intermediate_fields(result: dict) -> None:
    """清理场景级原文与 item 上的临时 text；口播保留在 item.content。"""
    for scene in result.get("scenes", []):
        scene.pop("text", None)
        for item in scene.get("items", []):
            item.pop("text", None)
            param = item.get("param")
            if isinstance(param, dict):
                param.pop("content", None)
                param.pop("totalDurationFrames", None)


def _validate_and_auto_fix(
    result: dict,
    client,
    model: str,
    text: str,
    template_guide: str,
    config: dict,
    ai_logger: AiLogger | None,
) -> dict:
    """
    对 AI 结果执行校验；若存在告警且配置允许，则调用模型自动修订一次。
    返回最终（可能已修订）的结果字典。
    """
    append_log = ai_logger.append if ai_logger else None
    default_tmpl = config.get("default_template", "CENTER_FOCUS")

    _, v_warnings = validate_and_normalize_scene_scripts(
        result, TEMPLATE_REGISTRY, default_template=default_tmpl
    )
    hard = [w for w in v_warnings if not (isinstance(w, str) and w.startswith("[ADVISORY]"))]
    if v_warnings:
        print("\n⚠️ 脚本校验与归一化（请人工复核）：")
        for w in v_warnings:
            print(f"   {w}")

    retry_enabled = config.get("step1_retry_on_validate_warnings", True)
    if not v_warnings:
        return result
    # 仅 advisory 告警时，不应阻断流程；是否自动修订由 retry_enabled 决定
    if not hard and not retry_enabled:
        return result
    # 存在 hard 告警且禁用自动修订：严格失败
    if hard and not retry_enabled:
        raise ScriptValidationError(
            "脚本校验存在告警且已禁用自动修订（严格模式：直接失败）",
            path="scene-scripts",
        )

    print("\n🔄 根据校验告警尝试自动修订（最多 1 次）…")
    try:
        # 记录原始口播分句，防止模型在修订阶段篡改
        orig_contents: dict[tuple, list] = {}
        for s in result.get("scenes", []):
            sid = s.get("sceneId")
            for it in s.get("items", []):
                oc = it.get("content", [])
                orig_contents[(sid, it.get("order"))] = list(oc) if isinstance(oc, list) else []

        fixed = gemini_fix_after_warnings(
            client, model, text, result, v_warnings, template_guide, append_ai_log=append_log
        )
        fixed["fps"] = result.get("fps")

        # 恢复 item.content
        for s in fixed.get("scenes", []):
            sid = s.get("sceneId")
            for it in s.get("items", []):
                key = (sid, it.get("order"))
                if key in orig_contents:
                    it["content"] = orig_contents[key]

        _, w2 = validate_and_normalize_scene_scripts(
            fixed, TEMPLATE_REGISTRY, default_template=default_tmpl
        )
        advisory2 = [w for w in w2 if isinstance(w, str) and w.startswith("[ADVISORY]")]
        hard2 = [w for w in w2 if not (isinstance(w, str) and w.startswith("[ADVISORY]"))]
        if hard2:
            print("❌ 修订后仍有告警（严格模式：停止）：")
            for w in w2:
                print(f"   {w}")
            raise ScriptValidationError(
                "自动修订后仍存在校验告警（严格模式：直接失败）",
                path="scene-scripts",
            )
        if advisory2:
            print("✅ 修订后硬性校验通过；仍有语义建议告警（不阻断）：")
            for w in advisory2:
                print(f"   {w}")
        else:
            print("✅ 修订后校验无告警。")
        return fixed

    except (ValueError, json.JSONDecodeError) as ex:
        raise ScriptValidationError(f"自动修订失败（JSON解析/格式错误）: {ex}", path="step1.auto_fix")
    except ScriptValidationError:
        raise
    except Exception as ex:
        raise ScriptValidationError(f"自动修订失败: {ex}", path="step1.auto_fix")


def analyze_with_gemini(text: str, config: dict, ai_logger: AiLogger | None) -> dict:
    """
    调用 Gemini 对口播文案进行完整分析，返回场景脚本字典。
    编排 _run_ai_analysis_pipeline → _cleanup_intermediate_fields → _validate_and_auto_fix。
    """
    import os
    from google import genai

    api_key = os.environ.get("GEMINI_API_KEY", "")
    if not api_key:
        raise ValueError("未设置 GEMINI_API_KEY，请在 .env 中配置")

    client = genai.Client(api_key=api_key)
    model = config.get("gemini_model", "gemini-2.0-flash")
    fps = config.get("fps", 30)
    image_style = config.get("image_style", "简洁线条插画风格，无背景，无文字")

    # 模板选择阶段不提供示例，避免模型在 Step2 过拟合样例
    template_guide = generate_ai_prompt_guide(image_style, include_examples=False)

    print("\n" + "=" * 60)
    print("🤖 正在调用 Gemini 分析文案（分层次处理 v3）...")
    print("=" * 60 + "\n")

    result = _run_ai_analysis_pipeline(client, model, text, template_guide, ai_logger)
    _cleanup_intermediate_fields(result)
    result["fps"] = fps
    result = _validate_and_auto_fix(result, client, model, text, template_guide, config, ai_logger)

    return result


# ─────────────────────────────────────────────────────────────
# 主入口
# ─────────────────────────────────────────────────────────────

def main():
    parser = argparse.ArgumentParser(description="Step 1: 口播文案分析（模板驱动 v3）")
    parser.add_argument("--input", "-i", required=True, help="口播文案文件路径")
    parser.add_argument("--output", "-o", required=True, help="输出目录路径")
    parser.add_argument("--name", "-n", help="视频名称（英文，不填则读取 config.json）")
    args = parser.parse_args()

    script_dir = Path(__file__).parent
    load_env(script_dir)
    config = load_config(script_dir)

    input_path = Path(args.input)
    if not input_path.exists():
        print(f"❌ 文案文件不存在: {input_path}")
        return False

    video_name = args.name or config.get("package_name", "my_video")
    output_dir = Path(args.output)

    _cleanup_related_resources(video_name, output_dir, config, script_dir)

    ai_logger = AiLogger(output_dir, video_name)

    with open(input_path, "r", encoding="utf-8") as f:
        text = f.read().strip()

    if not text:
        print("❌ 文案内容为空")
        return False

    print(f"📄 读取文案: {len(text)} 字符")

    result = analyze_with_gemini(text, config, ai_logger)
    _inject_preview_timings(result, config.get("fps", 30), config)
    _merge_dash_only_captions(result)
    _inject_cover_for_step4(result, video_name, config)

    output_dir.mkdir(parents=True, exist_ok=True)
    output_path = output_dir / "scene-scripts.json"

    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(result, f, ensure_ascii=False, indent=2)

    # 统计信息
    scenes = result.get("scenes", [])
    total_items = sum(len(s.get("items", [])) for s in scenes)
    template_counts: dict[str, int] = {}
    for s in scenes:
        for it in s.get("items", []):
            t = it.get("template", "?")
            template_counts[t] = template_counts.get(t, 0) + 1

    print("\n✅ 文案分析完成!")
    print(f"   📦 视频名: {video_name}")
    print(f"   📊 主题: {result.get('topic', '未知')}")
    print(f"   🎬 场景数: {len(scenes)}")
    print(f"   📝 文案条目: {total_items}")
    print(f"   🎨 模板分布: {template_counts}")
    print(f"   💾 保存到: {output_path}")
    print(f"   🧾 AI日志: {ai_logger.path}")

    return True


if __name__ == "__main__":
    try:
        success = main()
        exit(0 if success else 1)
    except ScriptValidationError as e:
        print(f"\n❌ 校验失败: {e}")
        exit(1)
