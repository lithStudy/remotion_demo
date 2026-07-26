import type { FieldOverrideProps } from "../types";
import { FieldLabel } from "../FieldLabel";
import {
	ImagePromptField,
	NumberField,
	StringField,
} from "../widgets";

function DosAndDontsLeftEditor({
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
			<StringField
				name="label"
				value={row.label}
				onChange={(v) => patch('label', v)}
				required={true}
				description={"该侧标题（左：如 ❌ 别这样；右：如 ✅ 正确做法），极简短语"}
			/>
			<ImagePromptField
				name="src"
				value={row.src}
				onChange={(v) => patch('src', v)}
				required={true}
				description={"该侧配图（左：错误/误区示意；右：正确做法示意）"}
			/>
			<NumberField
				name="showFrom"
				value={row.showFrom}
				onChange={(v) => patch('showFrom', v)}
				required={false}
				description={"有 content 时间轴且值落在 [0, content.length) 时为 content 下标（取该条 startFrame）；否则为相对 item 起点的帧号。省略：左 0；右为第 1 条或左起点+10 帧"}
				integer={true}
			/>
		</div>
	);
}

function DosAndDontsRightEditor({
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
			<StringField
				name="label"
				value={row.label}
				onChange={(v) => patch('label', v)}
				required={true}
				description={"该侧标题（左：如 ❌ 别这样；右：如 ✅ 正确做法），极简短语"}
			/>
			<ImagePromptField
				name="src"
				value={row.src}
				onChange={(v) => patch('src', v)}
				required={true}
				description={"该侧配图（左：错误/误区示意；右：正确做法示意）"}
			/>
			<NumberField
				name="showFrom"
				value={row.showFrom}
				onChange={(v) => patch('showFrom', v)}
				required={false}
				description={"有 content 时间轴且值落在 [0, content.length) 时为 content 下标（取该条 startFrame）；否则为相对 item 起点的帧号。省略：左 0；右为第 1 条或左起点+10 帧"}
				integer={true}
			/>
		</div>
	);
}

export const template = "DOS_AND_DONTS";
export const fieldOverrides = {
	left: DosAndDontsLeftEditor,
	right: DosAndDontsRightEditor,
};
