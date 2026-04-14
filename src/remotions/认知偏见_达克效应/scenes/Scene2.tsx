import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWConceptCard } from "../../../components";

// 剖析
const SCENE_DURATION = 199 + 60 + 346;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={199}>
                <BWCenterFocus content={[{"text": "简单来说，", "startFrame": 0, "durationFrames": 28}, {"text": "如果你在某个领域能力极度匮乏，", "startFrame": 27, "durationFrames": 74}, {"text": "你也就同时失去了“意识到自己没能力”的能力。", "startFrame": 100, "durationFrames": 99}]} totalDurationFrames={199} imageSrc={staticFile("images/认知偏见_达克效应/scene_2_1.png")} enterEffect="fadeIn" anchors={[{"text": "元认知", "showFrom": 2, "color": "#000000", "anim": "spring", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={199} durationInFrames={60}>
                <BWConceptCard content={[{"text": "这种评估能力叫“元认知”。", "startFrame": 0, "durationFrames": 60}]} totalDurationFrames={60} imageSrc={staticFile("images/认知偏见_达克效应/scene_2_2.png")} conceptName={"元认知"} anchors={[]} />
            </Sequence>
            <Sequence from={259} durationInFrames={346}>
                <BWCenterFocus content={[{"text": "就像是一个人站在镜子外观察自己。", "startFrame": 0, "durationFrames": 77}, {"text": "一般人都能从镜子中认识到自己，", "startFrame": 76, "durationFrames": 69}, {"text": "然而，蠢人的镜子，", "startFrame": 145, "durationFrames": 52}, {"text": "却从出厂那天起就是碎的，", "startFrame": 196, "durationFrames": 78}, {"text": "他们完全无法意识到自己存在的问题。", "startFrame": 274, "durationFrames": 71}]} totalDurationFrames={346} imageSrc={staticFile("images/认知偏见_达克效应/scene_2_3.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/认知偏见_达克效应/scene_2/scene_2.mp3")} />
        </AbsoluteFill>
    );
};
