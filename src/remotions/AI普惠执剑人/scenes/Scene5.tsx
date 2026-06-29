import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWChecklistReveal, BWMagnifyingGlass, BWStepList } from "../../../components";

// 对比
const SCENE_DURATION = 81 + 193 + 139 + 128 + 134;

export const calculateScene5Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene5: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={81}>
                <BWCenterFocus content={[{"text": "这种级别的技术资产，", "startFrame": 0, "durationFrames": 42}, {"text": "正常公司会怎么做？", "startFrame": 41, "durationFrames": 40}]} totalDurationFrames={81} imageSrc={staticFile("images/AI普惠执剑人/scene_5_1.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={81} durationInFrames={193}>
                <BWStepList content={[{"text": "锁起来。", "startFrame": 0, "durationFrames": 18}, {"text": "收费。", "startFrame": 17, "durationFrames": 24}, {"text": "分层。", "startFrame": 41, "durationFrames": 26}, {"text": "限量。", "startFrame": 67, "durationFrames": 23}, {"text": "绑定生态。", "startFrame": 89, "durationFrames": 32}, {"text": "把每一次调用，", "startFrame": 121, "durationFrames": 38}, {"text": "都变成利润。", "startFrame": 158, "durationFrames": 34}]} totalDurationFrames={193} title={"常规做法"} steps={[{"text": "锁起来", "showFrom": 0}, {"text": "收费", "showFrom": 1}, {"text": "分层", "showFrom": 2}, {"text": "限量", "showFrom": 3}, {"text": "绑定生态", "showFrom": 4}]} anchors={[]} />
            </Sequence>
            <Sequence from={274} durationInFrames={139}>
                <BWMagnifyingGlass content={[{"text": "可梁文锋没有这么做。", "startFrame": 0, "durationFrames": 51}, {"text": "他把最值钱的东西，", "startFrame": 50, "durationFrames": 44}, {"text": "直接交给了全世界。", "startFrame": 93, "durationFrames": 45}]} totalDurationFrames={139} anchors={[{"text": "交给了全世界", "showFrom": 1, "color": "#EF4444", "anim": "popIn", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={413} durationInFrames={128}>
                <BWCenterFocus content={[{"text": "任何公司，", "startFrame": 0, "durationFrames": 28}, {"text": "任何个人极客，", "startFrame": 27, "durationFrames": 36}, {"text": "都能拿到 DeepSeek 的模型权重。", "startFrame": 63, "durationFrames": 65}]} totalDurationFrames={128} imageSrc={staticFile("images/AI普惠执剑人/scene_5_6.png")} enterEffect="zoomIn" anchors={[{"text": "模型权重", "showFrom": 2, "color": "#EF4444", "anim": "spring", "audioEffect": null}]} />
            </Sequence>
            <Sequence from={541} durationInFrames={134}>
                <BWChecklistReveal content={[{"text": "开箱部署。", "startFrame": 0, "durationFrames": 33}, {"text": "本地运行。", "startFrame": 32, "durationFrames": 34}, {"text": "不用向梁文锋交一分钱。", "startFrame": 66, "durationFrames": 68}]} totalDurationFrames={134} title={"核心开源，完全免费"} rows={[{"text": "开箱部署", "showFrom": 0}, {"text": "本地运行", "showFrom": 1}, {"text": "完全免费", "showFrom": 2}]} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/AI普惠执剑人/scene_5/scene_5.mp3")} />
        </AbsoluteFill>
    );
};
