import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWTextFocus } from "../../../components";

// 召唤·价值投票即爱国
const SCENE_DURATION = 122 + 221 + 177;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={122}>
                <BWCenterFocus content={[{"text": "如果你真心希望国产崛起，", "startFrame": 0, "durationFrames": 55}, {"text": "请收起你的情绪，", "startFrame": 54, "durationFrames": 38}, {"text": "收起你的同情。", "startFrame": 91, "durationFrames": 31}]} totalDurationFrames={122} imageSrc={staticFile("images/国产情怀的谎言/scene_3_3.png")} enterEffect="zoomIn" anchors={[]} />
            </Sequence>
            <Sequence from={122} durationInFrames={221}>
                <BWTextFocus content={[{"text": "只有当你只为“价值”投票，", "startFrame": 0, "durationFrames": 56}, {"text": "当他们发现不把产品做到极致就活不下去的时候，", "startFrame": 55, "durationFrames": 106}, {"text": "真正的崛起，", "startFrame": 161, "durationFrames": 33}, {"text": "才会开始。", "startFrame": 194, "durationFrames": 26}]} totalDurationFrames={221} coreSentence={["为“价值”投票", "真正的崛起，才会开始。"]} coreSentenceAnchors={[{"coreSentenceAnchor": "价值", "color": "#EF4444"}, {"coreSentenceAnchor": "崛起", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={343} durationInFrames={177}>
                <BWTextFocus content={[{"text": "如果你真的爱国，", "startFrame": 0, "durationFrames": 42}, {"text": "想看到国货屹立不倒。", "startFrame": 41, "durationFrames": 53}, {"text": "别做他们的遮阳伞，", "startFrame": 93, "durationFrames": 41}, {"text": "去做他们的磨刀石。", "startFrame": 134, "durationFrames": 42}]} totalDurationFrames={177} coreSentence={["别做他们的遮阳伞，", "去做他们的磨刀石。"]} coreSentenceAnchors={[{"coreSentenceAnchor": "遮阳伞", "color": "#EF4444"}, {"coreSentenceAnchor": "磨刀石", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/国产情怀的谎言/scene_3/scene_3.mp3")} />
        </AbsoluteFill>
    );
};
