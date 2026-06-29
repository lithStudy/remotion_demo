import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWDosAndDonts, BWTextFocus } from "../../../components";

// 召唤·拒绝假营销
const SCENE_DURATION = 119 + 91 + 76 + 159;

export const calculateScene7Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene7: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={119}>
                <BWDosAndDonts content={[{"text": "对于一家公司来说，", "startFrame": 0, "durationFrames": 41}, {"text": "工业固定程序，", "startFrame": 40, "durationFrames": 30}, {"text": "改个名字叫「工业大模型」。", "startFrame": 69, "durationFrames": 49}]} totalDurationFrames={119} left={{label: "❌ 改名包装", src: staticFile("images/模型论/scene_7_1_left.png"), showFrom: 2 }} right={{label: "✅ 固定程序", src: staticFile("images/模型论/scene_7_1_right.png"), showFrom: 1 }} anchors={[]} />
            </Sequence>
            <Sequence from={119} durationInFrames={91}>
                <BWDosAndDonts content={[{"text": "气象监测程序，", "startFrame": 0, "durationFrames": 38}, {"text": "改个名字叫「气象大模型」。", "startFrame": 37, "durationFrames": 54}]} totalDurationFrames={91} left={{label: "❌ 改名包装", src: staticFile("images/模型论/scene_7_2_left.png"), showFrom: 1 }} right={{label: "✅ 监测程序", src: staticFile("images/模型论/scene_7_2_right.png"), showFrom: 0 }} anchors={[]} />
            </Sequence>
            <Sequence from={210} durationInFrames={76}>
                <BWTextFocus content={[{"text": "成本低，", "startFrame": 0, "durationFrames": 22}, {"text": "故事大，", "startFrame": 21, "durationFrames": 22}, {"text": "PPT 好看。", "startFrame": 43, "durationFrames": 33}]} totalDurationFrames={76} coreSentence={[{"text": "成本低，", "showFrom": 0}, {"text": "故事大，", "showFrom": 1}, {"text": "PPT 好看。", "showFrom": 2}]} coreSentenceAnchors={[]} />
            </Sequence>
            <Sequence from={286} durationInFrames={159}>
                <BWTextFocus content={[{"text": "但对于普通人来说，", "startFrame": 0, "durationFrames": 39}, {"text": "希望你能学会分辨，", "startFrame": 38, "durationFrames": 45}, {"text": "哪些是真科技，", "startFrame": 82, "durationFrames": 39}, {"text": "哪些是假营销。", "startFrame": 121, "durationFrames": 38}]} totalDurationFrames={159} coreSentence={[{"text": "希望你能学会分辨", "showFrom": 1}, {"text": "哪些是真科技", "showFrom": 2}, {"text": "哪些是假营销", "showFrom": 3}]} coreSentenceAnchors={[{"coreSentenceAnchor": "真科技", "color": "#EF4444"}, {"coreSentenceAnchor": "假营销", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/模型论/scene_7/scene_7.mp3")} />
        </AbsoluteFill>
    );
};
