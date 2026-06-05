import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCauseChain, BWCognitiveShift, BWDosAndDonts, BWTextFocus } from "../../../components";

// 召唤：普通人托起的国家
const SCENE_DURATION = 138 + 149 + 246 + 256 + 324;

export const calculateScene5Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene5: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={138}>
                <BWDosAndDonts content={[{"text": "可无论道德还是经济，", "startFrame": 0, "durationFrames": 51}, {"text": "归根到底，", "startFrame": 50, "durationFrames": 27}, {"text": "我们都绕不开一个最简单的事实：", "startFrame": 76, "durationFrames": 62}]} totalDurationFrames={138} left={{label: "道德维度", src: staticFile("images/爱国先爱同胞/scene_5_1_left.png"), showFrom: 0 }} right={{label: "经济维度", src: staticFile("images/爱国先爱同胞/scene_5_1_right.png"), showFrom: 0 }} />
            </Sequence>
            <Sequence from={138} durationInFrames={149}>
                <BWTextFocus content={[{"text": "国家不是抽象的符号，", "startFrame": 0, "durationFrames": 58}, {"text": "而是由千千万万具体的人组成的生活。", "startFrame": 57, "durationFrames": 91}]} totalDurationFrames={149} coreSentence={[{"text": "国家不是抽象的符号，", "showFrom": 0}, {"text": "而是由千千万万具体的人", "showFrom": 1}, {"text": "组成的生活。", "showFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "抽象的符号", "color": "#EF4444"}, {"coreSentenceAnchor": "具体的人", "color": "#22C55E"}, {"coreSentenceAnchor": "组成的生活", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={287} durationInFrames={246}>
                <BWCauseChain content={[{"text": "当你用“爱国”去伤害身边的收银员、店员、打工人，", "startFrame": 0, "durationFrames": 119}, {"text": "你真正伤害的，", "startFrame": 118, "durationFrames": 36}, {"text": "是普通人之间那点本来就不多的信任与温度。", "startFrame": 154, "durationFrames": 91}]} totalDurationFrames={246} layout={"horizontal"} nodes={[{ label: "伤害同胞", imageSrc: staticFile("images/爱国先爱同胞/scene_5_3_img0.png"), showFrom: 0 }, { label: "伤害温度", imageSrc: staticFile("images/爱国先爱同胞/scene_5_3_img1.png"), showFrom: 2, enterEffect: "breathe" }]} anchors={[]} />
            </Sequence>
            <Sequence from={533} durationInFrames={256}>
                <BWCognitiveShift content={[{"text": "而真正的爱国，", "startFrame": 0, "durationFrames": 38}, {"text": "从来不是把同胞推向对立面，", "startFrame": 37, "durationFrames": 68}, {"text": "而是把每一个普通人的苦与乐、泪与汗，", "startFrame": 104, "durationFrames": 92}, {"text": "都当成值得被看见的事。", "startFrame": 196, "durationFrames": 59}]} totalDurationFrames={256} notText={"把同胞推向对立面"} butText={"当成值得被看见的事"} butSrc={staticFile("images/爱国先爱同胞/scene_5_4.png")} notContentIndex={1} butContentIndex={2} anchors={[]} />
            </Sequence>
            <Sequence from={789} durationInFrames={324}>
                <BWDosAndDonts content={[{"text": "因为这个国家，", "startFrame": 0, "durationFrames": 32}, {"text": "从来不是靠喊得最凶的人撑起来的，", "startFrame": 31, "durationFrames": 78}, {"text": "而是靠千千万万在最底层默默流汗、", "startFrame": 109, "durationFrames": 105}, {"text": "默默承受、", "startFrame": 213, "durationFrames": 28}, {"text": "默默托举的人，", "startFrame": 241, "durationFrames": 35}, {"text": "一点一滴垒起来的。", "startFrame": 276, "durationFrames": 48}]} totalDurationFrames={324} left={{label: "❌ 喊得最凶", src: staticFile("images/爱国先爱同胞/scene_5_5_left.png"), showFrom: 1 }} right={{label: "✅ 默默托举", src: staticFile("images/爱国先爱同胞/scene_5_5_right.png"), showFrom: 2 }} />
            </Sequence>
            <Audio src={staticFile("/audio/爱国先爱同胞/scene_5/scene_5.mp3")} />
        </AbsoluteFill>
    );
};
