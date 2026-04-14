import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWChecklistReveal } from "../../../components";

// 防御
const SCENE_DURATION = 112 + 393;

export const calculateScene5Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene5: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={112}>
                <BWCenterFocus content={[{"text": "面对这种深度自嗨，", "startFrame": 0, "durationFrames": 45}, {"text": "请执行社交止损三步法：", "startFrame": 44, "durationFrames": 67}]} totalDurationFrames={112} imageSrc={staticFile("images/认知偏见_达克效应/scene_5_1.png")} enterEffect="fadeIn" anchors={[{"text": "社交止损", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={112} durationInFrames={393}>
                <BWChecklistReveal content={[{"text": "第一，识别。", "startFrame": 0, "durationFrames": 38}, {"text": "发现对方处于“愚昧之巅”，立刻关闭辩论模式。", "startFrame": 37, "durationFrames": 112}, {"text": "第二，同意。", "startFrame": 148, "durationFrames": 35}, {"text": "礼貌地微笑，用“你说得对”结束话题。", "startFrame": 183, "durationFrames": 89}, {"text": "第三，撤离。", "startFrame": 271, "durationFrames": 36}, {"text": "迅速保护好你的心情，去陪更有价值的人。", "startFrame": 307, "durationFrames": 85}]} totalDurationFrames={393} title={"社交止损三步法"} rows={[{"text": "识别：关闭辩论", "showFrom": 0}, {"text": "同意：礼貌收场", "showFrom": 2}, {"text": "撤离：保护心情", "showFrom": 4}]} />
            </Sequence>
            <Audio src={staticFile("/audio/认知偏见_达克效应/scene_5/scene_5.mp3")} />
        </AbsoluteFill>
    );
};
