import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWDosAndDonts, BWTextFocus } from "../../../components";

// 引入：砸特斯拉的真相
const SCENE_DURATION = 176 + 136 + 70;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={176}>
                <BWCenterFocus content={[{"text": "网上总有一群人，", "startFrame": 0, "durationFrames": 34}, {"text": "手里砸着特斯拉，", "startFrame": 33, "durationFrames": 38}, {"text": "嘴上喊着抵制外资，", "startFrame": 70, "durationFrames": 54}, {"text": "心里居然觉得自己在爱国。", "startFrame": 124, "durationFrames": 52}]} totalDurationFrames={176} imageSrc={staticFile("images/抵制特斯拉的伪爱国/scene_1_1.png")} enterEffect="fadeIn" anchors={[{"text": "抵制外资", "showFrom": 2, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={176} durationInFrames={136}>
                <BWTextFocus content={[{"text": "我今天告诉你——", "startFrame": 0, "durationFrames": 34}, {"text": "这锤子砸下去，", "startFrame": 33, "durationFrames": 40}, {"text": "每一锤都砸在中国人自己身上。", "startFrame": 73, "durationFrames": 63}]} totalDurationFrames={136} coreSentence={[{"text": "这锤子砸下去，", "showFrom": 1}, {"text": "每一锤都砸在中国人自己身上。", "showFrom": 2}]} coreSentenceAnchors={[{"coreSentenceAnchor": "砸在中国人自己身上", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={312} durationInFrames={70}>
                <BWDosAndDonts content={[{"text": "不跟你谈情绪，", "startFrame": 0, "durationFrames": 34}, {"text": "只跟你谈数据。", "startFrame": 33, "durationFrames": 36}]} totalDurationFrames={70} left={{label: "❌ 谈情绪", src: staticFile("images/抵制特斯拉的伪爱国/scene_1_3_left.png"), showFrom: 0 }} right={{label: "✅ 谈数据", src: staticFile("images/抵制特斯拉的伪爱国/scene_1_3_right.png"), showFrom: 1 }} />
            </Sequence>
            <Audio src={staticFile("/audio/抵制特斯拉的伪爱国/scene_1/scene_1.mp3")} />
        </AbsoluteFill>
    );
};
