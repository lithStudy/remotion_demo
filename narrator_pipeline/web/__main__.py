"""python -m narrator_pipeline.web"""

from __future__ import annotations

import os

import uvicorn

from narrator_pipeline.common import load_env
from narrator_pipeline.paths import PACKAGE_ROOT


def main() -> None:
    load_env(PACKAGE_ROOT)
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
