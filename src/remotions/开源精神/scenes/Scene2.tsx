import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCauseChain, BWCenterFocus, BWKpiHero, BWTextFocus } from "../../../components";

// 剖析·开源代码的无形馈赠
const SCENE_DURATION = 158 + 233 + 308 + 112;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={158}>
                <BWKpiHero content={[{"text": "根据 2024 年的数据，", "startFrame": 0, "durationFrames": 48}, {"text": "全球 96% 的商业代码库，", "startFrame": 48, "durationFrames": 68}, {"text": "都包含开源组件。", "startFrame": 115, "durationFrames": 42}]} totalDurationFrames={158} blocks={[{"value": 96, "suffix": "%", "label": "商业代码库", "showFrom": 1}]} />
            </Sequence>
            <Sequence from={158} durationInFrames={233}>
                <BWCenterFocus content={[{"text": "这意味着，", "startFrame": 0, "durationFrames": 24}, {"text": "你手机里几乎每一款 APP，", "startFrame": 24, "durationFrames": 64}, {"text": "其核心代码的 70% 到 90%，", "startFrame": 87, "durationFrames": 88}, {"text": "都是开源社区免费提供的。", "startFrame": 174, "durationFrames": 59}]} totalDurationFrames={233} imageSrc={staticFile("images/开源精神/scene_2_2.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={391} durationInFrames={308}>
                <BWCauseChain content={[{"text": "如果今天全世界的开源代码突然消失，", "startFrame": 0, "durationFrames": 77}, {"text": "我们要想从头研发这套底层设施，", "startFrame": 76, "durationFrames": 74}, {"text": "至少需要投入 415 亿美金。", "startFrame": 149, "durationFrames": 74}, {"text": "这还仅仅是研发成本，不含时间成本。", "startFrame": 222, "durationFrames": 86}]} totalDurationFrames={308} layout={"horizontal"} nodes={[{ label: "开源消失", imageSrc: staticFile("images/开源精神/scene_2_3_img0.png"), showFrom: 0 }, { label: "需重建底层", imageSrc: staticFile("images/开源精神/scene_2_3_img1.png"), showFrom: 1 }, { label: "代价415亿", imageSrc: staticFile("images/开源精神/scene_2_3_img2.png"), showFrom: 2 }]} />
            </Sequence>
            <Sequence from={699} durationInFrames={112}>
                <BWTextFocus content={[{"text": "这笔钱，被全世界的开源者，", "startFrame": 0, "durationFrames": 66}, {"text": "直接送给了全人类。", "startFrame": 65, "durationFrames": 46}]} totalDurationFrames={112} coreSentence={["这笔钱，被全世界的开源者，", "直接送给了全人类。"]} coreSentenceAnchors={[{"coreSentenceAnchor": "全人类", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/开源精神/scene_2/scene_2.mp3")} />
        </AbsoluteFill>
    );
};
