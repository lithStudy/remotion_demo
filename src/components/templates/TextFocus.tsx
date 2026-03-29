/**
 * TEXT_FOCUS 模板：信噪比极致化，纯文字聚焦
 * 适用场景：全篇最核心金句，无需配图，白底大字 + 弹入动画。
 * 可选 coreSentence：口播 content 较长时，大屏仅展示一句精炼文案；锚点词在正文中高亮，底部保留字幕，不渲染锚点词弹出层。
 */
import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import type { TemplateBaseProps } from "./shared";
import { TemplateContentRenderer } from "./TemplateContentRenderer";

export { textFocusMeta as templateMeta } from "./template-definitions";

export type BWTextFocusProps = TemplateBaseProps & {
	/**
	 * 精炼核心句（通常由 AI 生成）。若 content 过长、不适合整段作为大屏主标题，可只填此句作为居中展示；
	 * 未设置时主标题仍为 content 各条 text 的拼接。
	 */
	coreSentence?: string;
};

export const BWTextFocus: React.FC<BWTextFocusProps> = ({
	content,
	coreSentence,
	anchors,
	audioSrc,
	style,
	children,
}) => {
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();

	const fadeIn = interpolate(frame, [0, 10], [0, 1], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	});

	const scaleSpring = spring({
		frame,
		fps,
		config: { damping: 12, stiffness: 200 },
		durationInFrames: 20,
	});
	const scale = interpolate(scaleSpring, [0, 1], [0.6, 1], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	});

	const breathe = frame > 20
		? 1 + Math.sin((frame - 20) * 0.06) * 0.015
		: 1;

	const mainText = coreSentence?.trim();
	// 遍历所有锚点，按各自颜色高亮
	const highlightedText = (anchors ?? []).reduce<React.ReactNode[]>(
		(nodes, anchor) => {
			if (!anchor.text) {
				return nodes;
			}
			return nodes.flatMap((node, nodeIdx) => {
				if (typeof node !== "string") {
					return [node];
				}
				const parts = node.split(anchor.text);
				if (parts.length === 1) {
					return [node];
				}
				const mappedParts: React.ReactNode[] = [];
				parts.forEach((part, i) => {
					mappedParts.push(part);
					if (i < parts.length - 1) {
						mappedParts.push(
							<span key={`anchor-${anchor.showFrom}-${nodeIdx}-${i}`} style={{ color: anchor.color || "#E53E3E" }}>
								{anchor.text}
							</span>,
						);
					}
				});
				return mappedParts;
			});
		},
		[mainText],
	);

	return (
		<AbsoluteFill
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				opacity: fadeIn,
				...style,
			}}
		>
			{/* 核心文字 —— 锚点词高亮显示 */}
			<div
				style={{
					transform: `scale(${scale * breathe})`,
					transformOrigin: "center center",
					padding: "0 60px",
					textAlign: "center",
					fontSize: 72,
					fontWeight: 900,
					color: "#111111",
					lineHeight: 1.3,
					letterSpacing: "0.04em",
					fontFamily: '"Microsoft YaHei", "PingFang SC", "Noto Sans SC", sans-serif',
				}}
			>
				{highlightedText}
			</div>

			{/* 底部装饰线 */}
			{/* <div
				style={{
					position: "absolute",
					bottom: "38%",
					left: "50%",
					transform: "translateX(-50%)",
					width: interpolate(scaleSpring, [0, 1], [0, 80]),
					height: 5,
					backgroundColor: "#111111",
					borderRadius: 3,
				}}
			/> */}

			<TemplateContentRenderer
				content={content}
				anchors={anchors}
				audioSrc={audioSrc}
				hideAnchors
			/>

			{children}
		</AbsoluteFill>
	);
};
