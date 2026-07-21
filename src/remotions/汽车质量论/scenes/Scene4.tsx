import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift, BWKpiHero, BWMagnifyingGlass, BWProgressRing, BWQuoteCitation, BWTextFocus } from "../../../components";

// 举证：直播续航聚光灯
const SCENE_DURATION = 51 + 321 + 88 + 74 + 149 + 135 + 135 + 134 + 192;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={51}>
                <BWCenterFocus content={[{"text": "再来讲直播续航。", "startFrame": 0, "durationFrames": 51}]} totalDurationFrames={51} imageSrc={staticFile("images/汽车质量论/scene_4_1.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={51} durationInFrames={321}>
                <BWKpiHero content={[{"text": "小米SU7，", "startFrame": 0, "durationFrames": 29}, {"text": "15小时全国直播续航，", "startFrame": 28, "durationFrames": 62}, {"text": "北京到上海，", "startFrame": 89, "durationFrames": 33}, {"text": "1313公里，", "startFrame": 122, "durationFrames": 48}, {"text": "高速顶着110到120公里时速的限速跑，", "startFrame": 170, "durationFrames": 105}, {"text": "中间只充一次电，", "startFrame": 274, "durationFrames": 46}]} totalDurationFrames={321} blocks={[{"value": 15, "suffix": "小时", "label": "直播续航", "showFrom": 1}, {"value": 1313, "suffix": "公里", "label": "北京到上海", "useGrouping": true, "showFrom": 3}, {"value": 110, "suffix": "+", "label": "时速", "showFrom": 4}]} anchors={[]} />
            </Sequence>
            <Sequence from={372} durationInFrames={88}>
                <BWKpiHero content={[{"text": "平均电耗14.6度每百公里，", "startFrame": 0, "durationFrames": 88}]} totalDurationFrames={88} value={14.6} label={"平均电耗"} suffix={"度每百公里"} decimalPlaces={1} anchors={[]} />
            </Sequence>
            <Sequence from={460} durationInFrames={74}>
                <BWProgressRing content={[{"text": "实测续航达成率85%以上。", "startFrame": 0, "durationFrames": 74}]} totalDurationFrames={74} percent={85} label={"实测续航达成率"} subLabel={"85%以上"} anchors={[]} />
            </Sequence>
            <Sequence from={534} durationInFrames={149}>
                <BWCognitiveShift content={[{"text": "不是实验室，", "startFrame": 0, "durationFrames": 29}, {"text": "不是CLTC。", "startFrame": 28, "durationFrames": 31}, {"text": "高速顶着限速跑，", "startFrame": 58, "durationFrames": 41}, {"text": "几百万观众盯着。", "startFrame": 99, "durationFrames": 50}]} totalDurationFrames={149} notText={"实验室、CLTC"} butText={"实战直播验证"} butSrc={staticFile("images/汽车质量论/scene_4_6.png")} notContentIndex={0} butContentIndex={2} anchors={[]} />
            </Sequence>
            <Sequence from={683} durationInFrames={135}>
                <BWCenterFocus content={[{"text": "一次直播明明有很多的指标来证明这辆车的电耗有多优秀，", "startFrame": 0, "durationFrames": 135}]} totalDurationFrames={135} imageSrc={staticFile("images/汽车质量论/scene_4_7.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={818} durationInFrames={135}>
                <BWQuoteCitation content={[{"text": "很多人却只会盯着“中间只充一次电”的宣传用语来阴阳怪气。", "startFrame": 0, "durationFrames": 135}]} totalDurationFrames={135} quoteSource={"小米SU7宣传"} quoteDisplayText={"中间只充一次电"} showFrom={0} anchors={[]} />
            </Sequence>
            <Sequence from={953} durationInFrames={134}>
                <BWMagnifyingGlass content={[{"text": "直播续航骗不了人。", "startFrame": 0, "durationFrames": 41}, {"text": "不敢开直播的，", "startFrame": 40, "durationFrames": 29}, {"text": "甚至中途下播的，", "startFrame": 68, "durationFrames": 38}, {"text": "怕的是什么？", "startFrame": 105, "durationFrames": 28}]} totalDurationFrames={134} anchors={[{"text": "骗不了人", "showFrom": 0, "color": "#111111", "anim": "spring"}, {"text": "怕的是什么", "showFrom": 3, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={1087} durationInFrames={192}>
                <BWTextFocus content={[{"text": "界车既然遥遥领先，", "startFrame": 0, "durationFrames": 52}, {"text": "为什么不来跑一跑？", "startFrame": 51, "durationFrames": 43}, {"text": "让大家见识见识，", "startFrame": 93, "durationFrames": 40}, {"text": "什么叫优秀的续航管理？", "startFrame": 133, "durationFrames": 59}]} totalDurationFrames={192} coreSentence={[{"text": "界车既然遥遥领先，为什么不来跑一跑？", "showFrom": 0}, {"text": "让大家见识见识，", "showFrom": 2}, {"text": "什么叫优秀的续航管理？", "showFrom": 3}]} coreSentenceAnchors={[{"coreSentenceAnchor": "遥遥领先", "color": "#EF4444"}, {"coreSentenceAnchor": "续航管理", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/汽车质量论/scene_4/scene_4.mp3")} />
        </AbsoluteFill>
    );
};
