import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWBeatSequence, BWCenterFocus, BWTextFocus } from "../../../components";

// 转折·封闭不是出路
const SCENE_DURATION = 94 + 100 + 58 + 382;

export const calculateScene9Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene9: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={94}>
                <BWCenterFocus content={[{"text": "那些砸特斯拉的人，", "startFrame": 0, "durationFrames": 53}, {"text": "初衷也许是好的。", "startFrame": 52, "durationFrames": 42}]} totalDurationFrames={94} imageSrc={staticFile("images/抵制特斯拉的伪爱国/scene_9_1.png")} enterEffect="fadeIn" anchors={[{"text": "初衷", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={94} durationInFrames={100}>
                <BWTextFocus content={[{"text": "但封闭和保护，", "startFrame": 0, "durationFrames": 41}, {"text": "从来不是锻造工业强国的途径。", "startFrame": 40, "durationFrames": 60}]} totalDurationFrames={100} coreSentence={[{"text": "封闭和保护，", "showFrom": 0}, {"text": "从来不是锻造工业强国的途径。", "showFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "封闭和保护", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={194} durationInFrames={58}>
                <BWTextFocus content={[{"text": "你以为你在保护中国车企？", "startFrame": 0, "durationFrames": 58}]} totalDurationFrames={58} coreSentence={[{"text": "你以为你在保护中国车企？", "showFrom": 0}]} coreSentenceAnchors={[{"coreSentenceAnchor": "保护", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={252} durationInFrames={382}>
                <BWBeatSequence content={[{"text": "你赶走的，是那条让整个产业保持饥饿的鲶鱼。", "startFrame": 0, "durationFrames": 107}, {"text": "你剥夺的，是本土企业在最高水平竞技场上淬火的机会。", "startFrame": 106, "durationFrames": 131}, {"text": "低水平内卷，骗补贴，缺乏创新——这才是你砸出来的未来。", "startFrame": 236, "durationFrames": 145}]} totalDurationFrames={382} stages={[{ imageSrc: staticFile("images/抵制特斯拉的伪爱国/scene_9_6_img0.png"), enterEffect: "slideLeft", tone: "calm" }, { imageSrc: staticFile("images/抵制特斯拉的伪爱国/scene_9_6_img1.png"), enterEffect: "breathe", tone: "alert" }, { imageSrc: staticFile("images/抵制特斯拉的伪爱国/scene_9_6_img2.png"), enterEffect: "breathe", tone: "alert" }]} />
            </Sequence>
            <Audio src={staticFile("/audio/抵制特斯拉的伪爱国/scene_9/scene_9.mp3")} />
        </AbsoluteFill>
    );
};
