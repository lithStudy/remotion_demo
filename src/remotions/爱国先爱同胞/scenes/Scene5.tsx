import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCauseChain, BWCognitiveShift, BWDosAndDonts, BWTextFocus } from "../../../components";

// 召唤：普通人托起的国家
const SCENE_DURATION = 146 + 130 + 265 + 237 + 307;

export const calculateScene5Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene5: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={146}>
                <BWDosAndDonts content={[{"text": "可无论道德还是经济，", "startFrame": 0, "durationFrames": 51}, {"text": "归根到底，", "startFrame": 50, "durationFrames": 28}, {"text": "我们都绕不开一个最简单的事实：", "startFrame": 77, "durationFrames": 68}]} totalDurationFrames={146} left={{label: "道德维度", src: staticFile("images/爱国先爱同胞/scene_5_1_left.png"), showFrom: 0 }} right={{label: "经济维度", src: staticFile("images/爱国先爱同胞/scene_5_1_right.png"), showFrom: 0 }} />
            </Sequence>
            <Sequence from={146} durationInFrames={130}>
                <BWTextFocus content={[{"text": "国家不只是抽象的符号，", "startFrame": 0, "durationFrames": 53}, {"text": "更是由千千万万具体的人组成的生活。", "startFrame": 52, "durationFrames": 77}]} totalDurationFrames={130} coreSentence={[{"text": "国家不只是抽象的符号，", "showFrom": 0}, {"text": "更是由千千万万具体的人组成的生活。", "showFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "抽象的符号", "color": "#EF4444"}, {"coreSentenceAnchor": "具体的人", "color": "#22C55E"}]} />
            </Sequence>
            <Sequence from={276} durationInFrames={265}>
                <BWCauseChain content={[{"text": "当你用\"爱国\"作为借口，", "startFrame": 0, "durationFrames": 45}, {"text": "去伤害身边的收银员、店员、打工人，", "startFrame": 44, "durationFrames": 96}, {"text": "你真正伤害的，", "startFrame": 140, "durationFrames": 34}, {"text": "是普通人之间那点本来就不多的信任与温度。", "startFrame": 174, "durationFrames": 91}]} totalDurationFrames={265} layout={"horizontal"} nodes={[{ label: "伤害同胞", imageSrc: staticFile("images/爱国先爱同胞/scene_5_3_img0.png"), showFrom: 1, enterEffect: "fadeIn" }, { label: "伤害温度", imageSrc: staticFile("images/爱国先爱同胞/scene_5_3_img1.png"), showFrom: 3, enterEffect: "breathe" }]} />
            </Sequence>
            <Sequence from={541} durationInFrames={237}>
                <BWCognitiveShift content={[{"text": "而真正的爱国，", "startFrame": 0, "durationFrames": 35}, {"text": "从来不是把同胞推向对立面，", "startFrame": 34, "durationFrames": 66}, {"text": "而是把每一个普通人的苦与乐、泪与汗，", "startFrame": 100, "durationFrames": 89}, {"text": "都当成值得被看见的事。", "startFrame": 188, "durationFrames": 49}]} totalDurationFrames={237} notText={"推向对立面"} butText={"值得被看见"} butSrc={staticFile("images/爱国先爱同胞/scene_5_4.png")} notContentIndex={1} butContentIndex={3} />
            </Sequence>
            <Sequence from={778} durationInFrames={307}>
                <BWDosAndDonts content={[{"text": "因为这个国家，", "startFrame": 0, "durationFrames": 34}, {"text": "从来不是靠喊得最凶的人撑起来的，", "startFrame": 33, "durationFrames": 78}, {"text": "而是靠千千万万在最底层默默流汗、", "startFrame": 111, "durationFrames": 88}, {"text": "默默承受、", "startFrame": 198, "durationFrames": 29}, {"text": "默默托举的人，", "startFrame": 226, "durationFrames": 33}, {"text": "一点一滴垒起来的。", "startFrame": 259, "durationFrames": 48}]} totalDurationFrames={307} left={{label: "❌ 喊得最凶", src: staticFile("images/爱国先爱同胞/scene_5_5_left.png"), showFrom: 1 }} right={{label: "✅ 默默托举", src: staticFile("images/爱国先爱同胞/scene_5_5_right.png"), showFrom: 2 }} />
            </Sequence>
            <Audio src={staticFile("/audio/爱国先爱同胞/scene_5/scene_5.mp3")} />
        </AbsoluteFill>
    );
};
