#!/usr/bin/env python3
"""
口播视频生成管线 (Narrator Video Pipeline)

用法（仓库根目录）:
  python -m narrator_pipeline --name 文案
  python -m narrator_pipeline --name 文案 --start 1
  python -m narrator_pipeline --name 文案 --only 4
"""

from __future__ import annotations

import argparse
import json
import sys
from collections.abc import Callable

from narrator_pipeline.paths import PACKAGE_ROOT, resolve_video_paths


def _invoke_main(step_num: int, title: str, main_fn: Callable[[], bool], argv: list[str]) -> bool:
    print(f"\n{'=' * 60}")
    print(f"📌 Step {step_num}: {title}")
    print(f"{'=' * 60}")
    print(f"🔧 参数: {' '.join(argv)}\n")

    old_argv = sys.argv
    try:
        sys.argv = [f"narrator_pipeline.step{step_num}"] + argv
        result = main_fn()
        ok = True if result is None else bool(result)
    except SystemExit as exc:
        code = exc.code
        ok = code in (0, None)
    finally:
        sys.argv = old_argv

    if not ok:
        print(f"\n❌ Step {step_num} 失败")
        return False

    print(f"\n✅ Step {step_num} 完成")
    return True


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(
        description="口播视频生成管线",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
示例:
  python -m narrator_pipeline --name bitcoin
  python -m narrator_pipeline --name bitcoin --only 0
  python -m narrator_pipeline --name bitcoin --start 1
  python -m narrator_pipeline --name bitcoin --only 4
        """,
    )
    parser.add_argument(
        "--name",
        "-n",
        required=True,
        help="视频名称（读取 narrations/{name}.txt，产物写入 remotions/{name}/ 等约定路径）",
    )
    parser.add_argument(
        "--start",
        type=int,
        default=0,
        choices=[0, 1, 2, 3, 4],
        help="从第几步开始（默认0）",
    )
    parser.add_argument("--only", type=int, choices=[0, 1, 2, 3, 4], help="只运行指定步骤")
    parser.add_argument(
        "--preview-image",
        default="images/template/scene1_1.png",
        help="当 --only 1 时自动预览使用的固定图片（public 目录相对路径）",
    )
    parser.add_argument(
        "--skip-validate",
        action="store_true",
        help="Step 1 跳过 scene-scripts 校验",
    )
    args = parser.parse_args(argv)

    config_path = PACKAGE_ROOT / "config.json"
    if not config_path.exists():
        print("❌ 配置文件不存在: config.json")
        return 1

    with open(config_path, "r", encoding="utf-8") as f:
        config = json.load(f)

    name = args.name
    paths = resolve_video_paths(name, config)

    start = args.only if args.only is not None else args.start
    end = args.only if args.only is not None else 4

    print("\n🎬 口播视频生成管线")
    print(f"   📄 文案: {paths.narration_txt}")
    print(f"   📛 名称: {name}")
    print(f"   📂 项目: {paths.project_root}")
    print(f"   🔢 步骤: {start} → {end}")

    from narrator_pipeline.analysis.step0 import main as step0_main
    from narrator_pipeline.analysis.step1 import main as step1_main
    from narrator_pipeline.audio.step2 import main as step2_main
    from narrator_pipeline.images.step3 import main as step3_main
    from narrator_pipeline.codegen.step4 import main as step4_main

    step1_args = ["--name", name]
    if args.skip_validate:
        step1_args.append("--skip-validate")

    steps: dict[int, tuple[str, Callable[[], bool], list[str]]] = {
        0: ("场景拆分", step0_main, ["--name", name]),
        1: ("文案分析", step1_main, step1_args),
        2: ("语音合成", step2_main, ["--name", name]),
        3: ("配图生成", step3_main, ["--name", name]),
        4: ("Remotion 代码生成", step4_main, ["--name", name]),
    }

    for step_num in range(start, end + 1):
        title, main_fn, step_args = steps[step_num]
        if not _invoke_main(step_num, title, main_fn, step_args):
            print(f"\n💥 管线在 Step {step_num} 中断")
            print(f"   修复后可使用 --name {name} --start {step_num} 从此步骤重新开始")
            if step_num == 0:
                print(f"   审阅场景草稿: {paths.scene_split_draft}")
            return 1

    if args.only == 1:
        print(f"\n{'=' * 60}")
        print("🧪 自动执行动画预览（无音频 + 固定图片）")
        print(f"{'=' * 60}")
        preview_args = [
            "--name",
            name,
            "--mute-audio",
            "--preview-image",
            args.preview_image,
        ]
        if not _invoke_main(4, "Remotion 预览代码生成", step4_main, preview_args):
            print("\n⚠️ 自动预览生成失败，但 Step1 已完成")
            return 1

    print(f"\n{'=' * 60}")
    print("🎉 管线完成！")
    print(f"{'=' * 60}")
    print("\n📂 生成文件:")
    if paths.scene_split_draft.is_file():
        print(f"   场景草稿: {paths.scene_split_draft}")
    print(f"   脚本: {paths.scene_scripts}")
    print(f"   配图: {paths.images_dir}")
    print(f"   音频: {paths.audio_dir}")
    print(f"   代码: {paths.project_root / 'src' / 'remotions' / name}")
    print("\n🚀 运行 npm run dev 预览动画")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
