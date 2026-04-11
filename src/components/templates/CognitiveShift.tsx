/**
 * COGNITIVE_SHIFT 模板：认知翻转（不是...而是...）
 * 适用场景：打破直觉，建立新认知。逻辑：直觉 -> 否定 -> 真理。
 */
import React from "react";
import { AbsoluteFill, Img, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { BW_TEXT, getSafeImageSrc, type TemplateAnchorsProps, type TemplateBaseProps } from "./shared";
import { TemplateContentRenderer } from "./TemplateContentRenderer";
import { FirefliesBackdrop } from "./FirefliesBackdrop";

export const templateMeta = {
	"name": "COGNITIVE_SHIFT",
	"componentExport": "BWCognitiveShift",
	"description":
		"适用：强对立翻转「不是...而是...」；用于纠偏、立场重述、定位差异化、观点辩论等场景的核心对句。\n视觉：A 部分（旧说法/常见误解）淡入后变灰并划线；B 部分（新结论/主张）随后高亮弹出。\n参数：notText（被否定的部分）、butText（建立的部分）必须是极简的对比关键词（如：堆功能 vs 抓体验），严禁使用完整长句；可选 butSrc（仅「而是」侧配图）。",
	"psychology": "认知翻转",
	"image_count": "0-1",
	"param_schema": {
		"type": "object",
		"properties": {
			"notText": { "type": "string", "description": "被否认知（‘不是’后面的内容）的精炼短句，不超过12个字，" },
			"butText": { "type": "string", "description": "真实认知（‘而是’后面的内容）的精炼短句，不超过12个字" },
			"butSrc": {
				"type": "string",
				"format": "image_prompt",
				"description": "真实认知的配图",
			},
			"notContentIndex": {
				"type": "integer",
				"format": "content_index",
				"description": "触发「不是」动画的字幕段索引（默认 0）",
			},
			"butContentIndex": {
				"type": "integer",
				"format": "content_index",
				"description": "触发「而是」动画的字幕段索引（默认 1）",
			},
		},
		"required": ["notText", "butText"],
	},
	"example": {
		"template": "COGNITIVE_SHIFT",
		"content":["我们都不应该靠勤奋拼命","我们都应该是靠认知和选择","这样我才能成功"],
		"param": {
			"notText": "靠勤奋拼命",
			"butText": "靠认知和选择",
			"butSrc": "站在高处看地图的思考者",
			"notContentIndex": 0,
			"butContentIndex": 1,
		},
	},
} as const;

export interface BWCognitiveShiftProps extends TemplateBaseProps, TemplateAnchorsProps {
	notText?: string;
	butText?: string;
	butSrc?: string;
	notContentIndex?: number;
	butContentIndex?: number;
}

export const BWCognitiveShift: React.FC<BWCognitiveShiftProps> = ({
	notText = "",
	butText = "",
	butSrc,
	notContentIndex = 0,
	butContentIndex = 1,
	content,
	audioSrc,
	children,
	style,
}) => {
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();

	// 动态获取内容起始帧
	let notStartFrame = 0;
	let butStartFrame = 35; // 默认备用

	if (content && content.length > 0) {
		const getFrame = (idx: number, fallback: number) => {
			if (idx >= 0 && idx < content.length) {
				const item = content[idx];
				return item.startFrame;
			}
			return fallback;
		};
		notStartFrame = getFrame(notContentIndex, 0);
		butStartFrame = getFrame(butContentIndex, 35);
	}

	// 动画时间轴：
	// 入场：根据 notContentIndex 对应的帧数
	// 弱化与转折：根据 butContentIndex 对应的帧数（弱化比转折略早一些）
	const shiftStartFrame = Math.max(notStartFrame + 15, butStartFrame - 15);

	const notEnter = spring({ frame: frame - notStartFrame, fps, config: { damping: 60, stiffness: 180 }, durationInFrames: 15 });
	const shiftProgress = spring({ frame: frame - shiftStartFrame, fps, config: { damping: 12, stiffness: 100 }, durationInFrames: 20 });
	const butEnter = spring({ frame: frame - butStartFrame, fps, config: { damping: 10, stiffness: 150 }, durationInFrames: 20 });

	const firefliesOpacity =
		notStartFrame <= 0
			? 0
			: interpolate(frame, [0, notStartFrame, notStartFrame + 15], [1, 1, 0], {
					extrapolateLeft: "clamp",
					extrapolateRight: "clamp",
				});

	const strikeWidth = interpolate(shiftProgress, [0.2, 0.8], [0, 100], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
	const notOpacity = interpolate(shiftProgress, [0, 1], [1, 0.3]);
	const notScale = interpolate(shiftProgress, [0, 1], [1, 0.85]);

	const butScale = interpolate(butEnter, [0, 1], [0.6, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
	const butY = interpolate(butEnter, [0, 1], [56, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });



	return (
		<AbsoluteFill style={{ ...style }}>
			<FirefliesBackdrop opacity={firefliesOpacity} seed={`COGNITIVE_SHIFT-${notStartFrame}`} />
			<div style={{
				display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
				height: "84%", // 留出底部字幕空间
				padding: "0 96px",
			}}>
				{/* "不是" 部分 */}
				<div style={{
					display: "flex", flexDirection: "column", alignItems: "center",
					opacity: notOpacity * notEnter, transform: `scale(${notScale}) translateY(${interpolate(notEnter, [0, 1], [28, 0])}px)`,
					marginBottom: 56,
				}}>
					<div style={{ position: "relative" }}>
						<div style={{ fontSize: 88, fontWeight: 900, color: BW_TEXT, position: "relative" }}>
							{notText}
							{/* 删除线 */}
							<div style={{
								position: "absolute", top: "55%", left: "-5%", width: `${strikeWidth}%`, height: 12,
								backgroundColor: "#E53E3E", borderRadius: 6, transform: "rotate(-2deg)",
							}} />
						</div>
					</div>
					{/* <Img src={getSafeImageSrc(notSrc)} style={{ marginTop: 20, maxWidth: 200, height: 160, objectFit: "contain", opacity: 0.8 }} /> */}
				</div>

				{/* 中间连接词：渐隐渐现，或者随着 But 一起出现 */}


				{/* "而是" 部分 */}
				<div style={{
					display: "flex", flexDirection: "column", alignItems: "center",
					opacity: butEnter, transform: `scale(${butScale}) translateY(${butY}px)`,
					marginTop: 36,
				}}>
					<div style={{
						fontSize: 132, fontWeight: 900, color: BW_TEXT, textAlign: "center",
						textShadow: "0 14px 28px rgba(0,0,0,0.12)", lineHeight: 1.1
					}}>
						{butText}
					</div>
					<Img src={getSafeImageSrc(butSrc)} style={{ marginTop: 48, maxWidth: "68%", maxHeight: 420, objectFit: "contain", borderRadius: 28 }} />
				</div>
			</div>

			<TemplateContentRenderer content={content} audioSrc={audioSrc} />
			{children}
		</AbsoluteFill>
	);
};
