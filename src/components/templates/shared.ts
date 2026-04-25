/**
 * 模板公共常量、类型与入场动画 hook
 * 供各 BW 模板复用：背景/文字色、图片入场效果类型、多图项结构、useImageEnterStyle。
 */
import React from "react";
import { interpolate, spring, staticFile } from "remotion";
import defaultImage from "./images/scene1_1.png";

/** 默认图片地址 */
export const DEFAULT_IMAGE = defaultImage;

/** 
 * 简单验证图片 src 是否为合法 URL 或本地路径/静态资源
 */
export function isValidImageSrc(src?: string): boolean {
	if (!src || typeof src !== "string" || src.trim() === "") return false;
	const trimmed = src.trim();
	const extensionPattern = /\.(png|jpg|jpeg|gif|webp|svg|bmp)(\?.*)?$/i;
	if (!extensionPattern.test(trimmed)) return false;
	// http(s)、data:、绝对路径、static:、Windows 盘符路径
	const urlPattern = /^(https?:\/\/|data:image\/|\/|static:|[a-zA-Z]:\\)/i;
	if (urlPattern.test(trimmed)) return true;
	// public 下相对路径（scene-scripts 常见写法：images/xxx.png，无前导 /）
	if (!trimmed.includes("://") && !trimmed.startsWith("..")) return true;
	return false;
}

/** 
 * 获取安全的图片地址：如果 src 无效，则返回默认图片
 */
