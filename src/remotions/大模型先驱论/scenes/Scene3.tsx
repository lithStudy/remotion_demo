import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWPanelGrid, BWTextFocus } from "../../../components";

// 召唤：请还AI以真实
const SCENE_DURATION = 127 + 88 + 87;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={127}>
                <BWPanelGrid content={[{"text": "你喊得越响，", "startFrame": 0, "durationFrames": 30}, {"text": "越像在遮羞。", "startFrame": 29, "durationFrames": 39}, {"text": "你抢得越急，", "startFrame": 67, "durationFrames": 32}, {"text": "越像在补课。", "startFrame": 99, "durationFrames": 28}]} totalDurationFrames={127} panels={[{ src: staticFile("images/大模型先驱论/scene_3_1_img0.png"), showFrom: 1 }, { src: staticFile("images/大模型先驱论/scene_3_1_img1.png"), showFrom: 3 }]} anchors={[]} />
            </Sequence>
            <Sequence from={127} durationInFrames={88}>
                <BWTextFocus content={[{"text": "中国的AI，", "startFrame": 0, "durationFrames": 23}, {"text": "需要像Deepseek一样的真东西。", "startFrame": 22, "durationFrames": 65}]} totalDurationFrames={88} coreSentence={[{"text": "中国的AI，", "showFrom": 0}, {"text": "需要像Deepseek一样的真东西。", "showFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "真东西", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={215} durationInFrames={87}>
                <BWTextFocus content={[{"text": "岁月史书世的营销，", "startFrame": 0, "durationFrames": 47}, {"text": "真给中国人丢脸。", "startFrame": 46, "durationFrames": 40}]} totalDurationFrames={87} coreSentence={[{"text": "岁月史书世的营销，", "showFrom": 0}, {"text": "真给中国人丢脸。", "showFrom": 1, "endFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "岁月史书", "color": "#EF4444"}, {"coreSentenceAnchor": "丢脸", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/大模型先驱论/scene_3/scene_3.mp3")} />
        </AbsoluteFill>
    );
};
