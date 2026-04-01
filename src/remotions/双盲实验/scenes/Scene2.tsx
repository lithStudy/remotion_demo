import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWConceptCard, BWDosAndDonts } from "../../../components";

// 对照组的重要性
const SCENE_DURATION = 120 + 123 + 93 + 127 + 70 + 97 + 151 + 117 + 76;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={120}>
                <BWCenterFocus content={[{"text": "在科学方法论上，", "startFrame": 0, "durationFrames": 30}, {"text": "要拆解这种迷思，", "startFrame": 30, "durationFrames": 30}, {"text": "其实只需要一个硬核概念，", "startFrame": 60, "durationFrames": 30}, {"text": "叫作对照组。", "startFrame": 90, "durationFrames": 30}]} totalDurationFrames={120} imageSrc={staticFile("对比两个小组的简笔画图标")} enterEffect="breathe" anchors={[]} />
            </Sequence>
            <Sequence from={120} durationInFrames={123}>
                <BWDosAndDonts content={[{"text": "简单来说，", "startFrame": 0, "durationFrames": 30}, {"text": "如果没有对照组，", "startFrame": 30, "durationFrames": 30}, {"text": "你永远无法证明是你的干预有效，", "startFrame": 60, "durationFrames": 33}, {"text": "还是因为你命大或者身体好。", "startFrame": 93, "durationFrames": 30}]} totalDurationFrames={123} leftSrc={staticFile("一名研究者举着写有“有效”的牌子，旁边是药瓶/干预符号与向上箭头，背景是模糊的实验记录，信息图风格")} rightSrc={staticFile("一个人头顶写着“运气好/命大”的小光环或四叶草符号，旁边是随机骰子与问号，背景是同样的结果但缺少因果证据，信息图风格")} dontLabel={"干预有效"} doLabel={"命足够大"} />
            </Sequence>
            <Sequence from={243} durationInFrames={93}>
                <BWConceptCard content={[{"text": "在心理学和传播学里，", "startFrame": 0, "durationFrames": 30}, {"text": "这通常涉及一个著名的心理暗示，", "startFrame": 30, "durationFrames": 33}, {"text": "叫作安慰剂效应。", "startFrame": 63, "durationFrames": 30}]} totalDurationFrames={93} imageSrc={staticFile("大脑简笔画图标")} conceptName={"安慰剂效应"} anchors={[]} />
            </Sequence>
            <Sequence from={336} durationInFrames={127}>
                <BWCenterFocus content={[{"text": "就像小时候妈妈在伤口上吹的那口气，", "startFrame": 0, "durationFrames": 37}, {"text": "气本身不治病，", "startFrame": 37, "durationFrames": 30}, {"text": "但你的大脑觉得它治病，", "startFrame": 67, "durationFrames": 30}, {"text": "于是分泌了内啡肽帮你止痛。", "startFrame": 97, "durationFrames": 30}]} totalDurationFrames={127} imageSrc={staticFile("妈妈温柔地对着孩子受伤的手指吹气的温馨画面")} enterEffect="fadeIn" anchors={[{"text": "安慰剂效应", "showFrom": 2, "color": "#000000", "anim": "spring", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={463} durationInFrames={70}>
                <BWConceptCard content={[{"text": "为了彻底排除这种干扰，", "startFrame": 0, "durationFrames": 30}, {"text": "科学家发明了一种叫作双盲实验的武器。", "startFrame": 30, "durationFrames": 40}]} totalDurationFrames={70} imageSrc={staticFile("科学实验仪器简笔画图标")} conceptName={"双盲实验"} anchors={[]} />
            </Sequence>
            <Sequence from={533} durationInFrames={97}>
                <BWCenterFocus content={[{"text": "意思就是，", "startFrame": 0, "durationFrames": 30}, {"text": "实验的人和被试的人，", "startFrame": 30, "durationFrames": 30}, {"text": "谁都不知道手里拿的是真药还是糖片。", "startFrame": 60, "durationFrames": 37}]} totalDurationFrames={97} imageSrc={staticFile("医生给病人做双盲实验的示意图")} enterEffect="fadeIn" anchors={[{"text": "双盲实验", "showFrom": 1, "color": "#000000", "anim": "popIn", "audioEffect": "ping"}, {"text": "安慰剂", "showFrom": 2, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={630} durationInFrames={151}>
                <BWCenterFocus content={[{"text": "为什么要这么麻烦？", "startFrame": 0, "durationFrames": 30}, {"text": "因为只要医生一个眼神、", "startFrame": 30, "durationFrames": 30}, {"text": "一个暗示，", "startFrame": 60, "durationFrames": 30}, {"text": "或者病人一个先入为主的念头，", "startFrame": 90, "durationFrames": 31}, {"text": "就能干扰实验结果。", "startFrame": 121, "durationFrames": 30}]} totalDurationFrames={151} imageSrc={staticFile("医生检查病人的场景")} enterEffect="fadeIn" anchors={[{"text": "安慰剂效应", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "双盲实验", "showFrom": 4, "color": "#000000", "anim": "popIn", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={781} durationInFrames={117}>
                <BWCenterFocus content={[{"text": "只有当真药组的效果显著好于那个什么都不含的对照组时，", "startFrame": 0, "durationFrames": 57}, {"text": "我们才能挺直腰板说，", "startFrame": 57, "durationFrames": 30}, {"text": "这个药是真的有效。", "startFrame": 87, "durationFrames": 30}]} totalDurationFrames={117} imageSrc={staticFile("药瓶和对照组实验的示意图")} enterEffect="fadeIn" anchors={[{"text": "双盲实验", "showFrom": 0, "color": null, "anim": "spring", "audioEffect": "impact_thud"}, {"text": "幸存者偏差", "showFrom": 2, "color": "#EF4444", "anim": "highlight", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={898} durationInFrames={76}>
                <BWCenterFocus content={[{"text": "如果没有这个逻辑闭环，", "startFrame": 0, "durationFrames": 30}, {"text": "所有的康复都只是一场概率论里的幸存者偏差。", "startFrame": 30, "durationFrames": 46}]} totalDurationFrames={76} imageSrc={staticFile("一个天平倾斜，一侧是逻辑，另一侧是随机事件的视觉隐喻")} enterEffect="fadeIn" anchors={[{"text": "幸存者偏差", "showFrom": 1, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}]} />
            </Sequence>

        </AbsoluteFill>
    );
};
