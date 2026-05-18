import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCognitiveShift, BWTextFocus } from "../../../components";

// 召唤：让道理讲透
const SCENE_DURATION = 40 + 101;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={40}>
                <BWTextFocus content={[{"text": "别让“搞对立”成了封杀思考的挡箭牌。", "startFrame": 0, "durationFrames": 40}]} totalDurationFrames={40} coreSentence={["别让“搞对立”成了封杀思考的挡箭牌。"]} coreSentenceAnchors={[]} />
            </Sequence>
            <Sequence from={40} durationInFrames={101}>
                <BWCognitiveShift content={[{"text": "我们需要的不是一个没有对立的互联网，", "startFrame": 0, "durationFrames": 40}, {"text": "而是一个即便对立，", "startFrame": 40, "durationFrames": 30}, {"text": "也能坐下来把道理讲透的环境。", "startFrame": 70, "durationFrames": 31}]} totalDurationFrames={101} notText={"没有对立的互联网"} butText={"对立中讲透道理"} butSrc={staticFile("images/template/scene1_1.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>

        </AbsoluteFill>
    );
};
