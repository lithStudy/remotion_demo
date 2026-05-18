import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift, BWConceptCard, BWPanelGrid } from "../../../components";

// 引入：万能灵药的帽子
const SCENE_DURATION = 97 + 90 + 75 + 65;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={97}>
                <BWConceptCard content={[{"text": "现在的互联网，", "startFrame": 0, "durationFrames": 30}, {"text": "有个词成了封杀博主的“万能灵药”，", "startFrame": 30, "durationFrames": 37}, {"text": "叫“搞对立”。", "startFrame": 67, "durationFrames": 30}]} totalDurationFrames={97} imageSrc={staticFile("images/template/scene1_1.png")} conceptName={"搞对立"} anchors={[]} />
            </Sequence>
            <Sequence from={97} durationInFrames={90}>
                <BWPanelGrid content={[{"text": "两性话题是搞对立，", "startFrame": 0, "durationFrames": 30}, {"text": "劳资争议是搞对立，", "startFrame": 30, "durationFrames": 30}, {"text": "城乡差异是搞对立，", "startFrame": 60, "durationFrames": 30}]} totalDurationFrames={90} panels={[{ src: staticFile("images/template/scene1_1.png"), showFrom: 0, enterEffect: "zoomIn" }, { src: staticFile("images/template/scene1_1.png"), showFrom: 1, enterEffect: "slideLeft" }, { src: staticFile("images/template/scene1_1.png"), showFrom: 2, enterEffect: "fadeIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={187} durationInFrames={75}>
                <BWCenterFocus content={[{"text": "甚至连豆腐脑吃甜的还是咸的，", "startFrame": 0, "durationFrames": 31}, {"text": "吵得凶了都能扣上一顶“搞对立”的大帽子。", "startFrame": 31, "durationFrames": 44}]} totalDurationFrames={75} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="zoomIn" anchors={[]} />
            </Sequence>
            <Sequence from={262} durationInFrames={65}>
                <BWCognitiveShift content={[{"text": "但我今天想撕开这个词的温情面纱，", "startFrame": 0, "durationFrames": 35}, {"text": "聊聊它的无赖属性。", "startFrame": 35, "durationFrames": 30}]} totalDurationFrames={65} notText={"温情面纱"} butText={"无赖属性"} butSrc={staticFile("images/template/scene1_1.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>

        </AbsoluteFill>
    );
};
