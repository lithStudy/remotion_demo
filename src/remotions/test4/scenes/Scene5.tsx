import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus } from "../../../components";

// 总结升华：保持清醒
const SCENE_DURATION = 80 + 105;

export const calculateScene5Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene5: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={80}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" content={[{"text": "兄弟姐妹们，在这个套路满天飞的时代，", "startFrame": 0, "durationFrames": 40}, {"text": "承认自己“可能错了”并不是一种软弱，", "startFrame": 40, "durationFrames": 40}]} anchors={[]} totalDurationFrames={80} />
            </Sequence>
            <Sequence from={80} durationInFrames={105}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" content={[{"text": "而是一个成年人最高级的智力觉醒。", "startFrame": 0, "durationFrames": 35}, {"text": "做自己大脑的主人，不被偏见裹挟，", "startFrame": 35, "durationFrames": 35}, {"text": "我们才能真正看清这个复杂的世界。", "startFrame": 70, "durationFrames": 35}]} anchors={[]} totalDurationFrames={105} />
            </Sequence>

        </AbsoluteFill>
    );
};
