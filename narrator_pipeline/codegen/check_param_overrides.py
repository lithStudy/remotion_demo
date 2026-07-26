#!/usr/bin/env python3
"""检查 scene_studio param overrides 是否覆盖 requiredOverrideKeys。"""

from __future__ import annotations

import json
import re
import sys
from pathlib import Path

from narrator_pipeline.codegen.export_param_override_requirements import (
	build_requirements,
)
from narrator_pipeline.paths import REPO_ROOT

OVERRIDES_DIR = (
	REPO_ROOT / "scene_studio" / "src" / "param_editor" / "overrides"
)
REQ_JSON = (
	REPO_ROOT
	/ "scene_studio"
	/ "src"
	/ "param_editor"
	/ "generated"
	/ "paramOverrideRequirements.json"
)


def _parse_override_keys(tsx: str) -> set[str]:
	m = re.search(
		r"export\s+const\s+fieldOverrides\s*=\s*\{([^}]*)\}",
		tsx,
		re.S,
	)
	if not m:
		return set()
	body = m.group(1)
	return set(re.findall(r"^\s*([A-Za-z_][A-Za-z0-9_]*)\s*:", body, re.M))


def _parse_template_name(tsx: str) -> str | None:
	m = re.search(r'export\s+const\s+template\s*=\s*"([^"]+)"', tsx)
	return m.group(1) if m else None


def check() -> list[str]:
	# 以当前扫描为准，并写回 JSON，保证 build 同源
	payload = build_requirements()
	REQ_JSON.parent.mkdir(parents=True, exist_ok=True)
	REQ_JSON.write_text(
		json.dumps(payload, ensure_ascii=False, indent=2) + "\n",
		encoding="utf-8",
	)

	errors: list[str] = []
	override_map: dict[str, set[str]] = {}

	for path in sorted(OVERRIDES_DIR.glob("*.tsx")):
		text = path.read_text(encoding="utf-8")
		name = _parse_template_name(text)
		if not name:
			errors.append(f"{path.name}: 缺少 export const template")
			continue
		keys = _parse_override_keys(text)
		if name in override_map:
			errors.append(f"{name}: 重复 override 文件")
		override_map[name] = keys

	for template, meta in payload["templates"].items():
		required = meta["requiredOverrideKeys"]
		if not required:
			if template in override_map and override_map[template]:
				for key in sorted(override_map[template]):
					errors.append(f'{template}: fieldOverrides 含多余 key "{key}"')
			continue
		if template not in override_map:
			errors.append(
				f"{template}: 缺少 overrides/{template}.tsx（需要: {', '.join(required)}）"
			)
			continue
		keys = override_map[template]
		for key in required:
			if key not in keys:
				errors.append(f'{template}: 缺少 fieldOverrides["{key}"]')
		for key in keys:
			if key not in required:
				errors.append(f'{template}: fieldOverrides 含多余 key "{key}"')

	for template in override_map:
		if template not in payload["templates"]:
			errors.append(f"{template}: override 存在但注册表中无此模板")

	return errors


def main() -> int:
	errors = check()
	if errors:
		print("param override 检查失败:")
		for e in errors:
			print(f"- {e}")
		return 1
	print("param override 检查通过")
	return 0


if __name__ == "__main__":
	sys.exit(main())
