#!/usr/bin/env python3
"""
对 Step1 输出的 scene-scripts 做注册表校验与归一化。

- 未知 template → 回退到 config.default_template（默认 CENTER_FOCUS）并记录 warning
- param 按 param_schema（JSON Schema 子集）递归校验与 enum 钳制（param_schema_tools）
- 必填字段缺失或空字符串 → warning（不强行填占位，避免污染原文）
- item.content 缺失或全无有效 text → 优先用 item.text，其次 param.coreSentence 回填单条字幕并 warning
- content 条数与 content_min_items / content_max_items（若模板 meta 有）→ 针对 item.content 告警
"""

from __future__ import annotations

from typing import Any

from param_schema_tools import validate_param_with_schema

def _content_len(content: Any) -> int:
	if not isinstance(content, list):
		return 0
	return len(content)


def _normalize_missing_content(
	item: dict,
	scene_id: str,
	order: Any,
	tname: str,
	warnings: list[str],
) -> None:
	"""item.content 缺失或全无有效 text 时，用 item.text 或 param.coreSentence 回填一条字幕。"""
	content = item.get("content")
	has_nonempty = (
		isinstance(content, list)
		and any(
			isinstance(ci, dict) and str(ci.get("text", "")).strip()
			for ci in content
		)
	)
	if has_nonempty:
		return
	fallback = None
	it = item.get("text")
	if isinstance(it, str) and it.strip():
		fallback = it.strip()
	else:
		param = item.get("param")
		if isinstance(param, dict):
			cs = param.get("coreSentence")
			if isinstance(cs, str) and cs.strip():
				fallback = cs.strip()
	if fallback is None:
		return
	warnings.append(
		f"[{scene_id}] item order={order} 模板 {tname} content 缺失或无效，已用兜底填充为单条字幕"
	)
	item["content"] = [{"text": fallback}]


def validate_and_normalize_scene_scripts(
	data: dict,
	registry: dict[str, dict],
	*,
	default_template: str = "CENTER_FOCUS",
) -> tuple[dict, list[str]]:
	"""
	就地修改 data 并返回 (data, warnings)。
	"""
	warnings: list[str] = []
	if default_template not in registry:
		default_template = "CENTER_FOCUS" if "CENTER_FOCUS" in registry else next(iter(registry.keys()))

	for scene in data.get("scenes", []):
		scene_id = scene.get("sceneId", "?")
		for item in scene.get("items", []):
			order = item.get("order", "?")
			tname = item.get("template")
			if not isinstance(tname, str) or not tname.strip():
				warnings.append(f"[{scene_id}] item order={order} 缺少 template（严格模式：不回退）")
				# 无模板无法做后续 schema 校验与 content 规则校验
				continue
			tname = tname.strip()
			if tname not in registry:
				warnings.append(f"[{scene_id}] item order={order} 未知模板 {tname!r}（严格模式：不回退）")
				continue

			tmpl = registry[tname]
			param = item.get("param")
			if not isinstance(param, dict):
				warnings.append(f"[{scene_id}] item order={order} 模板 {tname} param 非对象（严格模式：不重置）")
				continue

			# 口播与时长的唯一权威在 item 上；若模型误写入 param 则剔除
			param.pop("content", None)
			param.pop("totalDurationFrames", None)

			schema = tmpl.get("param_schema") or {}

			# 严格模式：不回填 item.content，仅做告警
			content = item.get("content")
			has_nonempty = (
				isinstance(content, list)
				and any(
					isinstance(ci, dict) and str(ci.get("text", "")).strip()
					for ci in content
				)
			)
			if not has_nonempty:
				warnings.append(
					f"[{scene_id}] item order={order} 模板 {tname} content 缺失或无效（严格模式：不兜底回填）"
				)

			def _schema_warn(msg: str) -> None:
				warnings.append(f"[{scene_id}] item order={order} 模板 {tname} {msg}")

			content = item.get("content")
			clen_pre = _content_len(content)
			validate_param_with_schema(
				param,
				schema if isinstance(schema, dict) else {},
				content_len=clen_pre,
				warn=_schema_warn,
			)

	return data, warnings
