import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus } from "../../../components";

// 引出恐慌情绪与常见现象
const SCENE_DURATION = 30 + 64 + 81;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={30}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" content={[{"text": "你是不是也有过这种感觉？", "startFrame": 0, "durationFrames": 30}]} anchors={[]} totalDurationFrames={30} />
            </Sequence>
            <Sequence from={30} durationInFrames={64}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" content={[{"text": "一提到坐飞机，心里就有点打鼓，", "startFrame": 0, "durationFrames": 33}, {"text": "脑子里下意识闪过坠机的新闻；", "startFrame": 33, "durationFrames": 31}]} anchors={[]} totalDurationFrames={64} />
            </Sequence>
            <Sequence from={94} durationInFrames={81}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" content={[{"text": "一刷短视频，感觉某些国家天天都在零元购、", "startFrame": 0, "durationFrames": 44}, {"text": "街头枪战，觉得这世界实在太危险了。", "startFrame": 44, "durationFrames": 37}]} anchors={[]} totalDurationFrames={81} />
            </Sequence>

        </AbsoluteFill>
    );
};
