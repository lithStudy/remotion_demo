import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWMethodStack, BWTextFocus } from "../../../components";

// 召唤：如何避免锚定效应
const SCENE_DURATION = 132 + 142 + 144 + 119 + 216 + 110;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={132}>
                <BWCenterFocus content={[{"text": "要想不让你的判断被“锚”所劫持，", "startFrame": 0, "durationFrames": 74}, {"text": "你最好记住这三个核心心法", "startFrame": 73, "durationFrames": 59}]} totalDurationFrames={132} imageSrc={staticFile("images/认知偏见_锚定效应/scene_4_1.png")} enterEffect="fadeIn" anchors={[{"text": "独立判断", "showFrom": 3, "color": "#EF4444", "anim": "spring", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={132} durationInFrames={142}>
                <BWMethodStack content={[{"text": "1. 先问自己：", "startFrame": 0, "durationFrames": 41}, {"text": "不看标价/不听评价，", "startFrame": 40, "durationFrames": 55}, {"text": "我自己的判断是什么？", "startFrame": 94, "durationFrames": 47}]} totalDurationFrames={142} title={"独立判断"} imageSrc={staticFile("images/认知偏见_锚定效应/scene_4_2.png")} notes={[{"text": "不被第一印象左右", "showFrom": 1}, {"text": "避免先入为主", "showFrom": 2}]} anchors={[]} />
            </Sequence>
            <Sequence from={274} durationInFrames={144}>
                <BWMethodStack content={[{"text": "2. 多维参照：", "startFrame": 0, "durationFrames": 46}, {"text": "收集多个独立信息源，", "startFrame": 45, "durationFrames": 55}, {"text": "而非只看第一个。", "startFrame": 100, "durationFrames": 44}]} totalDurationFrames={144} title={"多维信息参照"} imageSrc={staticFile("images/认知偏见_锚定效应/scene_4_3.png")} notes={[{"text": "收集多个独立信息源", "showFrom": 1}, {"text": "而非只看第一个", "showFrom": 2}]} anchors={[]} />
            </Sequence>
            <Sequence from={418} durationInFrames={119}>
                <BWMethodStack content={[{"text": "3. 警惕先入为主：", "startFrame": 0, "durationFrames": 56}, {"text": "意识到\"第一印象\"的巨大影响力。", "startFrame": 55, "durationFrames": 63}]} totalDurationFrames={119} title={"警惕先入为主"} imageSrc={staticFile("images/认知偏见_锚定效应/scene_4_4.png")} notes={[{"text": "意识到“第一印象”的巨大影响力", "showFrom": 1}]} anchors={[]} />
            </Sequence>
            <Sequence from={537} durationInFrames={216}>
                <BWCenterFocus content={[{"text": "在这个到处都是“钩子”的世界里，", "startFrame": 0, "durationFrames": 68}, {"text": "如果你不主动设定自己的“锚”，", "startFrame": 67, "durationFrames": 62}, {"text": "你就只能在别人的鱼塘里当一条待宰的鱼。", "startFrame": 128, "durationFrames": 88}]} totalDurationFrames={216} imageSrc={staticFile("images/认知偏见_锚定效应/scene_4_5.png")} enterEffect="fadeIn" anchors={[{"text": "钩子", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "自己的锚", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={753} durationInFrames={110}>
                <BWTextFocus content={[{"text": "永远记住，", "startFrame": 0, "durationFrames": 23}, {"text": "你的价值由你定义，", "startFrame": 22, "durationFrames": 43}, {"text": "不由对方的“锚”定义。", "startFrame": 65, "durationFrames": 45}]} totalDurationFrames={110} coreSentence={["你的价值由你定义，不由对方的锚定义。"]} coreSentenceAnchors={[{"coreSentenceAnchor": "由你定义", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/认知偏见_锚定效应/scene_4/scene_4.mp3")} />
        </AbsoluteFill>
    );
};
