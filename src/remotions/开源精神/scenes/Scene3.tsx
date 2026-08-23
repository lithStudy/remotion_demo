import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWMagnifyingGlass, BWStatCompare, BWTextFocus } from "../../../components";

// 剖析·科技平权与价格革命
const SCENE_DURATION = 102 + 110 + 138 + 215;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={102}>
                <BWTextFocus content={[{"text": "开源最重要的一点，", "startFrame": 0, "durationFrames": 41}, {"text": "是它实现了“科技平权”。", "startFrame": 40, "durationFrames": 62}]} totalDurationFrames={102} coreSentence={["开源最重要的一点，", "是它实现了“科技平权”"]} coreSentenceAnchors={[{"coreSentenceAnchor": "科技平权", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={102} durationInFrames={110}>
                <BWStatCompare content={[{"text": "如果没有开源，", "startFrame": 0, "durationFrames": 32}, {"text": "全球智能手机的价格至少要翻三倍。", "startFrame": 31, "durationFrames": 79}]} totalDurationFrames={110} bars={[{"label": "有开源", "value": 1, "showFrom": 0}, {"label": "无开源", "value": 3, "showFrom": 1}]} />
            </Sequence>
            <Sequence from={212} durationInFrames={138}>
                <BWCenterFocus content={[{"text": "因为有开源的安卓在，", "startFrame": 0, "durationFrames": 47}, {"text": "苹果才是你够够脚尖能买的起的产品，", "startFrame": 46, "durationFrames": 91}]} totalDurationFrames={138} imageSrc={staticFile("images/开源精神/scene_3_3.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={350} durationInFrames={215}>
                <BWMagnifyingGlass content={[{"text": "如果没有安卓对抗，", "startFrame": 0, "durationFrames": 45}, {"text": "苹果这种闭源垄断产品，", "startFrame": 44, "durationFrames": 69}, {"text": "可能会变成像八零年代的大哥大一样贵重", "startFrame": 113, "durationFrames": 102}]} totalDurationFrames={215} anchors={[{"text": "大哥大一样贵重", "showFrom": 2, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/开源精神/scene_3/scene_3.mp3")} />
        </AbsoluteFill>
    );
};
