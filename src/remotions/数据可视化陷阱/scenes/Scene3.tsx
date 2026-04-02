import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift } from "../../../components";

// 几何骗局的常见手法
const SCENE_DURATION = 65 + 33 + 63 + 116 + 161 + 77;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={65}>
                <BWCenterFocus content={[{"text": "在数据可视化与传播学中，", "startFrame": 0, "durationFrames": 30}, {"text": "这其实是一套极其阴险的几何骗局。", "startFrame": 30, "durationFrames": 35}]} totalDurationFrames={65} imageSrc={staticFile("数据图表，几何图形")} enterEffect="fadeIn" anchors={[{"text": "几何骗局", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={65} durationInFrames={33}>
                <BWCenterFocus content={[{"text": "他们最常见的手法就是截断Y轴。", "startFrame": 0, "durationFrames": 33}]} totalDurationFrames={33} imageSrc={staticFile("数据图表，Y轴被截断的示意图")} enterEffect="fadeIn" anchors={[{"text": "截断Y轴", "showFrom": 0, "color": "#EF4444", "anim": "highlight", "audioEffect": null}]} />
            </Sequence>
            <Sequence from={98} durationInFrames={63}>
                <BWCenterFocus content={[{"text": "正常的数据起伏如果从零开始画，", "startFrame": 0, "durationFrames": 33}, {"text": "可能只是一条平缓的波浪。", "startFrame": 33, "durationFrames": 30}]} totalDurationFrames={63} imageSrc={staticFile("一条弯曲的波浪线")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={161} durationInFrames={116}>
                <BWCognitiveShift content={[{"text": "但如果他们把坐标起点直接改成九十，", "startFrame": 0, "durationFrames": 37}, {"text": "那么原本只有百分之一的微小波动，", "startFrame": 37, "durationFrames": 35}, {"text": "在图表上就会瞬间变成拔地而起的陡峭山峰。", "startFrame": 72, "durationFrames": 44}]} totalDurationFrames={116} notText={"平缓的波浪"} butText={"陡峭的山峰"} butSrc={staticFile("拔地而起的山峰，阳光照耀")} notContentIndex={0} butContentIndex={2} anchors={[]} />
            </Sequence>
            <Sequence from={277} durationInFrames={161}>
                <BWCenterFocus content={[{"text": "另外，", "startFrame": 0, "durationFrames": 30}, {"text": "他们还会熟练地玩弄樱桃采摘的游戏，", "startFrame": 30, "durationFrames": 37}, {"text": "只截取数据猛烈上升的那几个特定月份给你看，", "startFrame": 67, "durationFrames": 46}, {"text": "把连年巨额亏损的丑陋真相死死掩盖在画框之外。", "startFrame": 113, "durationFrames": 48}]} totalDurationFrames={161} imageSrc={staticFile("一张图表，数据呈现断崖式下跌的趋势")} enterEffect="slideBottom" anchors={[{"text": "樱桃采摘", "showFrom": 1, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}, {"text": "掩盖真相", "showFrom": 3, "color": "#EF4444", "anim": "spring", "audioEffect": "woosh"}]} />
            </Sequence>
            <Sequence from={438} durationInFrames={77}>
                <BWCenterFocus content={[{"text": "这就好比故意切掉照片里满地垃圾的背景，", "startFrame": 0, "durationFrames": 42}, {"text": "只给你看一张擦得锃亮的干净桌面。", "startFrame": 42, "durationFrames": 35}]} totalDurationFrames={77} imageSrc={staticFile("满地垃圾的照片，背景模糊，前景是一张擦得锃亮的干净桌面")} enterEffect="zoomIn" anchors={[{"text": "干净桌面", "showFrom": 1, "color": "#000000", "anim": "popIn", "audioEffect": "ping"}]} />
            </Sequence>

        </AbsoluteFill>
    );
};
