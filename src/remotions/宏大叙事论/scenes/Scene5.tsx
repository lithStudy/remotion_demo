import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile, Freeze } from "remotion";
import { BWCenterFocus, BWChecklistReveal, BWCognitiveShift, BWMagnifyingGlass, BWSplitCompare, BWTextFocus } from "../../../components";

// 召唤·谁受益谁买单
const SCENE_DURATION = 65 + 117 + 238 + 75 + 197 + 158 + 112 + 195 + 118;

export const calculateScene5Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene5: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={65}>
                <BWTextFocus content={[{"text": "这就是宏大叙事最最毒之处。", "startFrame": 0, "durationFrames": 65}]} totalDurationFrames={65} coreSentence={["这就是宏大叙事最毒之处。"]} coreSentenceAnchors={[{"coreSentenceAnchor": "最毒之处", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={65} durationInFrames={117}>
                <BWSplitCompare content={[{"text": "它不仅剥削你，", "startFrame": 0, "durationFrames": 31}, {"text": "它还教化你，", "startFrame": 30, "durationFrames": 29}, {"text": "让你觉得被剥削是一种崇高。", "startFrame": 58, "durationFrames": 58}]} totalDurationFrames={117} leftSrc={staticFile("images/宏大叙事论/scene_5_2_left.png")} rightSrc={staticFile("images/宏大叙事论/scene_5_2_right.png")} leftLabel={"剥削"} rightLabel={"崇高"} leftShowFrom={0} rightShowFrom={1} />
            </Sequence>
            <Sequence from={182} durationInFrames={238}>
                <BWMagnifyingGlass content={[{"text": "当有人用抽象的高尚来偷换具体的责任，", "startFrame": 0, "durationFrames": 96}, {"text": "你不要被他带进云端。", "startFrame": 96, "durationFrames": 43}, {"text": "把视角拉回地面，", "startFrame": 138, "durationFrames": 42}, {"text": "只盯死三个最具体的问题：", "startFrame": 179, "durationFrames": 58}]} totalDurationFrames={238} anchors={[{"text": "具体的责任", "showFrom": 0, "color": "#EF4444", "anim": "popIn", "audioEffect": "ping"}, {"text": "三个最具体的词", "showFrom": 3, "color": "#000000", "anim": "highlight", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={420} durationInFrames={75}>
                <BWTextFocus content={[{"text": "谁受益？", "startFrame": 0, "durationFrames": 32}, {"text": "谁买单？", "startFrame": 31, "durationFrames": 19}, {"text": "谁负责？", "startFrame": 49, "durationFrames": 26}]} totalDurationFrames={75} coreSentence={["谁受益？", "谁买单？", "谁负责？"]} coreSentenceAnchors={[{"coreSentenceAnchor": "受益", "color": "#EF4444"}, {"coreSentenceAnchor": "买单", "color": "#EF4444"}, {"coreSentenceAnchor": "负责", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={495} durationInFrames={197}>
                <BWCognitiveShift content={[{"text": "记住：", "startFrame": 0, "durationFrames": 21}, {"text": "历史从来不是由抽象的名词构成的，", "startFrame": 20, "durationFrames": 76}, {"text": "历史是由无数个会流血、", "startFrame": 96, "durationFrames": 45}, {"text": "会流泪的具体个人构成的。", "startFrame": 140, "durationFrames": 57}]} totalDurationFrames={197} notText={"抽象名词"} butText={"具体个人"} butSrc={staticFile("images/宏大叙事论/scene_5_5.png")} notContentIndex={1} butContentIndex={2} anchors={[]} />
            </Sequence>
            <Sequence from={692} durationInFrames={158}>
                <BWCenterFocus content={[{"text": "当有其他人被以宏大叙事为理由，", "startFrame": 0, "durationFrames": 83}, {"text": "成为代价的时候，", "startFrame": 82, "durationFrames": 38}, {"text": "不要叫好，", "startFrame": 120, "durationFrames": 38}]} totalDurationFrames={158} imageSrc={staticFile("images/宏大叙事论/scene_5_6.png")} enterEffect="fadeIn" anchors={[{"text": "代价", "showFrom": 1, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={850} durationInFrames={112}>
                <BWTextFocus content={[{"text": "因为总有一天，", "startFrame": 0, "durationFrames": 35}, {"text": "你或者你的孩子，", "startFrame": 34, "durationFrames": 35}, {"text": "也会变成那个代价。", "startFrame": 69, "durationFrames": 42}]} totalDurationFrames={112} coreSentence={[{"text": "因为总有一天，", "showFrom": 0}, {"text": "你或者你的孩子，", "showFrom": 1}, {"text": "也会变成那个代价。", "showFrom": 2}]} coreSentenceAnchors={[{"coreSentenceAnchor": "那个代价", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={962} durationInFrames={195}>
                <BWChecklistReveal content={[{"text": "在这个动辄用宏大概念压人的时代，", "startFrame": 0, "durationFrames": 79}, {"text": "守护你自己的具体感受，", "startFrame": 78, "durationFrames": 55}, {"text": "守护你身边人的具体权益。", "startFrame": 133, "durationFrames": 62}]} totalDurationFrames={195} title={"守住具体"} rows={[{"text": "警惕宏大概念", "showFrom": 0}, {"text": "守护自己的具体感受", "showFrom": 1}, {"text": "守护身边人的具体权益", "showFrom": 2}]} anchors={[]} />
            </Sequence>
            <Sequence from={1157} durationInFrames={93}>
                <BWTextFocus content={[{"text": "因为，", "startFrame": 0, "durationFrames": 10}, {"text": "具体的你，", "startFrame": 9, "durationFrames": 27}, {"text": "才是这个世界唯一的真实。", "startFrame": 36, "durationFrames": 57}]} totalDurationFrames={93} coreSentence={[{"text": "因为，", "showFrom": 0, "endFrom": 0}, {"text": "具体的你，", "showFrom": 1}, {"text": "才是这个世界唯一的真实。", "showFrom": 2}]} coreSentenceAnchors={[{"coreSentenceAnchor": "唯一的真实", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={1250} durationInFrames={25}>
                <Freeze frame={92}>
                    <BWTextFocus content={[{"text": "因为，", "startFrame": 0, "durationFrames": 10}, {"text": "具体的你，", "startFrame": 9, "durationFrames": 27}, {"text": "才是这个世界唯一的真实。", "startFrame": 36, "durationFrames": 57}]} totalDurationFrames={93} coreSentence={[{"text": "因为，", "showFrom": 0, "endFrom": 0}, {"text": "具体的你，", "showFrom": 1}, {"text": "才是这个世界唯一的真实。", "showFrom": 2}]} coreSentenceAnchors={[{"coreSentenceAnchor": "唯一的真实", "color": "#EF4444"}]} />
                </Freeze>
            </Sequence>
            <Audio src={staticFile("/audio/宏大叙事论/scene_5/scene_5.mp3")} />
        </AbsoluteFill>
    );
};
