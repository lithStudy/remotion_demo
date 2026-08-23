import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWBeatSequence, BWCenterFocus, BWSplitCompare } from "../../../components";

// 开篇
const SCENE_DURATION = 219 + 208 + 300;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={219}>
                <BWCenterFocus content={[{"text": "我以前最佩服的人，", "startFrame": 0, "durationFrames": 36}, {"text": "是雷军。", "startFrame": 36, "durationFrames": 24}, {"text": "一个白手起家的人，", "startFrame": 60, "durationFrames": 40}, {"text": "说着科技平权，", "startFrame": 99, "durationFrames": 39}, {"text": "把原本昂贵的科技产品变成普通大众的工具。", "startFrame": 137, "durationFrames": 82}]} totalDurationFrames={219} imageSrc={staticFile("images/AI普惠执剑人/scene_1_1.png")} enterEffect="fadeIn" anchors={[{"text": "雷军", "showFrom": 1, "color": "#000000", "anim": "spring", "audioEffect": null}]} />
            </Sequence>
            <Sequence from={219} durationInFrames={208}>
                <BWBeatSequence content={[{"text": "但 DeepSeek 出来以后，", "startFrame": 0, "durationFrames": 38}, {"text": "我最佩服的人，", "startFrame": 37, "durationFrames": 34}, {"text": "变成了梁文锋。", "startFrame": 70, "durationFrames": 35}, {"text": "有人叫他梁圣。", "startFrame": 104, "durationFrames": 33}, {"text": "说实话，", "startFrame": 137, "durationFrames": 21}, {"text": "我一点都不觉得夸张。", "startFrame": 158, "durationFrames": 50}]} totalDurationFrames={208} stages={[{ imageSrc: staticFile("images/AI普惠执剑人/scene_1_2_img0.png"), enterEffect: "fadeIn", tone: "calm", showFrom: 0 }, { imageSrc: staticFile("images/AI普惠执剑人/scene_1_2_img1.png"), enterEffect: "slideBottom", tone: "alert", showFrom: 2 }]} anchors={[]} />
            </Sequence>
            <Sequence from={427} durationInFrames={300}>
                <BWSplitCompare content={[{"text": "雷军让普通人，", "startFrame": 0, "durationFrames": 33}, {"text": "用上了好硬件。", "startFrame": 32, "durationFrames": 34}, {"text": "梁文锋做的，", "startFrame": 66, "durationFrames": 34}, {"text": "却是贯彻了极致的开源精神，", "startFrame": 100, "durationFrames": 70}, {"text": "允许普通人，", "startFrame": 170, "durationFrames": 35}, {"text": "用最便宜的途径，", "startFrame": 204, "durationFrames": 40}, {"text": "用上最前沿的人工智能。", "startFrame": 244, "durationFrames": 56}]} totalDurationFrames={300} leftSrc={staticFile("images/AI普惠执剑人/scene_1_3_left.png")} rightSrc={staticFile("images/AI普惠执剑人/scene_1_3_right.png")} leftLabel={"硬件普惠"} rightLabel={"AI普惠"} leftShowFrom={0} rightShowFrom={2} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/AI普惠执剑人/scene_1/scene_1.mp3")} />
        </AbsoluteFill>
    );
};
