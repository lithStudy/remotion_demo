/**
 * QUOTE_CITATION 模板：社会认同背书，引用展示
 */
import React from "react";
import { AbsoluteFill, Img, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { BW_TEXT, getSafeImageSrc, type TemplateBaseProps } from "./shared";
import { TemplateContentRenderer } from "./TemplateContentRenderer";

export const templateMeta = {
	"name": "QUOTE_CITATION",
	"componentExport": "BWQuoteCitation",
	"description":
		"适用：名言、著作、研究等引用体裁；可选一张配角图。\n差异：非引用类普通叙述用 CENTER_FOCUS。\n参数：quoteSource 写清出处；imageSrc 可省略。",
	"psychology": "社会认同背书",
	"image_count": "0-1",
	"param_schema": {
		"imageSrc": { "type": "image_prompt", "required": false, "desc": "可选图片描述" },
		"quoteSource": { "type": "string", "required": true, "desc": "引言来源" },
	},
	"required_extra_params": ["quoteSource"],
	"example": {
		"template": "QUOTE_CITATION",
		"param": {
			"quoteSource": "《思考，快与慢》",
			"content": ["人类倾向于从随机事件中寻找规律"],
		},
	},
	"default_anchor_color": "#276749",
	"default_anchor_anim": "highlight",
	"default_audio_effect": "ping",
} as const;

export interface BWQuoteCitationProps extends TemplateBaseProps {
	imageSrc?: string;
	quoteSource?: string;
}

export const BWQuoteCitation: React.FC<BWQuoteCitationProps> = ({
	imageSrc,
	quoteSource = "",
	content,
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
			<TemplateContentRenderer content={content} audioSrc={audioSrc} />
			{children}
		</AbsoluteFill>
	);
};
