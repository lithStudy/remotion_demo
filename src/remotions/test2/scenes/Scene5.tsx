import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift } from "../../../components";

// 总结升华：保持清醒与觉醒
const SCENE_DURATION = 40 + 115 + 60 + 35;

export const calculateScene5Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene5: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={40}>
                <BWCenterFocus imageSrc={staticFile("一群兄弟姐妹互相打招呼的卡通形象")} enterEffect="slideLeft" content={[{"text": "兄弟姐妹们，在这个套路满天飞的时代，", "startFrame": 0, "durationFrames": 40, "audioEffect": null}]} anchors={[]} totalDurationFrames={40} />
            </Sequence>
            <Sequence from={40} durationInFrames={115}>
                <BWCognitiveShift notText={"一种软弱"} butText={"智力觉醒"} notSrc={"一个小孩哭泣"} butSrc={"一个成年人思考"} content={[{"text": "兄弟姐妹们，在这个套路满天飞的时代，", "startFrame": 0, "durationFrames": 40, "audioEffect": null}, {"text": "承认自己“可能错了”并不是一种软弱，", "startFrame": 40, "durationFrames": 40, "audioEffect": "impact_thud"}, {"text": "而是一个成年人最高级的智力觉醒。", "startFrame": 80, "durationFrames": 35, "audioEffect": null}]} anchors={[]} totalDurationFrames={115} />
            </Sequence>
            <Sequence from={155} durationInFrames={60}>
                <BWCenterFocus imageSrc={staticFile("大脑被绳索缠绕的抽象画")} enterEffect="zoomIn" content={[{"text": "做自己大脑的主人，", "startFrame": 0, "durationFrames": 30, "audioEffect": "ping"}, {"text": "不被偏见裹挟，", "startFrame": 30, "durationFrames": 30, "audioEffect": null}]} anchors={[]} totalDurationFrames={60} />
            </Sequence>
            <Sequence from={215} durationInFrames={35}>
                <BWCenterFocus imageSrc={staticFile("眼睛注视前方，周围是抽象线条的世界")} enterEffect="fadeIn" content={[{"text": "我们才能真正看清这个复杂的世界。", "startFrame": 0, "durationFrames": 35, "audioEffect": null}]} anchors={[]} totalDurationFrames={35} />
            </Sequence>

        </AbsoluteFill>
    );
};
