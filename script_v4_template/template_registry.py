#!/usr/bin/env python3
"""
模板注册表 (Template Registry)

从各模板 TSX 文件中的 templateMeta 导出动态扫描生成注册表。
供 Step1 生成 AI 提示词、Step2 识别图片字段、Step3/Step4 读取默认值。
"""

import json
import re
from pathlib import Path


def _find_brace_match(content: str, start: int) -> int:
	"""从 start 位置（应为 '{'）起，找到匹配的 '}'，忽略字符串内的花括号。返回 '}' 的下标。"""
	if start >= len(content) or content[start] != "{":
		return -1
	depth = 1
	i = start + 1
	in_string = False
	quote_char = None
	escape_next = False
	while i < len(content):
		c = content[i]
		if escape_next:
			escape_next = False
			i += 1
			continue
		if in_string:
			if c == "\\":
				escape_next = True
			elif c == quote_char:
				in_string = False
				quote_char = None
			i += 1
			continue
		if c in ("'", '"'):
			in_string = True
			quote_char = c
			i += 1
			continue
		if c == "{":
			depth += 1
		elif c == "}":
			depth -= 1
			if depth == 0:
				return i
		i += 1
	return -1


def _strip_trailing_commas(s: str) -> str:
	"""去掉 JSON 不允许的尾随逗号，便于 json.loads 解析。"""
	for _ in range(10):
		prev = s
		s = re.sub(r",(\s*})", r"\1", s)
		s = re.sub(r",(\s*])", r"\1", s)
		if s == prev:
			break
	return s


def _strip_ts_assertions(s: str) -> str:
	"""去掉 TypeScript 的 as Type 断言，使提取出的对象可被 json.loads 解析。"""
	return re.sub(r"\s+as\s+[\w\[\]]+", "", s)


def _description_table_cell(description: object, max_len: int = 88) -> str:
	"""汇总表「说明摘要」列：单行、限长，避免 markdown 表格断行。"""
	if description is None:
		return "—"
	text = " ".join(str(description).replace("\n", " ").split())
	if not text:
		return "—"
	if len(text) > max_len:
		return text[: max_len - 1] + "…"
	return text


def _build_registry() -> dict:
	"""扫描 src/components/templates/*.tsx 中的 export const templateMeta，构建注册表。"""
	script_dir = Path(__file__).resolve().parent
	project_root = script_dir.parent
	templates_dir = project_root / "src" / "components" / "templates"
	if not templates_dir.is_dir():
		return {}

	registry = {}
	marker = "export const templateMeta = "
	for tsx_path in sorted(templates_dir.glob("*.tsx")):
		content = tsx_path.read_text(encoding="utf-8")
		if marker not in content:
			continue
		idx = content.find(marker)
		start_brace = content.find("{", idx + len(marker))
		if start_brace == -1:
			continue
		end_brace = _find_brace_match(content, start_brace)
		if end_brace == -1:
			continue
		raw = content[start_brace : end_brace + 1]
		raw = _strip_ts_assertions(raw)
		raw = _strip_trailing_commas(raw)
		try:
			meta = json.loads(raw)
		except json.JSONDecodeError:
			continue
		name = meta.get("name")
		if not name or not isinstance(name, str):
			continue
		# 与旧版一致：注册表 value 不含 "name"，仅用 key 表示模板名
		entry = {k: v for k, v in meta.items() if k != "name"}
		# param_schema 内 required 已为 bool（json 解析后）
		registry[name] = entry

	return registry


# 模块加载时构建一次
TEMPLATE_REGISTRY = _build_registry()


def get_template_to_component_map() -> dict:
	"""
	从各模板 templateMeta.componentExport 构建「模板名 → Remotion 组件导出名」。
	若某模板缺少 componentExport，则不会出现在字典中。
	"""
	out = {}
	for name, tmpl in TEMPLATE_REGISTRY.items():
		ce = tmpl.get("componentExport")
		if isinstance(ce, str) and ce.strip():
			out[name] = ce.strip()
	return out


def get_all_templates() -> dict:
	"""返回全部模板注册表"""
	return TEMPLATE_REGISTRY


def get_template(name: str) -> dict:
	"""查询单个模板，不存在则返回 CENTER_FOCUS"""
	return TEMPLATE_REGISTRY.get(name, TEMPLATE_REGISTRY.get("CENTER_FOCUS", {}))


def get_image_fields(template_name: str) -> list:
	"""
	返回指定模板 param 中属于图片提示词的字段名列表。
	例如 CENTER_FOCUS → ["imageSrc"]
         SPLIT_COMPARE → ["leftSrc", "rightSrc"]
         MULTI_IMAGE → ["images"]  (数组类型，需要特殊处理)
	"""
	tmpl = get_template(template_name)
	schema = tmpl.get("param_schema", {})
	fields = []
	for field_name, field_def in schema.items():
		if field_def.get("type") in ("image_prompt", "image_prompt_array"):
			fields.append(field_name)
	return fields


