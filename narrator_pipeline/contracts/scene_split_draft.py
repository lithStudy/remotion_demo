"""场景拆分草稿（scene-split-draft.json）读写与校验。"""

import json
from pathlib import Path

from narrator_pipeline.contracts.validation_errors import ScriptValidationError

SCENE_SPLIT_DRAFT_FILENAME = "scene-split-draft.json"


def scene_split_draft_path(output_dir: Path, override: str | None = None) -> Path:
    if override and str(override).strip():
        return Path(override).resolve()
    return output_dir / SCENE_SPLIT_DRAFT_FILENAME


def validate_scene_split_draft(draft: dict, *, path: Path) -> None:
    if not isinstance(draft, dict):
        raise ScriptValidationError(f"场景拆分草稿不是 JSON 对象: {path}", path=str(path))
    topic = draft.get("topic")
    if not isinstance(topic, str) or not topic.strip():
        raise ScriptValidationError(f"场景拆分草稿缺少有效 topic: {path}", path=str(path))
    scenes = draft.get("scenes")
    if not isinstance(scenes, list) or not scenes:
        raise ScriptValidationError(f"场景拆分草稿 scenes 为空: {path}", path=str(path))
    for i, scene in enumerate(scenes):
        if not isinstance(scene, dict):
            raise ScriptValidationError(
                f"scenes[{i}] 不是对象: {path}",
                path=str(path),
            )
        sid = scene.get("sceneId")
        if not isinstance(sid, str) or not sid.strip():
            raise ScriptValidationError(
                f"scenes[{i}] 缺少 sceneId: {path}",
                path=str(path),
            )
        text = scene.get("text")
        if not isinstance(text, str) or not text.strip():
            raise ScriptValidationError(
                f"scenes[{i}] ({sid}) 缺少 text: {path}",
                path=str(path),
            )


def save_scene_split_draft(draft: dict, path: Path) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    with open(path, "w", encoding="utf-8") as f:
        json.dump(draft, f, ensure_ascii=False, indent=2)


def load_scene_split_draft(path: Path) -> dict:
    if not path.is_file():
        raise ScriptValidationError(f"场景拆分草稿不存在: {path}", path=str(path))
    with open(path, "r", encoding="utf-8") as f:
        draft = json.load(f)
    validate_scene_split_draft(draft, path=path)
    return draft
