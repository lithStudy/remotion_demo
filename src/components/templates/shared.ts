/**
 * 模板公共常量、类型与入场动画 hook
 * 供各 BW 模板复用：背景/文字色、图片入场效果类型、多图项结构、useImageEnterStyle。
 */
import React from "react";
import { interpolate, spring } from "remotion";
import defaultImage from "./images/scene1_1.png";

/** 默认图片地址 */
export const DEFAULT_IMAGE = defaultImage;

/** 
 * 简单验证图片 src 是否为合法 URL 或本地路径/静态资源
 */
export function isValidImageSrc(src?: string): boolean {
	if (!src || typeof src !== "string" || src.trim() === "") return false;
	// 简单的正则表达式：匹配 http(s)://, data:image/, 或以 / 开头的路径，或包含常见图片后缀的字符串
	const urlPattern = /^(https?:\/\/|data:image\/|\/|static:|[a-zA-Z]:\\)/i;
	const extensionPattern = /\.(png|jpg|jpeg|gif|webp|svg|bmp)(\?.*)?$/i;

	// 如果符合 URL 协议或以 / 开头，或者看起来像是一个文件路径（包含后缀）
	return urlPattern.test(src) && extensionPattern.test(src);
}

/** 
 * 获取安全的图片地址：如果 src 无效，则返回默认图片
 */
export function getSafeImageSrc(src?: string): string {
	console.log("src", src);
	if (isValidImageSrc(src)) {
		return src!;
	}
	return DEFAULT_IMAGE;
}

/** 白底模板背景色 */
export const BW_BG = "#ffffff";
/** 主文字色 */
export const BW_TEXT = "#111111";

/** 图片入场效果：呼吸 | 左滑 | 下滑 | 放大 | 淡入 */
export type ImageEnterEffect = "breathe" | "slideLeft" | "slideBottom" | "zoomIn" | "fadeIn";

/**
 * 根据效果类型计算图片入场样式（位移、缩放、透明度）
 * @param effect 入场效果
 * @param frame 当前帧
 * @param fps 帧率
 * @param width 画布宽
 * @param height 画布高
 */
export function useImageEnterStyle(
	effect: ImageEnterEffect,
	frame: number,
	fps: number,
	width: number,
	height: number,
): React.CSSProperties {
	const enterSpring = spring({
		frame,
		fps,
		config: { damping: 60, stiffness: 180 },
		durationInFrames: 25,
	});
	// 呼吸：周期 75 帧（约 2.5s），吸气 0→30 放大，呼气 30→75 收回，幅度 1 ↔ 1.08
	const breatheCycle = 75;
	const breathePhase = frame % breatheCycle;
	const breatheScale = interpolate(
		breathePhase,
		[0, 30, 75],
		[1, 1.08, 1],
		{ extrapolateLeft: "clamp", extrapolateRight: "clamp" },
	);

	switch (effect) {
		case "slideLeft": {
			const tx = interpolate(enterSpring, [0, 1], [width * 0.5, 0]);
			return { transform: `translate(-50%, -50%) translateX(${tx}px)`, opacity: enterSpring };
		}
		case "slideBottom": {
			const ty = interpolate(enterSpring, [0, 1], [height * 0.25, 0]);
			return { transform: `translate(-50%, -50%) translateY(${ty}px)`, opacity: enterSpring };
		}
		case "zoomIn": {
			const sc = interpolate(enterSpring, [0, 1], [0.5, 1]);
			return { transform: `translate(-50%, -50%) scale(${sc})`, opacity: enterSpring };
		}
		case "fadeIn": {
			return { transform: "translate(-50%, -50%)", opacity: enterSpring };
		}
		case "breathe":
		default:
			return { transform: `translate(-50%, -50%) scale(${breatheScale})` };
	}
}

/**
 * 锚点列表布局常量（与 TemplateContentRenderer 中 AnchorWordList 保持一致）
 */
export const ANCHOR_LIST_TOP_RATIO = 0.18;
export const ANCHOR_LIST_ROW_MIN_HEIGHT_PX = 64;
export const ANCHOR_LIST_ROW_GAP_PX = 16;
export const SINGLE_IMAGE_CENTER_TOP_RATIO = 0.5;
export const SINGLE_IMAGE_MAX_HEIGHT_RATIO = 0.4;
export const SINGLE_IMAGE_ANCHOR_MIN_GAP_PX = 50;

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

	const anchorBottomPx =
		height * ANCHOR_LIST_TOP_RATIO +
		visibleAnchorCount * ANCHOR_LIST_ROW_MIN_HEIGHT_PX +
		Math.max(0, visibleAnchorCount - 1) * ANCHOR_LIST_ROW_GAP_PX;

	const imageTopPx =
		height * SINGLE_IMAGE_CENTER_TOP_RATIO -
		(height * SINGLE_IMAGE_MAX_HEIGHT_RATIO) / 2;
	const gapPx = imageTopPx - anchorBottomPx;
	if (gapPx >= minGapPx) return 0;
	return minGapPx - gapPx;
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

	let animatedShiftPx = 0;
	for (let i = 1; i <= visibleAnchors.length; i++) {
		const prevShiftPx = getSingleImageAnchorAvoidanceShiftByCount({
			visibleAnchorCount: i - 1,
			height,
			minGapPx,
		});
		const currentShiftPx = getSingleImageAnchorAvoidanceShiftByCount({
			visibleAnchorCount: i,
			height,
			minGapPx,
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
		animatedShiftPx += animatedDeltaShiftPx;
	}

	return animatedShiftPx;
}

/** 多图/时间轴中单图位置：居中 | 左 | 右 | 上 | 下 */
export type ImagePosition = "center" | "left" | "right" | "top" | "bottom";

/** 多图模板/时间轴中单条图片配置 */
export interface MultiImageItem {
	/** 图片地址 */
	src: string;
	/** 可选：在画布中的位置（MULTI_IMAGE 已不依赖该参数） */
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
}

// ─────────────────────────────────────────────────────────────
// 模板驱动架构：公共类型
// ─────────────────────────────────────────────────────────────

/** 模板自描述元数据：供 Python 脚本扫描生成提示词与图片字段，与 template_registry 约定一致 */
export interface TemplateMeta {
	name: string;
	/** 适用场景、与相似模板差异、慎用、参数提示等均写入此单一字段 */
	description: string;
	psychology: string;
	image_count: number | string;
	componentExport?: string;
	param_schema: Record<
		string,
		{
			type: string;
			required?: boolean;
			desc: string;
			values?: string[];
			default?: string;
		}
	>;
	required_extra_params: string[];
	example: { template: string; param: Record<string, unknown> };
	default_anchor_color: string;
	default_anchor_anim: string;
	default_audio_effect: string;
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
	/** 音效名称 */
	audioEffect?: string | null;
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
}

/** 所有模板组件的公共 props */
export interface TemplateBaseProps {
	/** 文案内容数组（统一为 ContentItem 数组） */
	content?: ContentItem[];
	/** 锚点数组（与 content 同级，showFrom 关联索引） */
	anchors?: AnchorItem[];
	/** TTS 音频文件路径 */
	audioSrc?: string;
	/** 该 item 的总持续帧数 */
	totalDurationFrames?: number;
	/** 叠在布局上的子节点 */
	children?: React.ReactNode;
	/** 根节点样式覆盖 */
	style?: React.CSSProperties;
}
