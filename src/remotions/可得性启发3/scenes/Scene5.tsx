import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWTextFocus } from "../../../components";

// 总结与升华
const SCENE_DURATION = 86 + 90;

export const calculateScene5Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene5: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={86}>
                <BWCenterFocus content={[{"text": "在这个满屏都是情绪诱导和流量套路的时代，", "startFrame": 0, "durationFrames": 44}, {"text": "学会把“眼见为实”升级为“数据为实”。", "startFrame": 44, "durationFrames": 42}]} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" anchors={[]} totalDurationFrames={86} />
            </Sequence>
            <Sequence from={86} durationInFrames={90}>
                <BWTextFocus content={[{"text": "做自己大脑的主人，", "startFrame": 0, "durationFrames": 30}, {"text": "不当流量的提线木偶，", "startFrame": 30, "durationFrames": 30}, {"text": "就是咱们最高级的自我保护。", "startFrame": 60, "durationFrames": 30}]} coreSentence={"做自己大脑的主人，不当流量的提线木偶"} anchors={[{"text": "大脑的主人", "showFrom": 0, "color": "#EF4444", "anim": null, "audioEffect": null}, {"text": "提线木偶", "showFrom": 1, "color": "#EF4444", "anim": null, "audioEffect": null}]} totalDurationFrames={90} />
            </Sequence>

        </AbsoluteFill>
    );
};
