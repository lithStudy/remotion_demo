/**
 * CENTER_FOCUS 模板：视觉中心稳定，单图居中展示
 */
import React from "react";
import { AbsoluteFill } from "remotion";
import type { TemplateAnchorsProps, TemplateBaseProps } from "./shared";
import { BWImageBreath } from "./BWImageBreath";
import type { ImageEnterEffect } from "./shared";
import { TemplateContentRenderer } from "./TemplateContentRenderer";

export const templateMeta = {
	"name": "CENTER_FOCUS",
	"componentExport": "BWCenterFocus",
	"description":
		"适用：默认叙事底盘；平缓讲事实、下定义、引入话题；单图居中。\n差异：强情绪/震惊句用 TEXT_FOCUS；专业术语卡用 CONCEPT_CARD；多要素同时出现用 LIST_MULTI_GROUP。\n慎用：需要左右对比或步骤列表时请换 SPLIT_COMPARE / STEP_LIST 等。\n参数：enterEffect 默认 breathe；anchors 可选，showFrom 为 content 下标（非帧数），锚点词会按时间依次出现并保留为列表。",
	"psychology": "视觉中心稳定",
	"image_count": 1,
	"param_schema": {
		"type": "object",
		"properties": {
			"imageSrc": {
				"type": "string",
				"format": "image_prompt",
				"description": "主图描述",
			},
			"enterEffect": {
				"type": "string",
				"enum": ["breathe", "slideLeft", "slideBottom", "zoomIn", "fadeIn"],
				"default": "breathe",
				"description": "入场效果",
			},
			"anchors": {
				"type": "array",
				"description":
					"可选；用于锚点词展示（顶部依次出现并保留为列表），并绑定锚点出现时机的音效。showFrom 须落在当前 content 条数范围内。注意 **保持克制，尽量少设置锚点** 只提取整段里真正的高潮、反转或核心名词",
				"items": {
					"type": "object",
					"required": ["text", "showFrom"],
					"properties": {
						"text": { "type": "string", "description": "要展示的锚点词" },
						"showFrom": {
							"type": "integer",
							"format": "content_index",
							"description":
								"content 数组下标（0-based），非帧数；合法范围 0～(content 条数-1)，超出会被校验丢弃",
						},
						"color": { "type": "string" },
						"anim": {
							"type": "string",
							"enum": ["spring", "slideUp", "popIn", "highlight"],
						},
						"audioEffect": {
							"type": "string",
							"enum": ["impact_thud", "ping", "woosh"],
						},
					},
				},
			},
		},
		"required": ["imageSrc"],
	},
	"example": {
		"template": "CENTER_FOCUS",
		"param": {
			"imageSrc": "上班族坐在电脑前的简笔画图标",
			"enterEffect": "breathe",
			"anchors": [{ "text": "可得性启发", "showFrom": 0, "color": "red" }],
		},
	},
} as const;

export interface BWCenterFocusProps extends TemplateBaseProps, TemplateAnchorsProps {
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