export function getSafeImageSrc(src?: string): string {
	if (!src || typeof src !== "string" || src.trim() === "") return DEFAULT_IMAGE;
	const trimmed = src.trim();
	if (!isValidImageSrc(trimmed)) return DEFAULT_IMAGE;
	const urlPattern = /^(https?:\/\/|data:image\/|\/|static:|[a-zA-Z]:\\)/i;
	if (urlPattern.test(trimmed)) return trimmed;
	return staticFile(trimmed.replace(/^\//, ""));
}

/** 白底模板背景色 */
export const BW_BG = "#ffffff";
/** 主文字色 */
export const BW_TEXT = "#111111";

/** 模板逻辑版心：横屏1920×1080；竖屏中间 16:9 视口经 scale 后与此同源。 */
export const BW_LAYOUT_WIDTH = 1920;
export const BW_LAYOUT_HEIGHT = 1080;

/** 图片入场效果：呼吸 | 左滑 | 下滑 | 放大 | 淡入 */
export type ImageEnterEffect = "breathe" | "slideLeft" | "slideBottom" | "zoomIn" | "fadeIn";

/**
 * withCentering：含 translate(-50%,-50%)，用于绝对定位在 left50%/top50% 的 Img。
 * effectOnly：仅位移/缩放/透明度，配合外层已做居中的包裹层（如 BWImageBreath）。
 */
export type ImageEnterTransformMode = "withCentering" | "effectOnly";

function joinCssTransforms(parts: Array<string | false | undefined>): string {
	return parts.filter(Boolean).join(" ");
}

/**
 * 根据效果类型计算图片入场样式（位移、缩放、透明度）
 * @param effect 入场效果
 * @param frame 当前帧
 * @param fps 帧率
 * @param width 画布宽
 * @param height 画布高
 * @param transformMode 是否包含居中平移（默认 withCentering）
 */
export function useImageEnterStyle(
	effect: ImageEnterEffect,
	frame: number,
	fps: number,
	width: number,
	height: number,
	transformMode: ImageEnterTransformMode = "withCentering",
): React.CSSProperties {
	const enterSpring = spring({
		frame,
		fps,
		config: { damping: 60, stiffness: 180 },
		durationInFrames: 25,
	});
	// 呼吸：周期 75 帧（约 2.5s），吸气 0→37 放大，呼气 37→74 收回，幅度 1 ↔ 1.08
	const breatheCycle = 75;
	const breathePhase = frame % breatheCycle;
	const breatheScale = interpolate(
		breathePhase,
		[0, 37, 74],
		[1, 1.08, 1],
		{ extrapolateLeft: "clamp", extrapolateRight: "clamp" },
	);

	const c = transformMode === "withCentering" ? "translate(-50%, -50%)" : "";

	switch (effect) {
		case "slideLeft": {
			const tx = interpolate(enterSpring, [0, 1], [width * 0.5, 0]);
			return {
				transform: joinCssTransforms([c, `translateX(${tx}px)`]),
				opacity: enterSpring,
			};
		}
		case "slideBottom": {
			const ty = interpolate(enterSpring, [0, 1], [height * 0.25, 0]);
			return {
				transform: joinCssTransforms([c, `translateY(${ty}px)`]),
				opacity: enterSpring,
			};
		}
		case "zoomIn": {
			const sc = interpolate(enterSpring, [0, 1], [0.5, 1]);
			return {
				transform: joinCssTransforms([c, `scale(${sc})`]),
				opacity: enterSpring,
			};
		}
		case "fadeIn": {
			return {
				...(c ? { transform: c } : {}),
				opacity: enterSpring,
			};
		}
		case "breathe":
		default:
			return {
				transform: joinCssTransforms([c, `scale(${breatheScale})`]),
			};
	}
}

/**
 * 锚点列表布局常量（与 TemplateAnchorsLayer 中默认顶部锚点列表保持一致）
 */
export const ANCHOR_LIST_TOP_RATIO = 0.18;
/** 锚点词行高、间距（按 1080p 版心直接取值） */
export const ANCHOR_LIST_ROW_MIN_HEIGHT_PX = 56;
export const ANCHOR_LIST_ROW_GAP_PX = 16;
/** 与 BWImageBreath 一致：图片中心纵坐标为 top 45% + translate(-50%,-50%) */
export const SINGLE_IMAGE_CENTER_TOP_RATIO = 0.50;
/**
 * 布局用主图高度占比：锚点避让、CENTER_FOCUS 堆叠里「主图占位半高」只读此值。
 * 与 BWImageBreath 视觉版心 {@link SINGLE_IMAGE_BOX_MAX_HEIGHT_RATIO} 分离，避免调大图时锚点词跟着重排。
 */
export const SINGLE_IMAGE_MAX_HEIGHT_RATIO = 0.45;
/** BWImageBreath 视觉版心宽度占画布比例（不影响锚点布局数学） */
export const SINGLE_IMAGE_BOX_MAX_WIDTH_RATIO = 0.82;
/** BWImageBreath 视觉版心高度占画布比例（不影响锚点布局数学） */
export const SINGLE_IMAGE_BOX_MAX_HEIGHT_RATIO = 0.35;
export const SINGLE_IMAGE_ANCHOR_MIN_GAP_PX = 48;
/** 三个锚点时前两行用负 margin 收紧列表，需与 TemplateAnchorsLayer 一致 */
export const ANCHOR_LIST_THREE_ROWS_COMPACT_PX = 28;

/**
 * 锚点列表距顶比例：≥3 条时整体上移，避免与中部主图重叠（与 TemplateAnchorsLayer 同步）
 */
export function getAnchorListTopRatio(visibleAnchorCount: number): number {
	if (visibleAnchorCount >= 3) return 0.11;
	return ANCHOR_LIST_TOP_RATIO;
}

/** 第三条锚点出现后列表上移/收紧，与 TemplateAnchorsLayer 共用同一 spring */
export const ANCHOR_THREE_ROW_REFLOW_SPRING_CONFIG = {
	damping: 14,
	stiffness: 120,
	mass: 0.85,
} as const;
export const ANCHOR_THREE_ROW_REFLOW_DURATION_FRAMES = 26;

/**
 * 第三行锚点出现当帧为 0，随后过渡到 1（列表上移 + 前两行收紧完成）
 */
export function getAnchorThreeRowReflowProgress(
	frame: number,
	thirdAnchorStartFrame: number,
	fps: number,
): number {
	return spring({
		frame: frame - thirdAnchorStartFrame,
		fps,
		config: ANCHOR_THREE_ROW_REFLOW_SPRING_CONFIG,
		durationInFrames: ANCHOR_THREE_ROW_REFLOW_DURATION_FRAMES,
	});
}

function getVisibleAnchorItems(
	content: ContentItem[] | undefined,
	anchors: AnchorItem[] | undefined,
	frame: number,
): Array<AnchorItem & { startFrame: number }> {
	const contentItems = content ?? [];
	const anchorItems = anchors ?? [];
	return anchorItems
		.map((anchor) => ({
			...anchor,
			startFrame: contentItems[anchor.showFrom]?.startFrame,
		}))
		.filter(
			(item): item is AnchorItem & { startFrame: number } =>
				typeof item.startFrame === "number" && item.startFrame <= frame,
		)
		.sort((a, b) => a.startFrame - b.startFrame);
}

function getSingleImageAnchorAvoidanceShiftFromLayout({
	visibleAnchorCount,
	height,
	minGapPx,
	topRatio,
	verticalCompactPx,
}: {
	visibleAnchorCount: number;
	height: number;
	minGapPx: number;
	topRatio: number;
	verticalCompactPx: number;
}): number {
	if (visibleAnchorCount === 0) return 0;

	const anchorBottomPx =
		height * topRatio +
		visibleAnchorCount * ANCHOR_LIST_ROW_MIN_HEIGHT_PX +
		Math.max(0, visibleAnchorCount - 1) * ANCHOR_LIST_ROW_GAP_PX -
		verticalCompactPx;

	const imageTopPx =
		height * SINGLE_IMAGE_CENTER_TOP_RATIO -
		(height * SINGLE_IMAGE_MAX_HEIGHT_RATIO) / 2;
	const gapPx = imageTopPx - anchorBottomPx;
	/** 出现第二条锚点起主图再多下移一截，与单锚点留白区分 */
	const extraShiftTwoPlusPx =
		visibleAnchorCount >= 2 ? Math.round(height * 0.022) : 0;
	const targetGap = minGapPx + extraShiftTwoPlusPx;
	if (gapPx >= targetGap) return 0;
	return targetGap - gapPx;
}

function getSingleImageAnchorAvoidanceShiftByCount({
	visibleAnchorCount,
	height,
	minGapPx,
}: {
	visibleAnchorCount: number;
	height: number;
	minGapPx: number;
}): number {
	if (visibleAnchorCount === 0) return 0;
	return getSingleImageAnchorAvoidanceShiftFromLayout({
		visibleAnchorCount,
		height,
		minGapPx,
		topRatio: getAnchorListTopRatio(visibleAnchorCount),
		verticalCompactPx:
			visibleAnchorCount >= 3 ? ANCHOR_LIST_THREE_ROWS_COMPACT_PX : 0,
	});
}

/**
 * 单图模板锚点避让：当主图顶边与「最新出现锚点」所在区域底边间距 < minGapPx 时，向下补足差值。
 */
export function getSingleImageAnchorAvoidanceShiftPx({
	content,
	anchors,
	frame,
	height,
	minGapPx = SINGLE_IMAGE_ANCHOR_MIN_GAP_PX,
}: {
	content: ContentItem[] | undefined;
	anchors: AnchorItem[] | undefined;
	frame: number;
	height: number;
	minGapPx?: number;
}): number {
	const visibleAnchorCount = getVisibleAnchorItems(content, anchors, frame).length;
	return getSingleImageAnchorAvoidanceShiftByCount({
		visibleAnchorCount,
		height,
		minGapPx,
	});
}

/**
 * 单图模板锚点避让（动画版）：每个新锚点出现时，增量下移使用 spring 播放。
 */
export function getSingleImageAnchorAvoidanceShiftAnimatedPx({
	content,
	anchors,
	frame,
	fps,
	height,
	minGapPx = SINGLE_IMAGE_ANCHOR_MIN_GAP_PX,
}: {
	content: ContentItem[] | undefined;
	anchors: AnchorItem[] | undefined;
	frame: number;
	fps: number;
	height: number;
	minGapPx?: number;
}): number {
	const visibleAnchors = getVisibleAnchorItems(content, anchors, frame);
	if (visibleAnchors.length === 0) return 0;

	const shift2Target = getSingleImageAnchorAvoidanceShiftFromLayout({
		visibleAnchorCount: 2,
		height,
		minGapPx,
		topRatio: ANCHOR_LIST_TOP_RATIO,
		verticalCompactPx: 0,
	});

	let twoDone = 0;
	const nForTwoLoop = Math.min(visibleAnchors.length, 2);
	for (let i = 1; i <= nForTwoLoop; i++) {
		const prevShiftPx = getSingleImageAnchorAvoidanceShiftFromLayout({
			visibleAnchorCount: i - 1,
			height,
			minGapPx,
			topRatio: ANCHOR_LIST_TOP_RATIO,
			verticalCompactPx: 0,
		});
		const currentShiftPx = getSingleImageAnchorAvoidanceShiftFromLayout({
			visibleAnchorCount: i,
			height,
			minGapPx,
			topRatio: ANCHOR_LIST_TOP_RATIO,
			verticalCompactPx: 0,
		});
		const deltaShiftPx = Math.max(0, currentShiftPx - prevShiftPx);
		if (deltaShiftPx <= 0) continue;

		const startFrame = visibleAnchors[i - 1].startFrame;
		const progress = spring({
			frame: frame - startFrame,
			fps,
			config: { damping: 12, stiffness: 110, mass: 0.9 },
			durationInFrames: 22,
		});
		const animatedDeltaShiftPx = interpolate(progress, [0, 1], [0, deltaShiftPx], {
			extrapolateLeft: "clamp",
			extrapolateRight: "clamp",
		});
		twoDone += animatedDeltaShiftPx;
	}

	if (visibleAnchors.length < 3) {
		return twoDone;
	}

	const p = getAnchorThreeRowReflowProgress(
		frame,
		visibleAnchors[2].startFrame,
		fps,
	);
	const shift3Start = getSingleImageAnchorAvoidanceShiftFromLayout({
		visibleAnchorCount: 3,
		height,
		minGapPx,
		topRatio: ANCHOR_LIST_TOP_RATIO,
		verticalCompactPx: 0,
	});
	const shift3End = getSingleImageAnchorAvoidanceShiftFromLayout({
		visibleAnchorCount: 3,
		height,
		minGapPx,
		topRatio: getAnchorListTopRatio(3),
		verticalCompactPx: ANCHOR_LIST_THREE_ROWS_COMPACT_PX,
	});
	const reflowExtra = interpolate(p, [0, 1], [0, shift3End - shift3Start], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	});

	return twoDone + (shift3Start - shift2Target) + reflowExtra;
}

/**
 * CENTER_FOCUS 堆叠间距（单位 px）：
 * - 锚点行与锚点行之间（红框内行距）
 * - 最后一行锚点与主图顶边之间（绿框）
 */
export const CENTER_FOCUS_ANCHOR_ROW_GAP_PX = 62;
export const CENTER_FOCUS_ANCHOR_IMAGE_GAP_PX = 10;

const CENTER_FOCUS_STACK_SPRING_CONFIG = {
	damping: 14,
	stiffness: 120,
	mass: 0.85,
} as const;
const CENTER_FOCUS_STACK_TRANSITION_FRAMES = 24;

/**
 * CENTER_FOCUS：以 refY（默认 45% 高度）为整列视觉中心的均衡布局。
 * 自上而下为锚点 1…m，行距见 CENTER_FOCUS_ANCHOR_ROW_GAP_PX，最后一行与主图见 CENTER_FOCUS_ANCHOR_IMAGE_GAP_PX。
 */
export function computeCenterFocusEquilibrium(
	m: number,
	height: number,
	refY: number,
): { anchorCenters: number[]; imageCenter: number } {
	const gRow = CENTER_FOCUS_ANCHOR_ROW_GAP_PX;
	const gImg = CENTER_FOCUS_ANCHOR_IMAGE_GAP_PX;
	const r = ANCHOR_LIST_ROW_MIN_HEIGHT_PX;
	const imgHalf = (height * SINGLE_IMAGE_MAX_HEIGHT_RATIO) / 2;
	const step = r + gRow;
	if (m <= 0) {
		return { anchorCenters: [], imageCenter: refY };
	}
	const c1 =
		refY - ((m - 1) * step + gImg + 2 * imgHalf) / 2;
	const anchorCenters: number[] = [];
	for (let k = 0; k < m; k++) {
		anchorCenters.push(c1 + k * step);
	}
	const cImg =
		c1 + (m - 1) * step + r / 2 + gImg + imgHalf;
	return { anchorCenters, imageCenter: cImg };
}

/**
 * CENTER_FOCUS：主图中心 Y、各可见锚点行中心 Y（与 content/anchors 时间轴一致）。
 * 新锚点从 refY 出现，与上一稳态之间用 spring 过渡。
 */
export function getCenterFocusStackLayoutAtFrame({
	content,
	anchors,
	frame,
	fps,
	height,
}: {
	content: ContentItem[] | undefined;
	anchors: AnchorItem[] | undefined;
	frame: number;
	fps: number;
	height: number;
}): { anchorCenterYs: number[]; imageCenterY: number } {
	const refY = height * SINGLE_IMAGE_CENTER_TOP_RATIO;
	const visible = getVisibleAnchorItems(content, anchors, frame);
	const m = visible.length;
	if (m === 0) {
		return { anchorCenterYs: [], imageCenterY: refY };
	}
	const T = visible[m - 1].startFrame;
	const p = spring({
		frame: frame - T,
		fps,
		config: CENTER_FOCUS_STACK_SPRING_CONFIG,
		durationInFrames: CENTER_FOCUS_STACK_TRANSITION_FRAMES,
	});
	const eqPrev = computeCenterFocusEquilibrium(m - 1, height, refY);
	const eqNext = computeCenterFocusEquilibrium(m, height, refY);
	const startAnchors =
		m === 1 ? [refY] : [...eqPrev.anchorCenters, refY];
	const startImage = m === 1 ? refY : eqPrev.imageCenter;
	const anchorCenterYs = startAnchors.map((s, i) =>
		interpolate(p, [0, 1], [s, eqNext.anchorCenters[i]], {
			extrapolateLeft: "clamp",
			extrapolateRight: "clamp",
		}),
	);
	const imageCenterY = interpolate(p, [0, 1], [startImage, eqNext.imageCenter], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	});
	return { anchorCenterYs, imageCenterY };
}

