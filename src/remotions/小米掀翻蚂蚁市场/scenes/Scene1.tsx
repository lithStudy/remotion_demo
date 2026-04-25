import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus } from "../../../components";

// 山寨消失
const SCENE_DURATION = 238 + 116;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={238}>
                <BWCenterFocus content={[{"text": "你有没有发现，", "startFrame": 0, "durationFrames": 28}, {"text": "以前那种充一次电就鼓包的山寨充电宝，", "startFrame": 27, "durationFrames": 89}, {"text": "用几个月就坏的劣质插线板，", "startFrame": 115, "durationFrames": 70}, {"text": "现在几乎绝迹了？", "startFrame": 185, "durationFrames": 53}]} totalDurationFrames={238} imageSrc={staticFile("images/小米掀翻蚂蚁市场/scene_1_1.png")} enterEffect="slideBottom" anchors={[{"text": "绝迹", "showFrom": 3, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={238} durationInFrames={116}>
                <BWCenterFocus content={[{"text": "十年前，", "startFrame": 0, "durationFrames": 28}, {"text": "有一条鲶鱼，", "startFrame": 27, "durationFrames": 32}, {"text": "把这些烂摊子的桌子给掀了。", "startFrame": 58, "durationFrames": 58}]} totalDurationFrames={116} imageSrc={staticFile("images/小米掀翻蚂蚁市场/scene_1_2.png")} enterEffect="slideBottom" anchors={[{"text": "鲶鱼", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/小米掀翻蚂蚁市场/scene_1/scene_1.mp3")} />
        </AbsoluteFill>
    );
};
