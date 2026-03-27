import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWSplitCompare } from "../../../components";

// 引出现象：网络环境令人血压升高
const SCENE_DURATION = 66 + 60 + 153 + 112 + 153;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={66}>
                <BWCenterFocus content={[{"text": "最近你有没有这种感觉：上网刷新闻、看评论区，血压能瞬间飙升？", "startFrame": 0, "durationFrames": 66}]} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" anchors={[]} totalDurationFrames={66} />
            </Sequence>
            <Sequence from={66} durationInFrames={60}>
                <BWCenterFocus content={[{"text": "明明一个挺简单的事儿，", "startFrame": 0, "durationFrames": 30}, {"text": "评论区却吵成了一锅粥。", "startFrame": 30, "durationFrames": 30}]} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" anchors={[]} totalDurationFrames={60} />
            </Sequence>
            <Sequence from={126} durationInFrames={153}>
                <BWSplitCompare content={[{"text": "你拿证据跟他讲道理，", "startFrame": 0, "durationFrames": 30}, {"text": "他反手甩给你一个地摊文学链接；", "startFrame": 30, "durationFrames": 33}, {"text": "你试图保持客观，", "startFrame": 63, "durationFrames": 30}, {"text": "结果发现对方只看他想看的，", "startFrame": 93, "durationFrames": 30}, {"text": "只听他想听的。", "startFrame": 123, "durationFrames": 30}]} leftSrc={staticFile("images/template/scene1_1.png")} rightSrc={staticFile("images/template/scene1_1.png")} leftLabel={"讲道理"} rightLabel={"不讲理"} anchors={[]} totalDurationFrames={153} />
            </Sequence>
            <Sequence from={279} durationInFrames={112}>
                <BWSplitCompare content={[{"text": "最气人的是，你发现不管你怎么自证清白，", "startFrame": 0, "durationFrames": 42}, {"text": "对方总能从你的话里抠出几个字来证明你", "startFrame": 42, "durationFrames": 40}, {"text": "“屁股歪了”。", "startFrame": 82, "durationFrames": 30}]} leftSrc={staticFile("images/template/scene1_1.png")} rightSrc={staticFile("images/template/scene1_1.png")} leftLabel={"争论"} rightLabel={"曲解"} anchors={[{"text": "屁股歪了", "showFrom": 2, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}]} totalDurationFrames={112} />
            </Sequence>
            <Sequence from={391} durationInFrames={153}>
                <BWCenterFocus content={[{"text": "这种“鸡同鸭讲、秀才遇上兵”的无力感，", "startFrame": 0, "durationFrames": 42}, {"text": "是不是让你觉得现在的互联网环境简直没法待了？", "startFrame": 42, "durationFrames": 48}, {"text": "大家好像不再是为了真相在讨论，", "startFrame": 90, "durationFrames": 33}, {"text": "而是在为了“输赢”在搏命。", "startFrame": 123, "durationFrames": 30}]} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" anchors={[{"text": "无力感", "showFrom": 0, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}, {"text": "输赢", "showFrom": 3, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}]} totalDurationFrames={153} />
            </Sequence>

        </AbsoluteFill>
    );
};
