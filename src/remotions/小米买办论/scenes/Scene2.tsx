import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCauseChain, BWCognitiveShift, BWMethodStack, BWPanelGrid, BWQuoteCitation, BWTextFocus } from "../../../components";

// 注册地指控
const SCENE_DURATION = 117 + 198 + 112 + 206 + 341 + 55 + 67;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={117}>
                <BWQuoteCitation content={[{"text": "先看第一个。", "startFrame": 0, "durationFrames": 27}, {"text": "很多人说，", "startFrame": 26, "durationFrames": 24}, {"text": "小米注册地不在中国，", "startFrame": 50, "durationFrames": 43}, {"text": "所以是买办。", "startFrame": 92, "durationFrames": 24}]} totalDurationFrames={117} quoteSource={"常见说法"} quoteDisplayText={"小米注册地不在中国，所以是买办。"} showFrom={2} />
            </Sequence>
            <Sequence from={117} durationInFrames={198}>
                <BWPanelGrid content={[{"text": "但除了小米，", "startFrame": 0, "durationFrames": 28}, {"text": "阿里、", "startFrame": 27, "durationFrames": 21}, {"text": "腾讯、", "startFrame": 48, "durationFrames": 20}, {"text": "百度，", "startFrame": 67, "durationFrames": 21}, {"text": "甚至所谓的国产之光中芯国际，", "startFrame": 88, "durationFrames": 70}, {"text": "注册都在开曼。", "startFrame": 158, "durationFrames": 39}]} totalDurationFrames={198} panels={[{ src: staticFile("images/小米买办论/scene_2_2_img0.png"), showFrom: 1, enterEffect: "zoomIn" }, { src: staticFile("images/小米买办论/scene_2_2_img1.png"), showFrom: 2, enterEffect: "slideLeft" }, { src: staticFile("images/小米买办论/scene_2_2_img2.png"), showFrom: 3, enterEffect: "fadeIn" }, { src: staticFile("images/小米买办论/scene_2_2_img3.png"), showFrom: 4, enterEffect: "breathe" }]} anchors={[]} />
            </Sequence>
            <Sequence from={315} durationInFrames={112}>
                <BWCognitiveShift content={[{"text": "这不是例外。", "startFrame": 0, "durationFrames": 34}, {"text": "这是大部分上市公司标准操作。", "startFrame": 33, "durationFrames": 78}]} totalDurationFrames={112} notText={"一个例外"} butText={"上市公司标准操作"} butSrc={staticFile("images/小米买办论/scene_2_3.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Sequence from={427} durationInFrames={206}>
                <BWMethodStack content={[{"text": "原因是，", "startFrame": 0, "durationFrames": 27}, {"text": "开曼的资本市场更成熟。", "startFrame": 26, "durationFrames": 60}, {"text": "能以更低成本融到更多钱。", "startFrame": 85, "durationFrames": 77}, {"text": "全球税率更低。", "startFrame": 162, "durationFrames": 44}]} totalDurationFrames={206} title={"注册开曼的原因"} imageSrc={staticFile("images/小米买办论/scene_2_4.png")} notes={[{"text": "成熟的资本市场能吸引全球资本", "showFrom": 1}, {"text": "低成本融资利于快速扩张", "showFrom": 2}, {"text": "更低的全球税率利于结算", "showFrom": 3}]} anchors={[]} />
            </Sequence>
            <Sequence from={633} durationInFrames={341}>
                <BWCauseChain content={[{"text": "华为为什么不这么做？", "startFrame": 0, "durationFrames": 47}, {"text": "不是他更高尚，而是因为华为不上市。", "startFrame": 46, "durationFrames": 80}, {"text": "它的股权结构，", "startFrame": 126, "durationFrames": 34}, {"text": "是员工持股加创始人控制。", "startFrame": 159, "durationFrames": 66}, {"text": "这种结构，", "startFrame": 225, "durationFrames": 26}, {"text": "在中国以外任何一个国家，", "startFrame": 250, "durationFrames": 52}, {"text": "都不可能合法注册。", "startFrame": 301, "durationFrames": 39}]} totalDurationFrames={341} layout={"horizontal"} nodes={[{ label: "不上市", imageSrc: staticFile("images/小米买办论/scene_2_5_img0.png"), showFrom: 1, enterEffect: "fadeIn" }, { label: "特殊股权", imageSrc: staticFile("images/小米买办论/scene_2_5_img1.png"), showFrom: 2, enterEffect: "slideBottom" }, { label: "无法海外注册", imageSrc: staticFile("images/小米买办论/scene_2_5_img2.png"), showFrom: 5, enterEffect: "zoomIn" }]} anchors={[{"text": "无法注册", "showFrom": 6, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={974} durationInFrames={55}>
                <BWCognitiveShift content={[{"text": "不是他不想。", "startFrame": 0, "durationFrames": 27}, {"text": "而是，", "startFrame": 26, "durationFrames": 7}, {"text": "他不能。", "startFrame": 32, "durationFrames": 22}]} totalDurationFrames={55} notText={"他不想"} butText={"他不能"} butSrc={staticFile("images/小米买办论/scene_2_6.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Sequence from={1029} durationInFrames={67}>
                <BWTextFocus content={[{"text": "所以，", "startFrame": 0, "durationFrames": 15}, {"text": "注册地这个指控，", "startFrame": 14, "durationFrames": 34}, {"text": "站不住。", "startFrame": 47, "durationFrames": 19}]} totalDurationFrames={67} coreSentence={[{"text": "所以，注册地这个指控，", "showFrom": 0, "endFrom": 1}, {"text": "站不住。", "showFrom": 2}]} coreSentenceAnchors={[{"coreSentenceAnchor": "站不住", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/小米买办论/scene_2/scene_2.mp3")} />
        </AbsoluteFill>
    );
};
