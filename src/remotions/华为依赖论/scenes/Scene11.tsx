import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift, BWMagnifyingGlass, BWTextFocus } from "../../../components";

// 召唤：重新定义爱国
const SCENE_DURATION = 312 + 166 + 284 + 176;

export const calculateScene11Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene11: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={312}>
                <BWCenterFocus content={[{"text": "更为神奇的是，", "startFrame": 0, "durationFrames": 40}, {"text": "这种荒诞不止发生在通信行业。", "startFrame": 39, "durationFrames": 81}, {"text": "很多其他华为参与的领域，", "startFrame": 120, "durationFrames": 53}, {"text": "都有这种类似的氛围。", "startFrame": 172, "durationFrames": 53}, {"text": "至于原因，", "startFrame": 224, "durationFrames": 27}, {"text": "咱也不敢说，咱也不敢问。", "startFrame": 250, "durationFrames": 62}]} totalDurationFrames={312} imageSrc={staticFile("images/华为依赖论/scene_11_1.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={312} durationInFrames={166}>
                <BWMagnifyingGlass content={[{"text": "记住，任何领域，", "startFrame": 0, "durationFrames": 52}, {"text": "一旦你开始觉得“离不开谁”，", "startFrame": 51, "durationFrames": 63}, {"text": "你就已经把主动权交出去了。", "startFrame": 113, "durationFrames": 53}]} totalDurationFrames={166} anchors={[{"text": "主动权", "showFrom": 2, "color": "#EF4444", "anim": "popIn", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={478} durationInFrames={284}>
                <BWCognitiveShift content={[{"text": "真正强大的系统，", "startFrame": 0, "durationFrames": 42}, {"text": "从来不是靠某一个不可替代的英雄撑起来的。", "startFrame": 41, "durationFrames": 88}, {"text": "而是靠无数个随时可以被替换的零件，", "startFrame": 128, "durationFrames": 96}, {"text": "逼着每一个都不敢偷懒。", "startFrame": 224, "durationFrames": 59}]} totalDurationFrames={284} notText={"靠不可替代的英雄"} butText={"靠可替换的零件"} butSrc={staticFile("images/华为依赖论/scene_11_3.png")} notContentIndex={1} butContentIndex={2} anchors={[]} />
            </Sequence>
            <Sequence from={762} durationInFrames={176}>
                <BWTextFocus content={[{"text": "不要把任何一家公司捧上情绪的神坛，", "startFrame": 0, "durationFrames": 82}, {"text": "否则垄断的回旋镖，终会打到你自己身上。", "startFrame": 81, "durationFrames": 94}]} totalDurationFrames={176} coreSentence={["不要把任何一家公司捧上情绪的神坛，", "否则垄断的回旋镖终会打到你自己身上。"]} coreSentenceAnchors={[{"coreSentenceAnchor": "神坛", "color": "#EF4444"}, {"coreSentenceAnchor": "垄断的回旋镖", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/华为依赖论/scene_11/scene_11.mp3")} />
        </AbsoluteFill>
    );
};
