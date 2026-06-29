import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCauseChain, BWCognitiveShift, BWDosAndDonts, BWMagnifyingGlass, BWMethodStack, BWPanelGrid, BWSplitCompare, BWTextFocus } from "../../../components";

// 总结
const SCENE_DURATION = 101 + 207 + 289 + 91 + 88 + 249 + 121 + 113 + 74;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={101}>
                <BWDosAndDonts content={[{"text": "所以兜底两个字，", "startFrame": 0, "durationFrames": 38}, {"text": "看着像保障，", "startFrame": 37, "durationFrames": 31}, {"text": "本质是营销。", "startFrame": 67, "durationFrames": 33}]} totalDurationFrames={101} left={{label: "❌ 像保障", src: staticFile("images/智驾兜底论/scene_3_1_left.png"), showFrom: 1 }} right={{label: "✅ 是营销", src: staticFile("images/智驾兜底论/scene_3_1_right.png"), showFrom: 2 }} anchors={[]} />
            </Sequence>
            <Sequence from={101} durationInFrames={207}>
                <BWPanelGrid content={[{"text": "它算准了普通人不看条款。", "startFrame": 0, "durationFrames": 55}, {"text": "算准了大家只看标题。", "startFrame": 54, "durationFrames": 56}, {"text": "算准了“兜底”两个字，", "startFrame": 110, "durationFrames": 50}, {"text": "比“智驾险”更好听。", "startFrame": 159, "durationFrames": 48}]} totalDurationFrames={207} panels={[{ src: staticFile("images/智驾兜底论/scene_3_2_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { src: staticFile("images/智驾兜底论/scene_3_2_img1.png"), showFrom: 1, enterEffect: "slideLeft" }, { src: staticFile("images/智驾兜底论/scene_3_2_img2.png"), showFrom: 2, enterEffect: "zoomIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={308} durationInFrames={289}>
                <BWCauseChain content={[{"text": "于是它把一个付费权益。", "startFrame": 0, "durationFrames": 54}, {"text": "包装成厂家担当。", "startFrame": 53, "durationFrames": 43}, {"text": "把一个二层补偿。", "startFrame": 96, "durationFrames": 44}, {"text": "包装成无忧驾驶。", "startFrame": 139, "durationFrames": 51}, {"text": "把一个低概率场景。", "startFrame": 189, "durationFrames": 44}, {"text": "包装成日常安全感。", "startFrame": 233, "durationFrames": 55}]} totalDurationFrames={289} layout={"horizontal"} nodes={[{ label: "假装担当", imageSrc: staticFile("images/智驾兜底论/scene_3_3_img0.png"), showFrom: 1, enterEffect: "fadeIn" }, { label: "假装无忧", imageSrc: staticFile("images/智驾兜底论/scene_3_3_img1.png"), showFrom: 3, enterEffect: "fadeIn" }, { label: "假装安全感", imageSrc: staticFile("images/智驾兜底论/scene_3_3_img2.png"), showFrom: 5, enterEffect: "fadeIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={597} durationInFrames={91}>
                <BWCognitiveShift content={[{"text": "这不是信息解释。", "startFrame": 0, "durationFrames": 42}, {"text": "这是宣传升级。", "startFrame": 41, "durationFrames": 50}]} totalDurationFrames={91} notText={"信息解释"} butText={"宣传升级"} butSrc={staticFile("images/智驾兜底论/scene_3_4.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Sequence from={688} durationInFrames={88}>
                <BWMagnifyingGlass content={[{"text": "什么才叫兜底？", "startFrame": 0, "durationFrames": 38}, {"text": "比亚迪已经打过样了。", "startFrame": 37, "durationFrames": 51}]} totalDurationFrames={88} anchors={[{"text": "比亚迪", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={776} durationInFrames={249}>
                <BWMethodStack content={[{"text": "用户不用先动自己的保险。", "startFrame": 0, "durationFrames": 63}, {"text": "不影响自己的保费权益。", "startFrame": 62, "durationFrames": 54}, {"text": "厂家直接承担对应责任。", "startFrame": 115, "durationFrames": 65}, {"text": "这才符合普通人对“兜底”的直觉。", "startFrame": 180, "durationFrames": 69}]} totalDurationFrames={249} title={"真正的兜底"} imageSrc={staticFile("images/智驾兜底论/scene_3_6.png")} notes={[{"text": "不用动自己的保险", "showFrom": 0}, {"text": "不影响保费权益", "showFrom": 1}, {"text": "厂家直接担责", "showFrom": 2}]} anchors={[]} />
            </Sequence>
            <Sequence from={1025} durationInFrames={121}>
                <BWSplitCompare content={[{"text": "消费者不是不能接受保险。", "startFrame": 0, "durationFrames": 62}, {"text": "也不是不能接受付费权益。", "startFrame": 61, "durationFrames": 59}]} totalDurationFrames={121} leftSrc={staticFile("images/智驾兜底论/scene_3_7_left.png")} rightSrc={staticFile("images/智驾兜底论/scene_3_7_right.png")} leftLabel={"接受保险"} rightLabel={"付费权益"} leftShowFrom={0} rightShowFrom={1} anchors={[]} />
            </Sequence>
            <Sequence from={1146} durationInFrames={113}>
                <BWTextFocus content={[{"text": "但是不能接受，", "startFrame": 0, "durationFrames": 33}, {"text": "你用一个高尚的词，", "startFrame": 32, "durationFrames": 38}, {"text": "来掩盖一个精明的账本。", "startFrame": 69, "durationFrames": 43}]} totalDurationFrames={113} coreSentence={[{"text": "但是不能接受，", "showFrom": 0}, {"text": "你用一个高尚的词，", "showFrom": 1}, {"text": "来掩盖一个精明的账本。", "showFrom": 2}]} coreSentenceAnchors={[{"coreSentenceAnchor": "高尚的词", "color": "#EF4444"}, {"coreSentenceAnchor": "精明的账本", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={1259} durationInFrames={74}>
                <BWTextFocus content={[{"text": "某些营销号，", "startFrame": 0, "durationFrames": 33}, {"text": "你有点良心吧！", "startFrame": 32, "durationFrames": 41}]} totalDurationFrames={74} coreSentence={[{"text": "某些营销号，", "showFrom": 0}, {"text": "你有点良心吧！", "showFrom": 1, "endFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "良心", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/智驾兜底论/scene_3/scene_3.mp3")} />
        </AbsoluteFill>
    );
};
