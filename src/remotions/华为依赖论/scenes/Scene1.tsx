import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWTextFocus } from "../../../components";

// 引入：唯一华为之惧
const SCENE_DURATION = 95;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={95}>
                <BWTextFocus content={[{"text": "中国最该怕的，", "startFrame": 0, "durationFrames": 33}, {"text": "不是没有华为，", "startFrame": 32, "durationFrames": 31}, {"text": "而是只有华为。", "startFrame": 63, "durationFrames": 32}]} totalDurationFrames={95} coreSentence={["中国最该怕的，不是没有华为，", "而是只有华为。"]} coreSentenceAnchors={[{"coreSentenceAnchor": "只有华为"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/华为依赖论/scene_1/scene_1.mp3")} />
        </AbsoluteFill>
    );
};
