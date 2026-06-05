import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWTextFocus } from "../../../components";

// 结语：空谈者必变节
const SCENE_DURATION = 116;

export const calculateScene6Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene6: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={116}>
                <BWTextFocus content={[{"text": "不要只爱一个抽象的词，", "startFrame": 0, "durationFrames": 39}, {"text": "也要看见组成这个词的一个个具体的人。", "startFrame": 38, "durationFrames": 78}]} totalDurationFrames={116} coreSentence={[{"text": "不要只爱一个抽象的词", "showFrom": 0}, {"text": "也要看见组成这个词的一个个具体的人", "showFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "抽象的词", "color": "#22C55E"}, {"coreSentenceAnchor": "具体的人", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/爱国先爱同胞/scene_6/scene_6.mp3")} />
        </AbsoluteFill>
    );
};
