import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWBeatSequence } from "../../../components";

// 引入
const SCENE_DURATION = 208;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={208}>
                <BWBeatSequence content={[{"text": "争论小米有没有核心技术的人，", "startFrame": 0, "durationFrames": 65}, {"text": "不仅没搞懂到底什么叫核心技术，", "startFrame": 64, "durationFrames": 68}, {"text": "更对它的恐怖研发底牌一无所知。", "startFrame": 132, "durationFrames": 76}]} totalDurationFrames={208} stages={[{ imageSrc: staticFile("images/小米核心技术/scene_1_1_img0.png"), enterEffect: "fadeIn", tone: "calm" }, { imageSrc: staticFile("images/小米核心技术/scene_1_1_img1.png"), enterEffect: "slideBottom", tone: "alert", showFrom: 1 }, { imageSrc: staticFile("images/小米核心技术/scene_1_1_img2.png"), enterEffect: "zoomIn", tone: "alert", showFrom: 2 }]} />
            </Sequence>
            <Audio src={staticFile("/audio/小米核心技术/scene_1/scene_1.mp3")} />
        </AbsoluteFill>
    );
};
