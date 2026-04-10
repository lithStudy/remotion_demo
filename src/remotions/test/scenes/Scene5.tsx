import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift } from "../../../components";

// 反转：认清概率
const SCENE_DURATION = 183 + 224;

export const calculateScene5Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene5: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={183}>
                <BWCenterFocus content={[{"text": "在这个崇拜赢家的时代里，", "startFrame": 0, "durationFrames": 50}, {"text": "如果你不主动去推开聚光灯外的黑暗，", "startFrame": 49, "durationFrames": 74}, {"text": "你就永远无法看清脚下的路。", "startFrame": 122, "durationFrames": 60}]} totalDurationFrames={183} imageSrc={staticFile("images/test/scene_5_1.png")} enterEffect="breathe" anchors={[{"text": "崇拜赢家", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "聚光灯外", "showFrom": 1, "color": "#000000", "anim": "slideUp", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={183} durationInFrames={224}>
                <BWCognitiveShift content={[{"text": "永远记住，", "startFrame": 0, "durationFrames": 29}, {"text": "真正的清醒不是复刻别人的奇迹，", "startFrame": 28, "durationFrames": 75}, {"text": "而是认清概率后，", "startFrame": 102, "durationFrames": 40}, {"text": "依然有勇气选择那条胜算最高的正道。", "startFrame": 141, "durationFrames": 82}]} totalDurationFrames={224} notText={"复刻别人奇迹"} butText={"选胜算最高的"} butSrc={staticFile("images/test/scene_5_2.png")} notContentIndex={1} butContentIndex={3} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/test/scene_5/scene_5.mp3")} />
        </AbsoluteFill>
    );
};
