import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCognitiveShift, BWMagnifyingGlass, BWPanelGrid, BWTextFocus } from "../../../components";

// 开篇
const SCENE_DURATION = 78 + 160 + 198 + 107 + 117;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={78}>
                <BWTextFocus content={[{"text": "小米车，", "startFrame": 0, "durationFrames": 29}, {"text": "真的更容易出事吗？", "startFrame": 28, "durationFrames": 50}]} totalDurationFrames={78} coreSentence={[{"text": "小米车，", "showFrom": 0}, {"text": "真的更容易出事吗？", "showFrom": 1, "endFrom": 1}]} coreSentenceAnchors={[]} />
            </Sequence>
            <Sequence from={78} durationInFrames={160}>
                <BWCognitiveShift content={[{"text": "作为一个有理智的人，", "startFrame": 0, "durationFrames": 44}, {"text": "看一个品牌有没有问题，", "startFrame": 43, "durationFrames": 52}, {"text": "不应该是看热搜，", "startFrame": 94, "durationFrames": 36}, {"text": "而是看数据。", "startFrame": 130, "durationFrames": 29}]} totalDurationFrames={160} notText={"看热搜"} butText={"看数据"} butSrc={staticFile("images/小米事故论/scene_1_2.png")} notContentIndex={2} butContentIndex={3} anchors={[]} />
            </Sequence>
            <Sequence from={238} durationInFrames={198}>
                <BWPanelGrid content={[{"text": "你刷到的标题，", "startFrame": 0, "durationFrames": 39}, {"text": "通常很吓人。", "startFrame": 38, "durationFrames": 39}, {"text": "小米又起火了。", "startFrame": 76, "durationFrames": 37}, {"text": "小米又撞了。", "startFrame": 112, "durationFrames": 31}, {"text": "小米又上绿化带了。", "startFrame": 143, "durationFrames": 55}]} totalDurationFrames={198} panels={[{ src: staticFile("images/小米事故论/scene_1_3_img0.png"), showFrom: 2, enterEffect: "breathe" }, { src: staticFile("images/小米事故论/scene_1_3_img1.png"), showFrom: 3, enterEffect: "slideLeft" }, { src: staticFile("images/小米事故论/scene_1_3_img2.png"), showFrom: 4, enterEffect: "slideBottom" }]} anchors={[]} />
            </Sequence>
            <Sequence from={436} durationInFrames={107}>
                <BWMagnifyingGlass content={[{"text": "看多了，", "startFrame": 0, "durationFrames": 28}, {"text": "你会产生一个感觉：", "startFrame": 27, "durationFrames": 40}, {"text": "这车是不是有问题？", "startFrame": 66, "durationFrames": 41}]} totalDurationFrames={107} anchors={[{"text": "有问题", "showFrom": 2, "color": "#EF4444", "anim": "popIn", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={543} durationInFrames={117}>
                <BWCognitiveShift content={[{"text": "这个感觉，", "startFrame": 0, "durationFrames": 21}, {"text": "当然真实。", "startFrame": 20, "durationFrames": 30}, {"text": "但感觉真实，", "startFrame": 50, "durationFrames": 30}, {"text": "不等于概率真实。", "startFrame": 79, "durationFrames": 38}]} totalDurationFrames={117} notText={"感觉真实"} butText={"概率真实"} butSrc={staticFile("images/小米事故论/scene_1_5.png")} notContentIndex={1} butContentIndex={3} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/小米事故论/scene_1/scene_1.mp3")} />
        </AbsoluteFill>
    );
};
