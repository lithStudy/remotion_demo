import type { FieldOverrideProps } from "../types";
import { FieldLabel } from "../FieldLabel";
import { StringField } from "../widgets";

function SourceCitationReferencesEditor({
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
			<StringField
				name="title"
				value={row.title}
				onChange={(v) => patch('title', v)}
				required={true}
				description={"文献原文标题（便于读者检索）"}
			/>
			<StringField
				name="titleZh"
				value={row.titleZh}
				onChange={(v) => patch('titleZh', v)}
				required={false}
				description={"中文译名（可选，有则作为主标题显示）"}
			/>
			<StringField
				name="publisher"
				value={row.publisher}
				onChange={(v) => patch('publisher', v)}
				required={false}
				description={"出版方/机构/作者原文（可选）"}
			/>
			<StringField
				name="publisherZh"
				value={row.publisherZh}
				onChange={(v) => patch('publisherZh', v)}
				required={false}
				description={"出版方中文译名（可选，有则作为主显示）"}
			/>
			<StringField
				name="year"
				value={row.year}
				onChange={(v) => patch('year', v)}
				required={false}
				description={"发布年份（可选）"}
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

// description hint kept for AI: "参考文献条目；title 必填（原文），titleZh/publisherZh 可选（中文主显示）"

export const template = "SOURCE_CITATION";
export const fieldOverrides = {
	references: SourceCitationReferencesEditor,
};