/** 多图/时间轴中单图位置：居中 | 左 | 右 | 上 | 下 */
export type ImagePosition = "center" | "left" | "right" | "top" | "bottom";

/** 多图模板/时间轴中单条图片配置 */
export interface MultiImageItem {
	/** 图片地址 */
	src: string;
	/** 可选：在画布中的位置（部分模板会弱化该字段） */
	position?: ImagePosition;
	/** 可选入场效果，默认 breathe */
	enterEffect?: ImageEnterEffect;
	/** 可选：关联 content 的序号，命中后以该条文本 startFrame 作为图片出现时机 */
	textIndex?: number;
	/** 可选：相对序列起始的延迟帧（时间轴按此错峰出现） */
	startFrame?: number;
}

/** BEAT_SEQUENCE：节拍情绪，calm≈CENTER_FOCUS，alert≈ALERT 全屏微脉动 */
export type BeatStageTone = "calm" | "alert";

/** BEAT_SEQUENCE：与 content 第 i 条一一对应的配图与入场 */
export interface BeatStageItem {
	imageSrc: string;
	enterEffect?: ImageEnterEffect;
	tone?: BeatStageTone;
	/** 从第几条口播（content 0-based）开始显示该图；省略则与当前节拍下标 i 一致 */
	showFrom?: number;
}

