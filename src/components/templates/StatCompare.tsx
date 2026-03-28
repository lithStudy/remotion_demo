/**
 * STAT_COMPARE 模板：对比效应，双指标并列 + 条形比例
 */
import React from "react";
import {
	AbsoluteFill,
	Img,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from "remotion";
import { BW_TEXT, getSafeImageSrc, type TemplateBaseProps } from "./shared";
import { TemplateContentRenderer } from "./TemplateContentRenderer";

export const templateMeta = {
	"name": "STAT_COMPARE",
	"componentExport": "BWStatCompare",
	"description":
		"适用：两项 KPI 并列对比（前后、A/B、涨跌）；条形高度反映相对大小。\n差异：意象化代价/收益用 SCALE_BALANCE；左右场景图对比用 SPLIT_COMPARE；单数字强调用 KPI_HERO。\n参数：leftValue/rightValue 为非负整数；标签宜短。",
	"psychology": "对比效应",
	"image_count": "0-2",
	"param_schema": {
		"leftValue": { "type": "number", "required": true, "desc": "左侧数值" },
		"rightValue": { "type": "number", "required": true, "desc": "右侧数值" },
		"leftLabel": { "type": "string", "required": true, "desc": "左侧标签" },
		"rightLabel": { "type": "string", "required": true, "desc": "右侧标签" },
		"leftSrc": { "type": "image_prompt", "required": false, "desc": "左侧小图标" },
		"rightSrc": { "type": "image_prompt", "required": false, "desc": "右侧小图标" },
	},
	"required_extra_params": ["leftValue", "rightValue", "leftLabel", "rightLabel"],
	"example": {
		"template": "STAT_COMPARE",
		"param": {
			"leftValue": 32,
			"rightValue": 68,
			"leftLabel": "去年",
			"rightLabel": "今年",
		},
	},
	"default_anchor_color": "#276749",
	"default_anchor_anim": "spring",
	"default_audio_effect": "woosh",
} as const;

export interface BWStatCompareProps extends TemplateBaseProps {
	leftValue: number;
	rightValue: number;
	leftLabel?: string;
	rightLabel?: string;
	leftSrc?: string;
	rightSrc?: string;
}

const fontStack =
	'"Microsoft YaHei", "PingFang SC", "Noto Sans SC", sans-serif';

export const BWStatCompare: React.FC<BWStatCompareProps> = ({
	leftValue,
	rightValue,
	leftLabel = "",
	rightLabel = "",
	leftSrc,
	rightSrc,
	content,
	anchors,
	audioSrc,
	children,
	style,
}) => {
	const frame = useCurrentFrame();
	const { fps, width } = useVideoConfig();
	const barSpring = spring({
		frame: frame - 8,
		fps,
		config: { damping: 55, stiffness: 120 },
		durationInFrames: 32,
	});
	const maxVal = Math.max(1, leftValue, rightValue);
	const leftH = interpolate(barSpring, [0, 1], [0, (leftValue / maxVal) * 100], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	});
	const rightH = interpolate(barSpring, [0, 1], [0, (rightValue / maxVal) * 100], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	});
	const numSpring = spring({
		frame: frame - 8,
		fps,
		config: { damping: 80, stiffness: 200 },
		durationInFrames: 30,
	});
	const leftShown = Math.round(
		interpolate(numSpring, [0, 1], [0, leftValue], {
			extrapolateLeft: "clamp",
			extrapolateRight: "clamp",
		}),
	);
	const rightShown = Math.round(
		interpolate(numSpring, [0, 1], [0, rightValue], {
			extrapolateLeft: "clamp",
			extrapolateRight: "clamp",
		}),
	);

	const colW = Math.min(200, width * 0.28);

	return (
		<AbsoluteFill style={{ ...style }}>
			<div
				style={{
					position: "absolute",
					left: "50%",
					top: "40%",
					transform: "translate(-50%, -50%)",
					display: "flex",
					flexDirection: "row",
					alignItems: "flex-end",
					justifyContent: "center",
					gap: width * 0.12,
					width: "90%",
				}}
			>
				{/* Left */}
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						gap: 16,
						width: colW,
					}}
				>
					<div
						style={{
							fontSize: 44,
							fontWeight: 900,
							color: BW_TEXT,
							fontFamily: fontStack,
						}}
					>
						{leftShown}
					</div>
					<Img
						src={getSafeImageSrc(leftSrc)}
						style={{ width: 72, height: 72, objectFit: "contain" }}
					/>
					<div
						style={{
							width: "100%",
							height: 220,
							backgroundColor: "rgba(0,0,0,0.06)",
							borderRadius: 12,
							display: "flex",
							flexDirection: "column",
							justifyContent: "flex-end",
							overflow: "hidden",
						}}
					>
						<div
							style={{
								width: "100%",
								height: `${leftH}%`,
								minHeight: 8,
								backgroundColor: "#C53030",
								borderRadius: "0 0 12px 12px",
							}}
						/>
					</div>
					<div
						style={{
							fontSize: 26,
							fontWeight: 700,
							color: BW_TEXT,
							textAlign: "center",
							fontFamily: fontStack,
						}}
					>
						{leftLabel}
					</div>
				</div>

				{/* Right */}
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						gap: 16,
						width: colW,
					}}
				>
					<div
						style={{
							fontSize: 44,
							fontWeight: 900,
							color: BW_TEXT,
							fontFamily: fontStack,
						}}
					>
						{rightShown}
					</div>
					<Img
						src={getSafeImageSrc(rightSrc)}
						style={{ width: 72, height: 72, objectFit: "contain" }}
					/>
					<div
						style={{
							width: "100%",
							height: 220,
							backgroundColor: "rgba(0,0,0,0.06)",
							borderRadius: 12,
							display: "flex",
							flexDirection: "column",
							justifyContent: "flex-end",
							overflow: "hidden",
						}}
					>
						<div
							style={{
								width: "100%",
								height: `${rightH}%`,
								minHeight: 8,
								backgroundColor: "#276749",
								borderRadius: "0 0 12px 12px",
							}}
						/>
					</div>
					<div
						style={{
							fontSize: 26,
							fontWeight: 700,
							color: BW_TEXT,
							textAlign: "center",
							fontFamily: fontStack,
						}}
					>
						{rightLabel}
					</div>
				</div>
			</div>

			<TemplateContentRenderer content={content} anchors={anchors} audioSrc={audioSrc} />
			{children}
		</AbsoluteFill>
	);
};
