import type { FieldOverrideProps } from "../types";
import { FieldLabel } from "../FieldLabel";
import {
	ContentIndexField,
	NumberField,
	StringField,
} from "../widgets";

function ProgressRingBlocksEditor({
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
			<NumberField
				name="percent"
				value={row.percent}
				onChange={(v) => patch('percent', v)}
				required={true}
				description={"0–100"}
				integer={true}
			/>
			<StringField
				name="label"
				value={row.label}
				onChange={(v) => patch('label', v)}
				required={true}
				description={""}
			/>
			<StringField
				name="subLabel"
				value={row.subLabel}
				onChange={(v) => patch('subLabel', v)}
				required={false}
				description={""}
			/>
			<StringField
				name="ringColor"
				value={row.ringColor}
				onChange={(v) => patch('ringColor', v)}
				required={false}
				description={"环与进度弧颜色，默认 #2B6CB0"}
			/>
			<ContentIndexField
				name="showFrom"
				value={row.showFrom}
				onChange={(v) => patch('showFrom', v)}
				required={true}
				description={"该列出现时机：content 下标，取该条 startFrame"}
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

// description hint kept for AI: "多组：每项 percent、label、showFrom（content 下标）；可选 subLabel、ringColor"

export const template = "PROGRESS_RING";
export const fieldOverrides = {
	blocks: ProgressRingBlocksEditor,
};
