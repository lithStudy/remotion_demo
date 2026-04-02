import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWBeatSequence, BWCenterFocus } from "../../../components";

// 发布会现场的视觉陷阱
const SCENE_DURATION = 119 + 156;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={119}>
                <BWCenterFocus content={[{"text": "看着发布会大屏幕上那条几乎垂直冲向云霄的业绩增长红线，", "startFrame": 0, "durationFrames": 59}, {"text": "台下的投资者们热血沸腾，", "startFrame": 59, "durationFrames": 30}, {"text": "响起了雷鸣般的掌声。", "startFrame": 89, "durationFrames": 30}]} totalDurationFrames={119} imageSrc={staticFile("发布会现场大屏幕，红色柱状图向上增长")} enterEffect="slideBottom" anchors={[{"text": "业绩增长", "showFrom": 0, "color": "#000000", "anim": "slideUp", "audioEffect": "ping"}, {"text": "热血沸腾", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={119} durationInFrames={156}>
                <BWBeatSequence content={[{"text": "屏幕上充满视觉张力的图表，看起来是如此的震撼和雄辩，", "startFrame": 0, "durationFrames": 53}, {"text": "以至于在场根本没有一个人去仔细看一眼，", "startFrame": 53, "durationFrames": 42}, {"text": "图表边缘那个被偷偷做过手脚、", "startFrame": 95, "durationFrames": 31}, {"text": "刻意截断了的纵坐标。", "startFrame": 126, "durationFrames": 30}]} totalDurationFrames={156} stages={[{ imageSrc: staticFile("屏幕上出现一张极具视觉冲击力的统计图表，线条夸张、对比强烈，观众被吸引的简笔画"), enterEffect: "breathe", tone: "calm" }, { imageSrc: staticFile("一群人被图表震撼到，目光只盯着大趋势，没有人低头细看坐标与刻度的简笔画"), enterEffect: "slideBottom", tone: "alert" }, { imageSrc: staticFile("图表边缘有一只手在偷偷调整坐标轴或刻度，表现“做过手脚”的隐蔽感，简笔画"), enterEffect: "slideLeft", tone: "alert" }, { imageSrc: staticFile("被截断的纵坐标特写：y轴从中间开始，底部刻度被切掉，形成误导性的巨大差异，简笔画"), enterEffect: "zoomIn", tone: "alert" }]} />
            </Sequence>

        </AbsoluteFill>
    );
};
