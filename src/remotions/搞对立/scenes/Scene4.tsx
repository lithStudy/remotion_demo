import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWTextFocus } from "../../../components";

// 召唤：让道理讲透
const SCENE_DURATION = 78 + 188;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={78}>
                <BWTextFocus content={[{"text": "别让“搞对立”成了封杀思考的挡箭牌。", "startFrame": 0, "durationFrames": 78}]} totalDurationFrames={78} coreSentence={["别让“搞对立”", "成了封杀思考的挡箭牌。"]} coreSentenceAnchors={[{"coreSentenceAnchor": "封杀", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={78} durationInFrames={188}>
                <BWTextFocus content={[{"text": "我们需要的不是一个没有对立的互联网，", "startFrame": 0, "durationFrames": 78}, {"text": "而是一个即便对立，", "startFrame": 77, "durationFrames": 41}, {"text": "也能坐下来把道理讲透的环境。", "startFrame": 117, "durationFrames": 70}]} totalDurationFrames={188} coreSentence={[{"text": "即便对立", "showFrom": 1}, {"text": "也能坐下来把道理讲透的环境。", "showFrom": 2}]} coreSentenceAnchors={[{"coreSentenceAnchor": "即便对立", "color": "#EF4444"}, {"coreSentenceAnchor": "把道理讲透", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/搞对立/scene_4/scene_4.mp3")} />
        </AbsoluteFill>
    );
};
