import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift, BWKpiHero, BWMagnifyingGlass, BWProgressRing, BWQuoteCitation, BWTextFocus } from "../../../components";

// 举证：直播续航聚光灯
const SCENE_DURATION = 53 + 332 + 77 + 69 + 154 + 137 + 138 + 162 + 168;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={53}>
                <BWCenterFocus content={[{"text": "再来讲直播续航。", "startFrame": 0, "durationFrames": 53}]} totalDurationFrames={53} imageSrc={staticFile("images/汽车质量论/scene_4_1.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={53} durationInFrames={332}>
                <BWKpiHero content={[{"text": "小米SU7，", "startFrame": 0, "durationFrames": 30}, {"text": "15小时全国直播续航，", "startFrame": 29, "durationFrames": 75}, {"text": "北京到上海，", "startFrame": 103, "durationFrames": 32}, {"text": "1313公里，", "startFrame": 135, "durationFrames": 53}, {"text": "高速顶着110到120公里时速的限速跑，", "startFrame": 187, "durationFrames": 100}, {"text": "中间只充一次电，", "startFrame": 286, "durationFrames": 45}]} totalDurationFrames={332} blocks={[{"value": 15, "suffix": "小时", "label": "直播续航", "showFrom": 1}, {"value": 1313, "suffix": "公里", "label": "北京到上海", "useGrouping": true, "showFrom": 3}, {"value": 110, "suffix": "+", "label": "时速", "showFrom": 4}]} anchors={[]} />
            </Sequence>
            <Sequence from={385} durationInFrames={77}>
                <BWKpiHero content={[{"text": "平均电耗14.6度每百公里，", "startFrame": 0, "durationFrames": 77}]} totalDurationFrames={77} value={14.6} label={"平均电耗"} suffix={"度每百公里"} decimalPlaces={1} anchors={[]} />
            </Sequence>
            <Sequence from={462} durationInFrames={69}>
                <BWProgressRing content={[{"text": "实测续航达成率85%以上。", "startFrame": 0, "durationFrames": 69}]} totalDurationFrames={69} percent={85} label={"实测续航达成率"} subLabel={"85%以上"} anchors={[]} />
            </Sequence>
            <Sequence from={531} durationInFrames={154}>
                <BWCognitiveShift content={[{"text": "不是实验室，", "startFrame": 0, "durationFrames": 28}, {"text": "不是CLTC。", "startFrame": 27, "durationFrames": 39}, {"text": "高速顶着限速跑，", "startFrame": 65, "durationFrames": 44}, {"text": "几百万观众盯着。", "startFrame": 109, "durationFrames": 45}]} totalDurationFrames={154} notText={"实验室、CLTC"} butText={"实战直播验证"} butSrc={staticFile("images/汽车质量论/scene_4_6.png")} notContentIndex={0} butContentIndex={2} anchors={[]} />
            </Sequence>
            <Sequence from={685} durationInFrames={137}>
                <BWCenterFocus content={[{"text": "一次直播明明有很多的指标来证明这辆车的电耗有多优秀，", "startFrame": 0, "durationFrames": 137}]} totalDurationFrames={137} imageSrc={staticFile("images/汽车质量论/scene_4_7.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={822} durationInFrames={138}>
                <BWQuoteCitation content={[{"text": "很多人却只会盯着“中间只充一次电”的宣传用语来阴阳怪气。", "startFrame": 0, "durationFrames": 138}]} totalDurationFrames={138} quoteSource={"小米SU7宣传"} quoteDisplayText={"中间只充一次电"} showFrom={0} anchors={[]} />
            </Sequence>
            <Sequence from={960} durationInFrames={162}>
                <BWMagnifyingGlass content={[{"text": "直播续航骗不了人。", "startFrame": 0, "durationFrames": 44}, {"text": "不敢开直播的，", "startFrame": 43, "durationFrames": 35}, {"text": "甚至中途下播的，", "startFrame": 78, "durationFrames": 49}, {"text": "怕的是什么？", "startFrame": 126, "durationFrames": 35}]} totalDurationFrames={162} anchors={[{"text": "骗不了人", "showFrom": 0, "color": "#111111", "anim": "spring"}, {"text": "怕的是什么", "showFrom": 3, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={1122} durationInFrames={168}>
                <BWTextFocus content={[{"text": "界车既然遥遥领先，", "startFrame": 0, "durationFrames": 41}, {"text": "为什么不来跑一跑？", "startFrame": 40, "durationFrames": 36}, {"text": "让大家见识见识，", "startFrame": 76, "durationFrames": 37}, {"text": "什么叫优秀的续航管理？", "startFrame": 112, "durationFrames": 55}]} totalDurationFrames={168} coreSentence={[{"text": "界车既然遥遥领先，为什么不来跑一跑？", "showFrom": 0}, {"text": "让大家见识见识，", "showFrom": 2}, {"text": "什么叫优秀的续航管理？", "showFrom": 3}]} coreSentenceAnchors={[{"coreSentenceAnchor": "遥遥领先", "color": "#EF4444"}, {"coreSentenceAnchor": "续航管理", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/汽车质量论/scene_4/scene_4.mp3")} />
        </AbsoluteFill>
    );
};
