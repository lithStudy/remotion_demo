import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWKpiHero, BWPanelGrid } from "../../../components";

// 个人叙事·我的NAS依赖开源
const SCENE_DURATION = 98 + 302 + 163;

export const calculateScene6Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene6: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={98}>
                <BWCenterFocus content={[{"text": "甚至于我个人来说，", "startFrame": 0, "durationFrames": 41}, {"text": "我自己组装的NAS系统。", "startFrame": 40, "durationFrames": 57}]} totalDurationFrames={98} imageSrc={staticFile("images/开源精神/scene_6_1.png")} enterEffect="fadeIn" anchors={[{"text": "NAS系统", "showFrom": 1, "color": "#000000", "anim": "spring", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={98} durationInFrames={302}>
                <BWPanelGrid content={[{"text": "远程桌面RustDesk，", "startFrame": 0, "durationFrames": 55}, {"text": "网盘工具filebrowser，", "startFrame": 54, "durationFrames": 57}, {"text": "智能家居Home Assistant，", "startFrame": 111, "durationFrames": 53}, {"text": "影音播放Jellyfin，", "startFrame": 163, "durationFrames": 47}, {"text": "数据同步syncthing。", "startFrame": 210, "durationFrames": 50}, {"text": "还有很多很多。", "startFrame": 260, "durationFrames": 42}]} totalDurationFrames={302} panels={[{ src: staticFile("images/开源精神/scene_6_2_img0.png"), showFrom: 0, enterEffect: "fadeIn", position: "left" }, { src: staticFile("images/开源精神/scene_6_2_img1.png"), showFrom: 1, enterEffect: "fadeIn", position: "right" }, { src: staticFile("images/开源精神/scene_6_2_img2.png"), showFrom: 2, enterEffect: "slideBottom", position: "bottom" }, { src: staticFile("images/开源精神/scene_6_2_img3.png"), showFrom: 3, enterEffect: "zoomIn", position: "top" }, { src: staticFile("images/开源精神/scene_6_2_img4.png"), showFrom: 4, enterEffect: "slideBottom", position: "left" }, { src: staticFile("images/开源精神/scene_6_2_img5.png"), showFrom: 5, enterEffect: "slideBottom", position: "right" }]} />
            </Sequence>
            <Sequence from={400} durationInFrames={163}>
                <BWKpiHero content={[{"text": "如果没有这些工具的开源，", "startFrame": 0, "durationFrames": 54}, {"text": "想要实现自己的NAS，", "startFrame": 53, "durationFrames": 42}, {"text": "成本至少每年5000元起步。", "startFrame": 94, "durationFrames": 68}]} totalDurationFrames={163} blocks={[{"value": 5000, "suffix": "元", "label": "年成本", "showFrom": 2}]} countDuration={28} />
            </Sequence>
            <Audio src={staticFile("/audio/开源精神/scene_6/scene_6.mp3")} />
        </AbsoluteFill>
    );
};
