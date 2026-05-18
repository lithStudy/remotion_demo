import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift, BWKpiHero, BWQuoteCitation, BWTextFocus } from "../../../components";

// 剖析：技术领先的短暂性
const SCENE_DURATION = 123 + 103 + 179 + 144 + 147 + 124;

export const calculateScene6Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene6: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={123}>
                <BWQuoteCitation content={[{"text": "有人会说，", "startFrame": 0, "durationFrames": 26}, {"text": "华为是技术最强的，", "startFrame": 25, "durationFrames": 50}, {"text": "换别的就是降级。", "startFrame": 74, "durationFrames": 49}]} totalDurationFrames={123} quoteSource={"虚拟观点引述"} />
            </Sequence>
            <Sequence from={123} durationInFrames={103}>
                <BWCenterFocus content={[{"text": "但通信设备的技术领先，", "startFrame": 0, "durationFrames": 53}, {"text": "是以“月”为单位交替的。", "startFrame": 52, "durationFrames": 51}]} totalDurationFrames={103} imageSrc={staticFile("images/华为依赖论/scene_6_2.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={226} durationInFrames={179}>
                <BWKpiHero content={[{"text": "华为的MetaAAU天线振子翻到384个，", "startFrame": 0, "durationFrames": 107}, {"text": "能耗降30%—", "startFrame": 106, "durationFrames": 38}, {"text": "很强。", "startFrame": 144, "durationFrames": 35}]} totalDurationFrames={179} blocks={[{"value": 384, "suffix": " 个", "label": "天线振子", "showFrom": 0}, {"value": 30, "prefix": "↓", "suffix": "%", "label": "能耗降幅", "showFrom": 1}]} />
            </Sequence>
            <Sequence from={405} durationInFrames={144}>
                <BWCenterFocus content={[{"text": "但中兴、爱立信、诺基亚，", "startFrame": 0, "durationFrames": 70}, {"text": "也都有同级别的Massive MIMO方案。", "startFrame": 69, "durationFrames": 74}]} totalDurationFrames={144} imageSrc={staticFile("images/华为依赖论/scene_6_4.png")} enterEffect="fadeIn" anchors={[{"text": "可替代", "color": "#EF4444", "anim": "spring", "audioEffect": "ping", "showFrom": 1}]} />
            </Sequence>
            <Sequence from={549} durationInFrames={147}>
                <BWCognitiveShift content={[{"text": "这不是一个永远无法追赶的物理定律，", "startFrame": 0, "durationFrames": 77}, {"text": "是工程迭代的速度竞赛。", "startFrame": 76, "durationFrames": 70}]} totalDurationFrames={147} notText={"永远无法追赶的物理定律"} butText={"工程迭代的速度竞赛"} butSrc={staticFile("images/华为依赖论/scene_6_5.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Sequence from={696} durationInFrames={124}>
                <BWTextFocus content={[{"text": "全球电信设备市场从来就是七国争霸，", "startFrame": 0, "durationFrames": 88}, {"text": "不是一人称王。", "startFrame": 87, "durationFrames": 36}]} totalDurationFrames={124} coreSentence={["全球电信设备市场从来就是七国争霸，", "不是一人称王。"]} coreSentenceAnchors={[{"coreSentenceAnchor": "七国争霸", "color": "#EF4444"}, {"coreSentenceAnchor": "一人称王", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/华为依赖论/scene_6/scene_6.mp3")} />
        </AbsoluteFill>
    );
};
