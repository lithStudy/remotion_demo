import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus } from "../../../components";

// 质疑增长率
const SCENE_DURATION = 72;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={72}>
                <BWCenterFocus imageSrc={staticFile("images/test/2_1.png")} enterEffect="breathe" content={[{"text": "都在吹增长率？", "startFrame": 0, "durationFrames": 42, "anchor": "增长率", "anchorColor": "#FF8C00", "audioEffect": "ping"}, {"text": "全是忽悠。", "startFrame": 41, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}]} totalDurationFrames={72} />
            </Sequence>
            <Audio src={staticFile("/audio/test/2/2.mp3")} />
        </AbsoluteFill>
    );
};
