import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWMagnifyingGlass, BWPeerInduct, BWQuoteCitation, BWTextFocus } from "../../../components";

// 剖析：跑分防坑标尺
const SCENE_DURATION = 171 + 82 + 60 + 183;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={171}>
                <BWPeerInduct content={[{"text": "咱们回忆一下，", "startFrame": 0, "durationFrames": 30}, {"text": "回到十多年前，", "startFrame": 30, "durationFrames": 30}, {"text": "买手机就像开盲盒。", "startFrame": 60, "durationFrames": 30}, {"text": "导购嘴里天花乱坠，", "startFrame": 90, "durationFrames": 30}, {"text": "你根本不知道手机壳底下装的是什么级别的处理器。", "startFrame": 120, "durationFrames": 51}]} totalDurationFrames={171} premises={[{ imageSrc: staticFile("一个神秘礼品盒打开，里面赫然是一台未拆封的手机，盲盒般的惊喜与未知"), enterEffect: "slideBottom", showFrom: 2 }, { imageSrc: staticFile("导购员夸张地张嘴说话，嘴里飘出绚丽虚假的花朵，天花乱坠的视觉效果"), enterEffect: "slideBottom", showFrom: 3 }]} conclusion={{ imageSrc: staticFile("一个手机后盖被撬开，内部主板位置只有一个巨大的发光问号，神秘莫测"), enterEffect: "zoomIn", showFrom: 4, tone: "alert" }} anchors={[]} />
            </Sequence>
            <Sequence from={171} durationInFrames={82}>
                <BWQuoteCitation content={[{"text": "是小米第一代喊出的那句“不服跑个分”，", "startFrame": 0, "durationFrames": 42}, {"text": "直接扯下了当时“高价低配”的遮羞布。", "startFrame": 42, "durationFrames": 40}]} totalDurationFrames={82} quoteSource={"小米第一代"} quoteDisplayText={"不服跑个分"} showFrom={0} anchors={[]} />
            </Sequence>
            <Sequence from={253} durationInFrames={60}>
                <BWTextFocus content={[{"text": "跑分俗吗？", "startFrame": 0, "durationFrames": 30}, {"text": "俗。", "startFrame": 30, "durationFrames": 30}]} totalDurationFrames={60} coreSentence={[{"text": "跑分俗吗？", "showFrom": 0, "endFrom": 0}, {"text": "俗", "showFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "俗", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={313} durationInFrames={183}>
                <BWMagnifyingGlass content={[{"text": "但它给了一个不懂技术的普通人，", "startFrame": 0, "durationFrames": 33}, {"text": "一个最直观、", "startFrame": 33, "durationFrames": 30}, {"text": "最量化的防坑标尺。", "startFrame": 63, "durationFrames": 30}, {"text": "它告诉你：", "startFrame": 93, "durationFrames": 30}, {"text": "一分钱，", "startFrame": 123, "durationFrames": 30}, {"text": "就该买到一分货。", "startFrame": 153, "durationFrames": 30}]} totalDurationFrames={183} anchors={[{"text": "防坑标尺", "showFrom": 2, "color": "#EF4444", "anim": "popIn", "audioEffect": "ping"}, {"text": "一分钱，就该买到一分货", "showFrom": 4, "color": "#EF4444", "anim": "popIn", "audioEffect": "ping"}]} />
            </Sequence>

        </AbsoluteFill>
    );
};
