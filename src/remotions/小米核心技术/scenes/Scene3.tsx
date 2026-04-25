import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWDosAndDonts, BWKpiHero, BWMethodStack, BWQuoteCitation } from "../../../components";

// 研发底牌
const SCENE_DURATION = 166 + 269 + 203 + 106 + 320 + 288;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={166}>
                <BWQuoteCitation content={[{"text": "我们再讲讲小米的研发底牌。", "startFrame": 0, "durationFrames": 82}, {"text": "小米不仅是做整合，还在死磕自研。", "startFrame": 81, "durationFrames": 84}]} totalDurationFrames={166} quoteSource={"整合 & 研发"} quoteDisplayText={"小米不仅是做整合，还在死磕自研。"} showFrom={1} />
            </Sequence>
            <Sequence from={166} durationInFrames={269}>
                <BWKpiHero content={[{"text": "翻开小米最新的财报数据。", "startFrame": 0, "durationFrames": 77}, {"text": "过去一年研发投入已达到331亿元。", "startFrame": 76, "durationFrames": 106}, {"text": "研发人员规模也已超过2.5万人。", "startFrame": 182, "durationFrames": 87}]} totalDurationFrames={269} blocks={[{"value": 331, "suffix": "亿元", "label": "研发投入", "showFrom": 1}, {"value": 2.5, "suffix": "万人", "label": "研发人员规模", "showFrom": 2, "useGrouping": true}]} />
            </Sequence>
            <Sequence from={435} durationInFrames={203}>
                <BWDosAndDonts content={[{"text": "这可是上市公司有审计的公开数据。", "startFrame": 0, "durationFrames": 80}, {"text": "不是某些把公关营销费用都算在研发里的公司所能比拟的。", "startFrame": 79, "durationFrames": 123}]} totalDurationFrames={203} left={{label: "可信口径", src: staticFile("images/小米核心技术/scene_3_3_left.png"), showFrom: 0 }} right={{label: "掺水对比", src: staticFile("images/小米核心技术/scene_3_3_right.png"), showFrom: 0 }} />
            </Sequence>
            <Sequence from={638} durationInFrames={106}>
                <BWKpiHero content={[{"text": "这个数据已经超过了全世界九成以上的高科技企业。", "startFrame": 0, "durationFrames": 106}]} totalDurationFrames={106} value={90} prefix={""} suffix={"%"} label={"超越全球九成高科企业"} />
            </Sequence>
            <Sequence from={744} durationInFrames={320}>
                <BWMethodStack content={[{"text": "造车方面，", "startFrame": 0, "durationFrames": 32}, {"text": "自研超级电机，碾压行业量产天花板。", "startFrame": 31, "durationFrames": 103}, {"text": "SiC 电控，转换效率高达99.85%", "startFrame": 134, "durationFrames": 110}, {"text": "一体化压铸，已达万吨级。", "startFrame": 243, "durationFrames": 77}]} totalDurationFrames={320} title={"造车"} imageSrc={staticFile("images/小米核心技术/scene_3_5.png")} notes={[{"text": "自研超级电机", "showFrom": 1}, {"text": "SiC 电控", "showFrom": 2}, {"text": "一体化压铸", "showFrom": 3}]} />
            </Sequence>
            <Sequence from={1064} durationInFrames={288}>
                <BWMethodStack content={[{"text": "在AI智能领域，", "startFrame": 0, "durationFrames": 39}, {"text": "自研模型MiMo，世界第一梯队的智能体验。", "startFrame": 38, "durationFrames": 92}, {"text": "并在推理速度与算力成本控制上表现出断崖式的领先优势", "startFrame": 130, "durationFrames": 158}]} totalDurationFrames={288} title={"AI 智能"} imageSrc={staticFile("images/小米核心技术/scene_3_7.png")} notes={[{"text": "世界第一梯队的智能体验", "showFrom": 1}, {"text": "断崖领先的推理速度与算力成本控制", "showFrom": 2}]} />
            </Sequence>
            <Audio src={staticFile("/audio/小米核心技术/scene_3/scene_3.mp3")} />
        </AbsoluteFill>
    );
};
