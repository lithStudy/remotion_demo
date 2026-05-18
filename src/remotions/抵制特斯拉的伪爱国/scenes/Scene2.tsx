import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWBeatSequence, BWCaseBreakdown, BWCenterFocus, BWConceptCard, BWKpiHero, BWPeerInduct } from "../../../components";

// 剖析·供应链依赖
const SCENE_DURATION = 42 + 149 + 210 + 110 + 225 + 295 + 162 + 92 + 265;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={42}>
                <BWConceptCard content={[{"text": "先看供应链。", "startFrame": 0, "durationFrames": 42}]} totalDurationFrames={42} imageSrc={staticFile("images/抵制特斯拉的伪爱国/scene_2_1.png")} conceptName={"供应链"} />
            </Sequence>
            <Sequence from={42} durationInFrames={149}>
                <BWKpiHero content={[{"text": "特斯拉上海工厂，", "startFrame": 0, "durationFrames": 46}, {"text": "零部件本土化率超过95%。", "startFrame": 45, "durationFrames": 103}]} totalDurationFrames={149} blocks={[{"value": 95, "suffix": "%", "label": "本土化率", "showFrom": 1}]} />
            </Sequence>
            <Sequence from={191} durationInFrames={210}>
                <BWCaseBreakdown content={[{"text": "一辆车上，", "startFrame": 0, "durationFrames": 31}, {"text": "成千上万个零件——", "startFrame": 30, "durationFrames": 51}, {"text": "小到螺丝钉，", "startFrame": 80, "durationFrames": 33}, {"text": "大到发动机，", "startFrame": 113, "durationFrames": 38}, {"text": "几乎全是中国企业造的。", "startFrame": 150, "durationFrames": 59}]} totalDurationFrames={210} title={"车上零件从哪来"} imageSrc={staticFile("images/抵制特斯拉的伪爱国/scene_2_3.png")} phases={[{"phaseLabel": "整车语境", "showFrom": 0}, {"phaseLabel": "零件规模", "showFrom": 1}, {"phaseLabel": "巨细覆盖", "showFrom": 2}, {"phaseLabel": "国产化结论", "showFrom": 4}]} />
            </Sequence>
            <Sequence from={401} durationInFrames={110}>
                <BWKpiHero content={[{"text": "跟特斯拉直接签约的中国供应商，", "startFrame": 0, "durationFrames": 76}, {"text": "超过400家。", "startFrame": 75, "durationFrames": 34}]} totalDurationFrames={110} blocks={[{"value": 400, "suffix": "家", "label": "中国供应商", "showFrom": 1, "useGrouping": true}]} />
            </Sequence>
            <Sequence from={511} durationInFrames={225}>
                <BWPeerInduct content={[{"text": "从上海，", "startFrame": 0, "durationFrames": 26}, {"text": "到苏州、", "startFrame": 25, "durationFrames": 30}, {"text": "宁波、南通，", "startFrame": 54, "durationFrames": 42}, {"text": "长三角围绕特斯拉，", "startFrame": 96, "durationFrames": 56}, {"text": "长出了一条完整的汽车产业链。", "startFrame": 151, "durationFrames": 74}]} totalDurationFrames={225} premises={[{ imageSrc: staticFile("images/抵制特斯拉的伪爱国/scene_2_5_img0.png"), enterEffect: "fadeIn", showFrom: 0 }, { imageSrc: staticFile("images/抵制特斯拉的伪爱国/scene_2_5_img1.png"), enterEffect: "fadeIn", showFrom: 1 }, { imageSrc: staticFile("images/抵制特斯拉的伪爱国/scene_2_5_img2.png"), enterEffect: "fadeIn", showFrom: 2 }]} conclusion={{ imageSrc: staticFile("images/抵制特斯拉的伪爱国/scene_2_5.png"), enterEffect: "zoomIn", tone: "alert", showFrom: 3 }} />
            </Sequence>
            <Sequence from={736} durationInFrames={295}>
                <BWCenterFocus content={[{"text": "而且不只是代工。", "startFrame": 0, "durationFrames": 44}, {"text": "超过60家中国企业，", "startFrame": 43, "durationFrames": 51}, {"text": "已经借着特斯拉的认证体系，", "startFrame": 93, "durationFrames": 60}, {"text": "进入了它的全球供应链，", "startFrame": 153, "durationFrames": 50}, {"text": "把零部件卖到了北美和欧洲的超级工厂。", "startFrame": 202, "durationFrames": 93}]} totalDurationFrames={295} imageSrc={staticFile("images/抵制特斯拉的伪爱国/scene_2_7.png")} enterEffect="slideBottom" anchors={[{"text": "不只是代工", "showFrom": 0, "color": "#000000", "anim": "spring", "audioEffect": "ping"}, {"text": "全球供应链", "showFrom": 2, "color": "#000000", "anim": "spring", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={1031} durationInFrames={162}>
                <BWKpiHero content={[{"text": "2025年第一季度，", "startFrame": 0, "durationFrames": 48}, {"text": "中国零部件随车出口额同比猛增了62%。", "startFrame": 48, "durationFrames": 114}]} totalDurationFrames={162} blocks={[{"value": 62, "suffix": "%", "label": "出口额同比猛增", "showFrom": 1}]} />
            </Sequence>
            <Sequence from={1193} durationInFrames={92}>
                <BWCenterFocus content={[{"text": "你砸的那一锤子，", "startFrame": 0, "durationFrames": 42}, {"text": "砸的不是美国人的零件。", "startFrame": 41, "durationFrames": 51}]} totalDurationFrames={92} imageSrc={staticFile("images/抵制特斯拉的伪爱国/scene_2_9.png")} enterEffect="zoomIn" anchors={[]} />
            </Sequence>
            <Sequence from={1285} durationInFrames={265}>
                <BWBeatSequence content={[{"text": "砸的是中国工程师画了三年的图纸，", "startFrame": 0, "durationFrames": 80}, {"text": "砸的是中国工人磨了半年的良品率，", "startFrame": 79, "durationFrames": 77}, {"text": "砸的是中国企业拿到的那张通往全球市场的通行证。", "startFrame": 155, "durationFrames": 109}]} totalDurationFrames={265} stages={[{ imageSrc: staticFile("images/抵制特斯拉的伪爱国/scene_2_11_img0.png"), enterEffect: "breathe", tone: "calm" }, { imageSrc: staticFile("images/抵制特斯拉的伪爱国/scene_2_11_img1.png"), enterEffect: "slideBottom", tone: "alert" }, { imageSrc: staticFile("images/抵制特斯拉的伪爱国/scene_2_11_img2.png"), enterEffect: "slideBottom", tone: "alert" }]} />
            </Sequence>
            <Audio src={staticFile("/audio/抵制特斯拉的伪爱国/scene_2/scene_2.mp3")} />
        </AbsoluteFill>
    );
};
