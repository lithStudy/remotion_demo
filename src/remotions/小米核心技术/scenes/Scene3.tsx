import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift, BWKpiHero } from "../../../components";

// 剖析：百亿研发底牌
const SCENE_DURATION = 30 + 60 + 30 + 33 + 35 + 57 + 51 + 30 + 63 + 61 + 90;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={30}>
                <BWCenterFocus content={[{"text": "我们再讲讲小米的研发底牌。", "startFrame": 0, "durationFrames": 30}]} totalDurationFrames={30} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" anchors={[{"text": "小米", "showFrom": 0, "color": "#000000", "anim": "spring", "audioEffect": "ping"}, {"text": "研发底牌", "showFrom": 0, "color": "#EF4444", "anim": "highlight", "audioEffect": "woosh"}]} />
            </Sequence>
            <Sequence from={30} durationInFrames={60}>
                <BWCognitiveShift content={[{"text": "小米不仅是做整合，", "startFrame": 0, "durationFrames": 30}, {"text": "还在死磕自研。", "startFrame": 30, "durationFrames": 30}]} totalDurationFrames={60} notText={"做整合"} butText={"死磕自研"} butSrc={staticFile("images/template/scene1_1.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Sequence from={90} durationInFrames={30}>
                <BWCenterFocus content={[{"text": "翻开小米最新的财报数据。", "startFrame": 0, "durationFrames": 30}]} totalDurationFrames={30} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" anchors={[{"text": "财报数据", "showFrom": 0, "color": "#000000", "anim": "spring", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={120} durationInFrames={33}>
                <BWKpiHero content={[{"text": "过去一年研发投入飙过了几百亿。", "startFrame": 0, "durationFrames": 33}]} totalDurationFrames={33} value={300} suffix={"亿"} headline={"研发投入"} countDuration={36} anchors={[]} />
            </Sequence>
            <Sequence from={153} durationInFrames={35}>
                <BWCenterFocus content={[{"text": "这可是上市公司有审计的公开数据。", "startFrame": 0, "durationFrames": 35}]} totalDurationFrames={35} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" anchors={[{"text": "上市公司", "showFrom": 0, "color": "#000000", "anim": "spring", "audioEffect": "ping"}, {"text": "公开数据", "showFrom": 0, "color": "#000000", "anim": "spring", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={188} durationInFrames={57}>
                <BWCenterFocus content={[{"text": "不是某些把公关营销费用都算在研发里的公司所能比拟的。", "startFrame": 0, "durationFrames": 57}]} totalDurationFrames={57} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={245} durationInFrames={51}>
                <BWKpiHero content={[{"text": "这个数据已经超过了全世界九成以上的高科技企业。", "startFrame": 0, "durationFrames": 51}]} totalDurationFrames={51} value={90} prefix={""} suffix={"%"} headline={"超过全球高科技企业"} anchors={[]} />
            </Sequence>
            <Sequence from={296} durationInFrames={30}>
                <BWCenterFocus content={[{"text": "造一辆车不是去超市买菜。", "startFrame": 0, "durationFrames": 30}]} totalDurationFrames={30} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={326} durationInFrames={63}>
                <BWCenterFocus content={[{"text": "小米汽车的底盘架构，", "startFrame": 0, "durationFrames": 30}, {"text": "\n是几千个工程师硬生生啃下来的。", "startFrame": 30, "durationFrames": 33}]} totalDurationFrames={63} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="slideBottom" anchors={[{"text": "小米汽车", "showFrom": 0, "color": "#000000", "anim": "spring", "audioEffect": "ping"}, {"text": "底盘架构", "showFrom": 0, "color": "#000000", "anim": "popIn", "audioEffect": null}, {"text": "硬生生啃下来", "showFrom": 1, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={389} durationInFrames={61}>
                <BWKpiHero content={[{"text": "它的超级电机转速，", "startFrame": 0, "durationFrames": 30}, {"text": "\n直接捅破了行业的量产天花板。", "startFrame": 30, "durationFrames": 31}]} totalDurationFrames={61} value={100} prefix={""} suffix={"%"} headline={"超级电机转速"} anchors={[]} />
            </Sequence>
            <Sequence from={450} durationInFrames={90}>
                <BWKpiHero content={[{"text": "在自动驾驶系统领域，", "startFrame": 0, "durationFrames": 30}, {"text": "\n小米手里的绝对专利数，", "startFrame": 30, "durationFrames": 30}, {"text": "\n早就默默排进了全球前十。", "startFrame": 60, "durationFrames": 30}]} totalDurationFrames={90} value={10} prefix={"全球"} suffix={"强"} headline={"绝对专利数"} anchors={[]} />
            </Sequence>

        </AbsoluteFill>
    );
};
