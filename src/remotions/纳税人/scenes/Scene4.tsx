import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift, BWMagnifyingGlass, BWSplitCompare } from "../../../components";

// 反转：你养活了基建却以为乞讨
const SCENE_DURATION = 158 + 256 + 108 + 175 + 149 + 175 + 139;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={158}>
                <BWCognitiveShift content={[{"text": "你以为你只买了一件衣服？", "startFrame": 0, "durationFrames": 59}, {"text": "不，", "startFrame": 58, "durationFrames": 17}, {"text": "你买单的是这整个漫长的税收链条。", "startFrame": 75, "durationFrames": 83}]} totalDurationFrames={158} notText={"只买一件衣服"} butText={"为税收链条买单"} butSrc={staticFile("images/纳税人/scene_4_1.png")} notContentIndex={0} butContentIndex={2} anchors={[]} />
            </Sequence>
            <Sequence from={158} durationInFrames={256}>
                <BWMagnifyingGlass content={[{"text": "这笔钱，", "startFrame": 0, "durationFrames": 24}, {"text": "作为成本的一部分，", "startFrame": 24, "durationFrames": 42}, {"text": "一分不差，", "startFrame": 65, "durationFrames": 18}, {"text": "全算在你的最终消费里。", "startFrame": 82, "durationFrames": 61}, {"text": "你没有去税务局排队。", "startFrame": 143, "durationFrames": 51}, {"text": "但你每天都在实打实地掏钱。", "startFrame": 193, "durationFrames": 63}]} totalDurationFrames={256} anchors={[{"text": "成本的一部分", "showFrom": 1, "color": "#000000", "anim": "highlight", "audioEffect": "ping"}, {"text": "实打实地掏钱", "showFrom": 5, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={414} durationInFrames={108}>
                <BWCognitiveShift content={[{"text": "你以为这只是个例？", "startFrame": 0, "durationFrames": 42}, {"text": "不，", "startFrame": 41, "durationFrames": 11}, {"text": "这是整个社会的普遍规律。", "startFrame": 52, "durationFrames": 56}]} totalDurationFrames={108} notText={"只是个例"} butText={"社会普遍规律"} butSrc={staticFile("images/纳税人/scene_4_3.png")} notContentIndex={0} butContentIndex={2} anchors={[]} />
            </Sequence>
            <Sequence from={522} durationInFrames={175}>
                <BWCenterFocus content={[{"text": "你买米，", "startFrame": 0, "durationFrames": 18}, {"text": "买盐，", "startFrame": 17, "durationFrames": 12}, {"text": "买油，", "startFrame": 29, "durationFrames": 21}, {"text": "你的每一笔消费，", "startFrame": 50, "durationFrames": 39}, {"text": "都分出一部分变成了国家运转的资金。", "startFrame": 88, "durationFrames": 86}]} totalDurationFrames={175} imageSrc={staticFile("images/纳税人/scene_4_4.png")} enterEffect="fadeIn" anchors={[{"text": "国家运转", "showFrom": 4, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={697} durationInFrames={149}>
                <BWCenterFocus content={[{"text": "但讽刺的是。", "startFrame": 0, "durationFrames": 42}, {"text": "你养活了庞大的基建，", "startFrame": 41, "durationFrames": 52}, {"text": "你却以为这里面没有你的贡献。", "startFrame": 92, "durationFrames": 56}]} totalDurationFrames={149} imageSrc={staticFile("images/纳税人/scene_4_5.png")} enterEffect="fadeIn" anchors={[{"text": "庞大基建", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={846} durationInFrames={175}>
                <BWSplitCompare content={[{"text": "很多人看不透这套机制。", "startFrame": 0, "durationFrames": 66}, {"text": "在强权面前唯唯诺诺，", "startFrame": 65, "durationFrames": 55}, {"text": "在公共事务上默不作声。", "startFrame": 120, "durationFrames": 55}]} totalDurationFrames={175} leftSrc={staticFile("images/纳税人/scene_4_6_left.png")} rightSrc={staticFile("images/纳税人/scene_4_6_right.png")} leftLabel={"强权面前"} rightLabel={"公共事务"} leftShowFrom={1} rightShowFrom={2} anchors={[]} />
            </Sequence>
            <Sequence from={1021} durationInFrames={139}>
                <BWCenterFocus content={[{"text": "你的钱被拿去建了高速公路。", "startFrame": 0, "durationFrames": 57}, {"text": "你却连在上面走，", "startFrame": 56, "durationFrames": 39}, {"text": "都觉得是被施舍的。", "startFrame": 94, "durationFrames": 44}]} totalDurationFrames={139} imageSrc={staticFile("images/纳税人/scene_4_7.png")} enterEffect="fadeIn" anchors={[{"text": "被施舍", "showFrom": 2, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/纳税人/scene_4/scene_4.mp3")} />
        </AbsoluteFill>
    );
};
