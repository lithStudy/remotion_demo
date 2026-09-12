import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWConceptCard, BWPanelGrid, BWTextFocus } from "../../../components";

// 整车安全谁兜底
const SCENE_DURATION = 160 + 177 + 163 + 179;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={160}>
                <BWConceptCard content={[{"text": "再看整车安全。", "startFrame": 0, "durationFrames": 51}, {"text": "既然智驾并不能完全保证安全。", "startFrame": 50, "durationFrames": 67}, {"text": "真正撞上以后呢？", "startFrame": 116, "durationFrames": 43}]} totalDurationFrames={160} imageSrc={staticFile("images/华为造车论/scene_3_1.png")} conceptName={"整车安全"} anchors={[]} />
            </Sequence>
            <Sequence from={160} durationInFrames={177}>
                <BWPanelGrid content={[{"text": "车身能否扛得住？", "startFrame": 0, "durationFrames": 38}, {"text": "电池会不会失控？", "startFrame": 37, "durationFrames": 39}, {"text": "气囊是否正确打开？", "startFrame": 75, "durationFrames": 53}, {"text": "断电后能否开门？", "startFrame": 127, "durationFrames": 50}]} totalDurationFrames={177} panels={[{ src: staticFile("images/华为造车论/scene_3_2_img0.png"), showFrom: 0, enterEffect: "zoomIn" }, { src: staticFile("images/华为造车论/scene_3_2_img1.png"), showFrom: 1, enterEffect: "breathe" }, { src: staticFile("images/华为造车论/scene_3_2_img2.png"), showFrom: 2, enterEffect: "fadeIn" }, { src: staticFile("images/华为造车论/scene_3_2_img3.png"), showFrom: 3, enterEffect: "slideLeft" }]} anchors={[]} />
            </Sequence>
            <Sequence from={337} durationInFrames={163}>
                <BWPanelGrid content={[{"text": "这些被动安全，", "startFrame": 0, "durationFrames": 37}, {"text": "取决于车身结构、", "startFrame": 36, "durationFrames": 41}, {"text": "约束系统、", "startFrame": 76, "durationFrames": 30}, {"text": "电池布置和机械设计。", "startFrame": 105, "durationFrames": 57}]} totalDurationFrames={163} panels={[{ src: staticFile("images/华为造车论/scene_3_3_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { src: staticFile("images/华为造车论/scene_3_3_img1.png"), showFrom: 1, enterEffect: "slideLeft" }, { src: staticFile("images/华为造车论/scene_3_3_img2.png"), showFrom: 2, enterEffect: "zoomIn" }, { src: staticFile("images/华为造车论/scene_3_3_img3.png"), showFrom: 3, enterEffect: "slideBottom" }]} anchors={[]} />
            </Sequence>
            <Sequence from={500} durationInFrames={179}>
                <BWTextFocus content={[{"text": "华为可以参与定义，", "startFrame": 0, "durationFrames": 42}, {"text": "但作为一个连造车资质都没有的公司，", "startFrame": 41, "durationFrames": 47}, {"text": "谁能保障他的参与度与专业度？", "startFrame": 88, "durationFrames": 90}]} totalDurationFrames={179} coreSentence={[{"text": "华为可以参与定义，", "showFrom": 0, "endFrom": 0}, {"text": "但作为一个连造车资质都没有的公司，", "showFrom": 1, "endFrom": 1}, {"text": "谁能保障他的参与度与专业度？", "showFrom": 2, "endFrom": 2}]} coreSentenceAnchors={[{"coreSentenceAnchor": "造车资质", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/华为造车论/scene_3/scene_3.mp3")} />
        </AbsoluteFill>
    );
};
