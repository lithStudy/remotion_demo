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


def generate_ai_prompt_guide(image_style: str = "", include_examples: bool = True) -> str:
	"""
	动态生成 AI 提示词中与「模板」相关的短片段。

	include_examples=False（Step2B 模板选型 / 校验修订）：仅输出**可用模板名列表**，
	不注入参数字典、汇总表、兜底长文，避免与主提示词决策树重复并节省 Token。

	include_examples=True：在上面的基础上追加各模板的 item JSON 示例（调试或 CLI）。
	"""
	names = sorted(TEMPLATE_REGISTRY.keys())
	count = len(names)
	lines: list[str] = [
		f"## 可用模板（共 {count} 个：`template` 必须且仅能从中选一个）",
		"",
		", ".join(names),
		"",
		"选型规则以主提示词中的决策树与自检清单为准；参数结构不在此展开，后续步骤会按 Schema 生成 `param`。",
	]

	if include_examples:
		lines.extend([
			"",
			"## 各模板 item 示例（每个代码块仅为一个 item）",
			"",
			"下列 JSON **不是**让你合并成一个 scene：每块只展示该模板的字段形态。实际撰稿时按口播拆多个 scene，`items` 内按需选用模板，**禁止**单 scene 堆砌全部模板。",
			"",
		])
		for tname in sorted(TEMPLATE_REGISTRY.keys()):
			tmpl = TEMPLATE_REGISTRY[tname]
			ex = tmpl.get("example")
			if not isinstance(ex, dict):
				continue
			item = dict(ex)
			item.setdefault("order", 1)
			lines.append(f"### {tname}")
			lines.append("```json")
			lines.append(json.dumps(item, ensure_ascii=False, indent=2))
			lines.append("```")
			lines.append("")

	if image_style and include_examples:
		lines.extend([
			"",
			"## 图片描述要求（生成 image 类字段时参考）",
			f"- 图片风格：{image_style}",
			"- 纯视觉内容，无文字、无标注",
			"- 描述具体生动（如\"一个戴眼镜的白领简笔画图标\"）",
		])

	return "\n".join(lines).strip()


if __name__ == "__main__":
	print(generate_ai_prompt_guide("简洁线条插画风格，无背景，无文字"))
