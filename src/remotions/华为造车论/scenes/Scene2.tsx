import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWConceptCard, BWDosAndDonts, BWMagnifyingGlass, BWPanelGrid, BWPeerInduct } from "../../../components";

// 华为智驾难保命
const SCENE_DURATION = 34 + 168 + 315 + 144 + 137;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={34}>
                <BWConceptCard content={[{"text": "先说华为智驾。", "startFrame": 0, "durationFrames": 34}]} totalDurationFrames={34} imageSrc={staticFile("images/华为造车论/scene_2_1.png")} conceptName={"华为智驾"} anchors={[]} />
            </Sequence>
            <Sequence from={34} durationInFrames={168}>
                <BWPeerInduct content={[{"text": "全网牛逼吹的震天响：", "startFrame": 0, "durationFrames": 52}, {"text": "想撞都难、", "startFrame": 51, "durationFrames": 31}, {"text": "一路睡到目的地，", "startFrame": 81, "durationFrames": 34}, {"text": "讲究一个敢吹一个敢信。", "startFrame": 115, "durationFrames": 52}]} totalDurationFrames={168} premises={[{ imageSrc: staticFile("images/华为造车论/scene_2_2_img0.png"), showFrom: 1, enterEffect: "slideLeft" }, { imageSrc: staticFile("images/华为造车论/scene_2_2_img1.png"), showFrom: 2, enterEffect: "zoomIn" }]} conclusion={{ imageSrc: staticFile("images/华为造车论/scene_2_2.png"), showFrom: 3, enterEffect: "zoomIn", tone: "alert" }} anchors={[]} />
            </Sequence>
            <Sequence from={202} durationInFrames={315}>
                <BWPanelGrid content={[{"text": "但我看到的，", "startFrame": 0, "durationFrames": 31}, {"text": "却是问界M7运城高速的追尾、", "startFrame": 30, "durationFrames": 77}, {"text": "尊界S800撞向导流线上环卫工、", "startFrame": 106, "durationFrames": 92}, {"text": "武汉问界M5撞死误闯超车道的11只羊。", "startFrame": 198, "durationFrames": 117}]} totalDurationFrames={315} panels={[{ src: staticFile("images/华为造车论/scene_2_3_img0.png"), showFrom: 1, enterEffect: "zoomIn" }, { src: staticFile("images/华为造车论/scene_2_3_img1.png"), showFrom: 2, enterEffect: "fadeIn" }, { src: staticFile("images/华为造车论/scene_2_3_img2.png"), showFrom: 3, enterEffect: "fadeIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={517} durationInFrames={144}>
                <BWMagnifyingGlass content={[{"text": "这些都足够说明，", "startFrame": 0, "durationFrames": 42}, {"text": "华为的智驾还没有强到可以保障你生命安全的程度。", "startFrame": 41, "durationFrames": 102}]} totalDurationFrames={144} anchors={[{"text": "生命安全", "showFrom": 1, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={661} durationInFrames={137}>
                <BWDosAndDonts content={[{"text": "你可以为体验买单。", "startFrame": 0, "durationFrames": 44}, {"text": "但不能为一些吹牛逼的话，", "startFrame": 43, "durationFrames": 51}, {"text": "交出自己的方向盘。", "startFrame": 93, "durationFrames": 43}]} totalDurationFrames={137} left={{label: "❌ 别交方向盘", src: staticFile("images/华为造车论/scene_2_5_left.png"), showFrom: 1 }} right={{label: "✅ 为体验买单", src: staticFile("images/华为造车论/scene_2_5_right.png"), showFrom: 0 }} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/华为造车论/scene_2/scene_2.mp3")} />
        </AbsoluteFill>
    );
};
