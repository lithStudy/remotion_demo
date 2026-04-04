import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWBeatSequence, BWCenterFocus, BWTextFocus } from "../../../components";

// 引出现象：弹幕争吵与自我优越感
const SCENE_DURATION = 77 + 182 + 66 + 52;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={77}>
                <BWCenterFocus content={[{"text": "盯着满屏吵得不可开交的弹幕。", "startFrame": 0, "durationFrames": 77}]} totalDurationFrames={77} imageSrc={staticFile("images/认知偏见_确认偏误/scene_1_1.png")} enterEffect="breathe" anchors={[]} />
            </Sequence>
            <Sequence from={77} durationInFrames={182}>
                <BWBeatSequence content={[{"text": "你猛地一拍大腿。", "startFrame": 0, "durationFrames": 37}, {"text": "嘴里嘟囔着我就知道会这样。", "startFrame": 36, "durationFrames": 81}, {"text": "你看果然又是这群人搞的鬼。", "startFrame": 116, "durationFrames": 65}]} totalDurationFrames={182} stages={[{ imageSrc: staticFile("images/认知偏见_确认偏误/scene_1_2_img0.png"), enterEffect: "breathe", tone: "calm" }, { imageSrc: staticFile("images/认知偏见_确认偏误/scene_1_2_img1.png"), enterEffect: "slideBottom" }, { imageSrc: staticFile("images/认知偏见_确认偏误/scene_1_2_img2.png"), enterEffect: "slideBottom" }]} anchors={[]} />
            </Sequence>
            <Sequence from={259} durationInFrames={66}>
                <BWCenterFocus content={[{"text": "这种众人皆醉我独醒的快感。", "startFrame": 0, "durationFrames": 66}]} totalDurationFrames={66} imageSrc={staticFile("images/认知偏见_确认偏误/scene_1_3.png")} enterEffect="zoomIn" anchors={[{"text": "独醒", "showFrom": 0, "color": "#EF4444", "anim": "highlight", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={325} durationInFrames={52}>
                <BWTextFocus content={[{"text": "是不是让你觉得非常爽快。", "startFrame": 0, "durationFrames": 52}]} totalDurationFrames={52} coreSentence={"是不是让你觉得非常爽快。"} coreSentenceAnchors={[{"coreSentenceAnchor": "非常爽快", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/认知偏见_确认偏误/scene_1/scene_1.mp3")} />
        </AbsoluteFill>
    );
};
