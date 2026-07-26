"""云端工作区工程读写与 ZIP 导入导出。"""

from __future__ import annotations

import io
import json
import re
import zipfile
from dataclasses import dataclass
from pathlib import Path

from narrator_pipeline.contracts.scene_script_validate import (
    validate_and_normalize_scene_scripts,
)
from narrator_pipeline.contracts.scene_split_draft import (
    load_scene_split_draft,
    save_scene_split_draft,
    validate_scene_split_draft,
)
from narrator_pipeline.contracts.template_registry import TEMPLATE_REGISTRY
from narrator_pipeline.paths import VideoPaths, resolve_video_paths
from narrator_pipeline.web.settings import pipeline_config_with_workspace, workspace_root

_NAME_RE = re.compile(r"^[\w\u4e00-\u9fff][\w\u4e00-\u9fff\- ]{0,63}$")


@dataclass(frozen=True)
class ProjectInfo:
    name: str
    hasNarration: bool
    hasDraft: bool
    hasScripts: bool
    topic: str | None


def assert_valid_name(name: str) -> str:
    name = name.strip()
    if not _NAME_RE.match(name):
        raise ValueError(f"非法工程名: {name!r}")
    if ".." in name or "/" in name or "\\" in name:
        raise ValueError(f"非法工程名: {name!r}")
    return name


def _config() -> dict:
    return pipeline_config_with_workspace()


def ensure_workspace() -> Path:
    root = workspace_root()
    root.mkdir(parents=True, exist_ok=True)
    (root / "narrations").mkdir(parents=True, exist_ok=True)
    return root


def _project_mtime(paths: VideoPaths) -> float:
    """工程最近修改时间：取口播 / 草稿 / 脚本 / 场景目录中已存在路径的最大 mtime。"""
    candidates = (
        paths.narration_txt,
        paths.scene_split_draft,
        paths.scene_scripts,
        paths.scenes_dir,
        paths.scenes_dir.parent,
    )
    return max(p.stat().st_mtime for p in candidates if p.exists())


def list_projects() -> list[ProjectInfo]:
    ensure_workspace()
    config = _config()
    names: set[str] = set()
    narrations = workspace_root() / "narrations"
    if narrations.is_dir():
        for p in narrations.glob("*.txt"):
            names.add(p.stem)
    remotions = workspace_root() / "src" / "remotions"
    if remotions.is_dir():
        for d in remotions.iterdir():
            if d.is_dir():
                names.add(d.name)

    result: list[tuple[float, ProjectInfo]] = []
    for name in names:
        paths = resolve_video_paths(name, config)
        topic = None
        if paths.scene_scripts.is_file():
            with open(paths.scene_scripts, encoding="utf-8") as f:
                data = json.load(f)
            if isinstance(data, dict):
                t = data.get("topic")
                topic = t if isinstance(t, str) else None
        elif paths.scene_split_draft.is_file():
            with open(paths.scene_split_draft, encoding="utf-8") as f:
                data = json.load(f)
            if isinstance(data, dict):
                t = data.get("topic")
                topic = t if isinstance(t, str) else None
        result.append(
            (
                _project_mtime(paths),
                ProjectInfo(
                    name=name,
                    hasNarration=paths.narration_txt.is_file(),
                    hasDraft=paths.scene_split_draft.is_file(),
                    hasScripts=paths.scene_scripts.is_file(),
                    topic=topic,
                ),
            )
        )
    result.sort(key=lambda item: item[0], reverse=True)
    return [info for _, info in result]


def create_project(name: str, narration_text: str) -> ProjectInfo:
    name = assert_valid_name(name)
    ensure_workspace()
    config = _config()
    paths = resolve_video_paths(name, config)
    if paths.narration_txt.exists() or paths.scenes_dir.exists():
        raise ValueError(f"工程已存在: {name}")
    paths.narration_txt.parent.mkdir(parents=True, exist_ok=True)
    paths.narration_txt.write_text(narration_text.strip() + "\n", encoding="utf-8")
    paths.scenes_dir.mkdir(parents=True, exist_ok=True)
    return ProjectInfo(
        name=name,
        hasNarration=True,
        hasDraft=False,
        hasScripts=False,
        topic=None,
    )


def delete_project(name: str) -> None:
    name = assert_valid_name(name)
    config = _config()
    paths = resolve_video_paths(name, config)
    if paths.narration_txt.is_file():
        paths.narration_txt.unlink()
    import shutil

    remotion_dir = paths.scenes_dir.parent
    if remotion_dir.is_dir():
        shutil.rmtree(remotion_dir)


def read_draft(name: str) -> dict:
    name = assert_valid_name(name)
    paths = resolve_video_paths(name, _config())
    return load_scene_split_draft(paths.scene_split_draft)


def write_draft(name: str, draft: dict) -> dict:
    name = assert_valid_name(name)
    paths = resolve_video_paths(name, _config())
    validate_scene_split_draft(draft, path=paths.scene_split_draft)
    save_scene_split_draft(draft, paths.scene_split_draft)
    return draft


