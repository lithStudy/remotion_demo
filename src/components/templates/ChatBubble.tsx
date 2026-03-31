/**
 * CHAT_BUBBLE 模板：社会投射，用户心声/痛点
 */
import React from "react";
import { AbsoluteFill, Img, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { BW_TEXT, getSafeImageSrc, type TemplateAnchorsProps, type TemplateBaseProps } from "./shared";
import { normalizeContent, TemplateContentRenderer } from "./TemplateContentRenderer";

export const templateMeta = {
	"name": "CHAT_BUBBLE",
	"componentExport": "BWChatBubble",
	"description":
		"适用：显式对话/弹幕/评论体/群聊体/角色化吐槽（如“我：…你：…”、“网友：…”、“评论：…”、“有人说：…”）的口吻表达，适合做共鸣痛点、用户反馈、反对意见、现场对话等。\n不适用：仅“你是不是也…”这类单句发问但整体仍是平铺叙述时（此时优先 CENTER_FOCUS）。\n差异：纯金句大字无对话感用 TEXT_FOCUS；需配图但非气泡口径用 CENTER_FOCUS。\n参数：imageSrc 为人物/侧脸简笔图标；可选 anchors 用于高亮气泡内的关键词。",
	"psychology": "社会投射",
	"image_count": 1,
	"param_schema": {
		"type": "object",
		"properties": {
			"imageSrc": {
				"type": "string",
				"format": "image_prompt",
				"description": "人物图标描述（用于承载对话/弹幕的“说话者”形象）",
			},
			"anchors": {
				"type": "array",
				"description": "可选；用于高亮气泡内容子串。showFrom 须落在当前 content 条数范围内",
				"items": {
					"type": "object",
					"required": ["text", "showFrom"],
					"properties": {
						"text": { "type": "string", "description": "要高亮的关键词/短语（必须是气泡内容的子串）" },
						"showFrom": {
							"type": "integer",
							"format": "content_index",
							"description": "content 数组下标（0-based），非帧数；合法范围 0～(content 条数-1)，超出会被校验丢弃",
						},
						"color": { "type": "string" },
						"anim": {
							"type": "string",
							"enum": ["spring", "slideUp", "popIn", "highlight"],
						},
						"audioEffect": {
							"type": "string",
							"enum": ["impact_thud", "ping", "woosh"],
						},
					},
				},
			},
		},
		"required": ["imageSrc"],
	},
	"example": {
		"template": "CHAT_BUBBLE",
		"param": {
			"imageSrc": "困惑的人简笔画图标",
			"anchors": [
				{ "text": "太危险", "showFrom": 0, "color": "#FF8C00", "anim": "popIn", "audioEffect": "ping" },
			],
		},
	},
} as const;

export interface BWChatBubbleProps extends TemplateBaseProps, TemplateAnchorsProps {
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
		const highlightColor = anchorColor || "#FF8C00";
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
