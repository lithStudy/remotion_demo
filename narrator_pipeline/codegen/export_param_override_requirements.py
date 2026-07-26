#!/usr/bin/env python3
"""导出 scene_studio 参数覆写检查所需的 schema 清单。"""

from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path

from narrator_pipeline.paths import REPO_ROOT


def _items_may_be_object(items: object) -> bool:
	if not items:
		return False
	if isinstance(items, list):
		return any(_items_may_be_object(i) for i in items)
	if not isinstance(items, dict):
		return False
	if items.get("type") == "object" or items.get("properties") or items.get("$ref"):
		return True
	for key in ("oneOf", "anyOf"):
		if key in items:
			return any(_items_may_be_object(b) for b in items[key])
	return False


def _is_object_schema(schema: object) -> bool:
	if not isinstance(schema, dict):
		return False
	if schema.get("type") == "object" or schema.get("properties") or schema.get("$ref"):
		return True
	for key in ("oneOf", "anyOf"):
		if key in schema:
			return any(_is_object_schema(b) for b in schema[key])
	return False


def needs_override(prop: dict) -> bool:
	if prop.get("type") == "array":
		return _items_may_be_object(prop.get("items"))
	return _is_object_schema(prop)


def build_requirements() -> dict:
	# 延迟导入，确保可独立 reload
	from narrator_pipeline.contracts import template_registry as reg_mod

	registry = reg_mod.get_all_templates()
	templates: dict[str, dict] = {}
	for name, meta in sorted(registry.items()):
		schema = meta.get("param_schema") or {}
		props = schema.get("properties") or {}
		required_keys = [k for k, p in props.items() if isinstance(p, dict) and needs_override(p)]
		templates[name] = {
			"requiredOverrideKeys": required_keys,
			"paramSchema": schema,
		}
	return {
		"version": 1,
		"templates": templates,
	}


def main(argv: list[str] | None = None) -> int:
	parser = argparse.ArgumentParser(description="导出 param override 检查清单")
	parser.add_argument(
		"--output",
		type=Path,
		default=REPO_ROOT / "scene_studio" / "src" / "param_editor" / "generated" / "paramOverrideRequirements.json",
	)
	args = parser.parse_args(argv)
	payload = build_requirements()
	args.output.parent.mkdir(parents=True, exist_ok=True)
	args.output.write_text(
		json.dumps(payload, ensure_ascii=False, indent=2) + "\n",
		encoding="utf-8",
	)
	n_keys = sum(len(t["requiredOverrideKeys"]) for t in payload["templates"].values())
	print(f"Wrote {args.output} ({len(payload['templates'])} templates, {n_keys} required keys)")
	return 0


if __name__ == "__main__":
	sys.exit(main())
