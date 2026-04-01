import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCognitiveShift, BWTextFocus } from "../../../components";

// 理性与清醒
const SCENE_DURATION = 278 + 173 + 152;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={278}>
                <BWCognitiveShift content={[{"text": "我们之所以追求逻辑与理性，", "startFrame": 0, "durationFrames": 60}, {"text": "并不是为了否定某种传统或情感，", "startFrame": 60, "durationFrames": 69}, {"text": "而是为了在这个充满套路的世界里，", "startFrame": 128, "durationFrames": 69}, {"text": "拥有一份不被随意操纵的清醒。", "startFrame": 197, "durationFrames": 80}]} totalDurationFrames={278} notText={"否定传统情感"} butText={"拥抱清醒认知"} butSrc={staticFile("images/双盲实验/scene_4_1.png")} notContentIndex={1} butContentIndex={3} anchors={[]} />
            </Sequence>
            <Sequence from={278} durationInFrames={173}>
                <BWCognitiveShift content={[{"text": "记住，", "startFrame": 0, "durationFrames": 18}, {"text": "真正的科学从来不怕质疑，", "startFrame": 17, "durationFrames": 64}, {"text": "而那些害怕你提问的，", "startFrame": 80, "durationFrames": 44}, {"text": "往往就是想收割你的。", "startFrame": 124, "durationFrames": 48}]} totalDurationFrames={173} notText={"害怕你提问"} butText={"接受质疑"} butSrc={staticFile("images/双盲实验/scene_4_2.png")} notContentIndex={2} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Sequence from={451} durationInFrames={152}>
                <BWTextFocus content={[{"text": "让我们从这一刻起，", "startFrame": 0, "durationFrames": 43}, {"text": "把评价事物的尺子，", "startFrame": 42, "durationFrames": 47}, {"text": "从我觉得，", "startFrame": 89, "durationFrames": 28}, {"text": "交还给证据。", "startFrame": 116, "durationFrames": 35}]} totalDurationFrames={152} coreSentence={"把评价事物的尺子，交还给证据"} coreSentenceAnchors={[{"coreSentenceAnchor": "交还给证据"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/双盲实验/scene_4/scene_4.mp3")} />
        </AbsoluteFill>
    );
};
