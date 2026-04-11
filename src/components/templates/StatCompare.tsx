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
import { BW_TEXT, getSafeImageSrc, type TemplateAnchorsProps, type TemplateBaseProps } from "./shared";
import { TemplateDefaultAnchors } from "./TemplateAnchorsLayer";
import { TemplateContentRenderer } from "./TemplateContentRenderer";

export const templateMeta = {
	"name": "STAT_COMPARE",
	"componentExport": "BWStatCompare",
	"description":
		"适用：两项 KPI 并列对比（前后、A/B、涨跌）；条形高度反映相对大小。\n差异：左右场景图对比用 SPLIT_COMPARE；单数字强调用 KPI_HERO；若强调完成度/进度闭环感用 PROGRESS_RING。\n参数：leftValue/rightValue 为非负整数；标签宜短。",
	"psychology": "对比效应",
	"image_count": "0-2",
	"param_schema": {
		"type": "object",
		"properties": {
			"leftValue": { "type": "integer", "description": "左侧数值（非负整数）" },
			"rightValue": { "type": "integer", "description": "右侧数值（非负整数）" },
			"leftLabel": { "type": "string", "description": "左侧标签" },
			"rightLabel": { "type": "string", "description": "右侧标签" },
			"leftSrc": {
				"type": "string",
				"format": "image_prompt",
				"description": "左侧小图标",
			},
			"rightSrc": {
				"type": "string",
				"format": "image_prompt",
				"description": "右侧小图标",
			},
		},
		"required": ["leftValue", "rightValue", "leftLabel", "rightLabel"],
	},
	"example": {
		"template": "STAT_COMPARE",
		"param": {
			"leftValue": 32,
			"rightValue": 68,
			"leftLabel": "去年",
			"rightLabel": "今年",
		},
	},
} as const;

export interface BWStatCompareProps extends TemplateBaseProps, TemplateAnchorsProps {
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

	const colW = Math.min(320, width * 0.28);

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
						gap: 24,
						width: colW,
					}}
				>
					<div
						style={{
							fontSize: 66,
							fontWeight: 900,
							color: BW_TEXT,
							fontFamily: fontStack,
						}}
					>
						{leftShown}
					</div>
					<Img
						src={getSafeImageSrc(leftSrc)}
						style={{ width: 108, height: 108, objectFit: "contain" }}
					/>
					<div
						style={{
							width: "100%",
							height: 300,
							backgroundColor: "rgba(0,0,0,0.06)",
							borderRadius: 18,
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
								borderRadius: "0 0 18px 18px",
							}}
						/>
					</div>
					<div
						style={{
							fontSize: 40,
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
						gap: 24,
						width: colW,
					}}
				>
					<div
						style={{
							fontSize: 66,
							fontWeight: 900,
							color: BW_TEXT,
							fontFamily: fontStack,
						}}
					>
						{rightShown}
					</div>
					<Img
						src={getSafeImageSrc(rightSrc)}
						style={{ width: 108, height: 108, objectFit: "contain" }}
					/>
					<div
						style={{
							width: "100%",
							height: 300,
							backgroundColor: "rgba(0,0,0,0.06)",
							borderRadius: 18,
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
								borderRadius: "0 0 18px 18px",
							}}
						/>
					</div>
					<div
						style={{
							fontSize: 40,
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

			<TemplateDefaultAnchors content={content} anchors={anchors} />
			<TemplateContentRenderer content={content} audioSrc={audioSrc} />
			{children}
		</AbsoluteFill>
	);
};
