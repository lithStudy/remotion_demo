import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCauseChain, BWCognitiveShift, BWQuoteCitation, BWTextFocus } from "../../../components";

// 驳斥：赛道无用论
const SCENE_DURATION = 90 + 202 + 134 + 182 + 253;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={90}>
                <BWQuoteCitation content={[{"text": "有人说，", "startFrame": 0, "durationFrames": 19}, {"text": "赛车什么的，", "startFrame": 18, "durationFrames": 29}, {"text": "不代表日常用车。", "startFrame": 46, "durationFrames": 43}]} totalDurationFrames={90} quoteDisplayText={"赛车什么的，不代表日常用车。"} quoteSource={"质疑者"} anchors={[]} />
            </Sequence>
            <Sequence from={90} durationInFrames={202}>
                <BWCognitiveShift content={[{"text": "确实不代表日常用车。", "startFrame": 0, "durationFrames": 48}, {"text": "但极限状态下的车也能有良好的性能，", "startFrame": 47, "durationFrames": 86}, {"text": "日常用车难道不会有更好的表现？", "startFrame": 132, "durationFrames": 69}]} totalDurationFrames={202} anchors={[{"text": "更好的表现", "showFrom": 2, "color": "#EF4444", "anim": "popIn", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={292} durationInFrames={134}>
                <BWQuoteCitation content={[{"text": "有人说，", "startFrame": 0, "durationFrames": 19}, {"text": "赛车什么的，", "startFrame": 18, "durationFrames": 32}, {"text": "是在变相鼓励超速行驶，", "startFrame": 50, "durationFrames": 53}, {"text": "更容易出事故。", "startFrame": 102, "durationFrames": 31}]} totalDurationFrames={134} quoteDisplayText={"赛车什么的，是在变相鼓励超速行驶，更容易出事故。"} quoteSource={"质疑者"} anchors={[]} />
            </Sequence>
            <Sequence from={426} durationInFrames={182}>
                <BWCauseChain content={[{"text": "这就像在说，", "startFrame": 0, "durationFrames": 27}, {"text": "菜刀不能宣传锋利，", "startFrame": 26, "durationFrames": 43}, {"text": "因为可能会被用来砍人一样。", "startFrame": 68, "durationFrames": 56}, {"text": "刀怎么用不是取决于人吗？", "startFrame": 123, "durationFrames": 58}]} totalDurationFrames={182} layout={"horizontal"} nodes={[{ label: "菜刀宣传", imageSrc: staticFile("images/汽车质量论/scene_3_4_img0.png"), showFrom: 1, enterEffect: "slideLeft" }, { label: "用于砍人", imageSrc: staticFile("images/汽车质量论/scene_3_4_img1.png"), showFrom: 2, enterEffect: "slideLeft" }]} anchors={[{"text": "取决于人", "showFrom": 3, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={608} durationInFrames={253}>
                <BWTextFocus content={[{"text": "跑赛车是为了证明，", "startFrame": 0, "durationFrames": 46}, {"text": "这车在最难的条件下，", "startFrame": 45, "durationFrames": 49}, {"text": "依然能做到该刹住时刹得住，", "startFrame": 93, "durationFrames": 63}, {"text": "该稳住时稳得住。", "startFrame": 156, "durationFrames": 47}, {"text": "不是让你当赛车来跑。", "startFrame": 202, "durationFrames": 51}]} totalDurationFrames={253} coreSentence={[{"text": "最难的条件下，", "showFrom": 1}, {"text": "该刹住时刹得住，", "showFrom": 2}, {"text": "该稳住时稳得住。", "showFrom": 3}]} coreSentenceAnchors={[{"coreSentenceAnchor": "刹得住", "color": "#EF4444"}, {"coreSentenceAnchor": "稳得住", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/汽车质量论/scene_3/scene_3.mp3")} />
        </AbsoluteFill>
    );
};
