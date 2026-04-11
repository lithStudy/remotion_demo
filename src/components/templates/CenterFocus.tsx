/**
 * CENTER_FOCUS 模板：视觉中心稳定，单图居中展示
 */
import React from "react";
import {
	AbsoluteFill,
	Sequence,
	Audio,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
} from "remotion";
import {
	normalizeContent,
	ANCHOR_LIST_ROW_MIN_HEIGHT_PX,
	getCenterFocusStackLayoutAtFrame,
	type ImageEnterEffect,
	type TemplateAnchorsProps,
	type TemplateBaseProps,
	type AnchorItem,
	type ContentItem,
} from "./shared";
import { BWImageBreath } from "./BWImageBreath";
import { BWAnchorWord } from "../BWPrimitives";
import { useRemotionLayoutMetricsOverride } from "../RemotionLayoutMetricsContext";
import { TemplateContentRenderer } from "./TemplateContentRenderer";
export const templateMeta = {
	"name": "CENTER_FOCUS",
	"componentExport": "BWCenterFocus",
	"description":
		"适用：默认叙事底盘；平缓讲事实、下定义、引入话题；单图居中。\n差异：强情绪/震惊句用 TEXT_FOCUS；专业术语卡用 CONCEPT_CARD；多要素同时出现用 PANEL_GRID。\n慎用：需要左右对比或步骤列表时请换 SPLIT_COMPARE / STEP_LIST 等。\n参数：图片始终带呼吸效果；enterEffect 控制入场方式，默认 fadeIn；anchors 可选，showFrom 为 content 下标（非帧数），锚点词会按时间依次出现并保留为列表。",
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
				"enum": ["fadeIn", "slideLeft", "slideBottom", "zoomIn"],
				"default": "fadeIn",
				"description": "图片入场方式（breathe 呼吸效果始终常驻，无需指定）",
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
			"enterEffect": "fadeIn",
			"anchors": [{ "text": "可得性启发", "showFrom": 0, "color": "red" }],
		},
	},
} as const;

/** 锚点与主图同轴堆叠 + 锚点音效 */
const CenterFocusAnchors: React.FC<{
	content: ContentItem[];
	anchors: AnchorItem[];
}> = ({ content, anchors }) => {
	const frame = useCurrentFrame();
	const { fps, height: compHeight } = useVideoConfig();
	const layoutOverride = useRemotionLayoutMetricsOverride();
	const height = layoutOverride?.height ?? compHeight;
	const { anchorCenterYs } = getCenterFocusStackLayoutAtFrame({
		content,
		anchors,
		frame,
		fps,
		height,
	});
	const visible = (anchors ?? [])
		.map((anchor) => ({
			...anchor,
			startFrame: content[anchor.showFrom]?.startFrame,
		}))
		.filter(
			(item): item is AnchorItem & { startFrame: number } =>
				typeof item.startFrame === "number" && item.startFrame <= frame,
		)
		.sort((a, b) => a.startFrame - b.startFrame);
	const hasAnyAnchor = (anchors ?? []).some(
		(a) => typeof content[a.showFrom]?.startFrame === "number",
	);
	if (!hasAnyAnchor) return null;
	return (
		<>
			{visible.map((item, i) => (
				<div
					key={`${item.showFrom}-${item.text}-${i}`}
					style={{
						position: "absolute",
						left: 0,
						right: 0,
						top: anchorCenterYs[i],
						transform: "translateY(-50%)",
						minHeight: ANCHOR_LIST_ROW_MIN_HEIGHT_PX,
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<BWAnchorWord
						anchor={item.text}
						delay={item.startFrame}
						color={item.color || "#111111"}
						animStyle={item.anim || "spring"}
						style={{ position: "relative", top: 0, left: 0, right: 0 }}
					/>
				</div>
			))}
			{(anchors ?? []).map((anchor) => {
				const startFrame = content[anchor.showFrom]?.startFrame;
				const name = anchor.audioEffect;
				if (typeof startFrame !== "number" || !name) {
					return null;
				}
				return (
					<Sequence key={`sfx-${anchor.showFrom}-${anchor.text}`} from={startFrame}>
						<Audio
							src={staticFile(`audio/effects/${name}.wav`)}
							volume={0.2}
						/>
					</Sequence>
				);
			})}
		</>
	);
};



export interface BWCenterFocusProps extends TemplateBaseProps, TemplateAnchorsProps {
	imageSrc: string;
	enterEffect?: Exclude<ImageEnterEffect, "breathe">;
}

export const BWCenterFocus: React.FC<BWCenterFocusProps> = ({
	imageSrc,
	enterEffect = "fadeIn",
	content,
	anchors,
	audioSrc,
	children,
	style,
}) => (
	<AbsoluteFill style={style}>
		<BWImageBreath
			src={imageSrc}
			enterEffect={enterEffect}
			content={content}
			anchors={anchors}
			centerFocusStack
		/>
		<TemplateContentRenderer content={content} audioSrc={audioSrc} />
		<CenterFocusAnchors
			content={normalizeContent(content)}
			anchors={anchors ?? []}
		/>
		{children}
	</AbsoluteFill>
);
