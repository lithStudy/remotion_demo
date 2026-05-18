import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWQuoteCitation, BWTextFocus } from "../../../components";

// 引入：华为困境
const SCENE_DURATION = 163 + 156 + 162 + 46;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={163}>
                <BWTextFocus content={[{"text": "为什么西方国家在全面移除华为服务？", "startFrame": 0, "durationFrames": 81}, {"text": "为什么美国不卖高端技术给华为？", "startFrame": 80, "durationFrames": 82}]} totalDurationFrames={163} coreSentence={["为什么西方国家在全面移除华为服务？", "为什么美国不卖高端技术给华为？"]} coreSentenceAnchors={[{"coreSentenceAnchor": "西方国家", "color": "#EF4444"}, {"coreSentenceAnchor": "华为", "color": "#000000"}, {"coreSentenceAnchor": "美国", "color": "#EF4444"}, {"coreSentenceAnchor": "高端技术", "color": "#000000"}]} />
            </Sequence>
            <Sequence from={163} durationInFrames={156}>
                <BWQuoteCitation content={[{"text": "网上99%的回答，", "startFrame": 0, "durationFrames": 57}, {"text": "都是一句话—-", "startFrame": 56, "durationFrames": 30}, {"text": "因为中国强大了，", "startFrame": 86, "durationFrames": 39}, {"text": "所以被打压。", "startFrame": 124, "durationFrames": 32}]} totalDurationFrames={156} quoteSource={"网上99%的回答"} quoteDisplayText={"因为中国强大了，所以被打压。"} showFrom={2} />
            </Sequence>
            <Sequence from={319} durationInFrames={162}>
                <BWCenterFocus content={[{"text": "这话对了一部分，", "startFrame": 0, "durationFrames": 38}, {"text": "但还省略了太多东西。", "startFrame": 37, "durationFrames": 53}, {"text": "今天我把相关原因一个一个铺开。", "startFrame": 89, "durationFrames": 72}]} totalDurationFrames={162} imageSrc={staticFile("images/华为制裁论/scene_1_4.png")} enterEffect="fadeIn" />
            </Sequence>
            <Sequence from={481} durationInFrames={46}>
                <BWTextFocus content={[{"text": "你看完，", "startFrame": 0, "durationFrames": 19}, {"text": "自己判断。", "startFrame": 18, "durationFrames": 28}]} totalDurationFrames={46} coreSentence={[{"text": "你看完", "showFrom": 0}, {"text": "自己判断", "showFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "自己判断", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/华为制裁论/scene_1/scene_1.mp3")} />
        </AbsoluteFill>
    );
};
