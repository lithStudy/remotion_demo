import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWSplitCompare } from "../../../components";

// 引出现象：网络环境令人血压飙升
const SCENE_DURATION = 151 + 111 + 126 + 141 + 227 + 207 + 141;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={151}>
                <BWCenterFocus imageSrc={staticFile("images/test3/scene_1_1.png")} enterEffect="breathe" content={[{"text": "最近你有没有这种感觉：", "startFrame": 0, "durationFrames": 56, "audioEffect": "ping"}, {"text": "上网刷新闻、看评论区，", "startFrame": 55, "durationFrames": 56, "audioEffect": "ping"}, {"text": "血压能瞬间飙升？", "startFrame": 110, "durationFrames": 41, "audioEffect": "impact_thud"}]} anchors={[{"text": "血压飙升", "showFrom": 2, "color": "#EF4444", "anim": "popIn"}]} totalDurationFrames={151} />
            </Sequence>
            <Sequence from={151} durationInFrames={111}>
                <BWCenterFocus imageSrc={staticFile("images/test3/scene_1_2.png")} enterEffect="fadeIn" content={[{"text": "明明一个挺简单的事儿，", "startFrame": 0, "durationFrames": 56, "audioEffect": "ping"}, {"text": "评论区却吵成了一锅粥。", "startFrame": 55, "durationFrames": 56, "audioEffect": null}]} anchors={[]} totalDurationFrames={111} />
            </Sequence>
            <Sequence from={262} durationInFrames={126}>
                <BWSplitCompare leftSrc={staticFile("images/test3/scene_1_3_left.png")} rightSrc={staticFile("images/test3/scene_1_3_right.png")} leftLabel={"你的证据"} rightLabel={"他的论据"} content={[{"text": "你拿证据跟他讲道理，", "startFrame": 0, "durationFrames": 51, "audioEffect": "ping"}, {"text": "他反手甩给你一个地摊文学链接；", "startFrame": 50, "durationFrames": 76, "audioEffect": "impact_thud"}]} anchors={[]} totalDurationFrames={126} />
            </Sequence>
            <Sequence from={388} durationInFrames={141}>
                <BWSplitCompare leftSrc={staticFile("images/test3/scene_1_4_left.png")} rightSrc={staticFile("images/test3/scene_1_4_right.png")} leftLabel={"你的视角"} rightLabel={"对方视角"} content={[{"text": "你试图保持客观，", "startFrame": 0, "durationFrames": 41, "audioEffect": "ping"}, {"text": "结果发现对方只看他想看的，", "startFrame": 40, "durationFrames": 66, "audioEffect": "ping"}, {"text": "只听他想听的。", "startFrame": 105, "durationFrames": 36, "audioEffect": null}]} anchors={[]} totalDurationFrames={141} />
            </Sequence>
            <Sequence from={529} durationInFrames={227}>
                <BWCenterFocus imageSrc={staticFile("images/test3/scene_1_5.png")} enterEffect="fadeIn" content={[{"text": "最气人的是，你发现不管你怎么自证清白，", "startFrame": 0, "durationFrames": 96, "audioEffect": "ping"}, {"text": "对方总能从你的话里抠出几个字来证明你", "startFrame": 95, "durationFrames": 96, "audioEffect": "ping"}, {"text": "“屁股歪了”。", "startFrame": 190, "durationFrames": 36, "audioEffect": "impact_thud"}]} anchors={[{"text": "屁股歪了", "showFrom": 0, "color": "#EF4444", "anim": "popIn"}]} totalDurationFrames={227} />
            </Sequence>
            <Sequence from={756} durationInFrames={207}>
                <BWCenterFocus imageSrc={staticFile("images/test3/scene_1_6.png")} enterEffect="fadeIn" content={[{"text": "这种“鸡同鸭讲、秀才遇上兵”的无力感，", "startFrame": 0, "durationFrames": 96, "audioEffect": "impact_thud"}, {"text": "是不是让你觉得现在的互联网环境简直没法待了？", "startFrame": 95, "durationFrames": 111, "audioEffect": null}]} anchors={[{"text": "无力感", "showFrom": 0, "color": "#EF4444", "anim": "popIn"}]} totalDurationFrames={207} />
            </Sequence>
            <Sequence from={963} durationInFrames={141}>
                <BWCenterFocus imageSrc={staticFile("images/test3/scene_1_7.png")} enterEffect="fadeIn" content={[{"text": "大家好像不再是为了真相在讨论，", "startFrame": 0, "durationFrames": 76, "audioEffect": "ping"}, {"text": "而是在为了“输赢”在搏命。", "startFrame": 75, "durationFrames": 66, "audioEffect": null}]} anchors={[]} totalDurationFrames={141} />
            </Sequence>
            <Audio src={staticFile("/audio/test3/scene_1/scene_1.mp3")} />
        </AbsoluteFill>
    );
};
