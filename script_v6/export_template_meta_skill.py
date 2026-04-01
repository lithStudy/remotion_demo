#!/usr/bin/env python3
"""
从各模板 TSX 的 templateMeta 汇总生成 Cursor Skill（Markdown），供 AI 修改 scene-scripts.json 时对照。

环境与路径与 step1_analyze_script.main 对齐：load_env / load_config / project_root。
不依赖 Gemini；仅读取模板注册表并写出单一 SKILL.md。

用法：
  python export_template_meta_skill.py
  python export_template_meta_skill.py --output D:/path/to/SKILL.md
"""

from __future__ import annotations

import argparse
import importlib
import json
import sys
from pathlib import Path

# 与 step1_analyze_script 一致：保证控制台 UTF-8
if hasattr(sys.stdout, "reconfigure"):
	sys.stdout.reconfigure(encoding="utf-8", errors="replace")
if hasattr(sys.stderr, "reconfigure"):
	sys.stderr.reconfigure(encoding="utf-8", errors="replace")

from utils import load_config, load_env


def _default_skill_path(script_dir: Path, config: dict) -> Path:
	root = Path(config.get("project_root", script_dir.parent))
	return root / ".cursor" / "skills" / "scene-scripts-templates" / "SKILL.md"


def _yaml_double_quoted(s: str) -> str:
	"""将字符串写成 YAML 双引号标量（避免值内冒号破坏解析）。"""
	inner = s.replace("\\", "\\\\").replace('"', '\\"')
	return f'"{inner}"'


def _build_skill_body(registry: dict[str, dict], config: dict) -> str:
	names = sorted(registry.keys())
	image_style = str(config.get("image_style", "") or "").strip()
	default_tmpl = str(config.get("default_template", "CENTER_FOCUS") or "CENTER_FOCUS")
	fps = config.get("fps", 30)

	lines: list[str] = [
		"## 何时使用",
		"",
		"在编辑或生成 `scene-scripts.json`时，用于了解如何正确使用模板，响应用户的验证、修改模板的请求",
		"",
		"## scene-scripts 结构要点",
		"",
		"- 顶层常见字段：`topic`、`fps`、`scenes`。",
		f"- `fps` 常与工程一致（当前配置为 **{fps}**）。",
		"- 每个 `scene` 含 `sceneId`、`items`。",
		"- 每个 `item` 至少含：`order`、`template`、`param`、`content`。",
		"- `content` 为数组；元素多为 `{\"text\": \"...\"}`。口播以 `content[].text` 为准。",
		f"- 未知或非法 `template` 时，管线可能回退到默认模板（当前配置为 **`{default_tmpl}`**）。",
		"- `param` 内不应长期存放 `content` 或 `totalDurationFrames`（校验会剔除）；时长与分句权威在 `item` 上。",
		"- **TEXT_FOCUS** 使用 `param.coreSentence` 与 `param.coreSentenceAnchors`（非普通 `anchors`）；锚点短语须为 `coreSentence` 的子串。",
		"- 带 `anchors` 的模板：`showFrom` 为 **content 数组的 0-based 下标**，不是时间轴帧号。",
		"",
		"## 图片类字段",
		"",
	]
	if image_style:
		lines.extend([
			f"- 工程 `config.json` 中的 `image_style`（供 image_prompt 类字段参考）：",
			"",
			f"  {image_style}",
			"",
		])
	else:
		lines.extend([
			"- 生成 `image_prompt` / 画面描述时：纯视觉、无文字，风格与项目配置一致。",
			"",
		])

	lines.extend([
		"## 修改范围",
		"当用户目的是修改`scene-scripts.json`时，只操作这一个被指定的文件，不要额外修改scene等文件。",
		"",
	])

	lines.extend([
		f"## 可用模板名（共 {len(names)} 个）",
		"",
		"`template` 必须且仅能取下列之一（与 `src/components/templates/*.tsx` 中 `templateMeta.name` 一致）：",
		"",
		", ".join(names),
		"",
		"## 各模板 templateMeta 全文",
		"",
		"下列 JSON 由构建时注册表导出；修改 TSX 后请重新运行 `export_template_meta_skill.py` 更新本 Skill。",
		"",
	])

	
	for tname in names:
		meta = registry[tname]
		full = {"name": tname, **meta}
		lines.append(f"### {tname}")
		lines.append("```json")
		lines.append(json.dumps(full, ensure_ascii=False, indent=2))
		lines.append("```")
		lines.append("")

	return "\n".join(lines).strip() + "\n"


def build_skill_markdown(registry: dict[str, dict], config: dict) -> str:
	"""组装完整 SKILL.md（含 YAML frontmatter）。"""
	body = _build_skill_body(registry, config)
	desc = (
		"scene-scripts.json 模板参考：从各 TSX 的 templateMeta 汇总，"
		"含 param_schema、description、example、content 条数约束等。"
	)
	front = "\n".join([
		"---",
		"name: scene-scripts-templates",
		f"description: {_yaml_double_quoted(desc)}",
		"metadata:",
		"  tags: remotion, scene-scripts, templateMeta, json",
		"---",
		"",
	])
	return front + body


def main() -> bool:
	parser = argparse.ArgumentParser(description="导出 templateMeta 汇总为 Cursor Skill")
	parser.add_argument(
		"--output",
		"-o",
		type=str,
		default="",
		help="SKILL.md 输出路径；默认：<project_root>/.cursor/skills/scene-scripts-templates/SKILL.md",
	)
	args = parser.parse_args()

	script_dir = Path(__file__).resolve().parent
	load_env(script_dir)
	config = load_config(script_dir)

	out_path = Path(args.output) if args.output.strip() else _default_skill_path(script_dir, config)
	out_path = out_path.resolve()
	out_path.parent.mkdir(parents=True, exist_ok=True)

	import template_registry as template_registry_mod

	importlib.reload(template_registry_mod)
	registry = template_registry_mod.get_all_templates()
	if not registry:
		print("❌ 模板注册表为空，请检查 src/components/templates/*.tsx")
		return False

	md = build_skill_markdown(registry, config)
	out_path.write_text(md, encoding="utf-8")
	print(f"✅ 已写入 Skill: {out_path}")
	print(f"   模板数: {len(registry)}")
	return True


if __name__ == "__main__":
	sys.exit(0 if main() else 1)
