import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCognitiveShift, BWDataTable, BWKpiHero, BWMagnifyingGlass, BWQuoteCitation, BWSplitCompare, BWTextFocus } from "../../../components";

// 数据为实
const SCENE_DURATION = 68 + 249 + 679 + 113 + 257 + 123 + 238 + 223 + 248;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={68}>
                <BWTextFocus content={[{"text": "我们先说最敏感的：", "startFrame": 0, "durationFrames": 41}, {"text": "起火。", "startFrame": 40, "durationFrames": 28}]} totalDurationFrames={68} coreSentence={[{"text": "我们先说最敏感的。", "showFrom": 0, "endFrom": 0}, {"text": "起火。", "showFrom": 1, "endFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "起火", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={68} durationInFrames={249}>
                <BWKpiHero content={[{"text": "从2025年全年", "startFrame": 0, "durationFrames": 46}, {"text": "公开报道的燃烧事故，", "startFrame": 45, "durationFrames": 47}, {"text": "总共只有6起，", "startFrame": 92, "durationFrames": 42}, {"text": "按当时34万保有量估算，", "startFrame": 134, "durationFrames": 72}, {"text": "碰撞后燃烧比例，", "startFrame": 206, "durationFrames": 43}]} totalDurationFrames={249} blocks={[{"value": 6, "suffix": "起", "label": "燃烧事故", "showFrom": 2}, {"value": 34, "suffix": "万", "label": "保有量", "showFrom": 3}]} />
            </Sequence>
            <Sequence from={317} durationInFrames={679}>
                <BWDataTable content={[{"text": "大约是0.00117%。", "startFrame": 0, "durationFrames": 72}, {"text": "而新能源整体起火率，", "startFrame": 71, "durationFrames": 55}, {"text": "约为0.0018%。", "startFrame": 126, "durationFrames": 66}, {"text": "燃油车约为0.015%。", "startFrame": 191, "durationFrames": 90}, {"text": "看到了吗，", "startFrame": 281, "durationFrames": 24}, {"text": "你以为新能源比燃油车更容易烧起来，", "startFrame": 305, "durationFrames": 88}, {"text": "但其实新能源比燃油车着火事故少一半", "startFrame": 392, "durationFrames": 88}, {"text": " 你以为小米比其他电动车更容易烧起来，", "startFrame": 480, "durationFrames": 96}, {"text": "但其实小米相比整个行业着火事故更低。", "startFrame": 576, "durationFrames": 103}]} totalDurationFrames={679} title={"起火率对比"} columns={["类别", "比例"]} rows={[{"cells": ["小米燃烧比例", "0.00117%"], "showFrom": 0}, {"cells": ["新能源整体起火率", "0.0018%"], "showFrom": 1}, {"cells": ["燃油车", "0.015%"], "showFrom": 3}]} anchors={[]} />
            </Sequence>
            <Sequence from={996} durationInFrames={113}>
                <BWTextFocus content={[{"text": "是不是有点反直觉？", "startFrame": 0, "durationFrames": 41}, {"text": "你刷到很多，", "startFrame": 40, "durationFrames": 36}, {"text": "不等于概率很高。", "startFrame": 76, "durationFrames": 37}]} totalDurationFrames={113} coreSentence={[{"text": "你刷到很多，", "showFrom": 1}, {"text": "不等于概率很高。", "showFrom": 2}]} coreSentenceAnchors={[{"coreSentenceAnchor": "不等于", "color": "#EF4444"}, {"coreSentenceAnchor": "概率", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={1109} durationInFrames={257}>
                <BWCognitiveShift content={[{"text": "更关键的是，", "startFrame": 0, "durationFrames": 32}, {"text": "公开通报里的多数火情，", "startFrame": 31, "durationFrames": 56}, {"text": "不是静置自燃。", "startFrame": 87, "durationFrames": 36}, {"text": "都是严重碰撞后起火。", "startFrame": 122, "durationFrames": 55}, {"text": "外部火源引燃。", "startFrame": 177, "durationFrames": 35}, {"text": "或者其他复杂诱因。", "startFrame": 212, "durationFrames": 44}]} totalDurationFrames={257} notText={"静置自燃"} butText={"外部诱因"} butSrc={staticFile("images/小米事故论/scene_2_7.png")} notContentIndex={2} butContentIndex={3} anchors={[]} />
            </Sequence>
            <Sequence from={1366} durationInFrames={123}>
                <BWTextFocus content={[{"text": "目前也没有一例说明，", "startFrame": 0, "durationFrames": 46}, {"text": "小米存在系统缺陷性的自燃。", "startFrame": 45, "durationFrames": 78}]} totalDurationFrames={123} coreSentence={[{"text": "目前也没有一例说明，", "showFrom": 0}, {"text": "小米存在系统缺陷性的自燃。", "showFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "系统缺陷性", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={1489} durationInFrames={238}>
                <BWMagnifyingGlass content={[{"text": "再说事故率。", "startFrame": 0, "durationFrames": 33}, {"text": "很多人一看到事故视频，", "startFrame": 32, "durationFrames": 48}, {"text": "就下意识得出结论：", "startFrame": 80, "durationFrames": 42}, {"text": "绿化带战神。", "startFrame": 122, "durationFrames": 42}, {"text": "这是一个极具偏见色彩的标签。", "startFrame": 163, "durationFrames": 75}]} totalDurationFrames={238} anchors={[{"text": "绿化带战神", "showFrom": 3, "color": "#EF4444", "anim": "spring", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={1727} durationInFrames={223}>
                <BWSplitCompare content={[{"text": "实际上，事故率没有公开可查的数据，", "startFrame": 0, "durationFrames": 89}, {"text": "既没有交通部的交通事故率数据，", "startFrame": 88, "durationFrames": 67}, {"text": "也没有保险公司的出险率数据。", "startFrame": 154, "durationFrames": 68}]} totalDurationFrames={223} leftSrc={staticFile("images/小米事故论/scene_2_10_left.png")} rightSrc={staticFile("images/小米事故论/scene_2_10_right.png")} leftLabel={"交通部"} rightLabel={"保险公司"} leftShowFrom={1} rightShowFrom={2} />
            </Sequence>
            <Sequence from={1950} durationInFrames={248}>
                <BWQuoteCitation content={[{"text": "但是网上却有很多人张嘴就来：", "startFrame": 0, "durationFrames": 66}, {"text": "小米的事故率高到离谱。", "startFrame": 65, "durationFrames": 58}, {"text": "这就完全是造谣了。", "startFrame": 122, "durationFrames": 44}, {"text": "高在哪里？你们有任何数据支撑吗？", "startFrame": 166, "durationFrames": 82}]} totalDurationFrames={248} quoteSource={"网络传言"} quoteDisplayText={"小米的出现率高到离谱。"} showFrom={1} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/小米事故论/scene_2/scene_2.mp3")} />
        </AbsoluteFill>
    );
};
