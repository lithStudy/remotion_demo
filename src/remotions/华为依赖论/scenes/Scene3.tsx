import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWMethodStack, BWTextFocus } from "../../../components";

// 剖析：份额分配的双重逻辑
const SCENE_DURATION = 79 + 300 + 220 + 109;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={79}>
                <BWCenterFocus content={[{"text": "为什么运营商要这么干？", "startFrame": 0, "durationFrames": 47}, {"text": "两个原因。", "startFrame": 46, "durationFrames": 32}]} totalDurationFrames={79} imageSrc={staticFile("images/华为依赖论/scene_3_1.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={79} durationInFrames={300}>
                <BWMethodStack content={[{"text": "第一，", "startFrame": 0, "durationFrames": 18}, {"text": "供应链安全。", "startFrame": 17, "durationFrames": 31}, {"text": "任何理性的运营商，", "startFrame": 48, "durationFrames": 42}, {"text": "都不会把事关国民经济命脉的核心网络，", "startFrame": 89, "durationFrames": 81}, {"text": "绑死在一家公司身上。", "startFrame": 170, "durationFrames": 45}, {"text": "这不是技术判断，", "startFrame": 214, "durationFrames": 39}, {"text": "这是生存本能。", "startFrame": 252, "durationFrames": 47}]} totalDurationFrames={300} title={"供应链安全"} imageSrc={staticFile("images/华为依赖论/scene_3_2.png")} notes={[{"text": "运营商不会把核心网络绑死在一家公司身上", "showFrom": 2}, {"text": "这不是技术判断，是生存本能", "showFrom": 5}]} />
            </Sequence>
            <Sequence from={379} durationInFrames={220}>
                <BWMethodStack content={[{"text": "第二，", "startFrame": 0, "durationFrames": 18}, {"text": "议价能力。", "startFrame": 17, "durationFrames": 29}, {"text": "只有让两到三家供应商同时竞标，", "startFrame": 45, "durationFrames": 90}, {"text": "运营商才能把采购成本压到最低。", "startFrame": 134, "durationFrames": 85}]} totalDurationFrames={220} title={"议价能力"} imageSrc={staticFile("images/华为依赖论/scene_3_3.png")} notes={[{"text": "多家供应商同时竞标，压低采购成本", "showFrom": 2}]} />
            </Sequence>
            <Sequence from={599} durationInFrames={109}>
                <BWTextFocus content={[{"text": "中兴的存在，", "startFrame": 0, "durationFrames": 33}, {"text": "本身就是对华为最大的制衡筹码。", "startFrame": 32, "durationFrames": 76}]} totalDurationFrames={109} coreSentence={["中兴的存在，", "本身就是对华为最大的制衡筹码。"]} coreSentenceAnchors={[{"coreSentenceAnchor": "最大的制衡筹码", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/华为依赖论/scene_3/scene_3.mp3")} />
        </AbsoluteFill>
    );
};
