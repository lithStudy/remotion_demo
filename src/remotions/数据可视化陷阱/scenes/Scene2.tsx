import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift, BWQuoteCitation } from "../../../components";

// 视觉冲击与洗脑
const SCENE_DURATION = 117 + 177 + 231 + 219;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={117}>
                <BWCenterFocus content={[{"text": "我们普通人实在太容易被一张花哨的图表牵着鼻子走了。", "startFrame": 0, "durationFrames": 117}]} totalDurationFrames={117} imageSrc={staticFile("images/数据可视化陷阱/scene_2_1.png")} enterEffect="fadeIn" anchors={[{"text": "花哨图表", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={117} durationInFrames={177}>
                <BWQuoteCitation content={[{"text": "科学研究表明，", "startFrame": 0, "durationFrames": 34}, {"text": "人类大脑处理图像的速度比处理干瘪的文字快了几万倍。", "startFrame": 33, "durationFrames": 143}]} totalDurationFrames={177} quoteSource={"科学研究"} anchors={[]} />
            </Sequence>
            <Sequence from={294} durationInFrames={231}>
                <BWCognitiveShift content={[{"text": "这意味着在你的理性逻辑防线，", "startFrame": 0, "durationFrames": 70}, {"text": "还没有完全启动的时候，", "startFrame": 69, "durationFrames": 47}, {"text": "那种狂热的视觉冲击，", "startFrame": 116, "durationFrames": 53}, {"text": "就已经提前完成了对你的洗脑。", "startFrame": 169, "durationFrames": 62}]} totalDurationFrames={231} notText={"理性逻辑防线"} butText={"视觉冲击洗脑"} butSrc={staticFile("images/数据可视化陷阱/scene_2_3.png")} notContentIndex={0} butContentIndex={2} anchors={[]} />
            </Sequence>
            <Sequence from={525} durationInFrames={219}>
                <BWCognitiveShift content={[{"text": "这不是你我不够聪明，", "startFrame": 0, "durationFrames": 51}, {"text": "而是那些别有用心的商业骗子和营销号，", "startFrame": 50, "durationFrames": 80}, {"text": "对我们发动的一场毫不留情的视觉降维打击。", "startFrame": 129, "durationFrames": 89}]} totalDurationFrames={219} notText={"你我不够聪明"} butText={"视觉降维打击"} butSrc={staticFile("images/数据可视化陷阱/scene_2_4.png")} notContentIndex={0} butContentIndex={2} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/数据可视化陷阱/scene_2/scene_2.mp3")} />
        </AbsoluteFill>
    );
};
