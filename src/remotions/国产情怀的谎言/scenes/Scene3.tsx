import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWTextFocus } from "../../../components";

// 召唤·价值投票即爱国
const SCENE_DURATION = 138 + 236 + 164;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={138}>
                <BWCenterFocus content={[{"text": "如果你真心希望国产崛起，", "startFrame": 0, "durationFrames": 59}, {"text": "请收起你的情绪，", "startFrame": 58, "durationFrames": 41}, {"text": "收起你的同情。", "startFrame": 99, "durationFrames": 39}]} totalDurationFrames={138} imageSrc={staticFile("images/国产情怀的谎言/scene_3_3.png")} enterEffect="zoomIn" anchors={[]} />
            </Sequence>
            <Sequence from={138} durationInFrames={236}>
                <BWTextFocus content={[{"text": "只有当你只为“价值”投票，", "startFrame": 0, "durationFrames": 62}, {"text": "当他们发现不把产品做到极致就活不下去的时候，", "startFrame": 61, "durationFrames": 103}, {"text": "真正的崛起，", "startFrame": 163, "durationFrames": 38}, {"text": "才会开始。", "startFrame": 200, "durationFrames": 35}]} totalDurationFrames={236} coreSentence={["为“价值”投票", "真正的崛起，才会开始。"]} coreSentenceAnchors={[{"coreSentenceAnchor": "价值", "color": "#EF4444"}, {"coreSentenceAnchor": "崛起", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={374} durationInFrames={164}>
                <BWTextFocus content={[{"text": "如果你真的爱国，", "startFrame": 0, "durationFrames": 35}, {"text": "想看到国货屹立不倒。", "startFrame": 34, "durationFrames": 47}, {"text": "别做他们的遮阳伞，", "startFrame": 81, "durationFrames": 41}, {"text": "去做他们的磨刀石。", "startFrame": 122, "durationFrames": 42}]} totalDurationFrames={164} coreSentence={["别做他们的遮阳伞，", "去做他们的磨刀石。"]} coreSentenceAnchors={[{"coreSentenceAnchor": "遮阳伞", "color": "#EF4444"}, {"coreSentenceAnchor": "磨刀石", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/国产情怀的谎言/scene_3/scene_3.mp3")} />
        </AbsoluteFill>
    );
};
