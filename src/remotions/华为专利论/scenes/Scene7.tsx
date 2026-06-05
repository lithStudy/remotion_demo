import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWConceptCard, BWDosAndDonts, BWPanelGrid, BWTextFocus } from "../../../components";

// 召唤·护创新还是护垄断
const SCENE_DURATION = 149 + 243 + 195 + 204 + 229;

export const calculateScene7Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene7: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={149}>
                <BWConceptCard content={[{"text": "专利制度的本意，", "startFrame": 0, "durationFrames": 36}, {"text": "是保护真正的发明，", "startFrame": 36, "durationFrames": 44}, {"text": "让后来者能站在巨人肩上。", "startFrame": 79, "durationFrames": 69}]} totalDurationFrames={149} imageSrc={staticFile("images/华为专利论/scene_7_1.png")} conceptName={"专利制度"} anchors={[]} />
            </Sequence>
            <Sequence from={149} durationInFrames={243}>
                <BWPanelGrid content={[{"text": "可当巨头把 KPI当信仰，", "startFrame": 0, "durationFrames": 59}, {"text": "把分案当时光机，", "startFrame": 58, "durationFrames": 44}, {"text": "把马桶当政绩，", "startFrame": 102, "durationFrames": 44}, {"text": "把标准池当注水战场。", "startFrame": 146, "durationFrames": 62}, {"text": "受伤的是谁？", "startFrame": 207, "durationFrames": 35}]} totalDurationFrames={243} panels={[{ src: staticFile("images/华为专利论/scene_7_2_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { src: staticFile("images/华为专利论/scene_7_2_img1.png"), showFrom: 1, enterEffect: "slideBottom" }, { src: staticFile("images/华为专利论/scene_7_2_img2.png"), showFrom: 2, enterEffect: "zoomIn" }, { src: staticFile("images/华为专利论/scene_7_2_img3.png"), showFrom: 3, enterEffect: "slideLeft" }]} anchors={[]} />
            </Sequence>
            <Sequence from={392} durationInFrames={195}>
                <BWPanelGrid content={[{"text": "是每个消费者为此多付的专利许可，", "startFrame": 0, "durationFrames": 79}, {"text": "是那些被吓退的小团队。", "startFrame": 78, "durationFrames": 55}, {"text": "是整个社会多出来的合规成本。", "startFrame": 133, "durationFrames": 62}]} totalDurationFrames={195} panels={[{ src: staticFile("images/华为专利论/scene_7_3_img0.png"), showFrom: 0, enterEffect: "slideLeft" }, { src: staticFile("images/华为专利论/scene_7_3_img1.png"), showFrom: 1, enterEffect: "fadeIn" }, { src: staticFile("images/华为专利论/scene_7_3_img2.png"), showFrom: 2, enterEffect: "slideBottom" }]} anchors={[]} />
            </Sequence>
            <Sequence from={587} durationInFrames={204}>
                <BWDosAndDonts content={[{"text": "我们可以尊重华为在通信工程上的真贡献。", "startFrame": 0, "durationFrames": 98}, {"text": "但必须拒绝把“专利数量”当成“技术良心”。", "startFrame": 97, "durationFrames": 107}]} totalDurationFrames={204} left={{label: "❌ 专利数量即良心", src: staticFile("images/华为专利论/scene_7_4_left.png"), showFrom: 1 }} right={{label: "✅ 尊重真贡献", src: staticFile("images/华为专利论/scene_7_4_right.png"), showFrom: 0 }} anchors={[]} />
            </Sequence>
            <Sequence from={791} durationInFrames={229}>
                <BWTextFocus content={[{"text": "剥掉泡沫之后，", "startFrame": 0, "durationFrames": 39}, {"text": "该问的不是谁专利多。", "startFrame": 38, "durationFrames": 60}, {"text": "而是—", "startFrame": 98, "durationFrames": 21}, {"text": "这些专利，", "startFrame": 118, "durationFrames": 33}, {"text": "到底是在护创新，", "startFrame": 151, "durationFrames": 41}, {"text": "还是在护垄断？", "startFrame": 192, "durationFrames": 37}]} totalDurationFrames={229} coreSentence={[{"text": "该问的不是谁专利多", "showFrom": 1, "endFrom": 1}, {"text": "到底是在护创新，", "showFrom": 4, "endFrom": 5}, {"text": "还是在护垄断？", "showFrom": 5, "endFrom": 5}]} coreSentenceAnchors={[{"coreSentenceAnchor": "护创新", "color": "#EF4444"}, {"coreSentenceAnchor": "护垄断", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/华为专利论/scene_7/scene_7.mp3")} />
        </AbsoluteFill>
    );
};
