import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWConceptCard } from "../../../components";

// 对照组的重要性
const SCENE_DURATION = 120 + 123 + 93 + 127;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={120}>
                <BWConceptCard content={[{"text": "在科学方法论上，", "startFrame": 0, "durationFrames": 30}, {"text": "要拆解这种迷思，", "startFrame": 30, "durationFrames": 30}, {"text": "其实只需要一个硬核概念，", "startFrame": 60, "durationFrames": 30}, {"text": "叫作对照组。", "startFrame": 90, "durationFrames": 30}]} totalDurationFrames={120} imageSrc={staticFile("概念图示简笔画")} conceptName={"对照组"} anchors={[]} />
            </Sequence>
            <Sequence from={120} durationInFrames={123}>
                <BWCenterFocus content={[{"text": "简单来说，", "startFrame": 0, "durationFrames": 30}, {"text": "如果没有对照组，", "startFrame": 30, "durationFrames": 30}, {"text": "你永远无法证明是你的干预有效，", "startFrame": 60, "durationFrames": 33}, {"text": "还是因为你命大或者身体好。", "startFrame": 93, "durationFrames": 30}]} totalDurationFrames={123} imageSrc={staticFile("对比实验组在实验室进行测试的示意图")} enterEffect="fadeIn" anchors={[{"text": "对照组", "showFrom": 1, "color": "#000000", "anim": "spring", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={243} durationInFrames={93}>
                <BWConceptCard content={[{"text": "在心理学和传播学里，", "startFrame": 0, "durationFrames": 30}, {"text": "这通常涉及一个著名的心理暗示，", "startFrame": 30, "durationFrames": 33}, {"text": "叫作安慰剂效应。", "startFrame": 63, "durationFrames": 30}]} totalDurationFrames={93} imageSrc={staticFile("大脑简笔画图标")} conceptName={"安慰剂效应"} anchors={[]} />
            </Sequence>
            <Sequence from={336} durationInFrames={127}>
                <BWCenterFocus content={[{"text": "就像小时候妈妈在伤口上吹的那口气，", "startFrame": 0, "durationFrames": 37}, {"text": "气本身不治病，", "startFrame": 37, "durationFrames": 30}, {"text": "但你的大脑觉得它治病，", "startFrame": 67, "durationFrames": 30}, {"text": "于是分泌了内啡肽帮你止痛。", "startFrame": 97, "durationFrames": 30}]} totalDurationFrames={127} imageSrc={staticFile("妈妈给孩子伤口吹气的温馨场景")} enterEffect="fadeIn" anchors={[{"text": "安慰剂效应", "showFrom": 2, "color": "#EF4444", "anim": "highlight", "audioEffect": "ping"}, {"text": "内啡肽", "showFrom": 3, "color": "#000000", "anim": "spring", "audioEffect": null}]} />
            </Sequence>

        </AbsoluteFill>
    );
};
