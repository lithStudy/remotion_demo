import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWBeatSequence, BWCenterFocus, BWSplitCompare } from "../../../components";

// 开篇
const SCENE_DURATION = 235 + 225 + 303;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={235}>
                <BWCenterFocus content={[{"text": "我以前最佩服的人，", "startFrame": 0, "durationFrames": 39}, {"text": "是雷军。", "startFrame": 38, "durationFrames": 31}, {"text": "一个白手起家的人，", "startFrame": 68, "durationFrames": 43}, {"text": "说着科技平权，", "startFrame": 111, "durationFrames": 35}, {"text": "把原本昂贵的科技产品变成普通大众的工具。", "startFrame": 146, "durationFrames": 89}]} totalDurationFrames={235} imageSrc={staticFile("images/AI普惠执剑人/scene_1_1.png")} enterEffect="fadeIn" anchors={[{"text": "雷军", "showFrom": 1, "color": "#000000", "anim": "spring", "audioEffect": null}]} />
            </Sequence>
            <Sequence from={235} durationInFrames={225}>
                <BWBeatSequence content={[{"text": "但 DeepSeek 出来以后，", "startFrame": 0, "durationFrames": 42}, {"text": "我最佩服的人，", "startFrame": 41, "durationFrames": 32}, {"text": "变成了梁文锋。", "startFrame": 73, "durationFrames": 35}, {"text": "有人叫他梁圣。", "startFrame": 107, "durationFrames": 39}, {"text": "说实话，", "startFrame": 145, "durationFrames": 27}, {"text": "我一点都不觉得夸张。", "startFrame": 171, "durationFrames": 53}]} totalDurationFrames={225} stages={[{ imageSrc: staticFile("images/AI普惠执剑人/scene_1_2_img0.png"), enterEffect: "fadeIn", tone: "calm", showFrom: 0 }, { imageSrc: staticFile("images/AI普惠执剑人/scene_1_2_img1.png"), enterEffect: "slideBottom", tone: "alert", showFrom: 2 }]} anchors={[]} />
            </Sequence>
            <Sequence from={460} durationInFrames={303}>
                <BWSplitCompare content={[{"text": "雷军让普通人，", "startFrame": 0, "durationFrames": 35}, {"text": "用上了好硬件。", "startFrame": 34, "durationFrames": 36}, {"text": "梁文锋做的，", "startFrame": 70, "durationFrames": 32}, {"text": "却是贯彻了极致的开源精神，", "startFrame": 101, "durationFrames": 71}, {"text": "允许普通人，", "startFrame": 172, "durationFrames": 35}, {"text": "用最便宜的途径，", "startFrame": 207, "durationFrames": 39}, {"text": "用上最前沿的人工智能。", "startFrame": 245, "durationFrames": 57}]} totalDurationFrames={303} leftSrc={staticFile("images/AI普惠执剑人/scene_1_3_left.png")} rightSrc={staticFile("images/AI普惠执剑人/scene_1_3_right.png")} leftLabel={"硬件普惠"} rightLabel={"AI普惠"} leftShowFrom={0} rightShowFrom={2} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/AI普惠执剑人/scene_1/scene_1.mp3")} />
        </AbsoluteFill>
    );
};
