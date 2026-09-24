import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCauseChain, BWKpiHero, BWMagnifyingGlass, BWPeerInduct, BWStatCompare, BWTextFocus } from "../../../components";

// 剖析：增收不增利
const SCENE_DURATION = 171 + 242 + 127 + 89 + 124 + 154;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={171}>
                <BWMagnifyingGlass content={[{"text": "先不说这成本对消费者来讲花得值不值。", "startFrame": 0, "durationFrames": 88}, {"text": "关键对赛力斯来说，", "startFrame": 87, "durationFrames": 44}, {"text": "是「增收不增利」。", "startFrame": 130, "durationFrames": 40}]} totalDurationFrames={171} anchors={[{"text": "增收不增利", "showFrom": 2, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={171} durationInFrames={242}>
                <BWStatCompare content={[{"text": "2025年营收一千六百五十亿，", "startFrame": 0, "durationFrames": 86}, {"text": "净利率却只有三点六。", "startFrame": 85, "durationFrames": 56}, {"text": "一千六百亿体量，", "startFrame": 140, "durationFrames": 43}, {"text": "利润却薄得像一张纸。", "startFrame": 183, "durationFrames": 58}]} totalDurationFrames={242} bars={[{"label": "营收（亿）", "value": 1650, "decimalPlaces": 0, "showFrom": 0}, {"label": "净利率（%）", "value": 3.6, "decimalPlaces": 1, "showFrom": 1}]} anchors={[]} />
            </Sequence>
            <Sequence from={413} durationInFrames={127}>
                <BWKpiHero content={[{"text": "到2026年上半年，", "startFrame": 0, "durationFrames": 47}, {"text": "更残酷。", "startFrame": 46, "durationFrames": 30}, {"text": "净亏损十七亿。", "startFrame": 76, "durationFrames": 51}]} totalDurationFrames={127} blocks={[{"value": 17, "suffix": "亿", "label": "净亏损", "showFrom": 2}]} anchors={[]} />
            </Sequence>
            <Sequence from={540} durationInFrames={89}>
                <BWTextFocus content={[{"text": "短短半年之间，", "startFrame": 0, "durationFrames": 39}, {"text": "就从赚钱变成流血。", "startFrame": 38, "durationFrames": 50}]} totalDurationFrames={89} coreSentence={[{"text": "短短半年之间，", "showFrom": 0, "endFrom": 0}, {"text": "就从赚钱变成流血。", "showFrom": 1, "endFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "流血", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={629} durationInFrames={124}>
                <BWPeerInduct content={[{"text": "车卖出去了。", "startFrame": 0, "durationFrames": 42}, {"text": "品牌热度有了。", "startFrame": 41, "durationFrames": 35}, {"text": "可账上，", "startFrame": 76, "durationFrames": 20}, {"text": "是亏的。", "startFrame": 96, "durationFrames": 28}]} totalDurationFrames={124} premises={[{ imageSrc: staticFile("images/赛力斯之殇/scene_3_5_img0.png"), enterEffect: "fadeIn" }, { imageSrc: staticFile("images/赛力斯之殇/scene_3_5_img1.png"), enterEffect: "slideLeft" }]} conclusion={{ imageSrc: staticFile("images/赛力斯之殇/scene_3_5.png"), enterEffect: "zoomIn", showFrom: 2, tone: "alert" }} />
            </Sequence>
            <Sequence from={753} durationInFrames={154}>
                <BWCauseChain content={[{"text": "你说，", "startFrame": 0, "durationFrames": 20}, {"text": "赛力斯的老板看着这种报表，", "startFrame": 19, "durationFrames": 55}, {"text": "心里什么滋味？", "startFrame": 74, "durationFrames": 26}, {"text": "是感恩吗？", "startFrame": 99, "durationFrames": 26}, {"text": "不，", "startFrame": 124, "durationFrames": 7}, {"text": "是恐惧。", "startFrame": 131, "durationFrames": 23}]} totalDurationFrames={154} layout={"horizontal"} nodes={[{ label: "惨淡报表", imageSrc: staticFile("images/赛力斯之殇/scene_3_6_img0.png"), showFrom: 1, enterEffect: "slideBottom" }, { label: "恐惧", imageSrc: staticFile("images/赛力斯之殇/scene_3_6_img1.png"), showFrom: 5, enterEffect: "breathe" }]} anchors={[{"text": "恐惧", "showFrom": 5, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/赛力斯之殇/scene_3/scene_3.mp3")} />
        </AbsoluteFill>
    );
};
