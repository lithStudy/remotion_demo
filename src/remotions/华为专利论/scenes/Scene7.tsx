import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWConceptCard, BWDosAndDonts, BWPanelGrid, BWTextFocus } from "../../../components";

// 召唤·护创新还是护垄断
const SCENE_DURATION = 148 + 238 + 202 + 199 + 194;

export const calculateScene7Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene7: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={148}>
                <BWConceptCard content={[{"text": "专利制度的本意，", "startFrame": 0, "durationFrames": 38}, {"text": "是保护真正的发明，", "startFrame": 37, "durationFrames": 48}, {"text": "让后来者能站在巨人肩上。", "startFrame": 85, "durationFrames": 63}]} totalDurationFrames={148} imageSrc={staticFile("images/华为专利论/scene_7_1.png")} conceptName={"专利制度"} anchors={[]} />
            </Sequence>
            <Sequence from={148} durationInFrames={238}>
                <BWPanelGrid content={[{"text": "可当巨头把 KPI当信仰，", "startFrame": 0, "durationFrames": 68}, {"text": "把分案当时光机，", "startFrame": 67, "durationFrames": 45}, {"text": "把马桶当政绩，", "startFrame": 112, "durationFrames": 41}, {"text": "把标准池当注水战场。", "startFrame": 152, "durationFrames": 53}, {"text": "受伤的是谁？", "startFrame": 204, "durationFrames": 33}]} totalDurationFrames={238} panels={[{ src: staticFile("images/华为专利论/scene_7_2_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { src: staticFile("images/华为专利论/scene_7_2_img1.png"), showFrom: 1, enterEffect: "slideBottom" }, { src: staticFile("images/华为专利论/scene_7_2_img2.png"), showFrom: 2, enterEffect: "zoomIn" }, { src: staticFile("images/华为专利论/scene_7_2_img3.png"), showFrom: 3, enterEffect: "slideLeft" }]} anchors={[]} />
            </Sequence>
            <Sequence from={386} durationInFrames={202}>
                <BWPanelGrid content={[{"text": "是每个消费者为此多付的专利许可，", "startFrame": 0, "durationFrames": 83}, {"text": "是那些被吓退的小团队。", "startFrame": 82, "durationFrames": 51}, {"text": "是整个社会多出来的合规成本。", "startFrame": 133, "durationFrames": 68}]} totalDurationFrames={202} panels={[{ src: staticFile("images/华为专利论/scene_7_3_img0.png"), showFrom: 0, enterEffect: "slideLeft" }, { src: staticFile("images/华为专利论/scene_7_3_img1.png"), showFrom: 1, enterEffect: "fadeIn" }, { src: staticFile("images/华为专利论/scene_7_3_img2.png"), showFrom: 2, enterEffect: "slideBottom" }]} anchors={[]} />
            </Sequence>
            <Sequence from={588} durationInFrames={199}>
                <BWDosAndDonts content={[{"text": "我们可以尊重华为在通信工程上的真贡献。", "startFrame": 0, "durationFrames": 97}, {"text": "但必须拒绝把“专利数量”当成“技术良心”。", "startFrame": 96, "durationFrames": 103}]} totalDurationFrames={199} left={{label: "❌ 专利数量即良心", src: staticFile("images/华为专利论/scene_7_4_left.png"), showFrom: 1 }} right={{label: "✅ 尊重真贡献", src: staticFile("images/华为专利论/scene_7_4_right.png"), showFrom: 0 }} anchors={[]} />
            </Sequence>
            <Sequence from={787} durationInFrames={194}>
                <BWTextFocus content={[{"text": "剥掉泡沫之后，", "startFrame": 0, "durationFrames": 35}, {"text": "该问的不是谁专利多。", "startFrame": 34, "durationFrames": 55}, {"text": "而是—", "startFrame": 89, "durationFrames": 20}, {"text": "这些专利，", "startFrame": 109, "durationFrames": 22}, {"text": "到底是在护创新，", "startFrame": 130, "durationFrames": 31}, {"text": "还是在护垄断？", "startFrame": 161, "durationFrames": 32}]} totalDurationFrames={194} coreSentence={[{"text": "该问的不是谁专利多", "showFrom": 1, "endFrom": 1}, {"text": "到底是在护创新，", "showFrom": 4, "endFrom": 5}, {"text": "还是在护垄断？", "showFrom": 5, "endFrom": 5}]} coreSentenceAnchors={[{"coreSentenceAnchor": "护创新", "color": "#EF4444"}, {"coreSentenceAnchor": "护垄断", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/华为专利论/scene_7/scene_7.mp3")} />
        </AbsoluteFill>
    );
};
