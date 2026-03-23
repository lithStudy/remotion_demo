import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWAlertStyle, BWCenterFocus } from "../../../components";

// 引出现象：网络环境令人血压飙升
const SCENE_DURATION = 67 + 60 + 107 + 105 + 108 + 63;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={67}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" content={[{"text": "最近你有没有这种感觉：上网刷新闻、", "startFrame": 0, "durationFrames": 37, "anchor": "感觉", "anchorColor": "#EF4444", "anchorAnim": "spring", "audioEffect": "ping"}, {"text": "看评论区，血压能瞬间飙升？", "startFrame": 37, "durationFrames": 30, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}]} totalDurationFrames={67} />
            </Sequence>
            <Sequence from={67} durationInFrames={60}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" content={[{"text": "明明一个挺简单的事儿，", "startFrame": 0, "durationFrames": 30, "anchor": "简单", "anchorColor": "#EF4444", "anchorAnim": "popIn", "audioEffect": "impact_thud"}, {"text": "评论区却吵成了一锅粥。", "startFrame": 30, "durationFrames": 30, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}]} totalDurationFrames={60} />
            </Sequence>
            <Sequence from={127} durationInFrames={107}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" content={[{"text": "你拿证据跟他讲道理，他反手甩给你一个", "startFrame": 0, "durationFrames": 40, "anchor": "地摊文学", "anchorColor": "#EF4444", "anchorAnim": "popIn", "audioEffect": "impact_thud"}, {"text": "链接；你试图保持客观，结果发现对方", "startFrame": 40, "durationFrames": 37, "anchor": "只看想看的", "anchorColor": "#EF4444", "anchorAnim": "popIn", "audioEffect": "impact_thud"}, {"text": "，只听他想听的。", "startFrame": 77, "durationFrames": 30, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}]} totalDurationFrames={107} />
            </Sequence>
            <Sequence from={234} durationInFrames={105}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" content={[{"text": "最气人的是，你发现不管你怎么自证清白，对方总能从你的话里抠出几个字来", "startFrame": 0, "durationFrames": 75, "anchor": "抠出几个字", "anchorColor": "#EF4444", "anchorAnim": "popIn", "audioEffect": "impact_thud"}, {"text": "证明你“屁股歪了”。", "startFrame": 75, "durationFrames": 30, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}]} totalDurationFrames={105} />
            </Sequence>
            <Sequence from={339} durationInFrames={108}>
                <BWAlertStyle imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="slideBottom" content={[{"text": "这种“鸡同鸭讲、", "startFrame": 0, "durationFrames": 30, "anchor": "鸡同鸭讲", "anchorColor": "#EF4444", "anchorAnim": "popIn", "audioEffect": "impact_thud"}, {"text": "秀才遇上兵”的无力感，", "startFrame": 30, "durationFrames": 30, "anchor": "秀才遇上兵", "anchorColor": "#EF4444", "anchorAnim": "popIn", "audioEffect": "impact_thud"}, {"text": "是不是让你觉得现在的互联网环境简直没法待了？", "startFrame": 60, "durationFrames": 48, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}]} totalDurationFrames={108} />
            </Sequence>
            <Sequence from={447} durationInFrames={63}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" content={[{"text": "大家好像不再是为了真相在讨论，", "startFrame": 0, "durationFrames": 33, "anchor": "真相", "anchorColor": "#000000", "anchorAnim": "highlight", "audioEffect": "ping"}, {"text": "而是在为了“输赢”在搏命。", "startFrame": 33, "durationFrames": 30, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}]} totalDurationFrames={63} />
            </Sequence>

        </AbsoluteFill>
    );
};
