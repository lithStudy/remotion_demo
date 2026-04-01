import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift } from "../../../components";

// 剖析原因：人类对确定性的渴望
const SCENE_DURATION = 240 + 235 + 295 + 203;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={240}>
                <BWCenterFocus content={[{"text": "说真的，", "startFrame": 0, "durationFrames": 27}, {"text": "这真不能怪我们平时逻辑不够用，", "startFrame": 26, "durationFrames": 69}, {"text": "因为这套说辞背后，", "startFrame": 94, "durationFrames": 48}, {"text": "利用的是人类大脑底层对“确定性”的极度渴望。", "startFrame": 142, "durationFrames": 98}]} totalDurationFrames={240} imageSrc={staticFile("images/可证伪性/scene_2_1.png")} enterEffect="fadeIn" anchors={[{"text": "确定性", "showFrom": 3, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={240} durationInFrames={235}>
                <BWCenterFocus content={[{"text": "我们普通人面对未知和疾病时，", "startFrame": 0, "durationFrames": 68}, {"text": "天然就想抓到一根救命稻草，", "startFrame": 67, "durationFrames": 58}, {"text": "而这种“永远正确”的话术，", "startFrame": 125, "durationFrames": 54}, {"text": "精准地填补了这种心理焦虑。", "startFrame": 178, "durationFrames": 57}]} totalDurationFrames={235} imageSrc={staticFile("images/可证伪性/scene_2_2.png")} enterEffect="fadeIn" anchors={[{"text": "救命稻草", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "心理焦虑", "showFrom": 3, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={475} durationInFrames={295}>
                <BWCenterFocus content={[{"text": "这些套路往往把自己包装成某种高深莫测的传统智慧或者绝对真理，", "startFrame": 0, "durationFrames": 148}, {"text": "让你觉得如果敢怀疑，", "startFrame": 147, "durationFrames": 53}, {"text": "就是你没文化、", "startFrame": 199, "durationFrames": 30}, {"text": "没情怀，", "startFrame": 229, "durationFrames": 23}, {"text": "甚至是不爱国。", "startFrame": 251, "durationFrames": 43}]} totalDurationFrames={295} imageSrc={staticFile("images/可证伪性/scene_2_3.png")} enterEffect="zoomIn" anchors={[{"text": "情感绑架", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "不爱国", "showFrom": 4, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={770} durationInFrames={203}>
                <BWCognitiveShift content={[{"text": "它把原本应该严谨讨论的知识，", "startFrame": 0, "durationFrames": 70}, {"text": "变成了一种情感绑架，", "startFrame": 69, "durationFrames": 51}, {"text": "把我们和理性的真相强行隔离开来。", "startFrame": 120, "durationFrames": 83}]} totalDurationFrames={203} notText={"严谨讨论的知识"} butText={"情感绑架"} butSrc={staticFile("images/可证伪性/scene_2_4.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/可证伪性/scene_2/scene_2.mp3")} />
        </AbsoluteFill>
    );
};
