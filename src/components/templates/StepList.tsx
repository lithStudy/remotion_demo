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
		"适用：可执行步骤、操作流程、短分点清单（第一步/第二步…），无配图，每个分点必须限制在10个字符以内。\n差异：若每条方法后还跟较长解释、追问或补充句，优先用 METHOD_STACK；无步骤感的并列要点用 LIST_MULTI_GROUP 或 CENTER_FOCUS。\n参数：可直接传 steps（字符串数组）；若不传 steps，则从 content 提取文本作为步骤，建议保持短句清单感。",
	"content_min_items": 2,
	"content_max_items": 6,
	"psychology": "降低认知负荷",
	"image_count": 0,
	"param_schema": {
		"type": "object",
		"properties": {
			"steps": {
				"type": "array",
				"items": {"type": "string"},
				"minItems": 2,
				"maxItems": 6,
				"description": "步骤文本数组（可选）。不传则从 content 中提取。每条不超过 10 个字符。",
			},
		},
		"required": [],
	},
	"example": {
		"template": "STEP_LIST",
		"param": {
			"steps": ["第一步", "第二步", "第三步"],
		},
	},
} as const;

export interface BWStepListProps extends TemplateBaseProps, TemplateAnchorsProps {
	steps?: string[];
	startFrame?: number;
}

export const BWStepList: React.FC<BWStepListProps> = ({
	steps,
	startFrame = 0,
	content,
	anchors,
	audioSrc,
	children,
	style,
}) => {
	// 如果没有 steps, 从 content 中提取文本作为步骤
	const items = normalizeContent(content);
	const stepTexts = steps ?? items.map((c) => c.text);

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
					items={stepTexts.map((s, i) => (
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
							{s}
						</div>
					))}
					startFrame={startFrame}
					staggerDelay={12}
				/>
			</div>
			<TemplateContentRenderer content={content} anchors={anchors} audioSrc={audioSrc} />
			{children}
		</AbsoluteFill>
	);
};
