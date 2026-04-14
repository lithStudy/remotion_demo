/**
 * DOS_AND_DONTS 模板：损失厌恶，避坑对比
 */
import React from "react";
import { AbsoluteFill, Img, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import {
	getSafeImageSrc,
	normalizeContent,
	type ContentItem,
	type TemplateAnchorsProps,
	type TemplateBaseProps,
} from "./shared";
import { TemplateDefaultAnchors } from "./TemplateAnchorsLayer";
import { TemplateContentRenderer } from "./TemplateContentRenderer";

export const templateMeta = {
	"name": "DOS_AND_DONTS",
	"componentExport": "BWDosAndDonts",
	"description":
		"适用：明确「别这样做 vs 应该这样做」的避坑/规范/注意事项（可用于教程、产品使用、运营话术、设计规范、职场建议等）；左右对错叙事。\n差异：两种中立方案并列、无对错标签用 SPLIT_COMPARE；若是纯数据的双指标对比用 STAT_COMPARE。\n参数：`left` / `right` 各含 `label`、`src`、可选 `showFrom`。`showFrom` 语义：当本 item 的 `content` 带时间信息（startFrame 或 durationFrames）且 `showFrom` 为 **0～(content 条数−1)** 时，表示 **content 下标**，该侧从对应条的 `startFrame` 起做滑入；否则表示 **相对本 item 起点的帧号**。省略时：左侧对齐第 0 条；右侧若至少两条口播则对齐第 1 条，否则在左侧起点后再延迟 10 帧。",
	"psychology": "损失厌恶",
	"image_count": 2,
	"param_schema": {
		"type": "object",
		"properties": {
			"left": {
				"type": "object",
				"properties": {
					"label": { "type": "string", "description": "该侧标题（左：如 ❌ 别这样；右：如 ✅ 正确做法），极简短语" },
					"src": {
						"type": "string",
						"format": "image_prompt",
						"description": "该侧配图（左：错误/误区示意；右：正确做法示意）",
					},
					"showFrom": {
						"type": "integer",
						"description":
							"有 content 时间轴且值落在 [0, content.length) 时为 content 下标（取该条 startFrame）；否则为相对 item 起点的帧号。省略：左 0；右为第 1 条或左起点+10 帧",
					},
				},
				"required": ["label", "src"],
			},
			"right": {
				"type": "object",
				"properties": {
					"label": { "type": "string", "description": "该侧标题（左：如 ❌ 别这样；右：如 ✅ 正确做法），极简短语" },
					"src": {
						"type": "string",
						"format": "image_prompt",
						"description": "该侧配图（左：错误/误区示意；右：正确做法示意）",
					},
					"showFrom": {
						"type": "integer",
						"description":
							"有 content 时间轴且值落在 [0, content.length) 时为 content 下标（取该条 startFrame）；否则为相对 item 起点的帧号。省略：左 0；右为第 1 条或左起点+10 帧",
					},
				},
				"required": ["label", "src"],
			},
		},
		"required": ["left", "right"],
	},
	"example": {
		"template": "DOS_AND_DONTS",
		"param": {
			"left": { "label": "❌ 别这样", "src": "盲目跟风的人简笔画图标", "showFrom": 0 },
			"right": { "label": "✅ 正确做法", "src": "理性分析图表的人简笔画图标", "showFrom": 1 },
		},
	},
} as const;

export interface BWDosAndDontsSideProps {
	label?: string;
	src?: string;
	/**
	 * 有 content 时间轴且值 ∈ [0, content.length) 时为 content 下标；否则为相对 item 起点的帧号。
	 */
	showFrom?: number;
}

function contentHasTiming(items: ContentItem[]): boolean {
	return items.some(
		(c) => typeof c.startFrame === "number" || typeof c.durationFrames === "number",
	);
}

function resolveCueStartFrame(items: ContentItem[], index: number): number {
	if (items.length === 0) return 0;
	const i = Math.min(Math.max(0, Math.floor(index)), items.length - 1);
	const cue = items[i];
	if (cue && typeof cue.startFrame === "number") return cue.startFrame;
	let sum = 0;
	for (let j = 0; j < i; j++) {
		const d = items[j]?.durationFrames;
		sum += typeof d === "number" && d > 0 ? d : 0;
	}
	return sum;
}

/** showFrom：在「有时间的 content」且值 < len 时为下标，否则为帧号 */
function resolveDosSideStart(
	items: ContentItem[],
	showFrom: number | undefined,
	frameFallback: number,
): number {
	if (showFrom === undefined) return Math.max(0, frameFallback);
	const hasTiming = contentHasTiming(items);
	if (hasTiming && items.length > 0 && showFrom >= 0 && showFrom < items.length) {
		return resolveCueStartFrame(items, showFrom);
	}
	return Math.max(0, showFrom);
}

export interface BWDosAndDontsProps extends TemplateBaseProps, TemplateAnchorsProps {
	left?: BWDosAndDontsSideProps;
	right?: BWDosAndDontsSideProps;
}

export const BWDosAndDonts: React.FC<BWDosAndDontsProps> = ({
	left: leftIn,
	right: rightIn,
	content,
	anchors,
	audioSrc,
	children,
	style,
}) => {
	const frame = useCurrentFrame();
	const { fps, width } = useVideoConfig();
	const items = normalizeContent(content);

	const left = {
		label: "❌ 错误",
		...leftIn,
	};
	const right = {
		label: "✅ 正确",
		...rightIn,
	};

	const leftStart = resolveDosSideStart(items, left.showFrom, 0);
	let rightStart: number;
	if (right.showFrom !== undefined) {
		rightStart = resolveDosSideStart(items, right.showFrom, leftStart + 10);
	} else if (contentHasTiming(items) && items.length > 1) {
		rightStart = resolveCueStartFrame(items, 1);
	} else {
		rightStart = leftStart + 10;
	}

	const leftSpring = spring({
		frame: Math.max(0, frame - leftStart),
		fps,
		config: { damping: 60, stiffness: 180 },
		durationInFrames: 20,
	});
	const rightSpring = spring({
		frame: Math.max(0, frame - rightStart),
		fps,
		config: { damping: 60, stiffness: 180 },
		durationInFrames: 20,
	});
	// 用整幅宽作为起点位移：单侧栏宽约 width/2，仅用 ±width/2 时居中大图/长标题仍可能露边；±width 保证未入场时完全在画外。
	const leftX = interpolate(leftSpring, [0, 1], [-width, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
	const rightX = interpolate(rightSpring, [0, 1], [width, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

	return (
		<AbsoluteFill style={style}>
			<div
				style={{
					display: "flex",
					width: "100%",
					height: "100%",
					overflow: "hidden",
				}}
			>
				<div style={{
					flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
					gap: 24, transform: `translateX(${leftX}px)`, backgroundColor: "rgba(229, 62, 62, 0.05)",
				}}>
					<div style={{ fontSize: 62, fontWeight: 900, color: "#E53E3E", textAlign: "center", padding: "0 28px", fontFamily: '"Microsoft YaHei", "PingFang SC", "Noto Sans SC", sans-serif' }}>
						{left.label}
					</div>
					<Img src={getSafeImageSrc(left.src)} style={{ maxWidth: "55%", maxHeight: "38%", objectFit: "contain", opacity: 0.75 }} />
				</div>
				<div style={{
					flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
					gap: 24, transform: `translateX(${rightX}px)`, backgroundColor: "rgba(39, 103, 73, 0.05)",
				}}>
					<div style={{ fontSize: 62, fontWeight: 900, color: "#276749", textAlign: "center", padding: "0 28px", fontFamily: '"Microsoft YaHei", "PingFang SC", "Noto Sans SC", sans-serif' }}>
						{right.label}
					</div>
					<Img src={getSafeImageSrc(right.src)} style={{ maxWidth: "55%", maxHeight: "38%", objectFit: "contain" }} />
				</div>
			</div>
			<TemplateDefaultAnchors content={content} anchors={anchors} />
			<TemplateContentRenderer content={content} audioSrc={audioSrc} />
			{children}
		</AbsoluteFill>
	);
};
