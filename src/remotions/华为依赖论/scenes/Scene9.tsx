import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCognitiveShift, BWTextFocus } from "../../../components";

// 召唤：可替代才是竞争
const SCENE_DURATION = 194 + 54;

export const calculateScene9Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene9: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={194}>
                <BWCognitiveShift content={[{"text": "真正健康的产业链，", "startFrame": 0, "durationFrames": 45}, {"text": "不是‘离不开谁’，", "startFrame": 44, "durationFrames": 50}, {"text": "而是‘谁都可以被替换，", "startFrame": 93, "durationFrames": 53}, {"text": "于是谁都不敢松懈’。", "startFrame": 146, "durationFrames": 48}]} totalDurationFrames={194} notText={"离不开谁"} butText={"谁都可被替换"} butSrc={staticFile("images/华为依赖论/scene_9_1.png")} notContentIndex={1} butContentIndex={2} anchors={[]} />
            </Sequence>
            <Sequence from={194} durationInFrames={54}>
                <BWTextFocus content={[{"text": "这才是竞争的意义。", "startFrame": 0, "durationFrames": 54}]} totalDurationFrames={54} coreSentence={["这才是竞争的意义。"]} coreSentenceAnchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/华为依赖论/scene_9/scene_9.mp3")} />
        </AbsoluteFill>
    );
};
