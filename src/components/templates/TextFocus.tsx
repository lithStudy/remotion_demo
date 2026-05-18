/**
 * TEXT_FOCUS 模板：信噪比极致化，纯文字聚焦
 * 适用场景：全篇最核心金句，无需配图，白底大字 + 弹入动画。
 * 可选 coreSentence：非空 string[] 或 { text, showFrom, endFrom? }[]，自上而下多行展示；showFrom / endFrom 均为 content 下标（0-based），非帧数：行在 content[showFrom].startFrame 显现；若提供 endFrom，则在 content[endFrom] 播完后的首帧（startFrame+durationFrames）起淡出该行；纯 string 等价于 showFrom=0、无 endFrom。coreSentenceAnchors 在各段按顺序拼接后的全文内匹配子串并逐行高亮，底部保留字幕，不渲染锚点词弹出层。
 */
import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import type { TemplateBaseProps } from "./shared";
import { TemplateContentRenderer, normalizeContent } from "./TemplateContentRenderer";

/** TEXT_FOCUS 专用：在 coreSentence 内高亮的子串 */
export type CoreSentenceAnchorItem = {
	coreSentenceAnchor: string;
	color?: string | null;
};

export const templateMeta = {
	"name": "TEXT_FOCUS",
	"componentExport": "BWTextFocus",
	"description":
		"适用：全片最强金句、结论暴击；0 图纯大字。\n差异：需要配图锚定用 CENTER_FOCUS；模拟读者吐槽口吻用 CHAT_BUBBLE。\n慎用：content 建议不超过 3 条以保持冲击；若口播/字幕必须保留长 content，可填 coreSentence（string 或 { text, showFrom, endFrom? } 每行一条，showFrom/endFrom 均为 content 下标）作为大屏主文案。",
	"content_max_items": 3,
	"psychology": "信噪比极致化",
	"image_count": 0,
	"param_schema": {
		"type": "object",
		"properties": {
			"coreSentence": {
				"type": "array",
				"minItems": 1,
				"description":
					"大屏核心文案，每元素一行：可为 string，或 { text, showFrom, endFrom? }；showFrom/endFrom 为 content 下标（0-based），非帧数：在该条 startFrame 显现；可选 endFrom 表示在该条播完（startFrame+durationFrames）后起淡出。纯 string 等价于 showFrom=0、无 endFrom。锚点校验时各段 text 按顺序直接拼接（无分隔符）。",
				"items": {
					"oneOf": [
						{"type": "string"},
						{
							"type": "object",
							"required": ["text", "showFrom"],
							"properties": {
								"text": {"type": "string", "description": "该行大屏文案"},
								"showFrom": {
									"type": "integer",
									"format": "content_index",
									"description": "content 下标（0-based），非帧数",
								},
								"endFrom": {
									"type": "integer",
									"format": "content_index",
									"description":
										"可选；content 下标（0-based），非帧数；该行在对应条字幕结束帧（startFrame+durationFrames）起淡出",
								},
							},
						},
					],
				},
			},
			"coreSentenceAnchors": {
				"type": "array",
				"description":
					"可选；在 coreSentence 各段拼接后的全文内按顺序高亮子串。每项 coreSentenceAnchor 须为该拼接串的子串，否则会被校验丢弃",
				"items": {
					"type": "object",
					"required": ["coreSentenceAnchor"],
					"properties": {
						"coreSentenceAnchor": {
							"type": "string",
							"description": "要高亮的子串，须出现在各 coreSentence 段拼接后的全文内",
						},
						"color": { "type": "string", "description": "高亮颜色，省略时默认强调色" },
					},
				},
			},
		},
		"required": ["coreSentence"],
	},
		"example": {
		"template": "TEXT_FOCUS",
		"param": {
			"coreSentence": [
				{ "text": "承认自己“可能错了”并不是一种软弱", "showFrom": 0, "endFrom": 0 },
				{ "text": "而是成长的开始", "showFrom": 1, "endFrom": 1 },
			],
			"coreSentenceAnchors": [{ "coreSentenceAnchor": "可能错了", "color": "red" }],
		},
	},
} as const;

/** 单条核心大屏行：showFrom/endFrom 对应 content 条目下标 */
export type CoreSentenceLineItem = {
	text: string;
	showFrom: number;
	/** 可选；在该条 content 播完后的首帧起淡出本行 */
	endFrom?: number;
};

export type CoreSentenceInput = string | { text: string; showFrom?: number; endFrom?: number };

