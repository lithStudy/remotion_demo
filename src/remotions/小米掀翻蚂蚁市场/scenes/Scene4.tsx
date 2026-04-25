import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWConceptCard, BWKpiHero, BWTextFocus } from "../../../components";

// 石头突围
const SCENE_DURATION = 69 + 78 + 236 + 230;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={69}>
                <BWTextFocus content={[{"text": "一个血战案例就够说明白。", "startFrame": 0, "durationFrames": 69}]} totalDurationFrames={69} coreSentence={["一个血战案例就够说明白"]} coreSentenceAnchors={[]} />
            </Sequence>
            <Sequence from={69} durationInFrames={78}>
                <BWCenterFocus content={[{"text": "2014年，", "startFrame": 0, "durationFrames": 35}, {"text": "石头科技刚成立，", "startFrame": 34, "durationFrames": 43}]} totalDurationFrames={78} imageSrc={staticFile("images/小米掀翻蚂蚁市场/scene_4_2.png")} enterEffect="fadeIn" anchors={[{"text": "石头科技", "showFrom": 1, "color": "#000000", "anim": "spring", "audioEffect": null}]} />
            </Sequence>
            <Sequence from={147} durationInFrames={236}>
                <BWKpiHero content={[{"text": "5个工程师，", "startFrame": 0, "durationFrames": 38}, {"text": "40天手搓出一台粗糙的扫地机样机。", "startFrame": 37, "durationFrames": 96}, {"text": "小米生态链看中后，", "startFrame": 133, "durationFrames": 50}, {"text": "三个月战略投资到位；", "startFrame": 182, "durationFrames": 54}]} totalDurationFrames={236} blocks={[{"value": 5, "suffix": "人", "label": "工程师", "showFrom": 0}, {"value": 40, "suffix": "天", "label": "手搓样机", "showFrom": 1}, {"value": 3, "suffix": "个月", "label": "投资到位", "showFrom": 3}]} />
            </Sequence>
            <Sequence from={383} durationInFrames={230}>
                <BWConceptCard content={[{"text": "更狠的是“占股不控股”—", "startFrame": 0, "durationFrames": 62}, {"text": "工业设计、供应链、全国渠道，", "startFrame": 61, "durationFrames": 79}, {"text": "像保姆一样全盘托出，", "startFrame": 139, "durationFrames": 55}, {"text": "让你放手去干。", "startFrame": 194, "durationFrames": 36}]} totalDurationFrames={230} imageSrc={staticFile("images/小米掀翻蚂蚁市场/scene_4_5.png")} conceptName={"占股不控股"} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/小米掀翻蚂蚁市场/scene_4/scene_4.mp3")} />
        </AbsoluteFill>
    );
};
