import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWPanelGrid, BWTextFocus } from "../../../components";

// 召唤：请还AI以真实
const SCENE_DURATION = 140 + 91 + 83;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={140}>
                <BWPanelGrid content={[{"text": "你喊得越响，", "startFrame": 0, "durationFrames": 32}, {"text": "越像在遮羞。", "startFrame": 31, "durationFrames": 40}, {"text": "你抢得越急，", "startFrame": 70, "durationFrames": 36}, {"text": "越像在补课。", "startFrame": 106, "durationFrames": 33}]} totalDurationFrames={140} panels={[{ src: staticFile("images/大模型先驱论/scene_3_1_img0.png"), showFrom: 1 }, { src: staticFile("images/大模型先驱论/scene_3_1_img1.png"), showFrom: 3 }]} anchors={[]} />
            </Sequence>
            <Sequence from={140} durationInFrames={91}>
                <BWTextFocus content={[{"text": "中国的AI，", "startFrame": 0, "durationFrames": 27}, {"text": "需要像Deepseek一样的真东西。", "startFrame": 26, "durationFrames": 65}]} totalDurationFrames={91} coreSentence={[{"text": "中国的AI，", "showFrom": 0}, {"text": "需要像Deepseek一样的真东西。", "showFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "真东西", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={231} durationInFrames={83}>
                <BWTextFocus content={[{"text": "岁月史书世的营销，", "startFrame": 0, "durationFrames": 45}, {"text": "真给中国人丢脸。", "startFrame": 44, "durationFrames": 38}]} totalDurationFrames={83} coreSentence={[{"text": "岁月史书世的营销，", "showFrom": 0}, {"text": "真给中国人丢脸。", "showFrom": 1, "endFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "岁月史书", "color": "#EF4444"}, {"coreSentenceAnchor": "丢脸", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/大模型先驱论/scene_3/scene_3.mp3")} />
        </AbsoluteFill>
    );
};
