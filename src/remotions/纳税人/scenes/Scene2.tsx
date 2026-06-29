import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWConceptCard, BWTextFocus } from "../../../components";

// 命名：隐形间接税
const SCENE_DURATION = 120 + 94 + 222;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={120}>
                <BWTextFocus content={[{"text": "你以为没主动交个税，", "startFrame": 0, "durationFrames": 42}, {"text": "就是没纳税？", "startFrame": 41, "durationFrames": 35}, {"text": "大错特错。", "startFrame": 76, "durationFrames": 44}]} totalDurationFrames={120} coreSentence={[{"text": "你以为没主动交个税，", "showFrom": 0, "endFrom": 0}, {"text": "就是没纳税？", "showFrom": 1, "endFrom": 1}, {"text": "大错特错。", "showFrom": 2, "endFrom": 2}]} coreSentenceAnchors={[{"coreSentenceAnchor": "大错特错", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={120} durationInFrames={94}>
                <BWCenterFocus content={[{"text": "在我们的税收体系里，", "startFrame": 0, "durationFrames": 44}, {"text": "个税只占很小的一部分。", "startFrame": 43, "durationFrames": 51}]} totalDurationFrames={94} imageSrc={staticFile("images/纳税人/scene_2_3.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={214} durationInFrames={222}>
                <BWConceptCard content={[{"text": "真正的绝对主力，", "startFrame": 0, "durationFrames": 40}, {"text": "叫做间接税，", "startFrame": 39, "durationFrames": 43}, {"text": "这是一种隐形的税法，", "startFrame": 81, "durationFrames": 47}, {"text": "它像水一样，", "startFrame": 128, "durationFrames": 32}, {"text": "渗透进你生活的每一个缝隙。", "startFrame": 160, "durationFrames": 61}]} totalDurationFrames={222} imageSrc={staticFile("images/纳税人/scene_2_4.png")} conceptName={"间接税"} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/纳税人/scene_2/scene_2.mp3")} />
        </AbsoluteFill>
    );
};
