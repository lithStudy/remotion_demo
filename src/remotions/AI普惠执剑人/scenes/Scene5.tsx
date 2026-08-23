import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWChecklistReveal, BWMagnifyingGlass, BWStepList } from "../../../components";

// 对比
const SCENE_DURATION = 81 + 190 + 121 + 129 + 129;

export const calculateScene5Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene5: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={81}>
                <BWCenterFocus content={[{"text": "这种级别的技术资产，", "startFrame": 0, "durationFrames": 43}, {"text": "正常公司会怎么做？", "startFrame": 42, "durationFrames": 39}]} totalDurationFrames={81} imageSrc={staticFile("images/AI普惠执剑人/scene_5_1.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={81} durationInFrames={190}>
                <BWStepList content={[{"text": "锁起来。", "startFrame": 0, "durationFrames": 18}, {"text": "收费。", "startFrame": 17, "durationFrames": 24}, {"text": "分层。", "startFrame": 41, "durationFrames": 27}, {"text": "限量。", "startFrame": 68, "durationFrames": 27}, {"text": "绑定生态。", "startFrame": 94, "durationFrames": 35}, {"text": "把每一次调用，", "startFrame": 129, "durationFrames": 32}, {"text": "都变成利润。", "startFrame": 160, "durationFrames": 29}]} totalDurationFrames={190} title={"常规做法"} steps={[{"text": "锁起来", "showFrom": 0}, {"text": "收费", "showFrom": 1}, {"text": "分层", "showFrom": 2}, {"text": "限量", "showFrom": 3}, {"text": "绑定生态", "showFrom": 4}]} anchors={[]} />
            </Sequence>
            <Sequence from={271} durationInFrames={121}>
                <BWMagnifyingGlass content={[{"text": "可梁文锋没有这么做。", "startFrame": 0, "durationFrames": 43}, {"text": "他把最值钱的东西，", "startFrame": 42, "durationFrames": 41}, {"text": "直接交给了全世界。", "startFrame": 82, "durationFrames": 38}]} totalDurationFrames={121} anchors={[{"text": "交给了全世界", "showFrom": 1, "color": "#EF4444", "anim": "popIn", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={392} durationInFrames={129}>
                <BWCenterFocus content={[{"text": "任何公司，", "startFrame": 0, "durationFrames": 28}, {"text": "任何个人极客，", "startFrame": 27, "durationFrames": 38}, {"text": "都能拿到 DeepSeek 的模型权重。", "startFrame": 64, "durationFrames": 64}]} totalDurationFrames={129} imageSrc={staticFile("images/AI普惠执剑人/scene_5_6.png")} enterEffect="zoomIn" anchors={[{"text": "模型权重", "showFrom": 2, "color": "#EF4444", "anim": "spring", "audioEffect": null}]} />
            </Sequence>
            <Sequence from={521} durationInFrames={129}>
                <BWChecklistReveal content={[{"text": "开箱部署。", "startFrame": 0, "durationFrames": 38}, {"text": "本地运行。", "startFrame": 37, "durationFrames": 35}, {"text": "不用向梁文锋交一分钱。", "startFrame": 72, "durationFrames": 57}]} totalDurationFrames={129} title={"核心开源，完全免费"} rows={[{"text": "开箱部署", "showFrom": 0}, {"text": "本地运行", "showFrom": 1}, {"text": "完全免费", "showFrom": 2}]} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/AI普惠执剑人/scene_5/scene_5.mp3")} />
        </AbsoluteFill>
    );
};