export type BWTextFocusProps = TemplateBaseProps & {
	/**
	 * 精炼核心文案（通常由 AI 生成）。若 content 过长、不适合整段作为大屏主标题，可填此数组居中多行展示；
	 * 每项可为 string（等价 showFrom=0、无 endFrom）或 { text, showFrom, endFrom? }；未设置时主标题仍为 content 各条 text 的拼接。
	 */
	coreSentence?: CoreSentenceInput[];
	/** 在 coreSentence 各段拼接全文内按顺序高亮的子串（匹配会体现在对应行内） */
	coreSentenceAnchors?: CoreSentenceAnchorItem[];
};

function parseShowFromIndex(v: unknown): number {
	if (typeof v === "number" && Number.isInteger(v) && v >= 0) {
		return v;
	}
	return 0;
}

function parseOptionalContentIndex(v: unknown): number | undefined {
	if (typeof v === "number" && Number.isInteger(v) && v >= 0) {
		return v;
	}
	return undefined;
}

/** 将 coreSentence 规范为非空行条目（含 showFrom）；非法项跳过 */
export function normalizeCoreSentenceItems(
	coreSentence?: CoreSentenceInput[] | null,
): CoreSentenceLineItem[] {
	if (coreSentence == null || !Array.isArray(coreSentence)) {
		return [];
	}
	const out: CoreSentenceLineItem[] = [];
	for (const raw of coreSentence) {
		if (typeof raw === "string") {
			const text = raw.trim();
			if (text) {
				out.push({ text, showFrom: 0 });
			}
		} else if (raw && typeof raw === "object") {
			const text = typeof raw.text === "string" ? raw.text.trim() : "";
			if (text) {
				const endFrom = parseOptionalContentIndex(raw.endFrom);
				out.push({
					text,
					showFrom: parseShowFromIndex(raw.showFrom),
					...(endFrom !== undefined ? { endFrom } : {}),
				});
			}
		}
	}
	return out;
}

/** 将 coreSentence 规范为非空行文本数组；非法输入返回 [] */
export function normalizeCoreSentenceLines(
	coreSentence?: CoreSentenceInput[] | null,
): string[] {
	return normalizeCoreSentenceItems(coreSentence).map((x) => x.text);
}

const resolveCoreLineStartFrame = (
	showFrom: number,
	lineIndex: number,
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
		if (cue && typeof cue.startFrame === "number") {
			return cue.startFrame;
		}
	}
	return lineIndex * staggerFallback;
};

/** 在该条 content 字幕结束后的首帧起可淡出；无效或未指定返回 null */
const resolveCoreLineEndFrame = (
	endFrom: number | undefined,
	lineStartFrame: number,
	contentItems: ReturnType<typeof normalizeContent>,
): number | null => {
	if (
		endFrom === undefined ||
		!Number.isInteger(endFrom) ||
		endFrom < 0 ||
		endFrom >= contentItems.length
	) {
		return null;
	}
	const cue = contentItems[endFrom];
	if (
		!cue ||
		typeof cue.startFrame !== "number" ||
		typeof cue.durationFrames !== "number"
	) {
		return null;
	}
	const end = cue.startFrame + cue.durationFrames;
	if (end <= lineStartFrame) {
		return null;
	}
	return end;
};

const TEXT_FOCUS_LINE_OUT_FRAMES = 18;

const TextFocusLine: React.FC<{
	startFrame: number;
	endFrame: number | null;
	children: React.ReactNode;
	breathe: number;
}> = ({ startFrame, endFrame, children, breathe }) => {
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();
	const rel = frame - startFrame;
	const lineIn = spring({
		frame: rel,
		fps,
		config: { damping: 12, stiffness: 200 },
		durationInFrames: 20,
	});
	const rowOpacity = interpolate(lineIn, [0, 1], [0, 1], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	});
	const lineScale = interpolate(lineIn, [0, 1], [0.6, 1], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	});
	const exitOpacity =
		endFrame == null
			? 1
			: interpolate(
					frame,
					[endFrame, endFrame + TEXT_FOCUS_LINE_OUT_FRAMES],
					[1, 0],
					{
						extrapolateLeft: "clamp",
						extrapolateRight: "clamp",
					},
				);
	const combinedOpacity = rowOpacity * exitOpacity;
	return (
		<div
			style={{
				opacity: combinedOpacity,
				transform: `scale(${lineScale * breathe})`,
				transformOrigin: "center center",
			}}
		>
			{children}
		</div>
	);
};

