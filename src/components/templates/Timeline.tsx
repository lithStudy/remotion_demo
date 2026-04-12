/**
 * TIMELINE 模板：叙事连贯性，时间轴展示
 */
import React from "react";
import { AbsoluteFill, Img, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import {
	BW_TEXT,
	getSafeImageSrc,
	type MultiImageItem,
	type TemplateAnchorsProps,
	type TemplateBaseProps,
} from "./shared";
import { TemplateDefaultAnchors } from "./TemplateAnchorsLayer";
import { TemplateContentRenderer } from "./TemplateContentRenderer";

export const templateMeta = {
	"name": "TIMELINE",
	"componentExport": "BWTimeline",
	"description":
		"适用：历史演进、时间顺序、前后对比带明确时间轴。\n差异：无时间线的并列要点用 PANEL_GRID；操作步骤用 STEP_LIST。\n参数：images 2～3 项，position 常 left/right 以配合轴线。",
	"psychology": "叙事连贯性",
	"image_count": "2-3",
	"param_schema": {
		"type": "object",
		"properties": {
			"images": {
				"type": "array",
				"minItems": 2,
				"maxItems": 3,
				"description": "时间轴图片数组；position 常用 left/right 配合轴线",
				"items": {
					"type": "object",
					"required": ["src"],
					"properties": {
						"src": {
							"type": "string",
							"format": "image_prompt",
							"description": "该节点配图提示词",
						},
						"position": {
							"type": "string",
							"enum": ["center", "left", "right", "top", "bottom"],
						},
						"enterEffect": {
							"type": "string",
							"enum": ["breathe", "slideLeft", "slideBottom", "zoomIn", "fadeIn"],
							"default": "breathe",
						},
						"textIndex": { "type": "integer", "format": "content_index" },
						"startFrame": { "type": "integer" },
					},
				},
			},
		},
		"required": ["images"],
	},
	"example": {
		"template": "TIMELINE",
		"param": {
			"images": [
				{ "src": "1990年代电脑图标", "position": "left", "enterEffect": "slideLeft" },
				{ "src": "2020年代手机图标", "position": "right", "enterEffect": "slideLeft" },
			],
		},
	},
} as const;

const TIMELINE_X_BY_POS: Record<string, number> = {
	left: 0.2,
	center: 0.5,
	right: 0.8,
};

export interface BWTimelineProps extends TemplateBaseProps, TemplateAnchorsProps {
	images: MultiImageItem[];
}

export const BWTimeline: React.FC<BWTimelineProps> = ({
	images,
	content,
	anchors,
	audioSrc,
	children,
	style,
}) => {
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();
	const contentItems = content ?? [];
	const lineProgress = interpolate(
		spring({ frame, fps, config: { damping: 80, stiffness: 40 }, durationInFrames: 50 }),
		[0, 1],
		[0, 80],
		{ extrapolateLeft: "clamp", extrapolateRight: "clamp" },
	);
	const timelineY = 50;

	return (
		<AbsoluteFill style={style}>
			<div
				style={{
					position: "absolute",
					left: "10%",
					width: "80%",
					top: `${timelineY}%`,
					height: 9,
					backgroundColor: "#e0e0e0",
					borderRadius: 5,
				}}
			/>
			<div
				style={{
					position: "absolute",
					left: "10%",
					width: `${lineProgress}%`,
					top: `${timelineY}%`,
					height: 9,
					backgroundColor: BW_TEXT,
					borderRadius: 5,
				}}
			/>
			{images.map((img, i) => {
				const xFrac = img.position ? (TIMELINE_X_BY_POS[img.position] ?? 0.5) : 0.5;
				const appearFrame =
					typeof img.textIndex === "number" && img.textIndex >= 0
						? (contentItems[img.textIndex]?.startFrame ?? img.startFrame ?? 0)
						: (img.startFrame ?? 0);
				const localFrame = Math.max(0, frame - appearFrame);
				const nodeSpring = spring({
					frame: localFrame,
					fps,
					config: { damping: 60, stiffness: 300 },
					durationInFrames: 15,
				});
				const visible = frame >= appearFrame;
				const isAbove = i % 2 === 0;
				const iconTop = isAbove ? "28%" : "52%";
				return (
					<React.Fragment key={i}>
						<div
							style={{
								position: "absolute",
								left: `${xFrac * 100}%`,
								top: `${timelineY}%`,
								transform: "translate(-50%, -50%)",
								width: 36,
								height: 36,
								borderRadius: "50%",
								backgroundColor: BW_TEXT,
								border: "6px solid #fff",
								boxShadow: "0 0 0 3px #111",
								opacity: visible ? nodeSpring : 0,
								zIndex: 2,
							}}
						/>
						<Img
							src={getSafeImageSrc(img.src)}
							style={{
								position: "absolute",
								left: `${xFrac * 100}%`,
								top: iconTop,
								transform: `translate(-50%, 0) scale(${visible ? nodeSpring : 0.5})`,
								width: 200,
								height: 200,
								objectFit: "contain",
								opacity: visible ? nodeSpring : 0,
							}}
						/>
					</React.Fragment>
				);
			})}
			<TemplateDefaultAnchors content={content} anchors={anchors} />
			<TemplateContentRenderer content={content} audioSrc={audioSrc} />
			{children}
		</AbsoluteFill>
	);
};
