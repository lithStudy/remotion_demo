import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift, BWConceptCard, BWDosAndDonts, BWPanelGrid } from "../../../components";

// 揭示：魔法附加值
const SCENE_DURATION = 90 + 108 + 80 + 249 + 51 + 112 + 114 + 133 + 122 + 110 + 136 + 279;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={90}>
                <BWCenterFocus content={[{"text": "所以就能解释，", "startFrame": 0, "durationFrames": 35}, {"text": "为什么华为的产品就是贵？", "startFrame": 34, "durationFrames": 55}]} totalDurationFrames={90} imageSrc={staticFile("images/华为高价论/scene_3_1.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={90} durationInFrames={108}>
                <BWCognitiveShift content={[{"text": "不是质量就一定比别家好了，", "startFrame": 0, "durationFrames": 62}, {"text": "而是他的成本结构变了。", "startFrame": 61, "durationFrames": 47}]} totalDurationFrames={108} notText={"质量比别家好"} butText={"成本结构变了"} butSrc={staticFile("images/华为高价论/scene_3_2.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Sequence from={198} durationInFrames={80}>
                <BWCenterFocus content={[{"text": "别人的钱，", "startFrame": 0, "durationFrames": 24}, {"text": "主要花在产品竞争力上。", "startFrame": 24, "durationFrames": 56}]} totalDurationFrames={80} imageSrc={staticFile("images/华为高价论/scene_3_3.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={278} durationInFrames={249}>
                <BWPanelGrid content={[{"text": "华为的钱，", "startFrame": 0, "durationFrames": 37}, {"text": "有一部分花在制裁成本上。", "startFrame": 36, "durationFrames": 67}, {"text": "花在国产替代的摩擦成本上。", "startFrame": 102, "durationFrames": 79}, {"text": "花在绕过限制的交易成本上。", "startFrame": 180, "durationFrames": 68}]} totalDurationFrames={249} panels={[{ src: staticFile("images/华为高价论/scene_3_4_img0.png"), showFrom: 1, enterEffect: "fadeIn" }, { src: staticFile("images/华为高价论/scene_3_4_img1.png"), showFrom: 2, enterEffect: "fadeIn" }, { src: staticFile("images/华为高价论/scene_3_4_img2.png"), showFrom: 3, enterEffect: "fadeIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={527} durationInFrames={51}>
                <BWCenterFocus content={[{"text": "那这些差距怎么弥补？", "startFrame": 0, "durationFrames": 51}]} totalDurationFrames={51} imageSrc={staticFile("images/华为高价论/scene_3_5.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={578} durationInFrames={112}>
                <BWConceptCard content={[{"text": "物理附加值不够，", "startFrame": 0, "durationFrames": 39}, {"text": "就只能加“魔法附加值”：情怀。", "startFrame": 38, "durationFrames": 73}]} totalDurationFrames={112} imageSrc={staticFile("images/华为高价论/scene_3_6.png")} conceptName={"魔法附加值"} anchors={[]} />
            </Sequence>
            <Sequence from={690} durationInFrames={114}>
                <BWDosAndDonts content={[{"text": "把买不到国外技术的窘迫，", "startFrame": 0, "durationFrames": 58}, {"text": "包装成强硬的反抗。", "startFrame": 57, "durationFrames": 56}]} totalDurationFrames={114} left={{label: "❌ 强硬反抗", src: staticFile("images/华为高价论/scene_3_7_left.png"), showFrom: 1 }} right={{label: "✅ 技术窘迫", src: staticFile("images/华为高价论/scene_3_7_right.png"), showFrom: 0 }} anchors={[]} />
            </Sequence>
            <Sequence from={804} durationInFrames={133}>
                <BWDosAndDonts content={[{"text": "把供应链被迫降级的成本，", "startFrame": 0, "durationFrames": 63}, {"text": "包装成民族产业的脊梁。", "startFrame": 62, "durationFrames": 71}]} totalDurationFrames={133} left={{label: "❌ 民族脊梁", src: staticFile("images/华为高价论/scene_3_8_left.png"), showFrom: 1 }} right={{label: "✅ 供应链降级", src: staticFile("images/华为高价论/scene_3_8_right.png"), showFrom: 0 }} anchors={[]} />
            </Sequence>
            <Sequence from={937} durationInFrames={122}>
                <BWDosAndDonts content={[{"text": "把消费者多花的钱，", "startFrame": 0, "durationFrames": 46}, {"text": "包装成对国产崛起的支持。", "startFrame": 45, "durationFrames": 76}]} totalDurationFrames={122} left={{label: "❌ 国产崛起支持", src: staticFile("images/华为高价论/scene_3_9_left.png"), showFrom: 1 }} right={{label: "✅ 多花冤枉钱", src: staticFile("images/华为高价论/scene_3_9_right.png"), showFrom: 0 }} anchors={[]} />
            </Sequence>
            <Sequence from={1059} durationInFrames={110}>
                <BWDosAndDonts content={[{"text": "把一个企业的生存压力，", "startFrame": 0, "durationFrames": 52}, {"text": "转化成普通人的道德义务。", "startFrame": 51, "durationFrames": 59}]} totalDurationFrames={110} left={{label: "❌ 道德义务", src: staticFile("images/华为高价论/scene_3_10_left.png"), showFrom: 1 }} right={{label: "✅ 生存压力", src: staticFile("images/华为高价论/scene_3_10_right.png"), showFrom: 0 }} anchors={[]} />
            </Sequence>
            <Sequence from={1169} durationInFrames={136}>
                <BWCenterFocus content={[{"text": "所以，", "startFrame": 0, "durationFrames": 19}, {"text": "作为一个消费者。", "startFrame": 18, "durationFrames": 35}, {"text": "当你买一件华为产品，", "startFrame": 53, "durationFrames": 51}, {"text": "你要心里有数。", "startFrame": 103, "durationFrames": 33}]} totalDurationFrames={136} imageSrc={staticFile("images/华为高价论/scene_3_11.png")} enterEffect="fadeIn" anchors={[{"text": "心里有数", "showFrom": 3, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={1305} durationInFrames={279}>
                <BWPanelGrid content={[{"text": "你付的钱里，", "startFrame": 0, "durationFrames": 32}, {"text": "到底有多少是产品本身的价值。", "startFrame": 31, "durationFrames": 71}, {"text": "有多少是制裁带来的额外成本。", "startFrame": 102, "durationFrames": 80}, {"text": "又有多少是营销包装出来的情怀溢价。", "startFrame": 181, "durationFrames": 97}]} totalDurationFrames={279} panels={[{ src: staticFile("images/华为高价论/scene_3_12_img0.png"), showFrom: 1 }, { src: staticFile("images/华为高价论/scene_3_12_img1.png"), showFrom: 2 }, { src: staticFile("images/华为高价论/scene_3_12_img2.png"), showFrom: 3 }]} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/华为高价论/scene_3/scene_3.mp3")} />
        </AbsoluteFill>
    );
};
