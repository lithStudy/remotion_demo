import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift } from "../../../components";

// 反转：认清概率
const SCENE_DURATION = 97 + 130;

export const calculateScene5Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene5: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={97}>
                <BWCenterFocus content={[{"text": "在这个崇拜赢家的时代里，", "startFrame": 0, "durationFrames": 30}, {"text": "如果你不主动去推开聚光灯外的黑暗，", "startFrame": 30, "durationFrames": 37}, {"text": "你就永远无法看清脚下的路。", "startFrame": 67, "durationFrames": 30}]} totalDurationFrames={97} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" anchors={[{"text": "崇拜赢家", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "聚光灯外", "showFrom": 1, "color": "#000000", "anim": "slideUp", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={97} durationInFrames={130}>
                <BWCognitiveShift content={[{"text": "永远记住，", "startFrame": 0, "durationFrames": 30}, {"text": "真正的清醒不是复刻别人的奇迹，", "startFrame": 30, "durationFrames": 33}, {"text": "而是认清概率后，", "startFrame": 63, "durationFrames": 30}, {"text": "依然有勇气选择那条胜算最高的正道。", "startFrame": 93, "durationFrames": 37}]} totalDurationFrames={130} notText={"复刻别人奇迹"} butText={"选胜算最高的"} butSrc={staticFile("images/template/scene1_1.png")} notContentIndex={1} butContentIndex={3} anchors={[]} />
            </Sequence>

        </AbsoluteFill>
    );
};
