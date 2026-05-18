import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWChecklistReveal, BWSplitCompare, BWTextFocus } from "../../../components";

// 召唤：捍卫开源的尊严
const SCENE_DURATION = 69 + 208 + 78 + 140 + 105 + 130 + 112;

export const calculateScene8Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene8: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={69}>
                <BWCenterFocus content={[{"text": "所以，", "startFrame": 0, "durationFrames": 15}, {"text": "我们为什么要大声疾呼？", "startFrame": 14, "durationFrames": 55}]} totalDurationFrames={69} imageSrc={staticFile("images/开源精神/scene_8_1.png")} enterEffect="zoomIn" />
            </Sequence>
            <Sequence from={69} durationInFrames={208}>
                <BWChecklistReveal content={[{"text": "因为开源精神，", "startFrame": 0, "durationFrames": 36}, {"text": "是数字时代的“自由宪章”。", "startFrame": 35, "durationFrames": 61}, {"text": "它不仅关乎代码，", "startFrame": 96, "durationFrames": 39}, {"text": "更关乎我们的口袋，", "startFrame": 134, "durationFrames": 40}, {"text": "和我们的尊严。", "startFrame": 173, "durationFrames": 34}]} totalDurationFrames={208} title={"开源精神"} rows={[{"text": "关乎代码", "showFrom": 2}, {"text": "关乎口袋", "showFrom": 3}, {"text": "关乎尊严", "showFrom": 4}]} />
            </Sequence>
            <Sequence from={277} durationInFrames={78}>
                <BWCenterFocus content={[{"text": "我们要警惕那些“黑盒化”的科技陷阱。", "startFrame": 0, "durationFrames": 78}]} totalDurationFrames={78} imageSrc={staticFile("images/开源精神/scene_8_3.png")} enterEffect="fadeIn" anchors={[{"text": "黑盒化", "showFrom": 0, "color": "#EF4444", "anim": "popIn"}]} />
            </Sequence>
            <Sequence from={355} durationInFrames={140}>
                <BWCenterFocus content={[{"text": "我们要抵制那些拿开源当“原材料”，", "startFrame": 0, "durationFrames": 72}, {"text": "却反手收割情怀的骗局。", "startFrame": 72, "durationFrames": 68}]} totalDurationFrames={140} imageSrc={staticFile("images/开源精神/scene_8_4.png")} enterEffect="fadeIn" anchors={[{"text": "收割情怀", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={495} durationInFrames={105}>
                <BWCenterFocus content={[{"text": "我们要支持那些敢于透明、", "startFrame": 0, "durationFrames": 57}, {"text": "敢于回馈的真极客。", "startFrame": 56, "durationFrames": 49}]} totalDurationFrames={105} imageSrc={staticFile("images/开源精神/scene_8_5.png")} enterEffect="fadeIn" anchors={[{"text": "真极客", "showFrom": 1, "color": "#000000", "anim": "spring", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={600} durationInFrames={130}>
                <BWSplitCompare content={[{"text": "请记住：", "startFrame": 0, "durationFrames": 23}, {"text": "代码是有国界的，", "startFrame": 22, "durationFrames": 40}, {"text": "但开源精神是属于全人类的。", "startFrame": 62, "durationFrames": 68}]} totalDurationFrames={130} leftSrc={staticFile("images/开源精神/scene_8_6_left.png")} rightSrc={staticFile("images/开源精神/scene_8_6_right.png")} leftLabel={"代码有界"} rightLabel={"开源无界"} leftShowFrom={1} rightShowFrom={2} />
            </Sequence>
            <Sequence from={730} durationInFrames={112}>
                <BWTextFocus content={[{"text": "它不是某种慈善，", "startFrame": 0, "durationFrames": 43}, {"text": "而是我们抵御垄断的最后一颗子弹。", "startFrame": 42, "durationFrames": 69}]} totalDurationFrames={112} coreSentence={["它不是某种慈善，", "而是抵御垄断的最后一颗子弹。"]} coreSentenceAnchors={[{"coreSentenceAnchor": "最后一颗子弹", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/开源精神/scene_8/scene_8.mp3")} />
        </AbsoluteFill>
    );
};
