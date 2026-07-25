"""Web 工作台运行时配置（环境变量）。"""

from __future__ import annotations

import os
from pathlib import Path

from narrator_pipeline.paths import PACKAGE_ROOT, REPO_ROOT


def workspace_root() -> Path:
    raw = os.environ.get("SCENE_STUDIO_WORKSPACE", "").strip()
    if raw:
        return Path(raw).resolve()
    return (REPO_ROOT / "scene_studio_workspace").resolve()


def auth_password() -> str:
    password = os.environ.get("SCENE_STUDIO_PASSWORD", "").strip()
    if not password:
        raise RuntimeError(
            "未设置 SCENE_STUDIO_PASSWORD：请在环境或 narrator_pipeline/.env 中配置"
        )
    return password


def pipeline_config_with_workspace() -> dict:
    from narrator_pipeline.common import load_config, load_env

    load_env(PACKAGE_ROOT)
    config = load_config(PACKAGE_ROOT)
    config = dict(config)
    config["project_root"] = str(workspace_root())
    return config