/** PEER_INDUCT：横排前提项（无 tone，情绪由归纳行统一拉升） */
export interface PeerInductPremiseItem {
	imageSrc: string;
	enterEffect?: ImageEnterEffect;
	showFrom?: number;
}

/** PEER_INDUCT：单独一行的归纳配图 */
export interface PeerInductConclusionItem {
	imageSrc: string;
	enterEffect?: ImageEnterEffect;
	showFrom?: number;
	tone?: BeatStageTone;
}

// ─────────────────────────────────────────────────────────────
// 模板驱动架构：公共类型
// ─────────────────────────────────────────────────────────────

/** JSON Schema 风格子集：与 script_v5/param_schema_tools.py 约定一致 */
export type ParamSchemaType =
	| "string"
	| "number"
	| "integer"
	| "boolean"
	| "array"
	| "object";

export type ParamSchema = {
	type: ParamSchemaType;
	description?: string;
	/** 出图流水线：此类 string 视为图片提示词 */
	format?: "image_prompt";
	enum?: string[];
	default?: unknown;
	properties?: Record<string, ParamSchema>;
	required?: string[];
	items?: ParamSchema;
	minItems?: number;
	maxItems?: number;
};

/** 模板自描述元数据：供 Python 脚本扫描生成提示词与图片字段，与 template_registry 约定一致 */
export interface TemplateMeta {
	name: string;
	/** 适用场景、与相似模板差异、慎用、参数提示等均写入此单一字段 */
	description: string;
	psychology: string;
	image_count: number | string;
	componentExport?: string;
	/** 根节点须为 type: "object"；必填字段列在 required 中 */
	param_schema: ParamSchema;
	example: { template: string; param: Record<string, unknown> };
	content_min_items?: number;
	content_max_items?: number;
	content_anchor_required?: boolean;
}

