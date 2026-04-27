import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCauseChain, BWCenterFocus, BWCognitiveShift, BWPanelGrid, BWTextFocus } from "../../../components";

// 揭示：垄断代价
const SCENE_DURATION = 216 + 184 + 124 + 145 + 185 + 107 + 147;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={216}>
                <BWCognitiveShift content={[{"text": "我还要告诉你一个事实，", "startFrame": 0, "durationFrames": 51}, {"text": "安卓因为完全开源，", "startFrame": 50, "durationFrames": 46}, {"text": "不需要你付一分钱。", "startFrame": 96, "durationFrames": 45}, {"text": "但鸿蒙，", "startFrame": 140, "durationFrames": 26}, {"text": "是自家的闭源资产！", "startFrame": 165, "durationFrames": 51}]} totalDurationFrames={216} notText={"安卓免费开源"} butText={"鸿蒙闭源资产"} butSrc={staticFile("images/鸿蒙商业圈地/scene_3_1.png")} notContentIndex={1} butContentIndex={3} anchors={[]} />
            </Sequence>
            <Sequence from={216} durationInFrames={184}>
                <BWCauseChain content={[{"text": "现在它不收费，", "startFrame": 0, "durationFrames": 41}, {"text": "是因为安卓还没死！", "startFrame": 40, "durationFrames": 53}, {"text": "一旦生态封锁完成，", "startFrame": 92, "durationFrames": 48}, {"text": "彻底垄断市场。", "startFrame": 140, "durationFrames": 43}]} totalDurationFrames={184} layout={"horizontal"} nodes={[{ label: "免费使用", imageSrc: staticFile("images/鸿蒙商业圈地/scene_3_2_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { label: "安卓存活", imageSrc: staticFile("images/鸿蒙商业圈地/scene_3_2_img1.png"), showFrom: 1, enterEffect: "fadeIn" }, { label: "生态封锁", imageSrc: staticFile("images/鸿蒙商业圈地/scene_3_2_img2.png"), showFrom: 2, enterEffect: "fadeIn" }, { label: "垄断市场", imageSrc: staticFile("images/鸿蒙商业圈地/scene_3_2_img3.png"), showFrom: 3, enterEffect: "fadeIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={400} durationInFrames={124}>
                <BWTextFocus content={[{"text": "你猜猜看，", "startFrame": 0, "durationFrames": 28}, {"text": "那几百亿的研发费。", "startFrame": 27, "durationFrames": 52}, {"text": "最后是谁来买单？", "startFrame": 78, "durationFrames": 45}]} totalDurationFrames={124} coreSentence={["那几百亿的研发费", "最后是谁来买单"]} coreSentenceAnchors={[{"coreSentenceAnchor": "谁来买单", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={524} durationInFrames={145}>
                <BWCenterFocus content={[{"text": "甚至都不用等垄断了，", "startFrame": 0, "durationFrames": 52}, {"text": "就看现在。", "startFrame": 51, "durationFrames": 25}, {"text": "同一个打车软件，", "startFrame": 75, "durationFrames": 39}, {"text": "同一个游戏。", "startFrame": 113, "durationFrames": 31}]} totalDurationFrames={145} imageSrc={staticFile("images/鸿蒙商业圈地/scene_3_4.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={669} durationInFrames={185}>
                <BWPanelGrid content={[{"text": "为了多适配一个鸿蒙系统。", "startFrame": 0, "durationFrames": 60}, {"text": "企业就要多花一倍的开发成本。", "startFrame": 60, "durationFrames": 70}, {"text": "多出一倍的长期维护费。", "startFrame": 129, "durationFrames": 55}]} totalDurationFrames={185} panels={[{ src: staticFile("images/鸿蒙商业圈地/scene_3_5_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { src: staticFile("images/鸿蒙商业圈地/scene_3_5_img1.png"), showFrom: 1, enterEffect: "slideBottom" }, { src: staticFile("images/鸿蒙商业圈地/scene_3_5_img2.png"), showFrom: 2, enterEffect: "zoomIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={854} durationInFrames={107}>
                <BWTextFocus content={[{"text": "你以为这笔钱，", "startFrame": 0, "durationFrames": 33}, {"text": "是资本家自己出了？", "startFrame": 32, "durationFrames": 43}, {"text": "别天真了！", "startFrame": 75, "durationFrames": 32}]} totalDurationFrames={107} coreSentence={["你以为这笔钱，是资本家自己出了？"]} coreSentenceAnchors={[{"coreSentenceAnchor": "资本家！", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={961} durationInFrames={147}>
                <BWTextFocus content={[{"text": "羊毛出在羊身上。", "startFrame": 0, "durationFrames": 51}, {"text": "每一分额外的开销，", "startFrame": 50, "durationFrames": 51}, {"text": "都会转嫁到你的头上。", "startFrame": 100, "durationFrames": 46}]} totalDurationFrames={147} coreSentence={["每一分额外的开销，", "都会转嫁到你的头上。"]} coreSentenceAnchors={[{"coreSentenceAnchor": "转嫁到你的头上", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/鸿蒙商业圈地/scene_3/scene_3.mp3")} />
        </AbsoluteFill>
    );
};
