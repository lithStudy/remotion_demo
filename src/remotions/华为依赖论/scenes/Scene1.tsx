import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWTextFocus } from "../../../components";

// 引入：唯一华为之惧
const SCENE_DURATION = 98;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={98}>
                <BWTextFocus content={[{"text": "中国最该怕的，", "startFrame": 0, "durationFrames": 36}, {"text": "不是没有华为，", "startFrame": 36, "durationFrames": 30}, {"text": "而是只有华为。", "startFrame": 65, "durationFrames": 33}]} totalDurationFrames={98} coreSentence={["中国最该怕的，不是没有华为，", "而是只有华为。"]} coreSentenceAnchors={[{"coreSentenceAnchor": "只有华为"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/华为依赖论/scene_1/scene_1.mp3")} />
        </AbsoluteFill>
    );
};
