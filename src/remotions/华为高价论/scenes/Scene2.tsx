import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCauseChain, BWCenterFocus, BWConceptCard, BWPanelGrid, BWSplitCompare, BWStatCompare, BWTextFocus, BWTimeline } from "../../../components";

// 剖析：制裁成本结构
const SCENE_DURATION = 208 + 70 + 94 + 106 + 72 + 243 + 105 + 167 + 190 + 69 + 123 + 123 + 273 + 88 + 123;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={208}>
                <BWCenterFocus content={[{"text": "美国全面制裁华为以后，", "startFrame": 0, "durationFrames": 57}, {"text": "华为必须把产业链切到国内。", "startFrame": 56, "durationFrames": 65}, {"text": "但是产业链中有些产品有两类问题。", "startFrame": 121, "durationFrames": 87}]} totalDurationFrames={208} imageSrc={staticFile("images/华为高价论/scene_2_1.png")} enterEffect="fadeIn" anchors={[{"text": "美国制裁", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={208} durationInFrames={70}>
                <BWConceptCard content={[{"text": "第一类，", "startFrame": 0, "durationFrames": 18}, {"text": "国内能做，", "startFrame": 17, "durationFrames": 28}, {"text": "但质量差。", "startFrame": 44, "durationFrames": 26}]} totalDurationFrames={70} imageSrc={staticFile("images/华为高价论/scene_2_2.png")} conceptName={"技术跟不上"} anchors={[]} />
            </Sequence>
            <Sequence from={278} durationInFrames={94}>
                <BWPanelGrid content={[{"text": "摄像头、", "startFrame": 0, "durationFrames": 30}, {"text": "传感器、", "startFrame": 29, "durationFrames": 30}, {"text": "射频器件等", "startFrame": 58, "durationFrames": 35}]} totalDurationFrames={94} panels={[{ src: staticFile("images/华为高价论/scene_2_3_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { src: staticFile("images/华为高价论/scene_2_3_img1.png"), showFrom: 1, enterEffect: "fadeIn" }, { src: staticFile("images/华为高价论/scene_2_3_img2.png"), showFrom: 2, enterEffect: "fadeIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={372} durationInFrames={106}>
                <BWCauseChain content={[{"text": "你要达到别人差不多的效果，", "startFrame": 0, "durationFrames": 58}, {"text": "就要付出更高的成本。", "startFrame": 57, "durationFrames": 49}]} totalDurationFrames={106} layout={"horizontal"} nodes={[{ label: "追平效果", imageSrc: staticFile("images/华为高价论/scene_2_4_img0.png"), showFrom: 0, enterEffect: "breathe" }, { label: "成本上升", imageSrc: staticFile("images/华为高价论/scene_2_4_img1.png"), showFrom: 1, enterEffect: "breathe" }]} anchors={[]} />
            </Sequence>
            <Sequence from={478} durationInFrames={72}>
                <BWCauseChain content={[{"text": "你要控制成本，", "startFrame": 0, "durationFrames": 31}, {"text": "体验就会打折。", "startFrame": 30, "durationFrames": 42}]} totalDurationFrames={72} layout={"horizontal"} nodes={[{ label: "控制成本", imageSrc: staticFile("images/华为高价论/scene_2_5_img0.png"), showFrom: 0, enterEffect: "breathe" }, { label: "体验打折", imageSrc: staticFile("images/华为高价论/scene_2_5_img1.png"), showFrom: 1, enterEffect: "breathe" }]} anchors={[]} />
            </Sequence>
            <Sequence from={550} durationInFrames={243}>
                <BWSplitCompare content={[{"text": "别人的钱，", "startFrame": 0, "durationFrames": 26}, {"text": "能花在性能、影像、续航、做工上。", "startFrame": 25, "durationFrames": 95}, {"text": "华为的钱，", "startFrame": 120, "durationFrames": 29}, {"text": "有相当一部分，", "startFrame": 148, "durationFrames": 35}, {"text": "要花在“替代”这件事本身上。", "startFrame": 183, "durationFrames": 60}]} totalDurationFrames={243} leftSrc={staticFile("images/华为高价论/scene_2_6_left.png")} rightSrc={staticFile("images/华为高价论/scene_2_6_right.png")} leftLabel={"产品研发"} rightLabel={"替代成本"} leftShowFrom={0} rightShowFrom={2} anchors={[]} />
            </Sequence>
            <Sequence from={793} durationInFrames={105}>
                <BWConceptCard content={[{"text": "第二类，", "startFrame": 0, "durationFrames": 17}, {"text": "国内根本没有成熟方案。", "startFrame": 16, "durationFrames": 50}, {"text": "光刻机就是典型。", "startFrame": 65, "durationFrames": 40}]} totalDurationFrames={105} imageSrc={staticFile("images/华为高价论/scene_2_7.png")} conceptName={"没有成熟方案"} anchors={[]} />
            </Sequence>
            <Sequence from={898} durationInFrames={167}>
                <BWCauseChain content={[{"text": "华为芯片名义国产，", "startFrame": 0, "durationFrames": 47}, {"text": "中芯国际在做。", "startFrame": 46, "durationFrames": 41}, {"text": "但中芯国际用的光刻机依然是外国的，", "startFrame": 87, "durationFrames": 80}]} totalDurationFrames={167} layout={"horizontal"} nodes={[{ label: "名义国产", imageSrc: staticFile("images/华为高价论/scene_2_8_img0.png"), showFrom: 0, enterEffect: "zoomIn" }, { label: "中芯代工", imageSrc: staticFile("images/华为高价论/scene_2_8_img1.png"), showFrom: 1, enterEffect: "zoomIn" }, { label: "外国光刻机", imageSrc: staticFile("images/华为高价论/scene_2_8_img2.png"), showFrom: 2, enterEffect: "zoomIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={1065} durationInFrames={190}>
                <BWCenterFocus content={[{"text": "而且因为制裁买不到先进的光刻机。", "startFrame": 0, "durationFrames": 77}, {"text": "只能用多重曝光，", "startFrame": 76, "durationFrames": 39}, {"text": "在受限设备上，", "startFrame": 114, "durationFrames": 36}, {"text": "硬造 7nm。", "startFrame": 150, "durationFrames": 40}]} totalDurationFrames={190} imageSrc={staticFile("images/华为高价论/scene_2_9.png")} enterEffect="fadeIn" anchors={[{"text": "硬造 7nm", "showFrom": 2, "color": "#EF4444", "anim": "spring", "audioEffect": null}]} />
            </Sequence>
            <Sequence from={1255} durationInFrames={69}>
                <BWTextFocus content={[{"text": "工艺越复杂，", "startFrame": 0, "durationFrames": 36}, {"text": "良品率越低。", "startFrame": 36, "durationFrames": 33}]} totalDurationFrames={69} coreSentence={[{"text": "工艺越复杂，", "showFrom": 0}, {"text": "良品率越低。", "showFrom": 1, "endFrom": 1}]} coreSentenceAnchors={[{"text": "良品率", "showFrom": 0, "color": "#EF4444", "anim": "popIn", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={1324} durationInFrames={123}>
                <BWStatCompare content={[{"text": "别人生产一颗芯片花一块钱。", "startFrame": 0, "durationFrames": 68}, {"text": "中芯国际可能要花十块。", "startFrame": 67, "durationFrames": 56}]} totalDurationFrames={123} bars={[{"label": "别人", "value": 1, "showFrom": 0}, {"label": "中芯国际", "value": 10, "showFrom": 1}]} anchors={[]} />
            </Sequence>
            <Sequence from={1447} durationInFrames={123}>
                <BWTextFocus content={[{"text": "即使做到了 7nm，", "startFrame": 0, "durationFrames": 45}, {"text": "也只是勉强达到别人的前几代产品。", "startFrame": 44, "durationFrames": 79}]} totalDurationFrames={123} coreSentence={[{"text": "即使做到了 7nm，", "showFrom": 0}, {"text": "也只是勉强达到前几代产品。", "showFrom": 1, "endFrom": 1}]} coreSentenceAnchors={[]} />
            </Sequence>
            <Sequence from={1570} durationInFrames={273}>
                <BWTimeline content={[{"text": "当然，", "startFrame": 0, "durationFrames": 16}, {"text": "还有可能的灰色路径。", "startFrame": 15, "durationFrames": 47}, {"text": "通过中间商、", "startFrame": 62, "durationFrames": 31}, {"text": "白手套公司，", "startFrame": 92, "durationFrames": 31}, {"text": "采购国外零部件。", "startFrame": 123, "durationFrames": 41}, {"text": "再把来源隐藏起来，", "startFrame": 163, "durationFrames": 51}, {"text": "包装成“国产突破”。", "startFrame": 214, "durationFrames": 59}]} totalDurationFrames={273} images={[{ src: staticFile("images/华为高价论/scene_2_13_img0.png"), enterEffect: "slideBottom", textIndex: 2, label: "白手套采购" }, { src: staticFile("images/华为高价论/scene_2_13_img1.png"), enterEffect: "slideBottom", textIndex: 4, label: "隐藏来源" }, { src: staticFile("images/华为高价论/scene_2_13_img2.png"), enterEffect: "slideBottom", textIndex: 6, label: "伪装国产" }]} />
            </Sequence>
            <Sequence from={1843} durationInFrames={88}>
                <BWSplitCompare content={[{"text": "这条路不但有法律风险，", "startFrame": 0, "durationFrames": 55}, {"text": "还有供应风险。", "startFrame": 54, "durationFrames": 34}]} totalDurationFrames={88} leftSrc={staticFile("images/华为高价论/scene_2_14_left.png")} rightSrc={staticFile("images/华为高价论/scene_2_14_right.png")} leftLabel={"法律风险"} rightLabel={"供应风险"} leftShowFrom={0} rightShowFrom={1} anchors={[]} />
            </Sequence>
            <Sequence from={1931} durationInFrames={123}>
                <BWCauseChain content={[{"text": "为了规避追查，", "startFrame": 0, "durationFrames": 31}, {"text": "要层层转包。", "startFrame": 30, "durationFrames": 32}, {"text": "价格比正常采购，", "startFrame": 62, "durationFrames": 37}, {"text": "贵很多。", "startFrame": 98, "durationFrames": 25}]} totalDurationFrames={123} layout={"horizontal"} nodes={[{ label: "躲避追查", imageSrc: staticFile("images/华为高价论/scene_2_15_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { label: "层层转包", imageSrc: staticFile("images/华为高价论/scene_2_15_img1.png"), showFrom: 1, enterEffect: "slideLeft" }, { label: "成本飙升", imageSrc: staticFile("images/华为高价论/scene_2_15_img2.png"), showFrom: 3, enterEffect: "zoomIn" }]} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/华为高价论/scene_2/scene_2.mp3")} />
        </AbsoluteFill>
    );
};
