import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift, BWSplitCompare } from "../../../components";

// 剖析
const SCENE_DURATION = 258 + 96 + 232 + 118 + 136 + 236 + 246;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={258}>
                <BWCenterFocus content={[{"text": "古人说“眼见为实”，", "startFrame": 0, "durationFrames": 43}, {"text": "是因为在过去，", "startFrame": 42, "durationFrames": 35}, {"text": "当你“眼见”一个事件时，", "startFrame": 77, "durationFrames": 50}, {"text": "你通常身处现场，", "startFrame": 126, "durationFrames": 46}, {"text": "拥有全息的视角和完整的时空感知。", "startFrame": 172, "durationFrames": 86}]} totalDurationFrames={258} imageSrc={staticFile("images/碎片认知/scene_2_1.png")} enterEffect="fadeIn" anchors={[{"text": "眼见为实", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "时空感知", "showFrom": 4, "color": "#000000", "anim": "popIn", "audioEffect": null}]} />
            </Sequence>
            <Sequence from={258} durationInFrames={96}>
                <BWCognitiveShift content={[{"text": "但在今天，", "startFrame": 0, "durationFrames": 27}, {"text": "这句古语成了一个巨大的认知陷阱。", "startFrame": 26, "durationFrames": 70}]} totalDurationFrames={96} notText={"过去眼见为实"} butText={"今天认知陷阱"} butSrc={staticFile("images/碎片认知/scene_2_2.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Sequence from={354} durationInFrames={232}>
                <BWCenterFocus content={[{"text": "网民通过一块6英寸的屏幕，", "startFrame": 0, "durationFrames": 64}, {"text": "看了一个经过剪辑、", "startFrame": 63, "durationFrames": 42}, {"text": "配着惊悚BGM的5秒切片，", "startFrame": 104, "durationFrames": 60}, {"text": "就傲慢地认为自己掌握了全局。", "startFrame": 164, "durationFrames": 67}]} totalDurationFrames={232} imageSrc={staticFile("images/碎片认知/scene_2_3.png")} enterEffect="fadeIn" anchors={[{"text": "认知陷阱", "showFrom": 3, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={586} durationInFrames={118}>
                <BWCenterFocus content={[{"text": "这种媒介赋予我们的“虚假全知全能感”，", "startFrame": 0, "durationFrames": 80}, {"text": "是极其危险的。", "startFrame": 79, "durationFrames": 39}]} totalDurationFrames={118} imageSrc={staticFile("images/碎片认知/scene_2_4.png")} enterEffect="fadeIn" anchors={[{"text": "虚假全知", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={704} durationInFrames={136}>
                <BWCenterFocus content={[{"text": "视频和照片具有极强的欺骗性，", "startFrame": 0, "durationFrames": 71}, {"text": "因为它们看起来太像“客观记录”了。", "startFrame": 70, "durationFrames": 65}]} totalDurationFrames={136} imageSrc={staticFile("images/碎片认知/scene_2_5.png")} enterEffect="fadeIn" anchors={[{"text": "欺骗性", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "客观记录", "showFrom": 1, "color": "#000000", "anim": "slideUp", "audioEffect": null}]} />
            </Sequence>
            <Sequence from={840} durationInFrames={236}>
                <BWSplitCompare content={[{"text": "文字带有明显的作者主观色彩，", "startFrame": 0, "durationFrames": 63}, {"text": "读者天然会有防备心；", "startFrame": 62, "durationFrames": 50}, {"text": "但影像直接冲击视觉，", "startFrame": 111, "durationFrames": 48}, {"text": "让人误以为这就是未经加工的现实。", "startFrame": 159, "durationFrames": 77}]} totalDurationFrames={236} leftSrc={staticFile("images/碎片认知/scene_2_6_left.png")} rightSrc={staticFile("images/碎片认知/scene_2_6_right.png")} leftLabel={"文字"} rightLabel={"影像"} leftShowFrom={0} rightShowFrom={2} anchors={[]} />
            </Sequence>
            <Sequence from={1076} durationInFrames={246}>
                <BWCenterFocus content={[{"text": "当人们看着起火的画面时，", "startFrame": 0, "durationFrames": 55}, {"text": "他们忘记了：", "startFrame": 54, "durationFrames": 31}, {"text": "镜头指向哪里、", "startFrame": 85, "durationFrames": 39}, {"text": "何时开机、", "startFrame": 123, "durationFrames": 32}, {"text": "何时关机，", "startFrame": 154, "durationFrames": 30}, {"text": "本身就是一种主观的筛选。", "startFrame": 184, "durationFrames": 62}]} totalDurationFrames={246} imageSrc={staticFile("images/碎片认知/scene_2_7.png")} enterEffect="fadeIn" anchors={[{"text": "主观筛选", "showFrom": 5, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/碎片认知/scene_2/scene_2.mp3")} />
        </AbsoluteFill>
    );
};
