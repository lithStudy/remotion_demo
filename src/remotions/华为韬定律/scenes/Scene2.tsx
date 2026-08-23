import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift, BWConceptCard, BWDosAndDonts, BWStepList } from "../../../components";

// 剖析·时间缩微
const SCENE_DURATION = 125 + 253 + 109 + 97 + 210 + 100;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={125}>
                <BWConceptCard content={[{"text": "所谓韬定律，", "startFrame": 0, "durationFrames": 32}, {"text": "也是这个问题。", "startFrame": 31, "durationFrames": 35}, {"text": "它讲的核心，", "startFrame": 66, "durationFrames": 26}, {"text": "是时间缩微。", "startFrame": 91, "durationFrames": 33}]} totalDurationFrames={125} imageSrc={staticFile("images/华为韬定律/scene_2_1.png")} conceptName={"时间缩微"} anchors={[]} />
            </Sequence>
            <Sequence from={125} durationInFrames={253}>
                <BWStepList content={[{"text": "听起来很玄。", "startFrame": 0, "durationFrames": 40}, {"text": "但翻译成人话，", "startFrame": 39, "durationFrames": 36}, {"text": "就是让芯片内部，", "startFrame": 75, "durationFrames": 40}, {"text": "信号跑得更快。", "startFrame": 114, "durationFrames": 40}, {"text": "让等待时间更短。", "startFrame": 153, "durationFrames": 47}, {"text": "让系统协作更紧。", "startFrame": 200, "durationFrames": 53}]} totalDurationFrames={253} title={"加速三要点"} steps={[{"text": "信号跑得更快。", "showFrom": 3}, {"text": "让等待时间更短。", "showFrom": 4}, {"text": "让系统协作更紧。", "showFrom": 5}]} anchors={[]} />
            </Sequence>
            <Sequence from={378} durationInFrames={109}>
                <BWDosAndDonts content={[{"text": "这重要吗？", "startFrame": 0, "durationFrames": 24}, {"text": "当然重要。", "startFrame": 23, "durationFrames": 30}, {"text": "但新吗？", "startFrame": 53, "durationFrames": 27}, {"text": "并不新。", "startFrame": 79, "durationFrames": 30}]} totalDurationFrames={109} left={{label: "✅ 当然重要", src: staticFile("images/华为韬定律/scene_2_4_left.png"), showFrom: 1 }} right={{label: "❌ 并不新", src: staticFile("images/华为韬定律/scene_2_4_right.png"), showFrom: 3 }} anchors={[]} />
            </Sequence>
            <Sequence from={487} durationInFrames={97}>
                <BWCenterFocus content={[{"text": "半导体工程里，", "startFrame": 0, "durationFrames": 32}, {"text": "降低延迟，", "startFrame": 31, "durationFrames": 27}, {"text": "本来就是基本目标。", "startFrame": 57, "durationFrames": 39}]} totalDurationFrames={97} imageSrc={staticFile("images/华为韬定律/scene_2_5.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={584} durationInFrames={210}>
                <BWStepList content={[{"text": "电路里的等待时间要降。", "startFrame": 0, "durationFrames": 53}, {"text": "信号节奏要对齐。", "startFrame": 52, "durationFrames": 50}, {"text": "线路要优化。", "startFrame": 101, "durationFrames": 32}, {"text": "功耗要压住。", "startFrame": 133, "durationFrames": 34}, {"text": "封装要改进。", "startFrame": 166, "durationFrames": 43}]} totalDurationFrames={210} title={"半导体工程基本目标"} steps={[{"text": "电路里的等待时间要降。", "showFrom": 0}, {"text": "信号节奏要对齐。", "showFrom": 1}, {"text": "线路要优化。", "showFrom": 2}, {"text": "功耗要压住。", "showFrom": 3}, {"text": "封装要改进。", "showFrom": 4}]} anchors={[]} />
            </Sequence>
            <Sequence from={794} durationInFrames={100}>
                <BWCognitiveShift content={[{"text": "这些不是玄学。", "startFrame": 0, "durationFrames": 32}, {"text": "这是工程师每天都在啃的硬骨头。", "startFrame": 31, "durationFrames": 69}]} totalDurationFrames={100} notText={"玄学"} butText={"工程师啃硬骨头"} butSrc={staticFile("images/华为韬定律/scene_2_7.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/华为韬定律/scene_2/scene_2.mp3")} />
        </AbsoluteFill>
    );
};
