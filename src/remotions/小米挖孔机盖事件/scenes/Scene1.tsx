import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCauseChain, BWCenterFocus, BWConceptCard, BWTextFocus } from "../../../components";

// 引入：维权公正与信任危机
const SCENE_DURATION = 122 + 101 + 100 + 131 + 136;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={122}>
                <BWCenterFocus content={[{"text": "作为十年的老米粉，", "startFrame": 0, "durationFrames": 51}, {"text": "今天我想说句得罪人的真话。", "startFrame": 50, "durationFrames": 71}]} totalDurationFrames={122} imageSrc={staticFile("images/小米挖孔机盖事件/scene_1_1.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={122} durationInFrames={101}>
                <BWConceptCard content={[{"text": "关于 SU7 Ultra 那个 4 万 2 的挖孔机盖，", "startFrame": 0, "durationFrames": 101}]} totalDurationFrames={101} imageSrc={staticFile("images/小米挖孔机盖事件/scene_1_2.png")} conceptName={"挖孔机盖"} anchors={[]} />
            </Sequence>
            <Sequence from={223} durationInFrames={100}>
                <BWTextFocus content={[{"text": "我们真的欠那些维权车主一个公正的评价。", "startFrame": 0, "durationFrames": 100}]} totalDurationFrames={100} coreSentence={["我们真的欠那些维权车主一个公正的评价。"]} coreSentenceAnchors={[]} />
            </Sequence>
            <Sequence from={323} durationInFrames={131}>
                <BWCauseChain content={[{"text": "很多人觉得，", "startFrame": 0, "durationFrames": 27}, {"text": "既然法院判了“不是欺诈”，", "startFrame": 26, "durationFrames": 55}, {"text": "那车主就是“无理取闹”。", "startFrame": 80, "durationFrames": 51}]} totalDurationFrames={131} layout={"horizontal"} nodes={[{ label: "法院判定", imageSrc: staticFile("images/小米挖孔机盖事件/scene_1_4_img0.png"), showFrom: 1 }, { label: "指责车主", imageSrc: staticFile("images/小米挖孔机盖事件/scene_1_4_img1.png"), showFrom: 2 }]} />
            </Sequence>
            <Sequence from={454} durationInFrames={136}>
                <BWTextFocus content={[{"text": "但我告诉你，", "startFrame": 0, "durationFrames": 28}, {"text": "这种逻辑，", "startFrame": 27, "durationFrames": 36}, {"text": "正在毁掉小米最核心的资产。", "startFrame": 63, "durationFrames": 73}]} totalDurationFrames={136} coreSentence={["这种逻辑", "正在毁掉小米最核心的资产"]} coreSentenceAnchors={[{"coreSentenceAnchor": "毁掉"}, {"coreSentenceAnchor": "最核心的资产"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/小米挖孔机盖事件/scene_1/scene_1.mp3")} />
        </AbsoluteFill>
    );
};
