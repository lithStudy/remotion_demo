import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWTextFocus } from "../../../components";

// 召唤：警惕群体降智
const SCENE_DURATION = 251 + 202 + 227;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={251}>
                <BWCenterFocus content={[{"text": "互联网评论区从来不是探寻真相的法庭，", "startFrame": 0, "durationFrames": 93}, {"text": "更不是严谨的实验室，", "startFrame": 92, "durationFrames": 49}, {"text": "它更像是一个情绪的排泄口与立场的罗马角斗场。", "startFrame": 140, "durationFrames": 111}]} totalDurationFrames={251} imageSrc={staticFile("images/认知陷阱3/scene_4_1.png")} enterEffect="fadeIn" anchors={[{"text": "情绪排泄口", "showFrom": 2, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "立场的罗马角斗场", "showFrom": 2, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={251} durationInFrames={202}>
                <BWCenterFocus content={[{"text": "当我们看透了这层荒诞的底色，", "startFrame": 0, "durationFrames": 60}, {"text": "就该对那些点赞极高、", "startFrame": 59, "durationFrames": 52}, {"text": "情绪极端的“断言”保持十二分的警惕。", "startFrame": 111, "durationFrames": 90}]} totalDurationFrames={202} imageSrc={staticFile("images/认知陷阱3/scene_4_2.png")} enterEffect="fadeIn" anchors={[{"text": "情绪极端的“断言”", "showFrom": 2, "color": "#EF4444", "anim": "slideUp", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={453} durationInFrames={227}>
                <BWTextFocus content={[{"text": "永远不要轻易加入任何一场网络讨伐，", "startFrame": 0, "durationFrames": 72}, {"text": "因为在群体的狂欢中，", "startFrame": 72, "durationFrames": 50}, {"text": "最先被推上祭坛的，", "startFrame": 121, "durationFrames": 46}, {"text": "往往是常识与理智。", "startFrame": 166, "durationFrames": 60}]} totalDurationFrames={227} coreSentence={["任何一场网络讨伐狂欢", "最先被推上祭坛的，往往是常识与理智"]} coreSentenceAnchors={[{"coreSentenceAnchor": "网络讨伐", "color": "red"}, {"coreSentenceAnchor": "常识与理智", "color": "red"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/认知陷阱3/scene_4/scene_4.mp3")} />
        </AbsoluteFill>
    );
};
