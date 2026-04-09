/**
 * CHAT_BUBBLE 模板：社会投射，用户心声/痛点
 */
import React from "react";
import { AbsoluteFill, Img, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { BW_TEXT, getSafeImageSrc, type TemplateBaseProps } from "./shared";
import { normalizeContent, TemplateContentRenderer } from "./TemplateContentRenderer";

export const templateMeta = {
	"name": "CHAT_BUBBLE",
	"componentExport": "BWChatBubble",
	"description":
		"适用：显式对话/弹幕/评论体/群聊体/角色化吐槽（如“我：…你：…”、“网友：…”、“评论：…”、“有人说：…”）的口吻表达，适合做共鸣痛点、用户反馈、反对意见、现场对话等。\n不适用：仅“你是不是也…”这类单句发问但整体仍是平铺叙述时（此时优先 CENTER_FOCUS）。\n差异：纯金句大字无对话感用 TEXT_FOCUS；需配图但非气泡口径用 CENTER_FOCUS。\n参数：imageSrc 为人物/侧脸简笔图标；可选 bubbleText 用于覆盖气泡显示文本；可选 showFrom 用于指定气泡展示哪一条 content（0-based）。",
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
			"bubbleText": {
				"type": "string",
				"description":
					"可选；仅用于“气泡里显示的文本”。若传入，将覆盖气泡内默认显示的 content 当前条目文本；但不影响 content 用于时序/字幕渲染。",
			},
			"showFrom": {
				"type": "integer",
				"format": "content_index",
				"description": "可选；指定气泡展示的 content 下标（0-based，非帧数）。合法范围 0～(content 条数-1)，超出会被忽略并回退为按时间轴自动切换。",
			},
		},
		"required": ["imageSrc"],
	},
	"example": {
		"template": "CHAT_BUBBLE",
		"param": {
			"imageSrc": "困惑的人简笔画图标",
			"bubbleText": "我真的快被这事逼疯了……",
			"showFrom": 0,
		},
	},
} as const;

export interface BWChatBubbleProps extends TemplateBaseProps {
	imageSrc?: string;
	/**
	 * 可选：仅用于气泡里展示的文本。
	 * 不会改变 `content` 本身（`content` 仍用于时序/字幕渲染）。
	 */
	bubbleText?: string;
	/**
	 * 可选：指定气泡展示的 content 下标（0-based）。
	 * 超出范围将忽略并回退为按时间轴自动切换。
	 */
	showFrom?: number;
}

export const BWChatBubble: React.FC<BWChatBubbleProps> = ({
	imageSrc,
	bubbleText,
	showFrom,
	content,
	audioSrc,
	children,
	style,
}) => {
	const frame = useCurrentFrame();
	const { fps, width, height } = useVideoConfig();
	const avatar = Math.round(Math.min(110, Math.min(width, height) * 0.095));
	const items = normalizeContent(content);

	// 定位当前帧对应的 content 项
	const activeIndex = items.findIndex((it) => frame >= it.startFrame && frame < it.startFrame + it.durationFrames);
	const safeActiveIndex = activeIndex >= 0 ? activeIndex : 0;
	const inRangeShowFrom = typeof showFrom === "number" && Number.isFinite(showFrom) && showFrom >= 0 && showFrom < items.length;
	const bubbleIndex = inRangeShowFrom ? showFrom : safeActiveIndex;
	const activeItem = items[bubbleIndex];

	const avatarSpring = spring({ frame, fps, config: { damping: 60, stiffness: 200 }, durationInFrames: 20 });
	const avatarX = interpolate(avatarSpring, [0, 1], [-300, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
	const bubbleSpring = spring({ frame: frame - 8, fps, config: { damping: 60, stiffness: 200 }, durationInFrames: 20 });
	const bubbleScale = interpolate(bubbleSpring, [0, 1], [0.7, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

	const renderBubbleContent = () => {
		// bubbleText 需要按 showFrom 对应字幕段开始时机出现（并用打字机效果显示）
		if (bubbleText) {
			const triggerFrame = inRangeShowFrom ? items[showFrom].startFrame : (activeItem?.startFrame ?? 0);
			if (frame < triggerFrame) return children;

			// 打字机：每 2 帧放出 1 个字符（30fps 下约 15 字/秒）
			const framesSince = frame - triggerFrame;
			const chars = Math.max(0, Math.floor(framesSince / 2) + 1);
			return bubbleText.slice(0, chars);
		}
		const textFromContent = activeItem?.text;
		const text = textFromContent;
		if (!text) return children;
		return text;
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
			<div style={{ display: "flex", alignItems: "flex-end", gap: Math.round(width * 0.014), padding: "0 5%", width: "100%", maxHeight: "56%" }}>
				<div style={{
					width: avatar, height: avatar, borderRadius: "50%", backgroundColor: "#e0e4eb",
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
			<TemplateContentRenderer content={content} audioSrc={audioSrc} hideAnchors />
		</AbsoluteFill>
	);
};
