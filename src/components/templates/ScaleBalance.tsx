/**
 * SCALE_BALANCE 模板：认知失调与决策，代价 vs 收益
 */
import React from "react";
import { AbsoluteFill, Img, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { BW_TEXT, getSafeImageSrc, type TemplateBaseProps } from "./shared";
import { TemplateContentRenderer } from "./TemplateContentRenderer";

export const templateMeta = {
	"name": "SCALE_BALANCE",
	"componentExport": "BWScaleBalance",
	"description":
		"适用：代价 vs 收益、风险 vs 回报、两难权衡；天平倾斜。\n差异：中立 A/B 方案用 SPLIT_COMPARE；对错避坑用 DOS_AND_DONTS。\n参数：leftLabel/rightLabel 宜短；tiltDirection 表示侧重侧（left/right/center）。",
	"psychology": "认知失调与决策",
	"image_count": 2,
	"param_schema": {
		"leftSrc": { "type": "image_prompt", "required": true, "desc": "左侧托盘图标描述" },
		"rightSrc": { "type": "image_prompt", "required": true, "desc": "右侧托盘图标描述" },
		"leftLabel": { "type": "string", "required": true, "desc": "左侧标签" },
		"rightLabel": { "type": "string", "required": true, "desc": "右侧标签" },
		"tiltDirection": { "type": "enum", "values": ["left", "right", "center"], "default": "right", "desc": "天平倾斜方向" },
	},
	"required_extra_params": ["leftLabel", "rightLabel", "tiltDirection"],
	"example": {
		"template": "SCALE_BALANCE",
		"param": {
			"leftSrc": "金币图标",
			"rightSrc": "大树图标",
			"leftLabel": "短期收益",
			"rightLabel": "长期价值",
			"tiltDirection": "right",
			"content": ["短期收益很诱人", "但长期价值才是关键"],
		},
	},
	"default_anchor_color": "#FF8C00",
	"default_anchor_anim": "slideUp",
	"default_audio_effect": "woosh",
} as const;

export interface BWScaleBalanceProps extends TemplateBaseProps {
	leftSrc?: string;
	rightSrc?: string;
	leftLabel?: string;
	rightLabel?: string;
	tiltDirection?: "left" | "right" | "center";
}

export const BWScaleBalance: React.FC<BWScaleBalanceProps> = ({
	leftSrc,
	rightSrc,
	leftLabel = "",
	rightLabel = "",
	tiltDirection = "right",
	content,
	audioSrc,
	children,
	style,
}) => {
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();
	const enterSpring = spring({ frame, fps, config: { damping: 60, stiffness: 200 }, durationInFrames: 20 });
	const tiltSpring = spring({ frame: frame - 20, fps, config: { damping: 35, stiffness: 60 }, durationInFrames: 35 });
	const tiltAngle = tiltDirection === "left" ? interpolate(tiltSpring, [0, 1], [0, -14])
		: tiltDirection === "right" ? interpolate(tiltSpring, [0, 1], [0, 14]) : 0;

	const panStyle: React.CSSProperties = {
		width: 170, height: 170, borderRadius: "50%", border: "5px solid #111",
		backgroundColor: "rgba(0,0,0,0.02)", display: "flex", flexDirection: "column",
		alignItems: "center", justifyContent: "center", gap: 8,
	};

	return (
		<AbsoluteFill style={style}>
			<div style={{
				position: "absolute", left: "50%", top: "40%", transform: "translate(-50%, -50%)",
				opacity: enterSpring, width: "86%", display: "flex", flexDirection: "column", alignItems: "center",
			}}>
				{/* 横梁在上，竖杆从横梁向下悬挂，托盘在竖杆末端 */}
				<div style={{
					width: "100%", transform: `rotate(${tiltAngle}deg)`, transformOrigin: "center top",
					display: "flex", flexDirection: "column", alignItems: "center", position: "relative", zIndex: 1,
				}}>
					<div style={{ width: "100%", height: 8, backgroundColor: BW_TEXT, borderRadius: 4, flexShrink: 0 }} />
					<div style={{ display: "flex", justifyContent: "space-between", width: "100%", marginTop: 0 }}>
						<div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
							<div style={{ width: 3, height: 80, backgroundColor: BW_TEXT, flexShrink: 0 }} />
							<div style={panStyle}>
								<Img src={getSafeImageSrc(leftSrc)} style={{ width: "55%", height: "55%", objectFit: "contain" }} />
								{leftLabel && <span style={{ fontSize: 22, fontWeight: 700, color: BW_TEXT, textAlign: "center", fontFamily: '"Microsoft YaHei", "PingFang SC", "Noto Sans SC", sans-serif' }}>{leftLabel}</span>}
							</div>
						</div>
						<div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
							<div style={{ width: 3, height: 80, backgroundColor: BW_TEXT, flexShrink: 0 }} />
							<div style={panStyle}>
								<Img src={getSafeImageSrc(rightSrc)} style={{ width: "55%", height: "55%", objectFit: "contain" }} />
								{rightLabel && <span style={{ fontSize: 22, fontWeight: 700, color: BW_TEXT, textAlign: "center", fontFamily: '"Microsoft YaHei", "PingFang SC", "Noto Sans SC", sans-serif' }}>{rightLabel}</span>}
							</div>
						</div>
					</div>
				</div>
				{/* 支点柱：顶端与横梁底部贴合。总高 8+80+170=258，支点顶需在 8px 处 => marginTop: -250 */}
				<div style={{ width: 12, height: 100, backgroundColor: BW_TEXT, borderRadius: 6, marginTop: -250, zIndex: 0 }} />
				<div style={{ width: 100, height: 16, backgroundColor: BW_TEXT, borderRadius: 4, marginTop: 0 }} />
			</div>
			<TemplateContentRenderer content={content} audioSrc={audioSrc} />
			{children}
		</AbsoluteFill>
	);
};
