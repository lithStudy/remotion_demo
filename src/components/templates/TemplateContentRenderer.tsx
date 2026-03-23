/**
 * TemplateContentRenderer: 公共内容渲染器
 * 处理所有模板共有的：字幕、锚点词、音效、TTS 音频播放。
 * 各模板只需渲染自己的视觉布局，然后嵌入此组件即可。
 */
import React from "react";
import { Sequence, Audio, staticFile, useCurrentFrame } from "remotion";
import type { ContentItem } from "./shared";
import { BWSubtitle, BWAnchorWord } from "../BWPrimitives";

/** 锚点词列表：按时间依次出现并保留，以列表形式展示 */
const AnchorWordList: React.FC<{
	items: Array<{ anchor: string; startFrame: number; anchorColor?: string | null; anchorAnim?: "spring" | "slideUp" | "popIn" | "highlight" | null }>;
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
						anchor={item.anchor}
						delay={item.startFrame}
						color={item.anchorColor || "#111111"}
						animStyle={item.anchorAnim || "spring"}
						style={{ position: "relative", top: 0 }}
					/>
				</div>
			))}
		</div>
	);
};

/** 将 content 数组标准化为 ContentItem[] */
export function normalizeContent(
	content?: (string | ContentItem)[],
): ContentItem[] {
	if (!content) return [];
	return content.map((c) =>
		typeof c === "string"
			? {
					text: c,
					startFrame: 0,
					durationFrames: 90,
					anchor: null,
					anchorColor: null,
					audioEffect: null,
				}
			: c,
	);
}

interface TemplateContentRendererProps {
	content?: (string | ContentItem)[];
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
> = ({ content, audioSrc, hideAnchors, hideSubtitles }) => {
	const items = normalizeContent(content);

	return (
		<>
			{/* 字幕层 */}
			{!hideSubtitles && items.map((item, i) => (
				<Sequence
					key={`sub-${i}`}
					from={item.startFrame}
					durationInFrames={item.durationFrames}
				>
					<BWSubtitle text={item.text} startFrame={0} durationFrames={1} />
				</Sequence>
			))}

			{/* 锚点词层：依次出现并保留为列表 */}
			{!hideAnchors && (() => {
				const anchorItems = items
					.filter((item): item is ContentItem & { anchor: string } => !!item.anchor)
					.map((item) => ({
						anchor: item.anchor,
						startFrame: item.startFrame,
						anchorColor: item.anchorColor,
						anchorAnim: (item as any).anchorAnim,
					}));
				if (anchorItems.length === 0) return null;
				return <AnchorWordList items={anchorItems} />;
			})()}

			{/* 音效层 */}
			{items
				.filter((item) => item.audioEffect)
				.map((item, i) => (
					<Sequence key={`sfx-${i}`} from={item.startFrame}>
						<Audio
							src={staticFile(`audio/effects/${item.audioEffect}.mp3`)}
							volume={0.6}
						/>
					</Sequence>
				))}

			{/* TTS 音频 */}
			{audioSrc && (
				<Sequence>
					<Audio src={audioSrc} />
				</Sequence>
			)}
		</>
	);
};
