import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCognitiveShift, BWTextFocus } from "../../../components";

// 效率碾压
const SCENE_DURATION = 188 + 80 + 132;

export const calculateScene7Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene7: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={188}>
                <BWCognitiveShift content={[{"text": "淘汰落后产能，", "startFrame": 0, "durationFrames": 42}, {"text": "从来不能只靠口号呼吁。", "startFrame": 41, "durationFrames": 63}, {"text": "只能靠更先进的效率去无情碾压。", "startFrame": 103, "durationFrames": 85}]} totalDurationFrames={188} notText={"口号呼吁"} butText={"先进效率碾压"} butSrc={staticFile("images/小米掀翻蚂蚁市场/scene_7_1.png")} notContentIndex={1} butContentIndex={2} />
            </Sequence>
            <Sequence from={188} durationInFrames={80}>
                <BWTextFocus content={[{"text": "一家伟大的企业，不仅要自己赢。", "startFrame": 0, "durationFrames": 80}]} totalDurationFrames={80} coreSentence={["一家伟大的企业，不仅要自己赢。"]} coreSentenceAnchors={[{"coreSentenceAnchor": "伟大的企业", "color": "#EF4444"}, {"coreSentenceAnchor": "自己赢", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={268} durationInFrames={132}>
                <BWTextFocus content={[{"text": "更要让它走过的每一寸泥土，", "startFrame": 0, "durationFrames": 59}, {"text": "都能长出更繁茂的产业森林。", "startFrame": 58, "durationFrames": 73}]} totalDurationFrames={132} coreSentence={["更要让它走过的每一寸泥土，", "都能长出更繁茂的产业森林。"]} coreSentenceAnchors={[{"coreSentenceAnchor": "长出", "color": "#EF4444"}, {"coreSentenceAnchor": "产业森林", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/小米掀翻蚂蚁市场/scene_7/scene_7.mp3")} />
        </AbsoluteFill>
    );
};
