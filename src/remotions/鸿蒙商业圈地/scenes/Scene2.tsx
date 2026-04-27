import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWBeatSequence, BWCenterFocus, BWCognitiveShift, BWConceptCard, BWKpiHero, BWMagnifyingGlass, BWQuoteCitation, BWSplitCompare } from "../../../components";

// 剖析：商业双标
const SCENE_DURATION = 77 + 82 + 123 + 137 + 159 + 67 + 132 + 176 + 256 + 80 + 304 + 171 + 147 + 119;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={77}>
                <BWQuoteCitation content={[{"text": "有人说安卓不自主，", "startFrame": 0, "durationFrames": 42}, {"text": "会被卡脖子。", "startFrame": 41, "durationFrames": 35}]} totalDurationFrames={77} quoteDisplayText={"安卓不自主，会被卡脖子"} quoteSource={"网络观点"} anchors={[]} />
            </Sequence>
            <Sequence from={77} durationInFrames={82}>
                <BWConceptCard content={[{"text": "但安卓的代码，", "startFrame": 0, "durationFrames": 33}, {"text": "是全球彻底开源的。", "startFrame": 32, "durationFrames": 50}]} totalDurationFrames={82} imageSrc={staticFile("images/鸿蒙商业圈地/scene_2_2.png")} conceptName={"开源的安卓"} anchors={[]} />
            </Sequence>
            <Sequence from={159} durationInFrames={123}>
                <BWCenterFocus content={[{"text": "任何人，", "startFrame": 0, "durationFrames": 26}, {"text": "包括你————", "startFrame": 25, "durationFrames": 18}, {"text": "我的朋友，", "startFrame": 42, "durationFrames": 24}, {"text": "你也能下载到完整的代码。", "startFrame": 66, "durationFrames": 56}]} totalDurationFrames={123} imageSrc={staticFile("images/鸿蒙商业圈地/scene_2_3.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={282} durationInFrames={137}>
                <BWSplitCompare content={[{"text": "你可以下载代码去做安全审计，", "startFrame": 0, "durationFrames": 67}, {"text": "你也可以下载代码去做深度定制。", "startFrame": 66, "durationFrames": 70}]} totalDurationFrames={137} leftSrc={staticFile("images/鸿蒙商业圈地/scene_2_4_left.png")} rightSrc={staticFile("images/鸿蒙商业圈地/scene_2_4_right.png")} leftLabel={"安全审计"} rightLabel={"深度定制"} leftShowFrom={0} rightShowFrom={1} anchors={[]} />
            </Sequence>
            <Sequence from={419} durationInFrames={159}>
                <BWBeatSequence content={[{"text": "你下载到的代码是你自己的，", "startFrame": 0, "durationFrames": 63}, {"text": "你可以直接本地运行。", "startFrame": 62, "durationFrames": 53}, {"text": "没有谁能卡你的脖子。", "startFrame": 114, "durationFrames": 44}]} totalDurationFrames={159} stages={[{ imageSrc: staticFile("images/鸿蒙商业圈地/scene_2_5_img0.png"), enterEffect: "breathe", tone: "calm" }, { imageSrc: staticFile("images/鸿蒙商业圈地/scene_2_5_img1.png"), enterEffect: "slideBottom", tone: "alert" }, { imageSrc: staticFile("images/鸿蒙商业圈地/scene_2_5_img2.png"), enterEffect: "zoomIn", tone: "alert" }]} anchors={[]} />
            </Sequence>
            <Sequence from={578} durationInFrames={67}>
                <BWQuoteCitation content={[{"text": "有人说安卓不安全，", "startFrame": 0, "durationFrames": 38}, {"text": "会被装漏洞。", "startFrame": 37, "durationFrames": 30}]} totalDurationFrames={67} quoteSource={"网络观点"} quoteDisplayText={"安卓不安全，会被装漏洞。"} anchors={[]} />
            </Sequence>
            <Sequence from={645} durationInFrames={132}>
                <BWCognitiveShift content={[{"text": "但我告诉你，", "startFrame": 0, "durationFrames": 34}, {"text": "开源的安卓，", "startFrame": 33, "durationFrames": 38}, {"text": "远比闭源的鸿蒙更安全！", "startFrame": 70, "durationFrames": 62}]} totalDurationFrames={132} notText={"闭源更安全"} butText={"开源更安全"} butSrc={staticFile("images/鸿蒙商业圈地/scene_2_7.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Sequence from={777} durationInFrames={176}>
                <BWMagnifyingGlass content={[{"text": "因为安卓背后，", "startFrame": 0, "durationFrames": 36}, {"text": "是全球最顶尖的白客。", "startFrame": 36, "durationFrames": 58}, {"text": "成千上万的大脑，", "startFrame": 93, "durationFrames": 43}, {"text": "每天帮它找漏洞。", "startFrame": 136, "durationFrames": 40}]} totalDurationFrames={176} anchors={[{"text": "白客", "showFrom": 1, "color": "#000000", "anim": "popIn", "audioEffect": "ping"}, {"text": "找漏洞", "showFrom": 3, "color": "#000000", "anim": "highlight", "audioEffect": "woosh"}]} />
            </Sequence>
            <Sequence from={953} durationInFrames={256}>
                <BWKpiHero content={[{"text": "而鸿蒙呢？", "startFrame": 0, "durationFrames": 29}, {"text": "作为一个闭源系统。", "startFrame": 28, "durationFrames": 43}, {"text": "不过是一家公司，", "startFrame": 70, "durationFrames": 43}, {"text": "最多一百多号人的开发团队。", "startFrame": 113, "durationFrames": 70}, {"text": "拿什么碰瓷安卓的代码安全性？", "startFrame": 183, "durationFrames": 73}]} totalDurationFrames={256} blocks={[{"value": 1, "label": "公司", "showFrom": 2}, {"value": 100, "suffix": "+人", "label": "开发团队", "showFrom": 3}]} anchors={[{"text": "闭源系统", "showFrom": 1, "color": "#000000", "anim": "popIn", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={1209} durationInFrames={80}>
                <BWQuoteCitation content={[{"text": "有人说国家核心系统不能用安卓，", "startFrame": 0, "durationFrames": 80}]} totalDurationFrames={80} quoteSource={"网络观点"} quoteDisplayText={"国家核心系统不能用安卓"} anchors={[]} />
            </Sequence>
            <Sequence from={1289} durationInFrames={304}>
                <BWCenterFocus content={[{"text": "但他们不知道，", "startFrame": 0, "durationFrames": 32}, {"text": "国家需要保密的机构使用的所谓'国产系统'，", "startFrame": 31, "durationFrames": 106}, {"text": "包括麒麟、红旗、欧拉，", "startFrame": 137, "durationFrames": 78}, {"text": "全部都是基于国外开源的linux打造的。", "startFrame": 214, "durationFrames": 89}]} totalDurationFrames={304} imageSrc={staticFile("images/鸿蒙商业圈地/scene_2_13.png")} enterEffect="fadeIn" anchors={[{"text": "源于linux", "showFrom": 3, "color": "#000000", "anim": "popIn", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={1593} durationInFrames={171}>
                <BWCenterFocus content={[{"text": "鸿蒙的底层，", "startFrame": 0, "durationFrames": 35}, {"text": "和小米、OPPO一样。", "startFrame": 34, "durationFrames": 51}, {"text": "追根溯源，", "startFrame": 85, "durationFrames": 31}, {"text": "全都流着开源安卓的血。", "startFrame": 115, "durationFrames": 55}]} totalDurationFrames={171} imageSrc={staticFile("images/鸿蒙商业圈地/scene_2_14.png")} enterEffect="fadeIn" anchors={[{"text": "源于安卓", "showFrom": 3, "color": "#000000", "anim": "popIn", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={1764} durationInFrames={147}>
                <BWSplitCompare content={[{"text": "凭什么基于Linux，", "startFrame": 0, "durationFrames": 40}, {"text": "就是安全典范？", "startFrame": 39, "durationFrames": 35}, {"text": "基于开源安卓，", "startFrame": 74, "durationFrames": 39}, {"text": "就成了卖国贼？", "startFrame": 112, "durationFrames": 34}]} totalDurationFrames={147} leftSrc={staticFile("images/鸿蒙商业圈地/scene_2_15_left.png")} rightSrc={staticFile("images/鸿蒙商业圈地/scene_2_15_right.png")} leftLabel={"安全典范"} rightLabel={"卖国贼"} leftShowFrom={0} rightShowFrom={2} anchors={[]} />
            </Sequence>
            <Sequence from={1911} durationInFrames={119}>
                <BWCognitiveShift content={[{"text": "这根本不是技术探讨。", "startFrame": 0, "durationFrames": 48}, {"text": "这是赤裸裸的，商业双标！", "startFrame": 48, "durationFrames": 71}]} totalDurationFrames={119} notText={"技术探讨"} butText={"商业双标"} butSrc={staticFile("images/鸿蒙商业圈地/scene_2_16.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/鸿蒙商业圈地/scene_2/scene_2.mp3")} />
        </AbsoluteFill>
    );
};
