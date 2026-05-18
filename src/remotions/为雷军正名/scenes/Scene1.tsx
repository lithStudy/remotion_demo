import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCauseChain, BWCenterFocus, BWStepList, BWTextFocus } from "../../../components";

// 引入：被污名的营销
const SCENE_DURATION = 154 + 286 + 193 + 290;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={154}>
                <BWTextFocus content={[{"text": "只要一提到雷军，", "startFrame": 0, "durationFrames": 36}, {"text": "评论区永远少不了两个词：", "startFrame": 36, "durationFrames": 63}, {"text": "“营销大师”、“猴王” 。", "startFrame": 98, "durationFrames": 56}]} totalDurationFrames={154} coreSentence={[{"text": "只要一提到雷军，", "showFrom": 0}, {"text": "评论区永远少不了两个词：", "showFrom": 1}, {"text": "“营销大师”、“猴王” ", "showFrom": 2}]} coreSentenceAnchors={[{"coreSentenceAnchor": "营销大师"}, {"coreSentenceAnchor": "猴王"}]} />
            </Sequence>
            <Sequence from={154} durationInFrames={286}>
                <BWStepList content={[{"text": "很多人反感他，", "startFrame": 0, "durationFrames": 36}, {"text": "觉得他把发布会开成了真人秀，", "startFrame": 36, "durationFrames": 70}, {"text": "觉得早年的“饥饿营销”是在耍消费者，", "startFrame": 105, "durationFrames": 88}, {"text": "觉得他整天在台上“碰瓷”苹果和保时捷。", "startFrame": 193, "durationFrames": 93}]} totalDurationFrames={286} title={"反感雷军的理由"} steps={[{"text": "发布会开成真人秀", "showFrom": 1}, {"text": "饥饿营销耍消费者", "showFrom": 2}, {"text": "碰瓷苹果保时捷", "showFrom": 3}]} anchors={[]} />
            </Sequence>
            <Sequence from={440} durationInFrames={193}>
                <BWCenterFocus content={[{"text": "但今天，", "startFrame": 0, "durationFrames": 24}, {"text": "作为一个从MIUI刷机时代就了解雷军的人，", "startFrame": 24, "durationFrames": 100}, {"text": "我想为雷军说句公道话：", "startFrame": 127, "durationFrames": 66}]} totalDurationFrames={193} imageSrc={staticFile("images/为雷军正名/scene_1_3.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={633} durationInFrames={290}>
                <BWCauseChain content={[{"text": "如果在这个残酷的商业世界里，", "startFrame": 0, "durationFrames": 51}, {"text": "雷军不把自己逼成一个“营销大师”，", "startFrame": 50, "durationFrames": 46}, {"text": "小米可能早就死了，", "startFrame": 95, "durationFrames": 39}, {"text": "而我们今天，", "startFrame": 134, "durationFrames": 35}, {"text": "还要花更多的冤枉钱在各种电子产品的溢价上", "startFrame": 169, "durationFrames": 103}]} totalDurationFrames={290} layout={"horizontal"} nodes={[{ label: "残酷赛道", imageSrc: staticFile("images/为雷军正名/scene_1_4_img0.png"), showFrom: 0 }, { label: "营销大师", imageSrc: staticFile("images/为雷军正名/scene_1_4_img1.png"), showFrom: 1 }, { label: "小米存活", imageSrc: staticFile("images/为雷军正名/scene_1_4_img2.png"), showFrom: 2 }]} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/为雷军正名/scene_1/scene_1.mp3")} />
        </AbsoluteFill>
    );
};
