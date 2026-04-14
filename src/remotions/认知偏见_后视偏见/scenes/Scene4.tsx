import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWMethodStack, BWTextFocus } from "../../../components";

// 召唤：应对心法
const SCENE_DURATION = 137 + 233 + 222 + 211 + 191 + 183;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={137}>
                <BWCenterFocus content={[{"text": "要想不被这种“事后聪明”蒙蔽双眼，", "startFrame": 0, "durationFrames": 75}, {"text": "你最好记住这三个核心心法：", "startFrame": 74, "durationFrames": 63}]} totalDurationFrames={137} imageSrc={staticFile("images/认知偏见_后视偏见/scene_4_1.png")} enterEffect="fadeIn" anchors={[{"text": "核心心法", "showFrom": 1, "color": "#000000", "anim": "slideUp", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={137} durationInFrames={233}>
                <BWMethodStack content={[{"text": "1. 建立决策日记：", "startFrame": 0, "durationFrames": 54}, {"text": "在做决定时记录下当时的真实想法和模糊信息，", "startFrame": 53, "durationFrames": 108}, {"text": "等结果出来后再去无情地对照。", "startFrame": 161, "durationFrames": 71}]} totalDurationFrames={233} title={"建立决策日记"} imageSrc={staticFile("images/认知偏见_后视偏见/scene_4_2.png")} notes={[{"text": "记录真实想法和模糊信息", "showFrom": 1}, {"text": "事后无情对照", "showFrom": 2}]} anchors={[]} />
            </Sequence>
            <Sequence from={370} durationInFrames={222}>
                <BWMethodStack content={[{"text": "2. 承认随机性：", "startFrame": 0, "durationFrames": 55}, {"text": "接受世界是复杂的、", "startFrame": 54, "durationFrames": 44}, {"text": "甚至是混乱的，", "startFrame": 98, "durationFrames": 38}, {"text": "很多结果的发生只是概率，", "startFrame": 135, "durationFrames": 60}, {"text": "而非必然。", "startFrame": 195, "durationFrames": 27}]} totalDurationFrames={222} title={"承认随机性"} imageSrc={staticFile("images/认知偏见_后视偏见/scene_4_3.png")} notes={[{"text": "世界充满复杂性", "showFrom": 1}, {"text": "结果可能只是概率", "showFrom": 3}]} anchors={[]} />
            </Sequence>
            <Sequence from={592} durationInFrames={211}>
                <BWMethodStack content={[{"text": "3. 警惕“总结癖”：", "startFrame": 0, "durationFrames": 58}, {"text": "听到别人（或者你自己）高谈阔论“我早就知道”时，", "startFrame": 57, "durationFrames": 113}, {"text": "在心里打个问号。", "startFrame": 170, "durationFrames": 41}]} totalDurationFrames={211} title={"警惕“总结癖”"} imageSrc={staticFile("images/认知偏见_后视偏见/scene_4_4.png")} notes={[{"text": "听到别人高谈阔论“我早就知道”时", "showFrom": 1}, {"text": "在心里打个问号", "showFrom": 2}]} anchors={[]} />
            </Sequence>
            <Sequence from={803} durationInFrames={191}>
                <BWCenterFocus content={[{"text": "在这个充满未知的世界里，", "startFrame": 0, "durationFrames": 53}, {"text": "如果你不敬畏过去的真实，", "startFrame": 52, "durationFrames": 58}, {"text": "你就永远无法在未来做出理性的判断。", "startFrame": 110, "durationFrames": 81}]} totalDurationFrames={191} imageSrc={staticFile("images/认知偏见_后视偏见/scene_4_5.png")} enterEffect="fadeIn" anchors={[{"text": "敬畏过去的真实", "showFrom": 1, "color": "#EF4444", "anim": "slideUp", "audioEffect": null}, {"text": "理性判断", "showFrom": 2, "color": "#000000", "anim": "popIn", "audioEffect": null}]} />
            </Sequence>
            <Sequence from={994} durationInFrames={183}>
                <BWTextFocus content={[{"text": "永远记住，", "startFrame": 0, "durationFrames": 28}, {"text": "真正的智慧是预见未知的风险，", "startFrame": 27, "durationFrames": 76}, {"text": "而不是在废墟上宣称自己早有预谋。", "startFrame": 102, "durationFrames": 81}]} totalDurationFrames={183} coreSentence={["真正的智慧是预见未知的风险"]} coreSentenceAnchors={[{"coreSentenceAnchor": "预见未知的风险", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/认知偏见_后视偏见/scene_4/scene_4.mp3")} />
        </AbsoluteFill>
    );
};
