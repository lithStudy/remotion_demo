import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCognitiveShift, BWConceptCard, BWMagnifyingGlass, BWTextFocus } from "../../../components";

// 大脑改不了四肢
const SCENE_DURATION = 51 + 156 + 210 + 151;

export const calculateScene5Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene5: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={51}>
                <BWConceptCard content={[{"text": "操控性能也是同理。", "startFrame": 0, "durationFrames": 51}]} totalDurationFrames={51} imageSrc={staticFile("images/华为造车论/scene_5_1.png")} conceptName={"操控性能"} anchors={[]} />
            </Sequence>
            <Sequence from={51} durationInFrames={156}>
                <BWMagnifyingGlass content={[{"text": "华为途灵平台，", "startFrame": 0, "durationFrames": 42}, {"text": "据说能感知路面。", "startFrame": 41, "durationFrames": 33}, {"text": "也能协同动力、制动和悬架。", "startFrame": 74, "durationFrames": 82}]} totalDurationFrames={156} anchors={[{"text": "感知路面", "showFrom": 1, "color": "#EF4444", "anim": "highlight", "audioEffect": "ping"}, {"text": "动力、制动和悬架", "showFrom": 2, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={207} durationInFrames={210}>
                <BWCognitiveShift content={[{"text": "它可能像一颗聪明的大脑。", "startFrame": 0, "durationFrames": 59}, {"text": "但悬架结构、", "startFrame": 58, "durationFrames": 35}, {"text": "转向控制、", "startFrame": 93, "durationFrames": 33}, {"text": "制动硬件和轮胎，", "startFrame": 126, "durationFrames": 45}, {"text": "才是车的四肢。", "startFrame": 171, "durationFrames": 39}]} totalDurationFrames={210} notText={"聪明大脑"} butText={"悬架、转向、制动和轮胎"} butSrc={staticFile("images/华为造车论/scene_5_3.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Sequence from={417} durationInFrames={151}>
                <BWTextFocus content={[{"text": "大脑也许能优化四肢的协调。", "startFrame": 0, "durationFrames": 69}, {"text": "却不能凭空改变四肢的机械上限。", "startFrame": 68, "durationFrames": 83}]} totalDurationFrames={151} coreSentence={[{"text": "大脑也许能优化四肢的协调。", "showFrom": 0, "endFrom": 0}, {"text": "却不能凭空改变四肢的机械上限。", "showFrom": 1, "endFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "机械上限", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/华为造车论/scene_5/scene_5.mp3")} />
        </AbsoluteFill>
    );
};
