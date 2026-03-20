#!/usr/bin/env python3
"""
Step 1: 口播文案分析（模板驱动版 v2）
将口播文案拆解为场景脚本JSON，AI 直接输出 template + param 格式。
模板指南由 template_registry 动态生成。

用法：
  python step1_analyze_script.py --input 文案.txt --output output_dir --name video_name
"""

import argparse
import json
import os
import re
import shutil
from pathlib import Path

from scene_script_validate import validate_and_normalize_scene_scripts
from template_registry import TEMPLATE_REGISTRY, generate_ai_prompt_guide

_JSON_CFG = None


def _json_generate_config():
    """延迟导入，首轮与重试共用。"""
    global _JSON_CFG
    if _JSON_CFG is not None:
        return _JSON_CFG
    from google.genai import types

    _JSON_CFG = types.GenerateContentConfig(response_mime_type="application/json")
    return _JSON_CFG


def _parse_json_from_response(response_text: str) -> dict:
    response_text = response_text.strip()
    if response_text.startswith("```"):
        response_text = re.sub(r"^```(?:json)?\s*\n?", "", response_text)
        response_text = re.sub(r"\n?```\s*$", "", response_text)
    return json.loads(response_text)


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

                if isinstance(content_item, dict):
                    upgraded_content.append({
                        "text": text,
                        "startFrame": cursor,
                        "durationFrames": duration_frames,
                        "anchor": content_item.get("anchor"),
                        "anchorColor": content_item.get("anchorColor"),
                        "audioEffect": content_item.get("audioEffect"),
                    })
                else:
                    upgraded_content.append({
                        "text": text,
                        "startFrame": cursor,
                        "durationFrames": duration_frames,
                        "anchor": None,
                        "anchorColor": None,
                        "audioEffect": None,
                    })

                cursor += duration_frames

            param["content"] = upgraded_content
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

    # 如果 Step1 输出目录本身不是 scenes_dir，也补充清理其中旧的 scene-scripts.json
    output_script_path = output_dir / "scene-scripts.json"
    cleanup_targets = [
        scenes_dir,
        images_dir,
        audio_dir,
    ]
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
# Gemini 调用
# ─────────────────────────────────────────────────────────────

def _gemini_fix_after_warnings(
    client,
    model: str,
    text: str,
    draft: dict,
    warnings: list[str],
    template_guide: str,
) -> dict:
    """校验告警后的单次修订调用；不得改写 content 内原文。"""
    fix_prompt = f"""你是短视频脚本 JSON 修订助手。下面初稿已通过结构解析，但校验器报告了问题。

## 口播原文（content 内 text 必须与此完全一致，禁止改写、缩句、换词）
{text}

## 校验告警（含未知模板回退、枚举纠正提示等，请对症修订）
{json.dumps(warnings, ensure_ascii=False, indent=2)}

## 当前 JSON 初稿
{json.dumps(draft, ensure_ascii=False, indent=2)}

## 模板注册说明（修订时仍须遵守）
{template_guide}

请输出**一份**修订后的完整 JSON：顶层含 `topic`、`scenes`（每 scene 含 `sceneId`、`sceneName`、`items`），每个 item 含 `order`、`narrativeType`、`reasoning`、`template`、`param`。不要包含 `fps` 字段（脚本会追加）。
所有 `content` 中的原文必须与「口播原文」一致。仅输出 JSON，不要 markdown 代码块。"""

    resp = client.models.generate_content(
        model=model,
        contents=fix_prompt,
        config=_json_generate_config(),
    )
    return _parse_json_from_response(resp.text)


