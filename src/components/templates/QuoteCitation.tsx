/**
 * QUOTE_CITATION 模板：社会认同背书，引用展示
 */
import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { BW_TEXT, type TemplateAnchorsProps, type TemplateBaseProps } from "./shared";
import { TemplateContentRenderer } from "./TemplateContentRenderer";

export const templateMeta = {
	"name": "QUOTE_CITATION",
	"componentExport": "BWQuoteCitation",
	"description":
		"适用：任何“引用/摘录/证言/背书”体裁（名言、著作、研究结论、媒体引用、用户评价、客户证言、公告摘录等）。\n提示：版心引用正文的打字底稿默认由 content 拼接；若需与画外/字幕 content 不同的展示文案，请传 quoteDisplayText。\n差异：非引用类普通叙述用 CENTER_FOCUS。\n参数：quoteSource 写清出处（来源/角色/机构）；quoteDisplayText 可选，覆盖版心打字内容。",
	"psychology": "社会认同背书",
	"image_count": 0,
	"param_schema": {
		"type": "object",
		"properties": {
			"quoteSource": { "type": "string", "description": "引言来源" },
			"quoteDisplayText": {
				"type": "string",
				"description": "版心引用正文（打字机效果）；不传则使用 content 拼接结果",
			},
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
	quoteSource?: string;
	/** 版心打字机效果的完整文本；不传则从 content 拼接 */
	quoteDisplayText?: string;
}

function normalizeQuoteText(raw: string): string {
	return raw
		.replace(/[\r\n\t]+/g, "")
		.replace(/\s{2,}/g, " ")
		.trim();
}

export const BWQuoteCitation: React.FC<BWQuoteCitationProps> = ({
	quoteSource = "",
	quoteDisplayText,
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

	const fromContent = (content ?? [])
		.map((c) => c.text.trim())
		.filter(Boolean)
		.join("");
	const quoteText = normalizeQuoteText(
		quoteDisplayText !== undefined && quoteDisplayText !== null ? quoteDisplayText : fromContent,
	);
	const hasQuoteText = quoteText.length > 0;

	const typingStart = 8;
	const typingDuration = 38;
	const typingProgress = interpolate(frame, [typingStart, typingStart + typingDuration], [0, 1], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	});
	const visibleChars = Math.max(
		0,
		Math.min(quoteText.length, Math.floor(typingProgress * quoteText.length)),
	);
	const typedQuoteText = quoteText.slice(0, visibleChars);
	return (
		<AbsoluteFill style={style}>
			<div
				style={{
					position: "absolute",
					left: "8%",
					right: "8%",
					top: "30%",
					opacity,
				}}
			>
				<div
					style={{						
						fontSize: 50,
						lineHeight: 0.7,
						color: BW_TEXT,
						fontFamily: "Georgia, 'Times New Roman', serif",
						fontWeight: 900,
					}}
				>
					"
				</div>
				{hasQuoteText && (
					<div
						style={{
							marginTop: 12,
							textAlign: "center",
							color: BW_TEXT,
							fontSize: 50,
							lineHeight: 1.22,
							letterSpacing: 0.2,
							fontWeight: 800,
							fontFamily:
								'"Microsoft YaHei", "PingFang SC", "Noto Sans SC", sans-serif',
							whiteSpace: "pre-line",
							display: "-webkit-box",
							WebkitBoxOrient: "vertical" as const,
							WebkitLineClamp: 6,
							overflow: "hidden",
						}}
					>
						{typedQuoteText}
					</div>
				)}
				
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
