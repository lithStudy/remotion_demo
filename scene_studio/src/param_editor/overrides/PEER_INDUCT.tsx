import type { FieldOverrideProps } from "../types";
import { FieldLabel } from "../FieldLabel";
import {
	ContentIndexField,
	EnumField,
	ImagePromptField,
} from "../widgets";

function PeerInductPremisesEditor({
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
				name="imageSrc"
				value={row.imageSrc}
				onChange={(v) => patch('imageSrc', v)}
				required={true}
				description={"前提配图"}
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
				name="showFrom"
				value={row.showFrom}
				onChange={(v) => patch('showFrom', v)}
				required={false}
				description={"从该条口播起显示本图；省略则与 premises 下标 i 对齐"}
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

// description hint kept for AI: "前提配图：横排并列；每项 imageSrc、可选 enterEffect、可选 showFrom（content 0-based）"

function PeerInductConclusionEditor({
	name,
	schema,
	value,
	onChange,
	required,
	contentLength,
}: FieldOverrideProps) {
	void contentLength;
	const row =
		value && typeof value === "object" && !Array.isArray(value)
			? (value as Record<string, unknown>)
			: {};
	const patch = (key: string, v: unknown) => onChange({ ...row, [key]: v });

	return (
		<div className="field object-field">
			<FieldLabel name={name} required={required} />
			{schema.description ? <p className="hint">{schema.description}</p> : null}
			<ImagePromptField
				name="imageSrc"
				value={row.imageSrc}
				onChange={(v) => patch('imageSrc', v)}
				required={true}
				description={"归纳配图"}
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
				name="showFrom"
				value={row.showFrom}
				onChange={(v) => patch('showFrom', v)}
				required={false}
				description={"从该条口播起显示归纳图与连线；省略为末条下标"}
				contentLength={contentLength}
			/>
			<EnumField
				name="tone"
				value={row.tone}
				onChange={(v) => patch('tone', v)}
				required={false}
				description={"归纳出现后画面整体情绪；默认 alert"}
				options={["calm", "alert"]}
			/>
		</div>
	);
}

export const template = "PEER_INDUCT";
export const fieldOverrides = {
	premises: PeerInductPremisesEditor,
	conclusion: PeerInductConclusionEditor,
};
