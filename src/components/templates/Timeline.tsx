/**
 * TIMELINE 模板：叙事连贯性，时间轴展示（images 支持 3～5 项）
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
		"适用：历史演进、时间顺序、前后对比带明确时间轴。\n差异：无时间线的并列要点用 PANEL_GRID；操作步骤用 STEP_LIST。\n参数：images 3～5 项，按数组顺序从左到右沿轴线均分。",
	"psychology": "叙事连贯性",
	"image_count": "3-5",
	"param_schema": {
		"type": "object",
		"properties": {
			"images": {
				"type": "array",
				"minItems": 3,
				"maxItems": 5,
				"description": "时间轴节点配图（3～5 项）；顺序即时间先后，横向从左到右均分",
				"items": {
					"type": "object",
					"required": ["src"],
					"properties": {
						"src": {
							"type": "string",
							"format": "image_prompt",
							"description": "该节点配图提示词",
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
				{ "src": "1990年代电脑图标", "enterEffect": "slideLeft" },
				{ "src": "2010年代笔记本图标", "enterEffect": "fadeIn" },
				{ "src": "2020年代手机图标", "enterEffect": "slideLeft" },
			],
		},
	},
} as const;

/** TIMELINE 单节点：无 position，横坐标仅由 images 顺序与数量决定 */
export type TimelineImageItem = Omit<MultiImageItem, "position">;

export interface BWTimelineProps extends TemplateBaseProps, TemplateAnchorsProps {
	images: TimelineImageItem[];
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
	const imgSize = images.length >= 5 ? 150 : images.length === 4 ? 170 : 200;
	const autoXFracs =
		images.length <= 1
			? [0.5]
			: images.map((_, i) => 0.2 + (i / (images.length - 1)) * 0.6);
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
				const xFrac = autoXFracs[i] ?? 0.5;
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
								width: imgSize,
								height: imgSize,
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
