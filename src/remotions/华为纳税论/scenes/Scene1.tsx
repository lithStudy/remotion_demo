import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCaseBreakdown, BWCognitiveShift, BWConceptCard, BWKpiHero, BWMagnifyingGlass, BWQuoteCitation, BWTextFocus } from "../../../components";

// 引入·千亿纳税疑云
const SCENE_DURATION = 109 + 111 + 138 + 60 + 249 + 390 + 91;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={109}>
                <BWQuoteCitation content={[{"text": "有人说，", "startFrame": 0, "durationFrames": 20}, {"text": "华为不愧是国之栋梁，", "startFrame": 19, "durationFrames": 52}, {"text": "一年纳税千亿元。", "startFrame": 70, "durationFrames": 39}]} totalDurationFrames={109} quoteSource={"网传"} quoteDisplayText={"华为不愧是国之栋梁，一年纳税千亿元。"} anchors={[]} />
            </Sequence>
            <Sequence from={109} durationInFrames={111}>
                <BWMagnifyingGlass content={[{"text": "先别急着激动。", "startFrame": 0, "durationFrames": 34}, {"text": "我们看看这个所谓的“千亿”是从哪来。", "startFrame": 33, "durationFrames": 77}]} totalDurationFrames={111} anchors={[{"text": "千亿", "showFrom": 1, "color": "#EF4444", "anim": "popIn", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={220} durationInFrames={138}>
                <BWConceptCard content={[{"text": "最初来源，", "startFrame": 0, "durationFrames": 24}, {"text": "全国工商联发布，", "startFrame": 24, "durationFrames": 39}, {"text": "二零二一年民企五百强报告，", "startFrame": 62, "durationFrames": 76}]} totalDurationFrames={138} imageSrc={staticFile("images/华为纳税论/scene_1_3.png")} conceptName={"民企五百强报告"} />
            </Sequence>
            <Sequence from={358} durationInFrames={60}>
                <BWKpiHero content={[{"text": "具体说，", "startFrame": 0, "durationFrames": 19}, {"text": "是903亿。", "startFrame": 18, "durationFrames": 42}]} totalDurationFrames={60} blocks={[{"value": 903, "suffix": "亿", "label": "2021年纳税", "showFrom": 1, "useGrouping": false, "decimalPlaces": 0}]} />
            </Sequence>
            <Sequence from={418} durationInFrames={249}>
                <BWCognitiveShift content={[{"text": "首先说一下这个所谓的“全国工商联”，", "startFrame": 0, "durationFrames": 95}, {"text": "并不是什么国家机构，", "startFrame": 94, "durationFrames": 47}, {"text": "而是一个别名为“中国民间商会”的民间组织。", "startFrame": 141, "durationFrames": 107}]} totalDurationFrames={249} notText={"国家机构"} butText={"中国民间商会"} butSrc={staticFile("images/华为纳税论/scene_1_5.png")} notContentIndex={1} butContentIndex={2} anchors={[]} />
            </Sequence>
            <Sequence from={667} durationInFrames={390}>
                <BWCaseBreakdown content={[{"text": "一个民间组织给出的报告，", "startFrame": 0, "durationFrames": 55}, {"text": "权威性能有多高呢？", "startFrame": 54, "durationFrames": 52}, {"text": "你只需要知道他给出的所谓中国民营500强，", "startFrame": 105, "durationFrames": 106}, {"text": "甚至有很多世界500强都没有上榜，", "startFrame": 211, "durationFrames": 78}, {"text": "比如中国平安、", "startFrame": 289, "durationFrames": 41}, {"text": "联想集团、", "startFrame": 329, "durationFrames": 31}, {"text": "海尔集团等。", "startFrame": 360, "durationFrames": 30}]} totalDurationFrames={390} title={"毫无权威性"} imageSrc={staticFile("images/华为纳税论/scene_1_6.png")} phases={[{"phaseLabel": "报告现身", "showFrom": 0}, {"phaseLabel": "质疑权威", "showFrom": 1}, {"phaseLabel": "榜单失真", "showFrom": 3}, {"phaseLabel": "名企缺席", "showFrom": 4}]} />
            </Sequence>
            <Sequence from={1057} durationInFrames={91}>
                <BWTextFocus content={[{"text": "所以这个报告您就乐一乐就完了，", "startFrame": 0, "durationFrames": 63}, {"text": "别太当真。", "startFrame": 62, "durationFrames": 28}]} totalDurationFrames={91} coreSentence={[{"text": "所以这个报告您就乐一乐就完了，", "showFrom": 0, "endFrom": 1}, {"text": "别太当真。", "showFrom": 1, "endFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "别太当真", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/华为纳税论/scene_1/scene_1.mp3")} />
        </AbsoluteFill>
    );
};
