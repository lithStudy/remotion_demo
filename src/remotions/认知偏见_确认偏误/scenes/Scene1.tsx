import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWBeatSequence, BWCenterFocus, BWTextFocus } from "../../../components";

// 引出现象：弹幕争吵与自我优越感
const SCENE_DURATION = 68 + 182 + 64 + 49;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={68}>
                <BWCenterFocus content={[{"text": "盯着满屏吵得不可开交的弹幕。", "startFrame": 0, "durationFrames": 68}]} totalDurationFrames={68} imageSrc={staticFile("images/认知偏见_确认偏误/scene_1_1.png")} enterEffect="breathe" anchors={[]} />
            </Sequence>
            <Sequence from={68} durationInFrames={182}>
                <BWBeatSequence content={[{"text": "你猛地一拍大腿。", "startFrame": 0, "durationFrames": 44}, {"text": "嘴里嘟囔着我就知道会这样。", "startFrame": 43, "durationFrames": 74}, {"text": "你看果然又是这群人搞的鬼。", "startFrame": 116, "durationFrames": 65}]} totalDurationFrames={182} stages={[{ imageSrc: staticFile("images/认知偏见_确认偏误/scene_1_2_img0.png"), enterEffect: "breathe", tone: "calm" }, { imageSrc: staticFile("images/认知偏见_确认偏误/scene_1_2_img1.png"), enterEffect: "slideBottom" }, { imageSrc: staticFile("images/认知偏见_确认偏误/scene_1_2_img2.png"), enterEffect: "slideBottom" }]} anchors={[]} />
            </Sequence>
            <Sequence from={250} durationInFrames={64}>
                <BWCenterFocus content={[{"text": "这种众人皆醉我独醒的快感。", "startFrame": 0, "durationFrames": 64}]} totalDurationFrames={64} imageSrc={staticFile("images/认知偏见_确认偏误/scene_1_3.png")} enterEffect="zoomIn" anchors={[{"text": "独醒", "showFrom": 0, "color": "#EF4444", "anim": "highlight", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={314} durationInFrames={49}>
                <BWTextFocus content={[{"text": "是不是让你觉得非常爽快。", "startFrame": 0, "durationFrames": 49}]} totalDurationFrames={49} coreSentence={["是不是让你觉得非常爽快。"]} coreSentenceAnchors={[{"coreSentenceAnchor": "非常爽快", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/认知偏见_确认偏误/scene_1/scene_1.mp3")} />
        </AbsoluteFill>
    );
};
