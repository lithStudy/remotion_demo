/**
 * CHAT_BUBBLE 模板：社会投射，用户心声/痛点
 */
import React from "react";
import { AbsoluteFill, Img, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { BW_TEXT, getSafeImageSrc, type ContentItem, type TemplateBaseProps } from "./shared";
import { normalizeContent, TemplateContentRenderer } from "./TemplateContentRenderer";

export const templateMeta = {
	"name": "CHAT_BUBBLE",
	"componentExport": "BWChatBubble",
	"description":
		"适用：模拟用户/读者心声、弹窗式疑问、痛点自问。\n差异：纯金句大字无对话感用 TEXT_FOCUS；需配图但非气泡口径用 CENTER_FOCUS。\n参数：imageSrc 为人物/侧脸简笔图标；content 宜短。",
	"psychology": "社会投射",
	"image_count": 1,
	"param_schema": {
		"imageSrc": { "type": "image_prompt", "required": true, "desc": "人物图标描述" },
	},
	"required_extra_params": [] as string[],
	"example": {
		"template": "CHAT_BUBBLE",
		"param": {
			"imageSrc": "困惑的人简笔画图标",
			"content": ["成功了吗？"],
		},
	},
	"default_anchor_color": "#FF8C00",
	"default_anchor_anim": "spring",
	"default_audio_effect": "ping",
} as const;

export interface BWChatBubbleProps extends TemplateBaseProps {
	imageSrc?: string;
}

export const BWChatBubble: React.FC<BWChatBubbleProps> = ({
	imageSrc,
	content,
	audioSrc,
	children,
	style,
}) => {
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();
	const items = normalizeContent(content);

	// 定位当前帧对应的 content 项
	const activeItem = items.find((it: ContentItem) => frame >= it.startFrame && frame < it.startFrame + it.durationFrames) || items[0];

	const avatarSpring = spring({ frame, fps, config: { damping: 60, stiffness: 200 }, durationInFrames: 20 });
	const avatarX = interpolate(avatarSpring, [0, 1], [-300, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
	const bubbleSpring = spring({ frame: frame - 8, fps, config: { damping: 60, stiffness: 200 }, durationInFrames: 20 });
	const bubbleScale = interpolate(bubbleSpring, [0, 1], [0.7, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

	const renderBubbleContent = () => {
		if (!activeItem) return children;
		const { text, anchor, anchorColor } = activeItem;
		if (!anchor || !text.includes(anchor)) return text;

		const parts = text.split(anchor);
		const highlightColor = anchorColor || templateMeta.default_anchor_color;
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
			<TemplateContentRenderer content={content} audioSrc={audioSrc} hideAnchors hideSubtitles />
		</AbsoluteFill>
	);
};
