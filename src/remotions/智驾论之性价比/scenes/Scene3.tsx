import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWBeatSequence, BWKpiHero, BWSplitCompare, BWStatCompare, BWTextFocus } from "../../../components";

// 反转：极端天气的致命谬误
const SCENE_DURATION = 225 + 244 + 115 + 144 + 118 + 113 + 98;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={225}>
                <BWSplitCompare content={[{"text": "你要知道，", "startFrame": 0, "durationFrames": 24}, {"text": "单纯用视觉，", "startFrame": 24, "durationFrames": 36}, {"text": "已经可以解决正常人类可以驾驶的场景。", "startFrame": 60, "durationFrames": 71}, {"text": "多出来的雷达只是为了避免极端的视野障碍问题。", "startFrame": 130, "durationFrames": 94}]} totalDurationFrames={225} leftSrc={staticFile("images/智驾论之性价比/scene_3_1_left.png")} rightSrc={staticFile("images/智驾论之性价比/scene_3_1_right.png")} leftLabel={"纯视觉"} rightLabel={"毫米波雷达"} leftShowFrom={1} rightShowFrom={3} anchors={[]} />
            </Sequence>
            <Sequence from={225} durationInFrames={244}>
                <BWStatCompare content={[{"text": "而根据气象数据，", "startFrame": 0, "durationFrames": 38}, {"text": "影响驾驶的极端天气，", "startFrame": 37, "durationFrames": 57}, {"text": "在中国大部分地区，", "startFrame": 93, "durationFrames": 41}, {"text": "一年不超过5天。", "startFrame": 134, "durationFrames": 40}, {"text": "真正需要上路的，", "startFrame": 174, "durationFrames": 36}, {"text": "可能不到2天。", "startFrame": 210, "durationFrames": 34}]} totalDurationFrames={244} bars={[{"label": "极端天气天数", "value": 5, "showFrom": 3}, {"label": "实际需上路天数", "value": 2, "showFrom": 5}]} anchors={[]} />
            </Sequence>
            <Sequence from={469} durationInFrames={115}>
                <BWKpiHero content={[{"text": "2除以365天，", "startFrame": 0, "durationFrames": 53}, {"text": "大约是0.55%。", "startFrame": 52, "durationFrames": 63}]} totalDurationFrames={115} blocks={[{"value": 2, "suffix": "/365", "showFrom": 0}, {"value": 0.55, "suffix": "%", "label": "大约是", "showFrom": 1, "decimalPlaces": 2}]} anchors={[]} />
            </Sequence>
            <Sequence from={584} durationInFrames={144}>
                <BWTextFocus content={[{"text": "你愿意为0.55%的场景，", "startFrame": 0, "durationFrames": 77}, {"text": "多付一倍的智驾溢价吗？", "startFrame": 76, "durationFrames": 68}]} totalDurationFrames={144} coreSentence={[{"text": "你愿意为0.55%的场景，", "showFrom": 0, "endFrom": 0}, {"text": "多付一倍的智驾溢价吗？", "showFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "0.55%", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={728} durationInFrames={118}>
                <BWBeatSequence content={[{"text": "在人类都不能开的极端天气下，", "startFrame": 0, "durationFrames": 69}, {"text": "这个车你就非开不可吗？", "startFrame": 68, "durationFrames": 50}]} totalDurationFrames={118} stages={[{ imageSrc: staticFile("images/智驾论之性价比/scene_3_5_img0.png"), enterEffect: "breathe", tone: "alert", showFrom: 0 }, { imageSrc: staticFile("images/智驾论之性价比/scene_3_5_img1.png"), enterEffect: "zoomIn", tone: "alert", showFrom: 1 }]} anchors={[{"text": "非开不可吗", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": null}]} />
            </Sequence>
            <Sequence from={846} durationInFrames={113}>
                <BWTextFocus content={[{"text": "你为的，", "startFrame": 0, "durationFrames": 22}, {"text": "是你可以选择不开车的那0.55%。", "startFrame": 21, "durationFrames": 91}]} totalDurationFrames={113} coreSentence={[{"text": "你为的，", "showFrom": 0, "endFrom": 0}, {"text": "是你可以选择不开车的那0.55%", "showFrom": 1, "endFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "0.55%", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={959} durationInFrames={98}>
                <BWTextFocus content={[{"text": "而代价，", "startFrame": 0, "durationFrames": 22}, {"text": "是你每次买车都要翻倍的真金白银。", "startFrame": 21, "durationFrames": 76}]} totalDurationFrames={98} coreSentence={[{"text": "而代价，", "showFrom": 0}, {"text": "是你每次买车都要翻倍的真金白银", "showFrom": 1}]} coreSentenceAnchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/智驾论之性价比/scene_3/scene_3.mp3")} />
        </AbsoluteFill>
    );
};
