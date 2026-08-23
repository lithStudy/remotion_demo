import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWConceptCard, BWPunchCaption, BWTextFocus } from "../../../components";

// 引入：开源不是技术游戏
const SCENE_DURATION = 54 + 151 + 108 + 118 + 129;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={54}>
                <BWPunchCaption content={[{"text": "我为什么特别讨厌鸿蒙？", "startFrame": 0, "durationFrames": 54}]} totalDurationFrames={54} punches={[{"text": "我为什么特别讨厌鸿蒙？", "showFrom": 0, "enterEffect": "snap", "tone": "alert"}]} anchors={[{"text": "讨厌鸿蒙", "showFrom": 0, "color": "#EF4444", "anim": "popIn", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={54} durationInFrames={151}>
                <BWTextFocus content={[{"text": "因为鸿蒙至少在5.0之前，", "startFrame": 0, "durationFrames": 62}, {"text": "一边套壳安卓，", "startFrame": 61, "durationFrames": 42}, {"text": "一边宣称完全自研。", "startFrame": 102, "durationFrames": 48}]} totalDurationFrames={151} coreSentence={[{"text": "因为鸿蒙至少在5.0之前，", "startFrame": 0, "durationFrames": 54}, {"text": "一边套壳安卓，", "startFrame": 53, "durationFrames": 54}, {"text": "一边宣称完全自研。", "startFrame": 53, "durationFrames": 54}]} coreSentenceAnchors={[{"coreSentenceAnchor": "套壳安卓", "color": "#EF4444"}, {"coreSentenceAnchor": "完全自研", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={205} durationInFrames={108}>
                <BWCenterFocus content={[{"text": "这种严重破坏开源精神的操作，", "startFrame": 0, "durationFrames": 66}, {"text": "让我相当的反感。", "startFrame": 65, "durationFrames": 43}]} totalDurationFrames={108} imageSrc={staticFile("images/开源精神/scene_1_1.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={313} durationInFrames={118}>
                <BWCenterFocus content={[{"text": "很多人以为，", "startFrame": 0, "durationFrames": 28}, {"text": "“开源”", "startFrame": 27, "durationFrames": 16}, {"text": "只是程序员圈子里的技术游戏。", "startFrame": 42, "durationFrames": 76}]} totalDurationFrames={118} imageSrc={staticFile("images/开源精神/scene_1_2.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={431} durationInFrames={129}>
                <BWConceptCard content={[{"text": "但其实，", "startFrame": 0, "durationFrames": 20}, {"text": "开源是现代文明社会里，", "startFrame": 19, "durationFrames": 55}, {"text": "最伟大的一次“资产普惠”。", "startFrame": 74, "durationFrames": 55}]} totalDurationFrames={129} imageSrc={staticFile("images/开源精神/scene_1_3.png")} conceptName={"开源"} />
            </Sequence>
            <Audio src={staticFile("/audio/开源精神/scene_1/scene_1.mp3")} />
        </AbsoluteFill>
    );
};
