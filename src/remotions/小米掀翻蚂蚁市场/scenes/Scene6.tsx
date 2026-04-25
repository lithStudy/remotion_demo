import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCauseChain, BWCenterFocus } from "../../../components";

// 科技森林
const SCENE_DURATION = 358 + 190;

export const calculateScene6Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene6: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={358}>
                <BWCenterFocus content={[{"text": "很多人以为小米只会卖手机。", "startFrame": 0, "durationFrames": 68}, {"text": "实际上，小米累计投孵超过500家硬科技，", "startFrame": 67, "durationFrames": 106}, {"text": "好达电子、华星光电那些打破国外垄断的技术，", "startFrame": 173, "durationFrames": 115}, {"text": "都是依靠小米一点点培养出来的", "startFrame": 287, "durationFrames": 70}]} totalDurationFrames={358} imageSrc={staticFile("images/小米掀翻蚂蚁市场/scene_6_1.png")} enterEffect="fadeIn" anchors={[{"text": "只会卖手机", "showFrom": 0, "color": "#000000", "anim": "spring", "audioEffect": "ping"}, {"text": "好达电子、华星光电", "showFrom": 2, "color": "#EF4444", "anim": "highlight", "audioEffect": "woosh"}]} />
            </Sequence>
            <Sequence from={358} durationInFrames={190}>
                <BWCauseChain content={[{"text": "海量确定订单倒逼长三角、", "startFrame": 0, "durationFrames": 71}, {"text": "珠三角大批作坊做标准、", "startFrame": 70, "durationFrames": 67}, {"text": "上品质、", "startFrame": 137, "durationFrames": 27}, {"text": "改工艺。", "startFrame": 163, "durationFrames": 27}]} totalDurationFrames={190} layout={"horizontal"} nodes={[{ label: "确定订单", imageSrc: staticFile("images/小米掀翻蚂蚁市场/scene_6_4_img0.png"), showFrom: 0, enterEffect: "slideLeft" }, { label: "产业升级", imageSrc: staticFile("images/小米掀翻蚂蚁市场/scene_6_4_img1.png"), showFrom: 1, enterEffect: "slideBottom" }, { label: "标准工艺", imageSrc: staticFile("images/小米掀翻蚂蚁市场/scene_6_4_img2.png"), showFrom: 2, enterEffect: "zoomIn" }, { label: "品质提升", imageSrc: staticFile("images/小米掀翻蚂蚁市场/scene_6_4_img3.png"), showFrom: 3, enterEffect: "fadeIn" }]} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/小米掀翻蚂蚁市场/scene_6/scene_6.mp3")} />
        </AbsoluteFill>
    );
};
