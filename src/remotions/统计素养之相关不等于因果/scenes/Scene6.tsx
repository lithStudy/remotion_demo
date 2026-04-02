import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCognitiveShift, BWDosAndDonts, BWTextFocus } from "../../../components";

// 理性与清醒的价值
const SCENE_DURATION = 129 + 120 + 120;

export const calculateScene6Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene6: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={129}>
                <BWCognitiveShift content={[{"text": "我们之所以追求逻辑与理性，", "startFrame": 0, "durationFrames": 30}, {"text": "并不是为了否定某种传统或情感，", "startFrame": 30, "durationFrames": 33}, {"text": "而是为了在这个充满套路的世界里，", "startFrame": 63, "durationFrames": 35}, {"text": "拥有一份不被随意操纵的清醒。", "startFrame": 98, "durationFrames": 31}]} totalDurationFrames={129} notText={"否定传统情感"} butText={"拥抱清醒"} butSrc={staticFile("清澈的水面，阳光照耀，水波荡漾")} notContentIndex={1} butContentIndex={3} anchors={[]} />
            </Sequence>
            <Sequence from={129} durationInFrames={120}>
                <BWDosAndDonts content={[{"text": "记住，", "startFrame": 0, "durationFrames": 30}, {"text": "真正的科学从来不怕质疑，", "startFrame": 30, "durationFrames": 30}, {"text": "而那些害怕你提问的，", "startFrame": 60, "durationFrames": 30}, {"text": "往往就是想收割你的。", "startFrame": 90, "durationFrames": 30}]} totalDurationFrames={120} leftSrc={staticFile("害怕提问的人简笔画图标")} rightSrc={staticFile("理性质疑的人简笔画图标")} dontLabel={"❌ 别害怕"} doLabel={"✅ 问出来"} anchors={[]} />
            </Sequence>
            <Sequence from={249} durationInFrames={120}>
                <BWTextFocus content={[{"text": "让我们从这一刻起，", "startFrame": 0, "durationFrames": 30}, {"text": "把评价事物的尺子，", "startFrame": 30, "durationFrames": 30}, {"text": "从我觉得，", "startFrame": 60, "durationFrames": 30}, {"text": "交还给证据。", "startFrame": 90, "durationFrames": 30}]} totalDurationFrames={120} coreSentence={"把评价事物的尺子，交还给证据"} coreSentenceAnchors={[{"coreSentenceAnchor": "证据"}]} />
            </Sequence>

        </AbsoluteFill>
    );
};
