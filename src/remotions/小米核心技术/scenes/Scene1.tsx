import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift } from "../../../components";

// 引入：核心技术误区
const SCENE_DURATION = 31 + 33 + 33;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={31}>
                <BWCenterFocus content={[{"text": "争论小米有没有核心技术的人，", "startFrame": 0, "durationFrames": 31}]} totalDurationFrames={31} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" anchors={[{"text": "核心技术", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": null}]} />
            </Sequence>
            <Sequence from={31} durationInFrames={33}>
                <BWCognitiveShift content={[{"text": "不仅没搞懂到底什么叫核心技术，", "startFrame": 0, "durationFrames": 33}]} totalDurationFrames={33} notText={"没搞懂核心技术"} butText={"掌握研发底牌"} butSrc={staticFile("images/template/scene1_1.png")} notContentIndex={0} butContentIndex={0} anchors={[]} />
            </Sequence>
            <Sequence from={64} durationInFrames={33}>
                <BWCenterFocus content={[{"text": "更对它的恐怖研发底牌一无所知。", "startFrame": 0, "durationFrames": 33}]} totalDurationFrames={33} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>

        </AbsoluteFill>
    );
};
