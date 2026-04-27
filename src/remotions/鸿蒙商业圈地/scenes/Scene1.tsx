import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCognitiveShift, BWTextFocus } from "../../../components";

// 引入：商业圈地运动
const SCENE_DURATION = 82 + 140;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={82}>
                <BWTextFocus content={[{"text": "别再拿国家安全，", "startFrame": 0, "durationFrames": 38}, {"text": "来做鸿蒙的挡箭牌了！", "startFrame": 37, "durationFrames": 45}]} totalDurationFrames={82} coreSentence={["别再拿国家安全", "来做鸿蒙的挡箭牌了！"]} coreSentenceAnchors={[{"coreSentenceAnchor": "国家安全", "color": "red"}, {"coreSentenceAnchor": "挡箭牌", "color": "red"}]} anchors={[]} />
            </Sequence>
            <Sequence from={82} durationInFrames={140}>
                <BWCognitiveShift content={[{"text": "这根本不是什么技术保卫战。", "startFrame": 0, "durationFrames": 57}, {"text": "这只是一场包装完美的，", "startFrame": 56, "durationFrames": 48}, {"text": "商业圈地运动。", "startFrame": 104, "durationFrames": 35}]} totalDurationFrames={140} notText={"技术保卫战"} butText={"商业圈地运动"} butSrc={staticFile("images/鸿蒙商业圈地/scene_1_2.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/鸿蒙商业圈地/scene_1/scene_1.mp3")} />
        </AbsoluteFill>
    );
};
