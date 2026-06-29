import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift, BWTextFocus } from "../../../components";

// 总结
const SCENE_DURATION = 112 + 118 + 112 + 93;

export const calculateScene8Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene8: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={112}>
                <BWCognitiveShift content={[{"text": "DeepSeek 不是一个普通模型。", "startFrame": 0, "durationFrames": 62}, {"text": "它是一场技术普惠运动。", "startFrame": 61, "durationFrames": 51}]} totalDurationFrames={112} notText={"普通模型"} butText={"技术普惠运动"} butSrc={staticFile("images/AI普惠执剑人/scene_8_1.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Sequence from={112} durationInFrames={118}>
                <BWCognitiveShift content={[{"text": "梁文锋也不只是一个 AI 创业者。", "startFrame": 0, "durationFrames": 74}, {"text": "他更像一个执剑人。", "startFrame": 73, "durationFrames": 45}]} totalDurationFrames={118} notText={"AI 创业者"} butText={"执剑人"} butSrc={staticFile("images/AI普惠执剑人/scene_8_2.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Sequence from={230} durationInFrames={112}>
                <BWCenterFocus content={[{"text": "在 AI 巨头准备垄断未来的时候，", "startFrame": 0, "durationFrames": 72}, {"text": "他把剑拔出来。", "startFrame": 72, "durationFrames": 40}]} totalDurationFrames={112} imageSrc={staticFile("images/AI普惠执剑人/scene_8_3.png")} enterEffect="zoomIn" anchors={[{"text": "拔剑", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "woosh"}]} />
            </Sequence>
            <Sequence from={342} durationInFrames={93}>
                <BWTextFocus content={[{"text": "然后告诉普通人：", "startFrame": 0, "durationFrames": 38}, {"text": "这把剑，", "startFrame": 37, "durationFrames": 22}, {"text": "你们也可以用。", "startFrame": 58, "durationFrames": 34}]} totalDurationFrames={93} coreSentence={[{"text": "然后告诉普通人：", "showFrom": 0}, {"text": "这把剑，", "showFrom": 1}, {"text": "你们也可以用。", "showFrom": 2}]} coreSentenceAnchors={[{"coreSentenceAnchor": "普通人", "color": "#EF4444"}, {"coreSentenceAnchor": "你们也可以用", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/AI普惠执剑人/scene_8/scene_8.mp3")} />
        </AbsoluteFill>
    );
};
