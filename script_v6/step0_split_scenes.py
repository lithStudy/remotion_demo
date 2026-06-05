#!/usr/bin/env python3
"""
Step 0: 口播文案场景拆分
将口播文案拆解为 topic + scenes，写入 scene-split-draft.json 供人工审阅。

用法：
  python step0_split_scenes.py --input 文案.txt --output output_dir --name video_name
"""

import argparse
import sys
from pathlib import Path

from pipeline_cleanup import cleanup_before_step0
from scene_split_draft import (
    SCENE_SPLIT_DRAFT_FILENAME,
    save_scene_split_draft,
    scene_split_draft_path,
)
from step1_analysis import analyze_scenes
from step_llm import create_llm_runtime
from utils import AiLogger, load_config, load_env
from validation_errors import ScriptValidationError

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
if hasattr(sys.stderr, "reconfigure"):
    sys.stderr.reconfigure(encoding="utf-8", errors="replace")


def _print_continue_hint(
    draft_path: Path,
    source_text_path: Path,
    output_dir: Path,
    video_name: str,
) -> None:
    print("\n" + "=" * 60)
    print("⏸️  场景拆分已完成，请人工审阅后再继续")
    print("=" * 60)
    print(f"   📝 草稿文件: {draft_path}")
    print("   可调整 sceneId / sceneName / text 划分，保存后继续：")
    print(
        f"\n   python pipeline.py"
        f' -i "{source_text_path}"'
        f' -n "{video_name}"'
        f" --start 1"
    )
    print(
        f"\n   python step1_analyze_script.py"
        f' -i "{draft_path}"'
        f' --source-text "{source_text_path}"'
        f' -o "{output_dir}"'
        f' -n "{video_name}"'
    )
    print()


def run_scene_split(
    text: str,
    config: dict,
    ai_logger: AiLogger | None,
    *,
    llm_provider: str | None = None,
    llm_model: str | None = None,
) -> dict:
    client, model, provider, _ = create_llm_runtime(
        config, llm_provider=llm_provider, llm_model=llm_model
    )
    append_log = ai_logger.append if ai_logger else None

    print("\n" + "=" * 60)
    print(f"🤖 正在调用 {provider.upper()}({model}) 拆解场景...")
    print("=" * 60 + "\n")

    result = analyze_scenes(client, model, text, append_ai_log=append_log)
    scenes = result.get("scenes", [])
    print(f"   ✅ 完成，拆解为 {len(scenes)} 个 Scene。")
    return result


def main() -> bool:
    parser = argparse.ArgumentParser(description="Step 0: 口播文案场景拆分")
    parser.add_argument("--input", "-i", required=True, help="口播文案文件路径")
    parser.add_argument("--output", "-o", required=True, help="输出目录路径")
    parser.add_argument("--name", "-n", help="视频名称（英文，不填则读取 config.json）")
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
        "--scenes-draft",
        help=f"场景拆分草稿输出路径（默认: <output>/{SCENE_SPLIT_DRAFT_FILENAME}）",
    )
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
    draft_path = scene_split_draft_path(output_dir, args.scenes_draft)

    cleanup_before_step0(video_name, output_dir, config, script_dir)

    ai_logger = AiLogger(output_dir, video_name, step="step0")

    with open(input_path, "r", encoding="utf-8") as f:
        text = f.read().strip()

    if not text:
        print("❌ 文案内容为空")
        return False

    print(f"📄 读取文案: {len(text)} 字符")

    scene_split = run_scene_split(
        text,
        config,
        ai_logger,
        llm_provider=args.llm_provider,
        llm_model=args.llm_model,
    )
    save_scene_split_draft(scene_split, draft_path)

    print("\n✅ 场景拆分完成!")
    print(f"   📦 视频名: {video_name}")
    print(f"   📊 主题: {scene_split.get('topic', '未知')}")
    print(f"   🎬 场景数: {len(scene_split.get('scenes', []))}")
    print(f"   💾 草稿: {draft_path}")
    print(f"   🧾 AI日志: {ai_logger.path}")
    _print_continue_hint(draft_path, input_path.resolve(), output_dir, video_name)
    return True


if __name__ == "__main__":
    try:
        success = main()
        sys.exit(0 if success else 1)
    except ScriptValidationError as e:
        print(f"\n❌ 校验失败: {e}")
        sys.exit(1)
