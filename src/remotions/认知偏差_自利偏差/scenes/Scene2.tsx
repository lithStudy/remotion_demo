import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCauseChain, BWConceptCard } from "../../../components";

// 自利偏差
const SCENE_DURATION = 210 + 200;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={210}>
                <BWConceptCard content={[{"text": "心理学管这叫“自利偏差”。", "startFrame": 0, "durationFrames": 60}, {"text": "我们习惯于将好的结果归于自己，", "startFrame": 60, "durationFrames": 87}, {"text": "将坏的结果甩锅给环境。", "startFrame": 146, "durationFrames": 64}]} totalDurationFrames={210} imageSrc={staticFile("images/认知偏差_自利偏差/scene_2_1.png")} conceptName={"自利偏差"} anchors={[]} />
            </Sequence>
            <Sequence from={210} durationInFrames={200}>
                <BWCauseChain content={[{"text": "这其实是进化出来的“消炎药”，", "startFrame": 0, "durationFrames": 59}, {"text": "它必须让你觉得自己很行，", "startFrame": 58, "durationFrames": 57}, {"text": "否则面对负面的自我，", "startFrame": 115, "durationFrames": 47}, {"text": "你根本活不下去。", "startFrame": 162, "durationFrames": 38}]} totalDurationFrames={200} layout={"horizontal"} nodes={[{ label: "自我肯定", imageSrc: staticFile("images/认知偏差_自利偏差/scene_2_3_img0.png"), showFrom: 0 }, { label: "自尊保护", imageSrc: staticFile("images/认知偏差_自利偏差/scene_2_3_img1.png"), showFrom: 2 }]} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/认知偏差_自利偏差/scene_2/scene_2.mp3")} />
        </AbsoluteFill>
    );
};
