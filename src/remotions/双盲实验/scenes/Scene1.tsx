import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift, BWTextFocus } from "../../../components";

// “神药”的陷阱
const SCENE_DURATION = 152 + 124 + 207 + 185 + 112 + 95;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={152}>
                <BWCenterFocus content={[{"text": "明明昨天还咳得撕心裂肺，", "startFrame": 0, "durationFrames": 30}, {"text": "今天喝了那碗苦得要命的汤药，", "startFrame": 30, "durationFrames": 31}, {"text": "症状竟然真减轻了。", "startFrame": 61, "durationFrames": 30}, {"text": "于是我们赶紧发个朋友圈，", "startFrame": 91, "durationFrames": 30}, {"text": "感慨一句老祖宗的东西就是神！", "startFrame": 121, "durationFrames": 31}]} totalDurationFrames={152} imageSrc={staticFile("一个病人咳嗽的画面")} enterEffect="fadeIn" anchors={[{"text": "咳得撕心裂肺", "showFrom": 0, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}, {"text": "老祖宗就是神！", "showFrom": 4, "color": "#000000", "anim": "slideUp", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={152} durationInFrames={124}>
                <BWCenterFocus content={[{"text": "但很多时候，", "startFrame": 0, "durationFrames": 30}, {"text": "你可能是掉进了一个温柔的陷阱：", "startFrame": 30, "durationFrames": 33}, {"text": "我们习惯于把好转的功劳，", "startFrame": 63, "durationFrames": 30}, {"text": "全部归结于那碗刚刚喝下的水，", "startFrame": 93, "durationFrames": 31}]} totalDurationFrames={124} imageSrc={staticFile("温柔却危险的陷阱意象：柔软的丝绸般的网，轻轻包裹住一个人的脚踝，黑白极简风")} enterEffect="fadeIn" anchors={[{"text": "温柔的陷阱", "showFrom": 1, "color": "#EF4444", "anim": "highlight", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={276} durationInFrames={207}>
                <BWCognitiveShift content={[{"text": "却忽略了一个最扎心的事实——", "startFrame": 0, "durationFrames": 30}, {"text": "即便你这一天只是躺平、", "startFrame": 30, "durationFrames": 30}, {"text": "喝白开水，", "startFrame": 60, "durationFrames": 30}, {"text": "甚至什么都不做，", "startFrame": 90, "durationFrames": 30}, {"text": "你的身体本就会开启那套演化了数百万年的自我修复程序。", "startFrame": 120, "durationFrames": 57}]} totalDurationFrames={207} notText={"药效"} butText={"自我修复"} butSrc={staticFile("细胞自我修复的微观场景")} notContentIndex={0} butContentIndex={4} anchors={[]} />
            </Sequence>
            <Sequence from={483} durationInFrames={185}>
                <BWCognitiveShift content={[{"text": "我们普通人之所以经常被各种神药、", "startFrame": 0, "durationFrames": 35}, {"text": "偏方或者所谓的大师收割，", "startFrame": 35, "durationFrames": 30}, {"text": "真的不是因为我们不够聪明，", "startFrame": 65, "durationFrames": 30}, {"text": "而是因为我们的大脑天生就有一个底层Bug：", "startFrame": 95, "durationFrames": 46}, {"text": "极度渴望给结果找一个立竿见影的因果关系。", "startFrame": 141, "durationFrames": 44}]} totalDurationFrames={185} notText={"不够聪明"} butText={"底层Bug"} butSrc={staticFile("电路板上的故障代码")} notContentIndex={0} butContentIndex={3} anchors={[]} />
            </Sequence>
            <Sequence from={668} durationInFrames={112}>
                <BWCenterFocus content={[{"text": "算法正是利用了这种认知本能，", "startFrame": 0, "durationFrames": 31}, {"text": "每天在信息茧房里给我们投喂无数个我吃了这个药、", "startFrame": 31, "durationFrames": 51}, {"text": "身体变好了的孤例。", "startFrame": 82, "durationFrames": 30}]} totalDurationFrames={112} imageSrc={staticFile("大脑思考的抽象概念图")} enterEffect="fadeIn" anchors={[{"text": "认知本能", "showFrom": 0, "color": "#000000", "anim": "highlight", "audioEffect": "ping"}, {"text": "信息茧房", "showFrom": 1, "color": "#000000", "anim": "highlight", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={780} durationInFrames={95}>
                <BWTextFocus content={[{"text": "在这种单向的叙事围猎下，", "startFrame": 0, "durationFrames": 30}, {"text": "我们很难察觉，", "startFrame": 30, "durationFrames": 30}, {"text": "自己其实正处于一种智力上的盲区。", "startFrame": 60, "durationFrames": 35}]} totalDurationFrames={95} coreSentence={"我们正处于一种智力上的盲区"} coreSentenceAnchors={[{"coreSentenceAnchor": "智力上的盲区", "color": "#EF4444"}]} />
            </Sequence>

        </AbsoluteFill>
    );
};
