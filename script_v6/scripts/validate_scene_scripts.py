#!/usr/bin/env python3
"""
轻量校验入口：对 scene-scripts.json 执行注册表校验。
供 agent 或手动使用。

用法：
  python script_v6/scripts/validate_scene_scripts.py <scene-scripts.json路径>
"""

import json
import sys
from pathlib import Path

script_dir = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(script_dir))

from scene_script_validate import validate_and_normalize_scene_scripts
from template_registry import TEMPLATE_REGISTRY


def main():
    if len(sys.argv) < 2:
        print("用法: python validate_scene_scripts.py <scene-scripts.json>")
        sys.exit(1)

    json_path = Path(sys.argv[1])
    if not json_path.exists():
        print(f"文件不存在: {json_path}")
        sys.exit(1)

    with open(json_path, "r", encoding="utf-8") as f:
        data = json.load(f)

    _, warnings = validate_and_normalize_scene_scripts(data, TEMPLATE_REGISTRY)

    if not warnings:
        print("校验通过，无警告。")
        sys.exit(0)

    print(f"共 {len(warnings)} 条警告：\n")
    for i, w in enumerate(warnings, 1):
        print(f"  {i}. {w}")
    sys.exit(0)


if __name__ == "__main__":
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    main()
