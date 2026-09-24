"""Step1 断点续跑：落盘中间态，按 scene(items) / item(params) 跳过已完成部分。"""

from __future__ import annotations

import hashlib
import json
from pathlib import Path
from typing import Any

CHECKPOINT_VERSION = 1


def compute_draft_hash(draft: dict) -> str:
    payload = json.dumps(
        draft, ensure_ascii=False, sort_keys=True, separators=(",", ":")
    )
    return hashlib.sha256(payload.encode("utf-8")).hexdigest()


def scene_items_done(scene: dict) -> bool:
    items = scene.get("items")
    if not isinstance(items, list) or not items:
        return False
    return all(
        isinstance(it, dict) and str(it.get("template", "") or "").strip()
        for it in items
    )


def item_param_done(item: dict) -> bool:
    return isinstance(item.get("param"), dict)


def clear_checkpoint(path: Path) -> None:
    if path.is_file():
        path.unlink()
        print(f"   🗑️ 已清除 Step1 checkpoint: {path}")


def save_checkpoint(
    path: Path,
    *,
    draft_hash: str,
    phase: str,
    result: dict,
) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    payload: dict[str, Any] = {
        "version": CHECKPOINT_VERSION,
        "draftHash": draft_hash,
        "phase": phase,
        "result": result,
    }
    tmp = path.with_suffix(path.suffix + ".tmp")
    tmp.write_text(
        json.dumps(payload, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    tmp.replace(path)


def load_checkpoint(path: Path, *, expected_draft_hash: str) -> dict | None:
    """
    加载可用 checkpoint 的 result。
    文件缺失 / 版本不符 / draftHash 不一致时返回 None（并删除失效文件）。
    """
    if not path.is_file():
        return None
    try:
        raw = json.loads(path.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError) as ex:
        print(f"   ⚠️ Step1 checkpoint 无法读取，将重新开始: {ex}")
        clear_checkpoint(path)
        return None
    if not isinstance(raw, dict):
        print("   ⚠️ Step1 checkpoint 根节点非对象，将重新开始")
        clear_checkpoint(path)
        return None
    if raw.get("version") != CHECKPOINT_VERSION:
        print("   ⚠️ Step1 checkpoint 版本不匹配，将重新开始")
        clear_checkpoint(path)
        return None
    if raw.get("draftHash") != expected_draft_hash:
        print("   ⚠️ Step1 checkpoint 与当前草稿不一致，将重新开始")
        clear_checkpoint(path)
        return None
    result = raw.get("result")
    if not isinstance(result, dict):
        print("   ⚠️ Step1 checkpoint 缺少 result，将重新开始")
        clear_checkpoint(path)
        return None
    phase = str(raw.get("phase") or "")
    print(f"   🔁 加载 Step1 checkpoint（phase={phase}）: {path}")
    return result


def summarize_progress(result: dict) -> tuple[int, int, int, int]:
    """返回 (scenes_done, scenes_total, params_done, params_total)。"""
    scenes = result.get("scenes", [])
    if not isinstance(scenes, list):
        return 0, 0, 0, 0
    scenes_total = len(scenes)
    scenes_done = sum(1 for s in scenes if isinstance(s, dict) and scene_items_done(s))
    params_done = 0
    params_total = 0
    for s in scenes:
        if not isinstance(s, dict):
            continue
        items = s.get("items", [])
        if not isinstance(items, list):
            continue
        for it in items:
            if not isinstance(it, dict):
                continue
            params_total += 1
            if item_param_done(it):
                params_done += 1
    return scenes_done, scenes_total, params_done, params_total
