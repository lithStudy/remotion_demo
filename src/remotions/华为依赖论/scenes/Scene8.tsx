import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCauseChain, BWTextFocus } from "../../../components";

// 反转：华为消失的假设
const SCENE_DURATION = 362 + 121;

export const calculateScene8Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene8: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={362}>
                <BWCauseChain content={[{"text": "说句不好听的，", "startFrame": 0, "durationFrames": 36}, {"text": "就算华为明天消失了，", "startFrame": 36, "durationFrames": 58}, {"text": "半年之内，", "startFrame": 93, "durationFrames": 30}, {"text": "中兴、大唐等厂商，", "startFrame": 123, "durationFrames": 63}, {"text": "就能把华为的市场全部接住。", "startFrame": 185, "durationFrames": 75}, {"text": "从基站硬件到核心网软件，全面替换。", "startFrame": 259, "durationFrames": 102}]} totalDurationFrames={362} nodes={[{ label: "假设消失", imageSrc: staticFile("images/华为依赖论/scene_8_1_img0.png"), showFrom: 1 }, { label: "半年接替", imageSrc: staticFile("images/华为依赖论/scene_8_1_img1.png"), showFrom: 3 }, { label: "全面替换", imageSrc: staticFile("images/华为依赖论/scene_8_1_img2.png"), showFrom: 5 }]} />
            </Sequence>
            <Sequence from={362} durationInFrames={121}>
                <BWTextFocus content={[{"text": "你在手机上刷视频、打电话，", "startFrame": 0, "durationFrames": 69}, {"text": "甚至感觉不到任何变化。", "startFrame": 68, "durationFrames": 53}]} totalDurationFrames={121} coreSentence={["你在手机上刷视频、打电话，", "甚至感觉不到任何变化。"]} coreSentenceAnchors={[{"coreSentenceAnchor": "感觉不到任何变化", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/华为依赖论/scene_8/scene_8.mp3")} />
        </AbsoluteFill>
    );
};
