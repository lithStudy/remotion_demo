import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWConceptCard, BWPeerInduct } from "../../../components";

// 剖析：信息差历史与物理定律
const SCENE_DURATION = 103 + 153 + 230 + 170;

export const calculateScene5Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene5: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={103}>
                <BWConceptCard content={[{"text": "小米的历史，", "startFrame": 0, "durationFrames": 34}, {"text": "就是一部“打破信息差”的历史。", "startFrame": 33, "durationFrames": 69}]} totalDurationFrames={103} imageSrc={staticFile("images/小米挖孔机盖事件/scene_5_1.png")} conceptName={"打破信息差"} anchors={[]} />
            </Sequence>
            <Sequence from={103} durationInFrames={153}>
                <BWCenterFocus content={[{"text": "从论坛刷机MIUI系统开始，", "startFrame": 0, "durationFrames": 66}, {"text": "我们爱的就是它的真诚，他的透明。", "startFrame": 65, "durationFrames": 88}]} totalDurationFrames={153} imageSrc={staticFile("images/小米挖孔机盖事件/scene_5_2.png")} anchors={[{"text": "透明", "showFrom": 1, "color": "#000000", "anim": "popIn", "audioEffect": null}]} />
            </Sequence>
            <Sequence from={256} durationInFrames={230}>
                <BWPeerInduct content={[{"text": "但这次，", "startFrame": 0, "durationFrames": 27}, {"text": "在更烧钱、", "startFrame": 26, "durationFrames": 33}, {"text": "更硬核的汽车领域，", "startFrame": 58, "durationFrames": 45}, {"text": "小米显然还没学会，", "startFrame": 103, "durationFrames": 50}, {"text": "重工业的信誉比数码圈的流量更贵。", "startFrame": 152, "durationFrames": 78}]} totalDurationFrames={230} premises={[{ imageSrc: staticFile("images/小米挖孔机盖事件/scene_5_3_img0.png"), enterEffect: "fadeIn", showFrom: 1 }, { imageSrc: staticFile("images/小米挖孔机盖事件/scene_5_3_img1.png"), enterEffect: "slideBottom", showFrom: 2 }]} conclusion={{ imageSrc: staticFile("images/小米挖孔机盖事件/scene_5_3.png"), enterEffect: "zoomIn", showFrom: 4, tone: "alert" }} />
            </Sequence>
            <Sequence from={486} durationInFrames={170}>
                <BWPeerInduct content={[{"text": "你可以营销，", "startFrame": 0, "durationFrames": 27}, {"text": "可以吹嘘，", "startFrame": 26, "durationFrames": 31}, {"text": "但在物理定律面前，", "startFrame": 56, "durationFrames": 40}, {"text": "所有的滤镜都会被拆解得一丝不挂。", "startFrame": 96, "durationFrames": 74}]} totalDurationFrames={170} premises={[{ imageSrc: staticFile("images/小米挖孔机盖事件/scene_5_4_img0.png"), enterEffect: "fadeIn", showFrom: 0 }, { imageSrc: staticFile("images/小米挖孔机盖事件/scene_5_4_img1.png"), enterEffect: "slideBottom", showFrom: 1 }]} conclusion={{ imageSrc: staticFile("images/小米挖孔机盖事件/scene_5_4.png"), enterEffect: "zoomIn", showFrom: 3, tone: "alert" }} />
            </Sequence>
            <Audio src={staticFile("/audio/小米挖孔机盖事件/scene_5/scene_5.mp3")} />
        </AbsoluteFill>
    );
};
