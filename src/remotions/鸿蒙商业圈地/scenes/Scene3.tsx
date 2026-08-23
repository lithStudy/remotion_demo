import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCauseChain, BWCenterFocus, BWCognitiveShift, BWPanelGrid, BWTextFocus } from "../../../components";

// 揭示：垄断代价
const SCENE_DURATION = 204 + 165 + 118 + 145 + 189 + 105 + 146;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={204}>
                <BWCognitiveShift content={[{"text": "我还要告诉你一个事实，", "startFrame": 0, "durationFrames": 45}, {"text": "安卓因为完全开源，", "startFrame": 44, "durationFrames": 50}, {"text": "不需要你付一分钱。", "startFrame": 93, "durationFrames": 36}, {"text": "但鸿蒙，", "startFrame": 129, "durationFrames": 22}, {"text": "是自家的闭源资产！", "startFrame": 151, "durationFrames": 53}]} totalDurationFrames={204} notText={"安卓免费开源"} butText={"鸿蒙闭源资产"} butSrc={staticFile("images/鸿蒙商业圈地/scene_3_1.png")} notContentIndex={1} butContentIndex={3} anchors={[]} />
            </Sequence>
            <Sequence from={204} durationInFrames={165}>
                <BWCauseChain content={[{"text": "现在它不收费，", "startFrame": 0, "durationFrames": 35}, {"text": "是因为安卓还没死！", "startFrame": 34, "durationFrames": 45}, {"text": "一旦生态封锁完成，", "startFrame": 79, "durationFrames": 42}, {"text": "彻底垄断市场。", "startFrame": 120, "durationFrames": 44}]} totalDurationFrames={165} layout={"horizontal"} nodes={[{ label: "免费使用", imageSrc: staticFile("images/鸿蒙商业圈地/scene_3_2_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { label: "安卓存活", imageSrc: staticFile("images/鸿蒙商业圈地/scene_3_2_img1.png"), showFrom: 1, enterEffect: "fadeIn" }, { label: "生态封锁", imageSrc: staticFile("images/鸿蒙商业圈地/scene_3_2_img2.png"), showFrom: 2, enterEffect: "fadeIn" }, { label: "垄断市场", imageSrc: staticFile("images/鸿蒙商业圈地/scene_3_2_img3.png"), showFrom: 3, enterEffect: "fadeIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={369} durationInFrames={118}>
                <BWTextFocus content={[{"text": "你猜猜看，", "startFrame": 0, "durationFrames": 29}, {"text": "那几百亿的研发费。", "startFrame": 28, "durationFrames": 48}, {"text": "最后是谁来买单？", "startFrame": 76, "durationFrames": 42}]} totalDurationFrames={118} coreSentence={["那几百亿的研发费", "最后是谁来买单"]} coreSentenceAnchors={[{"coreSentenceAnchor": "谁来买单", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={487} durationInFrames={145}>
                <BWCenterFocus content={[{"text": "甚至都不用等垄断了，", "startFrame": 0, "durationFrames": 48}, {"text": "就看现在。", "startFrame": 47, "durationFrames": 24}, {"text": "同一个打车软件，", "startFrame": 71, "durationFrames": 42}, {"text": "同一个游戏。", "startFrame": 112, "durationFrames": 32}]} totalDurationFrames={145} imageSrc={staticFile("images/鸿蒙商业圈地/scene_3_4.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={632} durationInFrames={189}>
                <BWPanelGrid content={[{"text": "为了多适配一个鸿蒙系统。", "startFrame": 0, "durationFrames": 58}, {"text": "企业就要多花一倍的开发成本。", "startFrame": 57, "durationFrames": 77}, {"text": "多出一倍的长期维护费。", "startFrame": 133, "durationFrames": 55}]} totalDurationFrames={189} panels={[{ src: staticFile("images/鸿蒙商业圈地/scene_3_5_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { src: staticFile("images/鸿蒙商业圈地/scene_3_5_img1.png"), showFrom: 1, enterEffect: "slideBottom" }, { src: staticFile("images/鸿蒙商业圈地/scene_3_5_img2.png"), showFrom: 2, enterEffect: "zoomIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={821} durationInFrames={105}>
                <BWTextFocus content={[{"text": "你以为这笔钱，", "startFrame": 0, "durationFrames": 33}, {"text": "是资本家自己出了？", "startFrame": 32, "durationFrames": 44}, {"text": "别天真了！", "startFrame": 76, "durationFrames": 29}]} totalDurationFrames={105} coreSentence={["你以为这笔钱，是资本家自己出了？"]} coreSentenceAnchors={[{"coreSentenceAnchor": "资本家！", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={926} durationInFrames={146}>
                <BWTextFocus content={[{"text": "羊毛出在羊身上。", "startFrame": 0, "durationFrames": 44}, {"text": "每一分额外的开销，", "startFrame": 43, "durationFrames": 51}, {"text": "都会转嫁到你的头上。", "startFrame": 93, "durationFrames": 52}]} totalDurationFrames={146} coreSentence={["每一分额外的开销，", "都会转嫁到你的头上。"]} coreSentenceAnchors={[{"coreSentenceAnchor": "转嫁到你的头上", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/鸿蒙商业圈地/scene_3/scene_3.mp3")} />
        </AbsoluteFill>
    );
};
