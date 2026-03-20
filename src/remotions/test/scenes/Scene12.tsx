import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWChatBubble } from "../../../components";

// 引发思考
const SCENE_DURATION = 63;

export const calculateScene12Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene12: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={63}>
                <BWChatBubble imageSrc={staticFile("images/test/12_1.png")} content={[{"text": "你觉得，数字会撒谎吗？", "startFrame": 0, "durationFrames": 63, "anchor": null, "anchorColor": null, "audioEffect": null}]} totalDurationFrames={63} />
            </Sequence>
            <Audio src={staticFile("/audio/test/12/12.mp3")} />
        </AbsoluteFill>
    );
};
