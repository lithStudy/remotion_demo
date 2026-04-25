/**
 * CHAT_BUBBLE 模板：社会投射，用户心声/痛点；支持单行或多行对话气泡
 */
import React, { useMemo } from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { BW_TEXT, type TemplateBaseProps } from "./shared";
import { normalizeContent, TemplateContentRenderer } from "./TemplateContentRenderer";

/** 多气泡模式下每一行的参数 */
export interface ChatBubbleRowParam {
	/** @deprecated 不参与渲染；左右头像固定为模板内置 SVG */
	imageSrc?: string;
	bubbleText?: string;
	/** 绑定 content 下标（0-based）；缺省为该行在 bubbles 数组中的下标 */
	showFrom?: number;
	/** 默认 left：头像在左；right：头像在右 */
	align?: "left" | "right";
}

export const templateMeta = {
	"name": "CHAT_BUBBLE",
	"componentExport": "BWChatBubble",
	"description":
		"适用：显式对话/弹幕/评论体/群聊体/角色化吐槽（如“我：…你：…”、“网友：…”、“评论：…”、“有人说：…”）的口吻表达，适合做共鸣痛点、用户反馈、反对意见、现场对话等。\n不适用：仅“你是不是也…”这类单句发问但整体仍是平铺叙述时（此时优先 CENTER_FOCUS）。\n差异：纯金句大字无对话感用 TEXT_FOCUS；需配图但非气泡口径用 CENTER_FOCUS。\n视觉：左右说话者头像为模板内置矢量 SVG（align=left 与 align=right 各一套），不加载外部图片。可选 bubbleText 覆盖气泡内文案；可选 showFrom 绑定 content 下标（0-based）。多对话：传 bubbles（数组），每项可含 bubbleText、showFrom、align；气泡在对应 content 条目的 startFrame 入场并保留。imageSrc 为可选遗留字段，仅占位/兼容旧脚本，不参与渲染。",
	"psychology": "社会投射",
	"image_count": "0",
	"param_schema": {
		"type": "object",
		"properties": {
			"imageSrc": {
				"type": "string",
				"description": "可选；兼容旧 scene-scripts，不参与渲染。头像固定为内置 SVG。",
			},
			"bubbleText": {
				"type": "string",
				"description":
					"可选；仅用于“气泡里显示的文本”。若传入，将覆盖气泡内默认显示的 content 当前条目文本；但不影响 content 用于时序/字幕渲染。",
			},
			"showFrom": {
				"type": "integer",
				"format": "content_index",
				"description": "可选；指定气泡展示的 content 下标（0-based，非帧数）。合法范围 0～(content 条数-1)，超出会被忽略并回退为按时间轴自动切换。",
			},
			"bubbles": {
				"type": "array",
				"description": "可选；多行对话。存在且非空时按多气泡纵向排列；每项可含 bubbleText、showFrom、align。",
				"items": {
					"type": "object",
					"properties": {
						"bubbleText": { "type": "string" },
						"showFrom": { "type": "integer", "format": "content_index" },
						"align": { "type": "string", "enum": ["left", "right"] },
					},
				},
			},
		},
		"required": [],
	},
	"example": {
		"template": "CHAT_BUBBLE",
		"param": {
			"bubbles": [
				{ "bubbleText": "我真的快被这事逼疯了……", "showFrom": 0, "align": "left" },
				{ "bubbleText": "别急，先把事实捋清。", "showFrom": 1, "align": "right" },
			],
		},
	},
} as const;

export interface BWChatBubbleProps extends TemplateBaseProps {
	/** @deprecated 不参与渲染；兼容旧 scene-scripts */
	imageSrc?: string;
	/**
	 * 可选：仅用于气泡里展示的文本。
	 * 不会改变 `content` 本身（`content` 仍用于时序/字幕渲染）。
	 */
	bubbleText?: string;
	/**
	 * 可选：指定气泡展示的 content 下标（0-based）。
	 * 超出范围将忽略并回退为按时间轴自动切换。
	 */
	showFrom?: number;
	/** 多行对话；存在且非空时启用多气泡布局 */
	bubbles?: ChatBubbleRowParam[];
}

function clampIndex(index: number, length: number): number {
	if (length <= 0) return 0;
	return Math.min(Math.max(0, Math.floor(index)), length - 1);
}

function rowEnterFrame(items: ReturnType<typeof normalizeContent>, showFrom: number): number {
	const idx = clampIndex(showFrom, items.length);
	return items[idx]?.startFrame ?? 0;
}

