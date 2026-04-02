import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWMethodStack, BWQuoteCitation, BWTextFocus } from "../../../components";

// 如何进行图表审计
const SCENE_DURATION = 201 + 66 + 102;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={201}>
                <BWMethodStack content={[{"text": "下次再看到任何让人心潮澎湃或者恐慌的趋势图时，", "startFrame": 0, "durationFrames": 51}, {"text": "先冷静一下，给它做个图表审计：", "startFrame": 51, "durationFrames": 60}, {"text": "Y轴是从0开始的吗？", "startFrame": 111, "durationFrames": 30}, {"text": "时间范围有被选择性截取吗？", "startFrame": 141, "durationFrames": 30}, {"text": "尺度比例有被刻意扭曲吗？", "startFrame": 171, "durationFrames": 30}]} totalDurationFrames={201} title={"图表审计三问"} imageSrc={staticFile("一个趋势图表，图表波动很大")} notes={[{"text": "Y轴从0开始吗？", "showFrom": 2}, {"text": "时间范围被截取吗？", "showFrom": 3}, {"text": "尺度比例被扭曲吗？", "showFrom": 4}]} />
            </Sequence>
            <Sequence from={201} durationInFrames={66}>
                <BWQuoteCitation content={[{"text": "枯燥的数据也许不会直接说谎，", "startFrame": 0, "durationFrames": 31}, {"text": "但手里拿着画笔画图表的人一定会。", "startFrame": 31, "durationFrames": 35}]} totalDurationFrames={66} quoteSource={"数据分析师的职场箴言"} anchors={[]} />
            </Sequence>
            <Sequence from={267} durationInFrames={102}>
                <BWTextFocus content={[{"text": "一个具备现代公民素养的独立思考者，", "startFrame": 0, "durationFrames": 37}, {"text": "永远要把对这个世界的视觉解释权，", "startFrame": 37, "durationFrames": 35}, {"text": "牢牢夺回自己手里。", "startFrame": 72, "durationFrames": 30}]} totalDurationFrames={102} coreSentence={"夺回对世界的视觉解释权"} coreSentenceAnchors={[{"coreSentenceAnchor": "视觉解释权", "color": "red"}]} />
            </Sequence>

        </AbsoluteFill>
    );
};