def generate_ai_prompt_guide(image_style: str = "", include_examples: bool = True) -> str:
	"""
	动态生成 AI 提示词中的模板选择指南。
	含兜底策略、汇总表、各模板 description + param 说明。
	include_examples=True 时额外拼接逐个 item 示例。
	"""
	lines: list[str] = []
	count = len(TEMPLATE_REGISTRY)
	lines.append(f"## 模板选择指南（必须从以下 {count} 个中选一个）\n")

	lines.append("## 模板选型兜底策略\n")
	lines.append(
		"- 为**每个 item** 先判断叙事类型，再选模板：单图叙述 / 双图并列 / 对错避坑 / 步骤清单 / 时间演进 / 多图并列 / 纯文字金句 / 引用出处 / 对话气泡 / 术语卡 / 揭秘锚点（放大镜）/ 冲击收束 / **数据 KPI 大字报（KPI_HERO）/ 双指标对比（STAT_COMPARE）/ 进度占比（PROGRESS_RING）**。\n"
	)
	lines.append(
		"- **严禁通篇使用 `CENTER_FOCUS`**：仅在**无 A/B 对仗、无结构化语义**时兜底。若口播出现**你方 vs 他方/对方**的行为对仗，或分号（；）两侧对立叙述，**必须优先 `SPLIT_COMPARE`**，不得用单图糊弄。\n"
	)
	lines.append("- **`ALERT`** 仅用于强情绪、转折、冲击收束；禁止通篇堆砌。\n")
	lines.append(
		"- **`MAGNIFYING_GLASS`** 仅当该 item 可提供非空 `anchors`（通过 `showFrom` 关联 content 索引）时使用；否则换其他模板。\n"
	)
	lines.append(
		"- **`MULTI_IMAGE`**：仅当口播里有**明确排比或多分点列举**（2～4 个可区分的视觉主体）。单一比喻、混战、笼统「吵架/不同观点」用单图 `CENTER_FOCUS` 或 `ALERT`，禁止为多图而硬凑多张图。\n"
	)
	lines.append(
		"- **`SPLIT_COMPARE`**：左右**两方行为/立场**对照（你讲道理 vs 他甩链接、你客观 vs 对方信息茧房）。与 `MULTI_IMAGE`（多要素平铺）区分：对仗用双分屏，排比用多图。\n"
	)

	lines.append("\n| 模板名 | 心理学原理 | 说明摘要 | 图片数量 | 额外必填参数 |")
	lines.append("|--------|-----------|----------|---------|-------------|")
	for name, tmpl in TEMPLATE_REGISTRY.items():
		extra = ", ".join(tmpl.get("required_extra_params", [])) or "无"
		psych = tmpl.get("psychology") or "—"
		desc_cell = _description_table_cell(tmpl.get("description"))
		img_c = tmpl.get("image_count", "—")
		lines.append(
			f"| {name} | {psych} | {desc_cell} | {img_c} | {extra} |"
		)

	lines.append("\n## 各模板说明与 param 字段\n")
	for name, tmpl in TEMPLATE_REGISTRY.items():
		schema = tmpl.get("param_schema", {})
		lines.append(f"### {name}\n")
		if not schema:
			lines.append("仅需 `content` 数组。")
			if tmpl.get("content_anchor_required") is True:
				lines.append(
					"- **必填**：`param.anchors` 需非空；每项必须包含 `text` 与合法 `showFrom`（0-based content 索引）。"
				)
			cmin = tmpl.get("content_min_items")
			cmax = tmpl.get("content_max_items")
			if isinstance(cmin, int) or isinstance(cmax, int):
				hint = []
				if isinstance(cmin, int):
					hint.append(f"content 至少 {cmin} 条")
				if isinstance(cmax, int):
					hint.append(f"至多 {cmax} 条")
				lines.append(f"- *建议*：{'；'.join(hint)}。")
			lines.append("")
			continue
		for field, fdef in schema.items():
			req = "必填" if fdef.get("required") else "可选"
			desc_f = fdef.get("desc", "")
			if fdef.get("type") == "enum":
				vals = "/".join(fdef.get("values", []))
				default = fdef.get("default", "")
				lines.append(f"- `{field}` ({req}): {desc_f}，可选值: {vals}，默认: {default}")
			elif fdef.get("type") == "image_prompt":
				lines.append(f"- `{field}` ({req}): {desc_f}（填写图片视觉描述）")
			elif fdef.get("type") == "image_prompt_array":
				lines.append(f"- `{field}` ({req}): {desc_f}（数组，每项含 src/position/enterEffect）")
			else:
				lines.append(f"- `{field}` ({req}): {desc_f}")
		if tmpl.get("content_anchor_required") is True:
			lines.append(
				"- **必填**：`param.anchors` 需非空；每项必须包含 `text` 与合法 `showFrom`（0-based content 索引）。"
			)
		cmin = tmpl.get("content_min_items")
		cmax = tmpl.get("content_max_items")
		if isinstance(cmin, int) or isinstance(cmax, int):
			hint = []
			if isinstance(cmin, int):
				hint.append(f"content 至少 {cmin} 条")
			if isinstance(cmax, int):
				hint.append(f"至多 {cmax} 条")
			lines.append(f"- *建议*：{'；'.join(hint)}。\n")
		lines.append("")

	if image_style:
		lines.append(f"\n## 图片描述要求\n- 图片风格：{image_style}")
		lines.append("- 纯视觉内容，无文字、无标注")
		lines.append("- 描述具体生动（如\"一个戴眼镜的白领简笔画图标\"）")

	if include_examples:
		lines.append("\n## 各模板 item 示例（每个代码块仅为一个 item）\n")
		lines.append(
			"下列 JSON **不是**让你合并成一个 scene：每块只展示该模板的字段形态。实际撰稿时按口播拆多个 scene，`items` 内按需选用模板，**禁止**单 scene 堆砌全部模板。\n"
		)
		for tname in sorted(TEMPLATE_REGISTRY.keys()):
			tmpl = TEMPLATE_REGISTRY[tname]
			ex = tmpl.get("example")
			if not isinstance(ex, dict):
				continue
			item = dict(ex)
			item.setdefault("order", 1)
			lines.append(f"### {tname}\n")
			lines.append("```json")
			lines.append(json.dumps(item, ensure_ascii=False, indent=2))
			lines.append("```\n")

	return "\n".join(lines)


if __name__ == "__main__":
	print(generate_ai_prompt_guide("简洁线条插画风格，无背景，无文字"))
