/**
 * CHECKLIST_REVEAL 模板：收束清单 / 要点复诵，逐项打勾显现
 */
import React from "react";
import { AbsoluteFill, Img, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import {
	BW_TEXT,
	getSafeImageSrc,
	type TemplateAnchorsProps,
	type TemplateBaseProps,
} from "./shared";
import { TemplateDefaultAnchors } from "./TemplateAnchorsLayer";
import { TemplateContentRenderer, normalizeContent } from "./TemplateContentRenderer";

export const templateMeta = {
	"name": "CHECKLIST_REVEAL",
	"componentExport": "BWChecklistReveal",
	"description":
		"适用：收束段、行动清单、要点复诵；口播逐条对应清单行，行随 content 时间显现并打勾。\n差异：可执行「第一步/第二步」短步骤用 STEP_LIST；并列多组大图用 PANEL_GRID；纯叙述单图用 CENTER_FOCUS。\n参数：rows 2～6 项，每项 text（短标签）、showFrom（content 下标）；可选 title；可选 imageSrc 为角落装饰小图（非主叙事图时可省略）。",
	"psychology": "闭环与可执行感",
	"image_count": "0-1",
	"content_min_items": 2,
	"content_max_items": 8,
	"param_schema": {
		"type": "object",
		"properties": {
			"title": {
				"type": "string",
				"description": "可选；清单上方标题，建议 4～14 字",
			},
			"imageSrc": {
				"type": "string",
				"format": "image_prompt",
				"description": "可选；右上角小装饰图，不需要可省略",
			},
			"rows": {
				"type": "array",
				"minItems": 2,
				"maxItems": 6,
				"description": "清单行；showFrom 为 content 下标（0-based），在该条 startFrame 打勾显现",
				"items": {
					"type": "object",
					"required": ["text", "showFrom"],
					"properties": {
						"text": { "type": "string", "description": "该行短文案，建议不超过 16 字" },
						"showFrom": {
							"type": "integer",
							"format": "content_index",
							"description": "content 下标（0-based），非帧数",
						},
					},
				},
			},
		},
		"required": ["rows"],
	},
	"example": {
		"template": "CHECKLIST_REVEAL",
		"param": {
			"title": "今日心法",
			"rows": [
				{ "text": "先写事实", "showFrom": 0 },
				{ "text": "再写推断", "showFrom": 1 },
				{ "text": "留痕备查", "showFrom": 2 },
			],
		},
	},
} as const;

export type ChecklistRowItem = {
	text: string;
	showFrom: number;
};

export interface BWChecklistRevealProps extends TemplateBaseProps, TemplateAnchorsProps {
	rows: ChecklistRowItem[];
	title?: string;
	imageSrc?: string;
}

const resolveRowStartFrame = (
	showFrom: number,
	rowIndex: number,
	contentItems: ReturnType<typeof normalizeContent>,
	staggerFallback: number,
): number => {
	if (
		typeof showFrom === "number" &&
		Number.isInteger(showFrom) &&
		showFrom >= 0 &&
		showFrom < contentItems.length
	) {
		const cue = contentItems[showFrom];
		if (cue && typeof cue.startFrame === "number") return cue.startFrame;
	}
	return rowIndex * staggerFallback;
};

const CheckRow: React.FC<{
	text: string;
	startFrame: number;
}> = ({ text, startFrame }) => {
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();
	const rel = frame - startFrame;
	const rowIn = spring({
		frame: rel,
		fps,
		config: { damping: 75, stiffness: 200 },
		durationInFrames: 18,
	});
	const rowOpacity = interpolate(rowIn, [0, 1], [0, 1], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	});
	const checkRel = Math.max(0, rel - 4);
	const checkP = spring({
		frame: checkRel,
		fps,
		config: { damping: 60, stiffness: 220 },
		durationInFrames: 12,
	});
	const checkScale = interpolate(checkP, [0, 1], [0.2, 1], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	});

	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				gap: 16,
				padding: "14px 18px",
				backgroundColor: "#f7f7f7",
				borderRadius: 12,
				borderLeft: `4px solid ${BW_TEXT}`,
				opacity: rowOpacity,
			}}
		>
			<div
				style={{
					width: 36,
					height: 36,
					borderRadius: 8,
					border: `2px solid ${BW_TEXT}`,
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					flexShrink: 0,
					backgroundColor: "#fff",
				}}
			>
				<span
					style={{
						fontSize: 34,
						fontWeight: 800,
						color: "#16a34a",
						transform: `scale(${checkScale})`,
						lineHeight: 1,
					}}
				>
					✓
				</span>
			</div>
			<div
				style={{
					fontSize: 44,
					fontWeight: 600,
					color: BW_TEXT,
					lineHeight: 1.35,
					flex: 1,
				}}
			>
				{text}
			</div>
		</div>
	);
};

export const BWChecklistReveal: React.FC<BWChecklistRevealProps> = ({
	rows,
	title,
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
	const list = (rows ?? []).slice(0, 6);
	const stagger = 16;
	const starts = list.map((r, i) => resolveRowStartFrame(r.showFrom, i, items, stagger));
	const decorIn = spring({
		frame,
		fps,
		config: { damping: 80, stiffness: 120 },
		durationInFrames: 20,
	});
	const decorOpacity = imageSrc
		? interpolate(decorIn, [0, 1], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })
		: 0;

	return (
		<AbsoluteFill style={style}>
			{imageSrc ? (
				<div
					style={{
						position: "absolute",
						right: 32,
						top: "20%",
						width: 72,
						height: 72,
						opacity: decorOpacity,
					}}
				>
					<Img
						src={getSafeImageSrc(imageSrc)}
						style={{ width: "100%", height: "100%", objectFit: "contain" }}
					/>
				</div>
			) : null}
			<div
				style={{
					position: "absolute",
					left: 40,
					right: imageSrc ? 120 : 40,
					top: title ? "26%" : "28%",
					bottom: "24%",
					display: "flex",
					flexDirection: "column",
					gap: 14,
				}}
			>
				{title ? (
					<div
						style={{
							fontSize: 48,
							fontWeight: 800,
							color: BW_TEXT,
							marginBottom: 4,
							textAlign: "center",
						}}
					>
						{title}
					</div>
				) : null}
				{list.map((row, i) => (
					<CheckRow key={i} text={row.text} startFrame={starts[i] ?? 0} />
				))}
			</div>
			<TemplateDefaultAnchors content={content} anchors={anchors} />
			<TemplateContentRenderer content={content} audioSrc={audioSrc} />
			{children}
		</AbsoluteFill>
	);
};
