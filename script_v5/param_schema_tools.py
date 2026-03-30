#!/usr/bin/env python3
"""
param_schema：JSON Schema 风格子集 — 递归校验、指南文本、图片提示词收集与回写。
与 src/components/templates 中 templateMeta.param_schema 一致（根为 type: object）。
"""

from __future__ import annotations

import re
from typing import Any, Callable

# 与 shared.ts ImageEnterEffect 一致，合法的图片入场特效类型集合
_IMAGE_ENTER_EFFECTS = frozenset(
	{"breathe", "slideLeft", "slideBottom", "zoomIn", "fadeIn"}
)

# item.content 的 0-based 下标（与 templateMeta 中 integer format 一致；校验时传入 len(item.content)）
CONTENT_INDEX_FORMAT = "content_index"


def _parse_image_count_range(image_count: Any) -> tuple[int | None, int | None]:
	"""解析图片数量范围，返回最小值和最大值（或None）。支持单值、区间字符串等多种输入"""
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


def get_at_path(root: Any, path: list[str | int]) -> Any:
	"""根据路径取出嵌套对象中的值，路径可包含字符串（字典key）或整数（列表索引）"""
	cur: Any = root
	for segment in path:
		if isinstance(segment, int):
			if not isinstance(cur, list) or segment < 0 or segment >= len(cur):
				return None
			cur = cur[segment]
		else:
			if not isinstance(cur, dict):
				return None
			cur = cur.get(segment)
	return cur


def set_at_path(root: dict, path: list[str | int], value: Any) -> bool:
	"""根据路径设置嵌套对象中的值，路径支持字典key或列表索引。成功返回True，否则False"""
	if not path:
		return False
	cur: Any = root
	for segment in path[:-1]:
		if isinstance(segment, int):
			if not isinstance(cur, list) or segment < 0 or segment >= len(cur):
				return False
			cur = cur[segment]
		else:
			if not isinstance(cur, dict):
				return False
			nxt = cur.get(segment)
			if nxt is None:
				return False
			cur = nxt
	last = path[-1]
	if isinstance(last, int):
		if not isinstance(cur, list) or last < 0 or last >= len(cur):
			return False
		cur[last] = value
	else:
		if not isinstance(cur, dict):
			return False
		cur[last] = value
	return True


def task_key(scene_id: str, order: Any, path: list[str | int]) -> str:
	"""生成唯一的图片任务key：与历史 step2 约定一致：scene_order_field 或 scene_order_field_index。"""
	parts = [str(scene_id), str(order)]
	if not path:
		return "_".join(parts)
	parts.append(str(path[0]))
	if len(path) > 1 and isinstance(path[1], int):
		parts.append(str(path[1]))
	return "_".join(parts)


def _is_empty_value(val: Any, schema: dict) -> bool:
	"""判断值是否算作“空”，依据schema类型定义。主要用于必填项校验"""
	st = schema.get("type")
	if val is None:
		return True
	if st == "string":
		return isinstance(val, str) and not val.strip()
	if st in ("number", "integer"):
		return False
	if st == "boolean":
		return False
	if st == "array":
		return not isinstance(val, list) or len(val) == 0
	if st == "object":
		return not isinstance(val, dict)
	return val == "" or val == [] or val == {}


def _normalize_string_enum(
	val: Any,
	schema: dict,
	warn: Callable[[str], None],
	path_s: str,
) -> Any:
	"""字符串枚举校验：不合法则告警（不做自动回退改写）。"""
	enum = schema.get("enum")
	if not enum or not isinstance(enum, list):
		return val
	if val in enum:
		return val
	warn(f"`{path_s}` 值 {val!r} 非法，期望为 {enum!r}")
	return val


