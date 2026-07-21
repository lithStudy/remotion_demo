import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWKpiHero, BWPeerInduct, BWTextFocus } from "../../../components";

// 引入：纽北赛道照妖镜
const SCENE_DURATION = 127 + 172 + 185 + 308 + 182 + 228 + 176;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={127}>
                <BWTextFocus content={[{"text": "天天喊遥遥领先的车，", "startFrame": 0, "durationFrames": 47}, {"text": "为什么从来不敢把车，", "startFrame": 46, "durationFrames": 44}, {"text": "开上公开的考场？", "startFrame": 90, "durationFrames": 37}]} totalDurationFrames={127} coreSentence={[{"text": "天天喊遥遥领先的车，", "showFrom": 0}, {"text": "为什么从来不敢把车，", "showFrom": 1}, {"text": "开上公开的考场？", "showFrom": 1, "endFrom": 2}]} coreSentenceAnchors={[{"coreSentenceAnchor": "遥遥领先", "color": "#EF4444"}, {"coreSentenceAnchor": "公开的考场", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={127} durationInFrames={172}>
                <BWKpiHero content={[{"text": "先说纽北赛。", "startFrame": 0, "durationFrames": 33}, {"text": "纽北北环，", "startFrame": 32, "durationFrames": 29}, {"text": "全长20.8公里，", "startFrame": 61, "durationFrames": 44}, {"text": "83个弯道，", "startFrame": 104, "durationFrames": 33}, {"text": "落差300米。", "startFrame": 137, "durationFrames": 35}]} totalDurationFrames={172} blocks={[{"value": 20.8, "decimalPlaces": 1, "suffix": "公里", "label": "全长", "showFrom": 2}, {"value": 83, "suffix": "个", "label": "弯道", "showFrom": 3}, {"value": 300, "suffix": "米", "label": "落差", "showFrom": 4}]} anchors={[]} />
            </Sequence>
            <Sequence from={299} durationInFrames={185}>
                <BWCenterFocus content={[{"text": "全球车企把这里当照妖镜。", "startFrame": 0, "durationFrames": 68}, {"text": "想要跑出好成绩，操控、性能、调教，缺一不可。", "startFrame": 67, "durationFrames": 117}]} totalDurationFrames={185} imageSrc={staticFile("images/汽车质量论/scene_1_3.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={484} durationInFrames={308}>
                <BWKpiHero content={[{"text": "小米SU7 Ultra量产版，", "startFrame": 0, "durationFrames": 68}, {"text": "7分4秒九五七。", "startFrame": 67, "durationFrames": 56}, {"text": "2025年4月纽北官方认证，", "startFrame": 123, "durationFrames": 78}, {"text": "刷新纪录，", "startFrame": 200, "durationFrames": 28}, {"text": "成为新的纽北最速量产电动车。", "startFrame": 228, "durationFrames": 80}]} totalDurationFrames={308} blocks={[{"value": 7, "label": "分", "showFrom": 1}, {"value": 4.957, "label": "秒", "decimalPlaces": 3, "showFrom": 1}, {"value": 1, "prefix": "全球 ", "suffix": "名", "label": "量产电动车", "showFrom": 4}]} anchors={[]} />
            </Sequence>
            <Sequence from={792} durationInFrames={182}>
                <BWKpiHero content={[{"text": "原型车同场更是刷出6分22秒091，", "startFrame": 0, "durationFrames": 118}, {"text": "纽北历史总榜全球前三。", "startFrame": 117, "durationFrames": 64}]} totalDurationFrames={182} blocks={[{"value": 6, "label": "分", "showFrom": 0}, {"value": 22.091, "label": "秒", "showFrom": 0}, {"value": 3, "prefix": "全球 ", "suffix": "名", "label": "纽北历史总榜", "showFrom": 1}]} anchors={[]} />
            </Sequence>
            <Sequence from={974} durationInFrames={228}>
                <BWPeerInduct content={[{"text": "这不是营销数字。", "startFrame": 0, "durationFrames": 40}, {"text": "公证员在场，", "startFrame": 39, "durationFrames": 39}, {"text": "德国技术监督协会检测，", "startFrame": 77, "durationFrames": 62}, {"text": "纽北官网公示，", "startFrame": 138, "durationFrames": 39}, {"text": "完全独立的三方认证。", "startFrame": 176, "durationFrames": 52}]} totalDurationFrames={228} premises={[{ imageSrc: staticFile("images/汽车质量论/scene_1_6_img0.png"), enterEffect: "fadeIn", showFrom: 1 }, { imageSrc: staticFile("images/汽车质量论/scene_1_6_img1.png"), enterEffect: "slideBottom", showFrom: 2 }, { imageSrc: staticFile("images/汽车质量论/scene_1_6_img2.png"), enterEffect: "slideBottom", showFrom: 3 }]} conclusion={{ imageSrc: staticFile("images/汽车质量论/scene_1_6.png"), enterEffect: "zoomIn", showFrom: 4, tone: "alert" }} anchors={[]} />
            </Sequence>
            <Sequence from={1202} durationInFrames={176}>
                <BWTextFocus content={[{"text": "界车既然遥遥领先，", "startFrame": 0, "durationFrames": 46}, {"text": "为什么不来跑一跑？", "startFrame": 45, "durationFrames": 36}, {"text": "让大家见识见识，", "startFrame": 81, "durationFrames": 40}, {"text": "什么叫好车的机械素质？", "startFrame": 121, "durationFrames": 55}]} totalDurationFrames={176} coreSentence={[{"text": "界车既然遥遥领先，为什么不来跑一跑？", "showFrom": 0}, {"text": "让大家见识见识，", "showFrom": 2}, {"text": "什么叫好车的机械素质？", "showFrom": 3}]} coreSentenceAnchors={[{"coreSentenceAnchor": "遥遥领先", "color": "#EF4444"}, {"coreSentenceAnchor": "机械素质", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/汽车质量论/scene_1/scene_1.mp3")} />
        </AbsoluteFill>
    );
};
