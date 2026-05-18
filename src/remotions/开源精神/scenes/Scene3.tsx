import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWMagnifyingGlass, BWStatCompare, BWTextFocus } from "../../../components";

// 剖析·科技平权与价格革命
const SCENE_DURATION = 101 + 128 + 154 + 186;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={101}>
                <BWTextFocus content={[{"text": "开源最重要的一点，", "startFrame": 0, "durationFrames": 42}, {"text": "是它实现了“科技平权”。", "startFrame": 41, "durationFrames": 59}]} totalDurationFrames={101} coreSentence={["开源最重要的一点，", "是它实现了“科技平权”"]} coreSentenceAnchors={[{"coreSentenceAnchor": "科技平权", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={101} durationInFrames={128}>
                <BWStatCompare content={[{"text": "如果没有开源，", "startFrame": 0, "durationFrames": 36}, {"text": "全球智能手机的价格至少要翻三倍。", "startFrame": 36, "durationFrames": 92}]} totalDurationFrames={128} bars={[{"label": "有开源", "value": 1, "showFrom": 0}, {"label": "无开源", "value": 3, "showFrom": 1}]} />
            </Sequence>
            <Sequence from={229} durationInFrames={154}>
                <BWCenterFocus content={[{"text": "因为有开源的安卓在，", "startFrame": 0, "durationFrames": 51}, {"text": "苹果才是你够够脚尖能买的起的产品，", "startFrame": 50, "durationFrames": 104}]} totalDurationFrames={154} imageSrc={staticFile("images/开源精神/scene_3_3.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={383} durationInFrames={186}>
                <BWMagnifyingGlass content={[{"text": "如果没有安卓对抗，", "startFrame": 0, "durationFrames": 40}, {"text": "苹果这种闭源垄断产品，", "startFrame": 39, "durationFrames": 60}, {"text": "可能会变成像八零年代的大哥大一样贵重", "startFrame": 99, "durationFrames": 87}]} totalDurationFrames={186} anchors={[{"text": "大哥大一样贵重", "showFrom": 2, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/开源精神/scene_3/scene_3.mp3")} />
        </AbsoluteFill>
    );
};
