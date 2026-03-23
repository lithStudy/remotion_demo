import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus } from "../../../components";

// 总结升华：智力觉醒
const SCENE_DURATION = 245 + 151;

export const calculateScene5Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene5: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={245}>
                <BWCenterFocus imageSrc={staticFile("images/test/5_1.png")} enterEffect="breathe" content={[{"text": "兄弟姐妹们，", "startFrame": 0, "durationFrames": 29, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "在这个套路满天飞的时代，", "startFrame": 28, "durationFrames": 57, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "承认自己“可能错了”并不是一种软弱，", "startFrame": 84, "durationFrames": 85, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "而是一个成年人最高级的智力觉醒。", "startFrame": 169, "durationFrames": 76, "anchor": null, "anchorColor": null, "audioEffect": null}]} totalDurationFrames={245} />
            </Sequence>
            <Sequence from={245} durationInFrames={151}>
                <BWCenterFocus imageSrc={staticFile("images/test/5_2.png")} enterEffect="breathe" content={[{"text": "做自己大脑的主人，", "startFrame": 0, "durationFrames": 43, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "不被偏见裹挟，", "startFrame": 42, "durationFrames": 33, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "我们才能真正看清这个复杂的世界。", "startFrame": 75, "durationFrames": 76, "anchor": null, "anchorColor": null, "audioEffect": null}]} totalDurationFrames={151} />
            </Sequence>
            <Audio src={staticFile("/audio/test/5/5.mp3")} />
        </AbsoluteFill>
    );
};
