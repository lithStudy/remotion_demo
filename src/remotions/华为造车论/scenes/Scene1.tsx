import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCognitiveShift, BWQuoteCitation } from "../../../components";

// 名头响不等于更稳
const SCENE_DURATION = 138 + 112;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={138}>
                <BWQuoteCitation content={[{"text": "有人觉得，", "startFrame": 0, "durationFrames": 24}, {"text": "买鸿蒙智行，", "startFrame": 24, "durationFrames": 35}, {"text": "冲着华为的名头，", "startFrame": 58, "durationFrames": 39}, {"text": "整车就更靠谱。", "startFrame": 97, "durationFrames": 40}]} totalDurationFrames={138} quoteSource={"有人觉得"} quoteDisplayText={"买鸿蒙智行，冲着华为的名头，整车就更靠谱。"} showFrom={1} anchors={[]} />
            </Sequence>
            <Sequence from={138} durationInFrames={112}>
                <BWCognitiveShift content={[{"text": "先别急着下这个结论。", "startFrame": 0, "durationFrames": 44}, {"text": "名头响，", "startFrame": 43, "durationFrames": 33}, {"text": "不等于车更稳。", "startFrame": 76, "durationFrames": 36}]} totalDurationFrames={112} notText={"名头响"} butText={"车更稳"} butSrc={staticFile("images/华为造车论/scene_1_3.png")} notContentIndex={1} butContentIndex={2} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/华为造车论/scene_1/scene_1.mp3")} />
        </AbsoluteFill>
    );
};
