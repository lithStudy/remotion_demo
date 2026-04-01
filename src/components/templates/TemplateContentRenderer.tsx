/**
 * TemplateContentRenderer: 公共内容渲染器
 * 处理所有模板共有的：字幕、锚点词、音效、TTS 音频播放。
 * 各模板只需渲染自己的视觉布局，然后嵌入此组件即可。
 */
import React from "react";
import { Sequence, Audio, staticFile, useCurrentFrame } from "remotion";
import type { AnchorItem, ContentItem } from "./shared";
import { BWSubtitle, BWAnchorWord } from "../BWPrimitives";

/** 锚点词列表：按时间依次出现并保留，以列表形式展示 */
const AnchorWordList: React.FC<{
	items: Array<{ text: string; startFrame: number; color?: string | null; anim?: "spring" | "slideUp" | "popIn" | "highlight" | null }>;
}> = ({ items }) => {
	const frame = useCurrentFrame();
	const visible = items.filter((item) => item.startFrame <= frame);
	if (visible.length === 0) return null;
	return (
		<div
			style={{
				position: "absolute",
				left: 0,
				right: 0,
				top: "18%",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				gap: 16,
			}}
		>
			{visible.map((item, i) => (
				<div key={i} style={{ minHeight: 64, display: "flex", alignItems: "center", justifyContent: "center" }}>
					<BWAnchorWord
						anchor={item.text}
						delay={item.startFrame}
						color={item.color || "#111111"}
						animStyle={item.anim || "spring"}
						style={{ position: "relative", top: 0 }}
					/>
				</div>
			))}
		</div>
	);
};

/** 将 content 数组标准化为 ContentItem[] */
export function normalizeContent(
	content?: ContentItem[],
): ContentItem[] {
	if (!content) return [];
	return content;
}

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
	anchors?: AnchorItem[];
	audioSrc?: string;
	hideAnchors?: boolean;
	hideSubtitles?: boolean;
}

/**
 * 渲染字幕、锚点词、音效、TTS 音频。
 * 用法：在模板视觉布局后添加 <TemplateContentRenderer content={content} audioSrc={audioSrc} />
 */
export const TemplateContentRenderer: React.FC<
	TemplateContentRendererProps
> = ({ content, anchors, audioSrc, hideAnchors, hideSubtitles }) => {
	const items = normalizeContent(content);
	const sanitizeSubtitleText = (text: string) => {
		const trimmed = text.replace(/[\s\u00A0\u3000]+$/g, "");
		const balanced = stripUnmatchedWrapPunctuation(trimmed);
		return balanced.replace(/[，。,；、,;.]$/, "");
	};

	return (
		<>
			{/* 字幕层 */}
			{!hideSubtitles && items.map((item, i) => (
				<Sequence
					key={`sub-${i}`}
					from={item.startFrame}
					durationInFrames={item.durationFrames}
				>
					<BWSubtitle text={sanitizeSubtitleText(item.text)} startFrame={0} durationFrames={1} />
				</Sequence>
			))}

			{/* 锚点词层：依次出现并保留为列表 */}
			{!hideAnchors && (() => {
				const anchorItems = (anchors ?? [])
					.map((anchor) => ({
						...anchor,
						startFrame: items[anchor.showFrom]?.startFrame,
					}))
					.filter(
						(item): item is AnchorItem & { startFrame: number } =>
							typeof item.startFrame === "number",
					)
					.sort((a, b) => a.startFrame - b.startFrame);
				if (anchorItems.length === 0) return null;
				return <AnchorWordList items={anchorItems} />;
			})()}

			{/* 音效层：与锚点绑定，时刻与锚点出现帧一致 */}
			{!hideAnchors &&
				(anchors ?? [])
					.map((anchor) => {
						const startFrame = items[anchor.showFrom]?.startFrame;
						const name = anchor.audioEffect;
						if (
							typeof startFrame !== "number" ||
							!name
						) {
							return null;
						}
						return (
							<Sequence key={`sfx-${anchor.showFrom}-${anchor.text}`} from={startFrame-20}>
								<Audio
									src={staticFile(`audio/effects/${name}.wav`)}
									volume={0.6}
								/>
							</Sequence>
						);
					})}

			{/* TTS 音频 */}
			{audioSrc && (
				<Sequence>
					<Audio src={audioSrc} />
				</Sequence>
			)}
		</>
	);
};
