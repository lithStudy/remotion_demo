import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCauseChain, BWTextFocus } from "../../../components";

// 反转·动态置信
const SCENE_DURATION = 80 + 191;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={80}>
                <BWCauseChain content={[{"text": "你越依赖AI。", "startFrame": 0, "durationFrames": 30}, {"text": "越容易失去独立判断。", "startFrame": 29, "durationFrames": 51}]} totalDurationFrames={80} layout={"horizontal"} nodes={[{ label: "依赖AI", imageSrc: staticFile("images/豆包仙人论/scene_4_9_img0.png"), showFrom: 0 }, { label: "失去判断", imageSrc: staticFile("images/豆包仙人论/scene_4_9_img1.png"), showFrom: 1 }]} anchors={[]} />
            </Sequence>
            <Sequence from={80} durationInFrames={191}>
                <BWTextFocus content={[{"text": "真正的思考。", "startFrame": 0, "durationFrames": 35}, {"text": "不是在AI给出答案时结束。", "startFrame": 34, "durationFrames": 69}, {"text": "而是在AI给出答案后才刚刚开始。", "startFrame": 103, "durationFrames": 88}]} totalDurationFrames={191} coreSentence={[{"text": "真正的思考。", "showFrom": 0, "endFrom": 0}, {"text": "不是在AI给出答案时结束。", "showFrom": 1, "endFrom": 1}, {"text": "而是在AI给出答案后才刚刚开始。", "showFrom": 2}]} coreSentenceAnchors={[{"coreSentenceAnchor": "真正的思考", "color": "#EF4444"}, {"coreSentenceAnchor": "才刚刚开始", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/豆包仙人论/scene_4/scene_4.mp3")} />
        </AbsoluteFill>
    );
};
