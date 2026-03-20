#!/usr/bin/env python3
"""
对 Step1 输出的 scene-scripts 做注册表校验与归一化。

- 未知 template → 回退到 config.default_template（默认 CENTER_FOCUS）并记录 warning
- param_schema 中 enum → 非法值钳制为 default 或 values[0]
- 必填字段缺失或空字符串 → warning（不强行填占位，避免污染原文）
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

			# 非空 content 建议
			if clen == 0:
				warnings.append(f"[{scene_id}] item order={order} 模板 {tname} content 为空")

			# 每条 content 必须带 anchor（templateMeta.content_anchor_required）
			if tmpl.get("content_anchor_required") is True and isinstance(content, list):
				for idx, ci in enumerate(content):
					if isinstance(ci, str):
						warnings.append(
							f"[{scene_id}] item order={order} 模板 {tname} content[{idx}] 为纯字符串，"
							f"本模板要求对象且含 anchor"
						)
					elif isinstance(ci, dict):
						an = ci.get("anchor")
						if an is None or (isinstance(an, str) and not an.strip()):
							warnings.append(
								f"[{scene_id}] item order={order} 模板 {tname} content[{idx}] 缺少非空 anchor"
							)
					else:
						warnings.append(
							f"[{scene_id}] item order={order} 模板 {tname} content[{idx}] 类型无效，需对象+anchor"
						)

	return data, warnings
