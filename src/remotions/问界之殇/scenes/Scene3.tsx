import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWBeatSequence, BWCognitiveShift, BWKpiHero, BWMagnifyingGlass, BWTextFocus } from "../../../components";

// 净亏损十七亿
const SCENE_DURATION = 90 + 63 + 60 + 90 + 60 + 150 + 180;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={90}>
                <BWMagnifyingGlass content={[{"text": "先不说这钱花得值不值。", "startFrame": 0, "durationFrames": 30}, {"text": "对赛力斯来说，", "startFrame": 30, "durationFrames": 30}, {"text": "更要命的是「增收不增利」。", "startFrame": 60, "durationFrames": 30}]} totalDurationFrames={90} anchors={[{"text": "增收不增利", "showFrom": 2, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={90} durationInFrames={63}>
                <BWKpiHero content={[{"text": "2025年营收一千六百五十亿，", "startFrame": 0, "durationFrames": 33}, {"text": "净利率却只有三点六。", "startFrame": 33, "durationFrames": 30}]} totalDurationFrames={63} blocks={[{"value": 1650, "suffix": "亿", "label": "2025年营收", "useGrouping": true, "showFrom": 0}, {"value": 3.6, "suffix": "%", "label": "净利率", "decimalPlaces": 1, "showFrom": 1}]} countDuration={28} anchors={[]} />
            </Sequence>
            <Sequence from={153} durationInFrames={60}>
                <BWTextFocus content={[{"text": "一千六百亿体量，", "startFrame": 0, "durationFrames": 30}, {"text": "利润薄得像一张纸。", "startFrame": 30, "durationFrames": 30}]} totalDurationFrames={60} coreSentence={[{"text": "一千六百亿体量，", "showFrom": 0, "endFrom": 1}, {"text": "利润薄得像一张纸。", "showFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "薄得像一张纸", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={213} durationInFrames={90}>
                <BWKpiHero content={[{"text": "到2026年上半年，", "startFrame": 0, "durationFrames": 30}, {"text": "更残酷。", "startFrame": 30, "durationFrames": 30}, {"text": "净亏损十七亿。", "startFrame": 60, "durationFrames": 30}]} totalDurationFrames={90} blocks={[{"value": 2026, "label": "到这一刻", "suffix": "上半年", "showFrom": 0, "useGrouping": false}, {"value": 17, "prefix": "净亏损", "suffix": "亿", "label": "更残酷", "showFrom": 2, "useGrouping": false}]} countDuration={30} anchors={[]} />
            </Sequence>
            <Sequence from={303} durationInFrames={60}>
                <BWCognitiveShift content={[{"text": "短短半年之间，", "startFrame": 0, "durationFrames": 30}, {"text": "就从赚钱变成流血。", "startFrame": 30, "durationFrames": 30}]} totalDurationFrames={60} notText={"赚钱"} butText={"流血"} butSrc={staticFile("财务报表上的数字渐渐模糊，纸面渗出暗红色液体，滴落在桌面上，冷色调办公室灯光下，一片灰暗压抑的氛围")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Sequence from={363} durationInFrames={150}>
                <BWBeatSequence content={[{"text": "车卖出去了。", "startFrame": 0, "durationFrames": 30}, {"text": "热闹有了。", "startFrame": 30, "durationFrames": 30}, {"text": "品牌热度有了。", "startFrame": 60, "durationFrames": 30}, {"text": "可账上，", "startFrame": 90, "durationFrames": 30}, {"text": "是亏的。", "startFrame": 120, "durationFrames": 30}]} totalDurationFrames={150} stages={[{ imageSrc: staticFile("一排新车从工厂驶离，车灯亮着，远处城市天际线"), enterEffect: "slideLeft", tone: "calm" }, { imageSrc: staticFile("夜晚霓虹灯闪耀，人群聚集，气氛热烈"), enterEffect: "breathe", tone: "calm" }, { imageSrc: staticFile("品牌标志在摩天大楼大屏上闪烁，社交媒体点赞图标跳动"), enterEffect: "breathe", tone: "calm" }, { imageSrc: staticFile("办公桌上财务报表特写，红色钢笔划出负数，灯光突然变暗"), enterEffect: "zoomIn", tone: "alert" }]} anchors={[]} />
            </Sequence>
            <Sequence from={513} durationInFrames={180}>
                <BWCognitiveShift content={[{"text": "你说，", "startFrame": 0, "durationFrames": 30}, {"text": "一个老板看着这种报表，", "startFrame": 30, "durationFrames": 30}, {"text": "心里什么滋味？", "startFrame": 60, "durationFrames": 30}, {"text": "是感恩吗？", "startFrame": 90, "durationFrames": 30}, {"text": "不，", "startFrame": 120, "durationFrames": 30}, {"text": "是恐惧。", "startFrame": 150, "durationFrames": 30}]} totalDurationFrames={180} notText={"感恩"} butText={"恐惧"} butSrc={staticFile("深夜办公室，一个西装男子独自坐在老板椅上，手中拿着财务报表，眉头紧锁，窗外城市夜景，桌面灯光昏暗，气氛压抑")} notContentIndex={3} butContentIndex={5} anchors={[]} />
            </Sequence>

        </AbsoluteFill>
    );
};
