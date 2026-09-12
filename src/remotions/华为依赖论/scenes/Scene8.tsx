import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCauseChain, BWTextFocus } from "../../../components";

// 反转：华为消失的假设
const SCENE_DURATION = 313 + 118;

export const calculateScene8Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene8: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={313}>
                <BWCauseChain content={[{"text": "说句不好听的，", "startFrame": 0, "durationFrames": 32}, {"text": "就算华为明天消失了，", "startFrame": 31, "durationFrames": 50}, {"text": "半年之内，", "startFrame": 80, "durationFrames": 31}, {"text": "中兴、大唐等厂商，", "startFrame": 111, "durationFrames": 45}, {"text": "就能把华为的市场全部接住。", "startFrame": 156, "durationFrames": 53}, {"text": "从基站硬件到核心网软件，全面替换。", "startFrame": 208, "durationFrames": 104}]} totalDurationFrames={313} nodes={[{ label: "假设消失", imageSrc: staticFile("images/华为依赖论/scene_8_1_img0.png"), showFrom: 1 }, { label: "半年接替", imageSrc: staticFile("images/华为依赖论/scene_8_1_img1.png"), showFrom: 3 }, { label: "全面替换", imageSrc: staticFile("images/华为依赖论/scene_8_1_img2.png"), showFrom: 5 }]} />
            </Sequence>
            <Sequence from={313} durationInFrames={118}>
                <BWTextFocus content={[{"text": "你在手机上刷视频、打电话，", "startFrame": 0, "durationFrames": 69}, {"text": "甚至感觉不到任何变化。", "startFrame": 68, "durationFrames": 49}]} totalDurationFrames={118} coreSentence={["你在手机上刷视频、打电话，", "甚至感觉不到任何变化。"]} coreSentenceAnchors={[{"coreSentenceAnchor": "感觉不到任何变化", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/华为依赖论/scene_8/scene_8.mp3")} />
        </AbsoluteFill>
    );
};
