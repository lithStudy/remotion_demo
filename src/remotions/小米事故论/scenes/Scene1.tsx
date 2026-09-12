import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCognitiveShift, BWMagnifyingGlass, BWPanelGrid, BWTextFocus } from "../../../components";

// 开篇
const SCENE_DURATION = 74 + 149 + 197 + 109 + 127;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={74}>
                <BWTextFocus content={[{"text": "小米车，", "startFrame": 0, "durationFrames": 28}, {"text": "真的更容易出事吗？", "startFrame": 27, "durationFrames": 46}]} totalDurationFrames={74} coreSentence={[{"text": "小米车，", "showFrom": 0}, {"text": "真的更容易出事吗？", "showFrom": 1, "endFrom": 1}]} coreSentenceAnchors={[]} />
            </Sequence>
            <Sequence from={74} durationInFrames={149}>
                <BWCognitiveShift content={[{"text": "作为一个有理智的人，", "startFrame": 0, "durationFrames": 40}, {"text": "看一个品牌有没有问题，", "startFrame": 39, "durationFrames": 47}, {"text": "不应该是看热搜，", "startFrame": 86, "durationFrames": 36}, {"text": "而是看数据。", "startFrame": 122, "durationFrames": 27}]} totalDurationFrames={149} notText={"看热搜"} butText={"看数据"} butSrc={staticFile("images/小米事故论/scene_1_2.png")} notContentIndex={2} butContentIndex={3} anchors={[]} />
            </Sequence>
            <Sequence from={223} durationInFrames={197}>
                <BWPanelGrid content={[{"text": "你刷到的标题，", "startFrame": 0, "durationFrames": 36}, {"text": "通常很吓人。", "startFrame": 36, "durationFrames": 43}, {"text": "小米又起火了。", "startFrame": 78, "durationFrames": 38}, {"text": "小米又撞了。", "startFrame": 115, "durationFrames": 31}, {"text": "小米又上绿化带了。", "startFrame": 145, "durationFrames": 51}]} totalDurationFrames={197} panels={[{ src: staticFile("images/小米事故论/scene_1_3_img0.png"), showFrom: 2, enterEffect: "breathe" }, { src: staticFile("images/小米事故论/scene_1_3_img1.png"), showFrom: 3, enterEffect: "slideLeft" }, { src: staticFile("images/小米事故论/scene_1_3_img2.png"), showFrom: 4, enterEffect: "slideBottom" }]} anchors={[]} />
            </Sequence>
            <Sequence from={420} durationInFrames={109}>
                <BWMagnifyingGlass content={[{"text": "看多了，", "startFrame": 0, "durationFrames": 24}, {"text": "你会产生一个感觉：", "startFrame": 23, "durationFrames": 43}, {"text": "这车是不是有问题？", "startFrame": 66, "durationFrames": 42}]} totalDurationFrames={109} anchors={[{"text": "有问题", "showFrom": 2, "color": "#EF4444", "anim": "popIn", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={529} durationInFrames={127}>
                <BWCognitiveShift content={[{"text": "这个感觉，", "startFrame": 0, "durationFrames": 21}, {"text": "当然真实。", "startFrame": 20, "durationFrames": 30}, {"text": "但感觉真实，", "startFrame": 50, "durationFrames": 36}, {"text": "不等于概率真实。", "startFrame": 86, "durationFrames": 41}]} totalDurationFrames={127} notText={"感觉真实"} butText={"概率真实"} butSrc={staticFile("images/小米事故论/scene_1_5.png")} notContentIndex={1} butContentIndex={3} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/小米事故论/scene_1/scene_1.mp3")} />
        </AbsoluteFill>
    );
};
