import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift, BWMagnifyingGlass, BWPanelGrid, BWProgressRing } from "../../../components";

// 反转：硬件利润率的克制
const SCENE_DURATION = 51 + 210 + 119 + 128 + 165 + 256;

export const calculateScene5Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene5: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={51}>
                <BWMagnifyingGlass content={[{"text": "而最硬的证据还在后面。", "startFrame": 0, "durationFrames": 51}]} totalDurationFrames={51} anchors={[{"text": "最硬的证据", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={51} durationInFrames={210}>
                <BWCenterFocus content={[{"text": "2018年，", "startFrame": 0, "durationFrames": 29}, {"text": "雷军在武汉大学当着全球媒体立下董事会决议——", "startFrame": 28, "durationFrames": 94}, {"text": "整体硬件利润率永不超5%。", "startFrame": 122, "durationFrames": 88}]} totalDurationFrames={210} imageSrc={staticFile("images/小米平权/scene_5_2.png")} enterEffect="fadeIn" anchors={[{"text": "董事会决议", "showFrom": 1, "color": "#000000", "anim": "spring", "audioEffect": "ping"}, {"text": "永不超5%", "showFrom": 2, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={261} durationInFrames={119}>
                <BWCenterFocus content={[{"text": "超出部分，", "startFrame": 0, "durationFrames": 24}, {"text": "全额返还用户。", "startFrame": 23, "durationFrames": 42}, {"text": "这是签了字的法律契约。", "startFrame": 65, "durationFrames": 54}]} totalDurationFrames={119} imageSrc={staticFile("images/小米平权/scene_5_3.png")} enterEffect="fadeIn" anchors={[{"text": "全额返还", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "法律契约", "showFrom": 2, "color": "#000000", "anim": "slideUp"}]} />
            </Sequence>
            <Sequence from={380} durationInFrames={128}>
                <BWProgressRing content={[{"text": "2018年实际财报显示，", "startFrame": 0, "durationFrames": 56}, {"text": "他们硬件净利率只有不到1%。", "startFrame": 55, "durationFrames": 72}]} totalDurationFrames={128} blocks={[{"percent": 1, "label": "硬件净利率", "subLabel": "2018 财报 · 不到 1%", "showFrom": 1, "ringColor": "#2B6CB0"}]} />
            </Sequence>
            <Sequence from={508} durationInFrames={165}>
                <BWCognitiveShift content={[{"text": "他们完全可以把价格再提几百块，", "startFrame": 0, "durationFrames": 69}, {"text": "多赚几倍利润，", "startFrame": 68, "durationFrames": 52}, {"text": "却主动克制住了。", "startFrame": 120, "durationFrames": 45}]} totalDurationFrames={165} notText={"提价"} butText={"主动克制住"} butSrc={staticFile("images/小米平权/scene_5_5.png")} notContentIndex={0} butContentIndex={2} />
            </Sequence>
            <Sequence from={673} durationInFrames={256}>
                <BWPanelGrid content={[{"text": "这份克制，", "startFrame": 0, "durationFrames": 28}, {"text": "让普通家庭都能买得起", "startFrame": 27, "durationFrames": 59}, {"text": "好手机、", "startFrame": 86, "durationFrames": 20}, {"text": "好电视、", "startFrame": 105, "durationFrames": 18}, {"text": "好手环，", "startFrame": 123, "durationFrames": 19}, {"text": "以及更多的产品，", "startFrame": 141, "durationFrames": 36}, {"text": "让我们真正享受到科技带来的便利。", "startFrame": 177, "durationFrames": 78}]} totalDurationFrames={256} panels={[{ src: staticFile("images/小米平权/scene_5_6_img0.png"), showFrom: 2, enterEffect: "slideLeft" }, { src: staticFile("images/小米平权/scene_5_6_img1.png"), showFrom: 3, enterEffect: "slideBottom" }, { src: staticFile("images/小米平权/scene_5_6_img2.png"), showFrom: 4, enterEffect: "zoomIn" }, { src: staticFile("images/小米平权/scene_5_6_img3.png"), showFrom: 5, enterEffect: "zoomIn" }]} />
            </Sequence>
            <Audio src={staticFile("/audio/小米平权/scene_5/scene_5.mp3")} />
        </AbsoluteFill>
    );
};
