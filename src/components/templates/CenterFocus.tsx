/**
 * CENTER_FOCUS 模板：视觉中心稳定，单图居中展示
 */
import React from "react";
import { AbsoluteFill } from "remotion";
import type { TemplateBaseProps } from "./shared";
import { BWImageBreath } from "./BWImageBreath";
import type { ImageEnterEffect } from "./shared";
import { TemplateContentRenderer } from "./TemplateContentRenderer";

export const templateMeta = {
	"name": "CENTER_FOCUS",
	"componentExport": "BWCenterFocus",
	"description":
		"适用：默认叙事底盘；平缓讲事实、下定义、引入话题；单图居中。\n差异：强情绪/震惊句用 ALERT；专业术语卡用 CONCEPT_CARD；多要素同时出现用 MULTI_IMAGE。\n慎用：需要左右对比或步骤列表时请换 SPLIT_COMPARE / STEP_LIST 等。\n参数：enterEffect 默认 breathe。",
	"psychology": "视觉中心稳定",
	"image_count": 1,
	"param_schema": {
		"imageSrc": { "type": "image_prompt", "required": true, "desc": "主图描述" },
		"enterEffect": { "type": "enum", "values": ["breathe", "slideLeft", "slideBottom", "zoomIn", "fadeIn"], "default": "breathe", "desc": "入场效果" },
	},
	"required_extra_params": [] as string[],
	"example": {
		"template": "CENTER_FOCUS",
		"param": {
			"imageSrc": "上班族坐在电脑前的简笔画图标",
			"enterEffect": "breathe",
			"content": [{ "text": "这是一个核心观点" }, { "text": "第二句原文" }],
		},
	},
	"default_anchor_color": "#2B6CB0",
	"default_anchor_anim": "spring",
	"default_audio_effect": "ping",
} as const;

export interface BWCenterFocusProps extends TemplateBaseProps {
	imageSrc: string;
	enterEffect?: ImageEnterEffect;
}

export const BWCenterFocus: React.FC<BWCenterFocusProps> = ({
	imageSrc,
	enterEffect = "breathe",
	content,
	anchors,
	audioSrc,
	children,
	style,
}) => (
	<AbsoluteFill style={style}>
		<BWImageBreath src={imageSrc} enterEffect={enterEffect} content={content} anchors={anchors} />
		<TemplateContentRenderer content={content} anchors={anchors} audioSrc={audioSrc} />
		{children}
	</AbsoluteFill>
);
