import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWPunchCaption } from "../../../components";

// 质疑：爱国绑架预设
const SCENE_DURATION = 140;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={140}>
                <BWPunchCaption content={[{"text": "什么？", "startFrame": 0, "durationFrames": 16}, {"text": "你说我瞎说？", "startFrame": 15, "durationFrames": 36}, {"text": "你是不相信中国的科技力量吗？", "startFrame": 51, "durationFrames": 58}, {"text": "你是不爱国吗？", "startFrame": 108, "durationFrames": 32}]} totalDurationFrames={140} punches={[{"text": "什么？", "showFrom": 0, "enterEffect": "popIn", "tone": "calm"}, {"text": "你说我瞎说？", "showFrom": 1, "enterEffect": "snap", "tone": "alert"}, {"text": "你是不相信中国的科技力量吗？", "showFrom": 2, "enterEffect": "shake", "tone": "alert"}, {"text": "你是不爱国吗？", "showFrom": 3, "enterEffect": "shake", "tone": "alert"}]} anchors={[{"text": "科技力量", "showFrom": 2, "color": "#EF4444"}, {"text": "不爱国", "showFrom": 3, "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/千亿研发/scene_2/scene_2.mp3")} />
        </AbsoluteFill>
    );
};
