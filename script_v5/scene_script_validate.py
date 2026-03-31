#!/usr/bin/env python3
"""
对 Step1 输出的 scene-scripts 做注册表校验与归一化。

- 未知 template → 回退到 config.default_template（默认 CENTER_FOCUS）并记录 warning
- param_schema 中 enum → 非法值钳制为 default 或 values[0]
- 必填字段缺失或空字符串 → warning（不强行填占位，避免污染原文）
- content 缺失或全无有效 text → 优先用 item.text，其次 coreSentence 回填单条字幕并 warning
- image_prompt_array：images[].enterEffect 若存在则按全局枚举钳制；images 数量与 image_count 范围不一致时 warning
- content 条数与 content_min_items / content_max_items（若模板 meta 有）→ warning
"""

from __future__ import annotations

import re
from typing import Any

# 与 shared.ts ImageEnterEffect 一致
_IMAGE_ENTER_EFFECTS = frozenset(
	{"breathe", "slideLeft", "slideBottom", "zoomIn", "fadeIn"}
)

# 与 TemplateContentRenderer 使用的 public/audio/effects/{id}.wav 一致
_ANCHOR_SFX_IDS = frozenset({"impact_thud", "ping", "woosh"})


def migrate_content_audio_effect_to_anchors(data: dict) -> list[str]:
	"""
	将已废弃的 content[].audioEffect 迁到对应 showFrom 的 anchor.audioEffect，并从 content 中删除该字段。
	无对应 anchor 的条目仅删除字段并告警。
	"""
	warnings: list[str] = []
	for scene in data.get("scenes", []):
		scene_id = scene.get("sceneId", "?")
		for item in scene.get("items", []):
			param = item.get("param")
			if not isinstance(param, dict):
				continue
			content = param.get("content")
			if not isinstance(content, list):
				continue
			anchors = param.get("anchors")
			if not isinstance(anchors, list):
				anchors = []
				param["anchors"] = anchors
			for i, ci in enumerate(content):
				if not isinstance(ci, dict):
					continue
				ae = ci.pop("audioEffect", None)
				if ae is None or ae == "":
					continue
				matched = False
				for a in anchors:
					if isinstance(a, dict) and a.get("showFrom") == i:
						matched = True
						if not a.get("audioEffect"):
							a["audioEffect"] = ae
				if not matched:
					warnings.append(
						f"[{scene_id}] item order={item.get('order', '?')} content[{i}] 有 audioEffect={ae!r} 但无对应 anchor，已丢弃"
					)
	return warnings


def _parse_image_count_range(image_count: Any) -> tuple[int | None, int | None]:
	"""返回 (min, max)，无法解析则 (None, None) 表示不检查。"""
	if image_count is None:
		return None, None
	if isinstance(image_count, (int, float)):
		n = int(image_count)
		return n, n
	s = str(image_count).strip()
	m = re.match(r"^(\d+)\s*-\s*(\d+)$", s)
	if m:
		return int(m.group(1)), int(m.group(2))
	if s.isdigit():
		n = int(s)
		return n, n
	return None, None


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


def _normalize_enum(
	field: str,
	value: Any,
	fdef: dict,
	warnings: list[str],
	scene_id: str,
	order: Any,
) -> Any:
	vals = fdef.get("values") or []
	if not vals:
		return value
	default = fdef.get("default")
	if default is None and vals:
		default = vals[0]
	if value in vals:
		return value
	warnings.append(
		f"[{scene_id}] item order={order} 字段 `{field}` 值 {value!r} 非法，已改为 {default!r}"
	)
	return default


