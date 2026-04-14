/**
 * QUOTE_CITATION 模板：社会认同背书，引用展示
 */
import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { BW_TEXT, normalizeContent, type TemplateBaseProps } from "./shared";
import { TemplateContentRenderer } from "./TemplateContentRenderer";

export const templateMeta = {
	"name": "QUOTE_CITATION",
	"componentExport": "BWQuoteCitation",
	"description":
		"适用：任何“引用/摘录/证言/背书”体裁（名言、著作、研究结论、媒体引用、用户评价、客户证言、公告摘录等）。\n提示：版心引用正文的打字底稿默认由 content 拼接；若需与画外/字幕 content 不同的展示文案，请传 quoteDisplayText。\nshowFrom（0-based）仅让「打字正文」从该条 content 的 startFrame 起再淡入、打字；开引号与出处仍从本 item 开头入场。\n不传 quoteDisplayText 时正文从该条起拼接 content。\n差异：非引用类普通叙述用 CENTER_FOCUS。\n参数：quoteSource 写清出处（来源/角色/机构）；quoteDisplayText 可选，覆盖版心打字内容。",
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
			"showFrom": {
				"type": "integer",
				"description":
					"content 下标（0-based）。仅打字正文从该条 startFrame 起再入场；开引号与 quoteSource 仍从 item 起点出现。未传 quoteDisplayText 时正文从该条起拼接",
			},
		},
		"required": ["quoteSource"],
	},
	"example": {
		"template": "QUOTE_CITATION",
		"param": {
			"quoteDisplayText": "我思故我在",
			"quoteSource": "《思考，快与慢》",
		},
	},
} as const;

export interface BWQuoteCitationProps extends TemplateBaseProps {
	quoteSource?: string;
	/** 版心打字机效果的完整文本；不传则从 content 拼接 */
	quoteDisplayText?: string;
	/**
	 * content 下标（0-based）。仅打字正文从该条 startFrame 起再淡入、打字；开引号与出处仍从 item 起点入场。默认 0。
	 * 未传 quoteDisplayText 时，正文从该条起向后拼接 content。
	 */
	showFrom?: number;
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
	showFrom = 0,
	content,
	audioSrc,
	children,
	style,
}) => {
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();

	const useExplicitQuote =
		quoteDisplayText !== undefined && quoteDisplayText !== null;
	const startIdx = Math.max(
		0,
		Math.floor(Number.isFinite(showFrom) ? showFrom : 0),
	);
	const items = normalizeContent(content);
	const alignIdx = Math.min(startIdx, Math.max(0, items.length - 1));
	const alignFrame =
		items.length > 0 ? Math.max(0, Math.floor(items[alignIdx]?.startFrame ?? 0)) : 0;
	const localFrame = Math.max(0, frame - alignFrame);
	const beforeAlign = frame < alignFrame;

	const chromeOpacity = spring({
		frame,
		fps,
		config: { damping: 80, stiffness: 100 },
		durationInFrames: 30,
	});

	const bodyOpacity = beforeAlign
		? 0
		: spring({
				frame: localFrame,
				fps,
				config: { damping: 80, stiffness: 100 },
				durationInFrames: 30,
			});

	const fromContent = (useExplicitQuote ? [] : (content ?? []).slice(startIdx))
		.map((c) => c.text.trim())
		.filter(Boolean)
		.join("");
	const quoteText = normalizeQuoteText(useExplicitQuote ? quoteDisplayText : fromContent);
	const hasQuoteText = quoteText.length > 0;

	const typingStart = 8;
	const typingDuration = 38;
	const typingProgress = beforeAlign
		? 0
		: interpolate(localFrame, [typingStart, typingStart + typingDuration], [0, 1], {
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
					left: "18%",
					right: "18%",
					top: "30%",
				}}
			>
				<div
					style={{
						fontSize: 76,
						lineHeight: 0.7,
						color: BW_TEXT,
						fontFamily: "Georgia, 'Times New Roman', serif",
						fontWeight: 900,
						opacity: chromeOpacity,
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
							fontSize: 76,
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
							opacity: bodyOpacity,
						}}
					>
						{typedQuoteText}
					</div>
				)}

				{quoteSource && (
					<div
						style={{
							marginTop: 100,
							fontSize: 46,
							color: "#555555",
							fontStyle: "italic",
							borderLeft: "4px solid #111111",
							paddingLeft: 24,
							lineHeight: 1.4,
							fontFamily: '"Microsoft YaHei", "PingFang SC", "Noto Sans SC", sans-serif',
							opacity: chromeOpacity,
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
