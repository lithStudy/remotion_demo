#!/usr/bin/env python3
"""根据 paramOverrideRequirements.json 生成 scene_studio 路径覆写 TSX。"""

from __future__ import annotations

import json
from pathlib import Path

from narrator_pipeline.paths import REPO_ROOT

REQ_PATH = (
	REPO_ROOT
	/ "scene_studio"
	/ "src"
	/ "param_editor"
	/ "generated"
	/ "paramOverrideRequirements.json"
)
OUT_DIR = REPO_ROOT / "scene_studio" / "src" / "param_editor" / "overrides"


def _is_content_index(prop: dict) -> bool:
	return prop.get("format") == "content_index" or prop.get("type") == "content_index"


def _emit_prop_editor(prop_name: str, prop: dict, indent: str = "\t\t\t") -> str:
	req = "true"  # required 由外层 Object 项自行控制时仍传；这里用 schema.required 在调用处处理
	desc = json.dumps(prop.get("description") or "", ensure_ascii=False)
	lines: list[str] = []
	if prop.get("enum"):
		opts = json.dumps(prop["enum"], ensure_ascii=False)
		lines.append(f"{indent}<EnumField")
		lines.append(f'{indent}\tname="{prop_name}"')
		lines.append(f"{indent}\tvalue={{row.{prop_name}}}")
		lines.append(
			f"{indent}\tonChange={{(v) => patch({prop_name!r}, v)}}"
		)
		lines.append(f"{indent}\trequired={{{req}}}")
		lines.append(f"{indent}\tdescription={{{desc}}}")
		lines.append(f"{indent}\toptions={{{opts}}}")
		lines.append(f"{indent}/>")
	elif prop.get("type") == "boolean":
		lines.append(f"{indent}<BooleanField")
		lines.append(f'{indent}\tname="{prop_name}"')
		lines.append(f"{indent}\tvalue={{row.{prop_name}}}")
		lines.append(
			f"{indent}\tonChange={{(v) => patch({prop_name!r}, v)}}"
		)
		lines.append(f"{indent}\trequired={{{req}}}")
		lines.append(f"{indent}/>")
	elif _is_content_index(prop):
		lines.append(f"{indent}<ContentIndexField")
		lines.append(f'{indent}\tname="{prop_name}"')
		lines.append(f"{indent}\tvalue={{row.{prop_name}}}")
		lines.append(
			f"{indent}\tonChange={{(v) => patch({prop_name!r}, v)}}"
		)
		lines.append(f"{indent}\trequired={{{req}}}")
		lines.append(f"{indent}\tdescription={{{desc}}}")
		lines.append(f"{indent}\tcontentLength={{contentLength}}")
		lines.append(f"{indent}/>")
	elif prop.get("format") == "image_prompt":
		lines.append(f"{indent}<ImagePromptField")
		lines.append(f'{indent}\tname="{prop_name}"')
		lines.append(f"{indent}\tvalue={{row.{prop_name}}}")
		lines.append(
			f"{indent}\tonChange={{(v) => patch({prop_name!r}, v)}}"
		)
		lines.append(f"{indent}\trequired={{{req}}}")
		lines.append(f"{indent}\tdescription={{{desc}}}")
		lines.append(f"{indent}/>")
	elif prop.get("type") in ("number", "integer"):
		integer = "true" if prop.get("type") == "integer" else "false"
		lines.append(f"{indent}<NumberField")
		lines.append(f'{indent}\tname="{prop_name}"')
		lines.append(f"{indent}\tvalue={{row.{prop_name}}}")
		lines.append(
			f"{indent}\tonChange={{(v) => patch({prop_name!r}, v)}}"
		)
		lines.append(f"{indent}\trequired={{{req}}}")
		lines.append(f"{indent}\tdescription={{{desc}}}")
		lines.append(f"{indent}\tinteger={{{integer}}}")
		lines.append(f"{indent}/>")
	elif prop.get("type") == "array" and (prop.get("items") or {}).get("type") == "string":
		# string[] 简易编辑
		lines.append(f"{indent}<div className=\"field\">")
		lines.append(f"{indent}\t<label className=\"field-label\">{prop_name}</label>")
		lines.append(
			f"{indent}\t<textarea"
		)
		lines.append(f"{indent}\t\trows={{2}}")
		lines.append(
			f"{indent}\t\tvalue={{Array.isArray(row.{prop_name}) ? (row.{prop_name} as string[]).join(\"\\n\") : \"\"}}"
		)
		lines.append(
			f"{indent}\t\tonChange={{(e) => patch({prop_name!r}, e.target.value.split(\"\\n\").filter((x) => x.length > 0))}}"
		)
		lines.append(f"{indent}\t/>")
		lines.append(
			f"{indent}\t<p className=\"hint\">每行一个单元格，顺序与 columns 一致</p>"
		)
		lines.append(f"{indent}</div>")
	else:
		lines.append(f"{indent}<StringField")
		lines.append(f'{indent}\tname="{prop_name}"')
		lines.append(f"{indent}\tvalue={{row.{prop_name}}}")
		lines.append(
			f"{indent}\tonChange={{(v) => patch({prop_name!r}, v)}}"
		)
		lines.append(f"{indent}\trequired={{{req}}}")
		lines.append(f"{indent}\tdescription={{{desc}}}")
		lines.append(f"{indent}/>")
	return "\n".join(lines)


