import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift, BWPeerInduct, BWTimeline } from "../../../components";

// 剖析·技术普惠
const SCENE_DURATION = 147 + 373 + 184 + 110;

export const calculateScene7Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene7: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={147}>
                <BWCenterFocus content={[{"text": "不只是整车厂，", "startFrame": 0, "durationFrames": 39}, {"text": "整个零部件产业的技术水平，", "startFrame": 38, "durationFrames": 66}, {"text": "也被它拉高了。", "startFrame": 103, "durationFrames": 43}]} totalDurationFrames={147} imageSrc={staticFile("images/抵制特斯拉的伪爱国/scene_7_1.png")} enterEffect="slideBottom" anchors={[{"text": "零部件产业技术水平", "showFrom": 1, "color": "#000000", "anim": "spring", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={147} durationInFrames={373}>
                <BWPeerInduct content={[{"text": "特斯拉培育出的三电系统——", "startFrame": 0, "durationFrames": 64}, {"text": "电池、", "startFrame": 63, "durationFrames": 27}, {"text": "电机、", "startFrame": 89, "durationFrames": 21}, {"text": "电控。", "startFrame": 110, "durationFrames": 25}, {"text": "规模效应起来了，", "startFrame": 134, "durationFrames": 42}, {"text": "采购成本大幅下降。", "startFrame": 175, "durationFrames": 64}, {"text": "所有中国自主品牌，", "startFrame": 238, "durationFrames": 46}, {"text": "都能以更低的价格拿到高质量零部件。", "startFrame": 284, "durationFrames": 88}]} totalDurationFrames={373} premises={[{ imageSrc: staticFile("images/抵制特斯拉的伪爱国/scene_7_2_img0.png"), enterEffect: "fadeIn", showFrom: 1 }, { imageSrc: staticFile("images/抵制特斯拉的伪爱国/scene_7_2_img1.png"), enterEffect: "fadeIn", showFrom: 2 }, { imageSrc: staticFile("images/抵制特斯拉的伪爱国/scene_7_2_img2.png"), enterEffect: "fadeIn", showFrom: 3 }]} conclusion={{ imageSrc: staticFile("images/抵制特斯拉的伪爱国/scene_7_2.png"), enterEffect: "zoomIn", showFrom: 5, tone: "alert" }} anchors={[{"text": "规模效应", "showFrom": 4, "color": "#EF4444", "anim": "highlight"}]} />
            </Sequence>
            <Sequence from={520} durationInFrames={184}>
                <BWTimeline content={[{"text": "小鹏、", "startFrame": 0, "durationFrames": 22}, {"text": "小米、", "startFrame": 21, "durationFrames": 21}, {"text": "华为，", "startFrame": 42, "durationFrames": 24}, {"text": "这些新势力能快速入局，", "startFrame": 66, "durationFrames": 55}, {"text": "靠的就是这条已经铺好的路。", "startFrame": 121, "durationFrames": 63}]} totalDurationFrames={184} images={[{ src: staticFile("images/抵制特斯拉的伪爱国/scene_7_4_img0.png"), enterEffect: "slideLeft", textIndex: 0 }, { src: staticFile("images/抵制特斯拉的伪爱国/scene_7_4_img1.png"), enterEffect: "fadeIn", textIndex: 1 }, { src: staticFile("images/抵制特斯拉的伪爱国/scene_7_4_img2.png"), enterEffect: "slideLeft", textIndex: 2 }]} />
            </Sequence>
            <Sequence from={704} durationInFrames={110}>
                <BWCognitiveShift content={[{"text": "这不是一家企业的胜利，", "startFrame": 0, "durationFrames": 51}, {"text": "是整个行业的技术普惠。", "startFrame": 50, "durationFrames": 60}]} totalDurationFrames={110} notText={"一家企业的胜利"} butText={"行业技术普惠"} butSrc={staticFile("images/抵制特斯拉的伪爱国/scene_7_5.png")} notContentIndex={0} butContentIndex={1} />
            </Sequence>
            <Audio src={staticFile("/audio/抵制特斯拉的伪爱国/scene_7/scene_7.mp3")} />
        </AbsoluteFill>
    );
};
