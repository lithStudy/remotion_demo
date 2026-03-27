/**
 * TEXT_FOCUS 模板：信噪比极致化，纯文字聚焦
 * 适用场景：全篇最核心金句，无需配图，白底大字 + 弹入动画。
 * 可选 coreSentence：口播 content 较长时，大屏仅展示一句精炼文案；锚点词在正文中高亮，底部保留字幕，不渲染锚点词弹出层。
 */
import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import type { TemplateBaseProps } from "./shared";
import { TemplateContentRenderer } from "./TemplateContentRenderer";

export const templateMeta = {
	"name": "TEXT_FOCUS",
	"componentExport": "BWTextFocus",
	"description":
		"适用：全片最强金句、结论暴击；0 图纯大字。\n差异：需要配图锚定用 CENTER_FOCUS；模拟读者吐槽口吻用 CHAT_BUBBLE。\n慎用：content 建议不超过 3 条以保持冲击；若口播/字幕必须保留长 content，可填 coreSentence 仅用于大屏一句展示。",
	"content_max_items": 3,
	"psychology": "信噪比极致化",
	"image_count": 0,
	"param_schema": {
		"content": {
			"type": "content_array",
			"required": true,
			"desc": "口播字幕分段，对象数组每项含 text；须完整覆盖该 item 台词；coreSentence 仅大屏标题，不可省略本字段",
		},
		"coreSentence": {
			"type": "string",
			"required": true,
			"desc": "精炼核心句，不超过25个字",
		},
		"anchors": { "type": "anchor_array", "required": false, "desc": "锚点数组，用于高亮正文中的子串，每项含 text、showFrom、color；使用 coreSentence 时锚点词须出现在 coreSentence 内" },
	},
	"required_extra_params": [] as string[],
	"example": {
		"template": "TEXT_FOCUS",
		"param": {
			"content": [{ "text": "兄弟姐妹们，在这个套路满天飞的时代，承认自己“可能错了”并不是一种软弱" }],
			"coreSentence": "承认自己“可能错了”并不是一种软弱",
			"anchors": [{ "text": "可能错了", "showFrom": 0, "color": "red"}],
		},
	},
	"default_anchor_color": "#ffffff",
	"default_anchor_anim": "popIn",
	"default_audio_effect": "impact_thud",
} as const;

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
