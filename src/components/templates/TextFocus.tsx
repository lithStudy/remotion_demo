/**
 * TEXT_FOCUS 模板：信噪比极致化，纯文字聚焦
 * 适用场景：全篇最核心金句，无需配图，白底大字 + 弹入动画。
 * 锚点词在正文中高亮，底部保留字幕，不渲染锚点词弹出层。
 */
import React from "react";
import { AbsoluteFill, Sequence, Audio, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { BWSubtitle } from "../BWPrimitives";
import type { TemplateBaseProps } from "./shared";
import { normalizeContent } from "./TemplateContentRenderer";

export const templateMeta = {
	"name": "TEXT_FOCUS",
	"componentExport": "BWTextFocus",
	"description":
		"适用：全片最强金句、结论暴击；0 图纯大字。\n差异：需要配图锚定用 CENTER_FOCUS；模拟读者吐槽口吻用 CHAT_BUBBLE。\n慎用：content 建议不超过 3 条以保持冲击。",
	"content_max_items": 3,
	"psychology": "信噪比极致化",
	"image_count": 0,
	"param_schema": {},
	"required_extra_params": [] as string[],
	"example": {
		"template": "TEXT_FOCUS",
		"param": {
			"content": [{ "text": "这就是本质" }],
		},
	},
	"default_anchor_color": "#ffffff",
	"default_anchor_anim": "popIn",
	"default_audio_effect": "impact_thud",
} as const;

export type BWTextFocusProps = TemplateBaseProps;

export const BWTextFocus: React.FC<BWTextFocusProps> = ({
	content,
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

	const items = normalizeContent(content);
	const mainText = items.map((c) => c.text).join("");
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

			{/* 底部字幕 */}
			{items.map((item, i) => (
				<Sequence key={`sub-${i}`} from={item.startFrame} durationInFrames={item.durationFrames}>
					<BWSubtitle text={item.text} startFrame={0} />
				</Sequence>
			))}

			{/* 仅播放音效，不渲染锚点词弹出层（文字本身已高亮锚点） */}
			{items
				.filter((item) => item.audioEffect)
				.map((item, i) => (
					<Sequence key={`sfx-${i}`} from={item.startFrame}>
						<Audio src={staticFile(`audio/effects/${item.audioEffect}.mp3`)} volume={0.6} />
					</Sequence>
				))}

			{/* TTS 音频 */}
			{audioSrc && (
				<Sequence>
					<Audio src={audioSrc} />
				</Sequence>
			)}

			{children}
		</AbsoluteFill>
	);
};
