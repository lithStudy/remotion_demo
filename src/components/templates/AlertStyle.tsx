/**
 * ALERT 模板：激活杏仁核，强调冲击感
 * 适用场景：重大转折、揭露骗局、冲击性结论，全屏带呼吸脉动，1 张图。
 */
import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import type { TemplateBaseProps } from "./shared";
import { BWImageBreath } from "./BWImageBreath";
import type { ImageEnterEffect } from "./shared";
import { TemplateContentRenderer } from "./TemplateContentRenderer";

export const templateMeta = {
	"name": "ALERT",
	"componentExport": "BWAlertStyle",
	"description":
		"适用：重大转折、揭露骗局、冲击性结论、警钟式收束；单主图+强视觉冲击。\n差异：平缓叙述与事实引入请用 CENTER_FOCUS；勿通篇滥用 ALERT。\n慎用：普通说明句、无情绪峰值的中间句。\n参数：enterEffect 默认 slideBottom。",
	"psychology": "激活杏仁核",
	"image_count": 1,
	"param_schema": {
		"imageSrc": { "type": "image_prompt", "required": true, "desc": "主图描述" },
		"enterEffect": { "type": "enum", "values": ["breathe", "slideLeft", "slideBottom", "zoomIn", "fadeIn"], "default": "slideBottom", "desc": "入场效果" },
	},
	"required_extra_params": [] as string[],
	"example": {
		"template": "ALERT",
		"param": {
			"imageSrc": "倒计时炸弹的简笔画图标",
			"enterEffect": "slideBottom",
			"content": ["你在慢性自杀"],
		},
	},
	"default_anchor_color": "#E53E3E",
	"default_anchor_anim": "popIn",
	"default_audio_effect": "impact_thud",
} as const;

export interface BWAlertStyleProps extends TemplateBaseProps {
	imageSrc?: string;
	enterEffect?: ImageEnterEffect;
}

export const BWAlertStyle: React.FC<BWAlertStyleProps> = ({
	imageSrc,
	enterEffect = "breathe",
	content,
	audioSrc,
	children,
	style,
}) => {
	const frame = useCurrentFrame();
	const breatheScale = 1 + Math.sin(frame * 0.075) * 0.02;
	return (
		<AbsoluteFill
			style={{
				transform: `scale(${breatheScale})`,
				transformOrigin: "center center",
				...style,
			}}
		>
			{imageSrc ? (
				<BWImageBreath src={imageSrc} enterEffect={enterEffect} content={content} />
			) : null}
			<TemplateContentRenderer content={content} audioSrc={audioSrc} />
			{children}
		</AbsoluteFill>
	);
};
