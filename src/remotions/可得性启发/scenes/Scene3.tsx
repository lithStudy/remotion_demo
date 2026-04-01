import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift, BWConceptCard } from "../../../components";

// 可得性启发
const SCENE_DURATION = 108 + 135 + 310 + 283 + 174 + 173 + 172;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={108}>
                <BWConceptCard content={[{"text": "在心理学上，", "startFrame": 0, "durationFrames": 30}, {"text": "这其实叫作“可得性启发”。", "startFrame": 29, "durationFrames": 79}]} totalDurationFrames={108} imageSrc={staticFile("images/可得性启发6/scene_3_1.png")} conceptName={"可得性启发"} anchors={[]} />
            </Sequence>
            <Sequence from={108} durationInFrames={135}>
                <BWCenterFocus content={[{"text": "听起来挺学术，", "startFrame": 0, "durationFrames": 39}, {"text": "说白了，", "startFrame": 38, "durationFrames": 21}, {"text": "你的大脑就是一个“偷懒的搜索工具”。", "startFrame": 58, "durationFrames": 76}]} totalDurationFrames={135} imageSrc={staticFile("images/可得性启发6/scene_3_2.png")} enterEffect="fadeIn" anchors={[{"text": "搜索工具", "showFrom": 2, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={243} durationInFrames={310}>
                <BWCenterFocus content={[{"text": "当我们要判断一件事发生的概率有多大、", "startFrame": 0, "durationFrames": 76}, {"text": "到底重不重要时，", "startFrame": 75, "durationFrames": 43}, {"text": "大脑懒得去翻枯燥的统计年鉴，", "startFrame": 117, "durationFrames": 79}, {"text": "它只会问自己一个问题：", "startFrame": 196, "durationFrames": 50}, {"text": "“这件事我能不能立刻想起来？”", "startFrame": 245, "durationFrames": 65}]} totalDurationFrames={310} imageSrc={staticFile("images/可得性启发6/scene_3_3.png")} enterEffect="breathe" anchors={[{"text": "判断概率", "showFrom": 0, "color": "#000000", "anim": "spring", "audioEffect": "ping"}, {"text": "想起来", "showFrom": 4, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={553} durationInFrames={283}>
                <BWCenterFocus content={[{"text": "如果某个画面、", "startFrame": 0, "durationFrames": 29}, {"text": "某种恐惧能让你瞬间在大脑里“秒回”，", "startFrame": 28, "durationFrames": 92}, {"text": "你的直觉就会粗暴地告诉你：", "startFrame": 120, "durationFrames": 65}, {"text": "这事儿太常见了，", "startFrame": 184, "durationFrames": 54}, {"text": "世界就是这个样子的。", "startFrame": 237, "durationFrames": 45}]} totalDurationFrames={283} imageSrc={staticFile("images/可得性启发6/scene_3_4.png")} enterEffect="fadeIn" anchors={[{"text": "直觉", "showFrom": 2, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={836} durationInFrames={174}>
                <BWCenterFocus content={[{"text": "这就像你家窗户上贴了一张印着老虎的贴纸，", "startFrame": 0, "durationFrames": 91}, {"text": "你往外看，", "startFrame": 90, "durationFrames": 30}, {"text": "就觉得满大街都是老虎。", "startFrame": 120, "durationFrames": 54}]} totalDurationFrames={174} imageSrc={staticFile("images/可得性启发6/scene_3_5.png")} enterEffect="fadeIn" anchors={[{"text": "老虎", "showFrom": 2, "color": "#EF4444", "anim": "highlight", "audioEffect": "woosh"}]} />
            </Sequence>
            <Sequence from={1010} durationInFrames={173}>
                <BWCognitiveShift content={[{"text": "其实，", "startFrame": 0, "durationFrames": 24}, {"text": "不是老虎变多了，", "startFrame": 24, "durationFrames": 36}, {"text": "而是这张贴纸离你的眼睛最近，", "startFrame": 60, "durationFrames": 69}, {"text": "最容易被你看见。", "startFrame": 128, "durationFrames": 44}]} totalDurationFrames={173} notText={"老虎变多"} butText={"贴纸离眼近"} butSrc={staticFile("images/可得性启发6/scene_3_6.png")} notContentIndex={1} butContentIndex={2} anchors={[]} />
            </Sequence>
            <Sequence from={1183} durationInFrames={172}>
                <BWCognitiveShift content={[{"text": "你以为你看到了全世界，", "startFrame": 0, "durationFrames": 54}, {"text": "其实你只是看到了被喂到嘴边的那一小块“信息残渣”。", "startFrame": 53, "durationFrames": 119}]} totalDurationFrames={172} notText={"看到了全世界"} butText={"信息残渣"} butSrc={staticFile("images/可得性启发6/scene_3_7.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/可得性启发6/scene_3/scene_3.mp3")} />
        </AbsoluteFill>
    );
};
