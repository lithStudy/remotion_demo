#!/usr/bin/env python3
"""
口播视频生成管线 (Narrator Video Pipeline)

自动化流程：文案 → 场景拆解 → AI配图 → TTS语音 → Remotion动画代码

用法：
  # 完整流程
  python pipeline.py --input 文案.txt --name my_video

  # 从指定步骤开始（跳过已完成的步骤）
  python pipeline.py --input 文案.txt --name my_video --start 2

  # 只运行指定步骤
  python pipeline.py --input 文案.txt --name my_video --only 3
"""

import argparse
import json
import subprocess
import sys
from pathlib import Path


def run_step(step_num: int, script_name: str, args: list, cwd: Path) -> bool:
    """运行单个步骤"""
    print(f"\n{'='*60}")
    print(f"📌 Step {step_num}: {script_name}")
    print(f"{'='*60}")

    cmd = [sys.executable, str(cwd / script_name)] + args
    print(f"🔧 命令: {' '.join(cmd)}\n")

    result = subprocess.run(cmd, cwd=str(cwd))

    if result.returncode != 0:
        print(f"\n❌ Step {step_num} 失败 (exit code: {result.returncode})")
        return False

    print(f"\n✅ Step {step_num} 完成")
    return True


def main():
    parser = argparse.ArgumentParser(
        description="口播视频生成管线",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
示例:
  python pipeline.py --input 文案.txt --name bitcoin
  python pipeline.py --input 文案.txt --name bitcoin --start 2
  python pipeline.py --input 文案.txt --name bitcoin --only 4
        """,
    )
    parser.add_argument("--input", "-i", required=True, help="口播文案文件路径")
    parser.add_argument("--name", "-n", required=True, help="视频名称（英文，用作目录名）")
    parser.add_argument("--start", type=int, default=1, choices=[1, 2, 3, 4],
                        help="从第几步开始（默认1）")
    parser.add_argument("--only", type=int, choices=[1, 2, 3, 4],
                        help="只运行指定步骤")
    args = parser.parse_args()

    script_dir = Path(__file__).parent
    config_path = script_dir / "config.json"

    if not config_path.exists():
        print("❌ 配置文件不存在: config.json")
        return

    with open(config_path, "r", encoding="utf-8") as f:
        config = json.load(f)

    project_root = Path(config.get("project_root", script_dir.parent))
    input_path = Path(args.input).resolve()
    name = args.name

    # 中间产物路径
    scenes_dir = project_root / "src" / "remotions" / name / "scenes"
    scripts_json = scenes_dir / "scene-scripts.json"
    images_dir = project_root / "public" / "images" / name
    audio_dir = project_root / "public" / "audio" / name

    # 对于 step 1，输出到 scenes_dir
    step1_output = scenes_dir

    start = args.only if args.only else args.start
    end = args.only if args.only else 4

    print(f"\n🎬 口播视频生成管线")
    print(f"   📄 文案: {input_path}")
    print(f"   📛 名称: {name}")
    print(f"   📂 项目: {project_root}")
    print(f"   🔢 步骤: {start} → {end}")

    steps = {
        1: ("step1_analyze_script.py", [
            "--input", str(input_path),
            "--output", str(step1_output),
            "--name", name,
        ]),
        2: ("step2_generate_images.py", [
            "--input", str(scripts_json),
            "--output", str(images_dir),
        ]),
        3: ("step3_generate_audio.py", [
            "--input", str(scripts_json),
            "--output", str(audio_dir),
        ]),
        4: ("step4_generate_remotion.py", [
            "--input", str(scripts_json),
            "--name", name,
        ]),
    }

    for step_num in range(start, end + 1):
        script_name, step_args = steps[step_num]
        if not run_step(step_num, script_name, step_args, script_dir):
            print(f"\n💥 管线在 Step {step_num} 中断")
            print(f"   修复后可使用 --start {step_num} 从此步骤重新开始")
            return

    print(f"\n{'='*60}")
    print(f"🎉 管线完成！")
    print(f"{'='*60}")
    print(f"\n📂 生成文件:")
    print(f"   脚本: {scripts_json}")
    print(f"   配图: {images_dir}")
    print(f"   音频: {audio_dir}")
    print(f"   代码: {project_root / 'src' / 'remotions' / name}")
    print(f"\n🚀 运行 npm run dev 预览动画")


if __name__ == "__main__":
    main()
