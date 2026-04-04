import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift, BWMethodStack, BWTextFocus } from "../../../components";

// 如何保护判断力
const SCENE_DURATION = 40 + 33 + 33 + 37 + 31 + 31 + 33 + 35 + 30;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={40}>
                <BWCenterFocus content={[{"text": "面对这种被媒体和本能双重扭曲的现实。", "startFrame": 0, "durationFrames": 40}]} totalDurationFrames={40} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="slideBottom" anchors={[]} />
            </Sequence>
            <Sequence from={40} durationInFrames={33}>
                <BWCenterFocus content={[{"text": "我们该如何保护自己的判断力呢。", "startFrame": 0, "durationFrames": 33}]} totalDurationFrames={33} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" anchors={[]} />
            </Sequence>
            <Sequence from={73} durationInFrames={33}>
                <BWMethodStack content={[{"text": "第一步是学会做无情的数据信徒。", "startFrame": 0, "durationFrames": 33}]} totalDurationFrames={33} title={"成为数据信徒"} imageSrc={staticFile("images/template/scene1_1.png")} notes={[{"text": "学会做无情的决策", "showFrom": 0}]} anchors={[]} />
            </Sequence>
            <Sequence from={106} durationInFrames={37}>
                <BWCenterFocus content={[{"text": "做重大决策前先查阅真实的统计数据。", "startFrame": 0, "durationFrames": 37}]} totalDurationFrames={37} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" anchors={[{"text": "统计数据", "showFrom": 0, "color": "#000000", "anim": "spring", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={143} durationInFrames={31}>
                <BWCognitiveShift content={[{"text": "而不是凭感觉和热搜来拍脑袋。", "startFrame": 0, "durationFrames": 31}]} totalDurationFrames={31} notText={"凭感觉和热搜"} butText={"拍脑袋"} butSrc={staticFile("images/template/scene1_1.png")} notContentIndex={0} butContentIndex={0} anchors={[]} />
            </Sequence>
            <Sequence from={174} durationInFrames={31}>
                <BWMethodStack content={[{"text": "第二步是给你的新闻消费降级。", "startFrame": 0, "durationFrames": 31}]} totalDurationFrames={31} title={"减少新闻消费"} imageSrc={staticFile("images/template/scene1_1.png")} notes={[{"text": "别过度关注突发灾难", "showFrom": 0}]} anchors={[]} />
            </Sequence>
            <Sequence from={205} durationInFrames={33}>
                <BWCenterFocus content={[{"text": "减少对突发灾难新闻的过度关注。", "startFrame": 0, "durationFrames": 33}]} totalDurationFrames={33} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={238} durationInFrames={35}>
                <BWCenterFocus content={[{"text": "当你用冰冷的数据对抗滚烫的恐慌。", "startFrame": 0, "durationFrames": 35}]} totalDurationFrames={35} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" anchors={[{"text": "冰冷的数据", "showFrom": 0, "color": "#000000", "anim": "spring", "audioEffect": "ping"}, {"text": "滚烫的恐慌", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={273} durationInFrames={30}>
                <BWTextFocus content={[{"text": "你才能真正看清世界的全貌。", "startFrame": 0, "durationFrames": 30}]} totalDurationFrames={30} coreSentence={"你才能真正看清世界的全貌"} coreSentenceAnchors={[{"coreSentenceAnchor": "看清世界的全貌"}]} />
            </Sequence>

        </AbsoluteFill>
    );
};
