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
import os
import re
import shutil
from datetime import datetime
from pathlib import Path

from scene_script_validate import validate_and_normalize_scene_scripts
from step1_analysis import (
    analyze_items_for_scene,
    analyze_param_for_item,
    analyze_scenes,
    gemini_fix_after_warnings,
)
from template_registry import TEMPLATE_REGISTRY, generate_ai_prompt_guide

_AI_LOG_PATH = None


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
            param = item.get("param", {})
            content = param.get("content", []) if isinstance(param, dict) else []
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


def _set_ai_log_path(output_dir: Path, video_name: str) -> None:
    """初始化 AI 请求日志文件路径。"""
    global _AI_LOG_PATH
    log_dir = output_dir / "logs"
    log_dir.mkdir(parents=True, exist_ok=True)
    ts = datetime.now().strftime("%Y%m%d_%H%M%S")
    _AI_LOG_PATH = log_dir / f"{video_name}_step1_ai_{ts}.log"


def _append_ai_log(block: str) -> None:
    """追加写入 AI 日志。"""
    if _AI_LOG_PATH is None:
        return
    _AI_LOG_PATH.parent.mkdir(parents=True, exist_ok=True)
    with open(_AI_LOG_PATH, "a", encoding="utf-8") as f:
        f.write(block)
        if not block.endswith("\n"):
            f.write("\n")


def _extract_content_text(content_item) -> str:
    if isinstance(content_item, str):
        return content_item
    if isinstance(content_item, dict):
        return str(content_item.get("text", ""))
    return str(content_item)


def _inject_preview_timings(scene_scripts: dict, fps: int, config: dict) -> None:
    """
    为 Step1 结果注入默认时间轴，避免无音频预览时字幕重叠。
    Step3 会在生成真实音频后覆盖这些字段。
    """
    min_frames = int(config.get("preview_min_duration_frames", max(1, fps)))
    frames_per_char = float(config.get("preview_frames_per_char", 2.2))

    for scene in scene_scripts.get("scenes", []):
        for item in scene.get("items", []):
            param = item.get("param", {})
            if not isinstance(param, dict):
                continue

            content = param.get("content", [])
            if not isinstance(content, list) or not content:
                continue

            upgraded_content = []
            cursor = 0
            for content_item in content:
                text = _extract_content_text(content_item)
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

            param["content"] = upgraded_content
            anchors = param.get("anchors", [])
            if not isinstance(anchors, list):
                print(f"   ⚠️ item order={item.get('order', '?')} 的 anchors 非数组，已清空")
                anchors = []

            valid_anchors = []
            for anchor_idx, anchor_item in enumerate(anchors):
                if not isinstance(anchor_item, dict):
                    print(
                        f"   ⚠️ item order={item.get('order', '?')} anchors[{anchor_idx}] 非对象，已丢弃"
                    )
                    continue
                anchor_text = str(anchor_item.get("text", "")).strip()
                show_from = anchor_item.get("showFrom")
                if not anchor_text:
                    print(
                        f"   ⚠️ item order={item.get('order', '?')} anchors[{anchor_idx}] 缺少 text，已丢弃"
                    )
                    continue
                if not isinstance(show_from, int) or show_from < 0 or show_from >= len(upgraded_content):
                    print(
                        f"   ⚠️ item order={item.get('order', '?')} anchors[{anchor_idx}].showFrom 非法，已丢弃"
                    )
                    continue
                valid_anchors.append(
                    {
                        "text": anchor_text,
                        "showFrom": show_from,
                        "color": anchor_item.get("color"),
                        "anim": anchor_item.get("anim"),
                        "audioEffect": anchor_item.get("audioEffect"),
                    }
                )
            param["anchors"] = valid_anchors
            param["totalDurationFrames"] = max(cursor, min_frames)


def load_env(script_dir: Path):
    """加载 .env 文件"""
    env_path = script_dir / ".env"
    if env_path.exists():
        with open(env_path, "r", encoding="utf-8") as f:
            for line in f:
                line = line.strip()
                if line and not line.startswith("#") and "=" in line:
                    key, value = line.split("=", 1)
                    os.environ[key.strip()] = value.strip()


def load_config(script_dir: Path) -> dict:
    """加载配置"""
    config_path = script_dir / "config.json"
    with open(config_path, "r", encoding="utf-8") as f:
        return json.load(f)


def _cleanup_related_resources(video_name: str, output_dir: Path, config: dict, script_dir: Path) -> None:
    """
    Step1 执行前清理与当前视频相关的历史产物，避免旧资源干扰新生成结果。
    """
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


