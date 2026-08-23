import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWConceptCard, BWTextFocus } from "../../../components";

// 剖析·鲶鱼效应
const SCENE_DURATION = 68 + 93 + 108;

export const calculateScene5Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene5: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={68}>
                <BWCenterFocus content={[{"text": "而这些，", "startFrame": 0, "durationFrames": 20}, {"text": "还只是冰山一角而已。", "startFrame": 19, "durationFrames": 48}]} totalDurationFrames={68} imageSrc={staticFile("images/抵制特斯拉的伪爱国/scene_5_1.png")} enterEffect="fadeIn" anchors={[{"text": "表面", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={68} durationInFrames={93}>
                <BWTextFocus content={[{"text": "你看不见的地方，", "startFrame": 0, "durationFrames": 38}, {"text": "才是真正改变格局的力量。", "startFrame": 37, "durationFrames": 56}]} totalDurationFrames={93} coreSentence={[{"text": "你看不见的地方，", "showFrom": 0, "endFrom": 0}, {"text": "才是真正改变格局的力量。", "showFrom": 1, "endFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "格局的力量"}]} />
            </Sequence>
            <Sequence from={161} durationInFrames={108}>
                <BWConceptCard content={[{"text": "特斯拉进中国，最重要的是产生了鲶鱼效应。", "startFrame": 0, "durationFrames": 108}]} totalDurationFrames={108} imageSrc={staticFile("images/抵制特斯拉的伪爱国/scene_5_3.png")} conceptName={"鲶鱼效应"} />
            </Sequence>
            <Audio src={staticFile("/audio/抵制特斯拉的伪爱国/scene_5/scene_5.mp3")} />
        </AbsoluteFill>
    );
};
