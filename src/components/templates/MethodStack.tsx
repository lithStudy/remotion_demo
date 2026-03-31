/**
 * METHOD_STACK 模板：单个叙事标题 + 解释展开
 * 适用场景：一个方法/提醒/观点标题，后面跟 2~4 句解释。
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
import { TemplateContentRenderer, normalizeContent } from "./TemplateContentRenderer";
import { BW_TEXT, getSafeImageSrc, type TemplateAnchorsProps, type TemplateBaseProps } from "./shared";

type MethodNoteItem = {
	text: string;
	showFrom: number;
};

export const templateMeta = {
	"name": "METHOD_STACK",
	"componentExport": "BWMethodStack",
	"description":
		"适用：单个 item 内是「一个标题式核心 + 解释展开」，例如：一个方法/建议/观点/卖点/亮点/推荐理由，后面紧跟 2～4 句说明。\n差异：多个独立步骤/并列分点用 STEP_LIST 或 LIST_MULTI_GROUP；多条不同方法/不同卖点不要为了套模板强行合并到同一 item。\n参数：title 为视觉标题，imageSrc 为单张主图，notes 为按讲解顺序出现的解释短语。",
	"psychology": "聚焦解释",
	"image_count": 1,
	"param_schema": {
		"type": "object",
		"properties": {
			"title": {
				"type": "string",
				"description": "该 item 的方法名/提醒标题/观点标题，建议 4~12 个字",
			},
			"imageSrc": {
				"type": "string",
				"format": "image_prompt",
				"description": "单张主图描述，用于承接这个方法或观点",
			},
			"notes": {
				"type": "array",
				"description":
					"可选；解释短语数组。每项含 text 与 showFrom；showFrom 为 content 下标（0-based，非帧数），须在 0～(content 条数-1) 内",
				"items": {
					"type": "object",
					"required": ["text", "showFrom"],
					"properties": {
						"text": { "type": "string", "description": "解释短语" },
						"showFrom": {
							"type": "integer",
							"format": "content_index",
							"description": "content 数组下标（0-based），非帧数；合法范围 0～(content 条数-1)，超出会被校验丢弃",
						},
					},
				},
			},
		},
		"required": ["title", "imageSrc"],
	},
	"example": {
		"template": "METHOD_STACK",
		"param": {
			"title": "警惕情绪画面",
			"imageSrc": "被耸动新闻画面包围、神情紧张的人物简笔画",
			"notes": [
				{ "text": "先识别这是情绪刺激", "showFrom": 1 },
				{ "text": "再追问它是否只是离奇个案", "showFrom": 3 },
			],
		},
	},
	"content_min_items": 2,
	"content_max_items": 5,
} as const;

const getNoteStartFrame = (
	note: MethodNoteItem,
	content: ReturnType<typeof normalizeContent>,
) => {
	return content[note.showFrom]?.startFrame ?? 0;
};

export interface BWMethodStackProps extends TemplateBaseProps, TemplateAnchorsProps {
	title: string;
	imageSrc: string;
	notes?: MethodNoteItem[];
}

export const BWMethodStack: React.FC<BWMethodStackProps> = ({
	title,
	imageSrc,
	notes = [],
	content,
	anchors,
	audioSrc,
	children,
	style,
}) => {
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();
	const items = normalizeContent(content);
	const visibleNotes = notes
		.filter((note) => typeof note.text === "string" && note.text.trim())
		.filter((note) => note.showFrom >= 0 && note.showFrom < items.length)
		.slice(0, 4);
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

	return (
		<AbsoluteFill style={style}>
			<div
				style={{
					position: "absolute",
					left: "8%",
					right: "8%",
					top: "14%",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					gap: 18,
				}}
			>
				
				<div
					style={{
						fontSize: 58,
						fontWeight: 900,
						color: BW_TEXT,
						lineHeight: 1.2,
						textAlign: "center",
						maxWidth: "72%",
						opacity: titleEnter,
						transform: `scale(${interpolate(titleEnter, [0, 1], [0.9, 1], {
							extrapolateLeft: "clamp",
							extrapolateRight: "clamp",
						})})`,
					}}
				>
					{title}
				</div>
			</div>

			<div
				style={{
					position: "absolute",
					left: "7%",
					right: "7%",
					top: "28%",
					bottom: "18%",
					display: "flex",
					flexDirection: "column",
					alignItems: "stretch",
					justifyContent: "flex-start",
					gap: 24,
				}}
			>
				{/* 图片在上，尺寸收小为辅 */}
				<div
					style={{
						flex: "0 0 auto",
						alignSelf: "center",
						width: "clamp(160px, 22vw, 260px)",
						maxHeight: "min(32vh, 320px)",
						aspectRatio: "4 / 3",
						borderRadius: 20,
						backgroundColor: "#F8FAFC",
						border: "2px solid #E5E7EB",
						boxShadow: "0 10px 28px rgba(17, 24, 39, 0.06)",
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
							maxWidth: "72%",
							maxHeight: "72%",
							objectFit: "contain",
						}}
					/>
				</div>

				{/* 文字在下为主，占满宽度 */}
				<div
					style={{
						flex: "1 1 0",
						minHeight: 0,
						minWidth: 0,
						display: "flex",
						flexDirection: "column",
						gap: 22,
					}}
				>
					{visibleNotes.map((note, index) => {
						const noteEnter = spring({
							frame: frame - getNoteStartFrame(note, items),
							fps,
							config: { damping: 16, stiffness: 120 },
							durationInFrames: 18,
						});
						const isVisible = frame >= getNoteStartFrame(note, items);
						if (!isVisible) {
							return null;
						}
						return (
							<div
								key={`${note.text}-${index}`}
								style={{
									padding: "22px 28px",
									borderRadius: 20,
									backgroundColor: "#FFFFFF",
									border: "2px solid #E5E7EB",
									boxShadow: "0 12px 36px rgba(17, 24, 39, 0.07)",
									opacity: noteEnter,
									transform: `translateY(${interpolate(noteEnter, [0, 1], [20, 0], {
										extrapolateLeft: "clamp",
										extrapolateRight: "clamp",
									})}px)`,
								}}
							>
								
								<div
									style={{
										fontSize: 34,
										fontWeight: 800,
										lineHeight: 1.45,
										color: "#1F2937",
										textAlign: "center",
									}}
								>
									{note.text}
								</div>
							</div>
						);
					})}
				</div>
			</div>

			<TemplateContentRenderer content={content} anchors={anchors} audioSrc={audioSrc} />
			{children}
		</AbsoluteFill>
	);
};
