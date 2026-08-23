import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWSplitCompare, BWTextFocus } from "../../../components";

// 反转·开源拯救生命
const SCENE_DURATION = 102 + 236 + 237 + 201;

export const calculateScene5Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene5: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={102}>
                <BWTextFocus content={[{"text": "开源的意义，", "startFrame": 0, "durationFrames": 30}, {"text": "甚至跨越了代码，", "startFrame": 29, "durationFrames": 35}, {"text": "在直接拯救生命。", "startFrame": 64, "durationFrames": 37}]} totalDurationFrames={102} coreSentence={["开源的意义，", "甚至跨越了代码，", "在直接拯救生命。"]} coreSentenceAnchors={[{"coreSentenceAnchor": "拯救生命", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={102} durationInFrames={236}>
                <BWCenterFocus content={[{"text": "在医疗领域，", "startFrame": 0, "durationFrames": 33}, {"text": "Open Insulin打破了胰岛素市场三大药企的垄断，", "startFrame": 32, "durationFrames": 114}, {"text": "实现了平价的胰岛素的生物合成方案。", "startFrame": 146, "durationFrames": 90}]} totalDurationFrames={236} imageSrc={staticFile("images/开源精神/scene_5_2.png")} enterEffect="fadeIn" anchors={[{"text": "Open Insulin", "showFrom": 1, "color": "#000000", "anim": "spring"}]} />
            </Sequence>
            <Sequence from={338} durationInFrames={237}>
                <BWCenterFocus content={[{"text": "在新冠病毒肆虐期间，", "startFrame": 0, "durationFrames": 51}, {"text": "也正是超千万份病毒基因组序列的开源，", "startFrame": 50, "durationFrames": 102}, {"text": "促成了新冠疫苗史诗级的快速研发。", "startFrame": 151, "durationFrames": 85}]} totalDurationFrames={237} imageSrc={staticFile("images/开源精神/scene_5_3.png")} enterEffect="fadeIn" anchors={[{"text": "新冠病毒", "showFrom": 0, "color": "#000000", "anim": "popIn", "audioEffect": "ping"}, {"text": "史诗级研发速度", "showFrom": 2, "color": "#EF4444", "anim": "highlight", "audioEffect": "woosh"}]} />
            </Sequence>
            <Sequence from={575} durationInFrames={201}>
                <BWSplitCompare content={[{"text": "当商业逻辑为了利润选择“收割”你的时候，", "startFrame": 0, "durationFrames": 98}, {"text": "开源精神通过共享，", "startFrame": 97, "durationFrames": 57}, {"text": "给了你活下去的“武器”。", "startFrame": 153, "durationFrames": 47}]} totalDurationFrames={201} leftSrc={staticFile("images/开源精神/scene_5_5_left.png")} rightSrc={staticFile("images/开源精神/scene_5_5_right.png")} leftLabel={"利润收割"} rightLabel={"共享武器"} leftShowFrom={0} rightShowFrom={1} />
            </Sequence>
            <Audio src={staticFile("/audio/开源精神/scene_5/scene_5.mp3")} />
        </AbsoluteFill>
    );
};
