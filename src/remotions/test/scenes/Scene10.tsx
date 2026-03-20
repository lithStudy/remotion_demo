import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWSplitCompare } from "../../../components";

// 用户选择
const SCENE_DURATION = 142;

export const calculateScene10Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene10: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={142}>
                <BWSplitCompare leftSrc={staticFile("images/test/10_1_left.png")} rightSrc={staticFile("images/test/10_1_right.png")} leftLabel={"月薪三千涨 50%"} rightLabel={"月薪三万涨 5%"} content={[{"text": "月薪三千涨 50%，和月薪三万涨 5%，你选哪个？", "startFrame": 0, "durationFrames": 142, "anchor": null, "anchorColor": null, "audioEffect": null}]} totalDurationFrames={142} />
            </Sequence>
            <Audio src={staticFile("/audio/test/10/10.mp3")} />
        </AbsoluteFill>
    );
};
