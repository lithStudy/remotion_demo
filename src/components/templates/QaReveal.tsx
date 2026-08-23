/**
 * QA_REVEAL 模板：课后问答 / 疑点解答；问区顶栏常驻，答区逐条累积
 */
import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { BW_LIST_SIDE_INSET, BW_TEXT, type TemplateBaseProps } from "./shared";
import { TemplateContentRenderer, normalizeContent } from "./TemplateContentRenderer";

const DEFAULT_HIGHLIGHT_COLOR = "#E53E3E";

export const templateMeta = {
	"name": "QA_REVEAL",
	"componentExport": "BWQaReveal",
	"description":
		"适用：针对本课/本主题的一个疑点，讲师正式解答；口播结构为「一句问 + 多句答」。问区顶栏常驻（内置问号图标），答区从 content[1] 起逐条累积显现并保留；首条答句左侧带「答」标记。\n不适用：模拟网友/他人对话（如「有人说…」「网友：…」）→ CHAT_BUBBLE；一问一驳一锤情绪递进且需多图换场 → BEAT_SEQUENCE；纠偏型「不是…而是…」对句 → COGNITIVE_SHIFT；纯概念命名无问句 → CONCEPT_CARD；可执行步骤清单 → STEP_LIST；收束行动清单打勾 → CHECKLIST_REVEAL；单句平铺无 Q&A 结构 → CENTER_FOCUS。\n参数：param 零必填；content[0] 为问句，content[1..] 为答句；可选 highlights 在对应 content 行内联标色（text 须为该行子串，showFrom 为 content 下标，color 省略时默认红色）。",
	"chinese_name": "问答揭示",
	"image_count": "0",
	"content_min_items": 2,
	"content_max_items": 6,
	"param_schema": {
		"type": "object",
		"properties": {
			"highlights": {
				"type": "array",
				"description":
					"可选；在对应 content 行正文内联标色。showFrom 为 content 下标（0-based），text 须为该条 content.text 的子串；color 省略时默认 #E53E3E。",
				"items": {
					"type": "object",
					"required": ["text", "showFrom"],
					"properties": {
						"text": {
							"type": "string",
							"description": "要高亮的子串，须出现在 content[showFrom].text 内",
						},
						"showFrom": {
							"type": "integer",
							"format": "content_index",
							"description": "content 下标（0-based），非帧数",
						},
						"color": {
							"type": "string",
							"description": "高亮颜色，省略时默认红色 #E53E3E",
						},
					},
				},
			},
		},
		"required": [],
	},
	"example": {
		"template": "QA_REVEAL",
		"param": {
			"highlights": [
				{ "text": "不是", "showFrom": 1 },
				{ "text": "源码可获取", "showFrom": 2 },
				{ "text": "仍可能收费", "showFrom": 3 },
			],
		},
		"content": [
			{ "text": "开源就等于免费吗？" },
			{ "text": "不是。" },
			{ "text": "开源指的是源码可获取、可修改。" },
			{ "text": "商业支持和服务仍可能收费。" },
		],
	},
} as const;

export type QaRevealHighlightItem = {
	text: string;
	showFrom: number;
	color?: string;
};

export interface BWQaRevealProps extends TemplateBaseProps {
	highlights?: QaRevealHighlightItem[];
}

const INK = "#111111";
const PAPER = "#ffffff";

function QaAnswerBadge({ sizePx }: { sizePx: number }): React.ReactElement {
	return (
		<span
			style={{
				display: "inline-flex",
				alignItems: "center",
				justifyContent: "center",
				width: sizePx,
				height: sizePx,
				borderRadius: 999,
				backgroundColor: INK,
				color: PAPER,
				fontSize: Math.round(sizePx * 0.42),
				fontWeight: 800,
				flexShrink: 0,
				letterSpacing: "0.06em",
			}}
		>
			答
		</span>
	);
}

/** 内置问号图标 */
function QuestionIconSvg({ sizePx }: { sizePx: number }): React.ReactElement {
	return (
		<svg width={sizePx} height={sizePx} viewBox="0 0 100 100" style={{ display: "block" }} aria-hidden>
			<circle cx="50" cy="50" r="42" fill={PAPER} stroke={INK} strokeWidth="4" />
			<path
				d="M 38 42 Q 38 30 50 30 Q 62 30 62 42 Q 62 50 50 56 L 50 64"
				fill="none"
				stroke={INK}
				strokeWidth="5"
				strokeLinecap="round"
			/>
			<circle cx="50" cy="76" r="4" fill={INK} />
		</svg>
	);
}

function applyHighlightsToLine(
	lineText: string,
	highlights: QaRevealHighlightItem[],
	contentIndex: number,
	lineKeyPrefix: string,
): React.ReactNode {
	const forLine = highlights.filter(
		(item) => item.showFrom === contentIndex && item.text?.trim(),
	);
	if (forLine.length === 0) {
		return lineText;
	}

	let nodes: React.ReactNode[] = [lineText];
	forLine.forEach((item, highlightIdx) => {
		const phrase = item.text.trim();
		nodes = nodes.flatMap((node, nodeIdx) => {
			if (typeof node !== "string") {
				return [node];
			}
			const parts = node.split(phrase);
			if (parts.length === 1) {
				return [node];
			}
			const mapped: React.ReactNode[] = [];
			parts.forEach((part, i) => {
				mapped.push(part);
				if (i < parts.length - 1) {
					mapped.push(
						<span
							key={`${lineKeyPrefix}-hl-${highlightIdx}-${nodeIdx}-${i}`}
							style={{
								color: item.color || DEFAULT_HIGHLIGHT_COLOR,
								fontWeight: 700,
							}}
						>
							{phrase}
						</span>,
					);
				}
			});
			return mapped;
		});
	});

	return <>{nodes}</>;
}

