/**
 * TEXT_FOCUS 模板：信噪比极致化，纯文字聚焦
 * 适用场景：全篇最核心金句，无需配图，白底大字 + 弹入动画。
 * 可选 coreSentence：非空 string[]，自上而下多行展示；coreSentenceAnchors 在各段按顺序拼接后的全文内匹配子串并逐行高亮，底部保留字幕，不渲染锚点词弹出层。
 */
import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import type { TemplateBaseProps } from "./shared";
import { TemplateContentRenderer } from "./TemplateContentRenderer";

/** TEXT_FOCUS 专用：在 coreSentence 内高亮的子串 */
export type CoreSentenceAnchorItem = {
	coreSentenceAnchor: string;
	color?: string | null;
};

export const templateMeta = {
	"name": "TEXT_FOCUS",
	"componentExport": "BWTextFocus",
	"description":
		"适用：全片最强金句、结论暴击；0 图纯大字。\n差异：需要配图锚定用 CENTER_FOCUS；模拟读者吐槽口吻用 CHAT_BUBBLE。\n慎用：content 建议不超过 3 条以保持冲击；若口播/字幕必须保留长 content，可填 coreSentence（string[]，一行或多行）作为大屏主文案。",
	"content_max_items": 3,
	"psychology": "信噪比极致化",
	"image_count": 0,
	"param_schema": {
		"type": "object",
		"properties": {
			"coreSentence": {
				"type": "array",
				"minItems": 1,
				"items": {"type": "string"},
				"description": "大屏核心文案：非空字符串数组，每元素一行；锚点校验时按顺序直接拼接（无分隔符）。",
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
			"coreSentence": ["承认自己“可能错了”并不是一种软弱"],
			"coreSentenceAnchors": [{ "coreSentenceAnchor": "可能错了", "color": "red" }],
		},
	},
} as const;

export type BWTextFocusProps = TemplateBaseProps & {
	/**
	 * 精炼核心文案（通常由 AI 生成）。若 content 过长、不适合整段作为大屏主标题，可填此数组居中多行展示；
	 * 未设置时主标题仍为 content 各条 text 的拼接。
	 */
	coreSentence?: string[];
	/** 在 coreSentence 各段拼接全文内按顺序高亮的子串（匹配会体现在对应行内） */
	coreSentenceAnchors?: CoreSentenceAnchorItem[];
};

/** 将 coreSentence 规范为非空行数组；非法输入返回 [] */
export function normalizeCoreSentenceLines(coreSentence?: string[] | null): string[] {
	if (coreSentence == null || !Array.isArray(coreSentence)) {
		return [];
	}
	return coreSentence
		.map((s) => (typeof s === "string" ? s.trim() : String(s).trim()))
		.filter(Boolean);
}

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
	const { fps } = useVideoConfig();

	const fadeIn = interpolate(frame, [0, 10], [0, 1], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	});

	const scaleSpring = spring({
		frame,
		fps,
		config: { damping: 12, stiffness: 200 },
		durationInFrames: 20,
	});
	const scale = interpolate(scaleSpring, [0, 1], [0.6, 1], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	});

	const breathe = frame > 20
		? 1 + Math.sin((frame - 20) * 0.06) * 0.015
		: 1;

	const mainLines = normalizeCoreSentenceLines(coreSentence);
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
			displayLines.map((line, li) => (
				<div key={`cs-line-${li}`}>
					{applyCoreSentenceAnchorsToLine(
						line,
						mainLines.length > 0 ? coreSentenceAnchors : undefined,
						`L${li}`,
					)}
				</div>
			))
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
					transform: `scale(${scale * breathe})`,
					transformOrigin: "center center",
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
