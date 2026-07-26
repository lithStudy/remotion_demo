"""从 scene_studio 目录调用仓库根下的 narrator_pipeline 模块。"""

from __future__ import annotations

import runpy
import sys
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parents[2]
sys.path.insert(0, str(REPO_ROOT))

if len(sys.argv) < 2:
	raise SystemExit("usage: run_pipeline_mod.py <module.name>")

mod = sys.argv[1]
sys.argv = [mod, *sys.argv[2:]]
runpy.run_module(mod, run_name="__main__")
