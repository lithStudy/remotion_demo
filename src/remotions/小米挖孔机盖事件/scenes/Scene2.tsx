import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWBeatSequence, BWCauseChain, BWCenterFocus, BWMagnifyingGlass, BWQuoteCitation } from "../../../components";

// 反转：挖孔机盖虚假散热
const SCENE_DURATION = 59 + 175 + 174 + 191 + 132;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={59}>
                <BWCenterFocus content={[{"text": "这事儿到底是怎么反转的？", "startFrame": 0, "durationFrames": 59}]} totalDurationFrames={59} imageSrc={staticFile("images/小米挖孔机盖事件/scene_2_1.png")} enterEffect="zoomIn" anchors={[]} />
            </Sequence>
            <Sequence from={59} durationInFrames={175}>
                <BWQuoteCitation content={[{"text": "发布会上，", "startFrame": 0, "durationFrames": 29}, {"text": "雷总指着那两个孔说：", "startFrame": 28, "durationFrames": 78}, {"text": "“内部结构全改了，", "startFrame": 105, "durationFrames": 23}, {"text": "直接导向轮毂散热。”", "startFrame": 128, "durationFrames": 46}]} totalDurationFrames={175} quoteSource={"雷军"} quoteDisplayText={"内部结构全改了，直接导向轮毂散热。"} anchors={[]} />
            </Sequence>
            <Sequence from={234} durationInFrames={174}>
                <BWMagnifyingGlass content={[{"text": "结果交付以后，", "startFrame": 0, "durationFrames": 38}, {"text": "硬核博主一拆机盖，", "startFrame": 37, "durationFrames": 43}, {"text": "好家伙，", "startFrame": 79, "durationFrames": 29}, {"text": "下面竟然封死了一块塑料板！", "startFrame": 108, "durationFrames": 66}]} totalDurationFrames={174} anchors={[{"text": "封死", "showFrom": 3, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={408} durationInFrames={191}>
                <BWCauseChain content={[{"text": "烟雾测试一做，", "startFrame": 0, "durationFrames": 40}, {"text": "气流在孔位表面疯狂打旋，", "startFrame": 39, "durationFrames": 67}, {"text": "根本进不去，", "startFrame": 105, "durationFrames": 34}, {"text": "更别提给刹车降温了。", "startFrame": 139, "durationFrames": 52}]} totalDurationFrames={191} layout={"horizontal"} nodes={[{ label: "烟雾测试", imageSrc: staticFile("images/小米挖孔机盖事件/scene_2_4_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { label: "气流打旋", imageSrc: staticFile("images/小米挖孔机盖事件/scene_2_4_img1.png"), showFrom: 1, enterEffect: "fadeIn" }, { label: "通道堵塞", imageSrc: staticFile("images/小米挖孔机盖事件/scene_2_4_img2.png"), showFrom: 2, enterEffect: "fadeIn" }, { label: "无法降温", imageSrc: staticFile("images/小米挖孔机盖事件/scene_2_4_img3.png"), showFrom: 3, enterEffect: "fadeIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={599} durationInFrames={132}>
                <BWBeatSequence content={[{"text": "这哪是赛道级的导风道？", "startFrame": 0, "durationFrames": 53}, {"text": "这简直就是 4 万 2 买了个“挖孔”的心理安慰。", "startFrame": 52, "durationFrames": 80}]} totalDurationFrames={132} stages={[{ imageSrc: staticFile("images/小米挖孔机盖事件/scene_2_5_img0.png"), enterEffect: "breathe", tone: "calm" }, { imageSrc: staticFile("images/小米挖孔机盖事件/scene_2_5_img1.png"), enterEffect: "slideBottom", tone: "alert" }]} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/小米挖孔机盖事件/scene_2/scene_2.mp3")} />
        </AbsoluteFill>
    );
};
