import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWTextFocus } from "../../../components";

// 引入·盘古模型迷雾
const SCENE_DURATION = 179 + 178;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={179}>
                <BWCenterFocus content={[{"text": "很多人被华为的「盘古大模型」绕晕了。", "startFrame": 0, "durationFrames": 82}, {"text": "觉得盘古模型开天辟地，", "startFrame": 81, "durationFrames": 50}, {"text": "是最早的AI领先者。", "startFrame": 130, "durationFrames": 48}]} totalDurationFrames={179} imageSrc={staticFile("images/模型论/scene_1_1.png")} enterEffect="fadeIn" anchors={[{"text": "盘古大模型", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={179} durationInFrames={178}>
                <BWTextFocus content={[{"text": "我今天只做一件事：", "startFrame": 0, "durationFrames": 46}, {"text": "把各种冠以「模型」的词，", "startFrame": 45, "durationFrames": 52}, {"text": "从华为嘴里抢回来，", "startFrame": 97, "durationFrames": 44}, {"text": "重新定义一遍。", "startFrame": 140, "durationFrames": 38}]} totalDurationFrames={178} coreSentence={[{"text": "把各种冠以「模型」的词，", "showFrom": 1}, {"text": "从华为嘴里抢回来，", "showFrom": 2}, {"text": "重新定义一遍。", "showFrom": 3}]} coreSentenceAnchors={[{"coreSentenceAnchor": "模型", "color": "#EF4444"}, {"coreSentenceAnchor": "重新定义", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/模型论/scene_1/scene_1.mp3")} />
        </AbsoluteFill>
    );
};
