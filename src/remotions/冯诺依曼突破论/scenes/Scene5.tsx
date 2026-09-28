import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCognitiveShift, BWKpiHero, BWMethodStack, BWPanelGrid, BWSplitCompare, BWTextFocus } from "../../../components";

// 优化不是革命
const SCENE_DURATION = 249 + 335 + 105 + 144 + 183 + 137 + 119;

export const calculateScene5Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene5: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={249}>
                <BWMethodStack content={[{"text": "实际上，", "startFrame": 0, "durationFrames": 24}, {"text": "分布式共享内存，", "startFrame": 24, "durationFrames": 41}, {"text": "几十年前就有。", "startFrame": 64, "durationFrames": 37}, {"text": "物理内存受限于硬件大小，是分散的，", "startFrame": 100, "durationFrames": 89}, {"text": "但可以把逻辑地址进行统一。", "startFrame": 188, "durationFrames": 60}]} totalDurationFrames={249} title={"分布式共享内存"} imageSrc={staticFile("images/冯诺依曼突破论/scene_5_1.png")} notes={[{"text": "几十年前就已提出", "showFrom": 2}, {"text": "物理分散，逻辑统一", "showFrom": 3}]} />
            </Sequence>
            <Sequence from={249} durationInFrames={335}>
                <BWSplitCompare content={[{"text": "BSP并行模型。", "startFrame": 0, "durationFrames": 54}, {"text": "一九九零年就已公开提出。", "startFrame": 53, "durationFrames": 68}, {"text": "一九九九年的NestStep研究。", "startFrame": 121, "durationFrames": 75}, {"text": "也讨论过嵌套并行。", "startFrame": 196, "durationFrames": 62}, {"text": "这是非常直接有效的优化思路。", "startFrame": 257, "durationFrames": 78}]} totalDurationFrames={335} leftSrc={staticFile("images/冯诺依曼突破论/scene_5_2_left.png")} rightSrc={staticFile("images/冯诺依曼突破论/scene_5_2_right.png")} leftLabel={"BSP模型"} rightLabel={"NestStep研究"} leftShowFrom={0} rightShowFrom={2} />
            </Sequence>
            <Sequence from={584} durationInFrames={105}>
                <BWKpiHero content={[{"text": "华为也是沿着这些思路，", "startFrame": 0, "durationFrames": 52}, {"text": "做到了百万处理器规模。", "startFrame": 51, "durationFrames": 54}]} totalDurationFrames={105} value={1000000} prefix={"华为"} suffix={"处理器"} label={"百万规模"} useGrouping={true} countDuration={40} anchors={[]} />
            </Sequence>
            <Sequence from={689} durationInFrames={144}>
                <BWPanelGrid content={[{"text": "把协议、", "startFrame": 0, "durationFrames": 24}, {"text": "芯片、", "startFrame": 24, "durationFrames": 20}, {"text": "内存", "startFrame": 43, "durationFrames": 18}, {"text": "和软件打通。", "startFrame": 61, "durationFrames": 34}, {"text": "确实不是容易的工程。", "startFrame": 94, "durationFrames": 49}]} totalDurationFrames={144} panels={[{ src: staticFile("images/冯诺依曼突破论/scene_5_4_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { src: staticFile("images/冯诺依曼突破论/scene_5_4_img1.png"), showFrom: 1, enterEffect: "zoomIn" }, { src: staticFile("images/冯诺依曼突破论/scene_5_4_img2.png"), showFrom: 2, enterEffect: "slideBottom" }, { src: staticFile("images/冯诺依曼突破论/scene_5_4_img3.png"), showFrom: 3, enterEffect: "zoomIn" }]} />
            </Sequence>
            <Sequence from={833} durationInFrames={183}>
                <BWSplitCompare content={[{"text": "但优化终究是优化，", "startFrame": 0, "durationFrames": 48}, {"text": "扩充架构的规模上限。", "startFrame": 48, "durationFrames": 48}, {"text": "和突破架构本身。", "startFrame": 96, "durationFrames": 45}, {"text": "根本不是一回事。", "startFrame": 140, "durationFrames": 42}]} totalDurationFrames={183} leftSrc={staticFile("images/冯诺依曼突破论/scene_5_5_left.png")} rightSrc={staticFile("images/冯诺依曼突破论/scene_5_5_right.png")} leftLabel={"优化扩充"} rightLabel={"架构突破"} leftShowFrom={0} rightShowFrom={2} />
            </Sequence>
            <Sequence from={1016} durationInFrames={137}>
                <BWCognitiveShift content={[{"text": "就像高铁突破时速四百公里。", "startFrame": 0, "durationFrames": 69}, {"text": "不等于高铁突破了轮轨交通。", "startFrame": 68, "durationFrames": 68}]} totalDurationFrames={137} notText={"突破时速四百公里"} butText={"突破轮轨交通"} butSrc={staticFile("images/冯诺依曼突破论/scene_5_6.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Sequence from={1153} durationInFrames={119}>
                <BWTextFocus content={[{"text": "你再吹牛逼，", "startFrame": 0, "durationFrames": 28}, {"text": "也不该碰瓷奠基整个信息化时代的冯·诺依曼。", "startFrame": 27, "durationFrames": 91}]} totalDurationFrames={119} coreSentence={[{"text": "不该碰瓷", "showFrom": 0, "endFrom": 0}, {"text": "奠基整个信息化时代的冯·诺依曼。", "showFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "冯·诺依曼", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/冯诺依曼突破论/scene_5/scene_5.mp3")} />
        </AbsoluteFill>
    );
};