def _gen_array_object_override(
	template: str,
	field: str,
	field_schema: dict,
	component_name: str,
) -> str:
	items = field_schema.get("items") or {}
	# oneOf: 编辑器只走 object 分支（不提供「纯文本 / 对象」切换）
	if "oneOf" in items:
		obj_branch = next(
			(b for b in items["oneOf"] if b.get("type") == "object" or b.get("properties")),
			None,
		)
		if obj_branch is None:
			raise ValueError(f"{template}.{field}: oneOf 中无 object 分支")
		field_schema = {**field_schema, "items": obj_branch}
		items = obj_branch

	props = items.get("properties") or {}
	required = set(items.get("required") or [])
	desc = json.dumps(field_schema.get("description") or "", ensure_ascii=False)

	prop_blocks = []
	for pname, pschema in props.items():
		# 用 required 集合 refinement — 生成时写死 boolean
		block = _emit_prop_editor(pname, pschema)
		# 替换 required={true} 为实际
		req_val = "true" if pname in required else "false"
		block = block.replace("required={true}", f"required={{{req_val}}}", 1)
		prop_blocks.append(block)

	props_jsx = "\n".join(prop_blocks) if prop_blocks else "\t\t\tnull"

	return f'''import type {{ FieldOverrideProps }} from "../types";
import {{ FieldLabel }} from "../FieldLabel";
import {{
	BooleanField,
	ContentIndexField,
	EnumField,
	ImagePromptField,
	NumberField,
	StringField,
}} from "../widgets";

function {component_name}({{
	name,
	schema,
	value,
	onChange,
	required,
	contentLength,
	lockedLength,
}}: FieldOverrideProps) {{
	void contentLength;
	const list = Array.isArray(value) ? (value as Record<string, unknown>[]) : [];
	const locked = lockedLength != null;
	const canAdd =
		!locked && (schema.maxItems == null || list.length < schema.maxItems);
	const canRemove =
		!locked && (schema.minItems == null || list.length > schema.minItems);

	const setAt = (idx: number, row: Record<string, unknown>) => {{
		const next = [...list];
		next[idx] = row;
		onChange(next);
	}};
	const removeAt = (idx: number) => {{
		if (!canRemove) return;
		onChange(list.filter((_, i) => i !== idx));
	}};
	const move = (idx: number, dir: -1 | 1) => {{
		const j = idx + dir;
		if (j < 0 || j >= list.length) return;
		const next = [...list];
		const tmp = next[idx];
		next[idx] = next[j];
		next[j] = tmp;
		onChange(next);
	}};

	return (
		<div className="field array-field">
			<FieldLabel name={{name}} required={{required}} />
			{{locked ? (
				<p className="hint">
					长度与口播片段同步（{{lockedLength}}），不可手改条数
				</p>
			) : null}}
			{{schema.description ? <p className="hint">{{schema.description}}</p> : null}}
			<div className="array-rows">
				{{list.map((row, idx) => {{
					const patch = (key: string, v: unknown) =>
						setAt(idx, {{ ...row, [key]: v }});
					return (
						<div className="array-row" key={{idx}}>
							<div className="array-row-head">
								<span className="muted">#{{idx + 1}}</span>
								<div className="row">
									<button type="button" disabled={{idx === 0}} onClick={{() => move(idx, -1)}} title="上移">
										↑
									</button>
									<button
										type="button"
										disabled={{idx >= list.length - 1}}
										onClick={{() => move(idx, 1)}}
										title="下移"
									>
										↓
									</button>
									{{canRemove ? (
										<button type="button" className="danger" onClick={{() => removeAt(idx)}}>
											删
										</button>
									) : null}}
								</div>
							</div>
{props_jsx}
						</div>
					);
				}})}}
			</div>
			{{canAdd ? (
				<button type="button" onClick={{() => onChange([...list, {{}}])}}>
					+ 添加 {{name}}
				</button>
			) : null}}
		</div>
	);
}}

// description hint kept for AI: {desc}
'''