def read_scripts(name: str) -> dict:
    name = assert_valid_name(name)
    paths = resolve_video_paths(name, _config())
    if not paths.scene_scripts.is_file():
        raise FileNotFoundError(f"scene-scripts 不存在: {paths.scene_scripts}")
    with open(paths.scene_scripts, encoding="utf-8") as f:
        data = json.load(f)
    if not isinstance(data, dict):
        raise ValueError("scene-scripts.json 根节点必须是对象")
    return data


def write_scripts(name: str, scripts: dict) -> tuple[dict, list[str]]:
    """validate_and_normalize 后落盘；返回 (normalized, warnings)。校验失败抛 ScriptValidationError。"""
    name = assert_valid_name(name)
    paths = resolve_video_paths(name, _config())
    data = json.loads(json.dumps(scripts))
    normalized, warnings = validate_and_normalize_scene_scripts(
        data, TEMPLATE_REGISTRY
    )
    # 文本对齐等硬错误由调用方在需要时通过完整校验路径处理；
    # 此处与 CLI validate 一致：schema normalize + warnings。
    hard = [w for w in warnings if not str(w).startswith("[ADVISORY]")]
    # validate_and_normalize 本身对多数问题只 warn；Step1 另有对齐校验。
    # 保存策略 C：能规范化则写回。若存在非 advisory 且表示非法结构的，仍写回并返回 warnings，
    # 但 ScriptValidationError 仅在 validate 抛错时出现（当前函数不抛）。
    _ = hard
    paths.scenes_dir.mkdir(parents=True, exist_ok=True)
    with open(paths.scene_scripts, "w", encoding="utf-8") as f:
        json.dump(normalized, f, ensure_ascii=False, indent=2)
    return normalized, warnings


def build_sync_preview(scripts: dict) -> dict:
    """从 scripts 反推 draft 与拼接口播文本（不落盘）。"""
    topic = scripts.get("topic")
    if not isinstance(topic, str) or not topic.strip():
        raise ValueError("scripts 缺少有效 topic")
    scenes_in = scripts.get("scenes")
    if not isinstance(scenes_in, list) or not scenes_in:
        raise ValueError("scripts.scenes 为空")

    draft_scenes: list[dict] = []
    narration_parts: list[str] = []
    for i, scene in enumerate(scenes_in):
        if not isinstance(scene, dict):
            raise ValueError(f"scenes[{i}] 不是对象")
        sid = scene.get("sceneId")
        if not isinstance(sid, str) or not sid.strip():
            raise ValueError(f"scenes[{i}] 缺少 sceneId")
        sname = scene.get("sceneName")
        items = scene.get("items", [])
        texts: list[str] = []
        if isinstance(items, list):
            for item in items:
                if not isinstance(item, dict):
                    continue
                content = item.get("content", [])
                if not isinstance(content, list):
                    continue
                for c in content:
                    if isinstance(c, dict) and isinstance(c.get("text"), str):
                        texts.append(c["text"])
        scene_text = "".join(texts)
        if not scene_text.strip():
            raise ValueError(f"scene {sid} 反推 text 为空")
        entry: dict = {"sceneId": sid, "text": scene_text}
        if isinstance(sname, str) and sname.strip():
            entry["sceneName"] = sname.strip()
        draft_scenes.append(entry)
        narration_parts.append(scene_text)

    draft = {"topic": topic.strip(), "scenes": draft_scenes}
    narration = "".join(narration_parts)
    return {"draft": draft, "narrationText": narration}


def apply_sync_from_scripts(
    name: str, scripts: dict, *, update_narration: bool
) -> dict:
    name = assert_valid_name(name)
    preview = build_sync_preview(scripts)
    draft = preview["draft"]
    write_draft(name, draft)
    normalized, warnings = write_scripts(name, scripts)
    if update_narration:
        paths = resolve_video_paths(name, _config())
        paths.narration_txt.parent.mkdir(parents=True, exist_ok=True)
        paths.narration_txt.write_text(
            preview["narrationText"].rstrip() + "\n", encoding="utf-8"
        )
    return {
        "draft": draft,
        "scripts": normalized,
        "warnings": warnings,
        "narrationUpdated": update_narration,
        "narrationText": preview["narrationText"],
    }


def export_zip_bytes(name: str) -> bytes:
    name = assert_valid_name(name)
    paths = resolve_video_paths(name, _config())
    buf = io.BytesIO()
    with zipfile.ZipFile(buf, "w", zipfile.ZIP_DEFLATED) as zf:
        if paths.narration_txt.is_file():
            zf.write(
                paths.narration_txt,
                arcname=f"narrations/{name}.txt",
            )
        if paths.scene_split_draft.is_file():
            zf.write(
                paths.scene_split_draft,
                arcname=f"src/remotions/{name}/scenes/{paths.scene_split_draft.name}",
            )
        if paths.scene_scripts.is_file():
            zf.write(
                paths.scene_scripts,
                arcname=f"src/remotions/{name}/scenes/scene-scripts.json",
            )
    return buf.getvalue()


