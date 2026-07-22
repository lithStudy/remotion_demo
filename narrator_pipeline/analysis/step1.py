#!/usr/bin/env python3
"""
Step 1: 口播文案分析（模板驱动 v3）
从 scene-split-draft.json（Step0 产出）继续：Item 分镜+模板匹配 → 参数细化 → scene-scripts.json。

用法（仓库根目录）:
  python -m narrator_pipeline.analysis.step1 --name video_name
  python -m narrator_pipeline.analysis.step1 --name video_name --skip-validate

分析与校验均以 Step0 草稿为准：分镜用各 scene.text；校验/自动修订对照文本
为草稿中 scene.text 按顺序拼接（不再读取 narrations/{name}.txt）。
"""

import argparse
import json
import re
import sys
from pathlib import Path

from narrator_pipeline.paths import PACKAGE_ROOT, resolve_video_paths
from narrator_pipeline.contracts.scene_script_validate import validate_and_normalize_scene_scripts
from narrator_pipeline.contracts.scene_timing import finalize_step1_content_and_anchors
from narrator_pipeline.common.pipeline_cleanup import cleanup_before_step1
from narrator_pipeline.contracts.scene_split_draft import load_scene_split_draft
from narrator_pipeline.analysis.stages import (
    analyze_items_for_scene,
    analyze_param_for_item,
    gemini_fix_after_warnings,
)
from narrator_pipeline.common.step_llm import create_llm_runtime
from narrator_pipeline.contracts.template_registry import TEMPLATE_REGISTRY
from narrator_pipeline.common import AiLogger, load_config, load_env
from narrator_pipeline.contracts.validation_errors import ScriptValidationError

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
if hasattr(sys.stderr, "reconfigure"):
    sys.stderr.reconfigure(encoding="utf-8", errors="replace")

# ─────────────────────────────────────────────────────────────
# 质量指标收集
# ─────────────────────────────────────────────────────────────

def _collect_template_quality_metrics(scenes: list[dict]) -> dict:
    mixed_group_scenes: list[str] = []
    total_step_list = 0
    single_point_step_list = 0
    total_items = 0

    for scene in scenes:
        scene_id = scene.get("sceneId", "?")
        items = scene.get("items", [])
        total_items += len(items)

        for item in items:
            if item.get("template") != "STEP_LIST":
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
    }


# ─────────────────────────────────────────────────────────────
# content 归一化与时间轴（无预览帧：见 scene_timing + Step4）
# ─────────────────────────────────────────────────────────────

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
    为 step4 的 LandscapeCoverPoster 片头写入顶层 cover（若尚无有效 cover）。
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

def _run_items_and_params_pipeline(
    client,
    model: str,
    result: dict,
    template_guide: str,
    ai_logger: AiLogger | None,
) -> dict:
    """
    阶段 2 + 3：Item 分镜/模板匹配与参数细化。
    要求 result 已含 topic 与 scenes（每项含 text，尚无 items）。
    """
    append_log = ai_logger.append if ai_logger else None
    scenes = result.get("scenes", [])
    topic = result.get("topic", "未命名主题")

    print("   [Step 2/3] 正在两阶段拆解 Items（2A 分镜 + 2B 模板匹配）...")
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

    print("   [Step 3/3] 正在循环拆解 Text 与 Anchors...")
    for scene in scenes:
        scene_text_full = scene.get("text", "")
        for item in scene.get("items", []):
            allowed_keys = {
                "order",
                "narrativeType",
                "reasoning",
                "template",
                "text",
                "groupKey",
                "content",
            }
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


def _run_ai_analysis_pipeline(
    client,
    model: str,
    scene_split: dict,
    template_guide: str,
    ai_logger: AiLogger | None,
) -> dict:
    """从 Step0 场景草稿继续：Item 分镜+模板匹配 → Item 参数细化。"""
    scenes = scene_split.get("scenes", [])
    print(f"   📂 使用场景草稿，共 {len(scenes)} 个 Scene。")
    return _run_items_and_params_pipeline(
        client, model, scene_split, template_guide, ai_logger
    )


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


def _step1_skip_validate(config: dict, *, cli_override: bool = False) -> bool:
    """CLI --skip-validate 优先于 config.step1_skip_validate。"""
    if cli_override:
        return True
    return bool(config.get("step1_skip_validate", False))


