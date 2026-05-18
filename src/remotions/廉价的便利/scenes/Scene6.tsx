import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCauseChain, BWCognitiveShift, BWTextFocus } from "../../../components";

// 警醒：便利的代价
const SCENE_DURATION = 35 + 44 + 93;

export const calculateScene6Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene6: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={35}>
                <BWTextFocus content={[{"text": "别再为“廉价的便利”沾沾自喜了。", "startFrame": 0, "durationFrames": 35}]} totalDurationFrames={35} coreSentence={["别再为“廉价的便利”沾沾自喜了。"]} coreSentenceAnchors={[{"coreSentenceAnchor": "廉价的便利", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={35} durationInFrames={44}>
                <BWCognitiveShift content={[{"text": "你以为你只是在享受别人被压榨换来的便宜，", "startFrame": 0, "durationFrames": 44}]} totalDurationFrames={44} notText={"享受压榨来的便宜"} butText={"你也将成为代价"} butSrc={staticFile("images/template/scene1_1.png")} notContentIndex={0} butContentIndex={0} anchors={[]} />
            </Sequence>
            <Sequence from={79} durationInFrames={93}>
                <BWCauseChain content={[{"text": "其实在这个巨大的齿轮里，", "startFrame": 0, "durationFrames": 30}, {"text": "迟早有一天，", "startFrame": 30, "durationFrames": 30}, {"text": "你也会成为别人享受便利的代价。", "startFrame": 60, "durationFrames": 33}]} totalDurationFrames={93} layout={"horizontal"} nodes={[{ label: "享便利", imageSrc: staticFile("images/template/scene1_1.png"), showFrom: 0 }, { label: "齿轮转", imageSrc: staticFile("images/template/scene1_1.png"), showFrom: 1 }, { label: "成代价", imageSrc: staticFile("images/template/scene1_1.png"), showFrom: 2 }]} anchors={[]} />
            </Sequence>

        </AbsoluteFill>
    );
};
