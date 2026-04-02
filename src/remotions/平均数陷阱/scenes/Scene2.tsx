import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift, BWConceptCard } from "../../../components";

// 平均数陷阱与中位数
const SCENE_DURATION = 150 + 200 + 129 + 219 + 130 + 377;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={150}>
                <BWConceptCard content={[{"text": "在基础统计学里，", "startFrame": 0, "durationFrames": 42}, {"text": "这就是最经典、", "startFrame": 41, "durationFrames": 35}, {"text": "也是最会骗人的算术平均数陷阱。", "startFrame": 76, "durationFrames": 74}]} totalDurationFrames={150} imageSrc={staticFile("images/平均数陷阱/scene_2_1.png")} conceptName={"算术平均数陷阱"} />
            </Sequence>
            <Sequence from={150} durationInFrames={200}>
                <BWCenterFocus content={[{"text": "当一个社会的财富数据分布极其不均匀的时候，", "startFrame": 0, "durationFrames": 99}, {"text": "平均数就是一个完全失去灵魂的骗人指标。", "startFrame": 98, "durationFrames": 102}]} totalDurationFrames={200} imageSrc={staticFile("images/平均数陷阱/scene_2_2.png")} enterEffect="fadeIn" anchors={[{"text": "平均数", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={350} durationInFrames={129}>
                <BWCenterFocus content={[{"text": "最典型的例子就是，", "startFrame": 0, "durationFrames": 42}, {"text": "把马云和你一平均，", "startFrame": 41, "durationFrames": 47}, {"text": "你也能是亿万富翁。", "startFrame": 88, "durationFrames": 41}]} totalDurationFrames={129} imageSrc={staticFile("images/平均数陷阱/scene_2_3.png")} enterEffect="slideBottom" anchors={[{"text": "亿万富翁", "showFrom": 2, "color": "#EF4444", "anim": "popIn", "audioEffect": "woosh"}]} />
            </Sequence>
            <Sequence from={479} durationInFrames={219}>
                <BWCenterFocus content={[{"text": "那些极端的头部财富数值，", "startFrame": 0, "durationFrames": 59}, {"text": "硬生生把平均线拉到了普通人就算垫着脚、", "startFrame": 58, "durationFrames": 94}, {"text": "甚至搭着梯子都够不到的云端。", "startFrame": 152, "durationFrames": 66}]} totalDurationFrames={219} imageSrc={staticFile("images/平均数陷阱/scene_2_4.png")} enterEffect="slideBottom" anchors={[{"text": "财富数值", "showFrom": 0, "color": "#000000", "anim": "slideUp", "audioEffect": "ping"}, {"text": "平均线", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={698} durationInFrames={130}>
                <BWCognitiveShift content={[{"text": "相比之下，", "startFrame": 0, "durationFrames": 26}, {"text": "我们真正应该死死盯住的指标叫做中位数。", "startFrame": 25, "durationFrames": 105}]} totalDurationFrames={130} notText={"算术平均数"} butText={"中位数"} butSrc={staticFile("images/平均数陷阱/scene_2_5.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Sequence from={828} durationInFrames={377}>
                <BWCenterFocus content={[{"text": "如果把全国所有的人，", "startFrame": 0, "durationFrames": 46}, {"text": "按收入从低到高排成一条长长的队伍，", "startFrame": 45, "durationFrames": 94}, {"text": "站在最中间那个位置的人，", "startFrame": 139, "durationFrames": 59}, {"text": "每个月到底赚多少钱，", "startFrame": 198, "durationFrames": 47}, {"text": "那才是最能代表这个国家普罗大众的最真实的社会切面。", "startFrame": 245, "durationFrames": 132}]} totalDurationFrames={377} imageSrc={staticFile("images/平均数陷阱/scene_2_6.png")} enterEffect="slideBottom" anchors={[{"text": "中位数", "showFrom": 2, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/平均数陷阱/scene_2/scene_2.mp3")} />
        </AbsoluteFill>
    );
};
