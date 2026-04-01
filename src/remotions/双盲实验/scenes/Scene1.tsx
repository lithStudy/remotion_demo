import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift, BWTextFocus } from "../../../components";

// “神药”的陷阱
const SCENE_DURATION = 296 + 246 + 303 + 377 + 228 + 177;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={296}>
                <BWCenterFocus content={[{"text": "明明昨天还咳得撕心裂肺，", "startFrame": 0, "durationFrames": 52}, {"text": "今天喝了那碗苦得要命的汤药，", "startFrame": 51, "durationFrames": 63}, {"text": "症状竟然真减轻了。", "startFrame": 113, "durationFrames": 59}, {"text": "于是我们赶紧发个朋友圈，", "startFrame": 172, "durationFrames": 45}, {"text": "感慨一句老祖宗的东西就是神！", "startFrame": 217, "durationFrames": 79}]} totalDurationFrames={296} imageSrc={staticFile("images/双盲实验/scene_1_1.png")} enterEffect="fadeIn" anchors={[{"text": "咳得撕心裂肺", "showFrom": 0, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}, {"text": "老祖宗就是神！", "showFrom": 4, "color": "#000000", "anim": "slideUp", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={296} durationInFrames={246}>
                <BWCenterFocus content={[{"text": "但很多时候，", "startFrame": 0, "durationFrames": 39}, {"text": "你可能是掉进了一个温柔的陷阱：", "startFrame": 38, "durationFrames": 65}, {"text": "我们习惯于把好转的功劳，", "startFrame": 102, "durationFrames": 70}, {"text": "全部归结于那碗刚刚喝下的水，", "startFrame": 172, "durationFrames": 74}]} totalDurationFrames={246} imageSrc={staticFile("images/双盲实验/scene_1_2.png")} enterEffect="fadeIn" anchors={[{"text": "温柔的陷阱", "showFrom": 1, "color": "#EF4444", "anim": "highlight", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={542} durationInFrames={303}>
                <BWCognitiveShift content={[{"text": "却忽略了一个最扎心的事实——", "startFrame": 0, "durationFrames": 67}, {"text": "即便你这一天只是躺平、", "startFrame": 66, "durationFrames": 50}, {"text": "喝白开水，", "startFrame": 115, "durationFrames": 26}, {"text": "甚至什么都不做，", "startFrame": 140, "durationFrames": 41}, {"text": "你的身体本就会开启那套演化了数百万年的自我修复程序。", "startFrame": 181, "durationFrames": 122}]} totalDurationFrames={303} notText={"药效"} butText={"自我修复"} butSrc={staticFile("images/双盲实验/scene_1_3.png")} notContentIndex={0} butContentIndex={4} anchors={[]} />
            </Sequence>
            <Sequence from={845} durationInFrames={377}>
                <BWCognitiveShift content={[{"text": "我们普通人之所以经常被各种神药、", "startFrame": 0, "durationFrames": 77}, {"text": "偏方或者所谓的大师收割，", "startFrame": 76, "durationFrames": 67}, {"text": "真的不是因为我们不够聪明，", "startFrame": 142, "durationFrames": 56}, {"text": "而是因为我们的大脑天生就有一个底层Bug：", "startFrame": 198, "durationFrames": 88}, {"text": "极度渴望给结果找一个立竿见影的因果关系。", "startFrame": 285, "durationFrames": 91}]} totalDurationFrames={377} notText={"不够聪明"} butText={"底层Bug"} butSrc={staticFile("images/双盲实验/scene_1_4.png")} notContentIndex={0} butContentIndex={3} anchors={[]} />
            </Sequence>
            <Sequence from={1222} durationInFrames={228}>
                <BWCenterFocus content={[{"text": "算法正是利用了这种认知本能，", "startFrame": 0, "durationFrames": 69}, {"text": "每天在信息茧房里给我们投喂无数个我吃了这个药、", "startFrame": 68, "durationFrames": 110}, {"text": "身体变好了的孤例。", "startFrame": 177, "durationFrames": 51}]} totalDurationFrames={228} imageSrc={staticFile("images/双盲实验/scene_1_5.png")} enterEffect="fadeIn" anchors={[{"text": "认知本能", "showFrom": 0, "color": "#000000", "anim": "highlight", "audioEffect": "ping"}, {"text": "信息茧房", "showFrom": 1, "color": "#000000", "anim": "highlight", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={1450} durationInFrames={177}>
                <BWTextFocus content={[{"text": "在这种单向的叙事围猎下，", "startFrame": 0, "durationFrames": 58}, {"text": "我们很难察觉，", "startFrame": 57, "durationFrames": 41}, {"text": "自己其实正处于一种智力上的盲区。", "startFrame": 98, "durationFrames": 79}]} totalDurationFrames={177} coreSentence={"我们正处于一种智力上的盲区"} coreSentenceAnchors={[{"coreSentenceAnchor": "智力上的盲区", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/双盲实验/scene_1/scene_1.mp3")} />
        </AbsoluteFill>
    );
};
