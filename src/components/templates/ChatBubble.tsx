/**
 * CHAT_BUBBLE 模板：社会投射，用户心声/痛点
 */
import React from "react";
import { AbsoluteFill, Img, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { BW_TEXT, getSafeImageSrc, type TemplateBaseProps } from "./shared";
import { normalizeContent, TemplateContentRenderer } from "./TemplateContentRenderer";

import { chatBubbleMeta } from "./template-definitions";
export { chatBubbleMeta as templateMeta } from "./template-definitions";

export interface BWChatBubbleProps extends TemplateBaseProps {
	imageSrc?: string;
}

export const BWChatBubble: React.FC<BWChatBubbleProps> = ({
	imageSrc,
	content,
	anchors,
	audioSrc,
	children,
	style,
}) => {
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();
	const items = normalizeContent(content);

	// 定位当前帧对应的 content 项
	const activeIndex = items.findIndex((it) => frame >= it.startFrame && frame < it.startFrame + it.durationFrames);
	const safeActiveIndex = activeIndex >= 0 ? activeIndex : 0;
	const activeItem = items[safeActiveIndex];
	const activeAnchor = (anchors ?? []).find((a) => a.showFrom === safeActiveIndex);

	const avatarSpring = spring({ frame, fps, config: { damping: 60, stiffness: 200 }, durationInFrames: 20 });
	const avatarX = interpolate(avatarSpring, [0, 1], [-300, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
	const bubbleSpring = spring({ frame: frame - 8, fps, config: { damping: 60, stiffness: 200 }, durationInFrames: 20 });
	const bubbleScale = interpolate(bubbleSpring, [0, 1], [0.7, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

	const renderBubbleContent = () => {
		if (!activeItem) return children;
		const text = activeItem.text;
		const anchor = activeAnchor?.text;
		const anchorColor = activeAnchor?.color;
		if (!anchor || !text.includes(anchor)) return text;

		const parts = text.split(anchor);
		const highlightColor = anchorColor || chatBubbleMeta.defaultAnchorColor;
		return (
			<>
				{parts[0]}
				<span style={{
					color: highlightColor,
					fontWeight: 800,
					backgroundImage: `linear-gradient(transparent 65%, ${highlightColor}22 65%)`,
					padding: "0 4px",
					borderRadius: "4px",
				}}>
					{anchor}
				</span>
				{parts[1]}
			</>
		);
	};

	return (
		<AbsoluteFill
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				...style,
			}}
		>
			<div style={{ display: "flex", alignItems: "flex-end", gap: 20, padding: "0 48px", width: "100%", maxHeight: "65%" }}>
				<div style={{
					width: 110, height: 110, borderRadius: "50%", backgroundColor: "#e0e4eb",
					border: "4px solid #111111", display: "flex", alignItems: "center", justifyContent: "center",
					flexShrink: 0, transform: `translateX(${avatarX}px)`, opacity: avatarSpring,
				}}>
					<Img src={getSafeImageSrc(imageSrc)} style={{ width: "72%", height: "72%", objectFit: "contain" }} />
				</div>
				<div style={{
					flex: 1, backgroundColor: "#ffffff", border: "3px solid #111111",
					borderRadius: "24px 24px 24px 6px", padding: "28px 36px",
					boxShadow: "4px 4px 0 #111111", transform: `scale(${bubbleScale})`,
					transformOrigin: "bottom left", opacity: bubbleSpring, minHeight: 80,
				}}>
					<span style={{ color: BW_TEXT, fontSize: 28, fontWeight: 600, lineHeight: 1.4 }}>
						{renderBubbleContent()}
					</span>
				</div>
			</div>
			<TemplateContentRenderer content={content} anchors={anchors} audioSrc={audioSrc} hideAnchors />
		</AbsoluteFill>
	);
};
