import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCognitiveShift, BWMethodStack, BWTextFocus } from "../../../components";

// 揭露：个人英雄主义陷阱
const SCENE_DURATION = 208 + 243 + 289;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={208}>
                <BWTextFocus content={[{"text": "只要一提到5G，", "startFrame": 0, "durationFrames": 33}, {"text": "就有人不请自来的吹华为，", "startFrame": 32, "durationFrames": 63}, {"text": "就好像5G是华为发明出来的，", "startFrame": 94, "durationFrames": 60}, {"text": "没有华为就没有5G一样。", "startFrame": 154, "durationFrames": 53}]} totalDurationFrames={208} coreSentence={[{"text": "只要一提到5G，", "showFrom": 0, "endFrom": 3}, {"text": "就有人不请自来的吹华为，", "showFrom": 1, "endFrom": 3}, {"text": "就好像没有华为就没有5G一样。", "showFrom": 2, "endFrom": 3}]} coreSentenceAnchors={[{"coreSentenceAnchor": "不请自来"}, {"coreSentenceAnchor": "吹华为"}, {"coreSentenceAnchor": "没有华为就没有5G"}]} />
            </Sequence>
            <Sequence from={208} durationInFrames={243}>
                <BWMethodStack content={[{"text": "我不知道这种论调是谁提出来的，", "startFrame": 0, "durationFrames": 70}, {"text": "但是很显然他带着非常恶毒的目的—", "startFrame": 69, "durationFrames": 79}, {"text": "要么是为了贩卖情绪，", "startFrame": 148, "durationFrames": 47}, {"text": "要么是为了收割流量。", "startFrame": 195, "durationFrames": 47}]} totalDurationFrames={243} title={"恶毒的论调"} imageSrc={staticFile("images/华为的5G迷思/scene_1_2.png")} notes={[{"text": "贩卖情绪", "showFrom": 2}, {"text": "收割流量", "showFrom": 3}]} />
            </Sequence>
            <Sequence from={451} durationInFrames={289}>
                <BWCognitiveShift content={[{"text": "他希望我们误以为5G的诞生、进步、普及，", "startFrame": 0, "durationFrames": 106}, {"text": "都是某一家公司的个人英雄主义结果，", "startFrame": 105, "durationFrames": 74}, {"text": "进而忽略了背后庞大而复杂的全球合作与科学积累。", "startFrame": 178, "durationFrames": 110}]} totalDurationFrames={289} notText={"个人英雄主义"} butText={"全球合作与科学积累"} butSrc={staticFile("images/华为的5G迷思/scene_1_3.png")} notContentIndex={1} butContentIndex={2} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/华为的5G迷思/scene_1/scene_1.mp3")} />
        </AbsoluteFill>
    );
};
