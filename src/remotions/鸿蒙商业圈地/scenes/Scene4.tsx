import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCauseChain, BWCenterFocus, BWCognitiveShift, BWKpiHero, BWMagnifyingGlass, BWSplitCompare, BWTextFocus } from "../../../components";

// 反转：替鸿蒙数钱
const SCENE_DURATION = 95 + 209 + 131 + 146 + 247 + 69 + 137 + 161;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={95}>
                <BWTextFocus content={[{"text": "更为可怕的是，", "startFrame": 0, "durationFrames": 36}, {"text": "鸿蒙破坏了开源精神。", "startFrame": 36, "durationFrames": 59}]} totalDurationFrames={95} coreSentence={["鸿蒙破坏了开源精神"]} coreSentenceAnchors={[{"coreSentenceAnchor": "破坏了开源精神", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={95} durationInFrames={209}>
                <BWSplitCompare content={[{"text": "至少在鸿蒙5.0之前，", "startFrame": 0, "durationFrames": 55}, {"text": "他一边用着安卓的核心代码，", "startFrame": 54, "durationFrames": 63}, {"text": "一边却打着百分百国产自研的口号。", "startFrame": 116, "durationFrames": 92}]} totalDurationFrames={209} leftSrc={staticFile("images/鸿蒙商业圈地/scene_4_2_left.png")} rightSrc={staticFile("images/鸿蒙商业圈地/scene_4_2_right.png")} leftLabel={"套壳安卓"} rightLabel={"宣称自研"} leftShowFrom={0} rightShowFrom={2} anchors={[]} />
            </Sequence>
            <Sequence from={304} durationInFrames={131}>
                <BWMagnifyingGlass content={[{"text": "这是把当初投身开源的开发者的信任，", "startFrame": 0, "durationFrames": 89}, {"text": "按在了地上摩擦", "startFrame": 88, "durationFrames": 43}]} totalDurationFrames={131} anchors={[{"text": "信任", "showFrom": 0, "color": "#111111", "anim": "spring", "audioEffect": null}, {"text": "按地摩擦", "showFrom": 1, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={435} durationInFrames={146}>
                <BWCauseChain content={[{"text": "当开源的成果被攫取，", "startFrame": 0, "durationFrames": 55}, {"text": "所有开源者都会失去继续开源的动力。", "startFrame": 54, "durationFrames": 92}]} totalDurationFrames={146} layout={"horizontal"} nodes={[{ label: "成果被攫取", imageSrc: staticFile("images/鸿蒙商业圈地/scene_4_4_img0.png"), showFrom: 0 }, { label: "失去开源动力", imageSrc: staticFile("images/鸿蒙商业圈地/scene_4_4_img1.png"), showFrom: 1 }]} anchors={[]} />
            </Sequence>
            <Sequence from={581} durationInFrames={247}>
                <BWKpiHero content={[{"text": "失去开源社区的普惠，", "startFrame": 0, "durationFrames": 46}, {"text": "你买的每一件电子产品，", "startFrame": 45, "durationFrames": 48}, {"text": "硬件价格会原地翻倍；", "startFrame": 93, "durationFrames": 53}, {"text": "你用的每一项互联网服务，", "startFrame": 146, "durationFrames": 51}, {"text": "开销起码再涨三倍。", "startFrame": 196, "durationFrames": 51}]} totalDurationFrames={247} blocks={[{"value": 1, "suffix": "件", "label": "电子产品", "showFrom": 1}, {"value": 2, "suffix": "倍以上", "label": "硬件价格", "showFrom": 2}, {"value": 3, "suffix": "倍以上", "label": "服务费用", "showFrom": 4}]} countDuration={28} anchors={[]} />
            </Sequence>
            <Sequence from={828} durationInFrames={69}>
                <BWCenterFocus content={[{"text": "商业公司逐利，", "startFrame": 0, "durationFrames": 38}, {"text": "这无可厚非。", "startFrame": 37, "durationFrames": 32}]} totalDurationFrames={69} imageSrc={staticFile("images/鸿蒙商业圈地/scene_4_6.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={897} durationInFrames={137}>
                <BWCognitiveShift content={[{"text": "但他们把收割市场的野心，", "startFrame": 0, "durationFrames": 69}, {"text": "包装成了为国为民的牺牲。", "startFrame": 68, "durationFrames": 68}]} totalDurationFrames={137} notText={"为国为民的牺牲"} butText={"收割市场的野心"} butSrc={staticFile("images/鸿蒙商业圈地/scene_4_7.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Sequence from={1034} durationInFrames={161}>
                <BWTextFocus content={[{"text": "而你们，我智慧的同胞们", "startFrame": 0, "durationFrames": 70}, {"text": "被人卖了，", "startFrame": 69, "durationFrames": 28}, {"text": "还在热泪盈眶地替他们数钱。", "startFrame": 97, "durationFrames": 64}]} totalDurationFrames={161} coreSentence={["而你们，我智慧的同胞们", "被人卖了，还在热泪盈眶地替他们数钱。"]} coreSentenceAnchors={[{"coreSentenceAnchor": "被人卖了", "color": "#EF4444"}, {"coreSentenceAnchor": "替他们数钱", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/鸿蒙商业圈地/scene_4/scene_4.mp3")} />
        </AbsoluteFill>
    );
};
