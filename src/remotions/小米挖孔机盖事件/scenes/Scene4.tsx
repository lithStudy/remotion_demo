import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCauseChain, BWCenterFocus, BWMagnifyingGlass, BWTextFocus } from "../../../components";

// 反转：老板不懂技术的挡箭牌
const SCENE_DURATION = 120 + 236 + 71 + 155 + 95;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={120}>
                <BWMagnifyingGlass content={[{"text": "最让人心寒的，", "startFrame": 0, "durationFrames": 39}, {"text": "是法庭上那句“雷总不懂结构”。", "startFrame": 38, "durationFrames": 82}]} totalDurationFrames={120} anchors={[{"text": "雷总不懂结构", "showFrom": 1, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={120} durationInFrames={236}>
                <BWCauseChain content={[{"text": "为了规避那点赔偿金，", "startFrame": 0, "durationFrames": 44}, {"text": "法务竟然把小米最大的 IP，", "startFrame": 43, "durationFrames": 68}, {"text": "亲手推下神坛，", "startFrame": 111, "durationFrames": 40}, {"text": "说他发微博是“戏言”，", "startFrame": 150, "durationFrames": 53}, {"text": "是“误解”。", "startFrame": 202, "durationFrames": 33}]} totalDurationFrames={236} layout={"horizontal"} nodes={[{ label: "规避赔偿", imageSrc: staticFile("images/小米挖孔机盖事件/scene_4_2_img0.png"), showFrom: 0 }, { label: "推下神坛", imageSrc: staticFile("images/小米挖孔机盖事件/scene_4_2_img1.png"), showFrom: 1 }, { label: "戏言误解", imageSrc: staticFile("images/小米挖孔机盖事件/scene_4_2_img2.png"), showFrom: 3 }]} anchors={[]} />
            </Sequence>
            <Sequence from={356} durationInFrames={71}>
                <BWTextFocus content={[{"text": "这还是那个“和用户交朋友”的小米吗？", "startFrame": 0, "durationFrames": 71}]} totalDurationFrames={71} coreSentence={["这还是那个“和用户交朋友”的小米吗？"]} coreSentenceAnchors={[{"coreSentenceAnchor": "“和用户交朋友”", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={427} durationInFrames={155}>
                <BWCenterFocus content={[{"text": "当一个以技术立身的品牌，", "startFrame": 0, "durationFrames": 58}, {"text": "开始用“老板不懂技术”来当挡箭牌的时候，", "startFrame": 57, "durationFrames": 98}]} totalDurationFrames={155} imageSrc={staticFile("images/小米挖孔机盖事件/scene_4_4.png")} enterEffect="fadeIn" anchors={[{"text": "挡箭牌", "showFrom": 1, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={582} durationInFrames={95}>
                <BWTextFocus content={[{"text": "它就已经在透支粉丝过去十年的信任溢价了。", "startFrame": 0, "durationFrames": 95}]} totalDurationFrames={95} coreSentence={["透支粉丝过去十年的信任"]} coreSentenceAnchors={[{"coreSentenceAnchor": "透支", "color": "#EF4444"}, {"coreSentenceAnchor": "信任", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/小米挖孔机盖事件/scene_4/scene_4.mp3")} />
        </AbsoluteFill>
    );
};
