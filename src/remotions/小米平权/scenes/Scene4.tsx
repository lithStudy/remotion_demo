import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCauseChain, BWCenterFocus, BWDosAndDonts, BWPanelGrid, BWStatCompare, BWTextFocus } from "../../../components";

// 剖析：小米模式的降维打击
const SCENE_DURATION = 33 + 251 + 116 + 133 + 396 + 321 + 218 + 283;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={33}>
                <BWTextFocus content={[{"text": "不止手机。", "startFrame": 0, "durationFrames": 33}]} totalDurationFrames={33} coreSentence={["不止手机。"]} />
            </Sequence>
            <Sequence from={33} durationInFrames={251}>
                <BWCenterFocus content={[{"text": "2014年之前，手环类产品动辄七百多八百多，", "startFrame": 0, "durationFrames": 115}, {"text": "功能也只有运动监测而已。", "startFrame": 114, "durationFrames": 64}, {"text": "那是只有有钱人才能买得起的玩具。", "startFrame": 177, "durationFrames": 74}]} totalDurationFrames={251} imageSrc={staticFile("images/小米平权/scene_4_2.png")} enterEffect="fadeIn" anchors={[{"text": "昂贵的手环", "showFrom": 0, "color": "#000000", "anim": "spring", "audioEffect": "ping"}, {"text": "有钱人的玩具", "showFrom": 2, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={284} durationInFrames={116}>
                <BWCenterFocus content={[{"text": "然后小米进来了，79元。", "startFrame": 0, "durationFrames": 67}, {"text": "一年卖1000万条，", "startFrame": 66, "durationFrames": 50}]} totalDurationFrames={116} imageSrc={staticFile("images/小米平权/scene_4_3.png")} enterEffect="fadeIn" anchors={[{"text": "79元", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "1000万条", "showFrom": 1, "color": "#000000", "anim": "highlight", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={400} durationInFrames={133}>
                <BWStatCompare content={[{"text": "对标品牌第二天就把670元的产品，", "startFrame": 0, "durationFrames": 89}, {"text": "直接降到99元。", "startFrame": 88, "durationFrames": 44}]} totalDurationFrames={133} bars={[{"label": "对标原价", "value": 670, "showFrom": 0}, {"label": "次日标价", "value": 99, "showFrom": 1}]} />
            </Sequence>
            <Sequence from={533} durationInFrames={396}>
                <BWDosAndDonts content={[{"text": "空气净化器，", "startFrame": 0, "durationFrames": 46}, {"text": "以前飞利浦卖7999元，", "startFrame": 45, "durationFrames": 78}, {"text": "类似效果的产品最便宜也要4500多。", "startFrame": 123, "durationFrames": 95}, {"text": "小米899元进来，", "startFrame": 218, "durationFrames": 59}, {"text": "普通家庭终于能用上靠谱净化器，", "startFrame": 277, "durationFrames": 71}, {"text": "不用每天吸雾霾。", "startFrame": 348, "durationFrames": 48}]} totalDurationFrames={396} left={{label: "❌ 高价门槛", src: staticFile("images/小米平权/scene_4_5_left.png"), showFrom: 1 }} right={{label: "✅ 平价用上", src: staticFile("images/小米平权/scene_4_5_right.png"), showFrom: 3 }} />
            </Sequence>
            <Sequence from={929} durationInFrames={321}>
                <BWDosAndDonts content={[{"text": "智能电视，", "startFrame": 0, "durationFrames": 29}, {"text": "以前大尺寸六七千起步。", "startFrame": 28, "durationFrames": 68}, {"text": "2013年，小米来了，47寸只要两千九百九十九元。", "startFrame": 96, "durationFrames": 128}, {"text": "首批3000台，1分58秒就卖完了。", "startFrame": 223, "durationFrames": 98}]} totalDurationFrames={321} left={{label: "❌ 高价大屏", src: staticFile("images/小米平权/scene_4_7_left.png"), showFrom: 1 }} right={{label: "✅ 小米定价", src: staticFile("images/小米平权/scene_4_7_right.png"), showFrom: 2 }} />
            </Sequence>
            <Sequence from={1250} durationInFrames={218}>
                <BWPanelGrid content={[{"text": "之后海信、", "startFrame": 0, "durationFrames": 32}, {"text": "TCL、", "startFrame": 31, "durationFrames": 19}, {"text": "创维，", "startFrame": 50, "durationFrames": 22}, {"text": "被迫全线降价。", "startFrame": 72, "durationFrames": 56}, {"text": "普通家庭第一次能用上大屏智能电视", "startFrame": 127, "durationFrames": 90}]} totalDurationFrames={218} panels={[{ src: staticFile("images/小米平权/scene_4_9_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { src: staticFile("images/小米平权/scene_4_9_img1.png"), showFrom: 1, enterEffect: "slideLeft" }, { src: staticFile("images/小米平权/scene_4_9_img2.png"), showFrom: 2, enterEffect: "slideBottom" }]} />
            </Sequence>
            <Sequence from={1468} durationInFrames={283}>
                <BWCauseChain content={[{"text": "科技产品的每个品类的逻辑都一样：", "startFrame": 0, "durationFrames": 74}, {"text": "以前有人靠没有竞争的高溢价收割你，", "startFrame": 73, "durationFrames": 84}, {"text": "小米进来，把价格打下来，", "startFrame": 157, "durationFrames": 62}, {"text": "把科技真正交到普通人手里。", "startFrame": 218, "durationFrames": 65}]} totalDurationFrames={283} layout={"horizontal"} nodes={[{ label: "高溢价收割", imageSrc: staticFile("images/小米平权/scene_4_10_img0.png"), showFrom: 1, enterEffect: "slideLeft" }, { label: "小米降价", imageSrc: staticFile("images/小米平权/scene_4_10_img1.png"), showFrom: 2, enterEffect: "zoomIn" }, { label: "科技到手", imageSrc: staticFile("images/小米平权/scene_4_10_img2.png"), showFrom: 3, enterEffect: "slideBottom" }]} />
            </Sequence>
            <Audio src={staticFile("/audio/小米平权/scene_4/scene_4.mp3")} />
        </AbsoluteFill>
    );
};