def _validate_and_normalize_value(
	val: Any,
	schema: dict,
	*,
	ctx: dict,
	path: list[str | int],
) -> None:
	"""递归校验和归一化单个字段/对象的值（类型、枚举、边界等），不合法时警告。"""
	if val is None:
		return
	param_root: dict = ctx["param_root"]
	warn: Callable[[str], None] = ctx["warn"]
	path_s = ".".join(str(p) for p in path) or "(root)"

	st = schema.get("type")
	if st == "string":
		# 类型校验
		if val is not None and not isinstance(val, str):
			warn(f"`{path_s}` 期望 string，已忽略类型错误归一化")
			return
		# 枚举归一化
		if schema.get("enum"):
			_normalize_string_enum(val, schema, warn, path_s)
		return

	if st == "integer":
		if val is not None and not isinstance(val, int):
			warn(f"`{path_s}` 期望 integer")
			return
		if schema.get("format") == CONTENT_INDEX_FORMAT:
			cur = get_at_path(param_root, path)
			if isinstance(cur, int):
				clen = ctx.get("content_len") or 0
				if clen > 0 and (cur < 0 or cur >= clen):
					warn(f"`{path_s}`={cur!r} 超出 content 索引范围 [0,{clen})")
		return

	if st == "number":
		if val is not None and not isinstance(val, (int, float)):
			warn(f"`{path_s}` 期望 number")
		return

	if st == "boolean":
		# 布尔类型暂不校验
		return

	if st == "array":
		if not isinstance(val, list):
			warn(f"`{path_s}` 期望 array")
			return
		# 校验数组长度范围
		mi, ma = schema.get("minItems"), schema.get("maxItems")
		if isinstance(mi, int) and len(val) < mi:
			warn(f"`{path_s}` 长度 {len(val)} 少于 minItems={mi}")
		if isinstance(ma, int) and len(val) > ma:
			warn(f"`{path_s}` 长度 {len(val)} 多于 maxItems={ma}")
		items = schema.get("items") or {}
		for i, elem in enumerate(val):
			_validate_and_normalize_value(elem, items, ctx=ctx, path=[*path, i])
		return

	if st == "object":
		if not isinstance(val, dict):
			warn(f"`{path_s}` 期望 object")
			return
		# 校验必填key
		props = schema.get("properties") or {}
		req = schema.get("required") or []
		for rk in req:
			if rk not in val or _is_empty_value(val.get(rk), props.get(rk, {})):
				warn(f"`{path_s}.{rk}` 必填缺失或为空")
		# 校验每个key子项
		for key, sub in props.items():
			if key not in val:
				continue
			_validate_and_normalize_value(val[key], sub, ctx=ctx, path=[*path, key])
		return

	warn(f"`{path_s}` 未知 schema.type={st!r}")


def _parent_and_key(root: dict, path: list[str | int]):
	"""返回路径path所指元素的父对象及最后一个key/index"""
	if not path:
		return None, None
	cur: Any = root
	for segment in path[:-1]:
		if isinstance(segment, int):
			if not isinstance(cur, list) or segment < 0 or segment >= len(cur):
				return None, None
			cur = cur[segment]
		else:
			if not isinstance(cur, dict):
				return None, None
			cur = cur.get(segment)
			if cur is None:
				return None, None
	return cur, path[-1]


def _set_parent_key(parent: Any, last: str | int, value: Any) -> None:
	"""将parent对象的key或index设为value。"""
	if isinstance(last, int):
		if isinstance(parent, list) and 0 <= last < len(parent):
			parent[last] = value
	else:
		if isinstance(parent, dict):
			parent[last] = value


def _parent_set(root: dict, path: list[str | int], value: Any) -> None:
	"""根据path找到父节点并赋值（等价于set_at_path的内部辅助方法）"""
	parent, key = _parent_and_key(root, path)
	if parent is not None:
		_set_parent_key(parent, key, value)


def validate_param_with_schema(
	param: dict,
	schema: dict,
	*,
	content_len: int,
	warn: Callable[[str], None],
) -> None:
	"""
	根据schema校验并归一化param参数（失败/类型修正规范后原位修改param），校验警告通过warn回调输出。
	"""
	if not schema or schema.get("type") != "object":
		if schema:
			warn("param_schema 根节点应为 type=object")
		return
	ctx = {
		"param_root": param,
		"warn": warn,
		"content_len": content_len,
	}
	props = schema.get("properties") or {}
	req = schema.get("required") or []
	for rk in req:
		if rk not in param or _is_empty_value(param.get(rk), props.get(rk, {})):
			warn(f"必填字段 `{rk}` 缺失或为空")
	for key, sub in props.items():
		if key not in param:
			continue
		_validate_and_normalize_value(param[key], sub, ctx=ctx, path=[key])
	# 图片项 enterEffect特效归一化（schema已声明enum的已在string分支处理，此处兜底处理旧数据）
	_normalize_image_enter_effects_in_param(param, schema, warn)


