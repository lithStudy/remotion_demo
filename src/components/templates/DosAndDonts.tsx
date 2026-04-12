/**
 * DOS_AND_DONTS 模板：损失厌恶，避坑对比
 */
import React from "react";
import { AbsoluteFill, Img, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { getSafeImageSrc, type TemplateAnchorsProps, type TemplateBaseProps } from "./shared";
import { TemplateDefaultAnchors } from "./TemplateAnchorsLayer";
import { TemplateContentRenderer } from "./TemplateContentRenderer";

export const templateMeta = {
	"name": "DOS_AND_DONTS",
	"componentExport": "BWDosAndDonts",
	"description":
		"适用：明确「别这样做 vs 应该这样做」的避坑/规范/注意事项（可用于教程、产品使用、运营话术、设计规范、职场建议等）；左右对错叙事。\n差异：两种中立方案并列、无对错标签用 SPLIT_COMPARE；若是纯数据的双指标对比用 STAT_COMPARE。\n参数：dontLabel/doLabel 是极简的对错标签（如：❌ 别这样 vs ✅ 正确做法），严禁使用长句说明；与 leftSrc/rightSrc 语义一致。",
	"psychology": "损失厌恶",
	"image_count": 2,
	"param_schema": {
		"type": "object",
		"properties": {
			"leftSrc": {
				"type": "string",
				"format": "image_prompt",
				"description": "错误做法图片描述",
			},
			"rightSrc": {
				"type": "string",
				"format": "image_prompt",
				"description": "正确做法图片描述",
			},
			"dontLabel": { "type": "string", "description": "错误标签（如 ❌ 别这样）" },
			"doLabel": { "type": "string", "description": "正确标签（如 ✅ 正确做法）" },
		},
		"required": ["leftSrc", "rightSrc", "dontLabel", "doLabel"],
	},
	"example": {
		"template": "DOS_AND_DONTS",
		"param": {
			"leftSrc": "盲目跟风的人简笔画图标",
			"rightSrc": "理性分析图表的人简笔画图标",
			"dontLabel": "❌ 别这样",
			"doLabel": "✅ 正确做法",
		},
	},
} as const;

export interface BWDosAndDontsProps extends TemplateBaseProps, TemplateAnchorsProps {
	leftSrc?: string;
	rightSrc?: string;
	dontLabel?: string;
	doLabel?: string;
}

export const BWDosAndDonts: React.FC<BWDosAndDontsProps> = ({
	leftSrc,
	rightSrc,
	dontLabel = "❌ 错误",
	doLabel = "✅ 正确",
	content,
	anchors,
	audioSrc,
	children,
	style,
}) => {
	const frame = useCurrentFrame();
	const { fps, width, height } = useVideoConfig();
	const half = width / 2;
	// 与 BWSubtitle 保持一致：底部约 10% 为字幕安全区，模板主内容不进入该区域。
	const subtitleSafeArea = Math.max(48, Math.round(height * 0.1));

	const leftSpring = spring({ frame, fps, config: { damping: 60, stiffness: 180 }, durationInFrames: 20 });
	const rightSpring = spring({ frame: frame - 10, fps, config: { damping: 60, stiffness: 180 }, durationInFrames: 20 });
	const leftX = interpolate(leftSpring, [0, 1], [-half, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
	const rightX = interpolate(rightSpring, [0, 1], [half, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

	return (
		<AbsoluteFill style={style}>
			<div
				style={{
					display: "flex",
					width: "100%",
					// height: "85%",
					height: "100%",
				}}
			>
				<div style={{
					flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
					gap: 24, transform: `translateX(${leftX}px)`, backgroundColor: "rgba(229, 62, 62, 0.05)",
				}}>
					<div style={{ fontSize: 62, fontWeight: 900, color: "#E53E3E", textAlign: "center", padding: "0 28px", fontFamily: '"Microsoft YaHei", "PingFang SC", "Noto Sans SC", sans-serif' }}>
						{dontLabel}
					</div>
					<Img src={getSafeImageSrc(leftSrc)} style={{ maxWidth: "55%", maxHeight: "38%", objectFit: "contain", opacity: 0.75 }} />
				</div>
				<div style={{
					flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
					gap: 24, transform: `translateX(${rightX}px)`, backgroundColor: "rgba(39, 103, 73, 0.05)",
				}}>
					<div style={{ fontSize: 62, fontWeight: 900, color: "#276749", textAlign: "center", padding: "0 28px", fontFamily: '"Microsoft YaHei", "PingFang SC", "Noto Sans SC", sans-serif' }}>
						{doLabel}
					</div>
					<Img src={getSafeImageSrc(rightSrc)} style={{ maxWidth: "55%", maxHeight: "38%", objectFit: "contain" }} />
				</div>
			</div>
			<TemplateDefaultAnchors content={content} anchors={anchors} />
			<TemplateContentRenderer content={content} audioSrc={audioSrc} />
			{children}
		</AbsoluteFill>
	);
};
