import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCauseChain, BWCenterFocus, BWCognitiveShift, BWConceptCard, BWPanelGrid, BWSplitCompare, BWTextFocus } from "../../../components";

// 剖析·模型即固定程序
const SCENE_DURATION = 132 + 290 + 88 + 162 + 82 + 197 + 201 + 116;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={132}>
                <BWCenterFocus content={[{"text": "先说模型，", "startFrame": 0, "durationFrames": 33}, {"text": "在程序的世界里，", "startFrame": 32, "durationFrames": 36}, {"text": "其实「模型」两个字，", "startFrame": 68, "durationFrames": 36}, {"text": "什么都能套。", "startFrame": 104, "durationFrames": 28}]} totalDurationFrames={132} imageSrc={staticFile("images/模型论/scene_2_1.png")} enterEffect="fadeIn" anchors={[{"text": "模型", "showFrom": 2, "color": "#000000", "anim": "popIn", "audioEffect": null}]} />
            </Sequence>
            <Sequence from={132} durationInFrames={290}>
                <BWSplitCompare content={[{"text": "算一只鸭能出几只鹅腿？", "startFrame": 0, "durationFrames": 62}, {"text": "程序写好了，", "startFrame": 61, "durationFrames": 31}, {"text": "对外可以叫「鹅腿阿姨模型」。", "startFrame": 91, "durationFrames": 55}, {"text": "算一只鸭能出几只鼠头？", "startFrame": 145, "durationFrames": 59}, {"text": "程序写好了，", "startFrame": 204, "durationFrames": 30}, {"text": "对外也可以叫「鼠头鸭脖模型」。", "startFrame": 234, "durationFrames": 56}]} totalDurationFrames={290} leftSrc={staticFile("images/模型论/scene_2_2_left.png")} rightSrc={staticFile("images/模型论/scene_2_2_right.png")} leftLabel={"鹅腿阿姨模型"} rightLabel={"鼠头鸭脖模型"} leftShowFrom={0} rightShowFrom={3} />
            </Sequence>
            <Sequence from={422} durationInFrames={88}>
                <BWConceptCard content={[{"text": "在代码世界里，", "startFrame": 0, "durationFrames": 34}, {"text": " 「模型」就是一段固定程序。", "startFrame": 33, "durationFrames": 54}]} totalDurationFrames={88} imageSrc={staticFile("images/模型论/scene_2_3.png")} conceptName={"模型"} anchors={[]} />
            </Sequence>
            <Sequence from={510} durationInFrames={162}>
                <BWCauseChain content={[{"text": "输入 A，", "startFrame": 0, "durationFrames": 20}, {"text": "输出 B。", "startFrame": 19, "durationFrames": 22}, {"text": "逻辑写死了，", "startFrame": 40, "durationFrames": 33}, {"text": "规则写死了。", "startFrame": 73, "durationFrames": 32}, {"text": "跟智能，", "startFrame": 105, "durationFrames": 19}, {"text": "没有半毛钱关系。", "startFrame": 123, "durationFrames": 39}]} totalDurationFrames={162} layout={"horizontal"} nodes={[{ label: "输入A", imageSrc: staticFile("images/模型论/scene_2_4_img0.png"), enterEffect: "breathe", showFrom: 0 }, { label: "输出B", imageSrc: staticFile("images/模型论/scene_2_4_img1.png"), enterEffect: "breathe", showFrom: 1 }]} anchors={[{"text": "逻辑写死", "showFrom": 2, "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={672} durationInFrames={82}>
                <BWConceptCard content={[{"text": "而工业模型，", "startFrame": 0, "durationFrames": 28}, {"text": "就是工业版的固定程序。", "startFrame": 27, "durationFrames": 55}]} totalDurationFrames={82} imageSrc={staticFile("images/模型论/scene_2_5.png")} conceptName={"工业模型"} anchors={[]} />
            </Sequence>
            <Sequence from={754} durationInFrames={197}>
                <BWPanelGrid content={[{"text": "预测哪天机床该保养了。", "startFrame": 0, "durationFrames": 62}, {"text": "预测哪天要买原材料了。", "startFrame": 61, "durationFrames": 67}, {"text": "预测哪天能出多少产品了。", "startFrame": 128, "durationFrames": 69}]} totalDurationFrames={197} panels={[{ src: staticFile("images/模型论/scene_2_6_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { src: staticFile("images/模型论/scene_2_6_img1.png"), showFrom: 1, enterEffect: "fadeIn" }, { src: staticFile("images/模型论/scene_2_6_img2.png"), showFrom: 2, enterEffect: "slideBottom" }]} anchors={[]} />
            </Sequence>
            <Sequence from={951} durationInFrames={201}>
                <BWCognitiveShift content={[{"text": "这些程序当然有价值。", "startFrame": 0, "durationFrames": 51}, {"text": "但其难点不在算法多高级。", "startFrame": 50, "durationFrames": 63}, {"text": "在于你懂不懂业务。", "startFrame": 112, "durationFrames": 42}, {"text": "懂业务，就能写。", "startFrame": 154, "durationFrames": 47}]} totalDurationFrames={201} notText={"算法多高级"} butText={"懂业务"} butSrc={staticFile("images/模型论/scene_2_7.png")} notContentIndex={1} butContentIndex={2} anchors={[]} />
            </Sequence>
            <Sequence from={1152} durationInFrames={116}>
                <BWTextFocus content={[{"text": "但请注意—", "startFrame": 0, "durationFrames": 26}, {"text": "这依然是写死的逻辑。", "startFrame": 25, "durationFrames": 1}, {"text": "不是 AI。", "startFrame": 0, "durationFrames": 1095}]} totalDurationFrames={116} coreSentence={[{"text": "这依然是写死的逻辑。", "showFrom": 1}, {"text": "不是 AI。", "showFrom": 2}]} coreSentenceAnchors={[{"coreSentenceAnchor": "不是 AI", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/模型论/scene_2/scene_2.mp3")} />
        </AbsoluteFill>
    );
};
