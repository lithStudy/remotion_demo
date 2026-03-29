/**
 * STEP_LIST 模板：降低认知负荷，步骤/流程展示
 */
import React from "react";
import { AbsoluteFill } from "remotion";
import { StaggeredList } from "../TextAnimations";
import { BW_TEXT, type TemplateBaseProps } from "./shared";
import { TemplateContentRenderer, normalizeContent } from "./TemplateContentRenderer";

export { stepListMeta as templateMeta } from "./template-definitions";

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
