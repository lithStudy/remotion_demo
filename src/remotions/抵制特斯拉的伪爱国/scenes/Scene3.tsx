import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCauseChain, BWConceptCard, BWKpiHero, BWTextFocus } from "../../../components";

// 剖析·就业依赖
const SCENE_DURATION = 42 + 123 + 192 + 114 + 116;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={42}>
                <BWConceptCard content={[{"text": "再算就业账。", "startFrame": 0, "durationFrames": 42}]} totalDurationFrames={42} imageSrc={staticFile("images/抵制特斯拉的伪爱国/scene_3_1.png")} conceptName={"就业账"} />
            </Sequence>
            <Sequence from={42} durationInFrames={123}>
                <BWKpiHero content={[{"text": "上海超级工厂，", "startFrame": 0, "durationFrames": 38}, {"text": "中国员工占比，", "startFrame": 37, "durationFrames": 35}, {"text": "99.99%。", "startFrame": 72, "durationFrames": 51}]} totalDurationFrames={123} blocks={[{"value": 99.99, "suffix": "%", "label": "中国员工占比", "showFrom": 2}]} />
            </Sequence>
            <Sequence from={165} durationInFrames={192}>
                <BWCauseChain content={[{"text": "为工厂供货的400多家一级供应商背后，", "startFrame": 0, "durationFrames": 99}, {"text": "还有上万家二级、三级配套供应商。", "startFrame": 98, "durationFrames": 94}]} totalDurationFrames={192} layout={"horizontal"} nodes={[{ label: "一级供应商", imageSrc: staticFile("images/抵制特斯拉的伪爱国/scene_3_4_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { label: "二级三级配套", imageSrc: staticFile("images/抵制特斯拉的伪爱国/scene_3_4_img1.png"), showFrom: 1, enterEffect: "slideLeft" }]} />
            </Sequence>
            <Sequence from={357} durationInFrames={114}>
                <BWKpiHero content={[{"text": "特斯拉在华的业务版图，", "startFrame": 0, "durationFrames": 47}, {"text": "维系着五十万以上中国人的饭碗。", "startFrame": 46, "durationFrames": 67}]} totalDurationFrames={114} blocks={[{"value": 50, "suffix": "万+ 中国人的饭碗", "label": "特斯拉中国", "showFrom": 1}]} countDuration={35} />
            </Sequence>
            <Sequence from={471} durationInFrames={116}>
                <BWTextFocus content={[{"text": "你说你要爱国？", "startFrame": 0, "durationFrames": 42}, {"text": "你先看看你要砸的，", "startFrame": 41, "durationFrames": 41}, {"text": "是谁的饭碗。", "startFrame": 81, "durationFrames": 34}]} totalDurationFrames={116} coreSentence={[{"text": "你说你要爱国？", "showFrom": 0}, {"text": "你先看看你要砸的，", "showFrom": 1}, {"text": "是谁的饭碗。", "showFrom": 2}]} coreSentenceAnchors={[{"coreSentenceAnchor": "爱国", "color": "#EF4444"}, {"coreSentenceAnchor": "砸的", "color": "#EF4444"}, {"coreSentenceAnchor": "饭碗", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/抵制特斯拉的伪爱国/scene_3/scene_3.mp3")} />
        </AbsoluteFill>
    );
};
