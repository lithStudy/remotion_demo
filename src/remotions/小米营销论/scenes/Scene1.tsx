import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWQuoteCitation } from "../../../components";

// 引入：土味硬核营销
const SCENE_DURATION = 150 + 60 + 63 + 79;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={150}>
                <BWQuoteCitation content={[{"text": "有人说，", "startFrame": 0, "durationFrames": 30}, {"text": "小米不愧是屌丝营销公司，", "startFrame": 30, "durationFrames": 30}, {"text": "别人都在讲品牌调性，", "startFrame": 60, "durationFrames": 30}, {"text": "讲生活方式，", "startFrame": 90, "durationFrames": 30}, {"text": "讲大师设计。", "startFrame": 120, "durationFrames": 30}]} totalDurationFrames={150} quoteDisplayText={"小米不愧是屌丝营销公司，别人都在讲品牌调性，讲生活方式，讲大师设计。"} quoteSource={"网络评价"} showFrom={1} anchors={[]} />
            </Sequence>
            <Sequence from={150} durationInFrames={60}>
                <BWQuoteCitation content={[{"text": "小米呢？", "startFrame": 0, "durationFrames": 30}, {"text": "动不动就是“不服跑个分”。", "startFrame": 30, "durationFrames": 30}]} totalDurationFrames={60} quoteDisplayText={"不服跑个分"} quoteSource={"小米广告语"} showFrom={1} anchors={[]} />
            </Sequence>
            <Sequence from={210} durationInFrames={63}>
                <BWCenterFocus content={[{"text": "但作为掏真金白银买单的消费者，", "startFrame": 0, "durationFrames": 33}, {"text": "今天我必须得说一句：", "startFrame": 33, "durationFrames": 30}]} totalDurationFrames={63} imageSrc={staticFile("一位消费者真诚地举手，准备说出心里话的简笔画图标")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={273} durationInFrames={79}>
                <BWCenterFocus content={[{"text": "我简直太喜欢小米这种“土味”的硬核营销了！", "startFrame": 0, "durationFrames": 46}, {"text": "这才是真正尊重我们智商的做法。", "startFrame": 46, "durationFrames": 33}]} totalDurationFrames={79} imageSrc={staticFile("半透明的大脑轮廓中流动着数据流与芯片模组，一旁是手机跑分高分界面，象征硬核营销对消费者智商的尊重")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>

        </AbsoluteFill>
    );
};
