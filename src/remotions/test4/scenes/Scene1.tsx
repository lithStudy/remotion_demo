import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWSplitCompare } from "../../../components";

// 引出现象：网络环境令人血压升高
const SCENE_DURATION = 67 + 60 + 63 + 90 + 112 + 90 + 63;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={67}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" content={[{"text": "最近你有没有这种感觉：上网刷新闻、", "startFrame": 0, "durationFrames": 37}, {"text": "看评论区，血压能瞬间飙升？", "startFrame": 37, "durationFrames": 30}]} anchors={[{"text": "血压飙升", "showFrom": 1, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}]} totalDurationFrames={67} />
            </Sequence>
            <Sequence from={67} durationInFrames={60}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="slideLeft" content={[{"text": "明明一个挺简单的事儿，", "startFrame": 0, "durationFrames": 30}, {"text": "评论区却吵成了一锅粥。", "startFrame": 30, "durationFrames": 30}]} anchors={[]} totalDurationFrames={60} />
            </Sequence>
            <Sequence from={127} durationInFrames={63}>
                <BWSplitCompare leftSrc={staticFile("images/template/scene1_1.png")} rightSrc={staticFile("images/template/scene1_1.png")} leftLabel={"讲道理"} rightLabel={"甩链接"} content={[{"text": "你拿证据跟他讲道理，", "startFrame": 0, "durationFrames": 30}, {"text": "他反手甩给你一个地摊文学链接；", "startFrame": 30, "durationFrames": 33}]} anchors={[]} enterEffect="slideLeft" totalDurationFrames={63} />
            </Sequence>
            <Sequence from={190} durationInFrames={90}>
                <BWSplitCompare leftSrc={staticFile("images/template/scene1_1.png")} rightSrc={staticFile("images/template/scene1_1.png")} leftLabel={"只想看的"} rightLabel={"所有信息"} content={[{"text": "你试图保持客观，", "startFrame": 0, "durationFrames": 30}, {"text": "结果发现对方只看他想看的，", "startFrame": 30, "durationFrames": 30}, {"text": "只听他想听的。", "startFrame": 60, "durationFrames": 30}]} anchors={[]} enterEffect="slideLeft" totalDurationFrames={90} />
            </Sequence>
            <Sequence from={280} durationInFrames={112}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" content={[{"text": "最气人的是，你发现不管你怎么自证清白，", "startFrame": 0, "durationFrames": 42}, {"text": "对方总能从你的话里抠出几个字来证明你", "startFrame": 42, "durationFrames": 40}, {"text": "“屁股歪了”。", "startFrame": 82, "durationFrames": 30}]} anchors={[]} totalDurationFrames={112} />
            </Sequence>
            <Sequence from={392} durationInFrames={90}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" content={[{"text": "这种“鸡同鸭讲、秀才遇上兵”的无力感，", "startFrame": 0, "durationFrames": 42}, {"text": "是不是让你觉得现在的互联网环境简直没法待了？", "startFrame": 42, "durationFrames": 48}]} anchors={[{"text": "无力感", "showFrom": 0, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}]} totalDurationFrames={90} />
            </Sequence>
            <Sequence from={482} durationInFrames={63}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" content={[{"text": "大家好像不再是为了真相在讨论，", "startFrame": 0, "durationFrames": 33}, {"text": "而是在为了“输赢”在搏命。", "startFrame": 33, "durationFrames": 30}]} anchors={[]} totalDurationFrames={63} />
            </Sequence>

        </AbsoluteFill>
    );
};
