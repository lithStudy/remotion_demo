import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWBeatSequence, BWCauseChain, BWTextFocus } from "../../../components";

// 定义权决定生死
const SCENE_DURATION = 90 + 120 + 30;

export const calculateScene5Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene5: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={90}>
                <BWBeatSequence content={[{"text": "不只是赛力斯。", "startFrame": 0, "durationFrames": 30}, {"text": "所有跨界合作，", "startFrame": 30, "durationFrames": 30}, {"text": "最后都会撞上同一道墙。", "startFrame": 60, "durationFrames": 30}]} totalDurationFrames={90} stages={[{ imageSrc: staticFile("一辆汽车驶入朦胧的十字路口，周围是模糊交错的合作标志剪影"), enterEffect: "breathe", tone: "calm" }, { imageSrc: staticFile("多辆车从不同方向汇聚，车流开始密集，画面色调逐渐偏冷"), enterEffect: "slideBottom", tone: "alert" }, { imageSrc: staticFile("所有车流猛然撞向一堵巨大的半透明高墙，光线碎裂飞溅，冲击感强烈"), enterEffect: "slideBottom", tone: "alert" }]} anchors={[]} />
            </Sequence>
            <Sequence from={90} durationInFrames={120}>
                <BWCauseChain content={[{"text": "谁掌握产品定义权，", "startFrame": 0, "durationFrames": 30}, {"text": "谁就掌握利润分配权。", "startFrame": 30, "durationFrames": 30}, {"text": "谁掌握利润分配权，", "startFrame": 60, "durationFrames": 30}, {"text": "谁就掌握一个企业的生死。", "startFrame": 90, "durationFrames": 30}]} totalDurationFrames={120} layout={"horizontal"} nodes={[{ label: "产品定义权", imageSrc: staticFile("一只手紧握方向盘的特写，背景是汽车设计图纸"), showFrom: 0, enterEffect: "fadeIn" }, { label: "利润分配权", imageSrc: staticFile("金币堆叠的简笔画，顶部一枚硬币正在被取下"), showFrom: 1, enterEffect: "slideLeft" }, { label: "生死", imageSrc: staticFile("悬崖边一颗摇摇欲坠的石块，暗示企业命运悬于一线"), showFrom: 3, enterEffect: "zoomIn" }]} anchors={[{"text": "生死", "showFrom": 3, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={210} durationInFrames={30}>
                <BWTextFocus content={[{"text": "哪个车企会让人掌握呢？", "startFrame": 0, "durationFrames": 30}]} totalDurationFrames={30} coreSentence={[{"text": "哪个车企会让人掌握呢？", "showFrom": 0}]} coreSentenceAnchors={[{"coreSentenceAnchor": "会让人掌握", "color": "#EF4444"}]} />
            </Sequence>

        </AbsoluteFill>
    );
};
