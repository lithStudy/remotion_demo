import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCauseChain, BWConceptCard, BWTextFocus } from "../../../components";

// 升华：不惧对立的健康社会
const SCENE_DURATION = 60 + 120 + 97;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={60}>
                <BWTextFocus content={[{"text": "一个健康的社会，", "startFrame": 0, "durationFrames": 30}, {"text": "不应该害怕对立。", "startFrame": 30, "durationFrames": 30}]} totalDurationFrames={60} coreSentence={["一个健康的社会，", "不应该害怕对立。"]} coreSentenceAnchors={[{"coreSentenceAnchor": "害怕对立", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={60} durationInFrames={120}>
                <BWConceptCard content={[{"text": "真正的共识，", "startFrame": 0, "durationFrames": 30}, {"text": "是在无数次激烈的对立、", "startFrame": 30, "durationFrames": 30}, {"text": "碰撞和辩论中，", "startFrame": 60, "durationFrames": 30}, {"text": "最终筛选出来的公约数。", "startFrame": 90, "durationFrames": 30}]} totalDurationFrames={120} imageSrc={staticFile("images/template/scene1_1.png")} conceptName={"真正的共识"} anchors={[]} />
            </Sequence>
            <Sequence from={180} durationInFrames={97}>
                <BWCauseChain content={[{"text": "如果所有的不同意见都被定义为“搞对立”，", "startFrame": 0, "durationFrames": 44}, {"text": "那么剩下的只会是千篇一律的废话和死水微澜的平庸。", "startFrame": 44, "durationFrames": 53}]} totalDurationFrames={97} layout={"horizontal"} nodes={[{ label: "打压异见", imageSrc: staticFile("images/template/scene1_1.png"), showFrom: 0, enterEffect: "fadeIn" }, { label: "产出平庸", imageSrc: staticFile("images/template/scene1_1.png"), showFrom: 1, enterEffect: "fadeIn" }]} anchors={[]} />
            </Sequence>

        </AbsoluteFill>
    );
};
