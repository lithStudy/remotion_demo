import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift, BWSplitCompare } from "../../../components";

// 反转
const SCENE_DURATION = 240 + 377 + 172 + 240;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={240}>
                <BWCenterFocus content={[{"text": "更糟糕的是，", "startFrame": 0, "durationFrames": 33}, {"text": "平台算法并不关心那辆车到底为什么起火，", "startFrame": 32, "durationFrames": 103}, {"text": "算法只关心“完播率”、“评论数”和“转发量”。", "startFrame": 135, "durationFrames": 105}]} totalDurationFrames={240} imageSrc={staticFile("images/碎片认知/scene_3_1.png")} enterEffect="slideBottom" anchors={[{"text": "算法", "showFrom": 1, "color": "#000000", "anim": "spring", "audioEffect": "ping"}, {"text": "完播率", "showFrom": 2, "color": "#EF4444", "anim": "highlight", "audioEffect": null}]} />
            </Sequence>
            <Sequence from={240} durationInFrames={377}>
                <BWSplitCompare content={[{"text": "一个客观冷静、", "startFrame": 0, "durationFrames": 42}, {"text": "分析多种可能性的视频，", "startFrame": 41, "durationFrames": 53}, {"text": "往往无人问津；", "startFrame": 93, "durationFrames": 36}, {"text": "而一个带有极强煽动性、", "startFrame": 129, "durationFrames": 56}, {"text": "能引发两派网友在评论区互骂的“定论式”视频，", "startFrame": 185, "durationFrames": 111}, {"text": "会被算法迅速推流到千万人的手机里。", "startFrame": 295, "durationFrames": 81}]} totalDurationFrames={377} leftSrc={staticFile("images/碎片认知/scene_3_2_left.png")} rightSrc={staticFile("images/碎片认知/scene_3_2_right.png")} leftLabel={"理性分析"} rightLabel={"情绪煽动"} leftShowFrom={0} rightShowFrom={3} anchors={[]} />
            </Sequence>
            <Sequence from={617} durationInFrames={172}>
                <BWCognitiveShift content={[{"text": "在这种媒介生态下，", "startFrame": 0, "durationFrames": 46}, {"text": "“事实”变得不再重要，", "startFrame": 45, "durationFrames": 53}, {"text": "“情绪价值”成了唯一的硬通货。", "startFrame": 98, "durationFrames": 74}]} totalDurationFrames={172} notText={"事实"} butText={"情绪价值"} butSrc={staticFile("images/碎片认知/scene_3_3.png")} notContentIndex={1} butContentIndex={2} anchors={[]} />
            </Sequence>
            <Sequence from={789} durationInFrames={240}>
                <BWCenterFocus content={[{"text": "那些在评论区里急于下定论的人，", "startFrame": 0, "durationFrames": 71}, {"text": "其实是被算法驯化的数据节点，", "startFrame": 70, "durationFrames": 70}, {"text": "用自己的偏见为平台贡献着日活和流量。", "startFrame": 140, "durationFrames": 99}]} totalDurationFrames={240} imageSrc={staticFile("images/碎片认知/scene_3_4.png")} enterEffect="fadeIn" anchors={[{"text": "算法驯化", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "贡献流量", "showFrom": 2, "color": "#000000", "anim": "slideUp", "audioEffect": "ping"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/碎片认知/scene_3/scene_3.mp3")} />
        </AbsoluteFill>
    );
};
