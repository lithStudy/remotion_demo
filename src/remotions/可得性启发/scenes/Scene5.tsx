import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWTextFocus } from "../../../components";

// 总结与呼吁
const SCENE_DURATION = 186 + 173;

export const calculateScene5Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene5: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={186}>
                <BWCenterFocus content={[{"text": "在这个充满套路的时代，", "startFrame": 0, "durationFrames": 51}, {"text": "别让几分钟的短视频定义了你对几万公里外世界的全部想象。", "startFrame": 50, "durationFrames": 136}]} totalDurationFrames={186} imageSrc={staticFile("images/可得性启发6/scene_5_1.png")} enterEffect="slideBottom" anchors={[{"text": "套路", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "想象", "showFrom": 1, "color": "#000000", "anim": "slideUp", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={186} durationInFrames={173}>
                <BWTextFocus content={[{"text": "保持怀疑，", "startFrame": 0, "durationFrames": 31}, {"text": "保持理性，", "startFrame": 30, "durationFrames": 28}, {"text": "做自己大脑的主人，", "startFrame": 57, "durationFrames": 43}, {"text": "就是我们普通人最高级的自我保护。", "startFrame": 100, "durationFrames": 72}]} totalDurationFrames={173} coreSentence={"保持怀疑，保持理性，做自己大脑的主人"} coreSentenceAnchors={[{"coreSentenceAnchor": "保持怀疑", "color": null}, {"coreSentenceAnchor": "保持理性", "color": null}, {"coreSentenceAnchor": "大脑的主人", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/可得性启发6/scene_5/scene_5.mp3")} />
        </AbsoluteFill>
    );
};