/**
 * 单行气泡块估算高度（用于多行时 paddingTop 动画）。
 * 不可显著大于真实高度：否则会 total > layoutMax，paddingTop 恒为 0，多行落定后整块顶在槽内最上（视觉「偏高」）。
 */
function estimateBubbleRowBlockPx(avatarPx: number, fontSize: number, rowGap: number): number {
	const textBlock = Math.min(fontSize * 1.4 * 2.4 + 72, 210);
	return Math.min(Math.round(Math.max(avatarPx, textBlock + Math.round(avatarPx * 0.15)) + rowGap * 0.3), 308);
}

/** 多行（≥2）时在居中 padding 上略加码，避免贴顶；过大则整块偏低 */
const MULTI_STACK_PAD_BONUS_PX = 12;

function padForStackedRowCount(
	n: number,
	layoutMaxPx: number,
	rowEst: number,
	betweenRowsGap: number,
): number {
	if (n <= 0) return 0;
	const total = n * rowEst + (n - 1) * betweenRowsGap;
	const base = Math.max(0, (layoutMaxPx - total) * 0.25);
	return base + (n >= 2 ? MULTI_STACK_PAD_BONUS_PX : 0);
}

/** 新行入场时，用 spring 把 paddingTop 从「少一行时的居中」过渡到「多一行时的居中」，已有行随之平滑上移 */
function computeMultiBubblePadTop(args: {
	frame: number;
	fps: number;
	rowEnterFrames: number[];
	layoutMaxPx: number;
	rowEst: number;
	betweenRowsGap: number;
}): number {
	const { frame, fps, rowEnterFrames, layoutMaxPx, rowEst, betweenRowsGap } = args;
	let n = 0;
	for (let i = 0; i < rowEnterFrames.length; i++) {
		if (frame >= rowEnterFrames[i]) n++;
	}
	if (n <= 1) return padForStackedRowCount(1, layoutMaxPx, rowEst, betweenRowsGap);

	const revealFrame = rowEnterFrames[n - 1]!;
	const fromPad = padForStackedRowCount(n - 1, layoutMaxPx, rowEst, betweenRowsGap);
	const toPad = padForStackedRowCount(n, layoutMaxPx, rowEst, betweenRowsGap);
	const t = spring({
		frame: frame - revealFrame,
		fps,
		config: { damping: 26, stiffness: 180 },
		durationInFrames: 22,
	});
	return interpolate(t, [0, 1], [fromPad, toPad], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
}

const AVATAR_INK = "#111111";
const AVATAR_PAPER = "#ffffff";

/** 内置头像：左发言者（短发轮廓 + 圆点眼） */
function ChatBubbleAvatarSvgLeft({ sizePx }: { sizePx: number }): React.ReactElement {
	const s = Math.round(sizePx * 0.58);
	return (
		<svg width={s} height={s} viewBox="0 0 100 100" style={{ display: "block" }} aria-hidden>
			<circle cx="50" cy="56" r="28" fill={AVATAR_PAPER} stroke={AVATAR_INK} strokeWidth="3" />
			<path
				d="M 28 50 Q 50 14 72 50"
				fill="none"
				stroke={AVATAR_INK}
				strokeWidth="3"
				strokeLinecap="round"
			/>
			<circle cx="40" cy="56" r="4" fill={AVATAR_INK} />
			<circle cx="60" cy="56" r="4" fill={AVATAR_INK} />
			<path
				d="M 38 70 Q 50 80 62 70"
				fill="none"
				stroke={AVATAR_INK}
				strokeWidth="3"
				strokeLinecap="round"
			/>
		</svg>
	);
}

/** 内置头像：右发言者（平刘海 + 方框眼镜） */
function ChatBubbleAvatarSvgRight({ sizePx }: { sizePx: number }): React.ReactElement {
	const s = Math.round(sizePx * 0.58);
	return (
		<svg width={s} height={s} viewBox="0 0 100 100" style={{ display: "block" }} aria-hidden>
			<circle cx="50" cy="56" r="28" fill={AVATAR_PAPER} stroke={AVATAR_INK} strokeWidth="3" />
			<path
				d="M 24 44 Q 50 30 76 44"
				fill="none"
				stroke={AVATAR_INK}
				strokeWidth="3"
				strokeLinecap="round"
			/>
			<rect x="29" y="49" width="19" height="13" rx="3" fill="none" stroke={AVATAR_INK} strokeWidth="2.5" />
			<rect x="52" y="49" width="19" height="13" rx="3" fill="none" stroke={AVATAR_INK} strokeWidth="2.5" />
			<line x1="48" y1="55" x2="52" y2="55" stroke={AVATAR_INK} strokeWidth="2.5" strokeLinecap="round" />
			<circle cx="40" cy="68" r="3.5" fill={AVATAR_INK} />
			<circle cx="60" cy="68" r="3.5" fill={AVATAR_INK} />
			<path
				d="M 40 76 Q 50 82 60 76"
				fill="none"
				stroke={AVATAR_INK}
				strokeWidth="2.5"
				strokeLinecap="round"
			/>
		</svg>
	);
}

function ChatBubbleRowVisual(props: {
	frame: number;
	fps: number;
	enterFrame: number;
	align: "left" | "right";
	fontSize: number;
	avatarPx: number;
	gap: number;
	horizontalPad: string;
	renderBubbleInner: () => React.ReactNode;
}): React.ReactElement {
	const { frame, fps, enterFrame, align, fontSize, avatarPx, gap, horizontalPad, renderBubbleInner } = props;
	const localFrame = frame - enterFrame;
	const avatarSpring = spring({
		frame: localFrame,
		fps,
		config: { damping: 60, stiffness: 200 },
		durationInFrames: 20,
	});
	const avatarX = interpolate(avatarSpring, [0, 1], [align === "left" ? -300 : 300, 0], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	});
	const bubbleSpring = spring({
		frame: localFrame - 8,
		fps,
		config: { damping: 60, stiffness: 200 },
		durationInFrames: 20,
	});
	const bubbleScale = interpolate(bubbleSpring, [0, 1], [0.7, 1], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	});
	const isRight = align === "right";
	const bubbleRadius = isRight ? "32px 32px 8px 32px" : "32px 32px 32px 8px";
	const bubbleOrigin = isRight ? "bottom right" : "bottom left";

	const avatarBlock = (
		<div
			style={{
				width: avatarPx,
				height: avatarPx,
				borderRadius: "50%",
				backgroundColor: "#e0e4eb",
				border: "5px solid #111111",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				flexShrink: 0,
				transform: `translateX(${avatarX}px)`,
				opacity: avatarSpring,
			}}
		>
			{align === "right" ? (
				<ChatBubbleAvatarSvgRight sizePx={avatarPx} />
			) : (
				<ChatBubbleAvatarSvgLeft sizePx={avatarPx} />
			)}
		</div>
	);

	const bubbleBlock = (
		<div
			style={{
				flex: 1,
				backgroundColor: "#ffffff",
				border: "4px solid #111111",
				borderRadius: bubbleRadius,
				padding: "28px 40px",
				boxShadow: "8px 8px 0 #111111",
				transform: `scale(${bubbleScale})`,
				transformOrigin: bubbleOrigin,
				opacity: bubbleSpring,
				minHeight: Math.round(avatarPx * 0.62),
			}}
		>
			<span style={{ color: BW_TEXT, fontSize, fontWeight: 600, lineHeight: 1.4 }}>{renderBubbleInner()}</span>
		</div>
	);

	return (
		<div
			style={{
				display: "flex",
				flexDirection: isRight ? "row-reverse" : "row",
				alignItems: "flex-end",
				gap,
				padding: horizontalPad,
				width: "100%",
			}}
		>
			{avatarBlock}
			{bubbleBlock}
		</div>
	);
}

