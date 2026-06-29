import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWPunchCaption, BWSplitCompare } from "../../../components";

// 反转：自曝编造财报
const SCENE_DURATION = 105 + 96;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={105}>
                <BWPunchCaption content={[{"text": "什么？", "startFrame": 0, "durationFrames": 19}, {"text": "哪里的财报？", "startFrame": 18, "durationFrames": 36}, {"text": "当然是我编的了。", "startFrame": 54, "durationFrames": 51}]} totalDurationFrames={105} punches={[{"text": "哪里的财报？", "showFrom": 1, "enterEffect": "shake", "tone": "alert"}, {"text": "当然是我编的了", "showFrom": 2, "enterEffect": "shake", "tone": "alert"}]} anchors={[{"text": "我编的", "showFrom": 2, "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={105} durationInFrames={96}>
                <BWSplitCompare content={[{"text": "反正吹牛又不用上税，", "startFrame": 0, "durationFrames": 43}, {"text": "也不会有人追究我的正向谣言。", "startFrame": 42, "durationFrames": 53}]} totalDurationFrames={96} leftSrc={staticFile("images/千亿研发/scene_3_2_left.png")} rightSrc={staticFile("images/千亿研发/scene_3_2_right.png")} leftLabel={"吹牛免税"} rightLabel={"正向谣言"} leftShowFrom={0} rightShowFrom={1} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/千亿研发/scene_3/scene_3.mp3")} />
        </AbsoluteFill>
    );
};
