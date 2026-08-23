import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift, BWMethodStack, BWSplitCompare, BWTextFocus } from "../../../components";

// 升华·权力与制度
const SCENE_DURATION = 102 + 139 + 164 + 129 + 178;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={102}>
                <BWCenterFocus content={[{"text": "凝视岳飞的背影。", "startFrame": 0, "durationFrames": 41}, {"text": "我们更应该看清权力的本质。", "startFrame": 40, "durationFrames": 61}]} totalDurationFrames={102} imageSrc={staticFile("images/权利与责任/scene_4_1.png")} enterEffect="fadeIn" anchors={[{"text": "权力的本质", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={102} durationInFrames={139}>
                <BWCognitiveShift content={[{"text": "真正的社会进步。", "startFrame": 0, "durationFrames": 44}, {"text": "不是期盼好皇帝。", "startFrame": 43, "durationFrames": 47}, {"text": "而是建立一套制度。", "startFrame": 90, "durationFrames": 48}]} totalDurationFrames={139} notText={"期盼好皇帝"} butText={"建立一套制度"} butSrc={staticFile("images/权利与责任/scene_4_2.png")} notContentIndex={1} butContentIndex={2} anchors={[]} />
            </Sequence>
            <Sequence from={241} durationInFrames={164}>
                <BWMethodStack content={[{"text": "让所有决策者都敬畏责任。", "startFrame": 0, "durationFrames": 58}, {"text": "不让执行者独自背锅。", "startFrame": 57, "durationFrames": 50}, {"text": "不让决策者隐身遁形。", "startFrame": 107, "durationFrames": 56}]} totalDurationFrames={164} title={"权责对等"} imageSrc={staticFile("images/权利与责任/scene_4_3.png")} notes={[{"text": "敬畏责任是制度的基础", "showFrom": 0}, {"text": "明确责任归属，不让个人背锅", "showFrom": 1}, {"text": "透明公开，让决策者无处遁形", "showFrom": 2}]} anchors={[]} />
            </Sequence>
            <Sequence from={405} durationInFrames={129}>
                <BWSplitCompare content={[{"text": "没有制约的权力。", "startFrame": 0, "durationFrames": 39}, {"text": "是灾难。", "startFrame": 38, "durationFrames": 22}, {"text": "不需担责的权力。", "startFrame": 59, "durationFrames": 42}, {"text": "是霸权", "startFrame": 101, "durationFrames": 28}]} totalDurationFrames={129} leftSrc={staticFile("images/权利与责任/scene_4_4_left.png")} rightSrc={staticFile("images/权利与责任/scene_4_4_right.png")} leftLabel={"灾难"} rightLabel={"霸权"} leftShowFrom={0} rightShowFrom={2} anchors={[]} />
            </Sequence>
            <Sequence from={534} durationInFrames={178}>
                <BWTextFocus content={[{"text": "当百姓都觉得", "startFrame": 0, "durationFrames": 36}, {"text": "最该跪在岳飞墓前的，是赵构的时候", "startFrame": 35, "durationFrames": 86}, {"text": "这个社会就是真的觉醒了", "startFrame": 121, "durationFrames": 57}]} totalDurationFrames={178} coreSentence={[{"text": "当百姓都觉得", "showFrom": 0}, {"text": "最该跪在岳飞墓前的，是赵构", "showFrom": 1}, {"text": "这个社会，就是真的觉醒了", "showFrom": 2, "endFrom": 2}]} coreSentenceAnchors={[{"coreSentenceAnchor": "赵构", "color": "#EF4444"}, {"coreSentenceAnchor": "真的觉醒", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/权利与责任/scene_4/scene_4.mp3")} />
        </AbsoluteFill>
    );
};
