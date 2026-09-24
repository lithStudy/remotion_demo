import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWBeatSequence, BWCenterFocus, BWCognitiveShift, BWConceptCard, BWKpiHero, BWProgressRing } from "../../../components";

// 剖析：单车抽血
const SCENE_DURATION = 105 + 120 + 136 + 71 + 196 + 274 + 190 + 112 + 130 + 84;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={105}>
                <BWCenterFocus content={[{"text": "先算一辆车。", "startFrame": 0, "durationFrames": 42}, {"text": "一辆均价三十九万的问界。", "startFrame": 41, "durationFrames": 64}]} totalDurationFrames={105} imageSrc={staticFile("images/赛力斯之殇/scene_2_1.png")} enterEffect="zoomIn" anchors={[]} />
            </Sequence>
            <Sequence from={105} durationInFrames={120}>
                <BWConceptCard content={[{"text": "第一刀技术费，", "startFrame": 0, "durationFrames": 33}, {"text": "咱也不知道技术在哪里，", "startFrame": 32, "durationFrames": 46}, {"text": "反正大约七八千。", "startFrame": 78, "durationFrames": 41}]} totalDurationFrames={120} imageSrc={staticFile("images/赛力斯之殇/scene_2_2.png")} conceptName={"技术费"} anchors={[]} />
            </Sequence>
            <Sequence from={225} durationInFrames={136}>
                <BWConceptCard content={[{"text": "第二刀渠道费，", "startFrame": 0, "durationFrames": 35}, {"text": "也就是华为帮忙卖车的广告费，", "startFrame": 34, "durationFrames": 69}, {"text": "大约三万二。", "startFrame": 103, "durationFrames": 33}]} totalDurationFrames={136} imageSrc={staticFile("images/赛力斯之殇/scene_2_3.png")} conceptName={"渠道费"} anchors={[]} />
            </Sequence>
            <Sequence from={361} durationInFrames={71}>
                <BWProgressRing content={[{"text": "这两笔加起来，", "startFrame": 0, "durationFrames": 30}, {"text": "就接近车价的一成。", "startFrame": 29, "durationFrames": 42}]} totalDurationFrames={71} blocks={[{"percent": 10, "label": "两笔费用占比", "subLabel": "接近一成", "ringColor": "#EF4444", "showFrom": 1}]} anchors={[]} />
            </Sequence>
            <Sequence from={432} durationInFrames={196}>
                <BWConceptCard content={[{"text": "可还有第三刀。", "startFrame": 0, "durationFrames": 35}, {"text": "智驾、座舱、三电", "startFrame": 34, "durationFrames": 60}, {"text": "只能向华为体系采购。", "startFrame": 94, "durationFrames": 58}, {"text": "它说多少钱就是多少钱。", "startFrame": 151, "durationFrames": 44}]} totalDurationFrames={196} imageSrc={staticFile("images/赛力斯之殇/scene_2_5.png")} conceptName={"第三刀"} />
            </Sequence>
            <Sequence from={628} durationInFrames={274}>
                <BWKpiHero content={[{"text": "把这些钱摊到每辆车上。", "startFrame": 0, "durationFrames": 53}, {"text": "公开数据粗算，", "startFrame": 52, "durationFrames": 42}, {"text": "2025年上半年，", "startFrame": 93, "durationFrames": 43}, {"text": "每卖出一辆问界，", "startFrame": 136, "durationFrames": 46}, {"text": "大约有十三四万要付给华为体系。", "startFrame": 182, "durationFrames": 92}]} totalDurationFrames={274} blocks={[{"value": 13.5, "decimalPlaces": 1, "suffix": "万", "label": "单车付给华为", "showFrom": 3, "useGrouping": false}]} countDuration={28} anchors={[]} />
            </Sequence>
            <Sequence from={902} durationInFrames={190}>
                <BWCognitiveShift content={[{"text": "听清楚。", "startFrame": 0, "durationFrames": 27}, {"text": "这不是赛力斯赚钱了再分利润。", "startFrame": 26, "durationFrames": 64}, {"text": "而是造车、卖车时，", "startFrame": 89, "durationFrames": 58}, {"text": "就要先付出去的成本。", "startFrame": 147, "durationFrames": 43}]} totalDurationFrames={190} notText={"赚钱再分利润"} butText={"卖车先付成本"} butSrc={staticFile("images/赛力斯之殇/scene_2_7.png")} notContentIndex={1} butContentIndex={2} />
            </Sequence>
            <Sequence from={1092} durationInFrames={112}>
                <BWBeatSequence content={[{"text": "卖一辆，付一笔", "startFrame": 0, "durationFrames": 47}, {"text": "车越火，这笔成本越高。", "startFrame": 46, "durationFrames": 65}]} totalDurationFrames={112} stages={[{ imageSrc: staticFile("images/赛力斯之殇/scene_2_8_img0.png"), enterEffect: "breathe", tone: "calm" }, { imageSrc: staticFile("images/赛力斯之殇/scene_2_8_img1.png"), enterEffect: "slideBottom", tone: "alert" }]} />
            </Sequence>
            <Sequence from={1204} durationInFrames={130}>
                <BWKpiHero content={[{"text": "四年下来，", "startFrame": 0, "durationFrames": 28}, {"text": "付给华为的采购，", "startFrame": 27, "durationFrames": 43}, {"text": "从几十亿涨到五百多亿。", "startFrame": 69, "durationFrames": 60}]} totalDurationFrames={130} blocks={[{"value": 50, "prefix": "约", "suffix": "亿", "label": "四年前", "showFrom": 2, "useGrouping": false}, {"value": 500, "prefix": "超", "suffix": "亿", "label": "现在", "showFrom": 2, "useGrouping": true}]} countDuration={30} anchors={[]} />
            </Sequence>
            <Sequence from={1334} durationInFrames={84}>
                <BWCognitiveShift content={[{"text": "这叫赋能吗？", "startFrame": 0, "durationFrames": 35}, {"text": "这叫规模化抽血。", "startFrame": 34, "durationFrames": 49}]} totalDurationFrames={84} notText={"赋能"} butText={"规模化抽血"} butSrc={staticFile("images/赛力斯之殇/scene_2_10.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/赛力斯之殇/scene_2/scene_2.mp3")} />
        </AbsoluteFill>
    );
};
