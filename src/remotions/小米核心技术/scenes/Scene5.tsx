import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWBeatSequence, BWCenterFocus, BWQuoteCitation, BWTextFocus } from "../../../components";

// 总结
const SCENE_DURATION = 147 + 81 + 177 + 77;

export const calculateScene5Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene5: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={147}>
                <BWCenterFocus content={[{"text": "不要再用旧时代的有色眼镜，", "startFrame": 0, "durationFrames": 59}, {"text": "去评判一个高速进化的中国企业。", "startFrame": 58, "durationFrames": 88}]} totalDurationFrames={147} imageSrc={staticFile("images/小米核心技术/scene_5_1.png")} enterEffect="fadeIn" anchors={[{"text": "高速进化", "showFrom": 1, "color": "#2563EB", "anim": "slideUp", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={147} durationInFrames={81}>
                <BWQuoteCitation content={[{"text": "数据不会撒谎，", "startFrame": 0, "durationFrames": 40}, {"text": "专利更不会骗人。", "startFrame": 39, "durationFrames": 42}]} totalDurationFrames={81} quoteSource={"片内立论"} quoteDisplayText={"数据不会撒谎，专利更不会骗人。"} />
            </Sequence>
            <Sequence from={228} durationInFrames={177}>
                <BWBeatSequence content={[{"text": "如果一家舍得砸百亿死磕底层系统的公司没有核心技术，", "startFrame": 0, "durationFrames": 121}, {"text": "那什么叫有核心技术？", "startFrame": 120, "durationFrames": 57}]} totalDurationFrames={177} stages={[{ imageSrc: staticFile("images/小米核心技术/scene_5_3_img0.png"), enterEffect: "breathe", tone: "calm" }, { imageSrc: staticFile("images/小米核心技术/scene_5_3_img1.png"), enterEffect: "slideBottom", tone: "alert", showFrom: 1 }]} />
            </Sequence>
            <Sequence from={405} durationInFrames={77}>
                <BWTextFocus content={[{"text": "想必，一定不是被掐脖子的技术吧！", "startFrame": 0, "durationFrames": 77}]} totalDurationFrames={77} coreSentence={["想必一定不是被掐脖子的技术吧！"]} coreSentenceAnchors={[{"coreSentenceAnchor": "掐脖子", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/小米核心技术/scene_5/scene_5.mp3")} />
        </AbsoluteFill>
    );
};
