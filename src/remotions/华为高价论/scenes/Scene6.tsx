import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCognitiveShift, BWTextFocus } from "../../../components";

// 结语：产品说话
const SCENE_DURATION = 107 + 113 + 148;

export const calculateScene6Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene6: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={107}>
                <BWCognitiveShift content={[{"text": "支持国产当然没问题。", "startFrame": 0, "durationFrames": 47}, {"text": "但支持国产，", "startFrame": 46, "durationFrames": 29}, {"text": "不等于放弃判断。", "startFrame": 75, "durationFrames": 32}]} totalDurationFrames={107} notText={"放弃判断"} butText={"支持国产"} butSrc={staticFile("images/华为高价论/scene_6_1.png")} notContentIndex={2} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Sequence from={107} durationInFrames={113}>
                <BWTextFocus content={[{"text": "真正的国产崛起，", "startFrame": 0, "durationFrames": 39}, {"text": "是良性竞争，", "startFrame": 38, "durationFrames": 34}, {"text": "用产品说话。", "startFrame": 72, "durationFrames": 41}]} totalDurationFrames={113} coreSentence={[{"text": "真正的国产崛起，", "showFrom": 0}, {"text": "是良性竞争，", "showFrom": 1}, {"text": "用产品说话。", "showFrom": 2, "endFrom": 2}]} coreSentenceAnchors={[{"coreSentenceAnchor": "国产崛起", "color": "red"}, {"coreSentenceAnchor": "用产品说话", "color": "red"}]} />
            </Sequence>
            <Sequence from={220} durationInFrames={148}>
                <BWTextFocus content={[{"text": "通过赚取海外的利润，", "startFrame": 0, "durationFrames": 46}, {"text": "反哺国内的产业升级，", "startFrame": 45, "durationFrames": 51}, {"text": "才是可持续发展的正道。", "startFrame": 96, "durationFrames": 52}]} totalDurationFrames={148} coreSentence={[{"text": "通过赚取海外的利润，", "showFrom": 0}, {"text": "反哺国内的产业升级，", "showFrom": 1}, {"text": "才是可持续发展的正道。", "showFrom": 2, "endFrom": 2}]} coreSentenceAnchors={[{"coreSentenceAnchor": "海外的利润", "color": "red"}, {"coreSentenceAnchor": "反哺", "color": "red"}, {"coreSentenceAnchor": "可持续发展", "color": "red"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/华为高价论/scene_6/scene_6.mp3")} />
        </AbsoluteFill>
    );
};