def _normalize_nested_image_effects(
	arr: list,
	warnings: list[str],
	scene_id: str,
	order: Any,
	field_name: str,
) -> None:
	for idx, img in enumerate(arr):
		if not isinstance(img, dict):
			continue
		ef = img.get("enterEffect")
		if ef is None:
			continue
		if ef not in _IMAGE_ENTER_EFFECTS:
			warnings.append(
				f"[{scene_id}] item order={order} `{field_name}[{idx}].enterEffect` "
				f"值 {ef!r} 非法，已改为 breathe"
			)
			img["enterEffect"] = "breathe"


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
	warnings.extend(migrate_content_audio_effect_to_anchors(data))
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

			for field_name, fdef in schema.items():
				if not isinstance(fdef, dict):
					continue
				ftype = fdef.get("type")
				if ftype == "enum":
					val = param.get(field_name)
					if val is not None:
						param[field_name] = _normalize_enum(
							field_name, val, fdef, warnings, scene_id, order
						)
				elif ftype == "image_prompt_array":
					arr = param.get(field_name)
					if isinstance(arr, list):
						_normalize_nested_image_effects(arr, warnings, scene_id, order, field_name)
						ic = tmpl.get("image_count")
						lo, hi = _parse_image_count_range(ic)
						if lo is not None and hi is not None:
							n = len(arr)
							if n < lo or n > hi:
								warnings.append(
									f"[{scene_id}] item order={order} 模板 {tname} `{field_name}` "
									f"数量 {n} 不在期望范围 [{lo},{hi}]（image_count={ic!r}）"
								)
				elif ftype == "list_multi_group_group_array":
					arr = param.get(field_name)
					req = fdef.get("required") is True
					if arr is None:
						if req:
							warnings.append(
								f"[{scene_id}] item order={order} 模板 {tname} 必填字段 `{field_name}` 为空"
							)
						continue
					if not isinstance(arr, list):
						warnings.append(
							f"[{scene_id}] item order={order} 模板 {tname} `{field_name}` 非数组"
						)
						continue
					ic = tmpl.get("image_count")
					lo, hi = _parse_image_count_range(ic)
					if lo is not None and hi is not None:
						n = len(arr)
						if n < lo or n > hi:
							warnings.append(
								f"[{scene_id}] item order={order} 模板 {tname} `{field_name}` "
								f"数量 {n} 不在期望范围 [{lo},{hi}]（image_count={ic!r}）"
							)
					for gidx, group in enumerate(arr):
						if not isinstance(group, dict):
							warnings.append(
								f"[{scene_id}] item order={order} 模板 {tname} `{field_name}[{gidx}]` 非对象"
							)
							continue
						text_index = group.get("textIndex")
						content_len = _content_len(param.get("content"))
						if not isinstance(text_index, int) or text_index < 0 or text_index >= content_len:
							warnings.append(
								f"[{scene_id}] item order={order} 模板 {tname} `{field_name}[{gidx}].textIndex` 非法"
							)
						image = group.get("image")
						if not isinstance(image, dict):
							warnings.append(
								f"[{scene_id}] item order={order} 模板 {tname} `{field_name}[{gidx}].image` 非对象"
							)
							continue
						src = image.get("src")
						if not isinstance(src, str) or not src.strip():
							warnings.append(
								f"[{scene_id}] item order={order} 模板 {tname} `{field_name}[{gidx}].image.src` 为空"
							)
						_normalize_nested_image_effects([image], warnings, scene_id, order, f"{field_name}[{gidx}].image")
						anchor = group.get("anchor")
						if anchor is not None:
							if not isinstance(anchor, dict):
								warnings.append(
									f"[{scene_id}] item order={order} 模板 {tname} `{field_name}[{gidx}].anchor` 非对象"
								)
							else:
								atext = anchor.get("text")
								if not isinstance(atext, str) or not atext.strip():
									warnings.append(
										f"[{scene_id}] item order={order} 模板 {tname} `{field_name}[{gidx}].anchor.text` 为空"
									)

				elif ftype in ("image_prompt", "string"):
					req = fdef.get("required") is True
					if req:
						val = param.get(field_name)
						if val is None or (isinstance(val, str) and not val.strip()):
							warnings.append(
								f"[{scene_id}] item order={order} 模板 {tname} 必填字段 `{field_name}` 为空"
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
