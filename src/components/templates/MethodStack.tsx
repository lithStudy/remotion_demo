/**
 * METHOD_STACK 模板：单个叙事标题 + 解释展开
 * 适用场景：一个方法/提醒/观点标题，后面跟 2~4 句解释。
 */
import React from "react";
import {
	AbsoluteFill,
	Easing,
	Img,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from "remotion";
import { TemplateContentRenderer, normalizeContent } from "./TemplateContentRenderer";
import { BW_TEXT, getSafeImageSrc, type TemplateBaseProps } from "./shared";

/** 一条「解释短语」及其与口播时间轴的对齐方式 */
type MethodNoteItem = {
	/** 展示在卡片内的说明文字，与 scene 口播对应 */
	text: string;
	/**
	 * 从 `content[showFrom]` 的起始帧开始显示本条（与 `normalizeContent` 后的下标一致）。
	 * 值为 **content 数组下标（0-based）**，不是视频帧号。
	 */
	showFrom: number;
};

export const templateMeta = {
	"name": "METHOD_STACK",
	"componentExport": "BWMethodStack",
	"description":
		"适用：单个 item 内是「一个标题式核心 + 解释展开」，例如：一个方法/建议/观点/卖点/亮点/推荐理由，后面紧跟 2～4 句说明。\n差异：多个独立步骤/并列分点用 STEP_LIST 或 PANEL_GRID；多条不同方法/不同卖点不要为了套模板强行合并到同一 item。\n参数：title 为视觉标题，imageSrc 为单张主图，notes 为按讲解顺序出现的解释短语。",
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

/**
 * METHOD_STACK 组件入参。
 * 继承字段含义见 {@link TemplateBaseProps}：`content`、`audioSrc`、`totalDurationFrames`、`children`、`style`。
 */
export interface BWMethodStackProps extends TemplateBaseProps {
	/** 画面上方主标题（大字），建议与 scene-scripts 中 item 标题一致 */
	title: string;
	/** 主图：提示词或静态资源路径，经 `getSafeImageSrc` 解析后交给 `Img` */
	imageSrc: string;
	/**
	 * 可选；标题下方按时间依次出现的解释卡片。
	 * 每条通过 `showFrom` 绑定到 `content` 的某一句起始帧；非法项会被过滤，最多使用 4 条。
	 */
	notes?: MethodNoteItem[];
}

export const BWMethodStack: React.FC<BWMethodStackProps> = ({
	title,
	imageSrc,
	notes = [],
	content,
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

	/** 首条 note 对应 content 条的起始帧；无 note 时为 null，不做「先大后收」 */
	const firstNoteStartFrame =
		visibleNotes.length > 0 ? getNoteStartFrame(visibleNotes[0], items) : null;
	/** 首条 note 出现前，主图相对最终尺寸的放大倍数（仅 scale，不改变布局占位） */
	const LARGE_IMAGE_SCALE = 2;
	/** 从首条 note 出现起，缩小动画所持续的帧数（越大越慢） */
	const SHRINK_DURATION_FRAMES = 20;
	/** 缩小曲线：`back` 第二参数越大，过冲越明显 */
	const shrinkEaseOutBack = Easing.out(Easing.back(1.5));

	const isShrinkPhase =
		firstNoteStartFrame !== null &&
		firstNoteStartFrame > 0 &&
		frame >= firstNoteStartFrame;
	const shrinkFrame = isShrinkPhase ? frame - firstNoteStartFrame : 0;
	const shrinkT = interpolate(
		shrinkFrame,
		[0, SHRINK_DURATION_FRAMES],
		[0, 1],
		{ extrapolateLeft: "clamp", extrapolateRight: "clamp" },
	);
	const shrinkEase = shrinkEaseOutBack(shrinkT);

	const imageScale =
		firstNoteStartFrame === null || firstNoteStartFrame <= 0
			? 1
			: frame < firstNoteStartFrame
				? LARGE_IMAGE_SCALE
				: Math.max(
						0.985, // 缩小过冲时允许的最小 scale，避免画面过小发虚
						interpolate(shrinkEase, [0, 1], [LARGE_IMAGE_SCALE, 1], {
							extrapolateLeft: "clamp",
							extrapolateRight: "extend",
						}),
					);

	/** 缩小阶段附加的垂直位移（px）；负值略上移，与 scale 同步；外层 clamp 限制抖动幅度 */
	const shrinkLiftPx = isShrinkPhase
		? Math.max(
				-22,
				Math.min(
					10,
					interpolate(shrinkEase, [0, 1], [-16, 0], {
						extrapolateLeft: "clamp",
						extrapolateRight: "extend",
					}),
				),
			)
		: 0;
	const imageTranslateY =
		interpolate(imageEnter, [0, 1], [28, 0], {
			extrapolateLeft: "clamp",
			extrapolateRight: "clamp",
		}) + shrinkLiftPx;

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
					gap: 28,
				}}
			>
				
				<div
					style={{
						fontSize: 88,
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
					left: "10%",
					right: "10%",
					top: "28%",
					bottom: "18%",
					display: "flex",
					flexDirection: "column",
					alignItems: "stretch",
					justifyContent: "flex-start",
					gap: 36,
				}}
			>
				{/* 图片在上，尺寸收小为辅 */}
				<div
					style={{
						flex: "0 0 auto",
						alignSelf: "center",
						width: "clamp(260px, 24vw, 420px)",
						maxHeight: "min(34vh, 440px)",
						aspectRatio: "4 / 3",
						borderRadius: 28,
						backgroundColor: "#F8FAFC",
						border: "3px solid #E5E7EB",
						boxShadow: "0 16px 40px rgba(17, 24, 39, 0.08)",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						overflow: "hidden",
						transformOrigin: "center top",
						transform: `translateY(${imageTranslateY}px) scale(${imageScale})`,
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
						gap: 32,
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
									padding: "20px 28px",
									borderRadius: 28,
									backgroundColor: "#FFFFFF",
									border: "3px solid #E5E7EB",
									boxShadow: "0 18px 48px rgba(17, 24, 39, 0.08)",
									opacity: noteEnter,
									transform: `translateY(${interpolate(noteEnter, [0, 1], [28, 0], {
										extrapolateLeft: "clamp",
										extrapolateRight: "clamp",
									})}px)`,
								}}
							>
								
								<div
									style={{
										fontSize: 42,
										fontWeight: 800,
										lineHeight: 1.45,
										color: "#1F2937",
										letterSpacing: "0.1em",
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

			<TemplateContentRenderer content={content} audioSrc={audioSrc} />
			{children}
		</AbsoluteFill>
	);
};
