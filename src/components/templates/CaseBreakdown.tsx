/**
 * CASE_BREAKDOWN：单图 + 叙事阶段轨，适合同一案例/子话题的「现象→误判→纠偏→收束」式口播。
 */
import React from "react";
import {
	AbsoluteFill,
	Img,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from "remotion";
import {
	TemplateContentRenderer,
	normalizeContent,
} from "./TemplateContentRenderer";
import { TemplateDefaultAnchors } from "./TemplateAnchorsLayer";
import {
	BW_TEXT,
	getSafeImageSrc,
	type TemplateAnchorsProps,
	type TemplateBaseProps,
} from "./shared";

type CasePhaseItem = {
	phaseLabel: string;
	showFrom: number;
};

export const templateMeta = {
	"name": "CASE_BREAKDOWN",
	"componentExport": "BWCaseBreakdown",
	"description":
		"适用：同一镜头内讲透一个小案例/子话题，口播 4～8 句呈「个案现象→推论/误判→纠偏→收束」叙事弧；单张主图贯穿，右侧 2～4 个 phaseLabel 通过 showFrom 对齐到任意 content 下标（不必连续）。\n布局：固定左侧主图、右侧自上而下的竖向阶段列表（不随横竖屏切换版式）。\n差异：单标题+方法要点堆叠仍用 METHOD_STACK；多图随节拍换、强情绪递进用 BEAT_SEQUENCE；每环一图的机制传导用 CAUSE_CHAIN。\n参数：title 为案例短标题；imageSrc 为单主图；phases 为 2～4 项，每项 phaseLabel（宜短）与 showFrom（content 下标 0-based，非帧号）。",
	"psychology": "案例叙事",
	"image_count": 1,
	"param_schema": {
		"type": "object",
		"properties": {
			"title": {
				"type": "string",
				"description": "案例短标题，建议 4～12 字",
			},
			"imageSrc": {
				"type": "string",
				"format": "image_prompt",
				"description": "单张主图描述，贯穿本案例讲解",
			},
			"phases": {
				"type": "array",
				"minItems": 2,
				"maxItems": 4,
				"description":
					"叙事阶段；每项含 phaseLabel 与 showFrom；showFrom 为 content 下标（0-based，非帧数），须在 0～(content 条数-1) 内",
				"items": {
					"type": "object",
					"required": ["phaseLabel", "showFrom"],
					"properties": {
						"phaseLabel": {
							"type": "string",
							"description": "阶段名，如表面个案、误判、真相、收束",
						},
						"showFrom": {
							"type": "integer",
							"format": "content_index",
							"description":
								"content 数组下标（0-based），非帧数；合法范围 0～(content 条数-1)，超出会被校验丢弃",
						},
					},
				},
			},
		},
		"required": ["title", "imageSrc", "phases"],
	},
	"example": {
		"template": "CASE_BREAKDOWN",
		"param": {
			"title": "长寿悖论",
			"imageSrc": "一位面带微笑的百岁老人正在抽烟，旁边放着一杯酒",
			"phases": [
				{ "phaseLabel": "表面个案", "showFrom": 0 },
				{ "phaseLabel": "常见推论", "showFrom": 1 },
				{ "phaseLabel": "真相", "showFrom": 2 },
				{ "phaseLabel": "收束", "showFrom": 3 },
			],
		},
	},
	"content_min_items": 4,
	"content_max_items": 8,
} as const;

const getPhaseStartFrame = (
	phase: CasePhaseItem,
	contentItems: ReturnType<typeof normalizeContent>,
) => contentItems[phase.showFrom]?.startFrame ?? 0;

export interface BWCaseBreakdownProps extends TemplateBaseProps, TemplateAnchorsProps {
	title: string;
	imageSrc: string;
	phases: CasePhaseItem[];
}

export const BWCaseBreakdown: React.FC<BWCaseBreakdownProps> = ({
	title,
	imageSrc,
	phases = [],
	content,
	audioSrc,
	anchors,
	children,
	style,
}) => {
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();
	const items = normalizeContent(content);
	const visiblePhases = phases
		.filter((p) => typeof p.phaseLabel === "string" && p.phaseLabel.trim())
		.filter((p) => p.showFrom >= 0 && p.showFrom < items.length)
		.slice(0, 4);

	let activeIdx = -1;
	for (let j = 0; j < visiblePhases.length; j++) {
		if (frame >= getPhaseStartFrame(visiblePhases[j], items)) {
			activeIdx = j;
		}
	}

	const titleEnter = spring({
		frame,
		fps,
		config: { damping: 16, stiffness: 120 },
		durationInFrames: 18,
	});
	const imageEnter = spring({
		frame: frame - 6,
		fps,
		config: { damping: 18, stiffness: 120 },
		durationInFrames: 22,
	});

	const phaseRail =
		visiblePhases.length === 0 ? null : (
			<div
				style={{
					position: "relative",
					display: "flex",
					flexDirection: "column",
					gap: 0,
					width: "100%",
					// maxWidth: 520,
					minWidth: 0,
				}}
			>
				{visiblePhases.map((phase, index) => {
					const startF = getPhaseStartFrame(phase, items);
					const isDone = index < activeIdx;
					const isCurrent = index === activeIdx;
					const rel = frame - startF;
					const pulse = spring({
						frame: rel,
						fps,
						config: { damping: 14, stiffness: 140 },
						durationInFrames: 16,
					});
					const dotScale = isCurrent
						? interpolate(pulse, [0, 1], [0.88, 1], {
								extrapolateLeft: "clamp",
								extrapolateRight: "clamp",
							})
						: 1;
					const hasNext = index < visiblePhases.length - 1;
					return (
						<div
							key={`${phase.phaseLabel}-${index}`}
							style={{
								display: "flex",
								flexDirection: "row",
								alignItems: "stretch",
								minHeight: hasNext ? 72 : 56,
							}}
						>
							<div
								style={{
									width: 36,
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
									flexShrink: 0,
								}}
							>
								<div
									style={{
										width: 20,
										height: 20,
										borderRadius: "50%",
										backgroundColor: isDone || isCurrent ? BW_TEXT : "#E5E7EB",
										border: isCurrent ? "3px solid #111" : "2px solid #D1D5DB",
										transform: `scale(${dotScale})`,
										boxSizing: "content-box",
										marginTop: 18,
									}}
								/>
								{hasNext ? (
									<div
										style={{
											flex: 1,
											width: 3,
											minHeight: 28,
											marginTop: 10,
											backgroundColor: isDone ? "#CBD5E1" : "#E5E7EB",
											borderRadius: 2,
										}}
									/>
								) : null}
							</div>
							<div
								style={{
									flex: 1,
									paddingLeft: 12,
									paddingBottom: hasNext ? 8 : 0,
									display: "flex",
									alignItems: "flex-start",
								}}
							>
								<div
									style={{
										fontSize: isCurrent ? 48 : 40,
										fontWeight: isCurrent ? 900 : isDone ? 800 : 600,
										color: isCurrent || isDone ? "#1F2937" : "#9CA3AF",
										lineHeight: 1.35,
										letterSpacing: "0.06em",
										fontFamily:
											'"Microsoft YaHei", "PingFang SC", "Noto Sans SC", sans-serif',
									}}
								>
									{phase.phaseLabel}
								</div>
							</div>
						</div>
					);
				})}
			</div>
		);

	return (
		<AbsoluteFill style={style}>
			<div
				style={{
					position: "absolute",
					left: "6%",
					right: "6%",
					top: "12%",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					gap: 20,
				}}
			>
				<div
					style={{
						fontSize: 80,
						fontWeight: 900,
						color: BW_TEXT,
						lineHeight: 1.2,
						textAlign: "center",
						maxWidth: "88%",
						opacity: titleEnter,
						transform: `scale(${interpolate(titleEnter, [0, 1], [0.92, 1], {
							extrapolateLeft: "clamp",
							extrapolateRight: "clamp",
						})})`,
						fontFamily:
							'"Microsoft YaHei", "PingFang SC", "Noto Sans SC", sans-serif',
					}}
				>
					{title}
				</div>
			</div>

			<div
				style={{
					position: "absolute",
					left: "12%",
					right: "6%",
					top: "26%",
					bottom: "16%",
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between",
					gap: 32,
				}}
			>
				<div
					style={{
						flex: "0 0 40%",
						maxWidth: 520,
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						minWidth: 0,
					}}
				>
					<div
						style={{
							width: "100%",
							maxWidth: 440,
							aspectRatio: "4 / 3",
							maxHeight: "min(42vh, 480px)",
							borderRadius: 28,
							// backgroundColor: "#F8FAFC",
							// border: "3px solid #E5E7EB",
							// boxShadow: "0 16px 40px rgba(17, 24, 39, 0.08)",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							overflow: "hidden",
							transform: `translateY(${interpolate(imageEnter, [0, 1], [20, 0], {
								extrapolateLeft: "clamp",
								extrapolateRight: "clamp",
							})}px)`,
							opacity: imageEnter,
						}}
					>
						<Img
							src={getSafeImageSrc(imageSrc)}
							style={{
								maxWidth: "76%",
								maxHeight: "76%",
								objectFit: "contain",
							}}
						/>
					</div>
				</div>

				<div
					style={{
						flex: "1 1 0",
						minWidth: 0,
						display: "flex",
						flexDirection: "column",
						alignItems: "flex-start",
						justifyContent: "center",
					}}
				>
					{phaseRail}
				</div>
			</div>

			<TemplateContentRenderer content={content} audioSrc={audioSrc} />
			<TemplateDefaultAnchors content={content} anchors={anchors} />
			{children}
		</AbsoluteFill>
	);
};
