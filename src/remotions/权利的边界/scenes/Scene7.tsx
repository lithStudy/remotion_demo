import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWBeatSequence, BWCognitiveShift, BWConceptCard, BWMagnifyingGlass, BWPanelGrid, BWSplitCompare, BWTextFocus } from "../../../components";

// 升华·边界文明
const SCENE_DURATION = 103 + 117 + 111 + 167 + 108 + 105 + 226 + 110;

export const calculateScene7Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene7: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={103}>
                <BWMagnifyingGlass content={[{"text": "所以，", "startFrame": 0, "durationFrames": 20}, {"text": "一间破房子挡住国王，", "startFrame": 19, "durationFrames": 53}, {"text": "靠的不是锁。", "startFrame": 72, "durationFrames": 31}]} totalDurationFrames={103} anchors={[{"text": "不是锁", "showFrom": 2, "color": "#EF4444", "anim": "popIn", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={103} durationInFrames={117}>
                <BWConceptCard content={[{"text": "靠的是所有人都承认，", "startFrame": 0, "durationFrames": 50}, {"text": "哪怕他再弱，", "startFrame": 49, "durationFrames": 34}, {"text": "这里也有一条线。", "startFrame": 82, "durationFrames": 34}]} totalDurationFrames={117} imageSrc={staticFile("images/权利的边界/scene_7_2.png")} conceptName={"私人边界"} anchors={[]} />
            </Sequence>
            <Sequence from={220} durationInFrames={111}>
                <BWSplitCompare content={[{"text": "线外，", "startFrame": 0, "durationFrames": 21}, {"text": "是公共权力。", "startFrame": 20, "durationFrames": 35}, {"text": "线内，", "startFrame": 55, "durationFrames": 20}, {"text": "是私人生活。", "startFrame": 75, "durationFrames": 35}]} totalDurationFrames={111} leftSrc={staticFile("images/权利的边界/scene_7_3_left.png")} rightSrc={staticFile("images/权利的边界/scene_7_3_right.png")} leftLabel={"公共权力"} rightLabel={"私人生活"} leftShowFrom={0} rightShowFrom={2} anchors={[]} />
            </Sequence>
            <Sequence from={331} durationInFrames={167}>
                <BWPanelGrid content={[{"text": "权力可以强大。", "startFrame": 0, "durationFrames": 36}, {"text": "但不能无处不在。", "startFrame": 35, "durationFrames": 36}, {"text": "国家确实重要。", "startFrame": 71, "durationFrames": 42}, {"text": "但不能吞掉每一个人的门槛。", "startFrame": 113, "durationFrames": 54}]} totalDurationFrames={167} panels={[{ src: staticFile("images/权利的边界/scene_7_4_img0.png"), showFrom: 0, enterEffect: "zoomIn" }, { src: staticFile("images/权利的边界/scene_7_4_img1.png"), showFrom: 1, enterEffect: "fadeIn" }, { src: staticFile("images/权利的边界/scene_7_4_img2.png"), showFrom: 2, enterEffect: "fadeIn" }, { src: staticFile("images/权利的边界/scene_7_4_img3.png"), showFrom: 3, enterEffect: "fadeIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={498} durationInFrames={108}>
                <BWBeatSequence content={[{"text": "房子可以破。", "startFrame": 0, "durationFrames": 34}, {"text": "墙可以漏。", "startFrame": 33, "durationFrames": 34}, {"text": "生活可以艰难。", "startFrame": 67, "durationFrames": 41}]} totalDurationFrames={108} stages={[{ imageSrc: staticFile("images/权利的边界/scene_7_5_img0.png"), enterEffect: "breathe", tone: "calm" }, { imageSrc: staticFile("images/权利的边界/scene_7_5_img1.png"), enterEffect: "slideBottom", tone: "alert" }, { imageSrc: staticFile("images/权利的边界/scene_7_5_img2.png"), enterEffect: "slideBottom", tone: "alert" }]} anchors={[]} />
            </Sequence>
            <Sequence from={606} durationInFrames={105}>
                <BWTextFocus content={[{"text": "但只要那条边界还在，", "startFrame": 0, "durationFrames": 47}, {"text": "普通人就还有站立的地方。", "startFrame": 46, "durationFrames": 58}]} totalDurationFrames={105} coreSentence={[{"text": "但只要那条边界还在，", "showFrom": 0}, {"text": "普通人就还有站立的地方。", "showFrom": 1, "endFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "那条边界", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={711} durationInFrames={226}>
                <BWCognitiveShift content={[{"text": "真正可怕的，", "startFrame": 0, "durationFrames": 36}, {"text": "不是风进来了，", "startFrame": 36, "durationFrames": 32}, {"text": "不是雨进来了。", "startFrame": 67, "durationFrames": 40}, {"text": "而是有一天，", "startFrame": 106, "durationFrames": 25}, {"text": "国王进来了。", "startFrame": 130, "durationFrames": 36}, {"text": "大家还觉得，", "startFrame": 166, "durationFrames": 27}, {"text": "这很正常。", "startFrame": 192, "durationFrames": 33}]} totalDurationFrames={226} notText={"风雨进来"} butText={"国王进来了"} butSrc={staticFile("images/权利的边界/scene_7_7.png")} notContentIndex={1} butContentIndex={4} anchors={[]} />
            </Sequence>
            <Sequence from={937} durationInFrames={110}>
                <BWTextFocus content={[{"text": "那一刻，", "startFrame": 0, "durationFrames": 19}, {"text": "破掉的就不是房子。", "startFrame": 18, "durationFrames": 38}, {"text": "是文明本身。", "startFrame": 56, "durationFrames": 54}]} totalDurationFrames={110} coreSentence={[{"text": "那一刻，", "showFrom": 0, "endFrom": 0}, {"text": "破掉的就不是房子。", "showFrom": 1}, {"text": "是文明本身。", "showFrom": 2, "endFrom": 2}]} coreSentenceAnchors={[{"coreSentenceAnchor": "文明本身", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/权利的边界/scene_7/scene_7.mp3")} />
        </AbsoluteFill>
    );
};
