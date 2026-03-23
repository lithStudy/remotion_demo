/**
 * SPLIT_COMPARE 模板：认知失调，A vs B 对比
 * 适用场景：左右对比（如两种选择、两种结果），需 2 张图，可配左右标签。
 */
import React from "react";
import { AbsoluteFill, Img, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { BW_TEXT, getSafeImageSrc, type TemplateBaseProps } from "./shared";
import { TemplateContentRenderer } from "./TemplateContentRenderer";

export const templateMeta = {
	"name": "SPLIT_COMPARE",
	"componentExport": "BWSplitCompare",
	"description":
		"适用：两种方案、两条路径、两个结果并列对比（中性对比，不强调对错标签）。\n差异：明确错/对避坑用 DOS_AND_DONTS；权衡轻重与代价用 SCALE_BALANCE。\n参数：leftLabel/rightLabel 为短语，与左右图一致。",
	"psychology": "认知失调",
	"image_count": 2,
	"param_schema": {
		"leftSrc": { "type": "image_prompt", "required": true, "desc": "左侧图片描述" },
		"rightSrc": { "type": "image_prompt", "required": true, "desc": "右侧图片描述" },
		"leftLabel": { "type": "string", "required": true, "desc": "左侧标签" },
		"rightLabel": { "type": "string", "required": true, "desc": "右侧标签" },
	},
	"required_extra_params": ["leftLabel", "rightLabel"],
	"example": {
		"template": "SPLIT_COMPARE",
		"param": {
			"leftSrc": "传统低效工作图标",
			"rightSrc": "高效数字工具图标",
			"leftLabel": "旧方法",
			"rightLabel": "新方法",
			"content": [{ "text": "传统方式需要三天" }, { "text": "新方法只需三分钟" }],
		},
	},
	"default_anchor_color": "#2B6CB0",
	"default_anchor_anim": "slideUp",
	"default_audio_effect": "woosh",
} as const;

export interface BWSplitCompareProps extends TemplateBaseProps {
	leftLabel?: string;
	rightLabel?: string;
	leftSrc?: string;
	rightSrc?: string;
}

export const BWSplitCompare: React.FC<BWSplitCompareProps> = ({
	leftLabel = "",
	rightLabel = "",
	leftSrc,
	rightSrc,
	content,
	audioSrc,
	children,
	style,
}) => {
	const frame = useCurrentFrame();
	const { width } = useVideoConfig();
	const half = width / 2;
	const slideLeft = interpolate(frame, [0, 12], [-half, 0], {
		extrapolateRight: "clamp",
		extrapolateLeft: "clamp",
	});
	const slideRight = interpolate(frame, [0, 12], [half, 0], {
		extrapolateRight: "clamp",
		extrapolateLeft: "clamp",
	});
	// 中间竖线独立动画：在左右滑入之后，从中心向上下展开
	const lineProgress = interpolate(frame, [12, 20], [0, 1], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	});
	return (
		<AbsoluteFill style={style}>
			<div
				style={{
					display: "flex",
					width: "100%",
					height: "100%",
					alignItems: "stretch",
				}}
			>
				<div
					style={{
						flex: 1,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						transform: `translateX(${slideLeft}px)`,
					}}
				>
					<Img
						src={getSafeImageSrc(leftSrc)}
						style={{
							maxWidth: "80%",
							maxHeight: "50%",
							objectFit: "contain",
						}}
					/>
					{leftLabel && (
						<span
							style={{
								marginTop: 16,
								fontSize: 36,
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
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						transform: `translateX(${slideRight}px)`,
					}}
				>
					<Img
						src={getSafeImageSrc(rightSrc)}
						style={{
							maxWidth: "80%",
							maxHeight: "50%",
							objectFit: "contain",
						}}
					/>
					{rightLabel && (
						<span
							style={{
								marginTop: 16,
								fontSize: 36,
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
