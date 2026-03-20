import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWAlertStyle } from "../../../components";

// 引出话题
const SCENE_DURATION = 48;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={48}>
                <BWAlertStyle imageSrc={staticFile("images/test/1_1.png")} enterEffect="slideBottom" content={[{"text": "你被大数据骗了。", "startFrame": 0, "durationFrames": 48, "anchor": null, "anchorColor": null, "audioEffect": null}]} totalDurationFrames={48} />
            </Sequence>
            <Audio src={staticFile("/audio/test/1/1.mp3")} />
        </AbsoluteFill>
    );
};
