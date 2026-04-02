import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWBeatSequence, BWCenterFocus, BWConceptCard, BWTextFocus } from "../../../components";

// 双盲实验的武器
const SCENE_DURATION = 70 + 97 + 30 + 121 + 117 + 76;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={70}>
                <BWConceptCard content={[{"text": "为了彻底排除这种干扰，", "startFrame": 0, "durationFrames": 30}, {"text": "科学家发明了一种叫作双盲实验的武器。", "startFrame": 30, "durationFrames": 40}]} totalDurationFrames={70} imageSrc={staticFile("放大镜寻找干扰因素简笔画图标")} conceptName={"双盲实验"} anchors={[]} />
            </Sequence>
            <Sequence from={70} durationInFrames={97}>
                <BWCenterFocus content={[{"text": "意思就是，", "startFrame": 0, "durationFrames": 30}, {"text": "实验的人和被试的人，", "startFrame": 30, "durationFrames": 30}, {"text": "谁都不知道手里拿的是真药还是糖片。", "startFrame": 60, "durationFrames": 37}]} totalDurationFrames={97} imageSrc={staticFile("一群科学家在实验室里做实验的场景")} enterEffect="fadeIn" anchors={[{"text": "双盲实验", "showFrom": 1, "color": "#000000", "anim": "highlight", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={167} durationInFrames={30}>
                <BWBeatSequence content={[{"text": "为什么要这么麻烦？", "startFrame": 0, "durationFrames": 30}]} totalDurationFrames={30} stages={[{ imageSrc: staticFile("卡通人物疑惑表情"), enterEffect: "breathe" }, { imageSrc: staticFile("一个问号漂浮在空中"), enterEffect: "slideBottom" }, { imageSrc: staticFile("一个齿轮卡住，运作不畅"), enterEffect: "slideBottom" }]} anchors={[]} />
            </Sequence>
            <Sequence from={197} durationInFrames={121}>
                <BWCenterFocus content={[{"text": "因为只要医生一个眼神、", "startFrame": 0, "durationFrames": 30}, {"text": "一个暗示，", "startFrame": 30, "durationFrames": 30}, {"text": "或者病人一个先入为主的念头，", "startFrame": 60, "durationFrames": 31}, {"text": "就能干扰实验结果。", "startFrame": 91, "durationFrames": 30}]} totalDurationFrames={121} imageSrc={staticFile("医生检查病人的场景")} enterEffect="fadeIn" anchors={[{"text": "干扰", "showFrom": 3, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={318} durationInFrames={117}>
                <BWCenterFocus content={[{"text": "只有当真药组的效果显著好于那个什么都不含的对照组时，", "startFrame": 0, "durationFrames": 57}, {"text": "我们才能挺直腰板说，", "startFrame": 57, "durationFrames": 30}, {"text": "这个药是真的有效。", "startFrame": 87, "durationFrames": 30}]} totalDurationFrames={117} imageSrc={staticFile("药瓶和药丸的卡通图标")} enterEffect="fadeIn" anchors={[{"text": "双盲实验", "showFrom": 0, "color": "#000000", "anim": "popIn", "audioEffect": "ping"}, {"text": "对照组", "showFrom": 0, "color": "#000000", "anim": "popIn", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={435} durationInFrames={76}>
                <BWTextFocus content={[{"text": "如果没有这个逻辑闭环，", "startFrame": 0, "durationFrames": 30}, {"text": "所有的康复都只是一场概率论里的幸存者偏差。", "startFrame": 30, "durationFrames": 46}]} totalDurationFrames={76} coreSentence={"康复只是一场幸存者偏差"} coreSentenceAnchors={[{"coreSentenceAnchor": "幸存者偏差", "color": "#EF4444"}]} />
            </Sequence>

        </AbsoluteFill>
    );
};
