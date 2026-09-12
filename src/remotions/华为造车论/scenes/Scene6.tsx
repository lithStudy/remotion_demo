import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile, Freeze } from "remotion";
import { BWCauseChain, BWCenterFocus, BWCognitiveShift, BWPunchCaption, BWStepList, BWTextFocus } from "../../../components";

// 华为不造车不负责
const SCENE_DURATION = 176 + 349 + 83 + 92 + 159 + 91;

export const calculateScene6Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene6: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={176}>
                <BWCauseChain content={[{"text": "车的好坏有时候会决定你的生死。", "startFrame": 0, "durationFrames": 77}, {"text": "所以当你考虑买鸿蒙智行，", "startFrame": 76, "durationFrames": 54}, {"text": "别光冲着华为的名头去。", "startFrame": 129, "durationFrames": 46}]} totalDurationFrames={176} layout={"horizontal"} nodes={[{ label: "好坏定生死", imageSrc: staticFile("images/华为造车论/scene_6_1_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { label: "买车考量", imageSrc: staticFile("images/华为造车论/scene_6_1_img1.png"), showFrom: 1, enterEffect: "slideLeft" }, { label: "别冲名头", imageSrc: staticFile("images/华为造车论/scene_6_1_img2.png"), showFrom: 2, enterEffect: "zoomIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={176} durationInFrames={349}>
                <BWStepList content={[{"text": "先看具体配置，搭载哪一代系统。", "startFrame": 0, "durationFrames": 87}, {"text": "再查具体车型，有没有第三方碰撞成绩。", "startFrame": 86, "durationFrames": 91}, {"text": "然后亲自试驾，感受制动和底盘。", "startFrame": 176, "durationFrames": 89}, {"text": "最后看清合格证、质保和召回主体。", "startFrame": 264, "durationFrames": 84}]} totalDurationFrames={349} title={"买车前必查"} steps={[{"text": "先看具体配置", "showFrom": 0}, {"text": "再查第三方碰撞成绩", "showFrom": 1}, {"text": "然后亲自试驾", "showFrom": 2}, {"text": "最后看清合格证主体", "showFrom": 3}]} anchors={[]} />
            </Sequence>
            <Sequence from={525} durationInFrames={83}>
                <BWCenterFocus content={[{"text": "不管华为有多大的声音，", "startFrame": 0, "durationFrames": 48}, {"text": "你始终要记住，", "startFrame": 48, "durationFrames": 35}]} totalDurationFrames={83} imageSrc={staticFile("images/华为造车论/scene_6_5.png")} enterEffect="zoomIn" anchors={[]} />
            </Sequence>
            <Sequence from={608} durationInFrames={92}>
                <BWCognitiveShift content={[{"text": "华为不造车，", "startFrame": 0, "durationFrames": 31}, {"text": "他只是车企的供应商之一。", "startFrame": 30, "durationFrames": 61}]} totalDurationFrames={92} notText={"华为造车"} butText={"车企供应商之一"} butSrc={staticFile("images/华为造车论/scene_6_6.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Sequence from={700} durationInFrames={159}>
                <BWPunchCaption content={[{"text": "他是车机软件供应商，", "startFrame": 0, "durationFrames": 52}, {"text": "他是电驱系统供应商，", "startFrame": 51, "durationFrames": 54}, {"text": "他是销售渠道供应商。", "startFrame": 104, "durationFrames": 55}]} totalDurationFrames={159} punches={[{"text": "车机软件供应商", "showFrom": 0, "enterEffect": "popIn", "tone": "calm"}, {"text": "电驱系统供应商", "showFrom": 1, "enterEffect": "snap", "tone": "alert"}, {"text": "销售渠道供应商", "showFrom": 2, "enterEffect": "shake", "tone": "alert"}]} anchors={[{"text": "供应商", "showFrom": 0, "color": "#EF4444"}, {"text": "供应商", "showFrom": 1, "color": "#EF4444"}, {"text": "供应商", "showFrom": 2, "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={859} durationInFrames={66}>
                <BWTextFocus content={[{"text": "但唯独，", "startFrame": 0, "durationFrames": 21}, {"text": "他并不对整车负责。", "startFrame": 20, "durationFrames": 45}]} totalDurationFrames={66} coreSentence={[{"text": "但唯独，", "showFrom": 0, "endFrom": 1}, {"text": "他并不对整车负责。", "showFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "不对整车负责", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={925} durationInFrames={25}>
                <Freeze frame={65}>
                    <BWTextFocus content={[{"text": "但唯独，", "startFrame": 0, "durationFrames": 21}, {"text": "他并不对整车负责。", "startFrame": 20, "durationFrames": 45}]} totalDurationFrames={66} coreSentence={[{"text": "但唯独，", "showFrom": 0, "endFrom": 1}, {"text": "他并不对整车负责。", "showFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "不对整车负责", "color": "#EF4444"}]} />
                </Freeze>
            </Sequence>
            <Audio src={staticFile("/audio/华为造车论/scene_6/scene_6.mp3")} />
        </AbsoluteFill>
    );
};
