import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWChatBubble } from "../../../components";

// 引出恐慌与焦虑
const SCENE_DURATION = 30 + 145;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={30}>
                <BWChatBubble content={[{"text": "你是不是也有过这种感觉？", "startFrame": 0, "durationFrames": 30}]} imageSrc={staticFile("images/template/scene1_1.png")} anchors={[]} totalDurationFrames={30} />
            </Sequence>
            <Sequence from={30} durationInFrames={145}>
                <BWCenterFocus content={[{"text": "一提到坐飞机，心里就有点打鼓，", "startFrame": 0, "durationFrames": 33}, {"text": "脑子里下意识闪过坠机的新闻；", "startFrame": 33, "durationFrames": 31}, {"text": "一刷短视频，感觉某些国家天天都在零元购、", "startFrame": 64, "durationFrames": 44}, {"text": "街头枪战，觉得这世界实在太危险了。", "startFrame": 108, "durationFrames": 37}]} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" anchors={[]} totalDurationFrames={145} />
            </Sequence>

        </AbsoluteFill>
    );
};