def _normalize_image_enter_effects_in_param(
	param: dict,
	schema: dict,
	warn: Callable[[str], None],
) -> None:
	"""
	遍历param与schema对齐的object，若存在 enterEffect 字符串字段且非法则告警（不做自动改写）。
	"""
	def walk_obj(pobj: dict, sobj: dict, pfx: str) -> None:
		"""递归遍历以schema为准的对象树，处理嵌套enterEffect"""
		props = sobj.get("properties") or {}
		for k, sub in props.items():
			if k not in pobj:
				continue
			v = pobj[k]
			st = sub.get("type")
			if st == "object" and isinstance(v, dict):
				walk_obj(v, sub, f"{pfx}.{k}" if pfx else k)
			elif st == "array" and isinstance(v, list):
				items = sub.get("items") or {}
				for i, el in enumerate(v):
					if items.get("type") == "object" and isinstance(el, dict):
						walk_obj(el, items, f"{pfx}.{k}[{i}]" if pfx else f"{k}[{i}]")

	# 第一层：逐顶层字段递归处理所有数组字段、对象字段的enterEffect
	so = schema.get("properties") or {}
	for top, sub in so.items():
		if top not in param:
			continue
		v = param[top]
		if sub.get("type") == "array" and isinstance(v, list):
			items = sub.get("items") or {}
			for i, el in enumerate(v):
				if items.get("type") == "object" and isinstance(el, dict):
					walk_obj(el, items, f"{top}[{i}]")
		elif sub.get("type") == "object" and isinstance(v, dict):
			walk_obj(v, sub, top)


def schema_to_markdown_lines(
	schema: dict,
	*,
	indent: int = 0,
) -> list[str]:
	"""
	将schema结构递归转换为可读的Markdown格式（列表嵌套）。
	"""
	lines: list[str] = []
	pad = "  " * indent
	st = schema.get("type")
	desc = schema.get("description") or ""
	if st == "object":
		props = schema.get("properties") or {}
		req = set(schema.get("required") or [])
		for key, sub in props.items():
			rq = "必填" if key in req else "可选"
			lines.extend(_field_lines(key, sub, rq, indent))
		return lines
	if st == "array":
		items = schema.get("items") or {}
		mi, ma = schema.get("minItems"), schema.get("maxItems")
		bounds = ""
		if isinstance(mi, int) or isinstance(ma, int):
			bounds = "（长度"
			if isinstance(mi, int):
				bounds += f" ≥{mi}"
			if isinstance(ma, int):
				bounds += f" ≤{ma}"
			bounds += "）"
		lines.append(f"{pad}- *数组*{bounds}{(': ' + desc) if desc else ''}")
		if items:
			lines.extend(schema_to_markdown_lines(items, indent=indent + 1))
		return lines
	extra = []
	if schema.get("format") == "image_prompt":
		extra.append("图片提示词")
	if schema.get("format") == CONTENT_INDEX_FORMAT:
		extra.append("content 下标 0-based")
	if schema.get("enum"):
		extra.append("可选值: " + "/".join(str(x) for x in schema["enum"]))
	if schema.get("default") is not None:
		extra.append(f"默认: {schema['default']}")
	sfx = ("；" + "，".join(extra)) if extra else ""
	lines.append(f"{pad}- *{st}*{sfx}{(': ' + desc) if desc else ''}")
	return lines


