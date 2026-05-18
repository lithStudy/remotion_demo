import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWConceptCard } from "../../../components";

// 引入：开源不是技术游戏
const SCENE_DURATION = 206 + 118 + 143;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={206}>
                <BWCenterFocus content={[{"text": "我为什么特别讨厌鸿蒙？", "startFrame": 0, "durationFrames": 47}, {"text": "因为鸿蒙破坏了开源精神。", "startFrame": 46, "durationFrames": 74}, {"text": "作为一个程序员，这是我最不能容忍的事情。", "startFrame": 120, "durationFrames": 86}]} totalDurationFrames={206} imageSrc={staticFile("images/开源精神/scene_1_1.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={206} durationInFrames={118}>
                <BWCenterFocus content={[{"text": "很多人以为，", "startFrame": 0, "durationFrames": 33}, {"text": "“开源”", "startFrame": 32, "durationFrames": 22}, {"text": "只是程序员圈子里的技术游戏。", "startFrame": 54, "durationFrames": 64}]} totalDurationFrames={118} imageSrc={staticFile("images/开源精神/scene_1_2.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={324} durationInFrames={143}>
                <BWConceptCard content={[{"text": "但其实，", "startFrame": 0, "durationFrames": 24}, {"text": "开源是现代文明社会里，", "startFrame": 24, "durationFrames": 53}, {"text": "最伟大的一次“资产普惠”。", "startFrame": 76, "durationFrames": 67}]} totalDurationFrames={143} imageSrc={staticFile("images/开源精神/scene_1_3.png")} conceptName={"开源"} />
            </Sequence>
            <Audio src={staticFile("/audio/开源精神/scene_1/scene_1.mp3")} />
        </AbsoluteFill>
    );
};
