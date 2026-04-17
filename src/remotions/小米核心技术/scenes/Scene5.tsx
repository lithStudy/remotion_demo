import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift, BWQuoteCitation, BWTextFocus } from "../../../components";

// 召唤：重新评估
const SCENE_DURATION = 63 + 60 + 85 + 33;

export const calculateScene5Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene5: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={63}>
                <BWCenterFocus content={[{"text": "不要再用旧时代的有色眼镜，", "startFrame": 0, "durationFrames": 30}, {"text": "\n去评判一个高速进化的中国企业。", "startFrame": 30, "durationFrames": 33}]} totalDurationFrames={63} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" anchors={[{"text": "有色眼镜", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "高速进化", "showFrom": 1, "color": "#000000", "anim": "slideUp", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={63} durationInFrames={60}>
                <BWQuoteCitation content={[{"text": "数据不会撒谎，", "startFrame": 0, "durationFrames": 30}, {"text": "专利更不会骗人。", "startFrame": 30, "durationFrames": 30}]} totalDurationFrames={60} quoteSource={"谚语"} quoteDisplayText={"数据不会撒谎，专利更不会骗人。"} anchors={[]} />
            </Sequence>
            <Sequence from={123} durationInFrames={85}>
                <BWCognitiveShift content={[{"text": "如果一家舍得砸百亿死磕底层系统的公司没有核心技术，", "startFrame": 0, "durationFrames": 55}, {"text": "\n那什么叫有核心技术？", "startFrame": 55, "durationFrames": 30}]} totalDurationFrames={85} notText={"没有核心技术"} butText={"掌握核心技术"} butSrc={staticFile("images/template/scene1_1.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Sequence from={208} durationInFrames={33}>
                <BWTextFocus content={[{"text": "想必一定不是被掐脖子的技术吧！", "startFrame": 0, "durationFrames": 33}]} totalDurationFrames={33} coreSentence={["想必一定不是被掐脖子的技术吧！"]} coreSentenceAnchors={[{"coreSentenceAnchor": "掐脖子", "color": "#EF4444"}]} />
            </Sequence>

        </AbsoluteFill>
    );
};