def _validate_and_auto_fix(
    result: dict,
    client,
    model: str,
    text: str,
    template_guide: str,
    config: dict,
    ai_logger: AiLogger | None,
    *,
    skip_validate: bool = False,
) -> dict:
    """
    对 AI 结果执行校验；有告警则调用模型自动修订一次（除非 skip_validate）。
    返回最终（可能已修订）的结果字典。
    """
    if skip_validate:
        print("\n⏭️ 已跳过 scene-scripts 校验（step1_skip_validate / --skip-validate）")
        return result

    append_log = ai_logger.append if ai_logger else None
    default_tmpl = config.get("default_template", "CENTER_FOCUS")

    _, v_warnings = validate_and_normalize_scene_scripts(
        result, TEMPLATE_REGISTRY, default_template=default_tmpl
    )
    if not v_warnings:
        return result

    print("\n⚠️ 脚本校验与归一化（请人工复核）：")
    for w in v_warnings:
        print(f"   {w}")

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


def analyze_with_llm(
    text: str,
    scene_split: dict,
    config: dict,
    ai_logger: AiLogger | None,
    *,
    llm_provider: str | None = None,
    llm_model: str | None = None,
    skip_validate: bool = False,
) -> dict:
    """
    从场景草稿继续分析，返回 scene-scripts 字典。
    编排 _run_ai_analysis_pipeline → _cleanup_intermediate_fields → _validate_and_auto_fix。
    """
    client, model, provider, template_guide = create_llm_runtime(
        config, llm_provider=llm_provider, llm_model=llm_model
    )

    fps = config.get("fps", 30)

    print("\n" + "=" * 60)
    print(f"🤖 正在调用 {provider.upper()}({model}) 分析 Item 与参数...")
    print("=" * 60 + "\n")

    result = _run_ai_analysis_pipeline(
        client,
        model,
        scene_split,
        template_guide,
        ai_logger,
    )
    _cleanup_intermediate_fields(result)
    result["fps"] = fps
    result = _validate_and_auto_fix(
        result, client, model, text, template_guide, config, ai_logger, skip_validate=skip_validate
    )

    return result


# ─────────────────────────────────────────────────────────────
# 主入口
# ─────────────────────────────────────────────────────────────

def _source_text_from_draft(scene_split: dict) -> str:
    """将草稿各 scene.text 按顺序拼接，作为校验/修订对照的权威口播文本。"""
    scenes = scene_split.get("scenes", [])
    if not isinstance(scenes, list):
        return ""
    return "".join(str(s.get("text", "")) for s in scenes if isinstance(s, dict))


def main():
    parser = argparse.ArgumentParser(description="Step 1: 口播文案分析（模板驱动 v3）")
    parser.add_argument(
        "--name",
        "-n",
        required=True,
        help="视频名称（读取 scenes/scene-split-draft.json；校验对照草稿 scene.text）",
    )
    parser.add_argument(
        "--llm-provider",
        choices=["gemini", "deepseek", "mimo"],
        help="LLM 提供方（默认读取 config.json 的 llm_provider；未配置则 gemini）",
    )
    parser.add_argument(
        "--llm-model",
        help="覆盖模型名（gemini/deepseek 通用覆盖；不填则按 provider 读取 config.json 对应字段）",
    )
    parser.add_argument(
        "--skip-validate",
        action="store_true",
        help="跳过 scene-scripts 校验（等同 config step1_skip_validate=true；未跳过时必有告警则自动修订）",
    )
    args = parser.parse_args()

    script_dir = PACKAGE_ROOT
    load_env(script_dir)
    config = load_config(script_dir)

    video_name = args.name
    paths = resolve_video_paths(video_name, config)
    draft_path = paths.scene_split_draft
    output_dir = paths.scenes_dir

    if not draft_path.exists():
        print(f"❌ 场景拆分草稿不存在: {draft_path}")
        return False

    cleanup_before_step1(video_name, output_dir, config, script_dir)

    ai_logger = AiLogger(output_dir, video_name, step="step1")

    scene_split = load_scene_split_draft(draft_path)
    print(f"📂 已加载场景拆分草稿: {draft_path}")
    print(f"   🎬 场景数: {len(scene_split.get('scenes', []))}")

    text = _source_text_from_draft(scene_split)
    if not text.strip():
        print("❌ 草稿中各 scene.text 拼接后为空")
        return False

    print(f"📄 校验对照文本（来自草稿 scene.text）: {len(text)} 字符")

    skip_validate = _step1_skip_validate(config, cli_override=args.skip_validate)

    result = analyze_with_llm(
        text,
        scene_split,
        config,
        ai_logger,
        llm_provider=args.llm_provider,
        llm_model=args.llm_model,
        skip_validate=skip_validate,
    )
    _merge_dash_only_captions(result)
    finalize_step1_content_and_anchors(result)
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
    print(f"   📋 场景草稿: {draft_path}")
    print(f"   🧾 AI日志: {ai_logger.path}")

    return True


if __name__ == "__main__":
    try:
        success = main()
        exit(0 if success else 1)
    except ScriptValidationError as e:
        print(f"\n❌ 校验失败: {e}")
        exit(1)
