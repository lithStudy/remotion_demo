import type { FieldOverrideProps } from "../types";
import { FieldLabel } from "../FieldLabel";
import {
	ContentIndexField,
	EnumField,
	StringField,
} from "../widgets";

function CenterFocusAnchorsEditor({
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
				description={"要展示的锚点词"}
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

// description hint kept for AI: "可选；用于锚点词展示（顶部依次出现并保留为列表），并绑定锚点出现时机的音效。showFrom 须落在当前 content 条数范围内。注意 **保持克制，尽量少设置锚点** 只提取整段里真正的高潮、反转或核心名词"

export const template = "CENTER_FOCUS";
export const fieldOverrides = {
	anchors: CenterFocusAnchorsEditor,
};
