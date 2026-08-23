import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWBeatSequence, BWCenterFocus, BWCognitiveShift, BWDosAndDonts, BWPanelGrid, BWTextFocus } from "../../../components";

// 召唤：拒绝捧杀，你就是靠山
const SCENE_DURATION = 226 + 107 + 106 + 115 + 119 + 269 + 264 + 159 + 114 + 120;

export const calculateScene5Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene5: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={226}>
                <BWBeatSequence content={[{"text": "所以，", "startFrame": 0, "durationFrames": 24}, {"text": "看懂这个底层逻辑了吗？", "startFrame": 24, "durationFrames": 50}, {"text": "支持国产，", "startFrame": 73, "durationFrames": 30}, {"text": "不需要你敲锣打鼓。", "startFrame": 102, "durationFrames": 35}, {"text": "不需要你委屈自己，", "startFrame": 137, "durationFrames": 42}, {"text": "去买一件难用的商品。", "startFrame": 178, "durationFrames": 47}]} totalDurationFrames={226} stages={[{ imageSrc: staticFile("images/国产支持论/scene_5_1_img0.png"), enterEffect: "breathe", tone: "calm", showFrom: 0 }, { imageSrc: staticFile("images/国产支持论/scene_5_1_img1.png"), enterEffect: "slideBottom", tone: "alert", showFrom: 2 }, { imageSrc: staticFile("images/国产支持论/scene_5_1_img2.png"), enterEffect: "slideBottom", tone: "alert", showFrom: 4 }]} />
            </Sequence>
            <Sequence from={226} durationInFrames={107}>
                <BWTextFocus content={[{"text": "那些喊着不买就不爱国的人，", "startFrame": 0, "durationFrames": 56}, {"text": "其实是在害国产品牌。", "startFrame": 55, "durationFrames": 51}]} totalDurationFrames={107} coreSentence={[{"text": "那些喊着不买就不爱国的人，", "showFrom": 0, "endFrom": 0}, {"text": "其实是在害国产品牌。", "showFrom": 1, "endFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "害国产品牌", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={333} durationInFrames={106}>
                <BWCenterFocus content={[{"text": "如果一个垃圾产品，", "startFrame": 0, "durationFrames": 44}, {"text": "打着国产的旗号就能大卖。", "startFrame": 43, "durationFrames": 63}]} totalDurationFrames={106} imageSrc={staticFile("images/国产支持论/scene_5_3.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={439} durationInFrames={115}>
                <BWTextFocus content={[{"text": "那谁还会去老老实实搞研发？", "startFrame": 0, "durationFrames": 61}, {"text": "谁还会去死磕核心技术？", "startFrame": 60, "durationFrames": 54}]} totalDurationFrames={115} coreSentence={[{"text": "那谁还会去老老实实搞研发？", "showFrom": 0, "endFrom": 0}, {"text": "谁还会去死磕核心技术？", "showFrom": 1, "endFrom": 1}]} />
            </Sequence>
            <Sequence from={554} durationInFrames={119}>
                <BWTextFocus content={[{"text": "劣币驱逐良币。", "startFrame": 0, "durationFrames": 41}, {"text": "这才是对国产品牌，", "startFrame": 40, "durationFrames": 44}, {"text": "最致命的捧杀。", "startFrame": 84, "durationFrames": 35}]} totalDurationFrames={119} coreSentence={[{"text": "劣币驱逐良币。", "showFrom": 0}, {"text": "这才是对国产品牌，", "showFrom": 1}, {"text": "最致命的捧杀。", "showFrom": 2}]} coreSentenceAnchors={[{"coreSentenceAnchor": "劣币驱逐良币", "color": "#EF4444", "audioEffect": "impact_thud"}, {"coreSentenceAnchor": "最致命的捧杀", "color": "#EF4444", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={673} durationInFrames={269}>
                <BWCognitiveShift content={[{"text": "我们要支持国产，", "startFrame": 0, "durationFrames": 34}, {"text": "但前提是它值得！", "startFrame": 33, "durationFrames": 40}, {"text": "是它的技术足够硬，", "startFrame": 73, "durationFrames": 40}, {"text": "是它的体验足够爽。", "startFrame": 112, "durationFrames": 45}, {"text": "而不是因为它贴了个国产标签，", "startFrame": 157, "durationFrames": 64}, {"text": "你就要去当这个冤大头。", "startFrame": 220, "durationFrames": 49}]} totalDurationFrames={269} notText={"贴标签就当冤大头"} butText={"技术硬体验爽"} butSrc={staticFile("images/国产支持论/scene_5_6.png")} notContentIndex={4} butContentIndex={1} />
            </Sequence>
            <Sequence from={942} durationInFrames={264}>
                <BWDosAndDonts content={[{"text": "不要总觉得自己做得不够。", "startFrame": 0, "durationFrames": 53}, {"text": "不要被网上的键盘侠裹挟。", "startFrame": 52, "durationFrames": 64}, {"text": "只要你每天努力工作，", "startFrame": 116, "durationFrames": 41}, {"text": "只要你合法纳税，", "startFrame": 156, "durationFrames": 38}, {"text": "你就是这个国家，", "startFrame": 193, "durationFrames": 33}, {"text": "最坚实的靠山。", "startFrame": 226, "durationFrames": 38}]} totalDurationFrames={264} left={{label: "❌ 别被裹挟", src: staticFile("images/国产支持论/scene_5_7_left.png"), showFrom: 0 }} right={{label: "✅ 你就是靠山", src: staticFile("images/国产支持论/scene_5_7_right.png"), showFrom: 2 }} />
            </Sequence>
            <Sequence from={1206} durationInFrames={159}>
                <BWPanelGrid content={[{"text": "当你在工位上加班熬夜，", "startFrame": 0, "durationFrames": 51}, {"text": "当你在早高峰挤着地铁，", "startFrame": 50, "durationFrames": 56}, {"text": "当你为了家人精打细算，", "startFrame": 105, "durationFrames": 53}]} totalDurationFrames={159} panels={[{ src: staticFile("images/国产支持论/scene_5_8_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { src: staticFile("images/国产支持论/scene_5_8_img1.png"), showFrom: 1, enterEffect: "fadeIn" }, { src: staticFile("images/国产支持论/scene_5_8_img2.png"), showFrom: 2, enterEffect: "fadeIn" }]} />
            </Sequence>
            <Sequence from={1365} durationInFrames={114}>
                <BWTextFocus content={[{"text": "你交出去的每一分钱，", "startFrame": 0, "durationFrames": 55}, {"text": "都变成了国产崛起的底气。", "startFrame": 54, "durationFrames": 59}]} totalDurationFrames={114} coreSentence={[{"text": "你交出去的每一分钱，", "showFrom": 0}, {"text": "都变成了国产崛起的底气。", "showFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "底气", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={1479} durationInFrames={120}>
                <BWTextFocus content={[{"text": "你为生活流下的每一滴汗，", "startFrame": 0, "durationFrames": 55}, {"text": "早就变成了国产崛起的弹药。", "startFrame": 54, "durationFrames": 65}]} totalDurationFrames={120} coreSentence={[{"text": "你为生活流下的每一滴汗，", "showFrom": 0}, {"text": "早就变成了国产崛起的弹药。", "showFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "弹药", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/国产支持论/scene_5/scene_5.mp3")} />
        </AbsoluteFill>
    );
};
