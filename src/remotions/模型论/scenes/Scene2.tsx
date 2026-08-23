import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCauseChain, BWCenterFocus, BWCognitiveShift, BWConceptCard, BWPanelGrid, BWSplitCompare, BWTextFocus } from "../../../components";

// 剖析·模型即固定程序
const SCENE_DURATION = 147 + 273 + 90 + 156 + 83 + 184 + 215 + 109;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={147}>
                <BWCenterFocus content={[{"text": "先说模型，", "startFrame": 0, "durationFrames": 42}, {"text": "在程序的世界里，", "startFrame": 41, "durationFrames": 36}, {"text": "其实「模型」两个字，", "startFrame": 77, "durationFrames": 35}, {"text": "什么都能套。", "startFrame": 112, "durationFrames": 34}]} totalDurationFrames={147} imageSrc={staticFile("images/模型论/scene_2_1.png")} enterEffect="fadeIn" anchors={[{"text": "模型", "showFrom": 2, "color": "#000000", "anim": "popIn", "audioEffect": null}]} />
            </Sequence>
            <Sequence from={147} durationInFrames={273}>
                <BWSplitCompare content={[{"text": "算一只鸭能出几只鹅腿？", "startFrame": 0, "durationFrames": 50}, {"text": "程序写好了，", "startFrame": 49, "durationFrames": 31}, {"text": "对外可以叫「鹅腿阿姨模型」。", "startFrame": 79, "durationFrames": 50}, {"text": "算一只鸭能出几只鼠头？", "startFrame": 129, "durationFrames": 59}, {"text": "程序写好了，", "startFrame": 188, "durationFrames": 27}, {"text": "对外也可以叫「鼠头鸭脖模型」。", "startFrame": 214, "durationFrames": 59}]} totalDurationFrames={273} leftSrc={staticFile("images/模型论/scene_2_2_left.png")} rightSrc={staticFile("images/模型论/scene_2_2_right.png")} leftLabel={"鹅腿阿姨模型"} rightLabel={"鼠头鸭脖模型"} leftShowFrom={0} rightShowFrom={3} />
            </Sequence>
            <Sequence from={420} durationInFrames={90}>
                <BWConceptCard content={[{"text": "在代码世界里，", "startFrame": 0, "durationFrames": 33}, {"text": " 「模型」就是一段固定程序。", "startFrame": 32, "durationFrames": 57}]} totalDurationFrames={90} imageSrc={staticFile("images/模型论/scene_2_3.png")} conceptName={"模型"} anchors={[]} />
            </Sequence>
            <Sequence from={510} durationInFrames={156}>
                <BWCauseChain content={[{"text": "输入 A，", "startFrame": 0, "durationFrames": 27}, {"text": "输出 B。", "startFrame": 26, "durationFrames": 23}, {"text": "逻辑写死了，", "startFrame": 48, "durationFrames": 30}, {"text": "规则写死了。", "startFrame": 78, "durationFrames": 27}, {"text": "跟智能，", "startFrame": 104, "durationFrames": 16}, {"text": "没有半毛钱关系。", "startFrame": 119, "durationFrames": 37}]} totalDurationFrames={156} layout={"horizontal"} nodes={[{ label: "输入A", imageSrc: staticFile("images/模型论/scene_2_4_img0.png"), enterEffect: "breathe", showFrom: 0 }, { label: "输出B", imageSrc: staticFile("images/模型论/scene_2_4_img1.png"), enterEffect: "breathe", showFrom: 1 }]} anchors={[{"text": "逻辑写死", "showFrom": 2, "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={666} durationInFrames={83}>
                <BWConceptCard content={[{"text": "而工业模型，", "startFrame": 0, "durationFrames": 31}, {"text": "就是工业版的固定程序。", "startFrame": 30, "durationFrames": 53}]} totalDurationFrames={83} imageSrc={staticFile("images/模型论/scene_2_5.png")} conceptName={"工业模型"} anchors={[]} />
            </Sequence>
            <Sequence from={749} durationInFrames={184}>
                <BWPanelGrid content={[{"text": "预测哪天机床该保养了。", "startFrame": 0, "durationFrames": 56}, {"text": "预测哪天要买原材料了。", "startFrame": 55, "durationFrames": 60}, {"text": "预测哪天能出多少产品了。", "startFrame": 115, "durationFrames": 68}]} totalDurationFrames={184} panels={[{ src: staticFile("images/模型论/scene_2_6_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { src: staticFile("images/模型论/scene_2_6_img1.png"), showFrom: 1, enterEffect: "fadeIn" }, { src: staticFile("images/模型论/scene_2_6_img2.png"), showFrom: 2, enterEffect: "slideBottom" }]} anchors={[]} />
            </Sequence>
            <Sequence from={933} durationInFrames={215}>
                <BWCognitiveShift content={[{"text": "这些程序当然有价值。", "startFrame": 0, "durationFrames": 54}, {"text": "但其难点不在算法多高级。", "startFrame": 53, "durationFrames": 67}, {"text": "在于你懂不懂业务。", "startFrame": 120, "durationFrames": 54}, {"text": "懂业务，就能写。", "startFrame": 173, "durationFrames": 41}]} totalDurationFrames={215} notText={"算法多高级"} butText={"懂业务"} butSrc={staticFile("images/模型论/scene_2_7.png")} notContentIndex={1} butContentIndex={2} anchors={[]} />
            </Sequence>
            <Sequence from={1148} durationInFrames={109}>
                <BWTextFocus content={[{"text": "但请注意—", "startFrame": 0, "durationFrames": 27}, {"text": "这依然是写死的逻辑。", "startFrame": 26, "durationFrames": 1}, {"text": "不是 AI。", "startFrame": 0, "durationFrames": 1076}]} totalDurationFrames={109} coreSentence={[{"text": "这依然是写死的逻辑。", "showFrom": 1}, {"text": "不是 AI。", "showFrom": 2}]} coreSentenceAnchors={[{"coreSentenceAnchor": "不是 AI", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/模型论/scene_2/scene_2.mp3")} />
        </AbsoluteFill>
    );
};
