import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWDosAndDonts, BWTextFocus } from "../../../components";

// 揭示：双标与审计质疑
const SCENE_DURATION = 125 + 93;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={125}>
                <BWDosAndDonts content={[{"text": "等下，", "startFrame": 0, "durationFrames": 18}, {"text": "既然你们愿意相信华为财报，", "startFrame": 17, "durationFrames": 58}, {"text": "为什么就不能相信我的？", "startFrame": 75, "durationFrames": 50}]} totalDurationFrames={125} left={{label: "信华为财报", src: staticFile("images/千亿研发/scene_4_1_left.png"), showFrom: 1 }} right={{label: "不信我的", src: staticFile("images/千亿研发/scene_4_1_right.png"), showFrom: 2 }} anchors={[]} />
            </Sequence>
            <Sequence from={125} durationInFrames={93}>
                <BWTextFocus content={[{"text": "你们是不是双标？", "startFrame": 0, "durationFrames": 35}, {"text": "不都没有独立三方审计吗？", "startFrame": 34, "durationFrames": 58}]} totalDurationFrames={93} coreSentence={[{"text": "你们是不是双标？", "showFrom": 0, "endFrom": 0}, {"text": "不都没有独立三方审计吗？", "showFrom": 1, "endFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "双标", "color": "#EF4444"}, {"coreSentenceAnchor": "独立三方审计", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/千亿研发/scene_4/scene_4.mp3")} />
        </AbsoluteFill>
    );
};
