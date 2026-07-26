import type { FieldOverrideProps } from "../types";
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

export const template = "TREE_DIAGRAM";
export const fieldOverrides = {
	root: RootEditor,
};