def analyze_with_gemini(text: str, config: dict) -> dict:
    from google import genai

    api_key = os.environ.get("GEMINI_API_KEY", "")
    if not api_key:
        raise ValueError("未设置 GEMINI_API_KEY，请在 .env 中配置")

    client = genai.Client(api_key=api_key)
    image_style = config.get("image_style", "简洁线条插画风格，无背景，无文字")
    fps = config.get("fps", 30)

    # 模板选择阶段不提供示例，避免模型在 Step2 过拟合样例。
    template_guide = generate_ai_prompt_guide(image_style, include_examples=False)
    model = config.get("gemini_model", "gemini-2.0-flash")

    print("\n" + "=" * 60)
    print("🤖 正在调用 Gemini 分析文案（分层次处理 v3）...")
    print("=" * 60 + "\n")

    # 第一步：拆解场景
    result = analyze_scenes(client, model, text, append_ai_log=_append_ai_log)
    scenes = result.get("scenes", [])
    print(f"   ✅ [Step 1/3] 完成，拆解为 {len(scenes)} 个 Scene。")

    # 第二步：分场景两阶段拆解 Item（2A 纯分镜 → 2B 模板匹配）
    print("   [Step 2/3] 正在两阶段拆解 Items（2A 分镜 + 2B 模板匹配）...")
    topic = result.get("topic", "未命名主题")
    for scene in scenes:
        analyze_items_for_scene(
            client, model, topic, scene, template_guide, append_ai_log=_append_ai_log
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
            "   ⚠️ [Step 2 质量告警] 存在疑似“总起句误判为 LIST_MULTI_GROUP”的 item: "
            f"{quality_metrics['suspicious_list_multi_group_items']}"
        )

    # 第三步：分 Item 循环拆解 text 和锚定词
    print("   [Step 3/3] 正在循环拆解 Text 与 Anchors...")
    for scene in scenes:
        scene_text_full = scene.get("text", "")
        for item in scene.get("items", []):
            # 💡 强制清理 Step 2 可能产生的冗余 AI 注入字段，确保 Step 3 参数纯净且不重复
            allowed_keys = {
                "order",
                "narrativeType",
                "reasoning",
                "template",
                "text",
                "groupKey",
                "content",
            }
            redundant_keys = [k for k in item.keys() if k not in allowed_keys]
            for rk in redundant_keys:
                item.pop(rk)

            analyze_param_for_item(
                client,
                model,
                scene_text_full,
                item,
                TEMPLATE_REGISTRY,
                append_ai_log=_append_ai_log,
            )

    print("   ✅ [Step 3/3] 完成。")

    # 清理多余的用于传递的临时字段 (text)
    for scene in scenes:
        scene.pop("text", None)
        for item in scene.get("items", []):
            item.pop("text", None)
            item.pop("content", None)

    # 添加 fps
    result["fps"] = fps

    default_tmpl = config.get("default_template", "CENTER_FOCUS")
    _, v_warnings = validate_and_normalize_scene_scripts(
        result, TEMPLATE_REGISTRY, default_template=default_tmpl
    )
    if v_warnings:
        print("\n⚠️ 脚本校验与归一化（请人工复核）：")
        for w in v_warnings:
            print(f"   {w}")

    if v_warnings and config.get("step1_retry_on_validate_warnings", True):
        print("\n🔄 根据校验告警尝试自动修订（最多 1 次）…")
        try:
            fixed = gemini_fix_after_warnings(
                client,
                model,
                text,
                result,
                v_warnings,
                template_guide,
                append_ai_log=_append_ai_log,
            )
            fixed["fps"] = fps

            # 强制从 result 中恢复 content，防止模型在 fix 阶段篡改
            orig_contents = {}
            for s in result.get("scenes", []):
                sid = s.get("sceneId")
                for it in s.get("items", []):
                    order = it.get("order")
                    orig_contents[(sid, order)] = it.get("param", {}).get("content", [])
                    
            for s in fixed.get("scenes", []):
                sid = s.get("sceneId")
                for it in s.get("items", []):
                    order = it.get("order")
                    if "param" not in it:
                        it["param"] = {}
                    if (sid, order) in orig_contents:
                        it["param"]["content"] = orig_contents[(sid, order)]

            _, w2 = validate_and_normalize_scene_scripts(
                fixed, TEMPLATE_REGISTRY, default_template=default_tmpl
            )
            if w2:
                print("⚠️ 修订后仍有告警：")
                for w in w2:
                    print(f"   {w}")
            else:
                print("✅ 修订后校验无告警。")
            result = fixed
        except (ValueError, json.JSONDecodeError) as ex:
            print(f"⚠️ 自动修订失败，保留初稿：{ex}")

    return result


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
    _set_ai_log_path(output_dir, video_name)

    with open(input_path, "r", encoding="utf-8") as f:
        text = f.read().strip()

    if not text:
        print("❌ 文案内容为空")
        return False

    print(f"📄 读取文案: {len(text)} 字符")

    result = analyze_with_gemini(text, config)
    _inject_preview_timings(result, config.get("fps", 30), config)

    output_dir.mkdir(parents=True, exist_ok=True)
    output_path = output_dir / "scene-scripts.json"

    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(result, f, ensure_ascii=False, indent=2)

    # 统计信息
    scenes = result.get("scenes", [])
    total_items = sum(len(s.get("items", [])) for s in scenes)
    template_counts = {}
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
    if _AI_LOG_PATH is not None:
        print(f"   🧾 AI日志: {_AI_LOG_PATH}")

    return True


if __name__ == "__main__":
    success = main()
    exit(0 if success else 1)
