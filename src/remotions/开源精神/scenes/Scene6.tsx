import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWKpiHero, BWPanelGrid } from "../../../components";

// 个人叙事·我的NAS依赖开源
const SCENE_DURATION = 104 + 309 + 167;

export const calculateScene6Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene6: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={104}>
                <BWCenterFocus content={[{"text": "甚至于我个人来说，", "startFrame": 0, "durationFrames": 44}, {"text": "我自己组装的NAS系统。", "startFrame": 43, "durationFrames": 60}]} totalDurationFrames={104} imageSrc={staticFile("images/开源精神/scene_6_1.png")} enterEffect="fadeIn" anchors={[{"text": "NAS系统", "showFrom": 1, "color": "#000000", "anim": "spring", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={104} durationInFrames={309}>
                <BWPanelGrid content={[{"text": "远程桌面RustDesk，", "startFrame": 0, "durationFrames": 57}, {"text": "网盘工具filebrowser，", "startFrame": 56, "durationFrames": 57}, {"text": "智能家居Home Assistant，", "startFrame": 113, "durationFrames": 54}, {"text": "影音播放Jellyfin，", "startFrame": 166, "durationFrames": 51}, {"text": "数据同步syncthing。", "startFrame": 217, "durationFrames": 47}, {"text": "还有很多很多。", "startFrame": 264, "durationFrames": 45}]} totalDurationFrames={309} panels={[{ src: staticFile("images/开源精神/scene_6_2_img0.png"), showFrom: 0, enterEffect: "fadeIn", position: "left" }, { src: staticFile("images/开源精神/scene_6_2_img1.png"), showFrom: 1, enterEffect: "fadeIn", position: "right" }, { src: staticFile("images/开源精神/scene_6_2_img2.png"), showFrom: 2, enterEffect: "slideBottom", position: "bottom" }, { src: staticFile("images/开源精神/scene_6_2_img3.png"), showFrom: 3, enterEffect: "zoomIn", position: "top" }, { src: staticFile("images/开源精神/scene_6_2_img4.png"), showFrom: 4, enterEffect: "slideBottom", position: "left" }, { src: staticFile("images/开源精神/scene_6_2_img5.png"), showFrom: 5, enterEffect: "slideBottom", position: "right" }]} />
            </Sequence>
            <Sequence from={413} durationInFrames={167}>
                <BWKpiHero content={[{"text": "如果没有这些工具的开源，", "startFrame": 0, "durationFrames": 52}, {"text": "想要实现自己的NAS，", "startFrame": 51, "durationFrames": 44}, {"text": "成本至少每年1000元起步。", "startFrame": 94, "durationFrames": 72}]} totalDurationFrames={167} blocks={[{"value": 1000, "suffix": "元", "label": "年成本", "showFrom": 2}]} countDuration={28} />
            </Sequence>
            <Audio src={staticFile("/audio/开源精神/scene_6/scene_6.mp3")} />
        </AbsoluteFill>
    );
};
