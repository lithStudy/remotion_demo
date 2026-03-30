#!/usr/bin/env python3
"""
对 Step1 输出的 scene-scripts 做注册表校验与归一化。

- 未知 template → 回退到 config.default_template（默认 CENTER_FOCUS）并记录 warning
- param 按 param_schema（JSON Schema 子集）递归校验与 enum 钳制（param_schema_tools）
- 必填字段缺失或空字符串 → warning（不强行填占位，避免污染原文）
- content 缺失或全无有效 text → 优先用 item.text，其次 coreSentence 回填单条字幕并 warning
- content 条数与 content_min_items / content_max_items（若模板 meta 有）→ warning
"""

from __future__ import annotations

from typing import Any

from param_schema_tools import validate_param_with_schema

# 与 TemplateContentRenderer 使用的 public/audio/effects/{id}.wav 一致
_ANCHOR_SFX_IDS = frozenset({"impact_thud", "ping", "woosh"})


def _content_len(content: Any) -> int:
	if not isinstance(content, list):
		return 0
	return len(content)


def _normalize_missing_content(
	param: dict,
	item: dict,
	scene_id: str,
	order: Any,
	tname: str,
	warnings: list[str],
) -> None:
	"""content 缺失或全无有效 text 时，用 item.text 或 coreSentence 回填一条字幕。"""
	content = param.get("content")
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
		cs = param.get("coreSentence")
		if isinstance(cs, str) and cs.strip():
			fallback = cs.strip()
	if fallback is None:
		return
	warnings.append(
		f"[{scene_id}] item order={order} 模板 {tname} content 缺失或无效，已用兜底填充为单条字幕"
	)
	param["content"] = [{"text": fallback}]


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
				warnings.append(f"[{scene_id}] item order={order} 缺少 template，已设为 {default_template}")
				item["template"] = default_template
				tname = default_template
			tname = tname.strip()
			if tname not in registry:
				warnings.append(
					f"[{scene_id}] item order={order} 未知模板 {tname!r}，已回退为 {default_template}"
				)
				item["template"] = default_template
				tname = default_template

			tmpl = registry[tname]
			param = item.get("param")
			if not isinstance(param, dict):
				warnings.append(f"[{scene_id}] item order={order} param 非对象，已改为 {{}}")
				item["param"] = {}
				param = item["param"]

			schema = tmpl.get("param_schema") or {}

			_normalize_missing_content(param, item, scene_id, order, tname, warnings)

			def _schema_warn(msg: str) -> None:
				warnings.append(f"[{scene_id}] item order={order} 模板 {tname} {msg}")

			content = param.get("content")
			clen_pre = _content_len(content)
			validate_param_with_schema(
				param,
				schema if isinstance(schema, dict) else {},
				content_len=clen_pre,
				warn=_schema_warn,
			)

			# content 条数（可选）
			cmin = tmpl.get("content_min_items")
			cmax = tmpl.get("content_max_items")
			content = param.get("content")
			clen = _content_len(content)
			if isinstance(cmin, int) and clen < cmin:
				warnings.append(
					f"[{scene_id}] item order={order} 模板 {tname} content 条数 {clen} 少于 content_min_items={cmin}"
				)
			if isinstance(cmax, int) and clen > cmax:
				warnings.append(
					f"[{scene_id}] item order={order} 模板 {tname} content 条数 {clen} 多于 content_max_items={cmax}"
				)

			# 非空 content 建议（兜底后仍为空才告警）
			if clen == 0:
				warnings.append(f"[{scene_id}] item order={order} 模板 {tname} content 为空且无法兜底")

			# 每条 content 必须是对象
			if isinstance(content, list):
				for idx, ci in enumerate(content):
					if not isinstance(ci, dict):
						warnings.append(
							f"[{scene_id}] item order={order} 模板 {tname} content[{idx}] 类型错误，必须为对象格式"
						)

			anchors = param.get("anchors")
			if anchors is None:
				anchors = []
				param["anchors"] = anchors
			elif not isinstance(anchors, list):
				warnings.append(
					f"[{scene_id}] item order={order} 模板 {tname} anchors 非数组，已重置为空数组"
				)
				anchors = []
				param["anchors"] = anchors

			valid_anchors = []
			for aidx, anchor in enumerate(anchors):
				if not isinstance(anchor, dict):
					warnings.append(
						f"[{scene_id}] item order={order} 模板 {tname} anchors[{aidx}] 非对象，已丢弃"
					)
					continue
				atext = anchor.get("text")
				show_from = anchor.get("showFrom")
				if not isinstance(atext, str) or not atext.strip():
					warnings.append(
						f"[{scene_id}] item order={order} 模板 {tname} anchors[{aidx}].text 为空，已丢弃"
					)
					continue
				if not isinstance(show_from, int) or show_from < 0 or show_from >= clen:
					warnings.append(
						f"[{scene_id}] item order={order} 模板 {tname} anchors[{aidx}].showFrom={show_from!r} 非法，已丢弃"
					)
					continue
				ae = anchor.get("audioEffect")
				if ae is not None and ae != "" and ae not in _ANCHOR_SFX_IDS:
					warnings.append(
						f"[{scene_id}] item order={order} 模板 {tname} anchors[{aidx}].audioEffect={ae!r} 非法，已清除"
					)
					anchor["audioEffect"] = None
				valid_anchors.append(anchor)
			param["anchors"] = valid_anchors

			if tmpl.get("content_anchor_required") is True and len(valid_anchors) == 0:
				warnings.append(
					f"[{scene_id}] item order={order} 模板 {tname} 要求非空 anchors，但当前为空"
				)

	return data, warnings
