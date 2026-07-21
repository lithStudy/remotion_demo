import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWTextFocus } from "../../../components";

// 结语：看见具体的人
const SCENE_DURATION = 121;

export const calculateScene6Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene6: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={121}>
                <BWTextFocus content={[{"text": "不要只爱一个抽象的词，", "startFrame": 0, "durationFrames": 41}, {"text": "也要看见组成这个词的一个个具体的人。", "startFrame": 40, "durationFrames": 81}]} totalDurationFrames={121} coreSentence={[{"text": "不要只爱一个抽象的词，", "showFrom": 0}, {"text": "也要看见组成这个词的一个个具体的人。", "showFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "抽象的词", "color": "#EF4444"}, {"coreSentenceAnchor": "具体的人", "color": "#22C55E"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/爱国先爱同胞/scene_6/scene_6.mp3")} />
        </AbsoluteFill>
    );
};
