import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWBeatSequence, BWCenterFocus, BWPanelGrid, BWSplitCompare, BWTextFocus, BWTimeline } from "../../../components";

// 问界被五界分流
const SCENE_DURATION = 30 + 63 + 150 + 125 + 60 + 120 + 150 + 90 + 151 + 90;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={30}>
                <BWTextFocus content={[{"text": "更憋屈的还在后面。", "startFrame": 0, "durationFrames": 30}]} totalDurationFrames={30} coreSentence={[{"text": "更憋屈的还在后面。", "showFrom": 0}]} coreSentenceAnchors={[{"coreSentenceAnchor": "更憋屈", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={30} durationInFrames={63}>
                <BWCenterFocus content={[{"text": "问界帮鸿蒙智行把招牌打响之后，", "startFrame": 0, "durationFrames": 33}, {"text": "华为开始铺五界。", "startFrame": 33, "durationFrames": 30}]} totalDurationFrames={63} imageSrc={staticFile("一辆汽车标志在聚光灯下闪耀，背景逐渐展开五条分支路线，象征品牌扩张")} enterEffect="fadeIn" anchors={[{"text": "五界", "showFrom": 1, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={93} durationInFrames={150}>
                <BWPanelGrid content={[{"text": "智界、", "startFrame": 0, "durationFrames": 30}, {"text": "享界、", "startFrame": 30, "durationFrames": 30}, {"text": "尊界、", "startFrame": 60, "durationFrames": 30}, {"text": "尚界，", "startFrame": 90, "durationFrames": 30}, {"text": "一起上桌。", "startFrame": 120, "durationFrames": 30}]} totalDurationFrames={150} panels={[{ src: staticFile("四个不同标志的汽车品牌剪影同时出现在一张餐桌上"), showFrom: 0, enterEffect: "fadeIn" }, { src: staticFile("四个汽车标志汇聚于桌面中央，桌面光芒渐亮"), showFrom: 1, enterEffect: "zoomIn" }, { src: staticFile("俯视角四宫格渐次点亮，每个格子浮现不同车型轮廓"), showFrom: 2, enterEffect: "slideLeft" }, { src: staticFile("四辆不同定位的汽车并排驶入画面，停在同一展台"), showFrom: 3, enterEffect: "slideBottom" }, { src: staticFile("四辆车同时亮相，车灯依次点亮后镜头拉远展示全景"), showFrom: 4, enterEffect: "fadeIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={243} durationInFrames={125}>
                <BWTimeline content={[{"text": "问界销量占比，", "startFrame": 0, "durationFrames": 30}, {"text": "从2024年大约87%，", "startFrame": 30, "durationFrames": 30}, {"text": "掉到2025年七成出头，", "startFrame": 60, "durationFrames": 30}, {"text": "再到2026年上半年大约六成七。", "startFrame": 90, "durationFrames": 35}]} totalDurationFrames={125} images={[{ src: staticFile("一个向上的绿色箭头柱状图图标，顶部标有一辆白色SUV轮廓，背景为璀璨星空，柱状图高度处于最高状态"), enterEffect: "zoomIn", label: "2024年 87%", textIndex: 1, startFrame: 0 }, { src: staticFile("同一个向上的绿色箭头柱状图图标但高度明显下降，顶部有一辆白色SUV轮廓变淡，背景渐变略暗，柱状图高度下降明显"), enterEffect: "fadeIn", label: "2025年 70%", textIndex: 2, startFrame: 30 }, { src: staticFile("绿色箭头柱状图继续下降变成半透明，顶部白色SUV几乎模糊消散，背景变成其他深色车影先后驶离的光轨，柱状图处于更低水平"), enterEffect: "slideLeft", label: "2026年 67%", textIndex: 3, startFrame: 60 }]} anchors={[]} />
            </Sequence>
            <Sequence from={368} durationInFrames={60}>
                <BWTextFocus content={[{"text": "招牌是你打的。", "startFrame": 0, "durationFrames": 30}, {"text": "流量开始分给别人。", "startFrame": 30, "durationFrames": 30}]} totalDurationFrames={60} coreSentence={[{"text": "招牌是你打的。", "showFrom": 0, "endFrom": 0}, {"text": "流量开始分给别人。", "showFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "分给别人", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={428} durationInFrames={120}>
                <BWPanelGrid content={[{"text": "尊界去冲百万豪车。", "startFrame": 0, "durationFrames": 30}, {"text": "智界去抢年轻科技。", "startFrame": 30, "durationFrames": 30}, {"text": "享界去打行政豪华。", "startFrame": 60, "durationFrames": 30}, {"text": "尚界去卷大众市场。", "startFrame": 90, "durationFrames": 30}]} totalDurationFrames={120} panels={[{ src: staticFile("豪车在雨夜中行驶，车头灯扫过路面，地面反射出冷冽的光"), showFrom: 0, enterEffect: "fadeIn" }, { src: staticFile("科技感十足的流线型跑车在霓虹街道上飞驰，周围光线拉出残影"), showFrom: 1, enterEffect: "slideLeft" }, { src: staticFile("宽敞的行政级轿车缓缓停在一栋写字楼门前，内饰低调奢华"), showFrom: 2, enterEffect: "slideBottom" }, { src: staticFile("经济型轿车穿梭在拥挤的城市街道中，旁边是菜市场和公交站"), showFrom: 3, enterEffect: "slideLeft" }]} anchors={[]} />
            </Sequence>
            <Sequence from={548} durationInFrames={150}>
                <BWBeatSequence content={[{"text": "赛力斯呢？", "startFrame": 0, "durationFrames": 30}, {"text": "还在交高额渠道费。", "startFrame": 30, "durationFrames": 30}, {"text": "还在被消费者叫「华为车」。", "startFrame": 60, "durationFrames": 30}, {"text": "利润被抽走。", "startFrame": 90, "durationFrames": 30}, {"text": "独特性也被稀释。", "startFrame": 120, "durationFrames": 30}]} totalDurationFrames={150} stages={[{ imageSrc: staticFile("一个男人站在迷雾中，神情困惑，周围是模糊的华为门店轮廓"), enterEffect: "breathe", tone: "calm", showFrom: 0 }, { imageSrc: staticFile("金钱从一辆赛力斯汽车上方不断被抽离，飞向远处的华为标志性建筑"), enterEffect: "slideBottom", tone: "alert", showFrom: 1 }, { imageSrc: staticFile("消费者手指指向赛力斯汽车，却喊着旁边的华为标识，赛力斯车标逐渐淡出"), enterEffect: "slideBottom", tone: "alert", showFrom: 2 }, { imageSrc: staticFile("赛力斯汽车在画面中央逐渐褪色，变成半透明轮廓，背景中其他品牌汽车越来越清晰"), enterEffect: "zoomIn", tone: "alert", showFrom: 3 }]} anchors={[]} />
            </Sequence>
            <Sequence from={698} durationInFrames={90}>
                <BWTextFocus content={[{"text": "到最后，", "startFrame": 0, "durationFrames": 30}, {"text": "赛力斯既没有实打实利润，", "startFrame": 30, "durationFrames": 30}, {"text": "又没有了自己的品牌灵魂。", "startFrame": 60, "durationFrames": 30}]} totalDurationFrames={90} coreSentence={[{"text": "到最后，赛力斯既没有实打实利润，", "showFrom": 0, "endFrom": 1}, {"text": "又没有了自己的品牌灵魂。", "showFrom": 2}]} coreSentenceAnchors={[{"coreSentenceAnchor": "品牌灵魂", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={788} durationInFrames={151}>
                <BWSplitCompare content={[{"text": "做问界之前，", "startFrame": 0, "durationFrames": 30}, {"text": "好歹大家还知道他是东风小康，", "startFrame": 30, "durationFrames": 31}, {"text": "传统面包神车。", "startFrame": 61, "durationFrames": 30}, {"text": "做问界之后，", "startFrame": 91, "durationFrames": 30}, {"text": "大家只知道这是华为的车了。", "startFrame": 121, "durationFrames": 30}]} totalDurationFrames={151} leftSrc={staticFile("一辆朴素的东风小康面包车停在路边，背景是早期中国城镇街景，画面色调偏旧")} rightSrc={staticFile("同一辆汽车挂着华为品牌标识，现代展厅灯光，科技感十足")} leftLabel={"做问界之前"} rightLabel={"做问界之后"} leftShowFrom={0} rightShowFrom={3} anchors={[]} />
            </Sequence>
            <Sequence from={939} durationInFrames={90}>
                <BWTextFocus content={[{"text": "所以对于赛力斯来说，", "startFrame": 0, "durationFrames": 30}, {"text": "拔掉华为，", "startFrame": 30, "durationFrames": 30}, {"text": "是迟早的事情。", "startFrame": 60, "durationFrames": 30}]} totalDurationFrames={90} coreSentence={[{"text": "所以对于赛力斯来说，", "showFrom": 0}, {"text": "拔掉华为，", "showFrom": 1}, {"text": "是迟早的事情。", "showFrom": 2}]} coreSentenceAnchors={[{"coreSentenceAnchor": "拔掉华为", "color": "#EF4444"}]} />
            </Sequence>

        </AbsoluteFill>
    );
};
