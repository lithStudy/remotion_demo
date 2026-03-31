/**
 * QUOTE_CITATION 模板：社会认同背书，引用展示
 */
import React from "react";
import { AbsoluteFill, Img, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { BW_TEXT, getSafeImageSrc, type TemplateAnchorsProps, type TemplateBaseProps } from "./shared";
import { TemplateContentRenderer } from "./TemplateContentRenderer";

export const templateMeta = {
	"name": "QUOTE_CITATION",
	"componentExport": "BWQuoteCitation",
	"description":
		"适用：任何“引用/摘录/证言/背书”体裁（名言、著作、研究结论、媒体引用、用户评价、客户证言、公告摘录等）；可选一张配角图。\n提示：引文主体建议放在 content/字幕中，本模板版心更强调“引用体裁 + 出处”。\n差异：非引用类普通叙述用 CENTER_FOCUS。\n参数：quoteSource 写清出处（来源/角色/机构）；imageSrc 可省略。",
	"psychology": "社会认同背书",
	"image_count": "0-1",
	"param_schema": {
		"type": "object",
		"properties": {
			"imageSrc": {
				"type": "string",
				"format": "image_prompt",
				"description": "可选配图描述",
			},
			"quoteSource": { "type": "string", "description": "引言来源" },
		},
		"required": ["quoteSource"],
	},
	"example": {
		"template": "QUOTE_CITATION",
		"param": {
			"quoteSource": "《思考，快与慢》",
		},
	},
} as const;

export interface BWQuoteCitationProps extends TemplateBaseProps, TemplateAnchorsProps {
	imageSrc?: string;
	quoteSource?: string;
}

export const BWQuoteCitation: React.FC<BWQuoteCitationProps> = ({
	imageSrc,
	quoteSource = "",
	content,
	anchors,
	audioSrc,
	children,
	style,
}) => {
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();
	const opacity = spring({
		frame,
		fps,
		config: { damping: 80, stiffness: 100 },
		durationInFrames: 30,
	});
	return (
		<AbsoluteFill style={style}>
			<div
				style={{
					position: "absolute",
					left: "8%",
					right: "8%",
					top: "15%",
					opacity,
				}}
			>
				<div
					style={{						
						fontSize: 200,
						lineHeight: 0.7,
						color: BW_TEXT,
						fontFamily: "Georgia, 'Times New Roman', serif",
						fontWeight: 900,
					}}
				>
					"
				</div>
				<div style={{ display: "flex", justifyContent: "center", marginTop: 16 }}>
					<Img
						src={getSafeImageSrc(imageSrc)}
						style={{ width: 160, height: 160, objectFit: "contain", opacity: 0.5 }}
					/>
				</div>
				{quoteSource && (
					<div
						style={{
							marginTop: 100,
							fontSize: 30,
							color: "#555555",
							fontStyle: "italic",
							borderLeft: "4px solid #111111",
							paddingLeft: 24,
							lineHeight: 1.4,
							fontFamily: '"Microsoft YaHei", "PingFang SC", "Noto Sans SC", sans-serif',
						}}
					>
						— {quoteSource}
					</div>
				)}
			</div>
			<TemplateContentRenderer content={content} anchors={anchors} audioSrc={audioSrc} />
			{children}
		</AbsoluteFill>
	);
};
