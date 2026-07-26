import type { FieldOverrideProps } from "../types";
import { FieldLabel } from "../FieldLabel";
import {
	ContentIndexField,
	EnumField,
	StringField,
} from "../widgets";

function MagnifyingGlassAnchorsEditor({
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
				name="text"
				value={row.text}
				onChange={(v) => patch('text', v)}
				required={true}
				description={"要聚焦的关键词/短语"}
			/>
			<ContentIndexField
				name="showFrom"
				value={row.showFrom}
				onChange={(v) => patch('showFrom', v)}
				required={true}
				description={"content 数组下标（0-based），非帧数；合法范围 0～(content 条数-1)，超出会被校验丢弃"}
				contentLength={contentLength}
			/>
			<StringField
				name="color"
				value={row.color}
				onChange={(v) => patch('color', v)}
				required={false}
				description={""}
			/>
			<EnumField
				name="anim"
				value={row.anim}
				onChange={(v) => patch('anim', v)}
				required={false}
				description={""}
				options={["spring", "slideUp", "popIn", "highlight"]}
			/>
			<EnumField
				name="audioEffect"
				value={row.audioEffect}
				onChange={(v) => patch('audioEffect', v)}
				required={false}
				description={""}
				options={["impact_thud", "ping", "woosh"]}
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

// description hint kept for AI: "必填且非空（建议 1～2 个高价值锚点）；每项通过 showFrom 对齐 content 分句。锚点应落在“揭示性落点句”或其核心关键词上，不要把整段说明塞满锚点"

export const template = "MAGNIFYING_GLASS";
export const fieldOverrides = {
	anchors: MagnifyingGlassAnchorsEditor,
};
