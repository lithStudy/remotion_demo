import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWMagnifyingGlass, BWQuoteCitation, BWTextFocus } from "../../../components";

// 引入：成本忽略的陷阱
const SCENE_DURATION = 130 + 99 + 107 + 111 + 98;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={130}>
                <BWTextFocus content={[{"text": "你愿意为不到0.55%的极端天气，", "startFrame": 0, "durationFrames": 92}, {"text": "多付一倍车钱吗？", "startFrame": 91, "durationFrames": 38}]} totalDurationFrames={130} coreSentence={[{"text": "你愿意为不到0.55%的极端天气，", "showFrom": 0}, {"text": "多付一倍车钱吗？", "showFrom": 1, "endFrom": 1}]} coreSentenceAnchors={[]} />
            </Sequence>
            <Sequence from={130} durationInFrames={99}>
                <BWCenterFocus content={[{"text": "现在全网都在吵，", "startFrame": 0, "durationFrames": 44}, {"text": "智驾到底该不该装雷达。", "startFrame": 43, "durationFrames": 55}]} totalDurationFrames={99} imageSrc={staticFile("images/智驾论之性价比/scene_1_2.png")} enterEffect="fadeIn" anchors={[{"text": "雷达", "showFrom": 1, "color": "#000000", "anim": "spring", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={229} durationInFrames={107}>
                <BWQuoteCitation content={[{"text": "支持雷达的人说，", "startFrame": 0, "durationFrames": 40}, {"text": "纯视觉在极端天气下会失灵。", "startFrame": 39, "durationFrames": 68}]} totalDurationFrames={107} quoteSource={"支持雷达的人"} quoteDisplayText={"纯视觉在暴雨、炫光下会失灵。"} anchors={[]} />
            </Sequence>
            <Sequence from={336} durationInFrames={111}>
                <BWQuoteCitation content={[{"text": "反对的人说，", "startFrame": 0, "durationFrames": 30}, {"text": "特斯拉已经证明了纯视觉可行。", "startFrame": 29, "durationFrames": 81}]} totalDurationFrames={111} quoteDisplayText={"特斯拉已经证明了纯视觉可行。"} quoteSource={"反对的人说"} showFrom={1} anchors={[]} />
            </Sequence>
            <Sequence from={447} durationInFrames={98}>
                <BWMagnifyingGlass content={[{"text": "但我想提醒支持的人一个简单的问题，", "startFrame": 0, "durationFrames": 71}, {"text": "成本。", "startFrame": 70, "durationFrames": 27}]} totalDurationFrames={98} anchors={[{"text": "成本", "showFrom": 1, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/智驾论之性价比/scene_1/scene_1.mp3")} />
        </AbsoluteFill>
    );
};
