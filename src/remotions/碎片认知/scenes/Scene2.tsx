import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift, BWSplitCompare } from "../../../components";

// 剖析
const SCENE_DURATION = 254 + 109 + 261 + 119 + 143 + 270 + 239;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={254}>
                <BWCenterFocus content={[{"text": "古人说“眼见为实”，", "startFrame": 0, "durationFrames": 47}, {"text": "是因为在过去，", "startFrame": 46, "durationFrames": 32}, {"text": "当你“眼见”一个事件时，", "startFrame": 78, "durationFrames": 44}, {"text": "你通常身处现场，", "startFrame": 122, "durationFrames": 43}, {"text": "拥有全息的视角和完整的时空感知。", "startFrame": 164, "durationFrames": 89}]} totalDurationFrames={254} imageSrc={staticFile("images/碎片认知/scene_2_1.png")} enterEffect="fadeIn" anchors={[{"text": "眼见为实", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "时空感知", "showFrom": 4, "color": "#000000", "anim": "popIn", "audioEffect": null}]} />
            </Sequence>
            <Sequence from={254} durationInFrames={109}>
                <BWCognitiveShift content={[{"text": "但在今天，", "startFrame": 0, "durationFrames": 32}, {"text": "这句古语成了一个巨大的认知陷阱。", "startFrame": 31, "durationFrames": 77}]} totalDurationFrames={109} notText={"过去眼见为实"} butText={"今天认知陷阱"} butSrc={staticFile("images/碎片认知/scene_2_2.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Sequence from={363} durationInFrames={261}>
                <BWCenterFocus content={[{"text": "网民通过一块6英寸的屏幕，", "startFrame": 0, "durationFrames": 59}, {"text": "看了一个经过剪辑、", "startFrame": 58, "durationFrames": 42}, {"text": "配着惊悚BGM的5秒切片，", "startFrame": 100, "durationFrames": 77}, {"text": "就傲慢地认为自己掌握了全局。", "startFrame": 176, "durationFrames": 84}]} totalDurationFrames={261} imageSrc={staticFile("images/碎片认知/scene_2_3.png")} enterEffect="fadeIn" anchors={[{"text": "认知陷阱", "showFrom": 3, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={624} durationInFrames={119}>
                <BWCenterFocus content={[{"text": "这种媒介赋予我们的“虚假全知全能感”，", "startFrame": 0, "durationFrames": 78}, {"text": "是极其危险的。", "startFrame": 77, "durationFrames": 42}]} totalDurationFrames={119} imageSrc={staticFile("images/碎片认知/scene_2_4.png")} enterEffect="fadeIn" anchors={[{"text": "虚假全知", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={743} durationInFrames={143}>
                <BWCenterFocus content={[{"text": "视频和照片具有极强的欺骗性，", "startFrame": 0, "durationFrames": 74}, {"text": "因为它们看起来太像“客观记录”了。", "startFrame": 73, "durationFrames": 70}]} totalDurationFrames={143} imageSrc={staticFile("images/碎片认知/scene_2_5.png")} enterEffect="fadeIn" anchors={[{"text": "欺骗性", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "客观记录", "showFrom": 1, "color": "#000000", "anim": "slideUp", "audioEffect": null}]} />
            </Sequence>
            <Sequence from={886} durationInFrames={270}>
                <BWSplitCompare content={[{"text": "文字带有明显的作者主观色彩，", "startFrame": 0, "durationFrames": 77}, {"text": "读者天然会有防备心；", "startFrame": 76, "durationFrames": 58}, {"text": "但影像直接冲击视觉，", "startFrame": 134, "durationFrames": 55}, {"text": "让人误以为这就是未经加工的现实。", "startFrame": 188, "durationFrames": 81}]} totalDurationFrames={270} leftSrc={staticFile("images/碎片认知/scene_2_6_left.png")} rightSrc={staticFile("images/碎片认知/scene_2_6_right.png")} leftLabel={"文字"} rightLabel={"影像"} leftShowFrom={0} rightShowFrom={2} anchors={[]} />
            </Sequence>
            <Sequence from={1156} durationInFrames={239}>
                <BWCenterFocus content={[{"text": "当人们看着起火的画面时，", "startFrame": 0, "durationFrames": 54}, {"text": "他们忘记了：", "startFrame": 53, "durationFrames": 31}, {"text": "镜头指向哪里、", "startFrame": 84, "durationFrames": 38}, {"text": "何时开机、", "startFrame": 121, "durationFrames": 29}, {"text": "何时关机，", "startFrame": 149, "durationFrames": 33}, {"text": "本身就是一种主观的筛选。", "startFrame": 182, "durationFrames": 57}]} totalDurationFrames={239} imageSrc={staticFile("images/碎片认知/scene_2_7.png")} enterEffect="fadeIn" anchors={[{"text": "主观筛选", "showFrom": 5, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/碎片认知/scene_2/scene_2.mp3")} />
        </AbsoluteFill>
    );
};
