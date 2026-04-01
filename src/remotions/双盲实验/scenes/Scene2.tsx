import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWConceptCard, BWDosAndDonts } from "../../../components";

// 对照组的重要性
const SCENE_DURATION = 178 + 196 + 151 + 234 + 152 + 153 + 234 + 238 + 154;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={178}>
                <BWCenterFocus content={[{"text": "在科学方法论上，", "startFrame": 0, "durationFrames": 38}, {"text": "要拆解这种迷思，", "startFrame": 37, "durationFrames": 45}, {"text": "其实只需要一个硬核概念，", "startFrame": 81, "durationFrames": 70}, {"text": "叫作对照组。", "startFrame": 151, "durationFrames": 27}]} totalDurationFrames={178} imageSrc={staticFile("images/双盲实验/scene_2_1.png")} enterEffect="breathe" anchors={[]} />
            </Sequence>
            <Sequence from={178} durationInFrames={196}>
                <BWDosAndDonts content={[{"text": "简单来说，", "startFrame": 0, "durationFrames": 26}, {"text": "如果没有对照组，", "startFrame": 25, "durationFrames": 35}, {"text": "你永远无法证明是你的干预有效，", "startFrame": 60, "durationFrames": 66}, {"text": "还是因为你命大或者身体好。", "startFrame": 125, "durationFrames": 70}]} totalDurationFrames={196} leftSrc={staticFile("images/双盲实验/scene_2_2_left.png")} rightSrc={staticFile("images/双盲实验/scene_2_2_right.png")} dontLabel={"干预有效"} doLabel={"命足够大"} />
            </Sequence>
            <Sequence from={374} durationInFrames={151}>
                <BWConceptCard content={[{"text": "在心理学和传播学里，", "startFrame": 0, "durationFrames": 44}, {"text": "这通常涉及一个著名的心理暗示，", "startFrame": 43, "durationFrames": 59}, {"text": "叫作安慰剂效应。", "startFrame": 102, "durationFrames": 48}]} totalDurationFrames={151} imageSrc={staticFile("images/双盲实验/scene_2_3.png")} conceptName={"安慰剂效应"} anchors={[]} />
            </Sequence>
            <Sequence from={525} durationInFrames={234}>
                <BWCenterFocus content={[{"text": "就像小时候妈妈在伤口上吹的那口气，", "startFrame": 0, "durationFrames": 74}, {"text": "气本身不治病，", "startFrame": 73, "durationFrames": 36}, {"text": "但你的大脑觉得它治病，", "startFrame": 109, "durationFrames": 50}, {"text": "于是分泌了内啡肽帮你止痛。", "startFrame": 158, "durationFrames": 76}]} totalDurationFrames={234} imageSrc={staticFile("images/双盲实验/scene_2_4.png")} enterEffect="fadeIn" anchors={[{"text": "安慰剂效应", "showFrom": 2, "color": "#000000", "anim": "spring", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={759} durationInFrames={152}>
                <BWConceptCard content={[{"text": "为了彻底排除这种干扰，", "startFrame": 0, "durationFrames": 52}, {"text": "科学家发明了一种叫作双盲实验的武器。", "startFrame": 51, "durationFrames": 101}]} totalDurationFrames={152} imageSrc={staticFile("images/双盲实验/scene_2_5.png")} conceptName={"双盲实验"} anchors={[]} />
            </Sequence>
            <Sequence from={911} durationInFrames={153}>
                <BWCenterFocus content={[{"text": "意思就是，", "startFrame": 0, "durationFrames": 26}, {"text": "实验的人和被试的人，", "startFrame": 25, "durationFrames": 51}, {"text": "谁都不知道手里拿的是真药还是糖片。", "startFrame": 75, "durationFrames": 78}]} totalDurationFrames={153} />
            </Sequence>
            <Sequence from={1064} durationInFrames={234}>
                <BWCenterFocus content={[{"text": "为什么要这么麻烦？", "startFrame": 0, "durationFrames": 47}, {"text": "因为只要医生一个眼神、", "startFrame": 46, "durationFrames": 45}, {"text": "一个暗示，", "startFrame": 91, "durationFrames": 26}, {"text": "或者病人一个先入为主的念头，", "startFrame": 116, "durationFrames": 67}, {"text": "就能干扰实验结果。", "startFrame": 183, "durationFrames": 51}]} totalDurationFrames={234} imageSrc={staticFile("images/双盲实验/scene_2_7.png")} enterEffect="fadeIn" anchors={[{"text": "安慰剂效应", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={1298} durationInFrames={238}>
                <BWCenterFocus content={[{"text": "只有当真药组的效果，", "startFrame": 0, "durationFrames": 46}, {"text": "显著好于那个什么都不含的对照组时，", "startFrame": 45, "durationFrames": 84}, {"text": "我们才能挺直腰板说，", "startFrame": 129, "durationFrames": 51}, {"text": "这个药是真的有效。", "startFrame": 180, "durationFrames": 58}]} totalDurationFrames={238} imageSrc={staticFile("images/双盲实验/scene_2_8.png")} enterEffect="fadeIn" anchors={[{"text": "用药组好于对照组", "showFrom": 0, "color": null, "anim": "spring", "audioEffect": "impact_thud"}, {"text": "真有效", "showFrom": 2, "color": "#EF4444", "anim": "highlight", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={1536} durationInFrames={154}>
                <BWCenterFocus content={[{"text": "如果没有这个逻辑闭环，", "startFrame": 0, "durationFrames": 45}, {"text": "所有的康复都只是一场概率论里的幸存者偏差。", "startFrame": 44, "durationFrames": 109}]} totalDurationFrames={154} imageSrc={staticFile("images/双盲实验/scene_2_9.png")} enterEffect="fadeIn" anchors={[{"text": "幸存者偏差", "showFrom": 1, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/双盲实验/scene_2/scene_2.mp3")} />
        </AbsoluteFill>
    );
};
