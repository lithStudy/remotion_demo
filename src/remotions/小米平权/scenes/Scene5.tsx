import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift, BWMagnifyingGlass, BWPanelGrid, BWProgressRing } from "../../../components";

// 反转：硬件利润率的克制
const SCENE_DURATION = 62 + 199 + 123 + 141 + 141 + 256;

export const calculateScene5Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene5: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={62}>
                <BWMagnifyingGlass content={[{"text": "而最硬的证据还在后面。", "startFrame": 0, "durationFrames": 62}]} totalDurationFrames={62} anchors={[{"text": "最硬的证据", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={62} durationInFrames={199}>
                <BWCenterFocus content={[{"text": "2018年，", "startFrame": 0, "durationFrames": 28}, {"text": "雷军在武汉大学当着全球媒体立下董事会决议——", "startFrame": 27, "durationFrames": 98}, {"text": "整体硬件利润率永不超5%。", "startFrame": 124, "durationFrames": 75}]} totalDurationFrames={199} imageSrc={staticFile("images/小米平权/scene_5_2.png")} enterEffect="fadeIn" anchors={[{"text": "董事会决议", "showFrom": 1, "color": "#000000", "anim": "spring", "audioEffect": "ping"}, {"text": "永不超5%", "showFrom": 2, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={261} durationInFrames={123}>
                <BWCenterFocus content={[{"text": "超出部分，", "startFrame": 0, "durationFrames": 29}, {"text": "全额返还用户。", "startFrame": 28, "durationFrames": 43}, {"text": "这是签了字的法律契约。", "startFrame": 70, "durationFrames": 52}]} totalDurationFrames={123} imageSrc={staticFile("images/小米平权/scene_5_3.png")} enterEffect="fadeIn" anchors={[{"text": "全额返还", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "法律契约", "showFrom": 2, "color": "#000000", "anim": "slideUp"}]} />
            </Sequence>
            <Sequence from={384} durationInFrames={141}>
                <BWProgressRing content={[{"text": "2018年实际财报显示，", "startFrame": 0, "durationFrames": 62}, {"text": "他们硬件净利率只有不到1%。", "startFrame": 61, "durationFrames": 80}]} totalDurationFrames={141} blocks={[{"percent": 1, "label": "硬件净利率", "subLabel": "2018 财报 · 不到 1%", "showFrom": 1, "ringColor": "#2B6CB0"}]} />
            </Sequence>
            <Sequence from={525} durationInFrames={141}>
                <BWCognitiveShift content={[{"text": "他们完全可以把价格再提几百块，", "startFrame": 0, "durationFrames": 68}, {"text": "多赚几倍利润，", "startFrame": 67, "durationFrames": 35}, {"text": "却主动克制住了。", "startFrame": 102, "durationFrames": 39}]} totalDurationFrames={141} notText={"提价"} butText={"主动克制住"} butSrc={staticFile("images/小米平权/scene_5_5.png")} notContentIndex={0} butContentIndex={2} />
            </Sequence>
            <Sequence from={666} durationInFrames={256}>
                <BWPanelGrid content={[{"text": "这份克制，", "startFrame": 0, "durationFrames": 29}, {"text": "让普通家庭都能买得起", "startFrame": 28, "durationFrames": 51}, {"text": "好手机、", "startFrame": 78, "durationFrames": 21}, {"text": "好电视、", "startFrame": 99, "durationFrames": 19}, {"text": "好手环，", "startFrame": 117, "durationFrames": 23}, {"text": "以及更多的产品，", "startFrame": 140, "durationFrames": 41}, {"text": "让我们真正享受到科技带来的便利。", "startFrame": 181, "durationFrames": 75}]} totalDurationFrames={256} panels={[{ src: staticFile("images/小米平权/scene_5_6_img0.png"), showFrom: 2, enterEffect: "slideLeft" }, { src: staticFile("images/小米平权/scene_5_6_img1.png"), showFrom: 3, enterEffect: "slideBottom" }, { src: staticFile("images/小米平权/scene_5_6_img2.png"), showFrom: 4, enterEffect: "zoomIn" }, { src: staticFile("images/小米平权/scene_5_6_img3.png"), showFrom: 5, enterEffect: "zoomIn" }]} />
            </Sequence>
            <Audio src={staticFile("/audio/小米平权/scene_5/scene_5.mp3")} />
        </AbsoluteFill>
    );
};
