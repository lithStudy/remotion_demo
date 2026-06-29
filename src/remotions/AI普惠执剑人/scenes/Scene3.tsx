import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCognitiveShift, BWMethodStack, BWSplitCompare, BWTextFocus } from "../../../components";

// 技术
const SCENE_DURATION = 196 + 209 + 284 + 333 + 198 + 164;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={196}>
                <BWCognitiveShift content={[{"text": "它的技术创新，", "startFrame": 0, "durationFrames": 31}, {"text": "从来不会炫技名词。", "startFrame": 30, "durationFrames": 42}, {"text": "而是从架构、算法、训练工程三个地方，", "startFrame": 72, "durationFrames": 96}, {"text": "同时下刀。", "startFrame": 168, "durationFrames": 28}]} totalDurationFrames={196} notText={"炫技名词"} butText={"架构算法工程"} butSrc={staticFile("images/AI普惠执剑人/scene_3_1.png")} notContentIndex={1} butContentIndex={2} anchors={[]} />
            </Sequence>
            <Sequence from={196} durationInFrames={209}>
                <BWMethodStack content={[{"text": "架构上，", "startFrame": 0, "durationFrames": 24}, {"text": "它让模型更省显存。", "startFrame": 24, "durationFrames": 62}, {"text": "同样一台机器，", "startFrame": 85, "durationFrames": 36}, {"text": "能处理更长的内容，", "startFrame": 121, "durationFrames": 45}, {"text": "服务更多用户。", "startFrame": 165, "durationFrames": 43}]} totalDurationFrames={209} title={"架构更省显存"} imageSrc={staticFile("images/AI普惠执剑人/scene_3_2.png")} notes={[{"text": "减少单个模型显存占用", "showFrom": 1}, {"text": "提升单机处理容量", "showFrom": 3}]} anchors={[]} />
            </Sequence>
            <Sequence from={405} durationInFrames={284}>
                <BWMethodStack content={[{"text": "算法上，", "startFrame": 0, "durationFrames": 21}, {"text": "它让模型不用那么依赖昂贵的人工标注，", "startFrame": 20, "durationFrames": 81}, {"text": "也能自己在训练中学会推理。", "startFrame": 101, "durationFrames": 63}, {"text": "DeepSeek R1的出现，", "startFrame": 163, "durationFrames": 45}, {"text": "甚至震动了全球AI的整个行业。", "startFrame": 208, "durationFrames": 75}]} totalDurationFrames={284} title={"自主推理"} imageSrc={staticFile("images/AI普惠执剑人/scene_3_3.png")} notes={[{"text": "减少对昂贵人工标注的依赖", "showFrom": 1}, {"text": "训练中自主学会推理", "showFrom": 2}, {"text": "R1 震动全球 AI 行业", "showFrom": 4}]} anchors={[]} />
            </Sequence>
            <Sequence from={689} durationInFrames={333}>
                <BWMethodStack content={[{"text": "工程上，", "startFrame": 0, "durationFrames": 27}, {"text": "它把训练过程里的显存、", "startFrame": 26, "durationFrames": 59}, {"text": "带宽、", "startFrame": 85, "durationFrames": 18}, {"text": "通信浪费，", "startFrame": 102, "durationFrames": 32}, {"text": "一层一层压下去。", "startFrame": 134, "durationFrames": 40}, {"text": "让中国在没有足够显卡的情况下，", "startFrame": 174, "durationFrames": 78}, {"text": "也能训练出全球顶尖的AI模型。", "startFrame": 251, "durationFrames": 82}]} totalDurationFrames={333} title={"层层压低浪费"} imageSrc={staticFile("images/AI普惠执剑人/scene_3_5.png")} notes={[{"text": "压缩显存、带宽、通信浪费", "showFrom": 1}, {"text": "显卡不足仍能顶尖训练", "showFrom": 5}]} anchors={[]} />
            </Sequence>
            <Sequence from={1022} durationInFrames={198}>
                <BWSplitCompare content={[{"text": "DeepSeek的出现，", "startFrame": 0, "durationFrames": 35}, {"text": "说明中国 AI 不是只能跟随。", "startFrame": 34, "durationFrames": 68}, {"text": "中国科研，", "startFrame": 102, "durationFrames": 31}, {"text": "也不是只能做应用层创新。", "startFrame": 133, "durationFrames": 65}]} totalDurationFrames={198} leftSrc={staticFile("images/AI普惠执剑人/scene_3_7_left.png")} rightSrc={staticFile("images/AI普惠执剑人/scene_3_7_right.png")} leftLabel={"只能跟随"} rightLabel={"底层原创"} leftShowFrom={1} rightShowFrom={3} anchors={[]} />
            </Sequence>
            <Sequence from={1220} durationInFrames={164}>
                <BWTextFocus content={[{"text": "只要算法足够锋利，", "startFrame": 0, "durationFrames": 44}, {"text": "工程足够扎实，", "startFrame": 43, "durationFrames": 38}, {"text": "我们也能站到全球AI技术牌桌中央。", "startFrame": 80, "durationFrames": 83}]} totalDurationFrames={164} coreSentence={[{"text": "只要算法足够锋利，", "showFrom": 0}, {"text": "工程足够扎实，", "showFrom": 1}, {"text": "我们也能站到全球技术牌桌中央。", "showFrom": 2}]} coreSentenceAnchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/AI普惠执剑人/scene_3/scene_3.mp3")} />
        </AbsoluteFill>
    );
};
