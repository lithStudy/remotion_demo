import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCognitiveShift, BWDosAndDonts, BWTextFocus } from "../../../components";

// 理性与清醒的价值
const SCENE_DURATION = 286 + 179 + 164;

export const calculateScene6Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene6: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={286}>
                <BWCognitiveShift content={[{"text": "我们之所以追求逻辑与理性，", "startFrame": 0, "durationFrames": 60}, {"text": "并不是为了否定某种传统或情感，", "startFrame": 60, "durationFrames": 77}, {"text": "而是为了在这个充满套路的世界里，", "startFrame": 136, "durationFrames": 76}, {"text": "拥有一份不被随意操纵的清醒。", "startFrame": 211, "durationFrames": 75}]} totalDurationFrames={286} notText={"否定传统情感"} butText={"拥抱清醒"} butSrc={staticFile("images/统计素养之相关不等于因果/scene_6_1.png")} notContentIndex={1} butContentIndex={3} anchors={[]} />
            </Sequence>
            <Sequence from={286} durationInFrames={179}>
                <BWDosAndDonts content={[{"text": "记住，", "startFrame": 0, "durationFrames": 18}, {"text": "真正的科学从来不怕质疑，", "startFrame": 17, "durationFrames": 70}, {"text": "而那些害怕你提问的，", "startFrame": 87, "durationFrames": 44}, {"text": "往往就是想收割你的。", "startFrame": 130, "durationFrames": 48}]} totalDurationFrames={179} leftSrc={staticFile("images/统计素养之相关不等于因果/scene_6_2_left.png")} rightSrc={staticFile("images/统计素养之相关不等于因果/scene_6_2_right.png")} dontLabel={"❌ 别害怕"} doLabel={"✅ 问出来"} anchors={[]} />
            </Sequence>
            <Sequence from={465} durationInFrames={164}>
                <BWTextFocus content={[{"text": "让我们从这一刻起，", "startFrame": 0, "durationFrames": 38}, {"text": "把评价事物的尺子，", "startFrame": 37, "durationFrames": 55}, {"text": "从我觉得，", "startFrame": 91, "durationFrames": 33}, {"text": "交还给证据。", "startFrame": 124, "durationFrames": 39}]} totalDurationFrames={164} coreSentence={"把评价事物的尺子，交还给证据"} coreSentenceAnchors={[{"coreSentenceAnchor": "证据"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/统计素养之相关不等于因果/scene_6/scene_6.mp3")} />
        </AbsoluteFill>
    );
};
