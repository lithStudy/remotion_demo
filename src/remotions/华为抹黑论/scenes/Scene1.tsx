import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWQuoteCitation, BWSplitCompare } from "../../../components";

// 引入：抹黑还是事实
const SCENE_DURATION = 92 + 125 + 161;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={92}>
                <BWQuoteCitation content={[{"text": "有人说，", "startFrame": 0, "durationFrames": 17}, {"text": "很多人在网上无端抹黑华为。", "startFrame": 16, "durationFrames": 76}]} totalDurationFrames={92} quoteSource={"网友"} quoteDisplayText={"很多人在网上无端抹黑华为。"} anchors={[]} />
            </Sequence>
            <Sequence from={92} durationInFrames={125}>
                <BWSplitCompare content={[{"text": "这些人，", "startFrame": 0, "durationFrames": 25}, {"text": "可能不太能分清楚什么叫陈述事实，", "startFrame": 24, "durationFrames": 74}, {"text": "什么叫抹黑。", "startFrame": 97, "durationFrames": 28}]} totalDurationFrames={125} leftSrc={staticFile("images/华为抹黑论/scene_1_2_left.png")} rightSrc={staticFile("images/华为抹黑论/scene_1_2_right.png")} leftLabel={"陈述事实"} rightLabel={"抹黑"} leftShowFrom={1} rightShowFrom={2} anchors={[]} />
            </Sequence>
            <Sequence from={217} durationInFrames={161}>
                <BWCenterFocus content={[{"text": "所以我专门做一个小专题，", "startFrame": 0, "durationFrames": 55}, {"text": "来帮大家分辨一下，", "startFrame": 54, "durationFrames": 40}, {"text": "以免有些人破坏华为的口碑。", "startFrame": 93, "durationFrames": 67}]} totalDurationFrames={161} imageSrc={staticFile("images/华为抹黑论/scene_1_3.png")} enterEffect="fadeIn" anchors={[{"text": "破坏口碑", "showFrom": 2, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/华为抹黑论/scene_1/scene_1.mp3")} />
        </AbsoluteFill>
    );
};