def _gen_object_override(component_name: str, field_schema: dict) -> str:
	props = field_schema.get("properties") or {}
	required = set(field_schema.get("required") or [])
	prop_blocks = []
	for pname, pschema in props.items():
		# nested object? use recursive note - for DOS left/right may nest
		if pschema.get("type") == "object" or pschema.get("properties"):
			nested_props = pschema.get("properties") or {}
			nested_req = set(pschema.get("required") or [])
			inner = []
			for np, ns in nested_props.items():
				block = _emit_prop_editor(np, ns, indent="\t\t\t\t")
				# patch uses nested — need different patch
				block = block.replace(
					"patch(",
					f"patchNested({np!r}, ".replace(f"patchNested({np!r}, ", "((k, v) => patchNested(") 
				)
				# simpler: regenerate with nested patch manually
				pass
			# rewrite with nest-aware emitter
			inner_parts = []
			for np, ns in nested_props.items():
				req_val = "true" if np in nested_req else "false"
				part = _emit_nested_prop(np, ns, req_val)
				inner_parts.append(part)
			inner_jsx = "\n".join(inner_parts)
			prop_blocks.append(
				f'''\t\t\t<div className="field object-field" key="{pname}">
\t\t\t\t<label className="field-label">{pname}</label>
\t\t\t\t{{(() => {{
\t\t\t\t\tconst nested =
\t\t\t\t\t\trow.{pname} && typeof row.{pname} === "object" && !Array.isArray(row.{pname})
\t\t\t\t\t\t\t? (row.{pname} as Record<string, unknown>)
\t\t\t\t\t\t\t: {{}};
\t\t\t\t\tconst patchNested = (key: string, v: unknown) =>
\t\t\t\t\t\tpatch("{pname}", {{ ...nested, [key]: v }});
\t\t\t\t\treturn (
\t\t\t\t\t\t<>
{inner_jsx}
\t\t\t\t\t\t</>
\t\t\t\t\t);
\t\t\t\t}})()}}
\t\t\t</div>'''
			)
			continue
		block = _emit_prop_editor(pname, pschema)
		req_val = "true" if pname in required else "false"
		block = block.replace("required={true}", f"required={{{req_val}}}", 1)
		prop_blocks.append(block)

	props_jsx = "\n".join(prop_blocks) if prop_blocks else "\t\t\tnull"

	return f'''import type {{ FieldOverrideProps }} from "../types";
import {{ FieldLabel }} from "../FieldLabel";
import {{
	BooleanField,
	ContentIndexField,
	EnumField,
	ImagePromptField,
	NumberField,
	StringField,
}} from "../widgets";

function {component_name}({{
	name,
	schema,
	value,
	onChange,
	required,
	contentLength,
}}: FieldOverrideProps) {{
	void contentLength;
	const row =
		value && typeof value === "object" && !Array.isArray(value)
			? (value as Record<string, unknown>)
			: {{}};
	const patch = (key: string, v: unknown) => onChange({{ ...row, [key]: v }});

	return (
		<div className="field object-field">
			<FieldLabel name={{name}} required={{required}} />
			{{schema.description ? <p className="hint">{{schema.description}}</p> : null}}
{props_jsx}
		</div>
	);
}}
'''


def _emit_nested_prop(prop_name: str, prop: dict, req_val: str) -> str:
	block = _emit_prop_editor(prop_name, prop, indent="\t\t\t\t\t\t")
	block = block.replace("patch(", "patchNested(")
	block = block.replace("required={true}", f"required={{{req_val}}}", 1)
	return block


def _gen_tree_override() -> str:
	return '''import type { FieldOverrideProps } from "../types";
import { FieldLabel } from "../FieldLabel";
import { ContentIndexField, StringField } from "../widgets";

type TreeNode = {
	label?: string;
	showFrom?: number;
	children?: TreeNode[];
};

function TreeNodeEditor({
	node,
	onChange,
	contentLength,
	depth,
}: {
	node: TreeNode;
	onChange: (n: TreeNode) => void;
	contentLength?: number;
	depth: number;
}) {
	const children = Array.isArray(node.children) ? node.children : [];
	return (
		<div className="array-row" style={{ marginLeft: depth * 12 }}>
			<StringField
				name="label"
				value={node.label}
				onChange={(v) => onChange({ ...node, label: v })}
				required
			/>
			<ContentIndexField
				name="showFrom"
				value={node.showFrom}
				onChange={(v) => onChange({ ...node, showFrom: v ?? undefined })}
				contentLength={contentLength}
			/>
			<div className="array-rows">
				{children.map((child, idx) => (
					<div key={idx}>
						<div className="array-row-head">
							<span className="muted">子节点 #{idx + 1}</span>
							<button
								type="button"
								className="danger"
								onClick={() =>
									onChange({
										...node,
										children: children.filter((_, i) => i !== idx),
									})
								}
							>
								删
							</button>
						</div>
						<TreeNodeEditor
							node={child}
							contentLength={contentLength}
							depth={depth + 1}
							onChange={(n) => {
								const next = [...children];
								next[idx] = n;
								onChange({ ...node, children: next });
							}}
						/>
					</div>
				))}
			</div>
			{children.length < 4 ? (
				<button
					type="button"
					onClick={() =>
						onChange({
							...node,
							children: [...children, { label: "", showFrom: 0 }],
						})
					}
				>
					+ 添加子节点
				</button>
			) : null}
		</div>
	);
}

function RootEditor({
	name,
	schema,
	value,
	onChange,
	required,
	contentLength,
}: FieldOverrideProps) {
	const root =
		value && typeof value === "object" && !Array.isArray(value)
			? (value as TreeNode)
			: { label: "", showFrom: 0, children: [] };

	return (
		<div className="field object-field">
			<FieldLabel name={name} required={required} />
			{schema.description ? <p className="hint">{schema.description}</p> : null}
			<TreeNodeEditor
				node={root}
				contentLength={contentLength}
				depth={0}
				onChange={onChange}
			/>
		</div>
	);
}
'''


