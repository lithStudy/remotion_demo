import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus } from "../../../components";

// 总结与升华：智力觉醒
const SCENE_DURATION = 115 + 95;

export const calculateScene5Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene5: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={115}>
                <BWCenterFocus imageSrc={staticFile("大脑思考的抽象概念图")} enterEffect="breathe" content={[{"text": "兄弟姐妹们，在这个套路满天飞的时代，", "startFrame": 0, "durationFrames": 40}, {"text": "承认自己“可能错了”并不是一种软弱，", "startFrame": 40, "durationFrames": 40}, {"text": "而是一个成年人最高级的智力觉醒。", "startFrame": 80, "durationFrames": 35}]} anchors={[]} totalDurationFrames={115} />
            </Sequence>
            <Sequence from={115} durationInFrames={95}>
                <BWCenterFocus imageSrc={staticFile("人脑发出光芒的抽象示意图")} enterEffect="fadeIn" content={[{"text": "做自己大脑的主人，", "startFrame": 0, "durationFrames": 30}, {"text": "不被偏见裹挟，", "startFrame": 30, "durationFrames": 30}, {"text": "我们才能真正看清这个复杂的世界。", "startFrame": 60, "durationFrames": 35}]} anchors={[]} totalDurationFrames={95} />
            </Sequence>

        </AbsoluteFill>
    );
};
