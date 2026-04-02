import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWBeatSequence, BWCenterFocus, BWConceptCard, BWTextFocus } from "../../../components";

// 双盲实验的武器
const SCENE_DURATION = 144 + 160 + 40 + 189 + 208 + 152;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={144}>
                <BWConceptCard content={[{"text": "为了彻底排除这种干扰，", "startFrame": 0, "durationFrames": 48}, {"text": "科学家发明了一种叫作双盲实验的武器。", "startFrame": 48, "durationFrames": 96}]} totalDurationFrames={144} imageSrc={staticFile("images/统计素养之相关不等于因果/scene_4_1.png")} conceptName={"双盲实验"} anchors={[]} />
            </Sequence>
            <Sequence from={144} durationInFrames={160}>
                <BWCenterFocus content={[{"text": "意思就是，", "startFrame": 0, "durationFrames": 29}, {"text": "实验的人和被试的人，", "startFrame": 28, "durationFrames": 47}, {"text": "谁都不知道手里拿的是真药还是糖片。", "startFrame": 75, "durationFrames": 85}]} totalDurationFrames={160} imageSrc={staticFile("images/统计素养之相关不等于因果/scene_4_2.png")} enterEffect="fadeIn" anchors={[{"text": "双盲实验", "showFrom": 1, "color": "#000000", "anim": "highlight", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={304} durationInFrames={40}>
                <BWBeatSequence content={[{"text": "为什么要这么麻烦？", "startFrame": 0, "durationFrames": 40}]} totalDurationFrames={40} stages={[{ imageSrc: staticFile("images/统计素养之相关不等于因果/scene_4_3_img0.png"), enterEffect: "breathe" }, { imageSrc: staticFile("images/统计素养之相关不等于因果/scene_4_3_img1.png"), enterEffect: "slideBottom" }, { imageSrc: staticFile("images/统计素养之相关不等于因果/scene_4_3_img2.png"), enterEffect: "slideBottom" }]} anchors={[]} />
            </Sequence>
            <Sequence from={344} durationInFrames={189}>
                <BWCenterFocus content={[{"text": "因为只要医生一个眼神、", "startFrame": 0, "durationFrames": 47}, {"text": "一个暗示，", "startFrame": 46, "durationFrames": 23}, {"text": "或者病人一个先入为主的念头，", "startFrame": 69, "durationFrames": 75}, {"text": "就能干扰实验结果。", "startFrame": 144, "durationFrames": 45}]} totalDurationFrames={189} imageSrc={staticFile("images/统计素养之相关不等于因果/scene_4_4.png")} enterEffect="fadeIn" anchors={[{"text": "干扰", "showFrom": 3, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={533} durationInFrames={208}>
                <BWCenterFocus content={[{"text": "只有当真药组的效果显著好于那个什么都不含的对照组时，", "startFrame": 0, "durationFrames": 112}, {"text": "我们才能挺直腰板说，", "startFrame": 111, "durationFrames": 46}, {"text": "这个药是真的有效。", "startFrame": 157, "durationFrames": 51}]} totalDurationFrames={208} imageSrc={staticFile("images/统计素养之相关不等于因果/scene_4_5.png")} enterEffect="fadeIn" anchors={[{"text": "双盲实验", "showFrom": 0, "color": "#000000", "anim": "popIn", "audioEffect": "ping"}, {"text": "对照组", "showFrom": 0, "color": "#000000", "anim": "popIn", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={741} durationInFrames={152}>
                <BWTextFocus content={[{"text": "如果没有这个逻辑闭环，", "startFrame": 0, "durationFrames": 45}, {"text": "所有的康复都只是一场概率论里的幸存者偏差。", "startFrame": 44, "durationFrames": 107}]} totalDurationFrames={152} coreSentence={"康复只是一场幸存者偏差"} coreSentenceAnchors={[{"coreSentenceAnchor": "幸存者偏差", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/统计素养之相关不等于因果/scene_4/scene_4.mp3")} />
        </AbsoluteFill>
    );
};
