import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift, BWConceptCard, BWDosAndDonts, BWPanelGrid } from "../../../components";

// 揭示：魔法附加值
const SCENE_DURATION = 92 + 115 + 79 + 247 + 46 + 111 + 114 + 125 + 114 + 105 + 144 + 256;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={92}>
                <BWCenterFocus content={[{"text": "所以就能解释，", "startFrame": 0, "durationFrames": 33}, {"text": "为什么华为的产品就是贵？", "startFrame": 32, "durationFrames": 59}]} totalDurationFrames={92} imageSrc={staticFile("images/华为高价论/scene_3_1.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={92} durationInFrames={115}>
                <BWCognitiveShift content={[{"text": "不是质量就一定比别家好了，", "startFrame": 0, "durationFrames": 66}, {"text": "而是他的成本结构变了。", "startFrame": 65, "durationFrames": 50}]} totalDurationFrames={115} notText={"质量比别家好"} butText={"成本结构变了"} butSrc={staticFile("images/华为高价论/scene_3_2.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Sequence from={207} durationInFrames={79}>
                <BWCenterFocus content={[{"text": "别人的钱，", "startFrame": 0, "durationFrames": 24}, {"text": "主要花在产品竞争力上。", "startFrame": 24, "durationFrames": 55}]} totalDurationFrames={79} imageSrc={staticFile("images/华为高价论/scene_3_3.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={286} durationInFrames={247}>
                <BWPanelGrid content={[{"text": "华为的钱，", "startFrame": 0, "durationFrames": 34}, {"text": "有一部分花在制裁成本上。", "startFrame": 33, "durationFrames": 65}, {"text": "花在国产替代的摩擦成本上。", "startFrame": 98, "durationFrames": 77}, {"text": "花在绕过限制的交易成本上。", "startFrame": 174, "durationFrames": 73}]} totalDurationFrames={247} panels={[{ src: staticFile("images/华为高价论/scene_3_4_img0.png"), showFrom: 1, enterEffect: "fadeIn" }, { src: staticFile("images/华为高价论/scene_3_4_img1.png"), showFrom: 2, enterEffect: "fadeIn" }, { src: staticFile("images/华为高价论/scene_3_4_img2.png"), showFrom: 3, enterEffect: "fadeIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={533} durationInFrames={46}>
                <BWCenterFocus content={[{"text": "那这些差距怎么弥补？", "startFrame": 0, "durationFrames": 46}]} totalDurationFrames={46} imageSrc={staticFile("images/华为高价论/scene_3_5.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={579} durationInFrames={111}>
                <BWConceptCard content={[{"text": "物理附加值不够，", "startFrame": 0, "durationFrames": 43}, {"text": "就只能加“魔法附加值”：情怀。", "startFrame": 42, "durationFrames": 68}]} totalDurationFrames={111} imageSrc={staticFile("images/华为高价论/scene_3_6.png")} conceptName={"魔法附加值"} anchors={[]} />
            </Sequence>
            <Sequence from={690} durationInFrames={114}>
                <BWDosAndDonts content={[{"text": "把买不到国外技术的窘迫，", "startFrame": 0, "durationFrames": 59}, {"text": "包装成强硬的反抗。", "startFrame": 58, "durationFrames": 55}]} totalDurationFrames={114} left={{label: "❌ 强硬反抗", src: staticFile("images/华为高价论/scene_3_7_left.png"), showFrom: 1 }} right={{label: "✅ 技术窘迫", src: staticFile("images/华为高价论/scene_3_7_right.png"), showFrom: 0 }} anchors={[]} />
            </Sequence>
            <Sequence from={804} durationInFrames={125}>
                <BWDosAndDonts content={[{"text": "把供应链被迫降级的成本，", "startFrame": 0, "durationFrames": 65}, {"text": "包装成民族产业的脊梁。", "startFrame": 64, "durationFrames": 61}]} totalDurationFrames={125} left={{label: "❌ 民族脊梁", src: staticFile("images/华为高价论/scene_3_8_left.png"), showFrom: 1 }} right={{label: "✅ 供应链降级", src: staticFile("images/华为高价论/scene_3_8_right.png"), showFrom: 0 }} anchors={[]} />
            </Sequence>
            <Sequence from={929} durationInFrames={114}>
                <BWDosAndDonts content={[{"text": "把消费者多花的钱，", "startFrame": 0, "durationFrames": 50}, {"text": "包装成对国产崛起的支持。", "startFrame": 49, "durationFrames": 65}]} totalDurationFrames={114} left={{label: "❌ 国产崛起支持", src: staticFile("images/华为高价论/scene_3_9_left.png"), showFrom: 1 }} right={{label: "✅ 多花冤枉钱", src: staticFile("images/华为高价论/scene_3_9_right.png"), showFrom: 0 }} anchors={[]} />
            </Sequence>
            <Sequence from={1043} durationInFrames={105}>
                <BWDosAndDonts content={[{"text": "把一个企业的生存压力，", "startFrame": 0, "durationFrames": 51}, {"text": "转化成普通人的道德义务。", "startFrame": 50, "durationFrames": 54}]} totalDurationFrames={105} left={{label: "❌ 道德义务", src: staticFile("images/华为高价论/scene_3_10_left.png"), showFrom: 1 }} right={{label: "✅ 生存压力", src: staticFile("images/华为高价论/scene_3_10_right.png"), showFrom: 0 }} anchors={[]} />
            </Sequence>
            <Sequence from={1148} durationInFrames={144}>
                <BWCenterFocus content={[{"text": "所以，", "startFrame": 0, "durationFrames": 19}, {"text": "作为一个消费者。", "startFrame": 18, "durationFrames": 36}, {"text": "当你买一件华为产品，", "startFrame": 54, "durationFrames": 51}, {"text": "你要心里有数。", "startFrame": 104, "durationFrames": 39}]} totalDurationFrames={144} imageSrc={staticFile("images/华为高价论/scene_3_11.png")} enterEffect="fadeIn" anchors={[{"text": "心里有数", "showFrom": 3, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={1292} durationInFrames={256}>
                <BWPanelGrid content={[{"text": "你付的钱里，", "startFrame": 0, "durationFrames": 28}, {"text": "到底有多少是产品本身的价值。", "startFrame": 27, "durationFrames": 68}, {"text": "有多少是制裁带来的额外成本。", "startFrame": 94, "durationFrames": 67}, {"text": "又有多少是营销包装出来的情怀溢价。", "startFrame": 161, "durationFrames": 94}]} totalDurationFrames={256} panels={[{ src: staticFile("images/华为高价论/scene_3_12_img0.png"), showFrom: 1 }, { src: staticFile("images/华为高价论/scene_3_12_img1.png"), showFrom: 2 }, { src: staticFile("images/华为高价论/scene_3_12_img2.png"), showFrom: 3 }]} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/华为高价论/scene_3/scene_3.mp3")} />
        </AbsoluteFill>
    );
};
