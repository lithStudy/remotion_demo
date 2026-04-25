import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWBeatSequence, BWCauseChain, BWCenterFocus, BWCognitiveShift, BWMethodStack } from "../../../components";

// 剖析
const SCENE_DURATION = 408 + 219 + 227 + 254 + 196 + 205;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={408}>
                <BWMethodStack content={[{"text": "我们先说说什么叫核心技术。", "startFrame": 0, "durationFrames": 62}, {"text": "很多人认为，必须从零开始造轮子，", "startFrame": 61, "durationFrames": 89}, {"text": "架构要自己画，光刻机要自己造，芯片也要自己生产，", "startFrame": 149, "durationFrames": 123}, {"text": "才配得到一句网民的肯定。", "startFrame": 271, "durationFrames": 63}, {"text": "但这不过是落后的老农种地思维。", "startFrame": 333, "durationFrames": 75}]} totalDurationFrames={408} title={"什么叫核心技术"} imageSrc={staticFile("images/小米核心技术/scene_2_1.png")} notes={[{"text": "从零造轮子", "showFrom": 1}, {"text": "全栈自研想象", "showFrom": 2}, {"text": "老农种地思维", "showFrom": 4}]} />
            </Sequence>
            <Sequence from={408} durationInFrames={219}>
                <BWCognitiveShift content={[{"text": "在高度分工的现代商业里，", "startFrame": 0, "durationFrames": 55}, {"text": "最深的护城河，早就不是单点突破。", "startFrame": 54, "durationFrames": 80}, {"text": "而是对超级供应链的恐怖整合能力。", "startFrame": 133, "durationFrames": 86}]} totalDurationFrames={219} notText={"单点突破"} butText={"供应链整合"} butSrc={staticFile("images/小米核心技术/scene_2_2.png")} notContentIndex={1} butContentIndex={2} />
            </Sequence>
            <Sequence from={627} durationInFrames={227}>
                <BWCenterFocus content={[{"text": "你可以试着组装一台手机看看，", "startFrame": 0, "durationFrames": 62}, {"text": "把最好的芯片、屏幕和镜头，", "startFrame": 61, "durationFrames": 62}, {"text": "凑在一块强行跑个分。", "startFrame": 122, "durationFrames": 54}, {"text": "结果一定是一场灾难。", "startFrame": 175, "durationFrames": 52}]} totalDurationFrames={227} imageSrc={staticFile("images/小米核心技术/scene_2_3.png")} enterEffect="fadeIn" anchors={[{"text": "灾难", "showFrom": 3, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={854} durationInFrames={254}>
                <BWBeatSequence content={[{"text": "硬件底层的通讯怎么打通？", "startFrame": 0, "durationFrames": 64}, {"text": "功耗如何榨取到极限？", "startFrame": 63, "durationFrames": 59}, {"text": "如何在千万级量产下，", "startFrame": 122, "durationFrames": 55}, {"text": "把良品率咬死在百分之九十九以上？", "startFrame": 176, "durationFrames": 78}]} totalDurationFrames={254} stages={[{ imageSrc: staticFile("images/小米核心技术/scene_2_4_img0.png"), enterEffect: "slideBottom", tone: "calm", showFrom: 0 }, { imageSrc: staticFile("images/小米核心技术/scene_2_4_img1.png"), enterEffect: "slideBottom", tone: "alert", showFrom: 1 }, { imageSrc: staticFile("images/小米核心技术/scene_2_4_img2.png"), enterEffect: "slideBottom", tone: "alert", showFrom: 2 }]} />
            </Sequence>
            <Sequence from={1108} durationInFrames={196}>
                <BWCauseChain content={[{"text": "这背后需要海量的算法调优。", "startFrame": 0, "durationFrames": 66}, {"text": "小米能让全球最顶尖的供应商，", "startFrame": 65, "durationFrames": 74}, {"text": "心甘情愿配合它的节奏。", "startFrame": 138, "durationFrames": 57}]} totalDurationFrames={196} layout={"horizontal"} nodes={[{ label: "算法调优", imageSrc: staticFile("images/小米核心技术/scene_2_5_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { label: "顶尖供应商", imageSrc: staticFile("images/小米核心技术/scene_2_5_img1.png"), showFrom: 1, enterEffect: "slideLeft" }, { label: "节奏协同", imageSrc: staticFile("images/小米核心技术/scene_2_5_img2.png"), showFrom: 2, enterEffect: "zoomIn" }]} />
            </Sequence>
            <Sequence from={1304} durationInFrames={205}>
                <BWCenterFocus content={[{"text": "在这无数个硬件孤岛里，", "startFrame": 0, "durationFrames": 53}, {"text": "硬生生蹚出一条澎湃系统的高速公路。", "startFrame": 52, "durationFrames": 87}, {"text": "这就是别人抄不走的系统能力。", "startFrame": 138, "durationFrames": 67}]} totalDurationFrames={205} imageSrc={staticFile("images/小米核心技术/scene_2_6.png")} enterEffect="fadeIn" anchors={[{"text": "硬件孤岛", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "系统能力", "showFrom": 2, "color": "#2563EB", "anim": "popIn", "audioEffect": "ping"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/小米核心技术/scene_2/scene_2.mp3")} />
        </AbsoluteFill>
    );
};
