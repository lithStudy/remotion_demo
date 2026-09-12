import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWBeatSequence, BWCenterFocus, BWCognitiveShift, BWConceptCard, BWKpiHero, BWMagnifyingGlass, BWPanelGrid, BWQuoteCitation, BWSplitCompare } from "../../../components";

// 剖析：商业双标
const SCENE_DURATION = 82 + 89 + 108 + 149 + 151 + 101 + 146 + 233 + 86 + 124 + 173 + 219 + 71 + 280 + 167 + 144 + 106;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={82}>
                <BWQuoteCitation content={[{"text": "有人说安卓不自主，", "startFrame": 0, "durationFrames": 46}, {"text": "会被卡脖子。", "startFrame": 45, "durationFrames": 36}]} totalDurationFrames={82} quoteDisplayText={"安卓不自主，会被卡脖子"} quoteSource={"网络观点"} anchors={[]} />
            </Sequence>
            <Sequence from={82} durationInFrames={89}>
                <BWConceptCard content={[{"text": "但安卓的主体代码，", "startFrame": 0, "durationFrames": 42}, {"text": "是全球彻底开源的。", "startFrame": 41, "durationFrames": 48}]} totalDurationFrames={89} imageSrc={staticFile("images/鸿蒙商业圈地/scene_2_2.png")} conceptName={"开源的安卓"} anchors={[]} />
            </Sequence>
            <Sequence from={171} durationInFrames={108}>
                <BWCenterFocus content={[{"text": "任何人，", "startFrame": 0, "durationFrames": 24}, {"text": "包括你————", "startFrame": 24, "durationFrames": 12}, {"text": "我的朋友，", "startFrame": 36, "durationFrames": 23}, {"text": "你也能下载到完整的代码。", "startFrame": 58, "durationFrames": 49}]} totalDurationFrames={108} imageSrc={staticFile("images/鸿蒙商业圈地/scene_2_3.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={279} durationInFrames={149}>
                <BWSplitCompare content={[{"text": "你可以下载代码去做安全审计，", "startFrame": 0, "durationFrames": 77}, {"text": "你也可以下载代码去做深度定制。", "startFrame": 76, "durationFrames": 73}]} totalDurationFrames={149} leftSrc={staticFile("images/鸿蒙商业圈地/scene_2_4_left.png")} rightSrc={staticFile("images/鸿蒙商业圈地/scene_2_4_right.png")} leftLabel={"安全审计"} rightLabel={"深度定制"} leftShowFrom={0} rightShowFrom={1} anchors={[]} />
            </Sequence>
            <Sequence from={428} durationInFrames={151}>
                <BWBeatSequence content={[{"text": "你下载到的代码是你自己的，", "startFrame": 0, "durationFrames": 56}, {"text": "你可以直接本地运行。", "startFrame": 55, "durationFrames": 45}, {"text": "没有谁能卡你的脖子。", "startFrame": 99, "durationFrames": 51}]} totalDurationFrames={151} stages={[{ imageSrc: staticFile("images/鸿蒙商业圈地/scene_2_5_img0.png"), enterEffect: "breathe", tone: "calm" }, { imageSrc: staticFile("images/鸿蒙商业圈地/scene_2_5_img1.png"), enterEffect: "slideBottom", tone: "alert" }, { imageSrc: staticFile("images/鸿蒙商业圈地/scene_2_5_img2.png"), enterEffect: "zoomIn", tone: "alert" }]} anchors={[]} />
            </Sequence>
            <Sequence from={579} durationInFrames={101}>
                <BWQuoteCitation content={[{"text": "有人说安卓的GMS部分是", "startFrame": 0, "durationFrames": 71}, {"text": "不开源的。", "startFrame": 70, "durationFrames": 30}]} totalDurationFrames={101} quoteSource={"网络观点"} quoteDisplayText={"安卓的GMS部分是不开源的。"} anchors={[]} />
            </Sequence>
            <Sequence from={680} durationInFrames={146}>
                <BWConceptCard content={[{"text": "确实不开源，", "startFrame": 0, "durationFrames": 33}, {"text": "但由于中国的网络限制，", "startFrame": 32, "durationFrames": 53}, {"text": "我们本来就无法使用GMS。", "startFrame": 85, "durationFrames": 61}]} totalDurationFrames={146} imageSrc={staticFile("images/鸿蒙商业圈地/scene_2_7.png")} conceptName={"GMS"} anchors={[]} />
            </Sequence>
            <Sequence from={826} durationInFrames={233}>
                <BWPanelGrid content={[{"text": "小米、oppo、vivo，", "startFrame": 0, "durationFrames": 54}, {"text": "所有的中国安卓手机都是自研的GMS，", "startFrame": 53, "durationFrames": 102}, {"text": "这根本不影响安卓主体功能的使用。", "startFrame": 154, "durationFrames": 79}]} totalDurationFrames={233} panels={[{ src: staticFile("images/鸿蒙商业圈地/scene_2_8_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { src: staticFile("images/鸿蒙商业圈地/scene_2_8_img1.png"), showFrom: 0, enterEffect: "fadeIn" }, { src: staticFile("images/鸿蒙商业圈地/scene_2_8_img2.png"), showFrom: 0, enterEffect: "fadeIn" }]} anchors={[{"text": "自研的GMS", "showFrom": 1, "color": "#000000", "anim": "highlight", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={1059} durationInFrames={86}>
                <BWQuoteCitation content={[{"text": "有人说安卓不安全，", "startFrame": 0, "durationFrames": 53}, {"text": "会被装漏洞。", "startFrame": 52, "durationFrames": 33}]} totalDurationFrames={86} quoteSource={"网络观点"} quoteDisplayText={"安卓不安全，会被装漏洞。"} anchors={[]} />
            </Sequence>
            <Sequence from={1145} durationInFrames={124}>
                <BWCognitiveShift content={[{"text": "但我告诉你，", "startFrame": 0, "durationFrames": 32}, {"text": "开源的安卓，", "startFrame": 31, "durationFrames": 36}, {"text": "远比闭源的鸿蒙更安全！", "startFrame": 67, "durationFrames": 56}]} totalDurationFrames={124} notText={"闭源更安全"} butText={"开源更安全"} butSrc={staticFile("images/鸿蒙商业圈地/scene_2_7.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Sequence from={1269} durationInFrames={173}>
                <BWMagnifyingGlass content={[{"text": "因为安卓背后，", "startFrame": 0, "durationFrames": 32}, {"text": "是全球最顶尖的白客。", "startFrame": 31, "durationFrames": 57}, {"text": "成千上万的大脑，", "startFrame": 88, "durationFrames": 42}, {"text": "每天帮它找漏洞。", "startFrame": 129, "durationFrames": 43}]} totalDurationFrames={173} anchors={[{"text": "白客", "showFrom": 1, "color": "#000000", "anim": "popIn", "audioEffect": "ping"}, {"text": "找漏洞", "showFrom": 3, "color": "#000000", "anim": "highlight", "audioEffect": "woosh"}]} />
            </Sequence>
            <Sequence from={1442} durationInFrames={219}>
                <BWKpiHero content={[{"text": "而鸿蒙呢？", "startFrame": 0, "durationFrames": 27}, {"text": "作为一个闭源系统。", "startFrame": 26, "durationFrames": 42}, {"text": "不过是一家公司，", "startFrame": 67, "durationFrames": 36}, {"text": "最多一百多号人的开发团队。", "startFrame": 103, "durationFrames": 49}, {"text": "拿什么碰瓷安卓的代码安全性？", "startFrame": 151, "durationFrames": 67}]} totalDurationFrames={219} blocks={[{"value": 1, "label": "公司", "showFrom": 2}, {"value": 100, "suffix": "+人", "label": "开发团队", "showFrom": 3}]} anchors={[{"text": "闭源系统", "showFrom": 1, "color": "#000000", "anim": "popIn", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={1661} durationInFrames={71}>
                <BWQuoteCitation content={[{"text": "有人说国家核心系统不能用安卓，", "startFrame": 0, "durationFrames": 71}]} totalDurationFrames={71} quoteSource={"网络观点"} quoteDisplayText={"国家核心系统不能用安卓"} anchors={[]} />
            </Sequence>
            <Sequence from={1732} durationInFrames={280}>
                <BWCenterFocus content={[{"text": "但他们不知道，", "startFrame": 0, "durationFrames": 30}, {"text": "国家需要保密的机构使用的所谓'国产系统'，", "startFrame": 29, "durationFrames": 99}, {"text": "包括麒麟、红旗、欧拉，", "startFrame": 127, "durationFrames": 68}, {"text": "全部都是基于国外开源的linux打造的。", "startFrame": 195, "durationFrames": 85}]} totalDurationFrames={280} imageSrc={staticFile("images/鸿蒙商业圈地/scene_2_13.png")} enterEffect="fadeIn" anchors={[{"text": "源于linux", "showFrom": 3, "color": "#000000", "anim": "popIn", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={2012} durationInFrames={167}>
                <BWCenterFocus content={[{"text": "鸿蒙的底层，", "startFrame": 0, "durationFrames": 31}, {"text": "和小米、OPPO一样。", "startFrame": 30, "durationFrames": 51}, {"text": "追根溯源，", "startFrame": 80, "durationFrames": 33}, {"text": "全都流着开源安卓的血。", "startFrame": 113, "durationFrames": 53}]} totalDurationFrames={167} imageSrc={staticFile("images/鸿蒙商业圈地/scene_2_14.png")} enterEffect="fadeIn" anchors={[{"text": "源于安卓", "showFrom": 3, "color": "#000000", "anim": "popIn", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={2179} durationInFrames={144}>
                <BWSplitCompare content={[{"text": "凭什么基于Linux，", "startFrame": 0, "durationFrames": 39}, {"text": "就是安全典范？", "startFrame": 38, "durationFrames": 39}, {"text": "基于开源安卓，", "startFrame": 76, "durationFrames": 39}, {"text": "就成了卖国贼？", "startFrame": 114, "durationFrames": 29}]} totalDurationFrames={144} leftSrc={staticFile("images/鸿蒙商业圈地/scene_2_15_left.png")} rightSrc={staticFile("images/鸿蒙商业圈地/scene_2_15_right.png")} leftLabel={"安全典范"} rightLabel={"卖国贼"} leftShowFrom={0} rightShowFrom={2} anchors={[]} />
            </Sequence>
            <Sequence from={2323} durationInFrames={106}>
                <BWCognitiveShift content={[{"text": "这根本不是技术探讨。", "startFrame": 0, "durationFrames": 48}, {"text": "这是赤裸裸的，商业双标！", "startFrame": 48, "durationFrames": 58}]} totalDurationFrames={106} notText={"技术探讨"} butText={"商业双标"} butSrc={staticFile("images/鸿蒙商业圈地/scene_2_16.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/鸿蒙商业圈地/scene_2/scene_2.mp3")} />
        </AbsoluteFill>
    );
};
