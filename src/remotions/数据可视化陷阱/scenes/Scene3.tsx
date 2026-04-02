import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWSplitCompare } from "../../../components";

// 几何骗局的常见手法
const SCENE_DURATION = 164 + 79 + 436 + 345 + 161;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={164}>
                <BWCenterFocus content={[{"text": "在数据可视化与传播学中，", "startFrame": 0, "durationFrames": 66}, {"text": "这其实是一套极其阴险的几何骗局。", "startFrame": 65, "durationFrames": 99}]} totalDurationFrames={164} imageSrc={staticFile("images/数据可视化陷阱/scene_3_1.png")} enterEffect="fadeIn" anchors={[{"text": "几何骗局", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={164} durationInFrames={79}>
                <BWCenterFocus content={[{"text": "他们最常见的手法就是截断Y轴。", "startFrame": 0, "durationFrames": 79}]} totalDurationFrames={79} imageSrc={staticFile("images/数据可视化陷阱/scene_3_2.png")} enterEffect="fadeIn" anchors={[{"text": "截断Y轴", "showFrom": 0, "color": "#EF4444", "anim": "highlight", "audioEffect": null}]} />
            </Sequence>
            <Sequence from={243} durationInFrames={436}>
                <BWSplitCompare content={[{"text": "正常的数据起伏如果从零开始画，", "startFrame": 0, "durationFrames": 78}, {"text": "可能只是一条平缓的波浪。", "startFrame": 77, "durationFrames": 51}, {"text": "但如果他们把坐标起点直接改成九十，", "startFrame": 127, "durationFrames": 106}, {"text": "那么原本只有百分之一的微小波动，", "startFrame": 233, "durationFrames": 92}, {"text": "在图表上就会瞬间变成拔地而起的陡峭山峰。", "startFrame": 325, "durationFrames": 111}]} totalDurationFrames={436} leftSrc={staticFile("images/数据可视化陷阱/scene_3_3_left.png")} rightSrc={staticFile("images/数据可视化陷阱/scene_3_3_right.png")} leftLabel={"微小波动"} rightLabel={"陡峭山峰"} />
            </Sequence>
            <Sequence from={679} durationInFrames={345}>
                <BWCenterFocus content={[{"text": "另外，", "startFrame": 0, "durationFrames": 17}, {"text": "他们还会熟练地玩弄樱桃采摘的游戏，", "startFrame": 16, "durationFrames": 90}, {"text": "只截取数据猛烈上升的那几个特定月份给你看，", "startFrame": 105, "durationFrames": 111}, {"text": "把连年巨额亏损的丑陋真相死死掩盖在画框之外。", "startFrame": 216, "durationFrames": 129}]} totalDurationFrames={345} imageSrc={staticFile("images/数据可视化陷阱/scene_3_4.png")} enterEffect="slideBottom" anchors={[{"text": "樱桃采摘", "showFrom": 1, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}, {"text": "掩盖真相", "showFrom": 3, "color": "#EF4444", "anim": "spring", "audioEffect": "woosh"}]} />
            </Sequence>
            <Sequence from={1024} durationInFrames={161}>
                <BWCenterFocus content={[{"text": "这就好比故意切掉照片里满地垃圾的背景，", "startFrame": 0, "durationFrames": 84}, {"text": "只给你看一张擦得锃亮的干净桌面。", "startFrame": 84, "durationFrames": 77}]} totalDurationFrames={161} imageSrc={staticFile("images/数据可视化陷阱/scene_3_5.png")} enterEffect="zoomIn" anchors={[{"text": "干净桌面", "showFrom": 1, "color": "#000000", "anim": "popIn", "audioEffect": "ping"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/数据可视化陷阱/scene_3/scene_3.mp3")} />
        </AbsoluteFill>
    );
};
