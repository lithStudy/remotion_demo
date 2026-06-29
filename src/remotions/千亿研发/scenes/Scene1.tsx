import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWKpiHero, BWTextFocus } from "../../../components";

// 引入：虚假财报数据
const SCENE_DURATION = 211 + 79;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={211}>
                <BWKpiHero content={[{"text": "据财报显示，", "startFrame": 0, "durationFrames": 35}, {"text": "截止2026年6月份，", "startFrame": 34, "durationFrames": 55}, {"text": "仅仅半年不到，", "startFrame": 89, "durationFrames": 39}, {"text": "小米研发费用已投入3000亿元。", "startFrame": 127, "durationFrames": 83}]} totalDurationFrames={211} blocks={[{"value": 6, "suffix": "月", "label": "截止时间", "showFrom": 1, "decimalPlaces": 0}, {"value": 0.5, "suffix": "年", "label": "耗时不到", "showFrom": 2, "decimalPlaces": 1}, {"value": 3000, "suffix": "亿元", "label": "小米研发费用", "showFrom": 3, "useGrouping": true, "decimalPlaces": 0}]} countDuration={28} anchors={[]} />
            </Sequence>
            <Sequence from={211} durationInFrames={79}>
                <BWTextFocus content={[{"text": "太牛逼了，", "startFrame": 0, "durationFrames": 28}, {"text": "这就是中国的科技力量吗？", "startFrame": 27, "durationFrames": 52}]} totalDurationFrames={79} coreSentence={[{"text": "太牛逼了，", "showFrom": 0, "endFrom": 0}, {"text": "这就是中国的科技力量吗？", "showFrom": 1, "endFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "中国的科技力量", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/千亿研发/scene_1/scene_1.mp3")} />
        </AbsoluteFill>
    );
};
