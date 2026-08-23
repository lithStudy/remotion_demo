import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWTextFocus } from "../../../components";

// 反转：提纯机制
const SCENE_DURATION = 94 + 105;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={94}>
                <BWCenterFocus content={[{"text": "当一个企业这么做的时候，", "startFrame": 0, "durationFrames": 50}, {"text": "你就该知道，", "startFrame": 49, "durationFrames": 17}, {"text": "这是在提纯。", "startFrame": 65, "durationFrames": 29}]} totalDurationFrames={94} imageSrc={staticFile("images/客户提纯论/scene_3_1.png")} enterEffect="fadeIn" anchors={[{"text": "提纯", "showFrom": 2, "color": "#EF4444", "anim": "highlight", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={94} durationInFrames={105}>
                <BWTextFocus content={[{"text": "提纯出最蠢的人，", "startFrame": 0, "durationFrames": 41}, {"text": "花最多的钱，", "startFrame": 40, "durationFrames": 30}, {"text": "买最烂的产品。", "startFrame": 69, "durationFrames": 35}]} totalDurationFrames={105} coreSentence={[{"text": "提纯出最蠢的人。 ", "showFrom": 0}, {"text": "花最多的钱。 ", "showFrom": 1}, {"text": "买最烂的产品。 ", "showFrom": 2}]} coreSentenceAnchors={[{"coreSentenceAnchor": "最蠢", "color": "red"}, {"coreSentenceAnchor": "最多", "color": "red"}, {"coreSentenceAnchor": "最烂", "color": "red"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/客户提纯论/scene_3/scene_3.mp3")} />
        </AbsoluteFill>
    );
};
