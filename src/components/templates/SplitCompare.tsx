/**
 * SPLIT_COMPARE 模板：认知失调，A vs B 对比
 * 适用场景：左右对比（如两种选择、两种结果），需 2 张图，可配左右标签。
 */
import React from "react";
import { AbsoluteFill, Img, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import {
	BW_TEXT,
	getSafeImageSrc,
	normalizeContent,
	type TemplateAnchorsProps,
	type TemplateBaseProps,
} from "./shared";
import { TemplateContentRenderer } from "./TemplateContentRenderer";

const resolveSideStartFrame = (
	showFrom: number | undefined,
	contentItems: ReturnType<typeof normalizeContent>,
): number => {
	if (
		typeof showFrom === "number" &&
		Number.isInteger(showFrom) &&
		showFrom >= 0 &&
		showFrom < contentItems.length
	) {
		const cue = contentItems[showFrom];
		if (cue && typeof cue.startFrame === "number") return cue.startFrame;
	}
	return 0;
};

export const templateMeta = {
	"name": "SPLIT_COMPARE",
	"componentExport": "BWSplitCompare",
	"description":
		"适用：两种方案、两条路径、两方行为对照；口播里常见「你/我…他/对方…」对仗或分号（；）两侧对立叙述。\n差异：明确错/对避坑用 DOS_AND_DONTS；纯数据双指标对比用 STAT_COMPARE；多要素平铺列举用 PANEL_GRID。\n参数：leftLabel/rightLabel 为 2～6 字短语，与左右图语义一致；可选 leftShowFrom/rightShowFrom 为 content 下标（0-based），入场帧取对应条的 startFrame；任一侧省略或索引无效则该侧从 0 帧起。",
	"psychology": "认知失调",
	"image_count": 2,
	"param_schema": {
		"type": "object",
		"properties": {
			"leftSrc": {
				"type": "string",
				"format": "image_prompt",
				"description": "左侧图片描述",
			},
			"rightSrc": {
				"type": "string",
				"format": "image_prompt",
				"description": "右侧图片描述",
			},
			"leftLabel": { "type": "string", "description": "左侧标签（2～6 字为宜）" },
			"rightLabel": { "type": "string", "description": "右侧标签（2～6 字为宜）" },
			"leftShowFrom": {
				"type": "integer",
				"format": "content_index",
				"description": "左侧图与标签出现的时刻：取 content 数组下标（0-based），入场帧为该条的 startFrame；省略或越界则从 0 帧起",
			},
			"rightShowFrom": {
				"type": "integer",
				"format": "content_index",
				"description": "右侧图与标签出现的时刻：取 content 数组下标（0-based），入场帧为该条的 startFrame；省略或越界则从 0 帧起",
			},
		},
		"required": ["leftSrc", "rightSrc", "leftLabel", "rightLabel"],
	},
	"example": {
		"template": "SPLIT_COMPARE",
		"param": {
			"leftSrc": "传统低效工作图标",
			"rightSrc": "高效数字工具图标",
			"leftLabel": "旧方法",
			"rightLabel": "新方法",
		},
	},
} as const;

export interface BWSplitCompareProps extends TemplateBaseProps, TemplateAnchorsProps {
	leftLabel?: string;
	rightLabel?: string;
	leftSrc?: string;
	rightSrc?: string;
	/** content 下标（0-based），左侧与标签从该条 startFrame 起入场 */
	leftShowFrom?: number;
	/** content 下标（0-based），右侧与标签从该条 startFrame 起入场 */
	rightShowFrom?: number;
}

export const BWSplitCompare: React.FC<BWSplitCompareProps> = ({
	leftLabel = "",
	rightLabel = "",
	leftSrc,
	rightSrc,
	leftShowFrom,
	rightShowFrom,
	content,
	audioSrc,
	children,
	style,
}) => {
	const frame = useCurrentFrame();
	const { width } = useVideoConfig();
	// 用整幅宽度做位移：半宽不足以让较宽标签/配图完全离开画幅，且 flex 默认 overflow 可见会漏边
	const off = width;
	const contentItems = normalizeContent(content);
	const leftStart = resolveSideStartFrame(leftShowFrom, contentItems);
	const rightStart = resolveSideStartFrame(rightShowFrom, contentItems);
	const slideLeft = interpolate(frame, [leftStart, leftStart + 12], [-off, 0], {
		extrapolateRight: "clamp",
		extrapolateLeft: "clamp",
	});
	const slideRight = interpolate(frame, [rightStart, rightStart + 12], [off, 0], {
		extrapolateRight: "clamp",
		extrapolateLeft: "clamp",
	});
	// 中间竖线：两侧各自滑入结束后再展开
	const lineFrom = Math.max(leftStart, rightStart) + 12;
	const lineProgress = interpolate(frame, [lineFrom, lineFrom + 8], [0, 1], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	});

	const gutter = Math.round(width * 0.1);

	return (
		<AbsoluteFill style={style}>
			<div
				style={{
					display: "flex",
					width: "100%",
					height: "100%",
					boxSizing: "border-box",
					paddingLeft: gutter,
					paddingRight: gutter,
					alignItems: "stretch",
					overflow: "hidden",
				}}
			>
				<div
					style={{
						flex: 1,
						minWidth: 0,
						overflow: "hidden",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						paddingRight: Math.round(width * 0.02),
						transform: `translateX(${slideLeft}px)`,
					}}
				>
					<Img
						src={getSafeImageSrc(leftSrc)}
						style={{
							maxWidth: "72%",
							maxHeight: "50%",
							objectFit: "contain",
						}}
					/>
					{leftLabel && (
						<span
							style={{
								marginTop: 16,
								fontSize: 56,
								fontWeight: 700,
								color: BW_TEXT,
							}}
						>
							{leftLabel}
						</span>
					)}
				</div>
				<div
					style={{
						flex: 1,
						minWidth: 0,
						overflow: "hidden",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						paddingLeft: Math.round(width * 0.02),
						transform: `translateX(${slideRight}px)`,
					}}
				>
					<Img
						src={getSafeImageSrc(rightSrc)}
						style={{
							maxWidth: "72%",
							maxHeight: "50%",
							objectFit: "contain",
						}}
					/>
					{rightLabel && (
						<span
							style={{
								marginTop: 16,
								fontSize: 56,
								fontWeight: 700,
								color: BW_TEXT,
							}}
						>
							{rightLabel}
						</span>
					)}
				</div>
			</div>
			{/* 中间竖线：独立于左右内容，从中心向上下展开 */}
			<div
				style={{
					position: "absolute",
					left: "50%",
					top: "50%",
					width: 3,
					height: "40%",
					background: "#111",
					transformOrigin: "center center",
					transform: `translate(-50%, -50%) scaleY(${lineProgress})`,
				}}
			/>
			<TemplateContentRenderer content={content} audioSrc={audioSrc} />
			{children}
		</AbsoluteFill>
	);
};
