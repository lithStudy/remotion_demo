import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWBeatSequence, BWCenterFocus, BWPanelGrid } from "../../../components";

// 揭示：国家扶持真相
const SCENE_DURATION = 164 + 122 + 294;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={164}>
                <BWBeatSequence content={[{"text": "但今天我要告诉你，", "startFrame": 0, "durationFrames": 33}, {"text": "任何的国产产品，", "startFrame": 32, "durationFrames": 40}, {"text": "从来不需要通过你个人无条件的购买来支持。", "startFrame": 72, "durationFrames": 92}]} totalDurationFrames={164} stages={[{ imageSrc: staticFile("images/国产支持论/scene_2_1_img0.png"), enterEffect: "breathe", tone: "calm", showFrom: 0 }, { imageSrc: staticFile("images/国产支持论/scene_2_1_img1.png"), enterEffect: "fadeIn", tone: "alert", showFrom: 1 }, { imageSrc: staticFile("images/国产支持论/scene_2_1_img2.png"), enterEffect: "zoomIn", tone: "alert", showFrom: 2 }]} />
            </Sequence>
            <Sequence from={164} durationInFrames={122}>
                <BWCenterFocus content={[{"text": "因为当一个公司或者产业需要扶持时，", "startFrame": 0, "durationFrames": 80}, {"text": "国家自然会出手。", "startFrame": 79, "durationFrames": 42}]} totalDurationFrames={122} imageSrc={staticFile("images/国产支持论/scene_2_2.png")} enterEffect="zoomIn" anchors={[{"text": "国家出手", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={286} durationInFrames={294}>
                <BWPanelGrid content={[{"text": "新能源汽车的百亿补贴，", "startFrame": 0, "durationFrames": 50}, {"text": "高新企业的免税退税，", "startFrame": 49, "durationFrames": 52}, {"text": "各地狂发的电子消费券，", "startFrame": 100, "durationFrames": 53}, {"text": "还有铺天盖地的电器的以旧换新。", "startFrame": 152, "durationFrames": 71}, {"text": "这些都是国家扶持的政策。", "startFrame": 223, "durationFrames": 71}]} totalDurationFrames={294} panels={[{ src: staticFile("images/国产支持论/scene_2_3_img0.png"), showFrom: 0, enterEffect: "zoomIn" }, { src: staticFile("images/国产支持论/scene_2_3_img1.png"), showFrom: 1, enterEffect: "zoomIn" }, { src: staticFile("images/国产支持论/scene_2_3_img2.png"), showFrom: 2, enterEffect: "slideBottom" }, { src: staticFile("images/国产支持论/scene_2_3_img3.png"), showFrom: 3, enterEffect: "slideBottom" }]} />
            </Sequence>
            <Audio src={staticFile("/audio/国产支持论/scene_2/scene_2.mp3")} />
        </AbsoluteFill>
    );
};
