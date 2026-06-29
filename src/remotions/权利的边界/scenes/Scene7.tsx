import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWBeatSequence, BWCognitiveShift, BWConceptCard, BWMagnifyingGlass, BWPanelGrid, BWSplitCompare, BWTextFocus } from "../../../components";

// 升华·边界文明
const SCENE_DURATION = 99 + 108 + 115 + 173 + 102 + 106 + 210 + 109;

export const calculateScene7Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene7: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={99}>
                <BWMagnifyingGlass content={[{"text": "所以，", "startFrame": 0, "durationFrames": 21}, {"text": "一间破房子挡住国王，", "startFrame": 20, "durationFrames": 56}, {"text": "靠的不是锁。", "startFrame": 76, "durationFrames": 22}]} totalDurationFrames={99} anchors={[{"text": "不是锁", "showFrom": 2, "color": "#EF4444", "anim": "popIn", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={99} durationInFrames={108}>
                <BWConceptCard content={[{"text": "靠的是所有人都承认，", "startFrame": 0, "durationFrames": 43}, {"text": "哪怕他再弱，", "startFrame": 42, "durationFrames": 33}, {"text": "这里也有一条线。", "startFrame": 75, "durationFrames": 33}]} totalDurationFrames={108} imageSrc={staticFile("images/权利的边界/scene_7_2.png")} conceptName={"私人边界"} anchors={[]} />
            </Sequence>
            <Sequence from={207} durationInFrames={115}>
                <BWSplitCompare content={[{"text": "线外，", "startFrame": 0, "durationFrames": 21}, {"text": "是公共权力。", "startFrame": 20, "durationFrames": 39}, {"text": "线内，", "startFrame": 58, "durationFrames": 19}, {"text": "是私人生活。", "startFrame": 77, "durationFrames": 38}]} totalDurationFrames={115} leftSrc={staticFile("images/权利的边界/scene_7_3_left.png")} rightSrc={staticFile("images/权利的边界/scene_7_3_right.png")} leftLabel={"公共权力"} rightLabel={"私人生活"} leftShowFrom={0} rightShowFrom={2} anchors={[]} />
            </Sequence>
            <Sequence from={322} durationInFrames={173}>
                <BWPanelGrid content={[{"text": "权力可以强大。", "startFrame": 0, "durationFrames": 37}, {"text": "但不能无处不在。", "startFrame": 36, "durationFrames": 43}, {"text": "国家确实重要。", "startFrame": 79, "durationFrames": 43}, {"text": "但不能吞掉每一个人的门槛。", "startFrame": 121, "durationFrames": 51}]} totalDurationFrames={173} panels={[{ src: staticFile("images/权利的边界/scene_7_4_img0.png"), showFrom: 0, enterEffect: "zoomIn" }, { src: staticFile("images/权利的边界/scene_7_4_img1.png"), showFrom: 1, enterEffect: "fadeIn" }, { src: staticFile("images/权利的边界/scene_7_4_img2.png"), showFrom: 2, enterEffect: "fadeIn" }, { src: staticFile("images/权利的边界/scene_7_4_img3.png"), showFrom: 3, enterEffect: "fadeIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={495} durationInFrames={102}>
                <BWBeatSequence content={[{"text": "房子可以破。", "startFrame": 0, "durationFrames": 29}, {"text": "墙可以漏。", "startFrame": 28, "durationFrames": 28}, {"text": "生活可以艰难。", "startFrame": 55, "durationFrames": 46}]} totalDurationFrames={102} stages={[{ imageSrc: staticFile("images/权利的边界/scene_7_5_img0.png"), enterEffect: "breathe", tone: "calm" }, { imageSrc: staticFile("images/权利的边界/scene_7_5_img1.png"), enterEffect: "slideBottom", tone: "alert" }, { imageSrc: staticFile("images/权利的边界/scene_7_5_img2.png"), enterEffect: "slideBottom", tone: "alert" }]} anchors={[]} />
            </Sequence>
            <Sequence from={597} durationInFrames={106}>
                <BWTextFocus content={[{"text": "但只要那条边界还在，", "startFrame": 0, "durationFrames": 46}, {"text": "普通人就还有站立的地方。", "startFrame": 45, "durationFrames": 61}]} totalDurationFrames={106} coreSentence={[{"text": "但只要那条边界还在，", "showFrom": 0}, {"text": "普通人就还有站立的地方。", "showFrom": 1, "endFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "那条边界", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={703} durationInFrames={210}>
                <BWCognitiveShift content={[{"text": "真正可怕的，", "startFrame": 0, "durationFrames": 27}, {"text": "不是风进来了，", "startFrame": 26, "durationFrames": 28}, {"text": "不是雨进来了。", "startFrame": 53, "durationFrames": 34}, {"text": "而是有一天，", "startFrame": 87, "durationFrames": 33}, {"text": "国王进来了。", "startFrame": 120, "durationFrames": 32}, {"text": "大家还觉得，", "startFrame": 151, "durationFrames": 30}, {"text": "这很正常。", "startFrame": 180, "durationFrames": 30}]} totalDurationFrames={210} notText={"风雨进来"} butText={"国王进来了"} butSrc={staticFile("images/权利的边界/scene_7_7.png")} notContentIndex={1} butContentIndex={4} anchors={[]} />
            </Sequence>
            <Sequence from={913} durationInFrames={109}>
                <BWTextFocus content={[{"text": "那一刻，", "startFrame": 0, "durationFrames": 19}, {"text": "破掉的就不是房子。", "startFrame": 18, "durationFrames": 38}, {"text": "是文明本身。", "startFrame": 56, "durationFrames": 52}]} totalDurationFrames={109} coreSentence={[{"text": "那一刻，", "showFrom": 0, "endFrom": 0}, {"text": "破掉的就不是房子。", "showFrom": 1}, {"text": "是文明本身。", "showFrom": 2, "endFrom": 2}]} coreSentenceAnchors={[{"coreSentenceAnchor": "文明本身", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/权利的边界/scene_7/scene_7.mp3")} />
        </AbsoluteFill>
    );
};
