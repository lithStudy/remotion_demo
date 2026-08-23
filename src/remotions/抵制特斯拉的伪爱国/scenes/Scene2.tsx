import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWBeatSequence, BWCaseBreakdown, BWCenterFocus, BWConceptCard, BWKpiHero, BWPeerInduct } from "../../../components";

// 剖析·供应链依赖
const SCENE_DURATION = 41 + 123 + 205 + 112 + 222 + 297 + 154 + 88 + 263;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={41}>
                <BWConceptCard content={[{"text": "先看供应链。", "startFrame": 0, "durationFrames": 41}]} totalDurationFrames={41} imageSrc={staticFile("images/抵制特斯拉的伪爱国/scene_2_1.png")} conceptName={"供应链"} />
            </Sequence>
            <Sequence from={41} durationInFrames={123}>
                <BWKpiHero content={[{"text": "特斯拉上海工厂，", "startFrame": 0, "durationFrames": 45}, {"text": "零部件本土化率超过95%。", "startFrame": 44, "durationFrames": 78}]} totalDurationFrames={123} blocks={[{"value": 95, "suffix": "%", "label": "本土化率", "showFrom": 1}]} />
            </Sequence>
            <Sequence from={164} durationInFrames={205}>
                <BWCaseBreakdown content={[{"text": "一辆车上，", "startFrame": 0, "durationFrames": 31}, {"text": "成千上万个零件——", "startFrame": 30, "durationFrames": 44}, {"text": "小到螺丝钉，", "startFrame": 74, "durationFrames": 38}, {"text": "大到发动机，", "startFrame": 111, "durationFrames": 38}, {"text": "几乎全是中国企业造的。", "startFrame": 148, "durationFrames": 57}]} totalDurationFrames={205} title={"车上零件从哪来"} imageSrc={staticFile("images/抵制特斯拉的伪爱国/scene_2_3.png")} phases={[{"phaseLabel": "整车语境", "showFrom": 0}, {"phaseLabel": "零件规模", "showFrom": 1}, {"phaseLabel": "巨细覆盖", "showFrom": 2}, {"phaseLabel": "国产化结论", "showFrom": 4}]} />
            </Sequence>
            <Sequence from={369} durationInFrames={112}>
                <BWKpiHero content={[{"text": "跟特斯拉直接签约的中国供应商，", "startFrame": 0, "durationFrames": 74}, {"text": "超过400家。", "startFrame": 73, "durationFrames": 39}]} totalDurationFrames={112} blocks={[{"value": 400, "suffix": "家", "label": "中国供应商", "showFrom": 1, "useGrouping": true}]} />
            </Sequence>
            <Sequence from={481} durationInFrames={222}>
                <BWPeerInduct content={[{"text": "从上海，", "startFrame": 0, "durationFrames": 27}, {"text": "到苏州、", "startFrame": 26, "durationFrames": 29}, {"text": "宁波、南通，", "startFrame": 54, "durationFrames": 40}, {"text": "长三角围绕特斯拉，", "startFrame": 93, "durationFrames": 55}, {"text": "长出了一条完整的汽车产业链。", "startFrame": 148, "durationFrames": 74}]} totalDurationFrames={222} premises={[{ imageSrc: staticFile("images/抵制特斯拉的伪爱国/scene_2_5_img0.png"), enterEffect: "fadeIn", showFrom: 0 }, { imageSrc: staticFile("images/抵制特斯拉的伪爱国/scene_2_5_img1.png"), enterEffect: "fadeIn", showFrom: 1 }, { imageSrc: staticFile("images/抵制特斯拉的伪爱国/scene_2_5_img2.png"), enterEffect: "fadeIn", showFrom: 2 }]} conclusion={{ imageSrc: staticFile("images/抵制特斯拉的伪爱国/scene_2_5.png"), enterEffect: "zoomIn", tone: "alert", showFrom: 3 }} />
            </Sequence>
            <Sequence from={703} durationInFrames={297}>
                <BWCenterFocus content={[{"text": "而且不只是代工。", "startFrame": 0, "durationFrames": 42}, {"text": "超过60家中国企业，", "startFrame": 41, "durationFrames": 47}, {"text": "已经借着特斯拉的认证体系，", "startFrame": 88, "durationFrames": 62}, {"text": "进入了它的全球供应链，", "startFrame": 149, "durationFrames": 54}, {"text": "把零部件卖到了北美和欧洲的超级工厂。", "startFrame": 202, "durationFrames": 95}]} totalDurationFrames={297} imageSrc={staticFile("images/抵制特斯拉的伪爱国/scene_2_7.png")} enterEffect="slideBottom" anchors={[{"text": "不只是代工", "showFrom": 0, "color": "#000000", "anim": "spring", "audioEffect": "ping"}, {"text": "全球供应链", "showFrom": 2, "color": "#000000", "anim": "spring", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={1000} durationInFrames={154}>
                <BWKpiHero content={[{"text": "2025年第一季度，", "startFrame": 0, "durationFrames": 44}, {"text": "中国零部件随车出口额同比猛增了62%。", "startFrame": 43, "durationFrames": 110}]} totalDurationFrames={154} blocks={[{"value": 62, "suffix": "%", "label": "出口额同比猛增", "showFrom": 1}]} />
            </Sequence>
            <Sequence from={1154} durationInFrames={88}>
                <BWCenterFocus content={[{"text": "你砸的那一锤子，", "startFrame": 0, "durationFrames": 38}, {"text": "砸的不是美国人的零件。", "startFrame": 37, "durationFrames": 51}]} totalDurationFrames={88} imageSrc={staticFile("images/抵制特斯拉的伪爱国/scene_2_9.png")} enterEffect="zoomIn" anchors={[]} />
            </Sequence>
            <Sequence from={1242} durationInFrames={263}>
                <BWBeatSequence content={[{"text": "砸的是中国工程师画了三年的图纸，", "startFrame": 0, "durationFrames": 77}, {"text": "砸的是中国工人磨了半年的良品率，", "startFrame": 76, "durationFrames": 74}, {"text": "砸的是中国企业拿到的那张通往全球市场的通行证。", "startFrame": 149, "durationFrames": 114}]} totalDurationFrames={263} stages={[{ imageSrc: staticFile("images/抵制特斯拉的伪爱国/scene_2_11_img0.png"), enterEffect: "breathe", tone: "calm" }, { imageSrc: staticFile("images/抵制特斯拉的伪爱国/scene_2_11_img1.png"), enterEffect: "slideBottom", tone: "alert" }, { imageSrc: staticFile("images/抵制特斯拉的伪爱国/scene_2_11_img2.png"), enterEffect: "slideBottom", tone: "alert" }]} />
            </Sequence>
            <Audio src={staticFile("/audio/抵制特斯拉的伪爱国/scene_2/scene_2.mp3")} />
        </AbsoluteFill>
    );
};
