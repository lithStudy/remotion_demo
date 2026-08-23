import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCognitiveShift, BWMethodStack, BWSplitCompare, BWTextFocus } from "../../../components";

// 技术
const SCENE_DURATION = 194 + 200 + 300 + 322 + 189 + 163;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={194}>
                <BWCognitiveShift content={[{"text": "它的技术创新，", "startFrame": 0, "durationFrames": 34}, {"text": "从来不会炫技名词。", "startFrame": 33, "durationFrames": 47}, {"text": "而是从架构、算法、训练工程三个地方，", "startFrame": 80, "durationFrames": 87}, {"text": "同时下刀。", "startFrame": 166, "durationFrames": 27}]} totalDurationFrames={194} notText={"炫技名词"} butText={"架构算法工程"} butSrc={staticFile("images/AI普惠执剑人/scene_3_1.png")} notContentIndex={1} butContentIndex={2} anchors={[]} />
            </Sequence>
            <Sequence from={194} durationInFrames={200}>
                <BWMethodStack content={[{"text": "架构上，", "startFrame": 0, "durationFrames": 26}, {"text": "它让模型更省显存。", "startFrame": 25, "durationFrames": 60}, {"text": "同样一台机器，", "startFrame": 85, "durationFrames": 34}, {"text": "能处理更长的内容，", "startFrame": 118, "durationFrames": 44}, {"text": "服务更多用户。", "startFrame": 162, "durationFrames": 38}]} totalDurationFrames={200} title={"架构更省显存"} imageSrc={staticFile("images/AI普惠执剑人/scene_3_2.png")} notes={[{"text": "减少单个模型显存占用", "showFrom": 1}, {"text": "提升单机处理容量", "showFrom": 3}]} anchors={[]} />
            </Sequence>
            <Sequence from={394} durationInFrames={300}>
                <BWMethodStack content={[{"text": "算法上，", "startFrame": 0, "durationFrames": 23}, {"text": "它让模型不用那么依赖昂贵的人工标注，", "startFrame": 22, "durationFrames": 87}, {"text": "也能自己在训练中学会推理。", "startFrame": 109, "durationFrames": 65}, {"text": "DeepSeek R1的出现，", "startFrame": 174, "durationFrames": 45}, {"text": "甚至震动了全球AI的整个行业。", "startFrame": 218, "durationFrames": 81}]} totalDurationFrames={300} title={"自主推理"} imageSrc={staticFile("images/AI普惠执剑人/scene_3_3.png")} notes={[{"text": "减少对昂贵人工标注的依赖", "showFrom": 1}, {"text": "训练中自主学会推理", "showFrom": 2}, {"text": "R1 震动全球 AI 行业", "showFrom": 4}]} anchors={[]} />
            </Sequence>
            <Sequence from={694} durationInFrames={322}>
                <BWMethodStack content={[{"text": "工程上，", "startFrame": 0, "durationFrames": 22}, {"text": "它把训练过程里的显存、", "startFrame": 21, "durationFrames": 54}, {"text": "带宽、", "startFrame": 75, "durationFrames": 17}, {"text": "通信浪费，", "startFrame": 91, "durationFrames": 29}, {"text": "一层一层压下去。", "startFrame": 120, "durationFrames": 42}, {"text": "让中国在没有足够显卡的情况下，", "startFrame": 161, "durationFrames": 75}, {"text": "也能训练出全球顶尖的AI模型。", "startFrame": 235, "durationFrames": 86}]} totalDurationFrames={322} title={"层层压低浪费"} imageSrc={staticFile("images/AI普惠执剑人/scene_3_5.png")} notes={[{"text": "压缩显存、带宽、通信浪费", "showFrom": 1}, {"text": "显卡不足仍能顶尖训练", "showFrom": 5}]} anchors={[]} />
            </Sequence>
            <Sequence from={1016} durationInFrames={189}>
                <BWSplitCompare content={[{"text": "DeepSeek的出现，", "startFrame": 0, "durationFrames": 32}, {"text": "说明中国 AI 不是只能跟随。", "startFrame": 31, "durationFrames": 68}, {"text": "中国科研，", "startFrame": 99, "durationFrames": 29}, {"text": "也不是只能做应用层创新。", "startFrame": 127, "durationFrames": 61}]} totalDurationFrames={189} leftSrc={staticFile("images/AI普惠执剑人/scene_3_7_left.png")} rightSrc={staticFile("images/AI普惠执剑人/scene_3_7_right.png")} leftLabel={"只能跟随"} rightLabel={"底层原创"} leftShowFrom={1} rightShowFrom={3} anchors={[]} />
            </Sequence>
            <Sequence from={1205} durationInFrames={163}>
                <BWTextFocus content={[{"text": "只要算法足够锋利，", "startFrame": 0, "durationFrames": 43}, {"text": "工程足够扎实，", "startFrame": 42, "durationFrames": 35}, {"text": "我们也能站到全球AI技术牌桌中央。", "startFrame": 77, "durationFrames": 86}]} totalDurationFrames={163} coreSentence={[{"text": "只要算法足够锋利，", "showFrom": 0}, {"text": "工程足够扎实，", "showFrom": 1}, {"text": "我们也能站到全球技术牌桌中央。", "showFrom": 2}]} coreSentenceAnchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/AI普惠执剑人/scene_3/scene_3.mp3")} />
        </AbsoluteFill>
    );
};
