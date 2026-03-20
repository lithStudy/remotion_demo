import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWTextFocus } from "../../../components";

// 给出扎心结论
const SCENE_DURATION = 94;

export const calculateScene11Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene11: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={94}>
                <BWTextFocus content={[{"text": "很多人选了 50%。", "startFrame": 0, "durationFrames": 53, "anchor": "50%", "anchorColor": "#FF8C00", "audioEffect": "ping"}, {"text": "所以，活该你穷。", "startFrame": 52, "durationFrames": 42, "anchor": "活该你穷", "anchorColor": "#E53E3E", "audioEffect": "impact_thud"}]} totalDurationFrames={94} />
            </Sequence>
            <Audio src={staticFile("/audio/test/11/11.mp3")} />
        </AbsoluteFill>
    );
};
