/**
 * STEP_LIST 模板：降低认知负荷，步骤/流程展示
 */
import React from "react";
import { AbsoluteFill } from "remotion";
import { StaggeredList } from "../TextAnimations";
import { BW_TEXT, type TemplateBaseProps } from "./shared";
import { TemplateContentRenderer, normalizeContent } from "./TemplateContentRenderer";

export const templateMeta = {
	"name": "STEP_LIST",
	"componentExport": "BWStepList",
	"description":
		"适用：可执行步骤、操作流程、推导链条（第一步/第二步…），无配图。\n差异：无步骤感的并列要点用 LIST_MULTI_GROUP 或 CENTER_FOCUS。\n参数：仅用 content 多条字符串即可。",
	"psychology": "降低认知负荷",
	"image_count": 0,
	"param_schema": {
		"content": { "type": "content_array", "required": true, "desc": "口播字幕分段，对象数组每项含 text；须完整覆盖该 item 台词" },
	},
	"required_extra_params": [] as string[],
	"example": {
		"template": "STEP_LIST",
		"param": {
			"content": [{ "text": "第一步做什么" }, { "text": "第二步做什么" }, { "text": "第三步做什么" }],
		},
	},
	"default_anchor_color": "#276749",
	"default_anchor_anim": "slideUp",
	"default_audio_effect": "ping",
} as const;

export interface BWStepListProps extends TemplateBaseProps {
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
