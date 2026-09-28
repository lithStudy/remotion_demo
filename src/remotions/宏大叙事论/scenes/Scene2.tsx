import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCognitiveShift, BWSplitCompare, BWTextFocus } from "../../../components";

// 反转·核心是收割架构
const SCENE_DURATION = 134 + 222 + 104;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={134}>
                <BWSplitCompare content={[{"text": "很多人以为，", "startFrame": 0, "durationFrames": 29}, {"text": "宏大叙事只是理念不同，", "startFrame": 28, "durationFrames": 57}, {"text": "或者价值观站位太高。", "startFrame": 85, "durationFrames": 48}]} totalDurationFrames={134} leftSrc={staticFile("images/宏大叙事论/scene_2_1_left.png")} rightSrc={staticFile("images/宏大叙事论/scene_2_1_right.png")} leftLabel={"理念不同"} rightLabel={"站位太高"} leftShowFrom={1} rightShowFrom={2} />
            </Sequence>
            <Sequence from={134} durationInFrames={222}>
                <BWCognitiveShift content={[{"text": "错。", "startFrame": 0, "durationFrames": 15}, {"text": "宏大叙事，就是一套极其精密的权力与利益收割架构。", "startFrame": 14, "durationFrames": 111}, {"text": "它把自己伪装成，都是为了大家好的样子，", "startFrame": 124, "durationFrames": 98}]} totalDurationFrames={222} notText={"理念问题"} butText={"权力与利益收割架构"} butSrc={staticFile("images/宏大叙事论/scene_2_2.png")} notContentIndex={1} butContentIndex={2} anchors={[]} />
            </Sequence>
            <Sequence from={356} durationInFrames={104}>
                <BWTextFocus content={[{"text": "它的底层逻辑，", "startFrame": 0, "durationFrames": 36}, {"text": "存在四个无法洗白的核心病灶。", "startFrame": 36, "durationFrames": 68}]} totalDurationFrames={104} coreSentence={[{"text": "它的底层逻辑，", "showFrom": 0}, {"text": "存在四个无法洗白的核心病灶。", "showFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "核心病灶", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/宏大叙事论/scene_2/scene_2.mp3")} />
        </AbsoluteFill>
    );
};
