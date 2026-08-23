import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCauseChain, BWChecklistReveal, BWConceptCard, BWTextFocus } from "../../../components";

// 召唤
const SCENE_DURATION = 176 + 101 + 227 + 195 + 207;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={176}>
                <BWCauseChain content={[{"text": "碎片化的媒介，", "startFrame": 0, "durationFrames": 39}, {"text": "把过程与语境压成几秒高光，", "startFrame": 38, "durationFrames": 80}, {"text": "必然塑造出碎片化的认知。", "startFrame": 117, "durationFrames": 58}]} totalDurationFrames={176} layout={"horizontal"} nodes={[{ label: "碎片化媒介", imageSrc: staticFile("images/碎片认知/scene_4_1_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { label: "高光截取", imageSrc: staticFile("images/碎片认知/scene_4_1_img1.png"), showFrom: 1, enterEffect: "fadeIn" }, { label: "碎片化认知", imageSrc: staticFile("images/碎片认知/scene_4_1_img2.png"), showFrom: 2, enterEffect: "fadeIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={176} durationInFrames={101}>
                <BWConceptCard content={[{"text": "要打破这种幻觉，", "startFrame": 0, "durationFrames": 35}, {"text": "我们必须重建对“语境”的尊重。", "startFrame": 34, "durationFrames": 67}]} totalDurationFrames={101} imageSrc={staticFile("images/碎片认知/scene_4_2.png")} conceptName={"语境"} anchors={[]} />
            </Sequence>
            <Sequence from={277} durationInFrames={227}>
                <BWChecklistReveal content={[{"text": "当你下一次看到一个极具冲击力的短视频时，", "startFrame": 0, "durationFrames": 96}, {"text": "请先问自己：", "startFrame": 96, "durationFrames": 34}, {"text": "这个画面的上一秒是什么？", "startFrame": 129, "durationFrames": 54}, {"text": "镜头之外有什么？", "startFrame": 183, "durationFrames": 44}]} totalDurationFrames={227} title={"补全语境的自检"} rows={[{"text": "先在心里按暂停", "showFrom": 1}, {"text": "上一秒发生了什么？", "showFrom": 2}, {"text": "镜头之外有什么？", "showFrom": 3}]} anchors={[]} />
            </Sequence>
            <Sequence from={504} durationInFrames={195}>
                <BWTextFocus content={[{"text": "真正的“眼见为实”，", "startFrame": 0, "durationFrames": 51}, {"text": "从来不是相信自己看见的一切，", "startFrame": 50, "durationFrames": 63}, {"text": "而是承认自己还有许多没看见的东西。", "startFrame": 112, "durationFrames": 83}]} totalDurationFrames={195} coreSentence={["真正的“眼见为实”", "是承认自己还有许多没看见的东西"]} coreSentenceAnchors={[{"coreSentenceAnchor": "眼见为实", "color": "#EF4444"}, {"coreSentenceAnchor": "没看见的东西", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={699} durationInFrames={207}>
                <BWTextFocus content={[{"text": "在语境被归还之前，那份悬置判断的沉默，", "startFrame": 0, "durationFrames": 99}, {"text": "既是对真相的尊重，", "startFrame": 98, "durationFrames": 1}, {"text": "也是对我们自身心智的最后保护。", "startFrame": 0, "durationFrames": 234}]} totalDurationFrames={207} coreSentence={["悬置的沉默，既是对真相的尊重", "也是对我们自身心智的最后保护"]} coreSentenceAnchors={[{"coreSentenceAnchor": "对真相的尊重", "color": "#2563EB"}, {"coreSentenceAnchor": "最后保护", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/碎片认知/scene_4/scene_4.mp3")} />
        </AbsoluteFill>
    );
};
