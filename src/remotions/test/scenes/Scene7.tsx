import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus } from "../../../components";

// 引导用户看图
const SCENE_DURATION = 123;

export const calculateScene7Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene7: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={123}>
                <BWCenterFocus imageSrc={staticFile("images/test/7_1.png")} enterEffect="breathe" content={[{"text": "看这个图。", "startFrame": 0, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "别看百分比。", "startFrame": 29, "durationFrames": 35, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "直接问：原数是多少？", "startFrame": 63, "durationFrames": 59, "anchor": null, "anchorColor": null, "audioEffect": null}]} totalDurationFrames={123} />
            </Sequence>
            <Audio src={staticFile("/audio/test/7/7.mp3")} />
        </AbsoluteFill>
    );
};
