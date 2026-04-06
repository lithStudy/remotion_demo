import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWMethodStack, BWTextFocus } from "../../../components";

// 召唤：行动心法
const SCENE_DURATION = 67 + 107 + 150 + 113 + 193;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={67}>
                <BWCenterFocus content={[{"text": "要想不被这种“事后聪明”蒙蔽双眼，", "startFrame": 0, "durationFrames": 37}, {"text": "你最好记住这三个核心心法：", "startFrame": 37, "durationFrames": 30}]} totalDurationFrames={67} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" anchors={[{"text": "事后聪明", "showFrom": 0, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={67} durationInFrames={107}>
                <BWMethodStack content={[{"text": "1. 建立决策日记：", "startFrame": 0, "durationFrames": 30}, {"text": "在做决定时记录下当时的真实想法和模糊信息，", "startFrame": 30, "durationFrames": 46}, {"text": "等结果出来后再去无情地对照。", "startFrame": 76, "durationFrames": 31}]} totalDurationFrames={107} title={"建立决策日记"} imageSrc={staticFile("images/template/scene1_1.png")} notes={[{"text": "记录当时的想法和信息", "showFrom": 1}, {"text": "对照结果，反思决策", "showFrom": 2}]} anchors={[]} />
            </Sequence>
            <Sequence from={174} durationInFrames={150}>
                <BWMethodStack content={[{"text": "2. 承认随机性：", "startFrame": 0, "durationFrames": 30}, {"text": "接受世界是复杂的、", "startFrame": 30, "durationFrames": 30}, {"text": "甚至是混乱的，", "startFrame": 60, "durationFrames": 30}, {"text": "很多结果的发生只是概率，", "startFrame": 90, "durationFrames": 30}, {"text": "而非必然。", "startFrame": 120, "durationFrames": 30}]} totalDurationFrames={150} title={"承认随机性"} imageSrc={staticFile("images/template/scene1_1.png")} notes={[{"text": "接受世界复杂性", "showFrom": 1}, {"text": "很多结果只是概率", "showFrom": 3}, {"text": "而非绝对必然", "showFrom": 4}]} anchors={[]} />
            </Sequence>
            <Sequence from={324} durationInFrames={113}>
                <BWMethodStack content={[{"text": "3. 警惕“总结癖”：", "startFrame": 0, "durationFrames": 30}, {"text": "听到别人（或者你自己）高谈阔论“我早就知道”时，", "startFrame": 30, "durationFrames": 53}, {"text": "在心里打个问号。", "startFrame": 83, "durationFrames": 30}]} totalDurationFrames={113} title={"警惕总结癖"} imageSrc={staticFile("images/template/scene1_1.png")} notes={[{"text": "听到别人高谈阔论“我早就知道”时", "showFrom": 1}, {"text": "在心里打个问号", "showFrom": 2}]} anchors={[]} />
            </Sequence>
            <Sequence from={437} durationInFrames={193}>
                <BWTextFocus content={[{"text": "在这个充满未知的世界里，", "startFrame": 0, "durationFrames": 30}, {"text": "如果你不敬畏过去的真实，", "startFrame": 30, "durationFrames": 30}, {"text": "你就永远无法在未来做出理性的判断。", "startFrame": 60, "durationFrames": 37}, {"text": "永远记住，", "startFrame": 97, "durationFrames": 30}, {"text": "真正的智慧是预见未知的风险，", "startFrame": 127, "durationFrames": 31}, {"text": "而不是在废墟上宣称自己早有预谋。", "startFrame": 158, "durationFrames": 35}]} totalDurationFrames={193} coreSentence={"敬畏过去的真实，才能做出理性的判断"} coreSentenceAnchors={[{"coreSentenceAnchor": "敬畏", "color": "#EF4444"}, {"coreSentenceAnchor": "理性的判断", "color": "#000000"}]} />
            </Sequence>

        </AbsoluteFill>
    );
};
