import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWConceptCard } from "../../../components";

// 强调比例陷阱
const SCENE_DURATION = 180 + 55;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={180}>
                <BWCenterFocus imageSrc={staticFile("images/test/4_1.png")} enterEffect="breathe" content={[{"text": "100% 听着吓人。", "startFrame": 0, "durationFrames": 55, "anchor": "100%", "anchorColor": "#E53E3E", "audioEffect": "ping"}, {"text": "10% 看着寒碜。", "startFrame": 54, "durationFrames": 49, "anchor": "10%", "anchorColor": "#E53E3E", "audioEffect": "ping"}, {"text": "真相是：后面多了 9 块钱。", "startFrame": 103, "durationFrames": 76, "anchor": "多了 9 块钱", "anchorColor": "#2B6CB0", "audioEffect": "ping"}]} totalDurationFrames={180} />
            </Sequence>
            <Sequence from={180} durationInFrames={55}>
                <BWConceptCard imageSrc={staticFile("images/test/4_2.png")} conceptName={"比例陷阱"} content={[{"text": "这就是“比例陷阱”。", "startFrame": 0, "durationFrames": 55, "anchor": null, "anchorColor": null, "audioEffect": null}]} totalDurationFrames={55} />
            </Sequence>
            <Audio src={staticFile("/audio/test/4/4.mp3")} />
        </AbsoluteFill>
    );
};