export const BWChatBubble: React.FC<BWChatBubbleProps> = ({
	bubbleText,
	showFrom,
	bubbles,
	content,
	audioSrc,
	children,
	style,
}) => {
	const frame = useCurrentFrame();
	const { fps, height } = useVideoConfig();
	const items = normalizeContent(content);

	const activeIndex = items.findIndex((it) => frame >= it.startFrame && frame < it.startFrame + it.durationFrames);
	const safeActiveIndex = activeIndex >= 0 ? activeIndex : 0;
	const inRangeShowFrom =
		typeof showFrom === "number" && Number.isFinite(showFrom) && showFrom >= 0 && showFrom < items.length;
	const bubbleIndex = inRangeShowFrom ? showFrom! : safeActiveIndex;
	const activeItem = items[bubbleIndex];

	const multiRows = useMemo(() => {
		if (!bubbles || bubbles.length === 0) return null;
		return bubbles.map((b, i) => {
			const show = typeof b.showFrom === "number" && Number.isFinite(b.showFrom) ? Math.floor(b.showFrom) : i;
			return {
				key: i,
				bubbleText: b.bubbleText,
				showFrom: clampIndex(show, Math.max(items.length, 1)),
				align: b.align === "right" ? ("right" as const) : ("left" as const),
			};
		});
	}, [bubbles, items.length]);

	const rowEnterFrames = useMemo(() => {
		if (!multiRows) return [];
		const it = normalizeContent(content);
		return multiRows.map((row) => (it.length > 0 ? rowEnterFrame(it, row.showFrom) : 0));
	}, [multiRows, content]);

	const rowCount = multiRows?.length ?? 1;
	const fontSize = rowCount <= 1 ? 72 : rowCount === 2 ? 64 : 56;
	const avatarPx = rowCount <= 1 ? 168 : 140;
	const rowGap = rowCount <= 1 ? 32 : 22;
	/** 多气泡时：相邻两组（行）之间的垂直间距 */
	const betweenBubbleRowsGap = rowCount <= 1 ? 0 : rowCount === 2 ? 52 : 44;
	/** 气泡区与字幕/TTS 层之间的间距 */
	const bubbleStackToSubtitleGap = 20;
	/** 版心左右各留白 300px（1920 画布下内容区约 1320px） */
	const horizontalPad = "0 300px";

	const layoutMaxPx = Math.round(height * (rowCount > 2 ? 0.78 : 0.68));
	const rowBlockEstPx = estimateBubbleRowBlockPx(avatarPx, fontSize, rowGap);
	const multiPadTop =
		multiRows && multiRows.length > 0
			? computeMultiBubblePadTop({
					frame,
					fps,
					rowEnterFrames,
					layoutMaxPx,
					rowEst: rowBlockEstPx,
					betweenRowsGap: betweenBubbleRowsGap,
				})
			: 0;

	const renderSingleBubbleContent = () => {
		if (bubbleText) {
			const triggerFrame = inRangeShowFrom ? items[showFrom!].startFrame : (activeItem?.startFrame ?? 0);
			if (frame < triggerFrame) return children;
			return bubbleText;
		}
		const textFromContent = activeItem?.text;
		if (!textFromContent) return children;
		return textFromContent;
	};

	if (multiRows && multiRows.length > 0) {
		return (
			<AbsoluteFill
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "flex-start",
					gap: bubbleStackToSubtitleGap,
					paddingTop: "6%",
					paddingBottom: rowCount > 2 ? 24 : 0,
					boxSizing: "border-box",
					...style,
				}}
			>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "stretch",
						width: "100%",
						height: layoutMaxPx,
						maxHeight: layoutMaxPx,
						boxSizing: "border-box",
						overflow: "hidden",
						paddingTop: multiPadTop,
						gap: betweenBubbleRowsGap,
					}}
				>
					{multiRows.map((row) => {
						const enterFrame = items.length > 0 ? rowEnterFrame(items, row.showFrom) : 0;
						if (frame < enterFrame) return null;
						const cue = items[row.showFrom];

						const renderInner = () => {
							if (row.bubbleText) return row.bubbleText;
							return cue?.text ?? null;
						};

						return (
							<ChatBubbleRowVisual
								key={row.key}
								frame={frame}
								fps={fps}
								enterFrame={enterFrame}
								align={row.align}
								fontSize={fontSize}
								avatarPx={avatarPx}
								gap={rowGap}
								horizontalPad={horizontalPad}
								renderBubbleInner={renderInner}
							/>
						);
					})}
				</div>
				<TemplateContentRenderer content={content} audioSrc={audioSrc} />
			</AbsoluteFill>
		);
	}

	return (
		<AbsoluteFill
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "flex-start",
				paddingTop: "4%",
				...style,
			}}
		>
			<div
				style={{
					display: "flex",
					alignItems: "flex-end",
					width: "100%",
					maxHeight: "68%",
				}}
			>
				<ChatBubbleRowVisual
					frame={frame}
					fps={fps}
					enterFrame={0}
					align="left"
					fontSize={fontSize}
					avatarPx={avatarPx}
					gap={rowGap}
					horizontalPad={horizontalPad}
					renderBubbleInner={renderSingleBubbleContent}
				/>
			</div>
			<TemplateContentRenderer content={content} audioSrc={audioSrc} />
		</AbsoluteFill>
	);
};
