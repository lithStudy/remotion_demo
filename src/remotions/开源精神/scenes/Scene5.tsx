import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWSplitCompare, BWTextFocus } from "../../../components";

// 反转·开源拯救生命
const SCENE_DURATION = 112 + 236 + 230 + 182;

export const calculateScene5Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene5: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={112}>
                <BWTextFocus content={[{"text": "开源的意义，", "startFrame": 0, "durationFrames": 29}, {"text": "甚至跨越了代码，", "startFrame": 28, "durationFrames": 38}, {"text": "在直接拯救生命。", "startFrame": 65, "durationFrames": 46}]} totalDurationFrames={112} coreSentence={["开源的意义，", "甚至跨越了代码，", "在直接拯救生命。"]} coreSentenceAnchors={[{"coreSentenceAnchor": "拯救生命", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={112} durationInFrames={236}>
                <BWCenterFocus content={[{"text": "在医疗领域，", "startFrame": 0, "durationFrames": 28}, {"text": "Open Insulin打破了胰岛素市场三大药企的垄断，", "startFrame": 27, "durationFrames": 113}, {"text": "实现了平价的胰岛素的生物合成方案。", "startFrame": 139, "durationFrames": 96}]} totalDurationFrames={236} imageSrc={staticFile("images/开源精神/scene_5_2.png")} enterEffect="fadeIn" anchors={[{"text": "Open Insulin", "showFrom": 1, "color": "#000000", "anim": "spring"}]} />
            </Sequence>
            <Sequence from={348} durationInFrames={230}>
                <BWCenterFocus content={[{"text": "在新冠病毒肆虐期间，", "startFrame": 0, "durationFrames": 51}, {"text": "也正是超千万份病毒基因组序列的开源，", "startFrame": 50, "durationFrames": 99}, {"text": "促成了新冠疫苗史诗级的快速研发。", "startFrame": 148, "durationFrames": 81}]} totalDurationFrames={230} imageSrc={staticFile("images/开源精神/scene_5_3.png")} enterEffect="fadeIn" anchors={[{"text": "新冠病毒", "showFrom": 0, "color": "#000000", "anim": "popIn", "audioEffect": "ping"}, {"text": "史诗级研发速度", "showFrom": 2, "color": "#EF4444", "anim": "highlight", "audioEffect": "woosh"}]} />
            </Sequence>
            <Sequence from={578} durationInFrames={182}>
                <BWSplitCompare content={[{"text": "当商业逻辑为了利润选择“收割”你的时候，", "startFrame": 0, "durationFrames": 84}, {"text": "开源精神通过共享，", "startFrame": 84, "durationFrames": 48}, {"text": "给了你活下去的“武器”。", "startFrame": 132, "durationFrames": 50}]} totalDurationFrames={182} leftSrc={staticFile("images/开源精神/scene_5_5_left.png")} rightSrc={staticFile("images/开源精神/scene_5_5_right.png")} leftLabel={"利润收割"} rightLabel={"共享武器"} leftShowFrom={0} rightShowFrom={1} />
            </Sequence>
            <Audio src={staticFile("/audio/开源精神/scene_5/scene_5.mp3")} />
        </AbsoluteFill>
    );
};
