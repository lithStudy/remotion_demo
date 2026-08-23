import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWQuoteCitation } from "../../../components";

// 引入：土味硬核营销
const SCENE_DURATION = 207 + 80 + 114 + 162;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={207}>
                <BWQuoteCitation content={[{"text": "有人说，", "startFrame": 0, "durationFrames": 24}, {"text": "小米不愧是屌丝营销公司，", "startFrame": 24, "durationFrames": 71}, {"text": "别人都在讲品牌调性，", "startFrame": 94, "durationFrames": 50}, {"text": "讲生活方式，", "startFrame": 144, "durationFrames": 31}, {"text": "讲大师设计。", "startFrame": 174, "durationFrames": 32}]} totalDurationFrames={207} quoteDisplayText={"小米不愧是屌丝营销公司，别人都在讲品牌调性，讲生活方式，讲大师设计。"} quoteSource={"网络评价"} showFrom={1} anchors={[]} />
            </Sequence>
            <Sequence from={207} durationInFrames={80}>
                <BWQuoteCitation content={[{"text": "小米呢？", "startFrame": 0, "durationFrames": 22}, {"text": "动不动就是“不服跑个分”。", "startFrame": 21, "durationFrames": 58}]} totalDurationFrames={80} quoteDisplayText={"不服跑个分"} quoteSource={"小米广告语"} showFrom={1} anchors={[]} />
            </Sequence>
            <Sequence from={287} durationInFrames={114}>
                <BWCenterFocus content={[{"text": "但作为掏真金白银买单的消费者，", "startFrame": 0, "durationFrames": 73}, {"text": "今天我必须得说一句：", "startFrame": 72, "durationFrames": 42}]} totalDurationFrames={114} imageSrc={staticFile("images/小米营销论/scene_1_3.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={401} durationInFrames={162}>
                <BWCenterFocus content={[{"text": "我简直太喜欢小米这种“土味”的硬核营销了！", "startFrame": 0, "durationFrames": 97}, {"text": "这才是真正尊重我们智商的做法。", "startFrame": 96, "durationFrames": 66}]} totalDurationFrames={162} imageSrc={staticFile("images/小米营销论/scene_1_4.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/小米营销论/scene_1/scene_1.mp3")} />
        </AbsoluteFill>
    );
};
