import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWChatBubble } from "../../../components";

// 剖析：制裁与去华为化
const SCENE_DURATION = 202 + 153;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={202}>
                <BWCenterFocus content={[{"text": "华为如今的处境其实不能一概而论为“制裁”，", "startFrame": 0, "durationFrames": 89}, {"text": "应该分两方面讲：", "startFrame": 88, "durationFrames": 37}, {"text": "一是被制裁，", "startFrame": 124, "durationFrames": 34}, {"text": "一是被去华为化。", "startFrame": 158, "durationFrames": 44}]} totalDurationFrames={202} imageSrc={staticFile("images/华为制裁论/scene_2_1.png")} enterEffect="fadeIn" anchors={[{"text": "制裁", "showFrom": 2, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "去华为化", "showFrom": 3, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={202} durationInFrames={153}>
                <BWChatBubble content={[{"text": "有人说这不是一回事吗？", "startFrame": 0, "durationFrames": 53}, {"text": "其实不是的，", "startFrame": 52, "durationFrames": 28}, {"text": "从法理上，", "startFrame": 79, "durationFrames": 29}, {"text": "操作上都是有区别的。", "startFrame": 108, "durationFrames": 45}]} totalDurationFrames={153} bubbles={[{ bubbleText: "有人说这不是一回事吗？", showFrom: 0, align: "left" }, { bubbleText: "其实不是的，从法理上，操作上都是有区别的。", showFrom: 1, align: "right" }]} />
            </Sequence>
            <Audio src={staticFile("/audio/华为制裁论/scene_2/scene_2.mp3")} />
        </AbsoluteFill>
    );
};