def import_zip_bytes(data: bytes) -> str:
    """导入 ZIP，返回工程 name。要求含约定路径文件。"""
    ensure_workspace()
    root = workspace_root()
    with zipfile.ZipFile(io.BytesIO(data), "r") as zf:
        names = zf.namelist()
        project_name: str | None = None
        for n in names:
            m = re.match(r"^narrations/([^/]+)\.txt$", n.replace("\\", "/"))
            if m:
                project_name = m.group(1)
                break
            m = re.match(
                r"^src/remotions/([^/]+)/scenes/", n.replace("\\", "/")
            )
            if m:
                project_name = m.group(1)
                break
        if not project_name:
            raise ValueError("ZIP 中未找到 narrations/{name}.txt 或 src/remotions/{name}/scenes/")
        project_name = assert_valid_name(project_name)

        for info in zf.infolist():
            if info.is_dir():
                continue
            rel = info.filename.replace("\\", "/")
            if rel.startswith("narrations/") or rel.startswith("src/remotions/"):
                target = root / rel
                target.parent.mkdir(parents=True, exist_ok=True)
                with zf.open(info) as src, open(target, "wb") as dst:
                    dst.write(src.read())
    return project_name


def template_catalog() -> list[dict]:
    items: list[dict] = []
    for name, meta in sorted(TEMPLATE_REGISTRY.items()):
        if not isinstance(meta, dict):
            continue
        items.append(
            {
                "name": name,
                "label": meta.get("chinese_name") or name,
                "description": meta.get("description"),
                "paramSchema": meta.get("param_schema") or {"type": "object", "properties": {}},
                "contentMinItems": meta.get("content_min_items"),
                "contentMaxItems": meta.get("content_max_items"),
                "imageCount": meta.get("image_count"),
                "paramArraySyncContent": meta.get("param_array_sync_content"),
            }
        )
    return items


def _scene_text_for_param(name: str, scene: dict, scene_idx: int) -> str:
    """局部参数重生用的场景口播：优先草稿 scene.text，否则拼接各 item.content。"""
    paths = resolve_video_paths(name, _config())
    if paths.scene_split_draft.is_file():
        draft = read_draft(name)
        scenes = draft.get("scenes") if isinstance(draft, dict) else None
        if isinstance(scenes, list):
            if 0 <= scene_idx < len(scenes):
                draft_scene = scenes[scene_idx]
                if isinstance(draft_scene, dict):
                    text = str(draft_scene.get("text") or "").strip()
                    if text:
                        return text
            sid = scene.get("sceneId")
            for ds in scenes:
                if isinstance(ds, dict) and ds.get("sceneId") == sid:
                    text = str(ds.get("text") or "").strip()
                    if text:
                        return text

    parts: list[str] = []
    for it in scene.get("items") or []:
        if not isinstance(it, dict):
            continue
        for ci in it.get("content") or []:
            if isinstance(ci, dict):
                t = str(ci.get("text") or "")
                if t:
                    parts.append(t)
    return "".join(parts)


def regenerate_item_param(
    name: str,
    scripts: dict,
    scene_idx: int,
    item_idx: int,
    *,
    llm_provider: str | None = None,
    llm_model: str | None = None,
) -> dict:
    """
    在保留 template 与 content 的前提下，仅重新生成指定 item 的 param。
    使用调用方传入的 scripts（可为未落盘的编辑中状态），不写盘。
    """
    from narrator_pipeline.analysis.stages.param_step import analyze_param_for_item
    from narrator_pipeline.common.step_llm import create_llm_runtime

    name = assert_valid_name(name)
    scenes = scripts.get("scenes")
    if not isinstance(scenes, list) or scene_idx >= len(scenes):
        raise ValueError(f"sceneIdx 越界: {scene_idx}")
    scene = scenes[scene_idx]
    if not isinstance(scene, dict):
        raise ValueError("scene 无效")
    items = scene.get("items")
    if not isinstance(items, list) or item_idx >= len(items):
        raise ValueError(f"itemIdx 越界: {item_idx}")
    item = items[item_idx]
    if not isinstance(item, dict):
        raise ValueError("item 无效")

    scene_text = _scene_text_for_param(name, scene, scene_idx)
    item_work = dict(item)
    content = item_work.get("content")
    if not isinstance(content, list) or not any(
        isinstance(ci, dict) and str(ci.get("text", "")).strip() for ci in content
    ):
        raise ValueError("item.content 无有效口播片段，无法局部参数重生")

    texts = [
        str(ci.get("text", ""))
        for ci in content
        if isinstance(ci, dict) and str(ci.get("text", "")).strip()
    ]
    item_work["text"] = "".join(texts)

    config = _config()
    client, model, _, _ = create_llm_runtime(
        config, llm_provider=llm_provider, llm_model=llm_model
    )
    analyze_param_for_item(
        client,
        model,
        scene_text,
        item_work,
        TEMPLATE_REGISTRY,
    )
    param = item_work.get("param")
    if not isinstance(param, dict):
        raise ValueError("局部参数重生未返回有效 param")
    return {"param": param}
