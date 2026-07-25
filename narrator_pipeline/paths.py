"""Package and repository path anchors for narrator_pipeline."""

from __future__ import annotations

from dataclasses import dataclass
from pathlib import Path

from narrator_pipeline.contracts.scene_split_draft import SCENE_SPLIT_DRAFT_FILENAME

PACKAGE_ROOT = Path(__file__).resolve().parent
REPO_ROOT = PACKAGE_ROOT.parent
NARRATIONS_DIR = REPO_ROOT / "narrations"


@dataclass(frozen=True)
class VideoPaths:
    """由视频名推导的约定路径（口播稿、场景产物、媒体目录）。"""

    name: str
    project_root: Path
    scenes_dir: Path
    scene_split_draft: Path
    scene_scripts: Path
    images_dir: Path
    audio_dir: Path
    narration_txt: Path


def resolve_video_paths(name: str, config: dict) -> VideoPaths:
    project_root = Path(config.get("project_root", REPO_ROOT))
    scenes_dir = project_root / "src" / "remotions" / name / "scenes"
    narrations_dir = project_root / "narrations"
    return VideoPaths(
        name=name,
        project_root=project_root,
        scenes_dir=scenes_dir,
        scene_split_draft=scenes_dir / SCENE_SPLIT_DRAFT_FILENAME,
        scene_scripts=scenes_dir / "scene-scripts.json",
        images_dir=project_root / "public" / "images" / name,
        audio_dir=project_root / "public" / "audio" / name,
        narration_txt=narrations_dir / f"{name}.txt",
    )
