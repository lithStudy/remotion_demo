import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWConceptCard, BWTextFocus } from "../../../components";

// 命名：隐形间接税
const SCENE_DURATION = 122 + 98 + 225;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={122}>
                <BWTextFocus content={[{"text": "你以为没主动交个税，", "startFrame": 0, "durationFrames": 47}, {"text": "就是没纳税？", "startFrame": 46, "durationFrames": 33}, {"text": "大错特错。", "startFrame": 79, "durationFrames": 42}]} totalDurationFrames={122} coreSentence={[{"text": "你以为没主动交个税，", "showFrom": 0, "endFrom": 0}, {"text": "就是没纳税？", "showFrom": 1, "endFrom": 1}, {"text": "大错特错。", "showFrom": 2, "endFrom": 2}]} coreSentenceAnchors={[{"coreSentenceAnchor": "大错特错", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={122} durationInFrames={98}>
                <BWCenterFocus content={[{"text": "在我们的税收体系里，", "startFrame": 0, "durationFrames": 45}, {"text": "个税只占很小的一部分。", "startFrame": 44, "durationFrames": 54}]} totalDurationFrames={98} imageSrc={staticFile("images/纳税人/scene_2_3.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={220} durationInFrames={225}>
                <BWConceptCard content={[{"text": "真正的绝对主力，", "startFrame": 0, "durationFrames": 44}, {"text": "叫做间接税，", "startFrame": 43, "durationFrames": 42}, {"text": "这是一种隐形的税法，", "startFrame": 85, "durationFrames": 44}, {"text": "它像水一样，", "startFrame": 128, "durationFrames": 34}, {"text": "渗透进你生活的每一个缝隙。", "startFrame": 162, "durationFrames": 62}]} totalDurationFrames={225} imageSrc={staticFile("images/纳税人/scene_2_4.png")} conceptName={"间接税"} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/纳税人/scene_2/scene_2.mp3")} />
        </AbsoluteFill>
    );
};
