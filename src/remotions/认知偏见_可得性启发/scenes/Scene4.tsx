import React from "react";
import { AbsoluteFill, Sequence, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift } from "../../../components";

// 反转·车祸与慢性病（与 scene-scripts.json scene_4 对齐）
const D_CENTER_1 = 204;
const D_CENTER_2 = 101;
const D_COGNITIVE = 147;
const SCENE_DURATION = D_CENTER_1 + D_CENTER_2 + D_COGNITIVE;

const center1Content = [
	{ text: "因为空难极其惨烈且被疯狂报道。", startFrame: 138, durationFrames: 33 },
	{ text: "所以它在你的记忆库里特别鲜活。", startFrame: 171, durationFrames: 33 },
	{ text: "你的大脑一秒钟就能调取恐怖画面。", startFrame: 0, durationFrames: 35 },
	{ text: "于是立刻得出坐飞机随时会掉的结论。", startFrame: 35, durationFrames: 37 },
] as const;

const center2Content = [
	{ text: "但事实上车祸的死亡人数要多得多。", startFrame: 0, durationFrames: 35 },
	{ text: "只因为车祸太常见上不了头条。", startFrame: 35, durationFrames: 31 },
	{ text: "你的大脑就自动忽略了它的危险性。", startFrame: 66, durationFrames: 35 },
] as const;

const cognitiveContent = [
	{ text: "同理凶杀案频发让你觉得治安极差。", startFrame: 35, durationFrames: 35 },
	{ text: "却没想过慢性病才是真正的隐形杀手。", startFrame: 70, durationFrames: 37 },
	{ text: "就像靠新闻联播来判断天气注定会出错。", startFrame: 107, durationFrames: 40 },
] as const;

const center1Anchors = [
	{ text: "可得性启发", showFrom: 0, color: "#EF4444", anim: "spring" as const, audioEffect: "impact_thud" as const },
	{ text: "车祸", showFrom: 2, color: "#000000", anim: "popIn" as const, audioEffect: "ping" as const },
];

const center2Anchors = [
	{ text: "车祸", showFrom: 0, color: "#000000", anim: "popIn" as const, audioEffect: "ping" as const },
];

export const calculateScene4Duration = (): number => {
	return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
	return (
		<AbsoluteFill>
			<Sequence from={0} durationInFrames={D_CENTER_1}>
				<BWCenterFocus
					content={[...center1Content]}
					totalDurationFrames={D_CENTER_1}
					imageSrc={staticFile("飞机和车祸的对比示意图")}
					enterEffect="fadeIn"
					anchors={[...center1Anchors]}
				/>
			</Sequence>
			<Sequence from={D_CENTER_1} durationInFrames={D_CENTER_2}>
				<BWCenterFocus
					content={[...center2Content]}
					totalDurationFrames={D_CENTER_2}
					imageSrc={staticFile("飞机和车祸的对比示意图")}
					enterEffect="fadeIn"
					anchors={[...center2Anchors]}
				/>
			</Sequence>
			<Sequence from={D_CENTER_1 + D_CENTER_2} durationInFrames={D_COGNITIVE}>
				<BWCognitiveShift
					content={[...cognitiveContent]}
					totalDurationFrames={D_COGNITIVE}
					notText="治安极差"
					butText="慢性病杀手"
					butSrc={staticFile("戴着面具的幽灵医生")}
					notContentIndex={0}
					butContentIndex={1}
					anchors={[]}
				/>
			</Sequence>
		</AbsoluteFill>
	);
};
