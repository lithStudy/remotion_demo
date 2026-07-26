/**
 * PUNCH_CAPTION 模板：连击质问 — 居中纯黑大字逐句暴击，保留底部小字幕。
 * 适用：2~6 条短促反问/反驳/情绪递进；0 图。
 * 大屏文案以 param.punches[].text 为准，showFrom 对齐 content 下标决定出现时机；口播/底字幕仍走 content[]。
 */
import React from "react";
import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from "remotion";
import {
	BW_TEXT,
	normalizeContent,
	type AnchorItem,
	type ContentItem,
	type TemplateAnchorsProps,
	type TemplateBaseProps,
} from "./shared";
import { TemplateContentRenderer } from "./TemplateContentRenderer";

export type PunchEnterEffect = "snap" | "popIn" | "slideUp" | "shake";
export type PunchTone = "calm" | "alert";

export interface PunchCaptionItem {
	/** 居中暴击大字文案（可与 content 口播措辞不同，宜更短更有力） */
	text: string;
	/** 从第几条口播（content 0-based）的 startFrame 起显示本句 */
	showFrom: number;
	enterEffect?: PunchEnterEffect;
	tone?: PunchTone;
}

export const templateMeta = {
	"name": "PUNCH_CAPTION",
	"componentExport": "BWPunchCaption",
	"description":
		"适用：2~6 条短促反问/反驳/情绪连击；居中纯黑大字逐句弹入，保留底部小字幕。\n差异：单句金句暴击用 TEXT_FOCUS；多图节拍递进用 BEAT_SEQUENCE；本模板 0 图、一句一帧一冲击。\n参数：punches 必填，每项 text（大屏文案）+ showFrom（content 下标）必填；可选 enterEffect（snap|popIn|slideUp|shake）、tone（calm|alert）。省略 tone 时首条 calm、其余 alert。",
	"chinese_name": "暴击大字连击",
	"image_count": 0,
	"param_schema": {
		"type": "object",
		"properties": {
			"punches": {
				"type": "array",
				"minItems": 2,
				"maxItems": 6,
				"description":
					"暴击大字序列；每项 text 为居中主文案，showFrom 为 content 下标（0-based）；enterEffect、tone 可选",
				"items": {
					"type": "object",
					"required": ["text", "showFrom"],
					"properties": {
						"text": {
							"type": "string",
							"description": "居中暴击大字；可与 content 口播措辞不同，宜更短",
						},
						"showFrom": {
							"type": "content_index",
							"minimum": 0,
							"description":
								"镜头 item 外层 content 数组（与 param 同级）的 0-based 下标；从该条 startFrame 起显示本句",
						},
						"enterEffect": {
							"type": "string",
							"enum": ["snap", "popIn", "slideUp", "shake"],
							"default": "snap",
							"description": "入场效果",
						},
						"tone": {
							"type": "string",
							"enum": ["calm", "alert"],
							"description": "首条可 calm，其余默认可 alert",
						},
					},
				},
			},
		},
		"required": ["punches"],
	},
	"example": {
		"template": "PUNCH_CAPTION",
		"param": {
			"punches": [
				{ "text": "什么？", "showFrom": 0, "enterEffect": "popIn", "tone": "calm" },
				{ "text": "你说我瞎说？", "showFrom": 1, "enterEffect": "snap", "tone": "alert" },
				{ "text": "不信科技力量？", "showFrom": 2, "enterEffect": "shake", "tone": "alert" },
			],
		},
	},
	"content_min_items": 2,
	"content_max_items": 6,
} as const;

export type BWPunchCaptionProps = TemplateBaseProps &
	TemplateAnchorsProps & {
		punches: PunchCaptionItem[];
	};

const PUNCH_ENTER_FRAMES = 8;
const PUNCH_EXIT_FRAMES = 4;
const SHAKE_OSCILLATION_FRAMES = 12;

type ResolvedPunch = {
	text: string;
	showFrom: number;
	enterEffect: PunchEnterEffect;
	tone: PunchTone;
	startFrame: number;
	endFrame: number | null;
};

function parseContentIndex(v: unknown, fallback: number, max: number): number {
	if (typeof v === "number" && Number.isInteger(v) && v >= 0) {
		return Math.min(v, max);
	}
	return Math.min(Math.max(0, fallback), max);
}

function resolvePunchTone(punch: PunchCaptionItem, index: number): PunchTone {
	if (punch.tone) return punch.tone;
	return index === 0 ? "calm" : "alert";
}

