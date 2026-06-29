import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift, BWConceptCard, BWDosAndDonts, BWStepList } from "../../../components";

// 剖析·时间缩微
const SCENE_DURATION = 130 + 236 + 115 + 101 + 206 + 108;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={130}>
                <BWConceptCard content={[{"text": "所谓韬定律，", "startFrame": 0, "durationFrames": 34}, {"text": "也是这个问题。", "startFrame": 33, "durationFrames": 35}, {"text": "它讲的核心，", "startFrame": 68, "durationFrames": 31}, {"text": "是时间缩微。", "startFrame": 99, "durationFrames": 31}]} totalDurationFrames={130} imageSrc={staticFile("images/华为韬定律/scene_2_1.png")} conceptName={"时间缩微"} anchors={[]} />
            </Sequence>
            <Sequence from={130} durationInFrames={236}>
                <BWStepList content={[{"text": "听起来很玄。", "startFrame": 0, "durationFrames": 35}, {"text": "但翻译成人话，", "startFrame": 34, "durationFrames": 35}, {"text": "就是让芯片内部，", "startFrame": 69, "durationFrames": 43}, {"text": "信号跑得更快。", "startFrame": 112, "durationFrames": 37}, {"text": "让等待时间更短。", "startFrame": 148, "durationFrames": 41}, {"text": "让系统协作更紧。", "startFrame": 188, "durationFrames": 47}]} totalDurationFrames={236} title={"加速三要点"} steps={[{"text": "信号跑得更快。", "showFrom": 3}, {"text": "让等待时间更短。", "showFrom": 4}, {"text": "让系统协作更紧。", "showFrom": 5}]} anchors={[]} />
            </Sequence>
            <Sequence from={366} durationInFrames={115}>
                <BWDosAndDonts content={[{"text": "这重要吗？", "startFrame": 0, "durationFrames": 26}, {"text": "当然重要。", "startFrame": 25, "durationFrames": 34}, {"text": "但新吗？", "startFrame": 59, "durationFrames": 29}, {"text": "并不新。", "startFrame": 87, "durationFrames": 28}]} totalDurationFrames={115} left={{label: "✅ 当然重要", src: staticFile("images/华为韬定律/scene_2_4_left.png"), showFrom: 1 }} right={{label: "❌ 并不新", src: staticFile("images/华为韬定律/scene_2_4_right.png"), showFrom: 3 }} anchors={[]} />
            </Sequence>
            <Sequence from={481} durationInFrames={101}>
                <BWCenterFocus content={[{"text": "半导体工程里，", "startFrame": 0, "durationFrames": 40}, {"text": "降低延迟，", "startFrame": 39, "durationFrames": 27}, {"text": "本来就是基本目标。", "startFrame": 65, "durationFrames": 35}]} totalDurationFrames={101} imageSrc={staticFile("images/华为韬定律/scene_2_5.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={582} durationInFrames={206}>
                <BWStepList content={[{"text": "电路里的等待时间要降。", "startFrame": 0, "durationFrames": 55}, {"text": "信号节奏要对齐。", "startFrame": 54, "durationFrames": 50}, {"text": "线路要优化。", "startFrame": 103, "durationFrames": 33}, {"text": "功耗要压住。", "startFrame": 135, "durationFrames": 30}, {"text": "封装要改进。", "startFrame": 165, "durationFrames": 41}]} totalDurationFrames={206} title={"半导体工程基本目标"} steps={[{"text": "电路里的等待时间要降。", "showFrom": 0}, {"text": "信号节奏要对齐。", "showFrom": 1}, {"text": "线路要优化。", "showFrom": 2}, {"text": "功耗要压住。", "showFrom": 3}, {"text": "封装要改进。", "showFrom": 4}]} anchors={[]} />
            </Sequence>
            <Sequence from={788} durationInFrames={108}>
                <BWCognitiveShift content={[{"text": "这些不是玄学。", "startFrame": 0, "durationFrames": 36}, {"text": "这是工程师每天都在啃的硬骨头。", "startFrame": 36, "durationFrames": 72}]} totalDurationFrames={108} notText={"玄学"} butText={"工程师啃硬骨头"} butSrc={staticFile("images/华为韬定律/scene_2_7.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/华为韬定律/scene_2/scene_2.mp3")} />
        </AbsoluteFill>
    );
};
