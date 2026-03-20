import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWTextFocus } from "../../../components";

// 强调基数的重要性
const SCENE_DURATION = 53;

export const calculateScene6Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene6: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={53}>
                <BWTextFocus content={[{"text": "没基数，比例就是废纸。", "startFrame": 0, "durationFrames": 53, "anchor": "没基数", "anchorColor": "#E53E3E", "audioEffect": "ping"}]} totalDurationFrames={53} />
            </Sequence>
            <Audio src={staticFile("/audio/test/6/6.mp3")} />
        </AbsoluteFill>
    );
};
