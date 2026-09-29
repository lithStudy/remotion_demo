"""python -m narrator_pipeline.web"""

from __future__ import annotations

import os

import uvicorn

from narrator_pipeline.common import load_env
from narrator_pipeline.paths import PACKAGE_ROOT


def main() -> None:
    load_env(PACKAGE_ROOT)
    from narrator_pipeline.web.settings import (
        assert_preview_port_available,
        preview_port,
        remotion_port,
    )
    from narrator_pipeline.web.studio_proxy import start_preview_proxy

    assert_preview_port_available()
    start_preview_proxy()
    print(
        f"预览代理 0.0.0.0:{preview_port()} -> 127.0.0.1:{remotion_port()}。"
        f"只把 {preview_port()} 映射到公网，不要映射 {remotion_port()}。"
    )
    host = os.environ.get("SCENE_STUDIO_HOST", "0.0.0.0")
    port = int(os.environ.get("SCENE_STUDIO_PORT", "21119"))
    uvicorn.run(
        "narrator_pipeline.web.app:app",
        host=host,
        port=port,
        reload=False,
    )


if __name__ == "__main__":
    main()
