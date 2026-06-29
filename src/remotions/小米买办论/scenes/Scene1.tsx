import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWTextFocus } from "../../../components";

// 引入·买办论两大理由
const SCENE_DURATION = 125 + 149;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={125}>
                <BWTextFocus content={[{"text": "小米是买办，", "startFrame": 0, "durationFrames": 33}, {"text": "因为他的注册地在海外，", "startFrame": 32, "durationFrames": 47}, {"text": "还有没被美国制裁。", "startFrame": 79, "durationFrames": 45}]} totalDurationFrames={125} coreSentence={[{"text": "小米是买办，", "showFrom": 0}, {"text": "因为他的注册地在海外，", "showFrom": 1}, {"text": "还有没被美国制裁。", "showFrom": 2, "endFrom": 2}]} coreSentenceAnchors={[{"coreSentenceAnchor": "买办", "color": "#EF4444"}, {"coreSentenceAnchor": "海外", "color": "#EF4444"}, {"coreSentenceAnchor": "制裁", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={125} durationInFrames={149}>
                <BWCenterFocus content={[{"text": "这种智慧言论太多了，还总是拿华为出来对比。", "startFrame": 0, "durationFrames": 104}, {"text": "所以今天我们来分析一下。", "startFrame": 103, "durationFrames": 46}]} totalDurationFrames={149} imageSrc={staticFile("images/小米买办论/scene_1_2.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/小米买办论/scene_1/scene_1.mp3")} />
        </AbsoluteFill>
    );
};
