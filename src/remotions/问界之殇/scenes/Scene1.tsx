import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCauseChain, BWCenterFocus, BWCognitiveShift, BWMagnifyingGlass, BWPanelGrid } from "../../../components";

// 看不见的华为税
const SCENE_DURATION = 90 + 65 + 60 + 60 + 120 + 60;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={90}>
                <BWCognitiveShift content={[{"text": "华为不是赛力斯的救世主。", "startFrame": 0, "durationFrames": 30}, {"text": "对赛力斯来说，", "startFrame": 30, "durationFrames": 30}, {"text": "华为更像一只吸血鬼。", "startFrame": 60, "durationFrames": 30}]} totalDurationFrames={90} notText={"救世主"} butText={"吸血鬼"} butSrc={staticFile("华为标志如一只蝙蝠悬挂在赛力斯财务数据上方")} notContentIndex={0} butContentIndex={2} anchors={[]} />
            </Sequence>
            <Sequence from={90} durationInFrames={65}>
                <BWCenterFocus content={[{"text": "你先别急着骂。", "startFrame": 0, "durationFrames": 30}, {"text": "把你自己放进赛力斯老板的椅子上。", "startFrame": 30, "durationFrames": 35}]} totalDurationFrames={65} imageSrc={staticFile("一位企业家坐在办公室皮质老板椅上，表情凝重，面前是铺满财报文件的会议桌，窗外是夜色中的城市霓虹，光线昏暗")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={155} durationInFrames={60}>
                <BWPanelGrid content={[{"text": "问界车卖爆了。", "startFrame": 0, "durationFrames": 30}, {"text": "朋友圈全是华为光环。", "startFrame": 30, "durationFrames": 30}]} totalDurationFrames={60} panels={[{ src: staticFile("新能源汽车展厅内人潮涌动，问界车型前围满顾客，闪光灯不断"), showFrom: 0, enterEffect: "zoomIn" }, { src: staticFile("手机朋友圈界面刷屏，每条动态都带有华为标志的光环和点赞"), showFrom: 1, enterEffect: "fadeIn" }, { src: staticFile("霓虹灯光环笼罩下的汽车轮廓，背景是社交媒体的点赞图标海洋"), showFrom: 1, enterEffect: "breathe" }]} anchors={[]} />
            </Sequence>
            <Sequence from={215} durationInFrames={60}>
                <BWCenterFocus content={[{"text": "可你打开财报，", "startFrame": 0, "durationFrames": 30}, {"text": "手心发凉。", "startFrame": 30, "durationFrames": 30}]} totalDurationFrames={60} imageSrc={staticFile("一双微微颤抖的手翻开一份财报文件，文件上曲线向下，背景光线冷暗")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={275} durationInFrames={120}>
                <BWCauseChain content={[{"text": "车越多，", "startFrame": 0, "durationFrames": 30}, {"text": "钱越薄。", "startFrame": 30, "durationFrames": 30}, {"text": "利润像被一根看不见的管子，", "startFrame": 60, "durationFrames": 30}, {"text": "悄悄抽走。", "startFrame": 90, "durationFrames": 30}]} totalDurationFrames={120} layout={"horizontal"} nodes={[{ label: "销量暴涨", imageSrc: staticFile("无数车辆从流水线上涌出的简笔画"), showFrom: 0, enterEffect: "slideLeft" }, { label: "利润变薄", imageSrc: staticFile("一枚金币被压成薄片的简笔画"), showFrom: 1, enterEffect: "fadeIn" }, { label: "隐性抽成", imageSrc: staticFile("一根透明软管从钱袋中吸走金色液体的简笔画"), showFrom: 2, enterEffect: "zoomIn" }, { label: "利润流失", imageSrc: staticFile("金币一粒粒飘向远处消失的简笔画"), showFrom: 3, enterEffect: "fadeIn" }]} anchors={[{"text": "钱越薄", "showFrom": 1, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={395} durationInFrames={60}>
                <BWMagnifyingGlass content={[{"text": "这根管子叫什么？", "startFrame": 0, "durationFrames": 30}, {"text": "有人叫它「华为税」。", "startFrame": 30, "durationFrames": 30}]} totalDurationFrames={60} anchors={[{"text": "华为税", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>

        </AbsoluteFill>
    );
};
