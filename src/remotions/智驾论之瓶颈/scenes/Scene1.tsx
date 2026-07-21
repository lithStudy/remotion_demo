import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWMagnifyingGlass, BWSplitCompare, BWStepList, BWTextFocus } from "../../../components";

// 揭示·输入层误区
const SCENE_DURATION = 148 + 162 + 167 + 418 + 109;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={148}>
                <BWTextFocus content={[{"text": "智能驾驶技术之路，", "startFrame": 0, "durationFrames": 45}, {"text": "纯视觉 VS  加装雷达  你认为哪个更好？", "startFrame": 44, "durationFrames": 103}]} totalDurationFrames={148} coreSentence={[{"text": "智驾技术之路", "showFrom": 0}, {"text": "纯视觉 VS 加装雷达", "showFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "纯视觉", "color": "#EF4444"}, {"coreSentenceAnchor": "加装雷达", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={148} durationInFrames={162}>
                <BWSplitCompare content={[{"text": "支持雷达的人说，", "startFrame": 0, "durationFrames": 33}, {"text": "暴雨天摄像头会失灵。", "startFrame": 32, "durationFrames": 52}, {"text": "支持视觉的人说，", "startFrame": 84, "durationFrames": 39}, {"text": "特斯拉已经跑通了。", "startFrame": 122, "durationFrames": 40}]} totalDurationFrames={162} leftSrc={staticFile("images/智驾论之瓶颈/scene_1_2_left.png")} rightSrc={staticFile("images/智驾论之瓶颈/scene_1_2_right.png")} leftLabel={"纯视觉"} rightLabel={"加装雷达"} leftShowFrom={2} rightShowFrom={0} />
            </Sequence>
            <Sequence from={310} durationInFrames={167}>
                <BWMagnifyingGlass content={[{"text": "但这些争论，", "startFrame": 0, "durationFrames": 29}, {"text": "犯了一个根本性错误。", "startFrame": 28, "durationFrames": 44}, {"text": "他们把智驾的瓶颈，", "startFrame": 72, "durationFrames": 44}, {"text": "定位在了“输入”这一层。", "startFrame": 115, "durationFrames": 51}]} totalDurationFrames={167} anchors={[{"text": "根本性错误", "showFrom": 1, "color": "#000000", "anim": "popIn", "audioEffect": "impact_thud"}, {"text": "输入", "showFrom": 3, "color": "#EF4444", "anim": "highlight", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={477} durationInFrames={418}>
                <BWStepList content={[{"text": "智驾到底分几层？", "startFrame": 0, "durationFrames": 42}, {"text": "第一层，", "startFrame": 41, "durationFrames": 22}, {"text": "输入。", "startFrame": 63, "durationFrames": 23}, {"text": "接受周围现实世界的感知，", "startFrame": 86, "durationFrames": 57}, {"text": "第二层，", "startFrame": 142, "durationFrames": 24}, {"text": "计算。", "startFrame": 166, "durationFrames": 20}, {"text": "通过规则或者神经网络，", "startFrame": 186, "durationFrames": 52}, {"text": "判断当前状况。并给出具体的执行指令。", "startFrame": 238, "durationFrames": 43}, {"text": "第三层，", "startFrame": 280, "durationFrames": 22}, {"text": "输出。", "startFrame": 302, "durationFrames": 21}, {"text": "根据指令执行机械传动装置，", "startFrame": 322, "durationFrames": 31}, {"text": "实现车辆的减速或加速、转弯或直行。", "startFrame": 353, "durationFrames": 43}]} totalDurationFrames={418} title={"智驾三层架构"} steps={[{"text": "第一层：输入", "showFrom": 1}, {"text": "第二层：计算", "showFrom": 5}, {"text": "第三层：输出", "showFrom": 9}]} anchors={[]} />
            </Sequence>
            <Sequence from={895} durationInFrames={109}>
                <BWTextFocus content={[{"text": "视觉和雷达之争，", "startFrame": 0, "durationFrames": 40}, {"text": "只在第一层。", "startFrame": 39, "durationFrames": 30}, {"text": "却根本不是重点。", "startFrame": 68, "durationFrames": 40}]} totalDurationFrames={109} coreSentence={[{"text": "视觉和雷达之争，", "showFrom": 0}, {"text": "只在第一层。", "showFrom": 1}, {"text": "根本不是重点。", "showFrom": 2, "endFrom": 2}]} coreSentenceAnchors={[{"coreSentenceAnchor": "第一层", "color": "#EF4444"}, {"coreSentenceAnchor": "重点", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/智驾论之瓶颈/scene_1/scene_1.mp3")} />
        </AbsoluteFill>
    );
};
