"""管线各步骤执行前的资源清理。"""

import shutil
from pathlib import Path

from narrator_pipeline.contracts.scene_split_draft import SCENE_SPLIT_DRAFT_FILENAME


def cleanup_before_step0(
    video_name: str,
    output_dir: Path,
    config: dict,
    script_dir: Path,
) -> None:
    """Step0：全新场景拆分前，清理本视频全部历史产物。"""
    project_root = Path(config.get("project_root", script_dir.parent))
    scenes_dir = project_root / "src" / "remotions" / video_name / "scenes"
    images_dir = project_root / "public" / "images" / video_name
    audio_dir = project_root / "public" / "audio" / video_name
    output_script_path = output_dir / "scene-scripts.json"
    draft_path = output_dir / SCENE_SPLIT_DRAFT_FILENAME

    cleanup_targets = [scenes_dir, images_dir, audio_dir, output_script_path, draft_path]

    print("\n🧹 Step0 预清理相关资源...")
    _remove_targets(cleanup_targets)


def cleanup_before_step1(
    video_name: str,
    output_dir: Path,
    config: dict,
    script_dir: Path,
) -> None:
    """Step1：保留 scene-split-draft.json，仅清理下游产物。"""
    project_root = Path(config.get("project_root", script_dir.parent))
    images_dir = project_root / "public" / "images" / video_name
    audio_dir = project_root / "public" / "audio" / video_name
    output_script_path = output_dir / "scene-scripts.json"

    cleanup_targets = [images_dir, audio_dir, output_script_path]

    print("\n🧹 Step1 预清理下游资源（保留场景拆分草稿）...")
    _remove_targets(cleanup_targets)


def _remove_targets(targets: list[Path]) -> None:
    seen: set[Path] = set()
    removed_any = False
    for target in targets:
        resolved = target.resolve()
        if resolved in seen:
            continue
        seen.add(resolved)
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
