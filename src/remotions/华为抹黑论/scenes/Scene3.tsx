import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWTextFocus } from "../../../components";

// 反转：罄竹难书，证据在此
const SCENE_DURATION = 148 + 80;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={148}>
                <BWCenterFocus content={[{"text": "抹黑华为的太多了，", "startFrame": 0, "durationFrames": 45}, {"text": "简直是罄竹难书。", "startFrame": 44, "durationFrames": 44}, {"text": "篇幅有限，", "startFrame": 88, "durationFrames": 27}, {"text": "就不再一一列举了。", "startFrame": 114, "durationFrames": 33}]} totalDurationFrames={148} imageSrc={staticFile("images/华为抹黑论/scene_3_1.png")} enterEffect="fadeIn" anchors={[{"text": "罄竹难书", "showFrom": 1, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={148} durationInFrames={80}>
                <BWTextFocus content={[{"text": "以上事实，", "startFrame": 0, "durationFrames": 27}, {"text": "尽可私信与我获取证据。", "startFrame": 26, "durationFrames": 54}]} totalDurationFrames={80} coreSentence={[{"text": "以上事实，", "showFrom": 0, "endFrom": 0}, {"text": "尽可私信与我获取证据。", "showFrom": 1, "endFrom": 1}]} coreSentenceAnchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/华为抹黑论/scene_3/scene_3.mp3")} />
        </AbsoluteFill>
    );
};
