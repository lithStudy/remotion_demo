import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWChatBubble } from "../../../components";

// 剖析：制裁与去华为化
const SCENE_DURATION = 218 + 152;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={218}>
                <BWCenterFocus content={[{"text": "华为如今的处境其实不能一概而论为“制裁”，", "startFrame": 0, "durationFrames": 102}, {"text": "应该分两方面讲：", "startFrame": 101, "durationFrames": 42}, {"text": "一是被制裁，", "startFrame": 142, "durationFrames": 34}, {"text": "一是被去华为化。", "startFrame": 176, "durationFrames": 41}]} totalDurationFrames={218} imageSrc={staticFile("images/华为制裁论/scene_2_1.png")} enterEffect="fadeIn" anchors={[{"text": "制裁", "showFrom": 2, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "去华为化", "showFrom": 3, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={218} durationInFrames={152}>
                <BWChatBubble content={[{"text": "有人说这不是一回事吗？", "startFrame": 0, "durationFrames": 50}, {"text": "其实不是的，", "startFrame": 49, "durationFrames": 32}, {"text": "从法理上，", "startFrame": 80, "durationFrames": 26}, {"text": "操作上都是有区别的。", "startFrame": 105, "durationFrames": 46}]} totalDurationFrames={152} bubbles={[{ bubbleText: "有人说这不是一回事吗？", showFrom: 0, align: "left" }, { bubbleText: "其实不是的，从法理上，操作上都是有区别的。", showFrom: 1, align: "right" }]} />
            </Sequence>
            <Audio src={staticFile("/audio/华为制裁论/scene_2/scene_2.mp3")} />
        </AbsoluteFill>
    );
};
