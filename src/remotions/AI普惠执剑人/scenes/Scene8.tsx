import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift, BWTextFocus } from "../../../components";

// 总结
const SCENE_DURATION = 116 + 117 + 111 + 99;

export const calculateScene8Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene8: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={116}>
                <BWCognitiveShift content={[{"text": "DeepSeek 不是一个普通模型。", "startFrame": 0, "durationFrames": 60}, {"text": "它是一场技术普惠运动。", "startFrame": 60, "durationFrames": 56}]} totalDurationFrames={116} notText={"普通模型"} butText={"技术普惠运动"} butSrc={staticFile("images/AI普惠执剑人/scene_8_1.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Sequence from={116} durationInFrames={117}>
                <BWCognitiveShift content={[{"text": "梁文锋也不只是一个 AI 创业者。", "startFrame": 0, "durationFrames": 75}, {"text": "他更像一个执剑人。", "startFrame": 74, "durationFrames": 43}]} totalDurationFrames={117} notText={"AI 创业者"} butText={"执剑人"} butSrc={staticFile("images/AI普惠执剑人/scene_8_2.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Sequence from={233} durationInFrames={111}>
                <BWCenterFocus content={[{"text": "在 AI 巨头准备垄断未来的时候，", "startFrame": 0, "durationFrames": 71}, {"text": "他把剑拔出来。", "startFrame": 70, "durationFrames": 40}]} totalDurationFrames={111} imageSrc={staticFile("images/AI普惠执剑人/scene_8_3.png")} enterEffect="zoomIn" anchors={[{"text": "拔剑", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "woosh"}]} />
            </Sequence>
            <Sequence from={344} durationInFrames={99}>
                <BWTextFocus content={[{"text": "然后告诉普通人：", "startFrame": 0, "durationFrames": 42}, {"text": "这把剑，", "startFrame": 41, "durationFrames": 26}, {"text": "你们也可以用。", "startFrame": 66, "durationFrames": 32}]} totalDurationFrames={99} coreSentence={[{"text": "然后告诉普通人：", "showFrom": 0}, {"text": "这把剑，", "showFrom": 1}, {"text": "你们也可以用。", "showFrom": 2}]} coreSentenceAnchors={[{"coreSentenceAnchor": "普通人", "color": "#EF4444"}, {"coreSentenceAnchor": "你们也可以用", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/AI普惠执剑人/scene_8/scene_8.mp3")} />
        </AbsoluteFill>
    );
};
