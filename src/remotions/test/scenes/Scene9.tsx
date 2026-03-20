import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWTextFocus } from "../../../components";

// 揭露行业乱象
const SCENE_DURATION = 74;

export const calculateScene9Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene9: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={74}>
                <BWTextFocus content={[{"text": "只谈增幅不谈基数，那是耍流氓。", "startFrame": 0, "durationFrames": 74, "anchor": "耍流氓", "anchorColor": "#E53E3E", "audioEffect": "impact_thud"}]} totalDurationFrames={74} />
            </Sequence>
            <Audio src={staticFile("/audio/test/9/9.mp3")} />
        </AbsoluteFill>
    );
};
