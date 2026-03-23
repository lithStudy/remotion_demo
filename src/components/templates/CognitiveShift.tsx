/**
 * COGNITIVE_SHIFT 模板：认知翻转（不是...而是...）
 * 适用场景：打破直觉，建立新认知。逻辑：直觉 -> 否定 -> 真理。
 */
import React from "react";
import { AbsoluteFill, Img, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { BW_TEXT, getSafeImageSrc, type TemplateBaseProps } from "./shared";
import { TemplateContentRenderer } from "./TemplateContentRenderer";

export const templateMeta = {
	"name": "COGNITIVE_SHIFT",
	"componentExport": "BWCognitiveShift",
	"description":
		"适用：强力认知翻转「不是...而是...」；打破直觉误区，揭示底层逻辑。\n视觉：A 部分（直觉）淡入后变灰并划线；B 部分（事实）随后高亮弹出。\n参数：notText（被否定的部分）、butText（建立的部分）；可配对应图片。",
	"psychology": "认知翻转",
	"image_count": 2,
	"param_schema": {
		"notText": { "type": "string", "required": true, "desc": "被否认知（‘不是’后面的内容）" },
		"butText": { "type": "string", "required": true, "desc": "真实认知（‘而是’后面的内容）" },
		"notSrc": { "type": "image_prompt", "required": false, "desc": "被否认知的配图" },
		"butSrc": { "type": "image_prompt", "required": false, "desc": "真实认知的配图" },
	},
	"required_extra_params": ["notText", "butText"],
	"example": {
		"template": "COGNITIVE_SHIFT",
		"param": {
			"notText": "靠勤奋拼命",
			"butText": "靠认知和选择",
			"notSrc": "满地找金币的辛苦工人",
			"butSrc": "站在高处看地图的思考者",
			"content": ["你以为赚钱是靠勤奋吗？", "其实不是靠拼命，而是靠选择。"],
		},
	},
	"default_anchor_color": "#E53E3E",
	"default_anchor_anim": "popIn",
	"default_audio_effect": "impact_thud",
} as const;

export interface BWCognitiveShiftProps extends TemplateBaseProps {
	notText?: string;
	butText?: string;
	notSrc?: string;
	butSrc?: string;
}

export const BWCognitiveShift: React.FC<BWCognitiveShiftProps> = ({
	notText = "",
	butText = "",
	notSrc,
	butSrc,
	content,
	audioSrc,
	children,
	style,
}) => {
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();

	// 动画时间轴：
	// 0-15: Not 部分入场
	// 20-30: Not 部分弱化（变灰、划线）
	// 35-50: But 部分弹入
	const notEnter = spring({ frame, fps, config: { damping: 60, stiffness: 180 }, durationInFrames: 15 });
	const shiftProgress = spring({ frame: frame - 20, fps, config: { damping: 12, stiffness: 100 }, durationInFrames: 20 });
	const butEnter = spring({ frame: frame - 35, fps, config: { damping: 10, stiffness: 150 }, durationInFrames: 20 });

	const strikeWidth = interpolate(shiftProgress, [0.2, 0.8], [0, 100], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
	const notOpacity = interpolate(shiftProgress, [0, 1], [1, 0.3]);
	const notScale = interpolate(shiftProgress, [0, 1], [1, 0.85]);

	const butScale = interpolate(butEnter, [0, 1], [0.6, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
	const butY = interpolate(butEnter, [0, 1], [40, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

	return (
		<AbsoluteFill style={{ ...style }}>
			<div style={{
				display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
				height: "85%", // 留出底部字幕空间
				padding: "0 40px",
			}}>
				{/* "不是" 部分 */}
				<div style={{
					display: "flex", flexDirection: "column", alignItems: "center",
					opacity: notOpacity * notEnter, transform: `scale(${notScale}) translateY(${interpolate(notEnter, [0, 1], [20, 0])}px)`,
					marginBottom: 40,
				}}>
					<div style={{ position: "relative" }}>
						<span style={{ fontSize: 32, fontWeight: 700, color: "#666", marginBottom: 8, display: "block", textAlign: "center" }}>不是</span>
						<div style={{ fontSize: 56, fontWeight: 900, color: BW_TEXT, position: "relative" }}>
							{notText}
							{/* 删除线 */}
							<div style={{
								position: "absolute", top: "55%", left: "-5%", width: `${strikeWidth + 10}%`, height: 8,
								backgroundColor: "#E53E3E", borderRadius: 4, transform: "rotate(-2deg)",
							}} />
						</div>
					</div>
					<Img src={getSafeImageSrc(notSrc)} style={{ marginTop: 20, maxWidth: 200, height: 160, objectFit: "contain", opacity: 0.8 }} />
				</div>

				{/* 中间连接词：渐隐渐现，或者随着 But 一起出现 */}
				{frame > 30 && (
					<div style={{ fontSize: 48, fontWeight: 900, color: "#E53E3E", margin: "10px 0", opacity: butEnter }}>
						而是
					</div>
				)}

				{/* "而是" 部分 */}
				<div style={{
					display: "flex", flexDirection: "column", alignItems: "center",
					opacity: butEnter, transform: `scale(${butScale}) translateY(${butY}px)`,
					marginTop: 20,
				}}>
					<div style={{
						fontSize: 88, fontWeight: 900, color: BW_TEXT, textAlign: "center",
						textShadow: "0 10px 20px rgba(0,0,0,0.1)", lineHeight: 1.1
					}}>
						{butText}
					</div>
					<Img src={getSafeImageSrc(butSrc)} style={{ marginTop: 30, maxWidth: "70%", maxHeight: 280, objectFit: "contain", borderRadius: 20 }} />
				</div>
			</div>

			<TemplateContentRenderer content={content} audioSrc={audioSrc} />
			{children}
		</AbsoluteFill>
	);
};