function resolvePunchEnterEffect(
	punch: PunchCaptionItem,
	tone: PunchTone,
): PunchEnterEffect {
	if (punch.enterEffect) return punch.enterEffect;
	return tone === "alert" ? "shake" : "snap";
}

function resolvePunchFontSize(text: string): number {
	const charCount = Math.max(1, [...text].length);
	return interpolate(
		charCount,
		[2, 6, 10, 16, 22],
		[140, 120, 100, 84, 72],
		{ extrapolateLeft: "clamp", extrapolateRight: "clamp" },
	);
}

/** 规范 punches：text 非空、showFrom 合法；非法项跳过 */
export function normalizePunchItems(
	punches: PunchCaptionItem[] | undefined,
	contentItems: ContentItem[],
): Omit<ResolvedPunch, "startFrame" | "endFrame" | "enterEffect" | "tone">[] {
	if (!punches?.length) return [];
	const max = Math.max(0, contentItems.length - 1);
	const out: Array<{ text: string; showFrom: number }> = [];
	for (let i = 0; i < punches.length; i++) {
		const raw = punches[i];
		const text = typeof raw?.text === "string" ? raw.text.trim() : "";
		if (!text) continue;
		out.push({
			text,
			showFrom: parseContentIndex(raw.showFrom, i, max),
		});
	}
	return out;
}

function buildResolvedPunches(
	punches: PunchCaptionItem[],
	contentItems: ContentItem[],
): ResolvedPunch[] {
	const max = Math.max(0, contentItems.length - 1);
	const valid: Array<{ raw: PunchCaptionItem; showFrom: number; text: string }> = [];
	for (let i = 0; i < punches.length; i++) {
		const raw = punches[i];
		const text = typeof raw?.text === "string" ? raw.text.trim() : "";
		if (!text) continue;
		valid.push({
			raw,
			text,
			showFrom: parseContentIndex(raw.showFrom, i, max),
		});
	}
	return valid.map((item, i) => {
		const tone = resolvePunchTone(item.raw, i);
		const enterEffect = resolvePunchEnterEffect(item.raw, tone);
		const startFrame = contentItems[item.showFrom]?.startFrame ?? 0;
		let endFrame: number | null = null;
		if (i + 1 < valid.length) {
			const nextShowFrom = valid[i + 1].showFrom;
			endFrame = contentItems[nextShowFrom]?.startFrame ?? null;
		}
		return {
			text: item.text,
			showFrom: item.showFrom,
			tone,
			enterEffect,
			startFrame,
			endFrame,
		};
	});
}

function applyAnchorsToLine(
	line: string,
	anchors: AnchorItem[] | undefined,
	contentIndex: number,
	lineKeyPrefix: string,
): React.ReactNode[] {
	const matched = (anchors ?? []).filter((a) => a.showFrom === contentIndex && a.text?.trim());
	return matched.reduce<React.ReactNode[]>(
		(nodes, item, anchorIdx) => {
			const phrase = item.text.trim();
			return nodes.flatMap((node, nodeIdx) => {
				if (typeof node !== "string") return [node];
				const parts = node.split(phrase);
				if (parts.length === 1) return [node];
				const mapped: React.ReactNode[] = [];
				parts.forEach((part, j) => {
					mapped.push(part);
					if (j < parts.length - 1) {
						mapped.push(
							<span
								key={`${lineKeyPrefix}-a-${anchorIdx}-${nodeIdx}-${j}`}
								style={{ color: item.color || "#EF4444" }}
							>
								{phrase}
							</span>,
						);
					}
				});
				return mapped;
			});
		},
		[line],
	);
}

