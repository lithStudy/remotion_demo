import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCognitiveShift, BWTextFocus } from "../../../components";

// 引入：商业圈地运动
const SCENE_DURATION = 76 + 142;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={76}>
                <BWTextFocus content={[{"text": "别再拿国家安全，", "startFrame": 0, "durationFrames": 34}, {"text": "来做鸿蒙的挡箭牌了！", "startFrame": 33, "durationFrames": 42}]} totalDurationFrames={76} coreSentence={["别再拿国家安全", "来做鸿蒙的挡箭牌了！"]} coreSentenceAnchors={[{"coreSentenceAnchor": "国家安全", "color": "red"}, {"coreSentenceAnchor": "挡箭牌", "color": "red"}]} anchors={[]} />
            </Sequence>
            <Sequence from={76} durationInFrames={142}>
                <BWCognitiveShift content={[{"text": "这根本不是什么技术保卫战。", "startFrame": 0, "durationFrames": 57}, {"text": "这只是一场包装完美的，", "startFrame": 56, "durationFrames": 53}, {"text": "商业圈地运动。", "startFrame": 109, "durationFrames": 33}]} totalDurationFrames={142} notText={"技术保卫战"} butText={"商业圈地运动"} butSrc={staticFile("images/鸿蒙商业圈地/scene_1_3.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/鸿蒙商业圈地/scene_1/scene_1.mp3")} />
        </AbsoluteFill>
    );
};
