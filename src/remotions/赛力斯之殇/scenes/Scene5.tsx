import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWPunchCaption } from "../../../components";

// 反转：拔掉华为
const SCENE_DURATION = 101;

export const calculateScene5Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene5: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={101}>
                <BWPunchCaption content={[{"text": "所以对于赛力斯来说，", "startFrame": 0, "durationFrames": 42}, {"text": "拔掉华为，", "startFrame": 41, "durationFrames": 24}, {"text": "是迟早的事情。", "startFrame": 65, "durationFrames": 35}]} totalDurationFrames={101} punches={[{"text": "对赛力斯来说", "showFrom": 0, "enterEffect": "slideUp", "tone": "calm"}, {"text": "拔掉华为", "showFrom": 1, "enterEffect": "snap", "tone": "alert"}, {"text": "迟早的事", "showFrom": 2, "enterEffect": "shake", "tone": "alert"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/赛力斯之殇/scene_5/scene_5.mp3")} />
        </AbsoluteFill>
    );
};
