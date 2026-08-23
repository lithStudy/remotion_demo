import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCognitiveShift, BWConceptCard, BWPanelGrid, BWTextFocus } from "../../../components";

// 反转·逻辑折叠
const SCENE_DURATION = 89 + 238 + 129 + 193 + 114 + 142;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={89}>
                <BWTextFocus content={[{"text": "把基本功包装成定律，", "startFrame": 0, "durationFrames": 51}, {"text": "这就是营销属性。", "startFrame": 50, "durationFrames": 39}]} totalDurationFrames={89} coreSentence={[{"text": "把基本功包装成定律，", "showFrom": 0, "endFrom": 1}, {"text": "这就是营销属性。", "showFrom": 1, "endFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "营销属性", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={89} durationInFrames={238}>
                <BWConceptCard content={[{"text": "更具体一点。", "startFrame": 0, "durationFrames": 26}, {"text": "所谓逻辑折叠，", "startFrame": 25, "durationFrames": 38}, {"text": "说白了，", "startFrame": 62, "durationFrames": 18}, {"text": "就是把芯片从平面，", "startFrame": 80, "durationFrames": 44}, {"text": "往立体方向堆。", "startFrame": 123, "durationFrames": 35}, {"text": "像城市没地了，", "startFrame": 158, "durationFrames": 40}, {"text": "就开始盖高楼。", "startFrame": 198, "durationFrames": 40}]} totalDurationFrames={238} imageSrc={staticFile("images/华为韬定律/scene_3_2.png")} conceptName={"逻辑折叠"} anchors={[]} />
            </Sequence>
            <Sequence from={327} durationInFrames={129}>
                <BWTextFocus content={[{"text": "这当然非常有价值。", "startFrame": 0, "durationFrames": 47}, {"text": "但问题是，", "startFrame": 46, "durationFrames": 22}, {"text": "这并不是华为独创的路线。", "startFrame": 68, "durationFrames": 60}]} totalDurationFrames={129} coreSentence={[{"text": "这当然非常有价值。", "showFrom": 0, "endFrom": 0}, {"text": "这并不是华为独创的路线。", "showFrom": 2, "endFrom": 2}]} coreSentenceAnchors={[{"coreSentenceAnchor": "不是华为独创", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={456} durationInFrames={193}>
                <BWPanelGrid content={[{"text": "立体堆叠早就在研究。", "startFrame": 0, "durationFrames": 57}, {"text": "不同芯片组合早就在做。", "startFrame": 56, "durationFrames": 54}, {"text": "更紧密的连接方式，也早就在推进。", "startFrame": 109, "durationFrames": 83}]} totalDurationFrames={193} panels={[{ src: staticFile("images/华为韬定律/scene_3_4_img0.png"), showFrom: 0, enterEffect: "zoomIn" }, { src: staticFile("images/华为韬定律/scene_3_4_img1.png"), showFrom: 1 }, { src: staticFile("images/华为韬定律/scene_3_4_img2.png"), showFrom: 2 }]} anchors={[]} />
            </Sequence>
            <Sequence from={649} durationInFrames={114}>
                <BWPanelGrid content={[{"text": "台积电在做。", "startFrame": 0, "durationFrames": 38}, {"text": "英特尔在做。", "startFrame": 37, "durationFrames": 35}, {"text": "英伟达也在用。", "startFrame": 72, "durationFrames": 42}]} totalDurationFrames={114} panels={[{ src: staticFile("images/华为韬定律/scene_3_5_img0.png"), showFrom: 0, enterEffect: "zoomIn" }, { src: staticFile("images/华为韬定律/scene_3_5_img1.png"), showFrom: 1 }, { src: staticFile("images/华为韬定律/scene_3_5_img2.png"), showFrom: 2 }]} anchors={[]} />
            </Sequence>
            <Sequence from={763} durationInFrames={142}>
                <BWCognitiveShift content={[{"text": "行业里叫工程路线。", "startFrame": 0, "durationFrames": 51}, {"text": "华为叙事里，", "startFrame": 50, "durationFrames": 35}, {"text": "却变成了定律革命。", "startFrame": 85, "durationFrames": 56}]} totalDurationFrames={142} notText={"工程路线"} butText={"定律革命"} butSrc={staticFile("images/华为韬定律/scene_3_6.png")} notContentIndex={0} butContentIndex={2} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/华为韬定律/scene_3/scene_3.mp3")} />
        </AbsoluteFill>
    );
};
