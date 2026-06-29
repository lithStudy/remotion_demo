import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWBeatSequence, BWCenterFocus } from "../../../components";

// 剖析：流水线·外卖·客服
const SCENE_DURATION = 30 + 120 + 60 + 60 + 180 + 90 + 120;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={30}>
                <BWCenterFocus content={[{"text": "看看你身边这些画面。", "startFrame": 0, "durationFrames": 30}]} totalDurationFrames={30} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={30} durationInFrames={120}>
                <BWCenterFocus content={[{"text": "流水线上的阿姨，", "startFrame": 0, "durationFrames": 30}, {"text": "一天干12个小时。", "startFrame": 30, "durationFrames": 30}, {"text": "组装一个小零件，", "startFrame": 60, "durationFrames": 30}, {"text": "才赚几厘钱。", "startFrame": 90, "durationFrames": 30}]} totalDurationFrames={120} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" anchors={[{"text": "12个小时", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": null}, {"text": "几厘钱", "showFrom": 3, "color": "#EF4444", "anim": "popIn", "audioEffect": null}]} />
            </Sequence>
            <Sequence from={150} durationInFrames={60}>
                <BWCenterFocus content={[{"text": "暴雨夜里，", "startFrame": 0, "durationFrames": 30}, {"text": "外卖小哥骑着电动车狂奔。", "startFrame": 30, "durationFrames": 30}]} totalDurationFrames={60} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={210} durationInFrames={60}>
                <BWCenterFocus content={[{"text": "一单只赚三五块，", "startFrame": 0, "durationFrames": 30}, {"text": "超时平台就扣钱。", "startFrame": 30, "durationFrames": 30}]} totalDurationFrames={60} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" anchors={[{"text": "扣钱", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={270} durationInFrames={180}>
                <BWBeatSequence content={[{"text": "为了准时送达，", "startFrame": 0, "durationFrames": 30}, {"text": "他们闯红灯、", "startFrame": 30, "durationFrames": 30}, {"text": "逆行、", "startFrame": 60, "durationFrames": 30}, {"text": "爬楼梯，", "startFrame": 90, "durationFrames": 30}, {"text": "汗水混着雨水，", "startFrame": 120, "durationFrames": 30}, {"text": "腿都快跑断了。", "startFrame": 150, "durationFrames": 30}]} totalDurationFrames={180} stages={[{ imageSrc: staticFile("images/template/scene1_1.png"), enterEffect: "breathe", tone: "calm" }, { imageSrc: staticFile("images/template/scene1_1.png"), enterEffect: "slideBottom", tone: "alert", showFrom: 1 }, { imageSrc: staticFile("images/template/scene1_1.png"), enterEffect: "slideLeft", tone: "alert", showFrom: 4 }]} anchors={[]} />
            </Sequence>
            <Sequence from={450} durationInFrames={90}>
                <BWCenterFocus content={[{"text": "半夜一点，", "startFrame": 0, "durationFrames": 30}, {"text": "客服秒回你。", "startFrame": 30, "durationFrames": 30}, {"text": "态度好到甩欧美几条街。", "startFrame": 60, "durationFrames": 30}]} totalDurationFrames={90} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={540} durationInFrames={120}>
                <BWBeatSequence content={[{"text": "背后呢？", "startFrame": 0, "durationFrames": 30}, {"text": "三四千底薪的年轻人，", "startFrame": 30, "durationFrames": 30}, {"text": "背着回复速度的KPI，", "startFrame": 60, "durationFrames": 30}, {"text": "连上厕所都要掐表。", "startFrame": 90, "durationFrames": 30}]} totalDurationFrames={120} stages={[{ imageSrc: staticFile("images/template/scene1_1.png"), enterEffect: "breathe", tone: "calm" }, { imageSrc: staticFile("images/template/scene1_1.png"), enterEffect: "slideBottom", tone: "alert" }, { imageSrc: staticFile("images/template/scene1_1.png"), enterEffect: "slideBottom", tone: "alert" }, { imageSrc: staticFile("images/template/scene1_1.png"), enterEffect: "zoomIn", tone: "alert" }]} anchors={[]} />
            </Sequence>

        </AbsoluteFill>
    );
};
