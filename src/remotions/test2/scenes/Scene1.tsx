import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWDosAndDonts, BWTextFocus } from "../../../components";

// 引出现象：网络环境令人血压飙升
const SCENE_DURATION = 90 + 60 + 63 + 90 + 97 + 90 + 63;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={90}>
                <BWCenterFocus imageSrc={staticFile("一个人坐在电脑前，周围环绕着各种新闻app的图标")} enterEffect="breathe" content={[{"text": "最近你有没有这种感觉：", "startFrame": 0, "durationFrames": 30, "audioEffect": "ping"}, {"text": "上网刷新闻、看评论区，", "startFrame": 30, "durationFrames": 30, "audioEffect": "ping"}, {"text": "血压能瞬间飙升？", "startFrame": 60, "durationFrames": 30, "audioEffect": null}]} anchors={[]} totalDurationFrames={90} />
            </Sequence>
            <Sequence from={90} durationInFrames={60}>
                <BWCenterFocus imageSrc={staticFile("一群人围在一起争吵的卡通场景")} enterEffect="fadeIn" content={[{"text": "明明一个挺简单的事儿，", "startFrame": 0, "durationFrames": 30, "audioEffect": "ping"}, {"text": "评论区却吵成了一锅粥。", "startFrame": 30, "durationFrames": 30, "audioEffect": null}]} anchors={[]} totalDurationFrames={60} />
            </Sequence>
            <Sequence from={150} durationInFrames={63}>
                <BWDosAndDonts leftSrc={staticFile("一个人据理力争的简笔画")} rightSrc={staticFile("一个人捂住耳朵不听的简笔画")} dontLabel={"讲道理"} doLabel={"甩链接"} content={[{"text": "你拿证据跟他讲道理，", "startFrame": 0, "durationFrames": 30, "audioEffect": "ping"}, {"text": "他反手甩给你一个地摊文学链接；", "startFrame": 30, "durationFrames": 33, "audioEffect": "impact_thud"}]} anchors={[]} totalDurationFrames={63} />
            </Sequence>
            <Sequence from={213} durationInFrames={90}>
                <BWDosAndDonts leftSrc={staticFile("只看局部的人简笔画图标")} rightSrc={staticFile("全面观察的人简笔画图标")} dontLabel={"只看局部"} doLabel={"全面观察"} content={[{"text": "你试图保持客观，", "startFrame": 0, "durationFrames": 30, "audioEffect": "ping"}, {"text": "结果发现对方只看他想看的，", "startFrame": 30, "durationFrames": 30, "audioEffect": "ping"}, {"text": "只听他想听的。", "startFrame": 60, "durationFrames": 30, "audioEffect": "ping"}]} anchors={[]} totalDurationFrames={90} />
            </Sequence>
            <Sequence from={303} durationInFrames={97}>
                <BWDosAndDonts leftSrc={staticFile("用放大镜抠字的人简笔画图标")} rightSrc={staticFile("理性讨论的人简笔画图标")} dontLabel={"❌ 抠字眼"} doLabel={"✅ 就事论事"} content={[{"text": "最气人的是，你发现不管你怎么自证清白，", "startFrame": 0, "durationFrames": 42, "audioEffect": "woosh"}, {"text": "对方总能从你的话里抠出几个字来证明你“屁股歪了”。", "startFrame": 42, "durationFrames": 55, "audioEffect": null}]} anchors={[]} totalDurationFrames={97} />
            </Sequence>
            <Sequence from={400} durationInFrames={90}>
                <BWCenterFocus imageSrc={staticFile("一群人围在一起争吵的卡通场景")} enterEffect="fadeIn" content={[{"text": "这种“鸡同鸭讲、秀才遇上兵”的无力感，", "startFrame": 0, "durationFrames": 42, "audioEffect": null}, {"text": "是不是让你觉得现在的互联网环境简直没法待了？", "startFrame": 42, "durationFrames": 48, "audioEffect": null}]} anchors={[]} totalDurationFrames={90} />
            </Sequence>
            <Sequence from={490} durationInFrames={63}>
                <BWTextFocus content={[{"text": "大家好像不再是为了真相在讨论，", "startFrame": 0, "durationFrames": 33, "audioEffect": "ping"}, {"text": "而是在为了“输赢”在搏命。", "startFrame": 33, "durationFrames": 30, "audioEffect": null}]} anchors={[]} totalDurationFrames={63} />
            </Sequence>

        </AbsoluteFill>
    );
};
