import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift, BWMethodStack, BWSplitCompare, BWTextFocus } from "../../../components";

// 升华·权力与制度
const SCENE_DURATION = 99 + 121 + 168 + 136 + 163;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={99}>
                <BWCenterFocus content={[{"text": "凝视岳飞的背影。", "startFrame": 0, "durationFrames": 44}, {"text": "我们更应该看清权力的本质。", "startFrame": 43, "durationFrames": 56}]} totalDurationFrames={99} imageSrc={staticFile("images/权利与责任/scene_4_1.png")} enterEffect="fadeIn" anchors={[{"text": "权力的本质", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={99} durationInFrames={121}>
                <BWCognitiveShift content={[{"text": "真正的社会进步。", "startFrame": 0, "durationFrames": 38}, {"text": "不是期盼好皇帝。", "startFrame": 37, "durationFrames": 42}, {"text": "而是建立一套制度。", "startFrame": 78, "durationFrames": 42}]} totalDurationFrames={121} notText={"期盼好皇帝"} butText={"建立一套制度"} butSrc={staticFile("images/权利与责任/scene_4_2.png")} notContentIndex={1} butContentIndex={2} anchors={[]} />
            </Sequence>
            <Sequence from={220} durationInFrames={168}>
                <BWMethodStack content={[{"text": "让所有决策者都敬畏责任。", "startFrame": 0, "durationFrames": 62}, {"text": "不让执行者独自背锅。", "startFrame": 61, "durationFrames": 57}, {"text": "不让决策者隐身遁形。", "startFrame": 117, "durationFrames": 51}]} totalDurationFrames={168} title={"权责对等"} imageSrc={staticFile("images/权利与责任/scene_4_3.png")} notes={[{"text": "敬畏责任是制度的基础", "showFrom": 0}, {"text": "明确责任归属，不让个人背锅", "showFrom": 1}, {"text": "透明公开，让决策者无处遁形", "showFrom": 2}]} anchors={[]} />
            </Sequence>
            <Sequence from={388} durationInFrames={136}>
                <BWSplitCompare content={[{"text": "没有制约的权力。", "startFrame": 0, "durationFrames": 40}, {"text": "是灾难。", "startFrame": 39, "durationFrames": 26}, {"text": "不需担责的权力。", "startFrame": 65, "durationFrames": 43}, {"text": "是霸权", "startFrame": 107, "durationFrames": 29}]} totalDurationFrames={136} leftSrc={staticFile("images/权利与责任/scene_4_4_left.png")} rightSrc={staticFile("images/权利与责任/scene_4_4_right.png")} leftLabel={"灾难"} rightLabel={"霸权"} leftShowFrom={0} rightShowFrom={2} anchors={[]} />
            </Sequence>
            <Sequence from={524} durationInFrames={163}>
                <BWTextFocus content={[{"text": "当百姓都觉得", "startFrame": 0, "durationFrames": 33}, {"text": "最该跪在岳飞墓前的，是赵构的时候", "startFrame": 32, "durationFrames": 79}, {"text": "这个社会就是真的觉醒了", "startFrame": 111, "durationFrames": 52}]} totalDurationFrames={163} coreSentence={[{"text": "当百姓都觉得", "showFrom": 0}, {"text": "最该跪在岳飞墓前的，是赵构", "showFrom": 1}, {"text": "这个社会，就是真的觉醒了", "showFrom": 2, "endFrom": 2}]} coreSentenceAnchors={[{"coreSentenceAnchor": "赵构", "color": "#EF4444"}, {"coreSentenceAnchor": "真的觉醒", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/权利与责任/scene_4/scene_4.mp3")} />
        </AbsoluteFill>
    );
};
