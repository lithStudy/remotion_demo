import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWStatCompare } from "../../../components";

// 举例说明
const SCENE_DURATION = 79 + 83;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={79}>
                <BWStatCompare leftValue={1} rightValue={2} leftLabel={"初始"} rightLabel={"增长后"} leftSrc={staticFile("images/test/3_1_left.png")} rightSrc={staticFile("images/test/3_1_right.png")} content={[{"text": "看这组数。", "startFrame": 0, "durationFrames": 22, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "从 1 到 2，翻了一倍。", "startFrame": 21, "durationFrames": 57, "anchor": null, "anchorColor": null, "audioEffect": null}]} totalDurationFrames={79} />
            </Sequence>
            <Sequence from={79} durationInFrames={83}>
                <BWStatCompare leftValue={100} rightValue={110} leftLabel={"初始"} rightLabel={"增长后"} leftSrc={staticFile("images/test/3_2_left.png")} rightSrc={staticFile("images/test/3_2_right.png")} content={[{"text": "从 100 到 110，才涨 10%。", "startFrame": 0, "durationFrames": 83, "anchor": null, "anchorColor": null, "audioEffect": null}]} totalDurationFrames={83} />
            </Sequence>
            <Audio src={staticFile("/audio/test/3/3.mp3")} />
        </AbsoluteFill>
    );
};
