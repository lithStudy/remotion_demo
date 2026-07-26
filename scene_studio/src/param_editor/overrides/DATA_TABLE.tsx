import type { FieldOverrideProps } from "../types";
import { FieldLabel } from "../FieldLabel";
import { ContentIndexField } from "../widgets";

function DataTableRowsEditor({
	name,
	schema,
	value,
	onChange,
	required,
	contentLength,
	lockedLength,
}: FieldOverrideProps) {
	void contentLength;
	const list = Array.isArray(value) ? (value as Record<string, unknown>[]) : [];
	const locked = lockedLength != null;
	const canAdd =
		!locked && (schema.maxItems == null || list.length < schema.maxItems);
	const canRemove =
		!locked && (schema.minItems == null || list.length > schema.minItems);

	const setAt = (idx: number, row: Record<string, unknown>) => {
		const next = [...list];
		next[idx] = row;
		onChange(next);
	};
	const removeAt = (idx: number) => {
		if (!canRemove) return;
		onChange(list.filter((_, i) => i !== idx));
	};
	const move = (idx: number, dir: -1 | 1) => {
		const j = idx + dir;
		if (j < 0 || j >= list.length) return;
		const next = [...list];
		const tmp = next[idx];
		next[idx] = next[j];
		next[j] = tmp;
		onChange(next);
	};

	return (
		<div className="field array-field">
			<FieldLabel name={name} required={required} />
			{locked ? (
				<p className="hint">
					长度与口播片段同步（{lockedLength}），不可手改条数
				</p>
			) : null}
			{schema.description ? <p className="hint">{schema.description}</p> : null}
			<div className="array-rows">
				{list.map((row, idx) => {
					const patch = (key: string, v: unknown) =>
						setAt(idx, { ...row, [key]: v });
					return (
						<div className="array-row" key={idx}>
							<div className="array-row-head">
								<span className="muted">#{idx + 1}</span>
								<div className="row">
									<button type="button" disabled={idx === 0} onClick={() => move(idx, -1)} title="上移">
										↑
									</button>
									<button
										type="button"
										disabled={idx >= list.length - 1}
										onClick={() => move(idx, 1)}
										title="下移"
									>
										↓
									</button>
									{canRemove ? (
										<button type="button" className="danger" onClick={() => removeAt(idx)}>
											删
										</button>
									) : null}
								</div>
							</div>
			<div className="field">
				<label className="field-label">cells</label>
				<textarea
					rows={2}
					value={Array.isArray(row.cells) ? (row.cells as string[]).join("\n") : ""}
					onChange={(e) => patch('cells', e.target.value.split("\n").filter((x) => x.length > 0))}
				/>
				<p className="hint">每行一个单元格，顺序与 columns 一致</p>
			</div>
			<ContentIndexField
				name="showFrom"
				value={row.showFrom}
				onChange={(v) => patch('showFrom', v)}
				required={true}
				description={"该行出现时机：content 数组下标，取该条 startFrame"}
				contentLength={contentLength}
			/>
						</div>
					);
				})}
			</div>
			{canAdd ? (
				<button type="button" onClick={() => onChange([...list, {}])}>
					+ 添加 {name}
				</button>
			) : null}
		</div>
	);
}

// description hint kept for AI: "数据行；cells 为单元格文案（顺序与 columns 一致）；showFrom 为 content 下标（0-based）"

export const template = "DATA_TABLE";
export const fieldOverrides = {
	rows: DataTableRowsEditor,
};
