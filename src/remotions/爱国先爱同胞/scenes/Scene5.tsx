import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCauseChain, BWCognitiveShift, BWDosAndDonts, BWTextFocus } from "../../../components";

// 召唤：普通人托起的国家
const SCENE_DURATION = 140 + 133 + 279 + 239 + 305;

export const calculateScene5Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene5: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={140}>
                <BWDosAndDonts content={[{"text": "可无论道德还是经济，", "startFrame": 0, "durationFrames": 47}, {"text": "归根到底，", "startFrame": 46, "durationFrames": 30}, {"text": "我们都绕不开一个最简单的事实：", "startFrame": 76, "durationFrames": 64}]} totalDurationFrames={140} left={{label: "道德维度", src: staticFile("images/爱国先爱同胞/scene_5_1_left.png"), showFrom: 0 }} right={{label: "经济维度", src: staticFile("images/爱国先爱同胞/scene_5_1_right.png"), showFrom: 0 }} />
            </Sequence>
            <Sequence from={140} durationInFrames={133}>
                <BWTextFocus content={[{"text": "国家不只是抽象的符号，", "startFrame": 0, "durationFrames": 58}, {"text": "更是由千千万万具体的人组成的生活。", "startFrame": 57, "durationFrames": 75}]} totalDurationFrames={133} coreSentence={[{"text": "国家不只是抽象的符号，", "showFrom": 0}, {"text": "更是由千千万万具体的人组成的生活。", "showFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "抽象的符号", "color": "#EF4444"}, {"coreSentenceAnchor": "具体的人", "color": "#22C55E"}]} />
            </Sequence>
            <Sequence from={273} durationInFrames={279}>
                <BWCauseChain content={[{"text": "当你用\"爱国\"作为借口，", "startFrame": 0, "durationFrames": 51}, {"text": "去伤害身边的收银员、店员、打工人，", "startFrame": 50, "durationFrames": 93}, {"text": "你真正伤害的，", "startFrame": 142, "durationFrames": 39}, {"text": "是普通人之间那点本来就不多的信任与温度。", "startFrame": 181, "durationFrames": 98}]} totalDurationFrames={279} layout={"horizontal"} nodes={[{ label: "伤害同胞", imageSrc: staticFile("images/爱国先爱同胞/scene_5_3_img0.png"), showFrom: 1, enterEffect: "fadeIn" }, { label: "伤害温度", imageSrc: staticFile("images/爱国先爱同胞/scene_5_3_img1.png"), showFrom: 3, enterEffect: "breathe" }]} />
            </Sequence>
            <Sequence from={552} durationInFrames={239}>
                <BWCognitiveShift content={[{"text": "而真正的爱国，", "startFrame": 0, "durationFrames": 33}, {"text": "从来不是把同胞推向对立面，", "startFrame": 32, "durationFrames": 60}, {"text": "而是把每一个普通人的苦与乐、泪与汗，", "startFrame": 92, "durationFrames": 95}, {"text": "都当成值得被看见的事。", "startFrame": 187, "durationFrames": 51}]} totalDurationFrames={239} notText={"推向对立面"} butText={"值得被看见"} butSrc={staticFile("images/爱国先爱同胞/scene_5_4.png")} notContentIndex={1} butContentIndex={3} />
            </Sequence>
            <Sequence from={791} durationInFrames={305}>
                <BWDosAndDonts content={[{"text": "因为这个国家，", "startFrame": 0, "durationFrames": 31}, {"text": "从来不是靠喊得最凶的人撑起来的，", "startFrame": 30, "durationFrames": 75}, {"text": "而是靠千千万万在最底层默默流汗、", "startFrame": 104, "durationFrames": 86}, {"text": "默默承受、", "startFrame": 189, "durationFrames": 31}, {"text": "默默托举的人，", "startFrame": 220, "durationFrames": 39}, {"text": "一点一滴垒起来的。", "startFrame": 258, "durationFrames": 46}]} totalDurationFrames={305} left={{label: "❌ 喊得最凶", src: staticFile("images/爱国先爱同胞/scene_5_5_left.png"), showFrom: 1 }} right={{label: "✅ 默默托举", src: staticFile("images/爱国先爱同胞/scene_5_5_right.png"), showFrom: 2 }} />
            </Sequence>
            <Audio src={staticFile("/audio/爱国先爱同胞/scene_5/scene_5.mp3")} />
        </AbsoluteFill>
    );
};
