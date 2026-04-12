/**
 * 默认顶部锚点列表 + 与锚点同步的音效；需要锚点的模板自行引入本组件。
 */
import React from "react";
import {
	Sequence,
	Audio,
	staticFile,
	interpolate,
	useCurrentFrame,
	useVideoConfig,
} from "remotion";
import {
	ANCHOR_LIST_ROW_GAP_PX,
	ANCHOR_LIST_ROW_MIN_HEIGHT_PX,
	ANCHOR_LIST_THREE_ROWS_COMPACT_PX,
	ANCHOR_LIST_TOP_RATIO,
	getAnchorListTopRatio,
	getAnchorThreeRowReflowProgress,
	type AnchorItem,
	type ContentItem,
} from "./shared";
import { BWAnchorWord } from "../common/BWPrimitives";
import { normalizeContent } from "./shared";

const DefaultAnchorWordList: React.FC<{
	items: Array<{
		text: string;
		startFrame: number;
		color?: string | null;
		anim?: "spring" | "slideUp" | "popIn" | "highlight" | null;
	}>;
}> = ({ items }) => {
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();
	const visible = items.filter((item) => item.startFrame <= frame);
	if (visible.length === 0) return null;
	const reflowP =
		visible.length >= 3
			? getAnchorThreeRowReflowProgress(frame, visible[2].startFrame, fps)
			: 0;
	const topRatio =
		visible.length >= 3
			? interpolate(
					reflowP,
					[0, 1],
					[ANCHOR_LIST_TOP_RATIO, getAnchorListTopRatio(3)],
					{ extrapolateLeft: "clamp", extrapolateRight: "clamp" },
				)
			: ANCHOR_LIST_TOP_RATIO;
	const compactHalf =
		visible.length >= 3
			? (ANCHOR_LIST_THREE_ROWS_COMPACT_PX / 2) * reflowP
			: 0;
	return (
		<div
			style={{
				position: "absolute",
				left: 0,
				right: 0,
				top: `${topRatio * 100}%`,
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				gap: ANCHOR_LIST_ROW_GAP_PX,
			}}
		>
			{visible.map((item, i) => (
				<div
					key={i}
					style={{
						minHeight: ANCHOR_LIST_ROW_MIN_HEIGHT_PX,
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						marginBottom:
							visible.length >= 3 && i < 2 ? -compactHalf : undefined,
					}}
				>
					<BWAnchorWord
						anchor={item.text}
						delay={item.startFrame}
						color={item.color || "#111111"}
						animStyle={item.anim || "spring"}
						style={{ position: "relative", top: 0 }}
					/>
				</div>
			))}
		</div>
	);
};

export const TemplateDefaultAnchors: React.FC<{
	content?: ContentItem[];
	anchors?: AnchorItem[];
}> = ({ content, anchors }) => {
	const items = normalizeContent(content);
	const anchorItems = (anchors ?? [])
		.map((anchor) => ({
			...anchor,
			startFrame: items[anchor.showFrom]?.startFrame,
		}))
		.filter(
			(item): item is AnchorItem & { startFrame: number } =>
				typeof item.startFrame === "number",
		)
		.sort((a, b) => a.startFrame - b.startFrame);
	if (anchorItems.length === 0) return null;
	return (
		<>
			<DefaultAnchorWordList items={anchorItems} />
			{(anchors ?? []).map((anchor) => {
				const startFrame = items[anchor.showFrom]?.startFrame;
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
