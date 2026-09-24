import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWBeatSequence, BWCognitiveShift, BWKpiHero, BWMethodStack, BWPanelGrid, BWProgressRing, BWStatCompare, BWTextFocus } from "../../../components";

// 一辆车抽走十几万
const SCENE_DURATION = 60 + 90 + 91 + 60 + 180 + 123 + 155 + 180 + 90 + 60;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={60}>
                <BWKpiHero content={[{"text": "先算一辆车。", "startFrame": 0, "durationFrames": 30}, {"text": "一辆均价三十九万的问界。", "startFrame": 30, "durationFrames": 30}]} totalDurationFrames={60} blocks={[{"value": 390000, "prefix": "均价", "suffix": "元", "label": "问界M9", "showFrom": 1, "useGrouping": true, "decimalPlaces": 0}]} countDuration={30} anchors={[]} />
            </Sequence>
            <Sequence from={60} durationInFrames={90}>
                <BWMethodStack content={[{"text": "第一刀技术费，", "startFrame": 0, "durationFrames": 30}, {"text": "咱也不知道技术在哪里，", "startFrame": 30, "durationFrames": 30}, {"text": "反正大约七八千。", "startFrame": 60, "durationFrames": 30}]} totalDurationFrames={90} title={"第一刀：技术费"} imageSrc={staticFile("一柄锋利的手术刀切入一辆汽车轮廓，切口处露出齿轮与金属零件，画面冷峻，刀锋泛着寒光")} notes={[{"text": "技术费，名不副实", "showFrom": 0}, {"text": "技术在哪？说不清", "showFrom": 1}, {"text": "每辆约七八千", "showFrom": 2}]} anchors={[]} />
            </Sequence>
            <Sequence from={150} durationInFrames={91}>
                <BWMethodStack content={[{"text": "第二刀渠道费，", "startFrame": 0, "durationFrames": 30}, {"text": "也就是华为帮忙卖车的广告费，", "startFrame": 30, "durationFrames": 31}, {"text": "大约三万二。", "startFrame": 61, "durationFrames": 30}]} totalDurationFrames={91} title={"渠道费"} imageSrc={staticFile("一辆崭新的问界汽车停在华为门店前，车身旁有销售人员在挥手介绍，背景是明亮的展厅灯光和品牌标识的氛围")} notes={[{"text": "华为渠道卖车，每辆抽走三万二", "showFrom": 1}, {"text": "这笔钱还没造车就要先付", "showFrom": 2}]} anchors={[]} />
            </Sequence>
            <Sequence from={241} durationInFrames={60}>
                <BWProgressRing content={[{"text": "这两笔加起来，", "startFrame": 0, "durationFrames": 30}, {"text": "就接近车价的一成。", "startFrame": 30, "durationFrames": 30}]} totalDurationFrames={60} percent={10} label={"渠道+技术费"} subLabel={"占车价约一成"} ringColor={"#EF4444"} anchors={[]} />
            </Sequence>
            <Sequence from={301} durationInFrames={180}>
                <BWPanelGrid content={[{"text": "可还有第三刀。", "startFrame": 0, "durationFrames": 30}, {"text": "智驾、", "startFrame": 30, "durationFrames": 30}, {"text": "座舱、", "startFrame": 60, "durationFrames": 30}, {"text": "三电，", "startFrame": 90, "durationFrames": 30}, {"text": "也要向华为体系采购。", "startFrame": 120, "durationFrames": 30}, {"text": "把这些钱摊到每辆车上。", "startFrame": 150, "durationFrames": 30}]} totalDurationFrames={180} panels={[{ src: staticFile("锋利刀刃切入画面的特写，暗色背景"), showFrom: 0, enterEffect: "zoomIn" }, { src: staticFile("智能驾驶芯片与电路板的科技感画面，蓝光色调"), showFrom: 1, enterEffect: "slideLeft" }, { src: staticFile("汽车座舱内部视角，中控屏亮起"), showFrom: 2, enterEffect: "fadeIn" }, { src: staticFile("电池与电机模组排列的特写，金属质感"), showFrom: 3, enterEffect: "slideBottom" }, { src: staticFile("华为店铺招牌下的汽车展厅，明亮灯光"), showFrom: 4, enterEffect: "fadeIn" }, { src: staticFile("成堆金币散落在车顶，钱币滑落"), showFrom: 5, enterEffect: "breathe" }]} anchors={[]} />
            </Sequence>
            <Sequence from={481} durationInFrames={123}>
                <BWKpiHero content={[{"text": "公开数据粗算，", "startFrame": 0, "durationFrames": 30}, {"text": "2025年上半年，", "startFrame": 30, "durationFrames": 30}, {"text": "每卖出一辆问界，", "startFrame": 60, "durationFrames": 30}, {"text": "大约有十三四万要付给华为体系。", "startFrame": 90, "durationFrames": 33}]} totalDurationFrames={123} blocks={[{"value": 13.5, "suffix": "万", "prefix": "约", "label": "每辆问界付给华为体系", "showFrom": 2, "decimalPlaces": 1, "useGrouping": false}]} countDuration={32} anchors={[]} />
            </Sequence>
            <Sequence from={604} durationInFrames={155}>
                <BWCognitiveShift content={[{"text": "听清楚。", "startFrame": 0, "durationFrames": 30}, {"text": "这不是赛力斯赚到手的利润被分走。", "startFrame": 30, "durationFrames": 35}, {"text": "这是造车、", "startFrame": 65, "durationFrames": 30}, {"text": "卖车时，", "startFrame": 95, "durationFrames": 30}, {"text": "先要付出去的成本。", "startFrame": 125, "durationFrames": 30}]} totalDurationFrames={155} notText={"利润被分走"} butText={"先付的成本"} butSrc={staticFile("流水线上正在组装汽车的机械臂与车架")} notContentIndex={1} butContentIndex={4} anchors={[]} />
            </Sequence>
            <Sequence from={759} durationInFrames={180}>
                <BWBeatSequence content={[{"text": "卖一辆，", "startFrame": 0, "durationFrames": 30}, {"text": "付一截。", "startFrame": 30, "durationFrames": 30}, {"text": "卖一万辆，", "startFrame": 60, "durationFrames": 30}, {"text": "付一万截。", "startFrame": 90, "durationFrames": 30}, {"text": "车越火，", "startFrame": 120, "durationFrames": 30}, {"text": "这笔成本越大。", "startFrame": 150, "durationFrames": 30}]} totalDurationFrames={180} stages={[{ imageSrc: staticFile("一条汽车生产线上一辆车被推走，旁白节奏感强的剪影式画面，黑色背景"), enterEffect: "slideLeft", tone: "calm", showFrom: 0 }, { imageSrc: staticFile("大量汽车排满画面，层层叠加形成堆积感，氛围压抑"), enterEffect: "zoomIn", tone: "alert", showFrom: 2 }, { imageSrc: staticFile("火苗在车阵上方蔓延，车越多火越旺，视觉压迫感强"), enterEffect: "slideBottom", tone: "alert", showFrom: 4 }]} anchors={[]} />
            </Sequence>
            <Sequence from={939} durationInFrames={90}>
                <BWStatCompare content={[{"text": "四年下来，", "startFrame": 0, "durationFrames": 30}, {"text": "付给华为的采购，", "startFrame": 30, "durationFrames": 30}, {"text": "从几十亿涨到五百多亿。", "startFrame": 60, "durationFrames": 30}]} totalDurationFrames={90} bars={[{"label": "初期", "value": 30, "showFrom": 0}, {"label": "四年后", "value": 500, "showFrom": 2}]} anchors={[{"text": "五百多亿", "showFrom": 2, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={1029} durationInFrames={60}>
                <BWTextFocus content={[{"text": "这叫赋能吗？", "startFrame": 0, "durationFrames": 30}, {"text": "这叫规模化抽血。", "startFrame": 30, "durationFrames": 30}]} totalDurationFrames={60} coreSentence={[{"text": "这叫赋能吗？", "showFrom": 0, "endFrom": 0}, {"text": "这叫规模化抽血。", "showFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "规模化抽血", "color": "#EF4444"}]} />
            </Sequence>

        </AbsoluteFill>
    );
};
