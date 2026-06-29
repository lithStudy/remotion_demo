import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCognitiveShift, BWTextFocus } from "../../../components";

// 警示：你也是代价
const SCENE_DURATION = 35 + 137;

export const calculateScene6Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene6: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={35}>
                <BWTextFocus content={[{"text": "别再为“廉价的便利”沾沾自喜了。", "startFrame": 0, "durationFrames": 35}]} totalDurationFrames={35} coreSentence={[{"text": "别再为“廉价的便利”沾沾自喜了。", "showFrom": 0}]} coreSentenceAnchors={[]} />
            </Sequence>
            <Sequence from={35} durationInFrames={137}>
                <BWCognitiveShift content={[{"text": "你以为你只是在享受别人被压榨换来的便宜，", "startFrame": 0, "durationFrames": 44}, {"text": "其实在这个巨大的齿轮里，", "startFrame": 44, "durationFrames": 30}, {"text": "迟早有一天，", "startFrame": 74, "durationFrames": 30}, {"text": "你也会成为别人享受便利的代价。", "startFrame": 104, "durationFrames": 33}]} totalDurationFrames={137} notText={"享受别人被压榨换来的便宜"} butText={"你也会成为代价"} butSrc={staticFile("images/template/scene1_1.png")} notContentIndex={0} butContentIndex={3} anchors={[]} />
            </Sequence>

        </AbsoluteFill>
    );
};
