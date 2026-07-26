import type { FieldOverrideProps } from "../types";
import { FieldLabel } from "../FieldLabel";
import {
	ContentIndexField,
	EnumField,
	ImagePromptField,
	NumberField,
	StringField,
} from "../widgets";

function TimelineImagesEditor({
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
			<ImagePromptField
				name="src"
				value={row.src}
				onChange={(v) => patch('src', v)}
				required={true}
				description={"该节点配图提示词"}
			/>
			<EnumField
				name="enterEffect"
				value={row.enterEffect}
				onChange={(v) => patch('enterEffect', v)}
				required={false}
				description={""}
				options={["breathe", "slideLeft", "slideBottom", "zoomIn", "fadeIn"]}
			/>
			<ContentIndexField
				name="textIndex"
				value={row.textIndex}
				onChange={(v) => patch('textIndex', v)}
				required={false}
				description={""}
				contentLength={contentLength}
			/>
			<NumberField
				name="startFrame"
				value={row.startFrame}
				onChange={(v) => patch('startFrame', v)}
				required={false}
				description={""}
				integer={true}
			/>
			<StringField
				name="label"
				value={row.label}
				onChange={(v) => patch('label', v)}
				required={false}
				description={"节点短标注（建议 2～12 字）；轴上方节点显示在配图上方，轴下方节点显示在配图下方"}
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

// description hint kept for AI: "时间轴节点配图（3～5 项）；顺序即时间先后，横向从左到右均分"

export const template = "TIMELINE";
export const fieldOverrides = {
	images: TimelineImagesEditor,
};