def analyze_with_gemini(text: str, config: dict) -> dict:
    """调用 Gemini 分析文案，AI 直接输出 template + param 格式"""
    from google import genai

    api_key = os.environ.get("GEMINI_API_KEY", "")
    if not api_key:
        raise ValueError("未设置 GEMINI_API_KEY，请在 .env 中配置")

    client = genai.Client(api_key=api_key)
    image_style = config.get("image_style", "简洁线条插画风格，无背景，无文字")
    fps = config.get("fps", 30)

    # 动态生成模板指南
    template_guide = generate_ai_prompt_guide(image_style)
    model = config.get("gemini_model", "gemini-2.0-flash")

    prompt = f"""你是专业短视频脚本策划师兼剪辑师。将以下口播文案拆解为短视频场景脚本。

## 口播文案
{text}

## ⚠️ 核心规则（严格遵守）

1. **原文零修改**：`content` 中的文本必须使用原文原句，严禁缩写、改写或重新措辞。
2. **完整覆盖**：一个场景下所有 item 的 content 拼合，必须完整覆盖该段落原文，不遗漏任何字。
3. **先分 scene 再分 item**：`scene` 是段落级叙事单元（一个叙事目标），`item` 是镜头级表达单元（一个镜头意图）。
4. **scene 切分标准**：仅当“叙事目标变化 / 观众任务变化 / 情绪段位变化 / 章节功能变化（开场、论证、反例、结论）”之一出现时，才新建 scene；禁止按句号机械拆 scene。
5. **scene 粒度建议**：每个 scene 聚焦一个目标
6. **按镜头语义拆 item，不按标点机械拆分**：`1 item = 1 个主画面 + 1 个主动画 + 1 个主信息点`。逗号、句号、分号仅作参考，不得逐句切 item。
7. **item 切分标准**：只有当“语义角色变化 / 叙事阶段变化 / 视觉任务变化 / 情绪强度变化”之一明显出现时才切 item。
8. **item 内部用 content 做递进**：同一语义链（如“现象→误判→真因”）优先放在同一个 item 内，用 1-3 条 content 递进表达，而不是拆成多个 item。
9. **锚点宜少**：精选锚点词句，大多数content不需要锚点。
10. **锚点标注**：需要锚点的 content 条目写成对象格式：
   `{{"text": "原文", "anchor": "关键词", "anchorColor": "#颜色", "audioEffect": "音效"}}`
   不需要锚点的 content 条目直接写字符串即可。
11. **锚点颜色含义**：
   - `"#E53E3E"` 危险/负面/警告词
   - `"#FF8C00"` 注意/质疑/反直觉词
   - `"#2B6CB0"` 事实/数据/中性专有名词
   - `"#276749"` 正面/结论/建议词
   - `"#805AD5"` 认知/洞察/抽象概念词
12. **音效**：有 anchor 时配音效：`impact_thud`（冲击类）或 `ping`（提示类）或 `woosh`（转场类）
13. **图片纯视觉**：图片描述只描述视觉画面，绝不含文字内容。
14. **先判叙事再选模板**：为每个 item 先归类叙事类型（单图叙述 / 双图并列 / 对错避坑 / 步骤 / 时间轴 / 多图并列 / 纯文字金句 / 引用 / 对话气泡 / 术语卡 / 揭秘锚点 / 冲击收束），再对照下文模板说明选型；不确定时优先 `CENTER_FOCUS`。
15. **严禁滥用 CENTER_FOCUS**：`CENTER_FOCUS` 仅用于无明显结构化视觉语义时的最后兜底；若出现对比、对错、步骤、时间、数据、进度、术语、引用、对话等信号，必须优先选择对应专用模板。
16. **输出可解释选型**：每个 item 必须包含 `narrativeType`（叙事类型）和 `reasoning`（一句话说明为何选该模板），再给出 `template` 与 `param`。

{template_guide}

## 输出格式（严格输出 JSON，不要包含 markdown 代码块标记）

顶层字段：`topic`、`scenes`（内含 `sceneId`、`sceneName`、`items`）。
每个 item：`order`、`narrativeType`、`reasoning`、`template`（指南中模板名之一）、`param`（该模板对应字段 + `content`）。

content 数组中：
- 不需要锚点的条目直接写字符串
- 需要锚点的条目写成对象：{{"text": "原文", "anchor": "关键词", "anchorColor": "#颜色", "audioEffect": "音效"}}

**各模板字段形态见上文「各模板 item 示例」；`template` 与 `param` 须与所选模板一致。**"""

    print("\n" + "=" * 60)
    print("📋 发送给 AI 的提示词")
    print("=" * 60)
    print(prompt)
    print("=" * 60 + "\n")
    print("🤖 正在调用 Gemini 分析文案（模板驱动 v2）...")
    response = client.models.generate_content(
        model=model,
        contents=prompt,
        config=_json_generate_config(),
    )

    response_text = response.text

    try:
        result = _parse_json_from_response(response_text)
    except json.JSONDecodeError as e:
        print("⚠️ JSON解析失败，尝试修复...")
        print(f"原始输出前200字符: {response_text[:200]}")
        raise ValueError(f"Gemini 返回的JSON格式无效: {e}") from e

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
            fixed = _gemini_fix_after_warnings(
                client, model, text, result, v_warnings, template_guide
            )
            fixed["fps"] = fps
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
    parser = argparse.ArgumentParser(description="Step 1: 口播文案分析（模板驱动 v2）")
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

    return True


if __name__ == "__main__":
    success = main()
    exit(0 if success else 1)
