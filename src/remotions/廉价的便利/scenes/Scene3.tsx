import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWBeatSequence, BWCenterFocus, BWKpiHero, BWPanelGrid } from "../../../components";

// 描绘：廉价汗水图景
const SCENE_DURATION = 30 + 60 + 60 + 60 + 60 + 60 + 120 + 60 + 90 + 120;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={30}>
                <BWCenterFocus content={[{"text": "看看你身边这些画面。", "startFrame": 0, "durationFrames": 30}]} totalDurationFrames={30} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={30} durationInFrames={60}>
                <BWKpiHero content={[{"text": "流水线上的阿姨，", "startFrame": 0, "durationFrames": 30}, {"text": "一天干12个小时。", "startFrame": 30, "durationFrames": 30}]} totalDurationFrames={60} blocks={[{"value": 12, "prefix": "一天干", "suffix": "个小时", "label": "流水线上的阿姨", "showFrom": 1}]} anchors={[]} />
            </Sequence>
            <Sequence from={90} durationInFrames={60}>
                <BWCenterFocus content={[{"text": "组装一个小零件，", "startFrame": 0, "durationFrames": 30}, {"text": "才赚几厘钱。", "startFrame": 30, "durationFrames": 30}]} totalDurationFrames={60} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={150} durationInFrames={60}>
                <BWKpiHero content={[{"text": "就靠这，", "startFrame": 0, "durationFrames": 30}, {"text": "9块9还能赚钱。", "startFrame": 30, "durationFrames": 30}]} totalDurationFrames={60} blocks={[{"value": 9.9, "suffix": "块", "showFrom": 1, "label": "售价", "decimalPlaces": 1, "useGrouping": false}]} countDuration={28} anchors={[]} />
            </Sequence>
            <Sequence from={210} durationInFrames={60}>
                <BWCenterFocus content={[{"text": "暴雨夜里，", "startFrame": 0, "durationFrames": 30}, {"text": "外卖小哥骑着电动车狂奔。", "startFrame": 30, "durationFrames": 30}]} totalDurationFrames={60} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={270} durationInFrames={60}>
                <BWCenterFocus content={[{"text": "一单只赚三五块，", "startFrame": 0, "durationFrames": 30}, {"text": "超时平台就扣大钱。", "startFrame": 30, "durationFrames": 30}]} totalDurationFrames={60} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={330} durationInFrames={120}>
                <BWPanelGrid content={[{"text": "为了准时送达，", "startFrame": 0, "durationFrames": 30}, {"text": "他们闯红灯、", "startFrame": 30, "durationFrames": 30}, {"text": "逆行、", "startFrame": 60, "durationFrames": 30}, {"text": "爬楼梯，", "startFrame": 90, "durationFrames": 30}]} totalDurationFrames={120} panels={[{ src: staticFile("images/template/scene1_1.png"), showFrom: 0, enterEffect: "zoomIn" }, { src: staticFile("images/template/scene1_1.png"), showFrom: 1, enterEffect: "slideLeft" }, { src: staticFile("images/template/scene1_1.png"), showFrom: 2, enterEffect: "slideLeft" }, { src: staticFile("images/template/scene1_1.png"), showFrom: 3, enterEffect: "slideBottom" }]} anchors={[]} />
            </Sequence>
            <Sequence from={450} durationInFrames={60}>
                <BWCenterFocus content={[{"text": "汗水混着雨水，", "startFrame": 0, "durationFrames": 30}, {"text": "腿都快跑断了。", "startFrame": 30, "durationFrames": 30}]} totalDurationFrames={60} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={510} durationInFrames={90}>
                <BWCenterFocus content={[{"text": "半夜一点，", "startFrame": 0, "durationFrames": 30}, {"text": "客服秒回你。", "startFrame": 30, "durationFrames": 30}, {"text": "态度好到甩欧美几条街。", "startFrame": 60, "durationFrames": 30}]} totalDurationFrames={90} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" anchors={[{"text": "甩欧美几条街", "showFrom": 2, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={600} durationInFrames={120}>
                <BWBeatSequence content={[{"text": "背后呢？", "startFrame": 0, "durationFrames": 30}, {"text": "三四千底薪的年轻人，", "startFrame": 30, "durationFrames": 30}, {"text": "背着回复速度的KPI，", "startFrame": 60, "durationFrames": 30}, {"text": "连上厕所都要掐表。", "startFrame": 90, "durationFrames": 30}]} totalDurationFrames={120} stages={[{ imageSrc: staticFile("images/template/scene1_1.png"), enterEffect: "breathe", tone: "calm" }, { imageSrc: staticFile("images/template/scene1_1.png"), enterEffect: "slideBottom", tone: "alert" }, { imageSrc: staticFile("images/template/scene1_1.png"), enterEffect: "slideBottom", tone: "alert" }, { imageSrc: staticFile("images/template/scene1_1.png"), enterEffect: "zoomIn", tone: "alert" }]} anchors={[]} />
            </Sequence>

        </AbsoluteFill>
    );
};
