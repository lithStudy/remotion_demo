import type { FieldOverrideProps } from "../types";
import { FieldLabel } from "../FieldLabel";
import {
	ContentIndexField,
	StringField,
} from "../widgets";

function TextFocusCoresentenceEditor({
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
				description={"该行大屏文案"}
			/>
			<ContentIndexField
				name="showFrom"
				value={row.showFrom}
				onChange={(v) => patch('showFrom', v)}
				required={true}
				description={"content 下标（0-based），非帧数"}
				contentLength={contentLength}
			/>
			<ContentIndexField
				name="endFrom"
				value={row.endFrom}
				onChange={(v) => patch('endFrom', v)}
				required={false}
				description={"可选；content 下标（0-based），非帧数；该行在对应条字幕结束帧（startFrame+durationFrames）起淡出"}
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

// description hint kept for AI: "大屏核心文案，每元素一行：可为 string，或 { text, showFrom, endFrom? }；showFrom/endFrom 为 content 下标（0-based），非帧数：在该条 startFrame 显现；可选 endFrom 表示在该条播完（startFrame+durationFrames）后起淡出。纯 string 等价于 showFrom=0、无 endFrom。锚点校验时各段 text 按顺序直接拼接（无分隔符）。"

function TextFocusCoresentenceanchorsEditor({
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
				name="coreSentenceAnchor"
				value={row.coreSentenceAnchor}
				onChange={(v) => patch('coreSentenceAnchor', v)}
				required={true}
				description={"要高亮的子串，须出现在各 coreSentence 段拼接后的全文内"}
			/>
			<StringField
				name="color"
				value={row.color}
				onChange={(v) => patch('color', v)}
				required={false}
				description={"高亮颜色，省略时默认强调色"}
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

// description hint kept for AI: "可选；在 coreSentence 各段拼接后的全文内按顺序高亮子串。每项 coreSentenceAnchor 须为该拼接串的子串，否则会被校验丢弃"

export const template = "TEXT_FOCUS";
export const fieldOverrides = {
	coreSentence: TextFocusCoresentenceEditor,
	coreSentenceAnchors: TextFocusCoresentenceanchorsEditor,
};
