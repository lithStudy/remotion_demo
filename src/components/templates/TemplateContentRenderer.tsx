/**
 * TemplateContentRenderer: 公共内容渲染器
 * 仅处理字幕与 TTS 音频；锚点词由各模板自行引入 TemplateDefaultAnchors / 专用层。
 */
import React from "react";
import { Sequence, Audio } from "remotion";
import { normalizeContent, type ContentItem } from "./shared";
import { BWSubtitle } from "../BWPrimitives";

export { normalizeContent } from "./shared";

/** 成对标点：句首为开符号而句尾不是对应的闭符号则去掉句首；句尾为闭符号而句首不是对应的开符号则去掉句尾（可多层嵌套重复处理）。 */
const WRAP_PAIRS: ReadonlyArray<{ open: string; close: string }> = [
	{ open: "\u201C", close: "\u201D" },
	{ open: "\u2018", close: "\u2019" },
	{ open: "(", close: ")" },
	{ open: "（", close: "）" },
	{ open: "[", close: "]" },
	{ open: "【", close: "】" },
	{ open: "{", close: "}" },
	{ open: "《", close: "》" },
	{ open: "「", close: "」" },
	{ open: "〔", close: "〕" },
	{ open: '"', close: '"' },
	{ open: "'", close: "'" },
];

function stripUnmatchedWrapPunctuation(text: string): string {
	let s = text;
	let guard = 0;
	const max = text.length + 16;
	while (s.length > 0 && guard++ < max) {
		const first = s[0];
		const last = s[s.length - 1];
		let removed = false;
		for (const { open, close } of WRAP_PAIRS) {
			if (first === open && last !== close) {
				s = s.slice(1);
				removed = true;
				break;
			}
			if (last === close && first !== open) {
				s = s.slice(0, -1);
				removed = true;
				break;
			}
		}
		if (!removed) break;
	}
	return s;
}

interface TemplateContentRendererProps {
	content?: ContentItem[];
	audioSrc?: string;
	hideSubtitles?: boolean;
}

/**
 * 渲染字幕、TTS 音频。
 * 用法：在模板视觉布局后添加 <TemplateContentRenderer content={content} audioSrc={audioSrc} />
 */
export const TemplateContentRenderer: React.FC<
	TemplateContentRendererProps
> = ({ content, audioSrc, hideSubtitles }) => {
	const items = normalizeContent(content);
	const sanitizeSubtitleText = (text: string) => {
		const trimmed = text.replace(/[\s\u00A0\u3000]+$/g, "");
		const balanced = stripUnmatchedWrapPunctuation(trimmed);
		return balanced.replace(/[，。,；、,;.]$/, "");
	};

	return (
		<>
			{!hideSubtitles &&
				items.map((item, i) => (
					<Sequence
						key={`sub-${i}`}
						from={item.startFrame}
						durationInFrames={item.durationFrames}
					>
						<BWSubtitle
							text={sanitizeSubtitleText(item.text)}
							startFrame={0}
							durationFrames={1}
						/>
					</Sequence>
				))}

			{audioSrc && (
				<Sequence>
					<Audio src={audioSrc} />
				</Sequence>
			)}
		</>
	);
};
