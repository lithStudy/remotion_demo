import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWTextFocus } from "../../../components";

// 总结
const SCENE_DURATION = 271;

export const calculateScene6Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene6: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={271}>
                <BWTextFocus content={[{"text": "你要记住，", "startFrame": 0, "durationFrames": 24}, {"text": "沉默不是因为你口才不行，", "startFrame": 24, "durationFrames": 62}, {"text": "更不是因为你认怂。", "startFrame": 85, "durationFrames": 44}, {"text": "而是因为，真理不需要向偏见低头，", "startFrame": 128, "durationFrames": 81}, {"text": "更不需要，向愚昧做任何解释。", "startFrame": 209, "durationFrames": 61}]} totalDurationFrames={271} coreSentence={["真理不向偏见低头", "更不必向愚昧解释"]} coreSentenceAnchors={[{"coreSentenceAnchor": "不必", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/认知偏见_达克效应/scene_6/scene_6.mp3")} />
        </AbsoluteFill>
    );
};
