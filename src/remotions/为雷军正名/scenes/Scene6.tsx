import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWTextFocus } from "../../../components";

// 召唤：你的理由
const SCENE_DURATION = 314 + 120 + 171;

export const calculateScene6Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene6: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={314}>
                <BWCenterFocus content={[{"text": "而雷军的没有中间商的销售策略", "startFrame": 0, "durationFrames": 68}, {"text": "与高性价比的打法，", "startFrame": 67, "durationFrames": 50}, {"text": "明显触动了一部分人的利益，", "startFrame": 116, "durationFrames": 70}, {"text": "因此这些人恨不能生啖其肉，生饮其血。", "startFrame": 186, "durationFrames": 81}, {"text": "我可以理解他们。", "startFrame": 267, "durationFrames": 45}]} totalDurationFrames={314} imageSrc={staticFile("images/为雷军正名/scene_6_1.png")} enterEffect="fadeIn" anchors={[{"text": "高性价比", "color": "#EF4444", "anim": "popIn", "audioEffect": null, "showFrom": 1}, {"text": "恨不能生啖其肉，生饮其血", "color": "#EF4444", "anim": "popIn", "audioEffect": null, "showFrom": 3}]} />
            </Sequence>
            <Sequence from={314} durationInFrames={120}>
                <BWTextFocus content={[{"text": "但你，", "startFrame": 0, "durationFrames": 15}, {"text": "我的朋友，", "startFrame": 15, "durationFrames": 30}, {"text": "你作为一个受益良多的消费者。", "startFrame": 45, "durationFrames": 75}]} totalDurationFrames={120} coreSentence={[{"text": "但你", "showFrom": 0}, {"text": "我的朋友", "showFrom": 1}, {"text": "你作为一个受益良多的消费者", "showFrom": 2}]} coreSentenceAnchors={[{"coreSentenceAnchor": "受益良多", "color": "#EF4444"}, {"coreSentenceAnchor": "消费者", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={434} durationInFrames={171}>
                <BWTextFocus content={[{"text": "又是因为什么，讨厌这样一个", "startFrame": 0, "durationFrames": 61}, {"text": "白手起家，从无绯闻，低调谦和的工程师呢？", "startFrame": 60, "durationFrames": 82}]} totalDurationFrames={171} coreSentence={[{"text": "你又是因为什么，讨厌这样一个", "showFrom": 0}, {"text": "白手起家，从无绯闻，低调谦和", "showFrom": 1}, {"text": "的工程师呢？", "showFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "白手起家，从无绯闻，低调谦和", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/为雷军正名/scene_6/scene_6.mp3")} />
        </AbsoluteFill>
    );
};
