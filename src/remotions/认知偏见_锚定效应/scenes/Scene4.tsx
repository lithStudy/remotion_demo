import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWMethodStack, BWTextFocus } from "../../../components";

// 如何避免锚定效应
const SCENE_DURATION = 125 + 153 + 138 + 125 + 208 + 116;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={125}>
                <BWCenterFocus content={[{"text": "要想不让你的判断被“锚”所劫持，", "startFrame": 0, "durationFrames": 64}, {"text": "你最好记住这三个核心心法", "startFrame": 63, "durationFrames": 62}]} totalDurationFrames={125} imageSrc={staticFile("images/认知偏见_锚定效应/scene_4_1.png")} enterEffect="fadeIn" anchors={[{"text": "独立判断", "showFrom": 3, "color": "#EF4444", "anim": "spring", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={125} durationInFrames={153}>
                <BWMethodStack content={[{"text": "1. 先问自己：", "startFrame": 0, "durationFrames": 42}, {"text": "不看标价/不听评价，", "startFrame": 41, "durationFrames": 64}, {"text": "我自己的判断是什么？", "startFrame": 104, "durationFrames": 48}]} totalDurationFrames={153} title={"独立判断"} imageSrc={staticFile("images/认知偏见_锚定效应/scene_4_2.png")} notes={[{"text": "不被第一印象左右", "showFrom": 1}, {"text": "避免先入为主", "showFrom": 2}]} anchors={[]} />
            </Sequence>
            <Sequence from={278} durationInFrames={138}>
                <BWMethodStack content={[{"text": "2. 多维参照：", "startFrame": 0, "durationFrames": 47}, {"text": "收集多个独立信息源，", "startFrame": 46, "durationFrames": 50}, {"text": "而非只看第一个。", "startFrame": 96, "durationFrames": 42}]} totalDurationFrames={138} title={"多维信息参照"} imageSrc={staticFile("images/认知偏见_锚定效应/scene_4_3.png")} notes={[{"text": "收集多个独立信息源", "showFrom": 1}, {"text": "而非只看第一个", "showFrom": 2}]} anchors={[]} />
            </Sequence>
            <Sequence from={416} durationInFrames={125}>
                <BWMethodStack content={[{"text": "3. 警惕先入为主：", "startFrame": 0, "durationFrames": 62}, {"text": "意识到\"第一印象\"的巨大影响力。", "startFrame": 61, "durationFrames": 64}]} totalDurationFrames={125} title={"警惕先入为主"} imageSrc={staticFile("images/认知偏见_锚定效应/scene_4_4.png")} notes={[{"text": "意识到“第一印象”的巨大影响力", "showFrom": 1}]} anchors={[]} />
            </Sequence>
            <Sequence from={541} durationInFrames={208}>
                <BWCenterFocus content={[{"text": "在这个到处都是“钩子”的世界里，", "startFrame": 0, "durationFrames": 59}, {"text": "如果你不主动设定自己的“锚”，", "startFrame": 58, "durationFrames": 56}, {"text": "你就只能在别人的鱼塘里当一条待宰的鱼。", "startFrame": 114, "durationFrames": 93}]} totalDurationFrames={208} imageSrc={staticFile("images/认知偏见_锚定效应/scene_4_5.png")} enterEffect="fadeIn" anchors={[{"text": "钩子", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "自己的锚", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={749} durationInFrames={116}>
                <BWTextFocus content={[{"text": "永远记住，", "startFrame": 0, "durationFrames": 27}, {"text": "你的价值由你定义，", "startFrame": 26, "durationFrames": 45}, {"text": "不由对方的“锚”定义。", "startFrame": 70, "durationFrames": 45}]} totalDurationFrames={116} coreSentence={["你的价值由你定义，不由对方的锚定义。"]} coreSentenceAnchors={[{"coreSentenceAnchor": "由你定义", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/认知偏见_锚定效应/scene_4/scene_4.mp3")} />
        </AbsoluteFill>
    );
};
