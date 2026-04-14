import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWTextFocus } from "../../../components";

// 收束
const SCENE_DURATION = 145;

export const calculateScene5Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene5: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={145}>
                <BWTextFocus content={[{"text": "最后你会发现，", "startFrame": 0, "durationFrames": 36}, {"text": "当你不再需要骗自己很行的时候，", "startFrame": 36, "durationFrames": 66}, {"text": "你才真正开始变强。", "startFrame": 101, "durationFrames": 44}]} totalDurationFrames={145} coreSentence={["当你不再需要骗自己很行的时候", "你才真正开始变强"]} coreSentenceAnchors={[{"coreSentenceAnchor": "骗自己很行", "color": "#EF4444"}, {"coreSentenceAnchor": "真正开始变强", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/认知偏差_自利偏差/scene_5/scene_5.mp3")} />
        </AbsoluteFill>
    );
};
