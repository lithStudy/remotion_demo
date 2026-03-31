import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift, BWConceptCard } from "../../../components";

// 剖析恐慌感来源
const SCENE_DURATION = 93 + 100 + 154 + 120 + 126;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={93}>
                <BWCognitiveShift content={[{"text": "产生这种强烈的恐慌感和焦虑感，", "startFrame": 0, "durationFrames": 33}, {"text": "真不能怪咱们胆小，", "startFrame": 33, "durationFrames": 30}, {"text": "更不是咱们缺乏常识。", "startFrame": 63, "durationFrames": 30}]} totalDurationFrames={93} notText={"胆小和缺乏常识"} butText={"流量密码和人性弱点"} butSrc={staticFile("images/template/scene1_1.png")} notContentIndex={1} butContentIndex={0} anchors={[]} />
            </Sequence>
            <Sequence from={93} durationInFrames={100}>
                <BWCenterFocus content={[{"text": "要怪，", "startFrame": 0, "durationFrames": 30}, {"text": "就怪那些深谙流量密码的媒体算法，", "startFrame": 30, "durationFrames": 35}, {"text": "以及咱们人类大脑底层的出厂设置。", "startFrame": 65, "durationFrames": 35}]} totalDurationFrames={100} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" anchors={[]} />
            </Sequence>
            <Sequence from={193} durationInFrames={154}>
                <BWCognitiveShift content={[{"text": "你想啊，", "startFrame": 0, "durationFrames": 30}, {"text": "为了博眼球，", "startFrame": 30, "durationFrames": 30}, {"text": "媒体永远只会放大报道极端事件，", "startFrame": 60, "durationFrames": 33}, {"text": "“安全到达”永远上不了热搜，", "startFrame": 93, "durationFrames": 31}, {"text": "“机毁人亡”才会全网推送。", "startFrame": 124, "durationFrames": 30}]} totalDurationFrames={154} notText={"安全到达"} butText={"机毁人亡"} butSrc={staticFile("images/template/scene1_1.png")} notContentIndex={3} butContentIndex={4} anchors={[]} />
            </Sequence>
            <Sequence from={347} durationInFrames={120}>
                <BWCenterFocus content={[{"text": "再加上现在的算法，", "startFrame": 0, "durationFrames": 30}, {"text": "你越是害怕、", "startFrame": 30, "durationFrames": 30}, {"text": "越是愤怒多看了一眼，", "startFrame": 60, "durationFrames": 30}, {"text": "它就越是铺天盖地给你推。", "startFrame": 90, "durationFrames": 30}]} totalDurationFrames={120} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={467} durationInFrames={126}>
                <BWConceptCard content={[{"text": "这其实是一套把人性弱点研究到极致的注意力收割术，", "startFrame": 0, "durationFrames": 53}, {"text": "咱们普通人就是这样不知不觉被困在了一个人为制造的“信息恐怖屋”里。", "startFrame": 53, "durationFrames": 73}]} totalDurationFrames={126} imageSrc={staticFile("images/template/scene1_1.png")} conceptName={"注意力收割"} anchors={[]} />
            </Sequence>

        </AbsoluteFill>
    );
};