function applyCoreSentenceAnchorsToLine(
	line: string,
	coreSentenceAnchors: CoreSentenceAnchorItem[] | undefined,
	lineKeyPrefix: string,
): React.ReactNode[] {
	return (coreSentenceAnchors ?? []).reduce<React.ReactNode[]>(
		(nodes, item, anchorIdx) => {
			const phrase = item.coreSentenceAnchor?.trim();
			if (!phrase) {
				return nodes;
			}
			return nodes.flatMap((node, nodeIdx) => {
				if (typeof node !== "string") {
					return [node];
				}
				const parts = node.split(phrase);
				if (parts.length === 1) {
					return [node];
				}
				const mappedParts: React.ReactNode[] = [];
				parts.forEach((part, i) => {
					mappedParts.push(part);
					if (i < parts.length - 1) {
						mappedParts.push(
							<span
								key={`${lineKeyPrefix}-csa-${anchorIdx}-${nodeIdx}-${i}`}
								style={{ color: item.color || "#E53E3E" }}
							>
								{phrase}
							</span>,
						);
					}
				});
				return mappedParts;
			});
		},
		[line],
	);
}

export const BWTextFocus: React.FC<BWTextFocusProps> = ({
	content,
	coreSentence,
	coreSentenceAnchors,
	audioSrc,
	style,
	children,
}) => {
	const frame = useCurrentFrame();

	const fadeIn = interpolate(frame, [0, 10], [0, 1], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	});

	const breathe =
		frame > 20 ? 1 + Math.sin((frame - 20) * 0.06) * 0.015 : 1;

	const contentItems = normalizeContent(content);
	const staggerFallback = 16;
	const mainItems = normalizeCoreSentenceItems(coreSentence);
	const mainLines = mainItems.map((x) => x.text);
	const lineStartFrames = mainItems.map((item, i) =>
		resolveCoreLineStartFrame(item.showFrom, i, contentItems, staggerFallback),
	);
	const lineEndFrames = mainItems.map((item, i) =>
		resolveCoreLineEndFrame(
			item.endFrom,
			lineStartFrames[i] ?? 0,
			contentItems,
		),
	);
	const contentJoin = (content ?? []).map((item) => item.text).join("").trim();
	const displayLines =
		mainLines.length > 0 ? mainLines : contentJoin ? [contentJoin] : [];
	const headlineForSizing =
		displayLines.length > 0
			? displayLines.reduce((longest, line) =>
					[...line].length > [...longest].length ? line : longest,
				displayLines[0],
				)
			: "";
	const charCount = Math.max(1, [...headlineForSizing].length);
	// 根据标题字符数动态调整字号——标题字符数越多，字号越小
	const titleFontSize = interpolate(
		charCount,            // 字符数
		[6, 12, 18, 26, 36],  // 不同字符长度的区间
		[128, 110, 90, 76, 62], // 对应区间字号（单位：px），字符越多字号越小
		{
			extrapolateLeft: "clamp",   // 小于最小区间时，字号不会进一步变大
			extrapolateRight: "clamp",  // 超过最大区间时，字号不会进一步变小
		},
	);

	const highlightedBlock =
		displayLines.length > 0 ? (
			displayLines.map((line, li) => {
				const lineStart =
					mainItems.length > 0 ? (lineStartFrames[li] ?? 0) : 0;
				const lineEnd =
					mainItems.length > 0 ? (lineEndFrames[li] ?? null) : null;
				return (
					<TextFocusLine
						key={`cs-line-${li}`}
						startFrame={lineStart}
						endFrame={lineEnd}
						breathe={breathe}
					>
						<div>
							{applyCoreSentenceAnchorsToLine(
								line,
								mainItems.length > 0 ? coreSentenceAnchors : undefined,
								`L${li}`,
							)}
						</div>
					</TextFocusLine>
				);
			})
		) : null;

	return (
		<AbsoluteFill
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				opacity: fadeIn,
				...style,
			}}
		>
			{/* 核心文字 —— 锚点词高亮显示 */}
			<div
				style={{
					padding: "0 96px",
					textAlign: "center",
					fontSize: titleFontSize,
					fontWeight: 900,
					color: "#111111",
					lineHeight: 1.3,
					letterSpacing: "0.04em",
					fontFamily: '"Microsoft YaHei", "PingFang SC", "Noto Sans SC", sans-serif',
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					gap: displayLines.length > 1 ? "0.35em" : 0,
				}}
			>
				{highlightedBlock}
			</div>

			<TemplateContentRenderer content={content} audioSrc={audioSrc} />

			{children}
		</AbsoluteFill>
	);
};