def _field_lines(name: str, schema: dict, req_label: str, indent: int) -> list[str]:
	"""
	辅助函数：schema_to_markdown_lines。生成单个字段的Markdown描述
	"""
	pad = "  " * indent
	st = schema.get("type")
	desc = schema.get("description") or ""
	head = f"{pad}- `{name}`（{req_label}）"
	if st == "object":
		lines = [head + (f": {desc}" if desc else "")]
		lines.extend(schema_to_markdown_lines(schema, indent=indent + 1))
		return lines
	if st == "array":
		lines = [head + (f": {desc}" if desc else "")]
		lines.extend(schema_to_markdown_lines(schema, indent=indent + 1))
		return lines
	parts = [head]
	if st == "string" and schema.get("format") == "image_prompt":
		parts.append("［图片提示词］")
	if st == "integer" and schema.get("format") == CONTENT_INDEX_FORMAT:
		parts.append("［content 下标］")
	if desc:
		parts.append(desc)
	if schema.get("enum"):
		parts.append("可选值: " + "/".join(str(x) for x in schema["enum"]))
	if schema.get("default") is not None:
		parts.append(f"默认 {schema['default']!r}")
	return ["：".join(parts) if len(parts) > 1 else parts[0]]


def iter_image_prompt_tasks(
	param: dict,
	schema: dict,
	*,
	scene_id: str,
	order: Any,
) -> list[dict]:
	"""
	遍历param，根据schema提取所有图片提示词任务信息。每个任务含scene_id, order, path, field_name, array_index, position, prompt, task_key
	"""
	out: list[dict] = []
	if not isinstance(param, dict) or schema.get("type") != "object":
		return out

	def walk(val: Any, s: dict, path: list[str | int]) -> None:
		st = s.get("type")
		# 提取image_prompt类型的字符串字段
		if st == "string" and s.get("format") == "image_prompt":
			if isinstance(val, str) and val.strip():
				tk = task_key(scene_id, order, path)
				fn = path[0] if path else ""
				arr_idx = path[1] if len(path) > 1 and isinstance(path[1], int) else None
				pos = None
				if len(path) >= 2:
					parent = get_at_path(param, path[:-1])
					if isinstance(parent, dict):
						pos = parent.get("position")
				out.append({
					"scene_id": scene_id,
					"order": order,
					"path": list(path),
					"field_name": fn,
					"array_index": arr_idx,
					"position": pos,
					"prompt": val.strip(),
					"task_key": tk,
				})
			return
		# 递归处理对象字段
		if st == "object" and isinstance(val, dict):
			for k, sub in (s.get("properties") or {}).items():
				if k not in val:
					continue
				walk(val[k], sub, [*path, k])
			return
		# 递归处理数组字段
		if st == "array" and isinstance(val, list):
			items = s.get("items") or {}
			for i, el in enumerate(val):
				walk(el, items, [*path, i])
			return

	props = schema.get("properties") or {}
	for key, sub in props.items():
		if key not in param:
			continue
		walk(param[key], sub, [key])
	return out


def apply_image_task_results(
	param: dict,
	schema: dict,
	task_results: dict[str, str],
	*,
	scene_id: str,
	order: Any,
) -> None:
	"""
	将图片任务识别/生成的结果（task_results）回写到param的对应提示词字段中
	"""
	tasks = iter_image_prompt_tasks(param, schema, scene_id=scene_id, order=order)
	for t in tasks:
		tk = t["task_key"]
		if tk not in task_results:
			continue
		rel = task_results[tk]
		path = t["path"]
		if not path:
			continue
		# 叶为 string：父对象 + 最后一段 key
		parent_path = path[:-1]
		last = path[-1]
		target = param if not parent_path else get_at_path(param, parent_path)
		if isinstance(last, str) and isinstance(target, dict):
			target[last] = rel
		elif isinstance(last, int) and isinstance(target, list) and 0 <= last < len(target):
			# 不应发生：image_prompt 叶子应为 dict 的 string 属性
			pass


def required_keys_from_template(tmpl: dict) -> list[str]:
	"""辅助提取模板（含param_schema）必填字段列表"""
	ps = tmpl.get("param_schema") or {}
	if ps.get("type") == "object":
		return list(ps.get("required") or [])
	return []
