import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWStepList, BWTextFocus } from "../../../components";

// 召唤·数据与降级
const SCENE_DURATION = 168 + 258 + 167;

export const calculateScene5Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene5: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={168}>
                <BWCenterFocus content={[{"text": "面对这种被媒体和本能双重扭曲的现实。", "startFrame": 0, "durationFrames": 99}, {"text": "我们该如何保护自己的判断力呢。", "startFrame": 98, "durationFrames": 70}]} totalDurationFrames={168} imageSrc={staticFile("images/认知偏见_可得性启发/scene_5_1.png")} enterEffect="fadeIn" anchors={[{"text": "双重扭曲", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "保护判断力", "showFrom": 1, "color": "#000000", "anim": "popIn", "audioEffect": null}]} />
            </Sequence>
            <Sequence from={168} durationInFrames={258}>
                <BWStepList content={[{"text": "记住这几个准则。", "startFrame": 0, "durationFrames": 42}, {"text": "上热搜不等于很常见。", "startFrame": 41, "durationFrames": 68}, {"text": "容易想起来不等于真的重要。", "startFrame": 109, "durationFrames": 62}, {"text": "用数据校准你被媒体扭曲的直觉。", "startFrame": 170, "durationFrames": 88}]} totalDurationFrames={258} steps={[{"text": "上热搜 不等于 很常见", "showFrom": 1}, {"text": "容易想起来 不等于 真的重要", "showFrom": 2}, {"text": "用数据校准你被媒体扭曲的直觉", "showFrom": 3}]} anchors={[]} />
            </Sequence>
            <Sequence from={426} durationInFrames={167}>
                <BWTextFocus content={[{"text": "记住，", "startFrame": 0, "durationFrames": 18}, {"text": "只有用真实的数据对抗带有偏见的直觉，", "startFrame": 17, "durationFrames": 88}, {"text": "你才能真正看清世界的全貌。", "startFrame": 104, "durationFrames": 62}]} totalDurationFrames={167} coreSentence={"只有用数据对抗直觉，你才能真正看清世界的全貌。"} coreSentenceAnchors={[{"coreSentenceAnchor": "看清世界的全貌", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/认知偏见_可得性启发/scene_5/scene_5.mp3")} />
        </AbsoluteFill>
    );
};
