import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWBeatSequence, BWCauseChain, BWKpiHero, BWTextFocus } from "../../../components";

// 叙述：小米1横空出世
const SCENE_DURATION = 218 + 155 + 70 + 225 + 177 + 131;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={218}>
                <BWKpiHero content={[{"text": "2011年8月，", "startFrame": 0, "durationFrames": 38}, {"text": "小米1来了。", "startFrame": 37, "durationFrames": 34}, {"text": "1999元，", "startFrame": 70, "durationFrames": 46}, {"text": "顶配处理器。", "startFrame": 116, "durationFrames": 36}, {"text": "790万台瞬间抢光。", "startFrame": 152, "durationFrames": 66}]} totalDurationFrames={218} blocks={[{"value": 2011, "label": "年份", "showFrom": 0}, {"value": 1, "label": "小米", "showFrom": 1}, {"value": 1999, "suffix": "元", "label": "价格", "showFrom": 2}, {"value": 790, "suffix": "万台", "label": "销量", "showFrom": 4, "useGrouping": true}]} />
            </Sequence>
            <Sequence from={218} durationInFrames={155}>
                <BWKpiHero content={[{"text": "两年后红米799元杀出，", "startFrame": 0, "durationFrames": 80}, {"text": "最终卖出4460万台。", "startFrame": 79, "durationFrames": 76}]} totalDurationFrames={155} blocks={[{"value": 799, "suffix": "元", "showFrom": 0}, {"value": 4460, "suffix": "万台", "showFrom": 1}]} />
            </Sequence>
            <Sequence from={373} durationInFrames={70}>
                <BWTextFocus content={[{"text": "这4460万台意味着什么？", "startFrame": 0, "durationFrames": 70}]} totalDurationFrames={70} coreSentence={["这4460万台意味着什么？"]} />
            </Sequence>
            <Sequence from={443} durationInFrames={225}>
                <BWBeatSequence content={[{"text": "是三四线城市的工人、", "startFrame": 0, "durationFrames": 54}, {"text": "刚上大学的农村学生、", "startFrame": 53, "durationFrames": 50}, {"text": "第一次摸智能手机的大爷大妈，", "startFrame": 102, "durationFrames": 55}, {"text": "终于用上了和城里人一样的手机。", "startFrame": 157, "durationFrames": 68}]} totalDurationFrames={225} stages={[{ imageSrc: staticFile("images/小米平权/scene_3_4_img0.png"), enterEffect: "fadeIn", tone: "calm" }, { imageSrc: staticFile("images/小米平权/scene_3_4_img1.png"), enterEffect: "slideBottom", tone: "alert", showFrom: 1 }, { imageSrc: staticFile("images/小米平权/scene_3_4_img2.png"), enterEffect: "slideBottom", tone: "alert", showFrom: 2 }]} />
            </Sequence>
            <Sequence from={668} durationInFrames={177}>
                <BWCauseChain content={[{"text": "移动互联网真正下沉了，", "startFrame": 0, "durationFrames": 59}, {"text": "微信、", "startFrame": 58, "durationFrames": 24}, {"text": "支付宝才跟着这些手机，", "startFrame": 82, "durationFrames": 53}, {"text": "走进了千家万户。", "startFrame": 135, "durationFrames": 42}]} totalDurationFrames={177} layout={"horizontal"} nodes={[{ label: "移动互联", imageSrc: staticFile("images/小米平权/scene_3_5_img0.png"), showFrom: 0, enterEffect: "slideLeft" }, { label: "微信支付宝", imageSrc: staticFile("images/小米平权/scene_3_5_img1.png"), showFrom: 1, enterEffect: "zoomIn" }, { label: "走进生活", imageSrc: staticFile("images/小米平权/scene_3_5_img2.png"), showFrom: 2, enterEffect: "slideBottom" }]} />
            </Sequence>
            <Sequence from={845} durationInFrames={131}>
                <BWKpiHero content={[{"text": "以前横行的1.45亿台山寨机，", "startFrame": 0, "durationFrames": 82}, {"text": "逐渐被彻底淘汰。", "startFrame": 81, "durationFrames": 49}]} totalDurationFrames={131} blocks={[{"value": 1.45, "suffix": "亿台", "label": "山寨机", "showFrom": 0}, {"value": 0, "label": "被淘汰", "showFrom": 1}]} />
            </Sequence>
            <Audio src={staticFile("/audio/小米平权/scene_3/scene_3.mp3")} />
        </AbsoluteFill>
    );
};
