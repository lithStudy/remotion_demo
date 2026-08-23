import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWMagnifyingGlass, BWPeerInduct, BWQuoteCitation, BWTextFocus } from "../../../components";

// 剖析：跑分防坑标尺
const SCENE_DURATION = 253 + 177 + 65 + 198;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={253}>
                <BWPeerInduct content={[{"text": "咱们回忆一下，", "startFrame": 0, "durationFrames": 28}, {"text": "回到十多年前，", "startFrame": 27, "durationFrames": 38}, {"text": "买手机就像开盲盒。", "startFrame": 64, "durationFrames": 45}, {"text": "导购嘴里天花乱坠，", "startFrame": 108, "durationFrames": 51}, {"text": "你根本不知道手机壳底下装的是什么级别的处理器。", "startFrame": 159, "durationFrames": 94}]} totalDurationFrames={253} premises={[{ imageSrc: staticFile("images/小米营销论/scene_2_1_img0.png"), enterEffect: "slideBottom", showFrom: 2 }, { imageSrc: staticFile("images/小米营销论/scene_2_1_img1.png"), enterEffect: "slideBottom", showFrom: 3 }]} conclusion={{ imageSrc: staticFile("images/小米营销论/scene_2_1.png"), enterEffect: "zoomIn", showFrom: 4, tone: "alert" }} />
            </Sequence>
            <Sequence from={253} durationInFrames={177}>
                <BWQuoteCitation content={[{"text": "是小米第一代喊出的那句“不服跑个分”，", "startFrame": 0, "durationFrames": 94}, {"text": "直接扯下了当时“高价低配”的遮羞布。", "startFrame": 93, "durationFrames": 83}]} totalDurationFrames={177} quoteSource={"小米第一代"} quoteDisplayText={"不服跑个分"} showFrom={0} anchors={[]} />
            </Sequence>
            <Sequence from={430} durationInFrames={65}>
                <BWTextFocus content={[{"text": "跑分俗吗？", "startFrame": 0, "durationFrames": 42}, {"text": "俗。", "startFrame": 41, "durationFrames": 23}]} totalDurationFrames={65} coreSentence={[{"text": "跑分俗吗？", "showFrom": 0, "endFrom": 0}, {"text": "俗", "showFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "俗", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={495} durationInFrames={198}>
                <BWMagnifyingGlass content={[{"text": "但它给了一个不懂技术的普通人，", "startFrame": 0, "durationFrames": 56}, {"text": "一个最直观、", "startFrame": 55, "durationFrames": 27}, {"text": "最量化的防坑标尺。", "startFrame": 81, "durationFrames": 39}, {"text": "它告诉你：", "startFrame": 119, "durationFrames": 22}, {"text": "一分钱，", "startFrame": 141, "durationFrames": 23}, {"text": "就该买到一分货。", "startFrame": 164, "durationFrames": 33}]} totalDurationFrames={198} anchors={[{"text": "防坑标尺", "showFrom": 2, "color": "#EF4444", "anim": "popIn", "audioEffect": "ping"}, {"text": "一分钱，就该买到一分货", "showFrom": 4, "color": "#EF4444", "anim": "popIn", "audioEffect": "ping"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/小米营销论/scene_2/scene_2.mp3")} />
        </AbsoluteFill>
    );
};
