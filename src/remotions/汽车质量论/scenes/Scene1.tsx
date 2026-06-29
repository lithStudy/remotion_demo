import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWKpiHero, BWPeerInduct, BWTextFocus } from "../../../components";

// 引入：纽北赛道照妖镜
const SCENE_DURATION = 143 + 177 + 200 + 285 + 169 + 228 + 169;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={143}>
                <BWTextFocus content={[{"text": "天天喊遥遥领先的车，", "startFrame": 0, "durationFrames": 51}, {"text": "为什么从来不敢把车，", "startFrame": 50, "durationFrames": 47}, {"text": "开上公开的考场？", "startFrame": 97, "durationFrames": 46}]} totalDurationFrames={143} coreSentence={[{"text": "天天喊遥遥领先的车，", "showFrom": 0}, {"text": "为什么从来不敢把车，", "showFrom": 1}, {"text": "开上公开的考场？", "showFrom": 1, "endFrom": 2}]} coreSentenceAnchors={[{"coreSentenceAnchor": "遥遥领先", "color": "#EF4444"}, {"coreSentenceAnchor": "公开的考场", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={143} durationInFrames={177}>
                <BWKpiHero content={[{"text": "先说纽北赛。", "startFrame": 0, "durationFrames": 34}, {"text": "纽北北环，", "startFrame": 33, "durationFrames": 34}, {"text": "全长20.8公里，", "startFrame": 67, "durationFrames": 45}, {"text": "83个弯道，", "startFrame": 112, "durationFrames": 32}, {"text": "落差300米。", "startFrame": 144, "durationFrames": 33}]} totalDurationFrames={177} blocks={[{"value": 20.8, "decimalPlaces": 1, "suffix": "公里", "label": "全长", "showFrom": 2}, {"value": 83, "suffix": "个", "label": "弯道", "showFrom": 3}, {"value": 300, "suffix": "米", "label": "落差", "showFrom": 4}]} anchors={[]} />
            </Sequence>
            <Sequence from={320} durationInFrames={200}>
                <BWCenterFocus content={[{"text": "全球车企把这里当照妖镜。", "startFrame": 0, "durationFrames": 71}, {"text": "想要跑出好成绩，操控、性能、调教，缺一不可。", "startFrame": 70, "durationFrames": 129}]} totalDurationFrames={200} imageSrc={staticFile("images/汽车质量论/scene_1_3.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={520} durationInFrames={285}>
                <BWKpiHero content={[{"text": "小米SU7 Ultra量产版，", "startFrame": 0, "durationFrames": 59}, {"text": "7分4秒九五七。", "startFrame": 58, "durationFrames": 48}, {"text": "2025年4月纽北官方认证，", "startFrame": 106, "durationFrames": 70}, {"text": "刷新纪录，", "startFrame": 176, "durationFrames": 31}, {"text": "成为新的纽北最速量产电动车。", "startFrame": 207, "durationFrames": 77}]} totalDurationFrames={285} blocks={[{"value": 7, "label": "分", "showFrom": 1}, {"value": 4.957, "label": "秒", "decimalPlaces": 3, "showFrom": 1}, {"value": 1, "prefix": "全球 ", "suffix": "名", "label": "量产电动车", "showFrom": 4}]} anchors={[]} />
            </Sequence>
            <Sequence from={805} durationInFrames={169}>
                <BWKpiHero content={[{"text": "原型车同场更是刷出6分22秒091，", "startFrame": 0, "durationFrames": 106}, {"text": "纽北历史总榜全球前三。", "startFrame": 105, "durationFrames": 64}]} totalDurationFrames={169} blocks={[{"value": 6, "label": "分", "showFrom": 0}, {"value": 22.091, "label": "秒", "showFrom": 0}, {"value": 3, "prefix": "全球 ", "suffix": "名", "label": "纽北历史总榜", "showFrom": 1}]} anchors={[]} />
            </Sequence>
            <Sequence from={974} durationInFrames={228}>
                <BWPeerInduct content={[{"text": "这不是营销数字。", "startFrame": 0, "durationFrames": 42}, {"text": "公证员在场，", "startFrame": 41, "durationFrames": 36}, {"text": "德国技术监督协会检测，", "startFrame": 77, "durationFrames": 61}, {"text": "纽北官网公示，", "startFrame": 137, "durationFrames": 38}, {"text": "完全独立的三方认证。", "startFrame": 174, "durationFrames": 54}]} totalDurationFrames={228} premises={[{ imageSrc: staticFile("images/汽车质量论/scene_1_6_img0.png"), enterEffect: "fadeIn", showFrom: 1 }, { imageSrc: staticFile("images/汽车质量论/scene_1_6_img1.png"), enterEffect: "slideBottom", showFrom: 2 }, { imageSrc: staticFile("images/汽车质量论/scene_1_6_img2.png"), enterEffect: "slideBottom", showFrom: 3 }]} conclusion={{ imageSrc: staticFile("images/汽车质量论/scene_1_6.png"), enterEffect: "zoomIn", showFrom: 4, tone: "alert" }} anchors={[]} />
            </Sequence>
            <Sequence from={1202} durationInFrames={169}>
                <BWTextFocus content={[{"text": "界车既然遥遥领先，", "startFrame": 0, "durationFrames": 42}, {"text": "为什么不来跑一跑？", "startFrame": 41, "durationFrames": 35}, {"text": "让大家见识见识，", "startFrame": 76, "durationFrames": 39}, {"text": "什么叫好车的机械素质？", "startFrame": 114, "durationFrames": 55}]} totalDurationFrames={169} coreSentence={[{"text": "界车既然遥遥领先，为什么不来跑一跑？", "showFrom": 0}, {"text": "让大家见识见识，", "showFrom": 2}, {"text": "什么叫好车的机械素质？", "showFrom": 3}]} coreSentenceAnchors={[{"coreSentenceAnchor": "遥遥领先", "color": "#EF4444"}, {"coreSentenceAnchor": "机械素质", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/汽车质量论/scene_1/scene_1.mp3")} />
        </AbsoluteFill>
    );
};
