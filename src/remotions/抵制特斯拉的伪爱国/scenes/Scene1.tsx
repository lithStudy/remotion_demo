import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWDosAndDonts, BWTextFocus } from "../../../components";

// 引入：砸特斯拉的真相
const SCENE_DURATION = 200 + 116 + 74;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={200}>
                <BWCenterFocus content={[{"text": "网上总有一群人，", "startFrame": 0, "durationFrames": 40}, {"text": "手里砸着特斯拉，", "startFrame": 39, "durationFrames": 39}, {"text": "嘴上喊着抵制外资，", "startFrame": 77, "durationFrames": 44}, {"text": "心里居然觉得自己在爱国。", "startFrame": 121, "durationFrames": 79}]} totalDurationFrames={200} imageSrc={staticFile("images/抵制特斯拉的伪爱国/scene_1_1.png")} enterEffect="fadeIn" anchors={[{"text": "抵制外资", "showFrom": 2, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={200} durationInFrames={116}>
                <BWTextFocus content={[{"text": "我今天告诉你——", "startFrame": 0, "durationFrames": 21}, {"text": "这锤子砸下去，", "startFrame": 20, "durationFrames": 27}, {"text": "每一锤都砸在中国人自己身上。", "startFrame": 46, "durationFrames": 69}]} totalDurationFrames={116} coreSentence={[{"text": "这锤子砸下去，", "showFrom": 1}, {"text": "每一锤都砸在中国人自己身上。", "showFrom": 2}]} coreSentenceAnchors={[{"coreSentenceAnchor": "砸在中国人自己身上", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={316} durationInFrames={74}>
                <BWDosAndDonts content={[{"text": "不跟你谈情绪，", "startFrame": 0, "durationFrames": 37}, {"text": "只跟你谈数据。", "startFrame": 36, "durationFrames": 38}]} totalDurationFrames={74} left={{label: "❌ 谈情绪", src: staticFile("images/抵制特斯拉的伪爱国/scene_1_3_left.png"), showFrom: 0 }} right={{label: "✅ 谈数据", src: staticFile("images/抵制特斯拉的伪爱国/scene_1_3_right.png"), showFrom: 1 }} />
            </Sequence>
            <Audio src={staticFile("/audio/抵制特斯拉的伪爱国/scene_1/scene_1.mp3")} />
        </AbsoluteFill>
    );
};
