import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWBeatSequence, BWCenterFocus, BWTextFocus } from "../../../components";

// 引出现象：弹幕争吵与自我优越感
const SCENE_DURATION = 31 + 90 + 30 + 30;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={31}>
                <BWCenterFocus content={[{"text": "盯着满屏吵得不可开交的弹幕。", "startFrame": 0, "durationFrames": 31}]} totalDurationFrames={31} imageSrc={staticFile("满屏弹幕遮盖屏幕的动画")} enterEffect="breathe" anchors={[]} />
            </Sequence>
            <Sequence from={31} durationInFrames={90}>
                <BWBeatSequence content={[{"text": "你猛地一拍大腿。", "startFrame": 0, "durationFrames": 30}, {"text": "嘴里嘟囔着我就知道会这样。", "startFrame": 30, "durationFrames": 30}, {"text": "你看果然又是这群人搞的鬼。", "startFrame": 60, "durationFrames": 30}]} totalDurationFrames={90} stages={[{ imageSrc: staticFile("一个人拍打大腿"), enterEffect: "breathe", tone: "calm" }, { imageSrc: staticFile("一个人嘟囔自语"), enterEffect: "slideBottom" }, { imageSrc: staticFile("一群人鬼鬼祟祟"), enterEffect: "slideBottom" }]} anchors={[]} />
            </Sequence>
            <Sequence from={121} durationInFrames={30}>
                <BWCenterFocus content={[{"text": "这种众人皆醉我独醒的快感。", "startFrame": 0, "durationFrames": 30}]} totalDurationFrames={30} imageSrc={staticFile("一群人仰头看着天空的剪影")} enterEffect="zoomIn" anchors={[{"text": "独醒", "showFrom": 0, "color": "#EF4444", "anim": "highlight", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={151} durationInFrames={30}>
                <BWTextFocus content={[{"text": "是不是让你觉得非常爽快。", "startFrame": 0, "durationFrames": 30}]} totalDurationFrames={30} coreSentence={"是不是让你觉得非常爽快。"} coreSentenceAnchors={[{"coreSentenceAnchor": "非常爽快", "color": "#EF4444"}]} />
            </Sequence>

        </AbsoluteFill>
    );
};
