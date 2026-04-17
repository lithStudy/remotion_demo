import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift } from "../../../components";

// 剖析：超级供应链整合
const SCENE_DURATION = 30 + 180 + 158 + 151 + 125 + 91 + 98;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={30}>
                <BWCenterFocus content={[{"text": "我们先说说什么叫核心技术。", "startFrame": 0, "durationFrames": 30}]} totalDurationFrames={30} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" anchors={[{"text": "核心技术", "showFrom": 0, "color": "#000000", "anim": "spring", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={30} durationInFrames={180}>
                <BWCenterFocus content={[{"text": "很多人认为，", "startFrame": 0, "durationFrames": 30}, {"text": "必须从零开始造轮子，", "startFrame": 30, "durationFrames": 30}, {"text": "\n架构要自己画，", "startFrame": 60, "durationFrames": 30}, {"text": "光刻机要自己造，", "startFrame": 90, "durationFrames": 30}, {"text": "芯片也要自己生产，", "startFrame": 120, "durationFrames": 30}, {"text": "\n才配得到一句网民的肯定。", "startFrame": 150, "durationFrames": 30}]} totalDurationFrames={180} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" anchors={[{"text": "造轮子", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "核心技术", "showFrom": 4, "color": "#000000", "anim": "slideUp", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={210} durationInFrames={158}>
                <BWCognitiveShift content={[{"text": "但这不过是落后的老农种地思维。", "startFrame": 0, "durationFrames": 33}, {"text": "\n在高度分工的现代商业里，", "startFrame": 33, "durationFrames": 30}, {"text": "\n最深的护城河，", "startFrame": 63, "durationFrames": 30}, {"text": "早就不是单点突破。", "startFrame": 93, "durationFrames": 30}, {"text": "\n而是对超级供应链的恐怖整合能力。", "startFrame": 123, "durationFrames": 35}]} totalDurationFrames={158} notText={"单点突破"} butText={"整合能力"} butSrc={staticFile("images/template/scene1_1.png")} notContentIndex={3} butContentIndex={4} anchors={[]} />
            </Sequence>
            <Sequence from={368} durationInFrames={151}>
                <BWCenterFocus content={[{"text": "你可以试着组装一台手机看看，", "startFrame": 0, "durationFrames": 31}, {"text": "\n把最好的芯片、", "startFrame": 31, "durationFrames": 30}, {"text": "屏幕和镜头，", "startFrame": 61, "durationFrames": 30}, {"text": "\n凑在一块强行跑个分。", "startFrame": 91, "durationFrames": 30}, {"text": "\n结果一定是一场灾难。", "startFrame": 121, "durationFrames": 30}]} totalDurationFrames={151} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" anchors={[{"text": "灾难", "showFrom": 4, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={519} durationInFrames={125}>
                <BWCenterFocus content={[{"text": "硬件底层的通讯怎么打通？", "startFrame": 0, "durationFrames": 30}, {"text": "\n功耗如何榨取到极限？", "startFrame": 30, "durationFrames": 30}, {"text": "\n如何在千万级量产下，", "startFrame": 60, "durationFrames": 30}, {"text": "\n把良品率咬死在百分之九十九以上？", "startFrame": 90, "durationFrames": 35}]} totalDurationFrames={125} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" anchors={[{"text": "算法调优", "showFrom": 3, "color": "#000000", "anim": "spring", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={644} durationInFrames={91}>
                <BWCenterFocus content={[{"text": "这背后需要海量的算法调优。", "startFrame": 0, "durationFrames": 30}, {"text": "\n小米能让全球最顶尖的供应商，", "startFrame": 30, "durationFrames": 31}, {"text": "\n心甘情愿配合它的节奏。", "startFrame": 61, "durationFrames": 30}]} totalDurationFrames={91} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" anchors={[{"text": "算法调优", "showFrom": 0, "color": "#000000", "anim": "highlight", "audioEffect": "ping"}, {"text": "供应商", "showFrom": 1, "color": "#000000", "anim": "spring", "audioEffect": "woosh"}, {"text": "配合节奏", "showFrom": 2, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={735} durationInFrames={98}>
                <BWCenterFocus content={[{"text": "在这无数个硬件孤岛里，", "startFrame": 0, "durationFrames": 30}, {"text": "\n硬生生蹚出一条澎湃系统的高速公路。", "startFrame": 30, "durationFrames": 37}, {"text": "\n这就是别人抄不走的系统能力。", "startFrame": 67, "durationFrames": 31}]} totalDurationFrames={98} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" anchors={[{"text": "硬件孤岛", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "高速公路", "showFrom": 1, "color": "#000000", "anim": "slideUp", "audioEffect": "woosh"}, {"text": "系统能力", "showFrom": 2, "color": "#EF4444", "anim": "popIn", "audioEffect": "ping"}]} />
            </Sequence>

        </AbsoluteFill>
    );
};
