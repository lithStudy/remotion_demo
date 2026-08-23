import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCauseChain, BWCenterFocus, BWDosAndDonts, BWPanelGrid, BWStatCompare, BWTextFocus } from "../../../components";

// 剖析：小米模式的降维打击
const SCENE_DURATION = 26 + 239 + 121 + 124 + 346 + 306 + 189 + 278;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={26}>
                <BWTextFocus content={[{"text": "不止手机。", "startFrame": 0, "durationFrames": 26}]} totalDurationFrames={26} coreSentence={["不止手机。"]} />
            </Sequence>
            <Sequence from={26} durationInFrames={239}>
                <BWCenterFocus content={[{"text": "2014年之前，手环类产品动辄七百多八百多，", "startFrame": 0, "durationFrames": 113}, {"text": "功能也只有运动监测而已。", "startFrame": 112, "durationFrames": 59}, {"text": "那是只有有钱人才能买得起的玩具。", "startFrame": 170, "durationFrames": 68}]} totalDurationFrames={239} imageSrc={staticFile("images/小米平权/scene_4_2.png")} enterEffect="fadeIn" anchors={[{"text": "昂贵的手环", "showFrom": 0, "color": "#000000", "anim": "spring", "audioEffect": "ping"}, {"text": "有钱人的玩具", "showFrom": 2, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={265} durationInFrames={121}>
                <BWCenterFocus content={[{"text": "然后小米进来了，79元。", "startFrame": 0, "durationFrames": 71}, {"text": "一年卖1000万条，", "startFrame": 70, "durationFrames": 51}]} totalDurationFrames={121} imageSrc={staticFile("images/小米平权/scene_4_3.png")} enterEffect="fadeIn" anchors={[{"text": "79元", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "1000万条", "showFrom": 1, "color": "#000000", "anim": "highlight", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={386} durationInFrames={124}>
                <BWStatCompare content={[{"text": "对标品牌第二天就把670元的产品，", "startFrame": 0, "durationFrames": 78}, {"text": "直接降到99元。", "startFrame": 77, "durationFrames": 47}]} totalDurationFrames={124} bars={[{"label": "对标原价", "value": 670, "showFrom": 0}, {"label": "次日标价", "value": 99, "showFrom": 1}]} />
            </Sequence>
            <Sequence from={510} durationInFrames={346}>
                <BWDosAndDonts content={[{"text": "空气净化器，", "startFrame": 0, "durationFrames": 29}, {"text": "以前飞利浦卖7999元，", "startFrame": 28, "durationFrames": 66}, {"text": "类似效果的产品最便宜也要4500多。", "startFrame": 93, "durationFrames": 94}, {"text": "小米899元进来，", "startFrame": 186, "durationFrames": 51}, {"text": "普通家庭终于能用上靠谱净化器，", "startFrame": 237, "durationFrames": 70}, {"text": "不用每天吸雾霾。", "startFrame": 306, "durationFrames": 39}]} totalDurationFrames={346} left={{label: "❌ 高价门槛", src: staticFile("images/小米平权/scene_4_5_left.png"), showFrom: 1 }} right={{label: "✅ 平价用上", src: staticFile("images/小米平权/scene_4_5_right.png"), showFrom: 3 }} />
            </Sequence>
            <Sequence from={856} durationInFrames={306}>
                <BWDosAndDonts content={[{"text": "智能电视，", "startFrame": 0, "durationFrames": 28}, {"text": "以前大尺寸六七千起步。", "startFrame": 27, "durationFrames": 67}, {"text": "2013年，小米来了，47寸只要两千九百九十九元。", "startFrame": 93, "durationFrames": 129}, {"text": "首批3000台，1分58秒就卖完了。", "startFrame": 222, "durationFrames": 83}]} totalDurationFrames={306} left={{label: "❌ 高价大屏", src: staticFile("images/小米平权/scene_4_7_left.png"), showFrom: 1 }} right={{label: "✅ 小米定价", src: staticFile("images/小米平权/scene_4_7_right.png"), showFrom: 2 }} />
            </Sequence>
            <Sequence from={1162} durationInFrames={189}>
                <BWPanelGrid content={[{"text": "之后海信、", "startFrame": 0, "durationFrames": 29}, {"text": "TCL、", "startFrame": 28, "durationFrames": 16}, {"text": "创维，", "startFrame": 43, "durationFrames": 17}, {"text": "被迫全线降价。", "startFrame": 60, "durationFrames": 42}, {"text": "普通家庭第一次能用上大屏智能电视", "startFrame": 101, "durationFrames": 88}]} totalDurationFrames={189} panels={[{ src: staticFile("images/小米平权/scene_4_9_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { src: staticFile("images/小米平权/scene_4_9_img1.png"), showFrom: 1, enterEffect: "slideLeft" }, { src: staticFile("images/小米平权/scene_4_9_img2.png"), showFrom: 2, enterEffect: "slideBottom" }]} />
            </Sequence>
            <Sequence from={1351} durationInFrames={278}>
                <BWCauseChain content={[{"text": "科技产品的每个品类的逻辑都一样：", "startFrame": 0, "durationFrames": 77}, {"text": "以前有人靠没有竞争的高溢价收割你，", "startFrame": 76, "durationFrames": 82}, {"text": "小米进来，把价格打下来，", "startFrame": 158, "durationFrames": 56}, {"text": "把科技真正交到普通人手里。", "startFrame": 213, "durationFrames": 65}]} totalDurationFrames={278} layout={"horizontal"} nodes={[{ label: "高溢价收割", imageSrc: staticFile("images/小米平权/scene_4_10_img0.png"), showFrom: 1, enterEffect: "slideLeft" }, { label: "小米降价", imageSrc: staticFile("images/小米平权/scene_4_10_img1.png"), showFrom: 2, enterEffect: "zoomIn" }, { label: "科技到手", imageSrc: staticFile("images/小米平权/scene_4_10_img2.png"), showFrom: 3, enterEffect: "slideBottom" }]} />
            </Sequence>
            <Audio src={staticFile("/audio/小米平权/scene_4/scene_4.mp3")} />
        </AbsoluteFill>
    );
};
