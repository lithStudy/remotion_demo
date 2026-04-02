import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift, BWConceptCard } from "../../../components";

// 平均数陷阱与中位数
const SCENE_DURATION = 147 + 196 + 124 + 239 + 117 + 415;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={147}>
                <BWConceptCard content={[{"text": "在基础统计学里，", "startFrame": 0, "durationFrames": 38}, {"text": "这就是最经典、", "startFrame": 37, "durationFrames": 33}, {"text": "也是最会骗人的算术平均数陷阱。", "startFrame": 69, "durationFrames": 77}]} totalDurationFrames={147} imageSrc={staticFile("images/平均数陷阱/scene_2_1.png")} conceptName={"算术平均数陷阱"} />
            </Sequence>
            <Sequence from={147} durationInFrames={196}>
                <BWCenterFocus content={[{"text": "当一个社会的财富数据分布极其不均匀的时候，", "startFrame": 0, "durationFrames": 100}, {"text": "平均数就是一个完全失去灵魂的骗人指标。", "startFrame": 99, "durationFrames": 97}]} totalDurationFrames={196} imageSrc={staticFile("images/平均数陷阱/scene_2_2.png")} enterEffect="fadeIn" anchors={[{"text": "平均数", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={343} durationInFrames={124}>
                <BWCenterFocus content={[{"text": "最典型的例子就是，", "startFrame": 0, "durationFrames": 38}, {"text": "把马云和你一平均，", "startFrame": 37, "durationFrames": 47}, {"text": "你也能是亿万富翁。", "startFrame": 84, "durationFrames": 40}]} totalDurationFrames={124} imageSrc={staticFile("images/平均数陷阱/scene_2_3.png")} enterEffect="slideBottom" anchors={[{"text": "亿万富翁", "showFrom": 2, "color": "#EF4444", "anim": "popIn", "audioEffect": "woosh"}]} />
            </Sequence>
            <Sequence from={467} durationInFrames={239}>
                <BWCenterFocus content={[{"text": "那些极端的头部财富数值，", "startFrame": 0, "durationFrames": 62}, {"text": "硬生生把平均线拉到了普通人就算垫着脚、", "startFrame": 61, "durationFrames": 105}, {"text": "甚至搭着梯子都够不到的云端。", "startFrame": 165, "durationFrames": 74}]} totalDurationFrames={239} imageSrc={staticFile("images/平均数陷阱/scene_2_4.png")} enterEffect="slideBottom" anchors={[{"text": "财富数值", "showFrom": 0, "color": "#000000", "anim": "slideUp", "audioEffect": "ping"}, {"text": "平均线", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={706} durationInFrames={117}>
                <BWCognitiveShift content={[{"text": "相比之下，", "startFrame": 0, "durationFrames": 24}, {"text": "我们真正应该死死盯住的指标叫做中位数。", "startFrame": 23, "durationFrames": 93}]} totalDurationFrames={117} notText={"算术平均数"} butText={"中位数"} butSrc={staticFile("images/平均数陷阱/scene_2_5.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Sequence from={823} durationInFrames={415}>
                <BWCenterFocus content={[{"text": "如果把全国所有的人，", "startFrame": 0, "durationFrames": 55}, {"text": "按收入从低到高排成一条长长的队伍，", "startFrame": 54, "durationFrames": 84}, {"text": "站在最中间那个位置的人，每个月到底赚多少钱，", "startFrame": 138, "durationFrames": 104}, {"text": "每个月到底赚多少钱，", "startFrame": 242, "durationFrames": 48}, {"text": "那才是最能代表这个国家普罗大众的最真实的社会切面。", "startFrame": 290, "durationFrames": 125}]} totalDurationFrames={415} imageSrc={staticFile("images/平均数陷阱/scene_2_6.png")} enterEffect="slideBottom" anchors={[{"text": "中位数", "showFrom": 2, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/平均数陷阱/scene_2/scene_2.mp3")} />
        </AbsoluteFill>
    );
};
