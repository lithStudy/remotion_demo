"""Web 工作台运行时配置（环境变量）。"""

from __future__ import annotations

import os
from pathlib import Path

from narrator_pipeline.paths import PACKAGE_ROOT, REPO_ROOT


def workspace_root() -> Path:
    """网页工程目录，即脚本所在的仓库根目录。"""
    return REPO_ROOT


def auth_password() -> str:
    password = os.environ.get("SCENE_STUDIO_PASSWORD", "").strip()
    if not password:
        raise RuntimeError(
            "未设置 SCENE_STUDIO_PASSWORD：请在环境或 narrator_pipeline/.env 中配置"
        )
    return password


def remotion_port() -> int:
    """本机 Remotion Studio 端口。不要把这个端口映射到公网。"""
    return int(os.environ.get("SCENE_STUDIO_REMOTION_PORT", "3000"))


def preview_port() -> int:
    """对外预览端口：校验登录 Cookie 后转发到本机 Studio。"""
    return int(os.environ.get("SCENE_STUDIO_PREVIEW_PORT", "21122"))


def assert_preview_port_available() -> int:
    """预览端口不能和网页端口、接口端口相同。"""
    port = preview_port()
    api_port = int(os.environ.get("SCENE_STUDIO_PORT", "21119"))
    ui_port = int(os.environ.get("SCENE_STUDIO_UI_PORT", "21118"))
    if port == api_port or port == ui_port:
        raise RuntimeError(
            f"SCENE_STUDIO_PREVIEW_PORT={port} 与网页或接口端口重复"
            f"（接口 {api_port}，网页 {ui_port}）。请改成一个未占用的端口。"
        )
    return port


def pipeline_config_with_workspace() -> dict:
    from narrator_pipeline.common import load_config, load_env

    load_env(PACKAGE_ROOT)
    config = load_config(PACKAGE_ROOT)
    config = dict(config)
    config["project_root"] = str(workspace_root())
    return config
