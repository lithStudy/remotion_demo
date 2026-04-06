/**
 * STEP_LIST 模板：降低认知负荷，步骤/流程展示
 */
import React from "react";
import { AbsoluteFill } from "remotion";
import { StaggeredList } from "../TextAnimations";
import { BW_TEXT, type TemplateAnchorsProps, type TemplateBaseProps } from "./shared";
import { TemplateContentRenderer, normalizeContent } from "./TemplateContentRenderer";

export const templateMeta = {
	"name": "STEP_LIST",
	"componentExport": "BWStepList",
	"description":
		"适用：可执行步骤、操作流程、短分点清单（第一步/第二步…），无配图，每个分点必须限制在10个字符以内。\n差异：若每条方法后还跟较长解释、追问或补充句，优先用 METHOD_STACK；无步骤感的并列要点用 LIST_MULTI_GROUP 或 CENTER_FOCUS。\n参数：steps 可为字符串数组，或 { text, showFrom? }；showFrom 为 content 数组的下标（0-based），与 anchors 一致，入场时刻取该条 content 的 startFrame；不传 steps 则从 content 提取；未写 showFrom 时按 staggerDelay 与序号交错。",
	"content_min_items": 2,
	"content_max_items": 6,
	"psychology": "降低认知负荷",
	"image_count": 0,
	"param_schema": {
		"type": "object",
		"properties": {
			"steps": {
				"type": "array",
				"items": {
					"oneOf": [
						{"type": "string"},
						{
							"type": "object",
							"properties": {
								"text": {"type": "string"},
								"showFrom": {
									"type": "integer",
									"minimum": 0,
									"description":
										"对应 content 数组的下标（0-based）；该步在 content[showFrom].startFrame 帧开始入场。不传则按 staggerDelay 与序号顺延。",
								},
							},
							"required": ["text"],
						},
					],
				},
				"minItems": 2,
				"maxItems": 6,
				"description":
					"步骤（可选）。可为字符串，或 { text, showFrom? }（showFrom=content 下标）；不传则从 content 提取。每条 text 建议不超过 10 字。",
			},
		},
		"required": [],
	},
	"example": {
		"template": "STEP_LIST",
		"param": {
			"steps": [
				{"text": "第一步", "showFrom": 0},
				{"text": "第二步", "showFrom": 1},
				{"text": "第三步", "showFrom": 2}
			],
		},
	},
} as const;

export type BWStepListStepItem =
	| string
	| {
			text: string;
			/** 对应 content 的下标（0-based），与 anchors.showFrom 一致；入场帧取 content[showFrom].startFrame */
			showFrom?: number;
	  };

export interface BWStepListProps extends TemplateBaseProps, TemplateAnchorsProps {
	steps?: BWStepListStepItem[];
	startFrame?: number;
	/** 未指定 showFrom 时的步间间隔（帧） */
	staggerDelay?: number;
}

const normalizeStepItems = (
	steps: BWStepListStepItem[] | undefined,
	contentFallback: ReturnType<typeof normalizeContent>,
): { text: string; showFrom?: number }[] => {
	if (steps?.length) {
		return steps.map((s) => (typeof s === "string" ? { text: s } : { ...s }));
	}
	return contentFallback.map((c) => ({ text: c.text }));
};

const resolveStepEntryFrame = (
	row: { showFrom?: number },
	stepIndex: number,
	contentItems: ReturnType<typeof normalizeContent>,
	staggerDelay: number,
): number => {
	const idx = row.showFrom;
	if (
		typeof idx === "number" &&
		Number.isInteger(idx) &&
		idx >= 0 &&
		idx < contentItems.length
	) {
		const cue = contentItems[idx];
		if (cue && typeof cue.startFrame === "number") {
			return cue.startFrame;
		}
	}
	return stepIndex * staggerDelay;
};

export const BWStepList: React.FC<BWStepListProps> = ({
	steps,
	startFrame = 0,
	staggerDelay = 12,
	content,
	anchors,
	audioSrc,
	children,
	style,
}) => {
	const items = normalizeContent(content);
	const stepRows = normalizeStepItems(steps, items);
	const itemDelays = stepRows.map((row, i) =>
		startFrame + resolveStepEntryFrame(row, i, items, staggerDelay),
	);

	return (
		<AbsoluteFill style={style}>
			<div
				style={{
					position: "absolute",
					left: 48,
					right: 48,
					top: "50%",
					transform: "translateY(-50%)",
				}}
			>
				<StaggeredList
					items={stepRows.map((row, i) => (
						<div
							key={i}
							style={{
								display: "flex",
								alignItems: "center",
								gap: 16,
								padding: "12px 20px",
								backgroundColor: i % 2 === 0 ? "#f0f0f0" : "#fff",
								borderLeft: "4px solid #111",
								fontSize: 32,
								fontWeight: 600,
								color: BW_TEXT,
							}}
						>
							<span style={{ opacity: 0.6 }}>{i + 1}.</span>
							{row.text}
						</div>
					))}
					itemDelays={itemDelays}
					staggerDelay={staggerDelay}
				/>
			</div>
			<TemplateContentRenderer content={content} anchors={anchors} audioSrc={audioSrc} />
			{children}
		</AbsoluteFill>
	);
};