const AnswerRow: React.FC<{
	text: string;
	contentIndex: number;
	highlights: QaRevealHighlightItem[];
	startFrame: number;
	fontSize: number;
	isFirst: boolean;
}> = ({ text, contentIndex, highlights, startFrame, fontSize, isFirst }) => {
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();
	const rel = frame - startFrame;
	if (rel < 0) return null;

	const rowIn = spring({
		frame: rel,
		fps,
		config: { damping: 75, stiffness: 200 },
		durationInFrames: 18,
	});
	const opacity = interpolate(rowIn, [0, 1], [0, 1], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	});
	const translateX = interpolate(rowIn, [0, 1], [-24, 0], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	});

	return (
		<div
			style={{
				display: "flex",
				alignItems: "flex-start",
				gap: 16,
				opacity,
				transform: `translateX(${translateX}px)`,
			}}
		>
			{isFirst ? (
				<span style={{ marginTop: fontSize * 0.28, flexShrink: 0 }}>
					<QaAnswerBadge sizePx={Math.round(fontSize * 0.92)} />
				</span>
			) : (
				<span
					style={{
						width: 12,
						height: 12,
						borderRadius: "50%",
						backgroundColor: INK,
						marginTop: fontSize * 0.42,
						flexShrink: 0,
					}}
				/>
			)}
			<div
				style={{
					fontSize,
					fontWeight: 500,
					color: BW_TEXT,
					lineHeight: 1.4,
					flex: 1,
				}}
			>
				{applyHighlightsToLine(text, highlights, contentIndex, `a${contentIndex}`)}
			</div>
		</div>
	);
};

export const BWQaReveal: React.FC<BWQaRevealProps> = ({
	content,
	highlights = [],
	audioSrc,
	children,
	style,
}) => {
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();
	const items = normalizeContent(content);
	const questionItem = items[0];
	const answerItems = items.slice(1, 6);
	const questionText = questionItem?.text ?? "";
	const questionStart = questionItem?.startFrame ?? 0;

	const questionIn = spring({
		frame: frame - questionStart,
		fps,
		config: { damping: 80, stiffness: 200 },
		durationInFrames: 20,
	});
	const questionOpacity = interpolate(questionIn, [0, 1], [0, 1], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	});
	const questionScale = interpolate(questionIn, [0, 1], [0.92, 1], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	});

	const answerCount = answerItems.length;
	const questionFontSize =
		questionText.length > 18 ? 44 : questionText.length > 12 ? 50 : 56;
	const answerFontSize =
		answerCount >= 5 ? 40 : answerCount >= 4 ? 44 : answerCount >= 3 ? 48 : 52;
	const iconSize = questionFontSize >= 54 ? 68 : 60;
	const showQuestion = frame >= questionStart;
	const firstAnswerFrame = answerItems[0]?.startFrame ?? Number.POSITIVE_INFINITY;
	const showAnswers =
		showQuestion && answerItems.length > 0 && frame >= firstAnswerFrame;
	const answerRowGap = answerCount >= 4 ? 12 : 14;
	const stackGap = 36;
	const safeTopRatio = 0.1;
	const safeBottomRatio = 0.14;

	return (
		<AbsoluteFill style={style}>
			<div
				style={{
					position: "absolute",
					left: BW_LIST_SIDE_INSET,
					right: BW_LIST_SIDE_INSET,
					top: `${safeTopRatio * 100}%`,
					bottom: `${safeBottomRatio * 100}%`,
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
				}}
			>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						gap: stackGap,
					}}
				>
				{showQuestion ? (
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: 18,
							padding: "18px 28px",
							flexShrink: 0,
							backgroundColor: PAPER,
							border: `6px solid ${INK}`,
							borderRadius: 24,
							boxShadow: `8px 8px 0 ${INK}`,
							opacity: questionOpacity,
							transform: `scale(${questionScale})`,
							transformOrigin: "top center",
						}}
					>
						<QuestionIconSvg sizePx={iconSize} />
						<div style={{ flex: 1, minWidth: 0 }}>
							<div
								style={{
									fontSize: questionFontSize,
									fontWeight: 800,
									color: BW_TEXT,
									lineHeight: 1.35,
									fontFamily:
										'"Microsoft YaHei", "PingFang SC", "Noto Sans SC", sans-serif',
								}}
							>
								{applyHighlightsToLine(questionText, highlights, 0, "q")}
							</div>
						</div>
					</div>
				) : null}

				{showAnswers ? (
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							gap: answerRowGap,
						}}
					>
						{answerItems.map((item, i) => (
							<AnswerRow
								key={i}
								text={item.text}
								contentIndex={i + 1}
								highlights={highlights}
								startFrame={item.startFrame}
								fontSize={answerFontSize}
								isFirst={i === 0}
							/>
						))}
					</div>
				) : null}
				</div>
			</div>
			<TemplateContentRenderer content={content} audioSrc={audioSrc} />
			{children}
		</AbsoluteFill>
	);
};
