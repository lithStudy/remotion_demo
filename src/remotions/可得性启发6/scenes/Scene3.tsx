import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift, BWConceptCard } from "../../../components";

// 可得性启发
const SCENE_DURATION = 67 + 422 + 225 + 85;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={67}>
                <BWConceptCard content={[{"text": "在心理学上，", "startFrame": 0, "durationFrames": 30}, {"text": "这其实叫作**“可得性启发”**。", "startFrame": 30, "durationFrames": 37}]} totalDurationFrames={67} imageSrc={staticFile("images/template/scene1_1.png")} conceptName={"可得性启发"} anchors={[]} />
            </Sequence>
            <Sequence from={67} durationInFrames={422}>
                <BWCenterFocus content={[{"text": "听起来挺学术，", "startFrame": 0, "durationFrames": 30}, {"text": "说白了，", "startFrame": 30, "durationFrames": 30}, {"text": "你的大脑就是一个“偷懒的搜索工具”。", "startFrame": 60, "durationFrames": 40}, {"text": "当我们要判断一件事发生的概率有多大、", "startFrame": 100, "durationFrames": 40}, {"text": "到底重不重要时，", "startFrame": 140, "durationFrames": 30}, {"text": "大脑懒得去翻枯燥的统计年鉴，", "startFrame": 170, "durationFrames": 31}, {"text": "它只会问自己一个问题：", "startFrame": 201, "durationFrames": 30}, {"text": "“这件事我能不能立刻想起来？", "startFrame": 231, "durationFrames": 31}, {"text": "”如果某个画面、", "startFrame": 262, "durationFrames": 30}, {"text": "某种恐惧能让你瞬间在大脑里“秒回”，", "startFrame": 292, "durationFrames": 40}, {"text": "你的直觉就会粗暴地告诉你：", "startFrame": 332, "durationFrames": 30}, {"text": "这事儿太常见了，", "startFrame": 362, "durationFrames": 30}, {"text": "世界就是这个样子的。", "startFrame": 392, "durationFrames": 30}]} totalDurationFrames={422} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" anchors={[{"text": "搜索工具", "showFrom": 2, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={489} durationInFrames={225}>
                <BWCognitiveShift content={[{"text": "这就像你家窗户上贴了一张印着老虎的贴纸，", "startFrame": 0, "durationFrames": 44}, {"text": "你往外看，", "startFrame": 44, "durationFrames": 30}, {"text": "就觉得满大街都是老虎。", "startFrame": 74, "durationFrames": 30}, {"text": "其实，", "startFrame": 104, "durationFrames": 30}, {"text": "不是老虎变多了，", "startFrame": 134, "durationFrames": 30}, {"text": "而是这张贴纸离你的眼睛最近，", "startFrame": 164, "durationFrames": 31}, {"text": "最容易被你看见。", "startFrame": 195, "durationFrames": 30}]} totalDurationFrames={225} notText={"老虎变多了"} butText={"这张贴纸离你的眼睛最近"} butSrc={staticFile("images/template/scene1_1.png")} notContentIndex={4} butContentIndex={5} anchors={[]} />
            </Sequence>
            <Sequence from={714} durationInFrames={85}>
                <BWCognitiveShift content={[{"text": "你以为你看到了全世界，", "startFrame": 0, "durationFrames": 30}, {"text": "其实你只是看到了被喂到嘴边的那一小块“信息残渣”。", "startFrame": 30, "durationFrames": 55}]} totalDurationFrames={85} notText={"看到了全世界"} butText={"看到了被喂到嘴边的那一小块“信息残渣”"} butSrc={staticFile("images/template/scene1_1.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>

        </AbsoluteFill>
    );
};
