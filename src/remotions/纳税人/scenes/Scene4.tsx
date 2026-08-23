import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift, BWMagnifyingGlass, BWSplitCompare } from "../../../components";

// 反转：你养活了基建却以为乞讨
const SCENE_DURATION = 148 + 244 + 103 + 192 + 134 + 162 + 129;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={148}>
                <BWCognitiveShift content={[{"text": "你以为你只买了一件衣服？", "startFrame": 0, "durationFrames": 53}, {"text": "不，", "startFrame": 52, "durationFrames": 17}, {"text": "你买单的是这整个漫长的税收链条。", "startFrame": 68, "durationFrames": 79}]} totalDurationFrames={148} notText={"只买一件衣服"} butText={"为税收链条买单"} butSrc={staticFile("images/纳税人/scene_4_1.png")} notContentIndex={0} butContentIndex={2} anchors={[]} />
            </Sequence>
            <Sequence from={148} durationInFrames={244}>
                <BWMagnifyingGlass content={[{"text": "这笔钱，", "startFrame": 0, "durationFrames": 21}, {"text": "作为成本的一部分，", "startFrame": 20, "durationFrames": 39}, {"text": "一分不差，", "startFrame": 58, "durationFrames": 17}, {"text": "全算在你的最终消费里。", "startFrame": 75, "durationFrames": 58}, {"text": "你没有去税务局排队。", "startFrame": 133, "durationFrames": 48}, {"text": "但你每天都在实打实地掏钱。", "startFrame": 181, "durationFrames": 63}]} totalDurationFrames={244} anchors={[{"text": "成本的一部分", "showFrom": 1, "color": "#000000", "anim": "highlight", "audioEffect": "ping"}, {"text": "实打实地掏钱", "showFrom": 5, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={392} durationInFrames={103}>
                <BWCognitiveShift content={[{"text": "你以为这只是个例？", "startFrame": 0, "durationFrames": 42}, {"text": "不，", "startFrame": 41, "durationFrames": 11}, {"text": "这是整个社会的普遍规律。", "startFrame": 52, "durationFrames": 51}]} totalDurationFrames={103} notText={"只是个例"} butText={"社会普遍规律"} butSrc={staticFile("images/纳税人/scene_4_3.png")} notContentIndex={0} butContentIndex={2} anchors={[]} />
            </Sequence>
            <Sequence from={495} durationInFrames={192}>
                <BWCenterFocus content={[{"text": "你买米，", "startFrame": 0, "durationFrames": 23}, {"text": "买盐，", "startFrame": 22, "durationFrames": 11}, {"text": "买油，", "startFrame": 33, "durationFrames": 32}, {"text": "你的每一笔消费，", "startFrame": 65, "durationFrames": 45}, {"text": "都分出一部分变成了国家运转的资金。", "startFrame": 110, "durationFrames": 82}]} totalDurationFrames={192} imageSrc={staticFile("images/纳税人/scene_4_4.png")} enterEffect="fadeIn" anchors={[{"text": "国家运转", "showFrom": 4, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={687} durationInFrames={134}>
                <BWCenterFocus content={[{"text": "但讽刺的是。", "startFrame": 0, "durationFrames": 33}, {"text": "你养活了庞大的基建，", "startFrame": 32, "durationFrames": 46}, {"text": "你却以为这里面没有你的贡献。", "startFrame": 78, "durationFrames": 55}]} totalDurationFrames={134} imageSrc={staticFile("images/纳税人/scene_4_5.png")} enterEffect="fadeIn" anchors={[{"text": "庞大基建", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={821} durationInFrames={162}>
                <BWSplitCompare content={[{"text": "很多人看不透这套机制。", "startFrame": 0, "durationFrames": 56}, {"text": "在强权面前唯唯诺诺，", "startFrame": 55, "durationFrames": 55}, {"text": "在公共事务上默不作声。", "startFrame": 110, "durationFrames": 52}]} totalDurationFrames={162} leftSrc={staticFile("images/纳税人/scene_4_6_left.png")} rightSrc={staticFile("images/纳税人/scene_4_6_right.png")} leftLabel={"强权面前"} rightLabel={"公共事务"} leftShowFrom={1} rightShowFrom={2} anchors={[]} />
            </Sequence>
            <Sequence from={983} durationInFrames={129}>
                <BWCenterFocus content={[{"text": "你的钱被拿去建了高速公路。", "startFrame": 0, "durationFrames": 53}, {"text": "你却连在上面走，", "startFrame": 52, "durationFrames": 35}, {"text": "都觉得是被施舍的。", "startFrame": 87, "durationFrames": 42}]} totalDurationFrames={129} imageSrc={staticFile("images/纳税人/scene_4_7.png")} enterEffect="fadeIn" anchors={[{"text": "被施舍", "showFrom": 2, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/纳税人/scene_4/scene_4.mp3")} />
        </AbsoluteFill>
    );
};
