import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWTextFocus } from "../../../components";

// 模糊基数的危害
const SCENE_DURATION = 71;

export const calculateScene8Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene8: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={71}>
                <BWTextFocus content={[{"text": "基数模糊。", "startFrame": 0, "durationFrames": 36, "anchor": "基数模糊", "anchorColor": "#E53E3E", "audioEffect": "ping"}, {"text": "结论必假。", "startFrame": 35, "durationFrames": 36, "anchor": "结论必假", "anchorColor": "#E53E3E", "audioEffect": "ping"}]} totalDurationFrames={71} />
            </Sequence>
            <Audio src={staticFile("/audio/test/8/8.mp3")} />
        </AbsoluteFill>
    );
};
