import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWConceptCard, BWKpiHero, BWTextFocus } from "../../../components";

// 剖析·外汇收入
const SCENE_DURATION = 44 + 307 + 113;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={44}>
                <BWConceptCard content={[{"text": "再算经济账。", "startFrame": 0, "durationFrames": 44}]} totalDurationFrames={44} imageSrc={staticFile("images/抵制特斯拉的伪爱国/scene_4_1.png")} conceptName={"经济账"} />
            </Sequence>
            <Sequence from={44} durationInFrames={307}>
                <BWKpiHero content={[{"text": "特斯拉每年向中国缴纳数十亿元税款。", "startFrame": 0, "durationFrames": 98}, {"text": "这还只是特斯拉的企业所得税。", "startFrame": 97, "durationFrames": 76}, {"text": "下游的供应链企业，", "startFrame": 172, "durationFrames": 44}, {"text": "每年要缴纳的增值税，", "startFrame": 216, "durationFrames": 53}, {"text": "更是百亿级别。", "startFrame": 268, "durationFrames": 39}]} totalDurationFrames={307} blocks={[{"value": 30, "suffix": "+ 亿元", "label": "缴纳税款", "showFrom": 0}, {"value": 100, "suffix": "+ 亿元", "label": "增值税", "showFrom": 1}]} countDuration={40} />
            </Sequence>
            <Sequence from={351} durationInFrames={113}>
                <BWTextFocus content={[{"text": "你说你要爱国？", "startFrame": 0, "durationFrames": 40}, {"text": "你先看看你要砸的，", "startFrame": 39, "durationFrames": 44}, {"text": "是谁的收入。", "startFrame": 82, "durationFrames": 30}]} totalDurationFrames={113} coreSentence={[{"text": "你说你要爱国？", "showFrom": 0}, {"text": "你先看看你要砸的，", "showFrom": 1}, {"text": "是谁的收入。", "showFrom": 2}]} coreSentenceAnchors={[{"coreSentenceAnchor": "爱国", "color": "#EF4444"}, {"coreSentenceAnchor": "砸的", "color": "#EF4444"}, {"coreSentenceAnchor": "收入", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/抵制特斯拉的伪爱国/scene_4/scene_4.mp3")} />
        </AbsoluteFill>
    );
};
