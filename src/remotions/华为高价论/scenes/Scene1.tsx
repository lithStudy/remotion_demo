import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWTextFocus } from "../../../components";

// 引入：贵的疑问
const SCENE_DURATION = 92 + 111;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={92}>
                <BWTextFocus content={[{"text": "华为的产品为什么都偏贵？", "startFrame": 0, "durationFrames": 54}, {"text": "是他的质量更好吗？", "startFrame": 53, "durationFrames": 38}]} totalDurationFrames={92} coreSentence={[{"text": "华为的产品为什么都偏贵？", "showFrom": 0}, {"text": "是他的质量更好吗？", "showFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "偏贵", "color": "red"}, {"coreSentenceAnchor": "质量更好", "color": "red"}]} />
            </Sequence>
            <Sequence from={92} durationInFrames={111}>
                <BWCenterFocus content={[{"text": "这篇视频让我来客观的告诉你，", "startFrame": 0, "durationFrames": 54}, {"text": "华为的东西贵在哪里。", "startFrame": 53, "durationFrames": 58}]} totalDurationFrames={111} imageSrc={staticFile("images/华为高价论/scene_1_2.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/华为高价论/scene_1/scene_1.mp3")} />
        </AbsoluteFill>
    );
};
