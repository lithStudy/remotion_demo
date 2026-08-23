import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCognitiveShift, BWTextFocus } from "../../../components";

// 反转：站队问题
const SCENE_DURATION = 168 + 233 + 75;

export const calculateScene8Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene8: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={168}>
                <BWCognitiveShift content={[{"text": "所以你看，", "startFrame": 0, "durationFrames": 21}, {"text": "这不是一个\"谁对谁错\"的问题。", "startFrame": 20, "durationFrames": 63}, {"text": "这是一个\"你站在哪边，哪边就对\"的问题。", "startFrame": 82, "durationFrames": 85}]} totalDurationFrames={168} notText={"谁对谁错"} butText={"你站在哪边"} butSrc={staticFile("images/华为制裁论/scene_8_2.png")} notContentIndex={1} butContentIndex={2} />
            </Sequence>
            <Sequence from={168} durationInFrames={233}>
                <BWTextFocus content={[{"text": "但我想说的是——", "startFrame": 0, "durationFrames": 31}, {"text": "理解这些，", "startFrame": 30, "durationFrames": 30}, {"text": "不是为了让你选边站。", "startFrame": 60, "durationFrames": 43}, {"text": "而是下次再看到有人说\"一句话就能解释\"的时候，", "startFrame": 102, "durationFrames": 93}, {"text": "你能多想三秒钟。", "startFrame": 195, "durationFrames": 38}]} totalDurationFrames={233} coreSentence={[{"text": "理解这些，不是为了让你选边站。", "showFrom": 1}, {"text": "而是让你能多想三秒钟。", "showFrom": 3}]} coreSentenceAnchors={[{"coreSentenceAnchor": "选边站", "color": "#EF4444"}, {"coreSentenceAnchor": "多想三秒钟", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={401} durationInFrames={75}>
                <BWTextFocus content={[{"text": "这三秒钟，", "startFrame": 0, "durationFrames": 26}, {"text": "就是你和大多数人的区别。", "startFrame": 25, "durationFrames": 50}]} totalDurationFrames={75} coreSentence={[{"text": "这三秒钟，", "showFrom": 0}, {"text": "就是你和大多数人的区别。", "showFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "和大多数人的区别", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/华为制裁论/scene_8/scene_8.mp3")} />
        </AbsoluteFill>
    );
};
