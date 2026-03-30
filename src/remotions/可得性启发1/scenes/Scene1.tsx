import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus } from "../../../components";

// 引出问题：常见的恐慌与焦虑
const SCENE_DURATION = 30 + 91 + 121;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={30}>
                <BWCenterFocus content={[{"text": "你是不是也有过这种感觉？", "startFrame": 0, "durationFrames": 30}]} totalDurationFrames={30} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" anchors={[]} />
            </Sequence>
            <Sequence from={30} durationInFrames={91}>
                <BWCenterFocus content={[{"text": "一提到坐飞机，", "startFrame": 0, "durationFrames": 30}, {"text": "心里就有点打鼓，", "startFrame": 30, "durationFrames": 30}, {"text": "脑子里下意识闪过坠机的新闻；", "startFrame": 60, "durationFrames": 31}]} totalDurationFrames={91} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" anchors={[]} />
            </Sequence>
            <Sequence from={121} durationInFrames={121}>
                <BWCenterFocus content={[{"text": "一刷短视频，", "startFrame": 0, "durationFrames": 30}, {"text": "感觉某些国家天天都在零元购、", "startFrame": 30, "durationFrames": 31}, {"text": "街头枪战，", "startFrame": 61, "durationFrames": 30}, {"text": "觉得这世界实在太危险了。", "startFrame": 91, "durationFrames": 30}]} totalDurationFrames={121} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" anchors={[]} />
            </Sequence>

        </AbsoluteFill>
    );
};
