import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWSplitCompare } from "../../../components";

// 引出现象：网络争论与无力感
const SCENE_DURATION = 90 + 60 + 63 + 90 + 97 + 90 + 63;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={90}>
                <BWCenterFocus imageSrc={staticFile("一个人正在浏览手机新闻的场景")} enterEffect="breathe" content={[{"text": "最近你有没有这种感觉：", "startFrame": 0, "durationFrames": 30}, {"text": "上网刷新闻、看评论区，", "startFrame": 30, "durationFrames": 30}, {"text": "血压能瞬间飙升？", "startFrame": 60, "durationFrames": 30}]} anchors={[]} totalDurationFrames={90} />
            </Sequence>
            <Sequence from={90} durationInFrames={60}>
                <BWCenterFocus imageSrc={staticFile("人们在网络论坛上激烈争论的场景")} enterEffect="fadeIn" content={[{"text": "明明一个挺简单的事儿，", "startFrame": 0, "durationFrames": 30}, {"text": "评论区却吵成了一锅粥。", "startFrame": 30, "durationFrames": 30}]} anchors={[]} totalDurationFrames={60} />
            </Sequence>
            <Sequence from={150} durationInFrames={63}>
                <BWSplitCompare leftSrc={staticFile("认真讲道理的人")} rightSrc={staticFile("传播虚假信息的人")} leftLabel={"讲道理"} rightLabel={"地摊文学"} content={[{"text": "你拿证据跟他讲道理，", "startFrame": 0, "durationFrames": 30}, {"text": "他反手甩给你一个地摊文学链接；", "startFrame": 30, "durationFrames": 33}]} anchors={[]} totalDurationFrames={63} />
            </Sequence>
            <Sequence from={213} durationInFrames={90}>
                <BWSplitCompare leftSrc={staticFile("人戴着眼罩看东西的场景")} rightSrc={staticFile("人摘掉眼罩看到清晰世界的场景")} leftLabel={"只看想看的"} rightLabel={"全面客观"} content={[{"text": "你试图保持客观，", "startFrame": 0, "durationFrames": 30}, {"text": "结果发现对方只看他想看的，", "startFrame": 30, "durationFrames": 30}, {"text": "只听他想听的。", "startFrame": 60, "durationFrames": 30}]} anchors={[]} totalDurationFrames={90} />
            </Sequence>
            <Sequence from={303} durationInFrames={97}>
                <BWCenterFocus imageSrc={staticFile("争吵的两个人，其中一人指责另一人")} enterEffect="fadeIn" content={[{"text": "最气人的是，你发现不管你怎么自证清白，", "startFrame": 0, "durationFrames": 42}, {"text": "对方总能从你的话里抠出几个字来证明你“屁股歪了”。", "startFrame": 42, "durationFrames": 55}]} anchors={[{"text": "屁股歪了", "showFrom": 1, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}]} totalDurationFrames={97} />
            </Sequence>
            <Sequence from={400} durationInFrames={90}>
                <BWCenterFocus imageSrc={staticFile("一个人对着一群人无奈摊手的简笔画")} enterEffect="slideLeft" content={[{"text": "这种“鸡同鸭讲、秀才遇着兵”的无力感，", "startFrame": 0, "durationFrames": 42}, {"text": "是不是让你觉得现在的互联网环境简直没法待了？", "startFrame": 42, "durationFrames": 48}]} anchors={[{"text": "无力感", "showFrom": 0, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}]} totalDurationFrames={90} />
            </Sequence>
            <Sequence from={490} durationInFrames={63}>
                <BWCenterFocus imageSrc={staticFile("一群人争论的简笔画")} enterEffect="fadeIn" content={[{"text": "大家好像不再是为了真相在讨论，", "startFrame": 0, "durationFrames": 33}, {"text": "而是在为了“输赢”在搏命。", "startFrame": 33, "durationFrames": 30}]} anchors={[]} totalDurationFrames={63} />
            </Sequence>

        </AbsoluteFill>
    );
};
