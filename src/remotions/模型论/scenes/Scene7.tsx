import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile, Freeze } from "remotion";
import { BWDosAndDonts, BWTextFocus } from "../../../components";

// 召唤·拒绝假营销
const SCENE_DURATION = 132 + 106 + 76 + 176;

export const calculateScene7Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene7: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={132}>
                <BWDosAndDonts content={[{"text": "对于一家公司来说，", "startFrame": 0, "durationFrames": 42}, {"text": "工业固定程序，", "startFrame": 41, "durationFrames": 35}, {"text": "改个名字叫「工业大模型」。", "startFrame": 76, "durationFrames": 56}]} totalDurationFrames={132} left={{label: "❌ 改名包装", src: staticFile("images/模型论/scene_7_1_left.png"), showFrom: 2 }} right={{label: "✅ 固定程序", src: staticFile("images/模型论/scene_7_1_right.png"), showFrom: 1 }} anchors={[]} />
            </Sequence>
            <Sequence from={132} durationInFrames={106}>
                <BWDosAndDonts content={[{"text": "气象监测程序，", "startFrame": 0, "durationFrames": 42}, {"text": "改个名字叫「气象大模型」。", "startFrame": 41, "durationFrames": 65}]} totalDurationFrames={106} left={{label: "❌ 改名包装", src: staticFile("images/模型论/scene_7_2_left.png"), showFrom: 1 }} right={{label: "✅ 监测程序", src: staticFile("images/模型论/scene_7_2_right.png"), showFrom: 0 }} anchors={[]} />
            </Sequence>
            <Sequence from={238} durationInFrames={76}>
                <BWTextFocus content={[{"text": "成本低，", "startFrame": 0, "durationFrames": 26}, {"text": "故事大，", "startFrame": 25, "durationFrames": 21}, {"text": "PPT 好看。", "startFrame": 45, "durationFrames": 31}]} totalDurationFrames={76} coreSentence={[{"text": "成本低，", "showFrom": 0}, {"text": "故事大，", "showFrom": 1}, {"text": "PPT 好看。", "showFrom": 2}]} coreSentenceAnchors={[]} />
            </Sequence>
            <Sequence from={314} durationInFrames={151}>
                <BWTextFocus content={[{"text": "但对于普通人来说，", "startFrame": 0, "durationFrames": 35}, {"text": "希望你能学会分辨，", "startFrame": 34, "durationFrames": 42}, {"text": "哪些是真科技，", "startFrame": 76, "durationFrames": 38}, {"text": "哪些是假营销。", "startFrame": 113, "durationFrames": 38}]} totalDurationFrames={151} coreSentence={[{"text": "希望你能学会分辨", "showFrom": 1}, {"text": "哪些是真科技", "showFrom": 2}, {"text": "哪些是假营销", "showFrom": 3}]} coreSentenceAnchors={[{"coreSentenceAnchor": "真科技", "color": "#EF4444"}, {"coreSentenceAnchor": "假营销", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={465} durationInFrames={25}>
                <Freeze frame={150}>
                    <BWTextFocus content={[{"text": "但对于普通人来说，", "startFrame": 0, "durationFrames": 35}, {"text": "希望你能学会分辨，", "startFrame": 34, "durationFrames": 42}, {"text": "哪些是真科技，", "startFrame": 76, "durationFrames": 38}, {"text": "哪些是假营销。", "startFrame": 113, "durationFrames": 38}]} totalDurationFrames={151} coreSentence={[{"text": "希望你能学会分辨", "showFrom": 1}, {"text": "哪些是真科技", "showFrom": 2}, {"text": "哪些是假营销", "showFrom": 3}]} coreSentenceAnchors={[{"coreSentenceAnchor": "真科技", "color": "#EF4444"}, {"coreSentenceAnchor": "假营销", "color": "#EF4444"}]} />
                </Freeze>
            </Sequence>
            <Audio src={staticFile("/audio/模型论/scene_7/scene_7.mp3")} />
        </AbsoluteFill>
    );
};
