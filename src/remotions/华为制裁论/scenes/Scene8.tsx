import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCognitiveShift, BWTextFocus } from "../../../components";

// 反转：站队问题
const SCENE_DURATION = 199 + 280 + 87;

export const calculateScene8Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene8: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={199}>
                <BWCognitiveShift content={[{"text": "所以你看，", "startFrame": 0, "durationFrames": 24}, {"text": "这不是一个\"谁对谁错\"的问题。", "startFrame": 24, "durationFrames": 60}, {"text": "这是一个\"你站在哪边，哪边就对\"的问题。", "startFrame": 84, "durationFrames": 115}]} totalDurationFrames={199} notText={"谁对谁错"} butText={"你站在哪边"} butSrc={staticFile("images/华为制裁论/scene_8_2.png")} notContentIndex={1} butContentIndex={2} />
            </Sequence>
            <Sequence from={199} durationInFrames={280}>
                <BWTextFocus content={[{"text": "但我想说的是——", "startFrame": 0, "durationFrames": 34}, {"text": "理解这些，", "startFrame": 33, "durationFrames": 32}, {"text": "不是为了让你选边站。", "startFrame": 65, "durationFrames": 51}, {"text": "而是下次再看到有人说\"一句话就能解释\"的时候，", "startFrame": 115, "durationFrames": 114}, {"text": "你能多想三秒钟。", "startFrame": 229, "durationFrames": 51}]} totalDurationFrames={280} coreSentence={[{"text": "理解这些，不是为了让你选边站。", "showFrom": 1}, {"text": "而是让你能多想三秒钟。", "showFrom": 3}]} coreSentenceAnchors={[{"coreSentenceAnchor": "选边站", "color": "#EF4444"}, {"coreSentenceAnchor": "多想三秒钟", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={479} durationInFrames={87}>
                <BWTextFocus content={[{"text": "这三秒钟，", "startFrame": 0, "durationFrames": 27}, {"text": "就是你和大多数人的区别。", "startFrame": 26, "durationFrames": 61}]} totalDurationFrames={87} coreSentence={[{"text": "这三秒钟，", "showFrom": 0}, {"text": "就是你和大多数人的区别。", "showFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "和大多数人的区别", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/华为制裁论/scene_8/scene_8.mp3")} />
        </AbsoluteFill>
    );
};
