import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCognitiveShift, BWTextFocus } from "../../../components";

// 引入：商业圈地运动
const SCENE_DURATION = 86 + 142;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={86}>
                <BWTextFocus content={[{"text": "别再拿国家安全，", "startFrame": 0, "durationFrames": 39}, {"text": "来做鸿蒙的挡箭牌了！", "startFrame": 38, "durationFrames": 47}]} totalDurationFrames={86} coreSentence={["别再拿国家安全", "来做鸿蒙的挡箭牌了！"]} coreSentenceAnchors={[{"coreSentenceAnchor": "国家安全", "color": "red"}, {"coreSentenceAnchor": "挡箭牌", "color": "red"}]} anchors={[]} />
            </Sequence>
            <Sequence from={86} durationInFrames={142}>
                <BWCognitiveShift content={[{"text": "这根本不是什么技术保卫战。", "startFrame": 0, "durationFrames": 52}, {"text": "这只是一场包装完美的，", "startFrame": 51, "durationFrames": 52}, {"text": "商业圈地运动。", "startFrame": 103, "durationFrames": 39}]} totalDurationFrames={142} notText={"技术保卫战"} butText={"商业圈地运动"} butSrc={staticFile("images/鸿蒙商业圈地/scene_1_3.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/鸿蒙商业圈地/scene_1/scene_1.mp3")} />
        </AbsoluteFill>
    );
};
