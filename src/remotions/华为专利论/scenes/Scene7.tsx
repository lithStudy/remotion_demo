import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile, Freeze } from "remotion";
import { BWConceptCard, BWDosAndDonts, BWPanelGrid, BWTextFocus } from "../../../components";

// 召唤·护创新还是护垄断
const SCENE_DURATION = 144 + 223 + 194 + 187 + 224;

export const calculateScene7Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene7: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={144}>
                <BWConceptCard content={[{"text": "专利制度的本意，", "startFrame": 0, "durationFrames": 40}, {"text": "是保护真正的发明，", "startFrame": 39, "durationFrames": 45}, {"text": "让后来者能站在巨人肩上。", "startFrame": 84, "durationFrames": 60}]} totalDurationFrames={144} imageSrc={staticFile("images/华为专利论/scene_7_1.png")} conceptName={"专利制度"} anchors={[]} />
            </Sequence>
            <Sequence from={144} durationInFrames={223}>
                <BWPanelGrid content={[{"text": "可当巨头把 KPI当信仰，", "startFrame": 0, "durationFrames": 59}, {"text": "把分案当时光机，", "startFrame": 58, "durationFrames": 40}, {"text": "把马桶当政绩，", "startFrame": 98, "durationFrames": 38}, {"text": "把标准池当注水战场。", "startFrame": 135, "durationFrames": 55}, {"text": "受伤的是谁？", "startFrame": 189, "durationFrames": 33}]} totalDurationFrames={223} panels={[{ src: staticFile("images/华为专利论/scene_7_2_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { src: staticFile("images/华为专利论/scene_7_2_img1.png"), showFrom: 1, enterEffect: "slideBottom" }, { src: staticFile("images/华为专利论/scene_7_2_img2.png"), showFrom: 2, enterEffect: "zoomIn" }, { src: staticFile("images/华为专利论/scene_7_2_img3.png"), showFrom: 3, enterEffect: "slideLeft" }]} anchors={[]} />
            </Sequence>
            <Sequence from={367} durationInFrames={194}>
                <BWPanelGrid content={[{"text": "是每个消费者为此多付的专利许可，", "startFrame": 0, "durationFrames": 75}, {"text": "是那些被吓退的小团队。", "startFrame": 74, "durationFrames": 52}, {"text": "是整个社会多出来的合规成本。", "startFrame": 125, "durationFrames": 68}]} totalDurationFrames={194} panels={[{ src: staticFile("images/华为专利论/scene_7_3_img0.png"), showFrom: 0, enterEffect: "slideLeft" }, { src: staticFile("images/华为专利论/scene_7_3_img1.png"), showFrom: 1, enterEffect: "fadeIn" }, { src: staticFile("images/华为专利论/scene_7_3_img2.png"), showFrom: 2, enterEffect: "slideBottom" }]} anchors={[]} />
            </Sequence>
            <Sequence from={561} durationInFrames={187}>
                <BWDosAndDonts content={[{"text": "我们可以尊重华为在通信工程上的真贡献。", "startFrame": 0, "durationFrames": 94}, {"text": "但必须拒绝把“专利数量”当成“技术良心”。", "startFrame": 93, "durationFrames": 93}]} totalDurationFrames={187} left={{label: "❌ 专利数量即良心", src: staticFile("images/华为专利论/scene_7_4_left.png"), showFrom: 1 }} right={{label: "✅ 尊重真贡献", src: staticFile("images/华为专利论/scene_7_4_right.png"), showFrom: 0 }} anchors={[]} />
            </Sequence>
            <Sequence from={748} durationInFrames={199}>
                <BWTextFocus content={[{"text": "剥掉泡沫之后，", "startFrame": 0, "durationFrames": 37}, {"text": "该问的不是谁专利多。", "startFrame": 36, "durationFrames": 56}, {"text": "而是—", "startFrame": 91, "durationFrames": 16}, {"text": "这些专利，", "startFrame": 106, "durationFrames": 24}, {"text": "到底是在护创新，", "startFrame": 130, "durationFrames": 35}, {"text": "还是在护垄断？", "startFrame": 165, "durationFrames": 33}]} totalDurationFrames={199} coreSentence={[{"text": "该问的不是谁专利多", "showFrom": 1, "endFrom": 1}, {"text": "到底是在护创新，", "showFrom": 4, "endFrom": 5}, {"text": "还是在护垄断？", "showFrom": 5, "endFrom": 5}]} coreSentenceAnchors={[{"coreSentenceAnchor": "护创新", "color": "#EF4444"}, {"coreSentenceAnchor": "护垄断", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={947} durationInFrames={25}>
                <Freeze frame={198}>
                    <BWTextFocus content={[{"text": "剥掉泡沫之后，", "startFrame": 0, "durationFrames": 37}, {"text": "该问的不是谁专利多。", "startFrame": 36, "durationFrames": 56}, {"text": "而是—", "startFrame": 91, "durationFrames": 16}, {"text": "这些专利，", "startFrame": 106, "durationFrames": 24}, {"text": "到底是在护创新，", "startFrame": 130, "durationFrames": 35}, {"text": "还是在护垄断？", "startFrame": 165, "durationFrames": 33}]} totalDurationFrames={199} coreSentence={[{"text": "该问的不是谁专利多", "showFrom": 1, "endFrom": 1}, {"text": "到底是在护创新，", "showFrom": 4, "endFrom": 5}, {"text": "还是在护垄断？", "showFrom": 5, "endFrom": 5}]} coreSentenceAnchors={[{"coreSentenceAnchor": "护创新", "color": "#EF4444"}, {"coreSentenceAnchor": "护垄断", "color": "#EF4444"}]} />
                </Freeze>
            </Sequence>
            <Audio src={staticFile("/audio/华为专利论/scene_7/scene_7.mp3")} />
        </AbsoluteFill>
    );
};
