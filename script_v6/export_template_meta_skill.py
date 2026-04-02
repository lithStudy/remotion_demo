#!/usr/bin/env python3
"""
从各模板 TSX 的 templateMeta 汇总生成 Cursor Skill（Markdown），供 AI 修改 scene-scripts.json 时对照。

环境与路径与 step1_analyze_script.main 对齐：load_env / load_config / project_root。
不依赖 Gemini；读取模板注册表并写出：
- 一个主 Skill：结构要点 + 模板索引（避免上下文过长）
- 每个模板一个子 Skill：该模板的 templateMeta JSON 全文

用法：
  python export_template_meta_skill.py
  python export_template_meta_skill.py --output D:/path/to/SKILL.md
"""

from __future__ import annotations

import argparse
import importlib
import json
import re
import shutil
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


def _skills_root_dir(script_dir: Path, config: dict) -> Path:
	root = Path(config.get("project_root", script_dir.parent))
	return root / ".cursor" / "skills"


def _default_references_dir(main_skill_path: Path) -> Path:
	"""
	子 skill 统一放在主 skill 同级目录的 references/ 下。
	例如：.../scene-scripts-templates/SKILL.md -> .../scene-scripts-templates/references/
	"""
	return main_skill_path.parent / "references"


def _yaml_double_quoted(s: str) -> str:
	"""将字符串写成 YAML 双引号标量（避免值内冒号破坏解析）。"""
	inner = s.replace("\\", "\\\\").replace('"', '\\"')
	return f'"{inner}"'


def _slugify_skill_id(s: str) -> str:
	"""
	把模板名转换成稳定、可用于文件夹名/skill name 的 slug。
	保留 ASCII 字母数字与 -_；其他字符转成 -；并压缩重复 -。
	"""
	s = s.strip()
	if not s:
		return "unknown"
	s = re.sub(r"[^A-Za-z0-9_-]+", "-", s)
	s = re.sub(r"-{2,}", "-", s).strip("-")
	return s or "unknown"


def _build_main_skill_body(registry: dict[str, dict], config: dict, subskills_parent: Path) -> str:
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
		"## 可用模板",
		"",
		"为避免上下文过长，每个模板的 `templateMeta` 已拆分为独立 Skill。需要查看某个模板的详情时，请打开对应子 Skill。",
		"",
	])

	for tname in names:
		slug = _slugify_skill_id(tname)
		# 主 skill 只保留相对路径索引，避免上下文过长
		lines.append(f"- **{tname}**: `references/{slug}.md`")

	lines.extend([
		"",
		"## 维护方式",
		"",
		"- 修改 `src/components/templates/*.tsx` 后，重新运行 `export_template_meta_skill.py` 以更新主 Skill 与所有子 Skill。",
		"",
	])

	return "\n".join(lines).strip() + "\n"


def build_main_skill_markdown(registry: dict[str, dict], config: dict, subskills_parent: Path) -> str:
	"""组装主 SKILL.md（含 YAML frontmatter）。"""
	body = _build_main_skill_body(registry, config, subskills_parent=subskills_parent)
	names = sorted(registry.keys())
	desc = (
		"scene-scripts.json 中可用的模板详情，在编辑或生成 `scene-scripts.json`时，用于了解如何正确使用模板，响应用户的验证、修改模板的请求。"
		f"模板包括：{'、'.join(names)}。"
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


def build_template_skill_markdown(template_name: str, meta: dict) -> str:
	"""组装单个模板子 Skill（含 YAML frontmatter）。"""
	slug = _slugify_skill_id(template_name)
	desc = f"模板 {template_name} 的 templateMeta（param_schema / example / 约束等）"
	full = {"name": template_name, **(meta or {})}
	front = "\n".join([
		"---",
		f"name: scene-scripts-templates-reference__{slug}",
		f"description: {_yaml_double_quoted(desc)}",
		"metadata:",
		"  tags: remotion, scene-scripts, templateMeta, json",
		"---",
		"",
	])
	body_lines = [
		f"## {template_name}",
		"",			
		"```json",
		json.dumps(full, ensure_ascii=False, indent=2),
		"```",
		"",
	]
	return front + "\n".join(body_lines)


def main() -> bool:
	parser = argparse.ArgumentParser(description="导出 templateMeta 汇总为 Cursor Skill")
	parser.add_argument(
		"--output",
		"-o",
		type=str,
		default="",
		help="SKILL.md 输出路径；默认：<project_root>/.cursor/skills/scene-scripts-templates/SKILL.md",
	)
	parser.add_argument(
		"--references-dir",
		type=str,
		default="",
		help="子 Skill 的输出目录；默认：与主 Skill 同级的 references/ 目录（每模板一个 <slug>.md 文件）",
	)
	parser.add_argument(
		"--clean",
		action="store_true",
		help="生成前清理 references 目录（避免模板删除后留下陈旧 skill）",
	)
	args = parser.parse_args()

	script_dir = Path(__file__).resolve().parent
	load_env(script_dir)
	config = load_config(script_dir)

	out_path = Path(args.output) if args.output.strip() else _default_skill_path(script_dir, config)
	out_path = out_path.resolve()
	out_path.parent.mkdir(parents=True, exist_ok=True)

	references_dir = (
		Path(args.references_dir).resolve()
		if str(args.references_dir or "").strip()
		else _default_references_dir(out_path).resolve()
	)
	references_dir.mkdir(parents=True, exist_ok=True)

	import template_registry as template_registry_mod

	importlib.reload(template_registry_mod)
	registry = template_registry_mod.get_all_templates()
	if not registry:
		print("❌ 模板注册表为空，请检查 src/components/templates/*.tsx")
		return False

	if args.clean:
		if references_dir.exists():
			for p in references_dir.iterdir():
				if p.is_file() and p.suffix.lower() in {".md", ".markdown"}:
					p.unlink(missing_ok=True)
				elif p.is_dir():
					shutil.rmtree(p, ignore_errors=True)

	# 写子 Skill（每个模板一个 md 文件）
	written = 0
	for tname, meta in sorted(registry.items(), key=lambda kv: kv[0]):
		slug = _slugify_skill_id(tname)
		skill_path = references_dir / f"{slug}.md"
		skill_md = build_template_skill_markdown(tname, meta)
		skill_path.write_text(skill_md, encoding="utf-8")
		written += 1

	# 写主 Skill（索引）
	main_md = build_main_skill_markdown(registry, config, subskills_parent=references_dir)
	out_path.write_text(main_md, encoding="utf-8")

	print(f"✅ 已写入主 Skill: {out_path}")
	print(f"✅ 已写入子 Skill: {written} 个（目录：{references_dir}）")
	return True


if __name__ == "__main__":
	sys.exit(0 if main() else 1)