const PunchCaptionLine: React.FC<{
	text: string;
	startFrame: number;
	endFrame: number | null;
	enterEffect: PunchEnterEffect;
	tone: PunchTone;
	fontSize: number;
	anchors?: AnchorItem[];
	contentIndex: number;
}> = ({
	text,
	startFrame,
	endFrame,
	enterEffect,
	tone,
	fontSize,
	anchors,
	contentIndex,
}) => {
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();
	const rel = frame - startFrame;

	const enterProgress = spring({
		frame: rel,
		fps,
		config: { damping: 14, stiffness: 280, mass: 0.7 },
		durationInFrames: PUNCH_ENTER_FRAMES,
	});

	let translateX = 0;
	let translateY = 0;
	let scale = 1;

	switch (enterEffect) {
		case "popIn":
			scale = interpolate(enterProgress, [0, 1], [0.25, 1], {
				extrapolateLeft: "clamp",
				extrapolateRight: "clamp",
			});
			break;
		case "slideUp":
			translateY = interpolate(enterProgress, [0, 1], [50, 0], {
				extrapolateLeft: "clamp",
				extrapolateRight: "clamp",
			});
			scale = interpolate(enterProgress, [0, 1], [0.92, 1], {
				extrapolateLeft: "clamp",
				extrapolateRight: "clamp",
			});
			break;
		case "shake":
			scale = interpolate(enterProgress, [0, 1], [0.85, 1], {
				extrapolateLeft: "clamp",
				extrapolateRight: "clamp",
			});
			if (rel >= 0 && rel < SHAKE_OSCILLATION_FRAMES) {
				translateX = Math.sin(rel * 1.8) * 5 * (1 - rel / SHAKE_OSCILLATION_FRAMES);
			}
			break;
		case "snap":
		default:
			scale = interpolate(enterProgress, [0, 0.6, 1], [0.85, 1.06, 1], {
				extrapolateLeft: "clamp",
				extrapolateRight: "clamp",
			});
			break;
	}

	const enterOpacity = interpolate(enterProgress, [0, 1], [0, 1], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	});

	const exitOpacity =
		endFrame == null
			? 1
			: interpolate(frame, [endFrame, endFrame + PUNCH_EXIT_FRAMES], [1, 0], {
					extrapolateLeft: "clamp",
					extrapolateRight: "clamp",
				});

	const exitScale =
		endFrame == null
			? 1
			: interpolate(frame, [endFrame, endFrame + PUNCH_EXIT_FRAMES], [1, 0.92], {
					extrapolateLeft: "clamp",
					extrapolateRight: "clamp",
				});

	const flashOpacity =
		tone === "alert" && rel >= 0 && rel < 10
			? interpolate(rel, [0, 3, 10], [0.18, 0.12, 0], {
					extrapolateLeft: "clamp",
					extrapolateRight: "clamp",
				})
			: 0;

	if (rel < 0) return null;

	const combinedOpacity = enterOpacity * exitOpacity;
	if (combinedOpacity <= 0.001) return null;

	return (
		<>
			{flashOpacity > 0 && (
				<div
					style={{
						position: "absolute",
						inset: 0,
						background: `radial-gradient(circle at 50% 45%, rgba(0,0,0,${flashOpacity}) 0%, transparent 55%)`,
						pointerEvents: "none",
					}}
				/>
			)}
			<div
				style={{
					position: "absolute",
					left: 0,
					right: 0,
					top: "42%",
					transform: "translateY(-50%)",
					display: "flex",
					justifyContent: "center",
					padding: "0 64px",
					opacity: combinedOpacity,
				}}
			>
				<div
					style={{
						transform: `translate(${translateX}px, ${translateY}px) scale(${scale * exitScale})`,
						transformOrigin: "center center",
						textAlign: "center",
						fontSize,
						fontWeight: 900,
						color: BW_TEXT,
						lineHeight: 1.25,
						letterSpacing: "0.04em",
						fontFamily:
							'"Microsoft YaHei", "PingFang SC", "Noto Sans SC", sans-serif',
					}}
				>
					{applyAnchorsToLine(text, anchors, contentIndex, `p${contentIndex}`)}
				</div>
			</div>
		</>
	);
};

export const BWPunchCaption: React.FC<BWPunchCaptionProps> = ({
	punches,
	content,
	anchors,
	audioSrc,
	children,
	style,
}) => {
	const items = normalizeContent(content);
	const resolved = buildResolvedPunches(punches ?? [], items);

	return (
		<AbsoluteFill style={style}>
			{resolved.map((cfg, i) => (
				<PunchCaptionLine
					key={`punch-${cfg.showFrom}-${i}`}
					text={cfg.text}
					startFrame={cfg.startFrame}
					endFrame={cfg.endFrame}
					enterEffect={cfg.enterEffect}
					tone={cfg.tone}
					fontSize={resolvePunchFontSize(cfg.text)}
					anchors={anchors}
					contentIndex={cfg.showFrom}
				/>
			))}

			<TemplateContentRenderer content={content} audioSrc={audioSrc} />
			{children}
		</AbsoluteFill>
	);
};
