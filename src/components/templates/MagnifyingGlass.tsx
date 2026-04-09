/**
 * MAGNIFYING_GLASS 模板：好奇心缺口，揭秘感
 * 参数为「底层逻辑/真相」的文案精华，多条时在镜片内列表依次动画展示。
 */
import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import {
	getSingleImageAnchorAvoidanceShiftAnimatedPx,
	type TemplateAnchorsProps,
	type TemplateBaseProps,
} from "./shared";
import { TemplateContentRenderer } from "./TemplateContentRenderer";

export const templateMeta = {
	"name": "MAGNIFYING_GLASS",
	"componentExport": "BWMagnifyingGlass",
	"description":
		"适用：需要把观众注意力“锁定到一个关键词/短语/关键细节/核心发现”上（可用于揭秘、关键洞察、核心卖点、重要结论的聚焦强调），且口播中存在明确的落点句（如“关键在于…”“核心是…”“结论是…”）。\n差异：本模板要求 param.anchors 非空，且通过 showFrom 关联 content；没有清晰落点/锚点就不要用；不要用它打包多个机制+多个例子+多个结论。\n参数：anchors.text 对准要聚焦的关键词（建议 1～2 个高价值锚点）。",
	"psychology": "好奇心缺口",
	"image_count": 0,
	"param_schema": {
		"type": "object",
		"properties": {
			"anchors": {
				"type": "array",
				"minItems": 1,
				"maxItems": 3,
				"description": "必填且非空（建议 1～2 个高价值锚点）；每项通过 showFrom 对齐 content 分句。锚点应落在“揭示性落点句”或其核心关键词上，不要把整段说明塞满锚点",
				"items": {
					"type": "object",
					"required": ["text", "showFrom"],
					"properties": {
						"text": { "type": "string", "description": "要聚焦的关键词/短语" },
						"showFrom": {
							"type": "integer",
							"format": "content_index",
							"description": "content 数组下标（0-based），非帧数；合法范围 0～(content 条数-1)，超出会被校验丢弃",
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
		"required": ["anchors"],
	},
	"content_anchor_required": true,
	"example": {
		"template": "MAGNIFYING_GLASS",
		"param": {
			"anchors": [
				{
					"text": "忽略了基础",
					"showFrom": 0,
					"color": "#111111",
					"anim": "popIn",
					"audioEffect": "ping",
				},
			],
		},
	},
} as const;

export type BWMagnifyingGlassProps = TemplateBaseProps & TemplateAnchorsProps;

export const BWMagnifyingGlass: React.FC<BWMagnifyingGlassProps> = ({
	content,
	anchors,
	audioSrc,
	children,
	style,
}) => {
	const frame = useCurrentFrame();
	const { fps, height } = useVideoConfig();
	const glass = Math.round(Math.min(250, height * 0.22));
	const enterSpring = spring({ frame, fps, config: { damping: 60, stiffness: 180 }, durationInFrames: 25 });
	const scale = interpolate(enterSpring, [0, 1], [0.6, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
	const anchorAvoidanceShift = getSingleImageAnchorAvoidanceShiftAnimatedPx({
		content,
		anchors,
		frame,
		fps,
		height,
	});

	// 左右、上下缓慢漂移（周期不同形成椭圆轨迹）
	const driftX = 28 * Math.sin((2 * Math.PI * frame) / 60);
	const driftY = 22 * Math.cos((2 * Math.PI * frame) / 90);

	return (
		<AbsoluteFill style={style}>

			<div
				style={{
					position: "absolute",
					left: "50%",
					top: "50%",
					transform: `translate(calc(-50% + ${driftX}px), calc(-50% + ${driftY + anchorAvoidanceShift}px)) scale(${scale})`,
					opacity: enterSpring,
					width: glass,

				}}
			>
				<svg
					width={glass}
					height={glass}
					viewBox="0 0 200 200"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					style={{
						display: "block",
						margin: "0 auto",
						filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.1))",
					}}
				>
					{/* 镜柄 */}
					<line
						x1="125"
						y1="125"
						x2="175"
						y2="175"
						stroke="#111"
						strokeWidth="24"
						strokeLinecap="round"
					/>
					{/* 连接处 */}
					<line
						x1="115"
						y1="115"
						x2="135"
						y2="135"
						stroke="#111"
						strokeWidth="12"
					/>
					{/* 镜框 */}
					<circle
						cx="85"
						cy="85"
						r="60"
						fill="#FFF"
						stroke="#111"
						strokeWidth="16"
					/>
					{/* 镜面高光 */}
					<path
						d="M 45 65 A 40 40 0 0 1 65 45"
						stroke="#EEE"
						strokeWidth="8"
						strokeLinecap="round"
						fill="none"
					/>
				</svg>

			</div>
			<TemplateContentRenderer content={content} anchors={anchors} audioSrc={audioSrc} />
			{children}
		</AbsoluteFill>
	);
};
