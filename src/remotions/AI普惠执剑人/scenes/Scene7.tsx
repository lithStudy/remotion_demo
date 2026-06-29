import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWMagnifyingGlass, BWPanelGrid, BWTextFocus } from "../../../components";

// 普惠
const SCENE_DURATION = 276 + 42 + 189 + 198 + 130;

export const calculateScene7Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene7: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={276}>
                <BWCenterFocus content={[{"text": "这件事的意义，", "startFrame": 0, "durationFrames": 35}, {"text": "是为普通人在AI时代重新分配机会。", "startFrame": 34, "durationFrames": 85}, {"text": "一个小开发者、一个小公司，", "startFrame": 119, "durationFrames": 66}, {"text": "都能以极致的价格用上最前沿的AI。", "startFrame": 184, "durationFrames": 91}]} totalDurationFrames={276} imageSrc={staticFile("images/AI普惠执剑人/scene_7_1.png")} anchors={[]} />
            </Sequence>
            <Sequence from={276} durationInFrames={42}>
                <BWTextFocus content={[{"text": "这就是 AI 普惠。", "startFrame": 0, "durationFrames": 42}]} totalDurationFrames={42} coreSentence={[{"text": "这就是 AI 普惠。", "showFrom": 0, "endFrom": 0}]} coreSentenceAnchors={[{"coreSentenceAnchor": "AI 普惠", "color": "#000000"}]} />
            </Sequence>
            <Sequence from={318} durationInFrames={189}>
                <BWCenterFocus content={[{"text": "我为什么说他配得上“梁圣”这个称呼？", "startFrame": 0, "durationFrames": 77}, {"text": "因为他在一个最容易垄断的行业里，", "startFrame": 76, "durationFrames": 64}, {"text": "做了最反垄断的选择", "startFrame": 139, "durationFrames": 50}]} totalDurationFrames={189} imageSrc={staticFile("images/AI普惠执剑人/scene_7_3.png")} enterEffect="fadeIn" anchors={[{"text": "梁圣", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={507} durationInFrames={198}>
                <BWPanelGrid content={[{"text": "他明明可以靠闭源收费。", "startFrame": 0, "durationFrames": 52}, {"text": "他明明可以筑起商业帝国。", "startFrame": 51, "durationFrames": 60}, {"text": "他明明可以把每个开发者，", "startFrame": 111, "durationFrames": 47}, {"text": "都变成他的客户。", "startFrame": 158, "durationFrames": 40}]} totalDurationFrames={198} panels={[{ src: staticFile("images/AI普惠执剑人/scene_7_4_img0.png"), showFrom: 0, enterEffect: "zoomIn" }, { src: staticFile("images/AI普惠执剑人/scene_7_4_img1.png"), showFrom: 1, enterEffect: "fadeIn" }, { src: staticFile("images/AI普惠执剑人/scene_7_4_img2.png"), showFrom: 2, enterEffect: "slideBottom" }]} anchors={[]} />
            </Sequence>
            <Sequence from={705} durationInFrames={130}>
                <BWMagnifyingGlass content={[{"text": "但他选择把剑递了出去。", "startFrame": 0, "durationFrames": 51}, {"text": "递给了每一个可能被 AI 巨头收割的人。", "startFrame": 50, "durationFrames": 80}]} totalDurationFrames={130} anchors={[{"text": "把剑递了出去", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "AI巨头收割", "showFrom": 1, "color": "#000000", "anim": "slideUp", "audioEffect": "ping"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/AI普惠执剑人/scene_7/scene_7.mp3")} />
        </AbsoluteFill>
    );
};
