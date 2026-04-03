import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift } from "../../../components";

// 相关性与因果性的混淆
const SCENE_DURATION = 66 + 91 + 105 + 65 + 219;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={66}>
                <BWCenterFocus content={[{"text": "在统计学和科学哲学的框架里，", "startFrame": 0, "durationFrames": 31}, {"text": "这其实叫作混淆了相关性与因果性。", "startFrame": 31, "durationFrames": 35}]} totalDurationFrames={66} imageSrc={staticFile("统计图表与哲学书籍堆叠的场景")} enterEffect="fadeIn" anchors={[{"text": "相关性", "showFrom": 1, "color": "#000000", "anim": "spring", "audioEffect": "ping"}, {"text": "因果性", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={66} durationInFrames={91}>
                <BWCognitiveShift content={[{"text": "两件事情凑巧同时发生，", "startFrame": 0, "durationFrames": 30}, {"text": "或者一前一后发生，", "startFrame": 30, "durationFrames": 30}, {"text": "绝对不代表是前者导致了后者。", "startFrame": 60, "durationFrames": 31}]} totalDurationFrames={91} notText={"前者导致后者"} butText={"存在其他变量"} butSrc={staticFile("隐藏在幕布后的观察者")} notContentIndex={2} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Sequence from={157} durationInFrames={105}>
                <BWCenterFocus content={[{"text": "这中间往往隐藏着一个看不见的第三变量，", "startFrame": 0, "durationFrames": 42}, {"text": "比如你在喝偏方的同时，", "startFrame": 42, "durationFrames": 30}, {"text": "是不是也请了假增加了睡眠时间？", "startFrame": 72, "durationFrames": 33}]} totalDurationFrames={105} imageSrc={staticFile("隐藏在迷雾中的问号，旁边散落着草药和日历")} enterEffect="fadeIn" anchors={[{"text": "第三变量", "showFrom": 0, "color": "#000000", "anim": "spring", "audioEffect": "ping"}, {"text": "喝偏方", "showFrom": 1, "color": "#EF4444", "anim": "highlight", "audioEffect": null}, {"text": "睡眠时间", "showFrom": 2, "color": "#000000", "anim": "slideUp", "audioEffect": null}]} />
            </Sequence>
            <Sequence from={262} durationInFrames={65}>
                <BWCenterFocus content={[{"text": "更致命的是，", "startFrame": 0, "durationFrames": 30}, {"text": "我们永远缺乏一个严谨的对照实验。", "startFrame": 30, "durationFrames": 35}]} totalDurationFrames={65} imageSrc={staticFile("严谨的科研实验的示意图")} enterEffect="fadeIn" anchors={[{"text": "对照实验", "showFrom": 1, "color": "#000000", "anim": "highlight", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={327} durationInFrames={219}>
                <BWCognitiveShift content={[{"text": "如果没有一个年龄、", "startFrame": 0, "durationFrames": 30}, {"text": "体质、", "startFrame": 30, "durationFrames": 30}, {"text": "病情和你完全一样，", "startFrame": 60, "durationFrames": 30}, {"text": "但什么偏方都没吃的人作为参照物，", "startFrame": 90, "durationFrames": 35}, {"text": "你根本没有办法在逻辑上排除，", "startFrame": 125, "durationFrames": 31}, {"text": "这究竟是神秘草药的法力，", "startFrame": 156, "durationFrames": 30}, {"text": "还是你身体硬扛过去的自发痊愈。", "startFrame": 186, "durationFrames": 33}]} totalDurationFrames={219} notText={"神秘草药法力"} butText={"身体自发痊愈"} butSrc={staticFile("身体自愈细胞修复的场景")} notContentIndex={5} butContentIndex={6} anchors={[]} />
            </Sequence>

        </AbsoluteFill>
    );
};
