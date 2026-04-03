import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift, BWDosAndDonts, BWSplitCompare } from "../../../components";

// 相关性与因果性的混淆
const SCENE_DURATION = 173 + 189 + 224 + 107 + 168 + 188;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={173}>
                <BWSplitCompare content={[{"text": "在统计学和科学哲学的框架里，", "startFrame": 0, "durationFrames": 79}, {"text": "这其实叫作混淆了相关性与因果性。", "startFrame": 78, "durationFrames": 94}]} totalDurationFrames={173} leftSrc={staticFile("images/相关不等于因果/scene_2_1_left.png")} rightSrc={staticFile("images/相关不等于因果/scene_2_1_right.png")} leftLabel={"相关性"} rightLabel={"因果性"} />
            </Sequence>
            <Sequence from={173} durationInFrames={189}>
                <BWCognitiveShift content={[{"text": "两件事情凑巧同时发生，", "startFrame": 0, "durationFrames": 60}, {"text": "或者一前一后发生，", "startFrame": 60, "durationFrames": 51}, {"text": "绝对不代表是前者导致了后者。", "startFrame": 110, "durationFrames": 79}]} totalDurationFrames={189} notText={"前者导致后者"} butText={"存在其他变量"} butSrc={staticFile("images/相关不等于因果/scene_2_2.png")} notContentIndex={2} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Sequence from={362} durationInFrames={224}>
                <BWCenterFocus content={[{"text": "这中间往往隐藏着一个看不见的第三变量，", "startFrame": 0, "durationFrames": 92}, {"text": "比如你在喝偏方的同时，", "startFrame": 91, "durationFrames": 57}, {"text": "是不是也请了假增加了睡眠时间？", "startFrame": 148, "durationFrames": 76}]} totalDurationFrames={224} imageSrc={staticFile("images/相关不等于因果/scene_2_3.png")} enterEffect="fadeIn" anchors={[{"text": "第三变量", "showFrom": 0, "color": "#000000", "anim": "spring", "audioEffect": "ping"}, {"text": "喝偏方", "showFrom": 1, "color": "#EF4444", "anim": "highlight", "audioEffect": null}, {"text": "睡眠时间", "showFrom": 2, "color": "#000000", "anim": "slideUp", "audioEffect": null}]} />
            </Sequence>
            <Sequence from={586} durationInFrames={107}>
                <BWCenterFocus content={[{"text": "更致命的是，", "startFrame": 0, "durationFrames": 28}, {"text": "我们永远缺乏一个严谨的对照实验。", "startFrame": 27, "durationFrames": 80}]} totalDurationFrames={107} imageSrc={staticFile("images/相关不等于因果/scene_2_4.png")} enterEffect="fadeIn" anchors={[{"text": "对照实验", "showFrom": 1, "color": "#000000", "anim": "highlight", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={693} durationInFrames={168}>
                <BWCenterFocus content={[{"text": "如果没有一个年龄、", "startFrame": 0, "durationFrames": 37}, {"text": "体质、", "startFrame": 36, "durationFrames": 19}, {"text": "病情和你完全一样，", "startFrame": 54, "durationFrames": 46}, {"text": "但什么偏方都没吃的人作为参照物，", "startFrame": 100, "durationFrames": 68}]} totalDurationFrames={168} imageSrc={staticFile("images/相关不等于因果/scene_2_5.png")} enterEffect="fadeIn" anchors={[{"text": "参照物", "showFrom": 3, "color": "#000000", "anim": "highlight", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={861} durationInFrames={188}>
                <BWDosAndDonts content={[{"text": "你根本没有办法在逻辑上排除，", "startFrame": 0, "durationFrames": 64}, {"text": "这究竟是神秘草药的法力，", "startFrame": 63, "durationFrames": 53}, {"text": "还是你身体硬扛过去的自发痊愈。", "startFrame": 115, "durationFrames": 73}]} totalDurationFrames={188} leftSrc={staticFile("images/相关不等于因果/scene_2_6_left.png")} rightSrc={staticFile("images/相关不等于因果/scene_2_6_right.png")} dontLabel={"❌ 偏方神力"} doLabel={"✅ 自发痊愈"} />
            </Sequence>
            <Audio src={staticFile("/audio/相关不等于因果/scene_2/scene_2.mp3")} />
        </AbsoluteFill>
    );
};
