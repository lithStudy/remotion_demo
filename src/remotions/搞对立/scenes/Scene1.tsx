import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift, BWConceptCard, BWPanelGrid } from "../../../components";

// 引入：万能灵药的帽子
const SCENE_DURATION = 137 + 162 + 179 + 128;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={137}>
                <BWConceptCard content={[{"text": "现在的互联网，", "startFrame": 0, "durationFrames": 35}, {"text": "有个词成了封杀博主的“万能灵药”，", "startFrame": 34, "durationFrames": 68}, {"text": "叫“搞对立”。", "startFrame": 102, "durationFrames": 34}]} totalDurationFrames={137} imageSrc={staticFile("images/搞对立/scene_1_1.png")} conceptName={"搞对立"} anchors={[]} />
            </Sequence>
            <Sequence from={137} durationInFrames={162}>
                <BWPanelGrid content={[{"text": "两性话题是搞对立，", "startFrame": 0, "durationFrames": 54}, {"text": "劳资争议是搞对立，", "startFrame": 53, "durationFrames": 53}, {"text": "城乡差异是搞对立，", "startFrame": 105, "durationFrames": 56}]} totalDurationFrames={162} panels={[{ src: staticFile("images/搞对立/scene_1_2_img0.png"), showFrom: 0, enterEffect: "zoomIn" }, { src: staticFile("images/搞对立/scene_1_2_img1.png"), showFrom: 1, enterEffect: "slideLeft" }, { src: staticFile("images/搞对立/scene_1_2_img2.png"), showFrom: 2, enterEffect: "fadeIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={299} durationInFrames={179}>
                <BWCenterFocus content={[{"text": "甚至连豆腐脑吃甜的还是咸的，", "startFrame": 0, "durationFrames": 81}, {"text": "吵得凶了都能扣上一顶“搞对立”的大帽子。", "startFrame": 80, "durationFrames": 99}]} totalDurationFrames={179} imageSrc={staticFile("images/搞对立/scene_1_3.png")} enterEffect="zoomIn" anchors={[]} />
            </Sequence>
            <Sequence from={478} durationInFrames={128}>
                <BWCognitiveShift content={[{"text": "但我今天想撕开这个词的温情面纱，", "startFrame": 0, "durationFrames": 79}, {"text": "聊聊它的无赖属性。", "startFrame": 78, "durationFrames": 50}]} totalDurationFrames={128} notText={"温情面纱"} butText={"无赖属性"} butSrc={staticFile("images/搞对立/scene_1_4.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/搞对立/scene_1/scene_1.mp3")} />
        </AbsoluteFill>
    );
};
