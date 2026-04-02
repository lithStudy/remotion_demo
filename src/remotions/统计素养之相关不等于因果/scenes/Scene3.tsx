import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWConceptCard } from "../../../components";

// 对照组的重要性
const SCENE_DURATION = 183 + 224 + 162 + 239;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={183}>
                <BWConceptCard content={[{"text": "在科学方法论上，", "startFrame": 0, "durationFrames": 38}, {"text": "要拆解这种迷思，", "startFrame": 37, "durationFrames": 50}, {"text": "其实只需要一个硬核概念，", "startFrame": 86, "durationFrames": 52}, {"text": "叫作对照组。", "startFrame": 137, "durationFrames": 45}]} totalDurationFrames={183} imageSrc={staticFile("images/统计素养之相关不等于因果/scene_3_1.png")} conceptName={"对照组"} anchors={[]} />
            </Sequence>
            <Sequence from={183} durationInFrames={224}>
                <BWCenterFocus content={[{"text": "简单来说，", "startFrame": 0, "durationFrames": 30}, {"text": "如果没有对照组，", "startFrame": 29, "durationFrames": 39}, {"text": "你永远无法证明是你的干预有效，", "startFrame": 67, "durationFrames": 81}, {"text": "还是因为你命大或者身体好。", "startFrame": 148, "durationFrames": 76}]} totalDurationFrames={224} imageSrc={staticFile("images/统计素养之相关不等于因果/scene_3_2.png")} enterEffect="fadeIn" anchors={[{"text": "对照组", "showFrom": 1, "color": "#000000", "anim": "spring", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={407} durationInFrames={162}>
                <BWConceptCard content={[{"text": "在心理学和传播学里，", "startFrame": 0, "durationFrames": 46}, {"text": "这通常涉及一个著名的心理暗示，", "startFrame": 45, "durationFrames": 69}, {"text": "叫作安慰剂效应。", "startFrame": 114, "durationFrames": 47}]} totalDurationFrames={162} imageSrc={staticFile("images/统计素养之相关不等于因果/scene_3_3.png")} conceptName={"安慰剂效应"} anchors={[]} />
            </Sequence>
            <Sequence from={569} durationInFrames={239}>
                <BWCenterFocus content={[{"text": "就像小时候妈妈在伤口上吹的那口气，", "startFrame": 0, "durationFrames": 87}, {"text": "气本身不治病，", "startFrame": 86, "durationFrames": 42}, {"text": "但你的大脑觉得它治病，", "startFrame": 127, "durationFrames": 45}, {"text": "于是分泌了内啡肽帮你止痛。", "startFrame": 172, "durationFrames": 67}]} totalDurationFrames={239} imageSrc={staticFile("images/统计素养之相关不等于因果/scene_3_4.png")} enterEffect="fadeIn" anchors={[{"text": "安慰剂效应", "showFrom": 2, "color": "#EF4444", "anim": "highlight", "audioEffect": "ping"}, {"text": "内啡肽", "showFrom": 3, "color": "#000000", "anim": "spring", "audioEffect": null}]} />
            </Sequence>
            <Audio src={staticFile("/audio/统计素养之相关不等于因果/scene_3/scene_3.mp3")} />
        </AbsoluteFill>
    );
};
