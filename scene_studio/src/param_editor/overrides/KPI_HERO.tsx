import type { FieldOverrideProps } from "../types";
import { FieldLabel } from "../FieldLabel";
import {
	BooleanField,
	ContentIndexField,
	NumberField,
	StringField,
} from "../widgets";

function KpiHeroBlocksEditor({
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
				name="value"
				value={row.value}
				onChange={(v) => patch('value', v)}
				required={true}
				description={"终值，整数或小数（如 2.5 万人）"}
				integer={false}
			/>
			<NumberField
				name="decimalPlaces"
				value={row.decimalPlaces}
				onChange={(v) => patch('decimalPlaces', v)}
				required={false}
				description={"小数位数，缺省按 value 自动推断（如 2.5→1）"}
				integer={true}
			/>
			<ContentIndexField
				name="showFrom"
				value={row.showFrom}
				onChange={(v) => patch('showFrom', v)}
				required={true}
				description={"该块出现时机：content 下标，取该条 startFrame"}
				contentLength={contentLength}
			/>
			<StringField
				name="prefix"
				value={row.prefix}
				onChange={(v) => patch('prefix', v)}
				required={false}
				description={""}
			/>
			<StringField
				name="suffix"
				value={row.suffix}
				onChange={(v) => patch('suffix', v)}
				required={false}
				description={""}
			/>
			<StringField
				name="label"
				value={row.label}
				onChange={(v) => patch('label', v)}
				required={false}
				description={"数字上方标签（多列时字号已加大）"}
			/>
			<BooleanField
				name="useGrouping"
				value={row.useGrouping}
				onChange={(v) => patch('useGrouping', v)}
				required={false}
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

// description hint kept for AI: "多指标：每项 value、showFrom（content 下标）；可选 prefix、suffix、label、useGrouping"

export const template = "KPI_HERO";
export const fieldOverrides = {
	blocks: KpiHeroBlocksEditor,
};
