import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift, BWTextFocus } from "../../../components";

// 总结升华：掌控大脑，自我保护
const SCENE_DURATION = 44 + 42 + 60 + 30;

export const calculateScene5Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene5: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={44}>
                <BWCenterFocus content={[{"text": "在这个满屏都是情绪诱导和流量套路的时代，", "startFrame": 0, "durationFrames": 44}]} totalDurationFrames={44} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={44} durationInFrames={42}>
                <BWCognitiveShift content={[{"text": "学会把“眼见为实”升级为“数据为实”。", "startFrame": 0, "durationFrames": 42}]} totalDurationFrames={42} notText={"眼见为实"} butText={"数据为实"} butSrc={staticFile("images/template/scene1_1.png")} notContentIndex={0} butContentIndex={0} anchors={[]} />
            </Sequence>
            <Sequence from={86} durationInFrames={60}>
                <BWCenterFocus content={[{"text": "做自己大脑的主人，", "startFrame": 0, "durationFrames": 30}, {"text": "不当流量的提线木偶，", "startFrame": 30, "durationFrames": 30}]} totalDurationFrames={60} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" anchors={[]} />
            </Sequence>
            <Sequence from={146} durationInFrames={30}>
                <BWTextFocus content={[{"text": "就是咱们最高级的自我保护。", "startFrame": 0, "durationFrames": 30}]} totalDurationFrames={30} coreSentence={"最高级的自我保护。"} anchors={[{"text": "自我保护", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>

        </AbsoluteFill>
    );
};