/** content 数组中每条内容项（Step3 升级后的对象格式） */
export interface ContentItem {
	/** 文案文本 */
	text: string;
	/** 在音频中的起始帧 */
	startFrame: number;
	/** 持续帧数 */
	durationFrames: number;
}

/** 将 content 数组标准化为 ContentItem[] */
export function normalizeContent(content?: ContentItem[]): ContentItem[] {
	if (!content) return [];
	return content;
}

/** item 级锚点数据：与 content 同级，通过 showFrom 绑定字幕索引 */
export interface AnchorItem {
	/** 锚点文本 */
	text: string;
	/** 锚点出现起点：关联 content 的索引（0-based） */
	showFrom: number;
	/** 锚点颜色 */
	color?: string | null;
	/** 锚点动画 */
	anim?: "spring" | "slideUp" | "popIn" | "highlight" | null;
	/** 突出该锚点时的音效（与锚点出现时刻一致） */
	audioEffect?: string | null;
}

/** 顶层 param 锚点（与 content 同级）；需要展示锚点的模板应组合此接口并在模板内渲染 */
export interface TemplateAnchorsProps {
	anchors?: AnchorItem[];
}

/** 所有模板组件的公共 props */
export interface TemplateBaseProps {
	/** 文案内容数组（统一为 ContentItem 数组） */
	content?: ContentItem[];
	/** TTS 音频文件路径 */
	audioSrc?: string;
	/** 该 item 的总持续帧数 */
	totalDurationFrames?: number;
	/** 叠在布局上的子节点 */
	children?: React.ReactNode;
	/** 根节点样式覆盖 */
	style?: React.CSSProperties;
}
