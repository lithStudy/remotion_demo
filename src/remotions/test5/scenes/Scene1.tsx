import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWSplitCompare } from "../../../components";

// 引出现象：网络环境的负面影响
const SCENE_DURATION = 90 + 123 + 90 + 150 + 90 + 63;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={90}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" content={[{"text": "最近你有没有这种感觉：", "startFrame": 0, "durationFrames": 30}, {"text": "上网刷新闻、看评论区，", "startFrame": 30, "durationFrames": 30}, {"text": "血压能瞬间飙升？", "startFrame": 60, "durationFrames": 30}]} anchors={[]} totalDurationFrames={90} />
            </Sequence>
            <Sequence from={90} durationInFrames={123}>
                <BWSplitCompare leftSrc={staticFile("images/template/scene1_1.png")} rightSrc={staticFile("images/template/scene1_1.png")} leftLabel={"评论区"} rightLabel={"讲道理"} content={[{"text": "明明一个挺简单的事儿，", "startFrame": 0, "durationFrames": 30}, {"text": "评论区却吵成了一锅粥。", "startFrame": 30, "durationFrames": 30}, {"text": "你拿证据跟他讲道理，", "startFrame": 60, "durationFrames": 30}, {"text": "他反手甩给你一个地摊文学链接；", "startFrame": 90, "durationFrames": 33}]} anchors={[]} totalDurationFrames={123} />
            </Sequence>
            <Sequence from={213} durationInFrames={90}>
                <BWSplitCompare content={[{"text": "你试图保持客观，", "startFrame": 0, "durationFrames": 30}, {"text": "结果发现对方只看他想看的，", "startFrame": 30, "durationFrames": 30}, {"text": "只听他想听的。", "startFrame": 60, "durationFrames": 30}]} leftSrc={staticFile("images/template/scene1_1.png")} rightSrc={staticFile("images/template/scene1_1.png")} leftLabel={"选择性观看"} rightLabel={"选择性接收"} anchors={[]} totalDurationFrames={90} />
            </Sequence>
            <Sequence from={303} durationInFrames={150}>
                <BWSplitCompare leftSrc={staticFile("images/template/scene1_1.png")} rightSrc={staticFile("images/template/scene1_1.png")} leftLabel={"理性讨论"} rightLabel={"断章取义"} content={[{"text": "最气人的是，", "startFrame": 0, "durationFrames": 30}, {"text": "你发现不管你怎么自证清白，", "startFrame": 30, "durationFrames": 30}, {"text": "对方总能从你的话里", "startFrame": 60, "durationFrames": 30}, {"text": "抠出几个字来证明你", "startFrame": 90, "durationFrames": 30}, {"text": "“屁股歪了”。", "startFrame": 120, "durationFrames": 30}]} anchors={[]} totalDurationFrames={150} />
            </Sequence>
            <Sequence from={453} durationInFrames={90}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" content={[{"text": "这种“鸡同鸭讲、秀才遇上兵”的无力感，", "startFrame": 0, "durationFrames": 42}, {"text": "是不是让你觉得现在的互联网环境简直没法待了？", "startFrame": 42, "durationFrames": 48}]} anchors={[{"text": "无力感", "showFrom": 0, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}]} totalDurationFrames={90} />
            </Sequence>
            <Sequence from={543} durationInFrames={63}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" content={[{"text": "大家好像不再是为了真相在讨论，", "startFrame": 0, "durationFrames": 33}, {"text": "而是在为了“输赢”在搏命。", "startFrame": 33, "durationFrames": 30}]} anchors={[{"text": "真相", "showFrom": 0, "color": "#000000", "anim": "highlight", "audioEffect": null}, {"text": "输赢", "showFrom": 1, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}]} totalDurationFrames={63} />
            </Sequence>

        </AbsoluteFill>
    );
};
