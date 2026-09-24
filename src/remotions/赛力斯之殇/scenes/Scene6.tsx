import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile, Freeze } from "remotion";
import { BWCauseChain, BWCenterFocus, BWCognitiveShift, BWTextFocus } from "../../../components";

// 召唤：定义权
const SCENE_DURATION = 112 + 182 + 140 + 96 + 143;

export const calculateScene6Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene6: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={112}>
                <BWCognitiveShift content={[{"text": "不只是赛力斯。", "startFrame": 0, "durationFrames": 31}, {"text": "所有跨界合作，", "startFrame": 30, "durationFrames": 33}, {"text": "最后都会撞上同一道墙。", "startFrame": 63, "durationFrames": 49}]} totalDurationFrames={112} notText={"只是赛力斯"} butText={"跨界合作撞墙"} butSrc={staticFile("images/赛力斯之殇/scene_6_1.png")} notContentIndex={0} butContentIndex={2} anchors={[]} />
            </Sequence>
            <Sequence from={112} durationInFrames={182}>
                <BWCauseChain content={[{"text": "谁掌握产品定义权，", "startFrame": 0, "durationFrames": 43}, {"text": "谁就掌握利润分配权。", "startFrame": 42, "durationFrames": 52}, {"text": "谁掌握利润分配权，", "startFrame": 93, "durationFrames": 41}, {"text": "谁就掌握一个企业的生死。", "startFrame": 134, "durationFrames": 48}]} totalDurationFrames={182} layout={"horizontal"} nodes={[{ label: "产品定义权", imageSrc: staticFile("images/赛力斯之殇/scene_6_2_img0.png"), showFrom: 0 }, { label: "利润分配权", imageSrc: staticFile("images/赛力斯之殇/scene_6_2_img1.png"), showFrom: 1 }, { label: "企业生死", imageSrc: staticFile("images/赛力斯之殇/scene_6_2_img2.png"), showFrom: 3 }]} anchors={[]} />
            </Sequence>
            <Sequence from={294} durationInFrames={140}>
                <BWTextFocus content={[{"text": "流水的车厂，", "startFrame": 0, "durationFrames": 32}, {"text": "铁打的华为。", "startFrame": 31, "durationFrames": 36}, {"text": "现在是问界，其他四界还会远吗？", "startFrame": 67, "durationFrames": 72}]} totalDurationFrames={140} coreSentence={[{"text": "流水的车厂，", "showFrom": 0, "endFrom": 0}, {"text": "铁打的华为。", "showFrom": 1, "endFrom": 1}, {"text": "现在是问界，其他四界还会远吗？", "showFrom": 2}]} coreSentenceAnchors={[{"coreSentenceAnchor": "铁打的华为", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={434} durationInFrames={96}>
                <BWCenterFocus content={[{"text": "哦，对了。", "startFrame": 0, "durationFrames": 22}, {"text": "这次重组，痛的不只是赛力斯。", "startFrame": 21, "durationFrames": 75}]} totalDurationFrames={96} imageSrc={staticFile("images/赛力斯之殇/scene_6_4.png")} enterEffect="fadeIn" anchors={[{"text": "重组", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={530} durationInFrames={118}>
                <BWTextFocus content={[{"text": "当初冲着含华量买问界的车主，", "startFrame": 0, "durationFrames": 65}, {"text": "你们以后如何看待自己的车？", "startFrame": 64, "durationFrames": 54}]} totalDurationFrames={118} coreSentence={[{"text": "当初冲着含华量买问界的车主，", "showFrom": 0}, {"text": "你们以后如何看待自己的车？", "showFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "含华量", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={648} durationInFrames={25}>
                <Freeze frame={117}>
                    <BWTextFocus content={[{"text": "当初冲着含华量买问界的车主，", "startFrame": 0, "durationFrames": 65}, {"text": "你们以后如何看待自己的车？", "startFrame": 64, "durationFrames": 54}]} totalDurationFrames={118} coreSentence={[{"text": "当初冲着含华量买问界的车主，", "showFrom": 0}, {"text": "你们以后如何看待自己的车？", "showFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "含华量", "color": "#EF4444"}]} />
                </Freeze>
            </Sequence>
            <Audio src={staticFile("/audio/赛力斯之殇/scene_6/scene_6.mp3")} />
        </AbsoluteFill>
    );
};
