import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile, Freeze } from "remotion";
import { BWCognitiveShift, BWPunchCaption, BWTextFocus } from "../../../components";

// 召唤：嗓门与权力
const SCENE_DURATION = 74 + 115 + 142;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={74}>
                <BWPunchCaption content={[{"text": "别再拿「传得久」当免检金牌。", "startFrame": 0, "durationFrames": 74}]} totalDurationFrames={74} punches={[{"text": "别再拿「传得久」", "showFrom": 0, "enterEffect": "popIn", "tone": "calm"}, {"text": "当免检金牌", "showFrom": 0, "enterEffect": "shake", "tone": "alert"}]} />
            </Sequence>
            <Sequence from={74} durationInFrames={115}>
                <BWCognitiveShift content={[{"text": "时间会保存很多东西。", "startFrame": 0, "durationFrames": 52}, {"text": "但不会证明哪些东西是对的。", "startFrame": 51, "durationFrames": 64}]} totalDurationFrames={115} notText={"时间能证明对错"} butText={"时间只保存不证明"} butSrc={staticFile("images/千年传承论/scene_4_2.png")} notContentIndex={1} butContentIndex={0} anchors={[]} />
            </Sequence>
            <Sequence from={189} durationInFrames={117}>
                <BWTextFocus content={[{"text": "传下来的，", "startFrame": 0, "durationFrames": 31}, {"text": "常常不是真理。", "startFrame": 30, "durationFrames": 35}, {"text": "是权力，是嗓门。", "startFrame": 64, "durationFrames": 52}]} totalDurationFrames={117} coreSentence={[{"text": "传下来的，", "showFrom": 0, "endFrom": 0}, {"text": "常常不是真理。", "showFrom": 1, "endFrom": 2}, {"text": "是权力，是嗓门。", "showFrom": 2, "endFrom": 2}]} coreSentenceAnchors={[{"coreSentenceAnchor": "权力", "color": "#EF4444"}, {"coreSentenceAnchor": "嗓门", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={306} durationInFrames={25}>
                <Freeze frame={116}>
                    <BWTextFocus content={[{"text": "传下来的，", "startFrame": 0, "durationFrames": 31}, {"text": "常常不是真理。", "startFrame": 30, "durationFrames": 35}, {"text": "是权力，是嗓门。", "startFrame": 64, "durationFrames": 52}]} totalDurationFrames={117} coreSentence={[{"text": "传下来的，", "showFrom": 0, "endFrom": 0}, {"text": "常常不是真理。", "showFrom": 1, "endFrom": 2}, {"text": "是权力，是嗓门。", "showFrom": 2, "endFrom": 2}]} coreSentenceAnchors={[{"coreSentenceAnchor": "权力", "color": "#EF4444"}, {"coreSentenceAnchor": "嗓门", "color": "#EF4444"}]} />
                </Freeze>
            </Sequence>
            <Audio src={staticFile("/audio/千年传承论/scene_4/scene_4.mp3")} />
        </AbsoluteFill>
    );
};