def _to_component_name(template: str, field: str) -> str:
	parts = (template + "_" + field).split("_")
	return "".join(p[:1].upper() + p[1:].lower() for p in parts if p) + "Editor"


def generate_template_file(template: str, meta: dict) -> str:
	keys: list[str] = meta["requiredOverrideKeys"]
	schema = meta["paramSchema"]
	props = schema.get("properties") or {}

	components: list[str] = []
	exports: list[str] = []

	if template == "TREE_DIAGRAM" and keys == ["root"]:
		body = _gen_tree_override()
		# extract function RootEditor - already named
		return (
			body
			+ f'''
export const template = "{template}";
export const fieldOverrides = {{
	root: RootEditor,
}};
'''
		)

	for field in keys:
		fs = props[field]
		cname = _to_component_name(template, field)
		if fs.get("type") == "array":
			comp_src = _gen_array_object_override(template, field, fs, cname)
		else:
			comp_src = _gen_object_override(cname, fs)
		# strip imports from subsequent — we'll merge
		components.append((cname, comp_src, field))

	def strip_imports(src: str) -> str:
		lines = src.splitlines()
		i = 0
		while i < len(lines):
			ln = lines[i].strip()
			if ln.startswith("import ") or ln.startswith("} from "):
				i += 1
				continue
			# 多行 import 的中间行（以逗号结尾或纯标识符）
			if i > 0 and (
				ln.endswith(",")
				or ln in {
					"BooleanField,",
					"ContentIndexField,",
					"EnumField,",
					"ImagePromptField,",
					"NumberField,",
					"StringField,",
					"BooleanField",
					"ContentIndexField",
					"EnumField",
					"ImagePromptField",
					"NumberField",
					"StringField",
				}
			):
				# 仅在仍处于文件头部 import 残留区时跳过
				if not any(
					x.startswith("function ") or x.startswith("type ") or x.startswith("export ")
					for x in lines[:i]
				):
					i += 1
					continue
			break
		# 更稳：找到第一个 function/type 起始
		for j, ln in enumerate(lines):
			if ln.startswith("function ") or ln.startswith("type "):
				return "\n".join(lines[j:]).strip()
		return "\n".join(lines[i:]).strip()

	chunks = []
	for cname, src, field in components:
		chunks.append(strip_imports(src))
		exports.append(f"\t{field}: {cname},")

	body = "\n\n".join(chunks)
	widget_names = [
		"BooleanField",
		"ContentIndexField",
		"EnumField",
		"ImagePromptField",
		"NumberField",
		"StringField",
	]
	used = [w for w in widget_names if w in body]
	if not used:
		widget_import = ""
	elif len(used) == 1:
		widget_import = f'import {{ {used[0]} }} from "../widgets";\n'
	else:
		widget_import = (
			"import {\n"
			+ "".join(f"\t{w},\n" for w in used)
			+ '} from "../widgets";\n'
		)

	merged = f'''import type {{ FieldOverrideProps }} from "../types";
import {{ FieldLabel }} from "../FieldLabel";
{widget_import}
{body}

export const template = "{template}";
export const fieldOverrides = {{
{chr(10).join(exports)}
}};
'''
	return merged


def main() -> None:
	data = json.loads(REQ_PATH.read_text(encoding="utf-8"))
	OUT_DIR.mkdir(parents=True, exist_ok=True)
	# 清理旧的自动生成覆写（保留 loadOverrides.ts）
	for p in OUT_DIR.glob("*.tsx"):
		p.unlink()

	written = 0
	for template, meta in data["templates"].items():
		keys = meta.get("requiredOverrideKeys") or []
		if not keys:
			continue
		content = generate_template_file(template, meta)
		path = OUT_DIR / f"{template}.tsx"
		path.write_text(content, encoding="utf-8")
		written += 1
		print(f"wrote {path.name}")
	print(f"done: {written} override files")


if __name__ == "__main__":
	main()
