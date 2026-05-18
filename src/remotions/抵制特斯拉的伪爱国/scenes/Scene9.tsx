import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWBeatSequence, BWCenterFocus, BWTextFocus } from "../../../components";

// 转折·封闭不是出路
const SCENE_DURATION = 76 + 107 + 66 + 359;

export const calculateScene9Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene9: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={76}>
                <BWCenterFocus content={[{"text": "那些砸特斯拉的人，", "startFrame": 0, "durationFrames": 36}, {"text": "初衷也许是好的。", "startFrame": 36, "durationFrames": 40}]} totalDurationFrames={76} imageSrc={staticFile("images/抵制特斯拉的伪爱国/scene_9_1.png")} enterEffect="fadeIn" anchors={[{"text": "初衷", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={76} durationInFrames={107}>
                <BWTextFocus content={[{"text": "但封闭和保护，", "startFrame": 0, "durationFrames": 38}, {"text": "从来不是锻造工业强国的途径。", "startFrame": 37, "durationFrames": 70}]} totalDurationFrames={107} coreSentence={[{"text": "封闭和保护，", "showFrom": 0}, {"text": "从来不是锻造工业强国的途径。", "showFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "封闭和保护", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={183} durationInFrames={66}>
                <BWTextFocus content={[{"text": "你以为你在保护中国车企？", "startFrame": 0, "durationFrames": 66}]} totalDurationFrames={66} coreSentence={[{"text": "你以为你在保护中国车企？", "showFrom": 0}]} coreSentenceAnchors={[{"coreSentenceAnchor": "保护", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={249} durationInFrames={359}>
                <BWBeatSequence content={[{"text": "你赶走的，是那条让整个产业保持饥饿的鲶鱼。", "startFrame": 0, "durationFrames": 107}, {"text": "你剥夺的，是本土企业在最高水平竞技场上淬火的机会。", "startFrame": 106, "durationFrames": 116}, {"text": "低水平内卷，骗补贴，缺乏创新——这才是你砸出来的未来。", "startFrame": 222, "durationFrames": 136}]} totalDurationFrames={359} stages={[{ imageSrc: staticFile("images/抵制特斯拉的伪爱国/scene_9_6_img0.png"), enterEffect: "slideLeft", tone: "calm" }, { imageSrc: staticFile("images/抵制特斯拉的伪爱国/scene_9_6_img1.png"), enterEffect: "breathe", tone: "alert" }, { imageSrc: staticFile("images/抵制特斯拉的伪爱国/scene_9_6_img2.png"), enterEffect: "breathe", tone: "alert" }]} />
            </Sequence>
            <Audio src={staticFile("/audio/抵制特斯拉的伪爱国/scene_9/scene_9.mp3")} />
        </AbsoluteFill>
    );
};
