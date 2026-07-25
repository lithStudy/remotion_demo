#!/usr/bin/env python3
"""
Step 0: 口播文案场景拆分
将口播文案拆解为 topic + scenes，写入 scene-split-draft.json 供人工审阅。

用法（仓库根目录）:
  python -m narrator_pipeline.analysis.step0 --name video_name
"""

import argparse
import sys
from pathlib import Path

from narrator_pipeline.paths import PACKAGE_ROOT, resolve_video_paths
from narrator_pipeline.common.pipeline_cleanup import cleanup_before_step0
from narrator_pipeline.contracts.scene_split_draft import save_scene_split_draft
from narrator_pipeline.analysis.stages import analyze_scenes
from narrator_pipeline.common.step_llm import create_llm_runtime
from narrator_pipeline.common import AiLogger, load_config, load_env
from narrator_pipeline.contracts.validation_errors import ScriptValidationError

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
if hasattr(sys.stderr, "reconfigure"):
    sys.stderr.reconfigure(encoding="utf-8", errors="replace")


def _print_continue_hint(draft_path: Path, video_name: str) -> None:
    print("\n" + "=" * 60)
    print("⏸️  场景拆分已完成，请人工审阅后再继续")
    print("=" * 60)
    print(f"   📝 草稿文件: {draft_path}")
    print("   可调整 sceneId / sceneName / text 划分，保存后继续：")
    print(
        f"\n   python -m narrator_pipeline"
        f' -n "{video_name}"'
        f" --start 1"
    )
    print(
        f"\n   python -m narrator_pipeline.analysis.step1"
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


def run_step0_for_video(
    video_name: str,
    config: dict,
    *,
    llm_provider: str | None = None,
    llm_model: str | None = None,
    print_continue_hint: bool = True,
) -> dict:
    """
    读取口播稿 → cleanup → 场景拆分 → 写入 scene-split-draft.json。
    返回 scene_split 字典。口播稿或内容为空时抛 ValueError。
    """
    script_dir = PACKAGE_ROOT
    paths = resolve_video_paths(video_name, config)
    input_path = paths.narration_txt
    output_dir = paths.scenes_dir
    draft_path = paths.scene_split_draft

    if not input_path.exists():
        raise ValueError(f"文案文件不存在: {input_path}")

    cleanup_before_step0(video_name, output_dir, config, script_dir)

    ai_logger = AiLogger(output_dir, video_name, step="step0")

    with open(input_path, "r", encoding="utf-8") as f:
        text = f.read().strip()

    if not text:
        raise ValueError("文案内容为空")

    print(f"📄 读取文案: {len(text)} 字符 ({input_path})")

    scene_split = run_scene_split(
        text,
        config,
        ai_logger,
        llm_provider=llm_provider,
        llm_model=llm_model,
    )
    save_scene_split_draft(scene_split, draft_path)

    print("\n✅ 场景拆分完成!")
    print(f"   📦 视频名: {video_name}")
    print(f"   📊 主题: {scene_split.get('topic', '未知')}")
    print(f"   🎬 场景数: {len(scene_split.get('scenes', []))}")
    print(f"   💾 草稿: {draft_path}")
    print(f"   🧾 AI日志: {ai_logger.path}")
    if print_continue_hint:
        _print_continue_hint(draft_path, video_name)
    return scene_split


def main() -> bool:
    parser = argparse.ArgumentParser(description="Step 0: 口播文案场景拆分")
    parser.add_argument(
        "--name",
        "-n",
        required=True,
        help="视频名称（读取 narrations/{name}.txt，写入 remotions/{name}/scenes/）",
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
    args = parser.parse_args()

    load_env(PACKAGE_ROOT)
    config = load_config(PACKAGE_ROOT)

    try:
        run_step0_for_video(
            args.name,
            config,
            llm_provider=args.llm_provider,
            llm_model=args.llm_model,
        )
    except ValueError as e:
        print(f"❌ {e}")
        return False
    return True


if __name__ == "__main__":
    try:
        success = main()
        sys.exit(0 if success else 1)
    except ScriptValidationError as e:
        print(f"\n❌ 校验失败: {e}")
        sys.exit(1)
