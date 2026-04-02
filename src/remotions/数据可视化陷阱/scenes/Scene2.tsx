import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift, BWQuoteCitation, BWTextFocus } from "../../../components";

// 视觉冲击与洗脑
const SCENE_DURATION = 55 + 85 + 30 + 121 + 114;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={55}>
                <BWCenterFocus content={[{"text": "我们普通人实在太容易被一张花哨的图表牵着鼻子走了。", "startFrame": 0, "durationFrames": 55}]} totalDurationFrames={55} imageSrc={staticFile("普通人被图表迷惑的简笔画")} enterEffect="fadeIn" anchors={[{"text": "花哨图表", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={55} durationInFrames={85}>
                <BWQuoteCitation content={[{"text": "科学研究表明，", "startFrame": 0, "durationFrames": 30}, {"text": "人类大脑处理图像的速度比处理干瘪的文字快了几万倍。", "startFrame": 30, "durationFrames": 55}]} totalDurationFrames={85} quoteSource={"科学研究"} anchors={[]} />
            </Sequence>
            <Sequence from={140} durationInFrames={30}>
                <BWCenterFocus content={[{"text": "这意味着什么？", "startFrame": 0, "durationFrames": 30}]} totalDurationFrames={30} imageSrc={staticFile("一个巨大的问号悬浮在空中")} enterEffect="zoomIn" anchors={[]} />
            </Sequence>
            <Sequence from={170} durationInFrames={121}>
                <BWCognitiveShift content={[{"text": "意味着在你的理性逻辑防线，", "startFrame": 0, "durationFrames": 30}, {"text": "还没有完全启动的时候，", "startFrame": 30, "durationFrames": 30}, {"text": "那种狂热的视觉冲击，", "startFrame": 60, "durationFrames": 30}, {"text": "就已经提前完成了对你的洗脑。", "startFrame": 90, "durationFrames": 31}]} totalDurationFrames={121} notText={"理性逻辑防线"} butText={"视觉冲击洗脑"} butSrc={staticFile("冲击大脑的狂热视觉画面")} notContentIndex={0} butContentIndex={2} anchors={[]} />
            </Sequence>
            <Sequence from={291} durationInFrames={114}>
                <BWTextFocus content={[{"text": "这不是你我不够聪明，", "startFrame": 0, "durationFrames": 30}, {"text": "而是那些别有用心的商业骗子和营销号，", "startFrame": 30, "durationFrames": 40}, {"text": "对我们发动的一场毫不留情的视觉降维打击。", "startFrame": 70, "durationFrames": 44}]} totalDurationFrames={114} coreSentence={"别有用心的商业骗子和营销号"} coreSentenceAnchors={[{"coreSentenceAnchor": "商业骗子", "color": "#EF4444"}]} />
            </Sequence>

        </AbsoluteFill>
    );
};
