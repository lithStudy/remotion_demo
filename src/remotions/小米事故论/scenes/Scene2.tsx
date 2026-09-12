import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCognitiveShift, BWDataTable, BWKpiHero, BWMagnifyingGlass, BWQuoteCitation, BWSplitCompare, BWTextFocus } from "../../../components";

// 数据为实
const SCENE_DURATION = 68 + 236 + 671 + 98 + 251 + 126 + 243 + 234 + 260;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={68}>
                <BWTextFocus content={[{"text": "我们先说最敏感的：", "startFrame": 0, "durationFrames": 42}, {"text": "起火。", "startFrame": 41, "durationFrames": 27}]} totalDurationFrames={68} coreSentence={[{"text": "我们先说最敏感的。", "showFrom": 0, "endFrom": 0}, {"text": "起火。", "showFrom": 1, "endFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "起火", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={68} durationInFrames={236}>
                <BWKpiHero content={[{"text": "从2025年全年", "startFrame": 0, "durationFrames": 44}, {"text": "公开报道的燃烧事故，", "startFrame": 43, "durationFrames": 45}, {"text": "总共只有6起，", "startFrame": 88, "durationFrames": 36}, {"text": "按当时34万保有量估算，", "startFrame": 124, "durationFrames": 68}, {"text": "碰撞后燃烧比例，", "startFrame": 192, "durationFrames": 44}]} totalDurationFrames={236} blocks={[{"value": 6, "suffix": "起", "label": "燃烧事故", "showFrom": 2}, {"value": 34, "suffix": "万", "label": "保有量", "showFrom": 3}]} />
            </Sequence>
            <Sequence from={304} durationInFrames={671}>
                <BWDataTable content={[{"text": "大约是0.00117%。", "startFrame": 0, "durationFrames": 67}, {"text": "而新能源整体起火率，", "startFrame": 66, "durationFrames": 63}, {"text": "约为0.0018%。", "startFrame": 128, "durationFrames": 71}, {"text": "燃油车约为0.015%。", "startFrame": 199, "durationFrames": 85}, {"text": "看到了吗，", "startFrame": 284, "durationFrames": 24}, {"text": "你以为新能源比燃油车更容易烧起来，", "startFrame": 308, "durationFrames": 87}, {"text": "但其实新能源比燃油车着火事故少一半", "startFrame": 394, "durationFrames": 95}, {"text": " 你以为小米比其他电动车更容易烧起来，", "startFrame": 489, "durationFrames": 92}, {"text": "但其实小米相比整个行业着火事故更低。", "startFrame": 581, "durationFrames": 90}]} totalDurationFrames={671} title={"起火率对比"} columns={["类别", "比例"]} rows={[{"cells": ["小米燃烧比例", "0.00117%"], "showFrom": 0}, {"cells": ["新能源整体起火率", "0.0018%"], "showFrom": 1}, {"cells": ["燃油车", "0.015%"], "showFrom": 3}]} anchors={[]} />
            </Sequence>
            <Sequence from={975} durationInFrames={98}>
                <BWTextFocus content={[{"text": "是不是有点反直觉？", "startFrame": 0, "durationFrames": 42}, {"text": "你刷到很多，", "startFrame": 41, "durationFrames": 24}, {"text": "不等于概率很高。", "startFrame": 65, "durationFrames": 32}]} totalDurationFrames={98} coreSentence={[{"text": "你刷到很多，", "showFrom": 1}, {"text": "不等于概率很高。", "showFrom": 2}]} coreSentenceAnchors={[{"coreSentenceAnchor": "不等于", "color": "#EF4444"}, {"coreSentenceAnchor": "概率", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={1073} durationInFrames={251}>
                <BWCognitiveShift content={[{"text": "更关键的是，", "startFrame": 0, "durationFrames": 33}, {"text": "公开通报里的多数火情，", "startFrame": 32, "durationFrames": 54}, {"text": "不是静置自燃。", "startFrame": 86, "durationFrames": 35}, {"text": "都是严重碰撞后起火。", "startFrame": 120, "durationFrames": 51}, {"text": "外部火源引燃。", "startFrame": 170, "durationFrames": 39}, {"text": "或者其他复杂诱因。", "startFrame": 208, "durationFrames": 43}]} totalDurationFrames={251} notText={"静置自燃"} butText={"外部诱因"} butSrc={staticFile("images/小米事故论/scene_2_7.png")} notContentIndex={2} butContentIndex={3} anchors={[]} />
            </Sequence>
            <Sequence from={1324} durationInFrames={126}>
                <BWTextFocus content={[{"text": "目前也没有一例说明，", "startFrame": 0, "durationFrames": 52}, {"text": "小米存在系统缺陷性的自燃。", "startFrame": 51, "durationFrames": 75}]} totalDurationFrames={126} coreSentence={[{"text": "目前也没有一例说明，", "showFrom": 0}, {"text": "小米存在系统缺陷性的自燃。", "showFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "系统缺陷性", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={1450} durationInFrames={243}>
                <BWMagnifyingGlass content={[{"text": "再说事故率。", "startFrame": 0, "durationFrames": 33}, {"text": "很多人一看到事故视频，", "startFrame": 32, "durationFrames": 55}, {"text": "就下意识得出结论：", "startFrame": 87, "durationFrames": 44}, {"text": "绿化带战神。", "startFrame": 130, "durationFrames": 36}, {"text": "这是一个极具偏见色彩的标签。", "startFrame": 166, "durationFrames": 77}]} totalDurationFrames={243} anchors={[{"text": "绿化带战神", "showFrom": 3, "color": "#EF4444", "anim": "spring", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={1693} durationInFrames={234}>
                <BWSplitCompare content={[{"text": "实际上，事故率没有公开可查的数据，", "startFrame": 0, "durationFrames": 88}, {"text": "既没有交通部的交通事故率数据，", "startFrame": 87, "durationFrames": 72}, {"text": "也没有保险公司的出险率数据。", "startFrame": 159, "durationFrames": 75}]} totalDurationFrames={234} leftSrc={staticFile("images/小米事故论/scene_2_10_left.png")} rightSrc={staticFile("images/小米事故论/scene_2_10_right.png")} leftLabel={"交通部"} rightLabel={"保险公司"} leftShowFrom={1} rightShowFrom={2} />
            </Sequence>
            <Sequence from={1927} durationInFrames={260}>
                <BWQuoteCitation content={[{"text": "但是网上却有很多人张嘴就来：", "startFrame": 0, "durationFrames": 70}, {"text": "小米的事故率高到离谱。", "startFrame": 69, "durationFrames": 66}, {"text": "这就完全是造谣了。", "startFrame": 135, "durationFrames": 44}, {"text": "高在哪里？你们有任何数据支撑吗？", "startFrame": 179, "durationFrames": 81}]} totalDurationFrames={260} quoteSource={"网络传言"} quoteDisplayText={"小米的出现率高到离谱。"} showFrom={1} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/小米事故论/scene_2/scene_2.mp3")} />
        </AbsoluteFill>
    );
};
