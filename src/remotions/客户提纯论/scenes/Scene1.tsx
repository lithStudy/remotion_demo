import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCauseChain } from "../../../components";

// 引入：最烂产品卖给谁
const SCENE_DURATION = 91;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={91}>
                <BWCauseChain content={[{"text": "怎么把最烂的产品卖出去？", "startFrame": 0, "durationFrames": 59}, {"text": "卖给最蠢的人。", "startFrame": 58, "durationFrames": 33}]} totalDurationFrames={91} layout={"horizontal"} nodes={[{ label: "怎么卖", imageSrc: staticFile("images/客户提纯论/scene_1_1_img0.png"), showFrom: 0, enterEffect: "breathe" }, { label: "卖给谁", imageSrc: staticFile("images/客户提纯论/scene_1_1_img1.png"), showFrom: 1, enterEffect: "slideBottom" }]} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/客户提纯论/scene_1/scene_1.mp3")} />
        </AbsoluteFill>
    );
};
