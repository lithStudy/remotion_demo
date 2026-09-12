import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile, Freeze } from "remotion";
import { BWCenterFocus, BWMagnifyingGlass, BWPanelGrid, BWTextFocus } from "../../../components";

// 总结
const SCENE_DURATION = 142 + 148 + 152 + 210 + 160 + 179;

export const calculateScene5Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene5: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={142}>
                <BWMagnifyingGlass content={[{"text": "讲到这里，", "startFrame": 0, "durationFrames": 24}, {"text": "有些人会急。", "startFrame": 24, "durationFrames": 40}, {"text": "难道小米不能被质疑吗？", "startFrame": 63, "durationFrames": 46}, {"text": "当然不是。", "startFrame": 108, "durationFrames": 33}]} totalDurationFrames={142} anchors={[{"text": "不能被质疑", "showFrom": 2, "color": "#EF4444", "anim": "popIn", "audioEffect": "ping"}, {"text": "当然不是", "showFrom": 3, "color": "#111111", "anim": "popIn", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={142} durationInFrames={148}>
                <BWPanelGrid content={[{"text": "车企当然要被质疑。", "startFrame": 0, "durationFrames": 45}, {"text": "安全当然要被追问。", "startFrame": 44, "durationFrames": 41}, {"text": "每一起事故，", "startFrame": 85, "durationFrames": 28}, {"text": "都该查清责任。", "startFrame": 112, "durationFrames": 35}]} totalDurationFrames={148} panels={[{ src: staticFile("images/小米事故论/scene_5_2_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { src: staticFile("images/小米事故论/scene_5_2_img1.png"), showFrom: 1, enterEffect: "fadeIn" }, { src: staticFile("images/小米事故论/scene_5_2_img2.png"), showFrom: 3, enterEffect: "fadeIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={290} durationInFrames={152}>
                <BWPanelGrid content={[{"text": "尤其是辅助驾驶。", "startFrame": 0, "durationFrames": 42}, {"text": "尤其是车门结构。", "startFrame": 41, "durationFrames": 43}, {"text": "尤其是碰撞后的逃生窗口。", "startFrame": 83, "durationFrames": 68}]} totalDurationFrames={152} panels={[{ src: staticFile("images/小米事故论/scene_5_3_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { src: staticFile("images/小米事故论/scene_5_3_img1.png"), showFrom: 1, enterEffect: "fadeIn" }, { src: staticFile("images/小米事故论/scene_5_3_img2.png"), showFrom: 2, enterEffect: "fadeIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={442} durationInFrames={210}>
                <BWCenterFocus content={[{"text": "这些不是小问题。", "startFrame": 0, "durationFrames": 46}, {"text": "也不能被一句概率低，", "startFrame": 45, "durationFrames": 46}, {"text": "轻轻带过。", "startFrame": 91, "durationFrames": 33}, {"text": "但质疑也要有尺子。", "startFrame": 124, "durationFrames": 45}, {"text": "愤怒也要有分母。", "startFrame": 169, "durationFrames": 41}]} totalDurationFrames={210} imageSrc={staticFile("images/小米事故论/scene_5_4.png")} enterEffect="fadeIn" anchors={[{"text": "尺子", "showFrom": 3, "color": "#000000", "anim": "popIn", "audioEffect": null}, {"text": "分母", "showFrom": 4, "color": "#EF4444", "anim": "spring", "audioEffect": null}]} />
            </Sequence>
            <Sequence from={652} durationInFrames={160}>
                <BWTextFocus content={[{"text": "看事故，要看原因。", "startFrame": 0, "durationFrames": 48}, {"text": "看安全，要看概率。", "startFrame": 48, "durationFrames": 54}, {"text": "看质量，要看数据。", "startFrame": 101, "durationFrames": 58}]} totalDurationFrames={160} coreSentence={[{"text": "看事故，要看原因。", "showFrom": 0}, {"text": "看安全，要看概率。", "showFrom": 1}, {"text": "看质量，要看数据。", "showFrom": 2}]} coreSentenceAnchors={[{"coreSentenceAnchor": "原因", "color": "#EF4444"}, {"coreSentenceAnchor": "概率", "color": "#EF4444"}, {"coreSentenceAnchor": "数据", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={812} durationInFrames={154}>
                <BWTextFocus content={[{"text": "否则，", "startFrame": 0, "durationFrames": 23}, {"text": "你不是在寻找真相。", "startFrame": 22, "durationFrames": 40}, {"text": "你只是在被算法和负面营销，", "startFrame": 62, "durationFrames": 60}, {"text": "投喂情绪。", "startFrame": 122, "durationFrames": 31}]} totalDurationFrames={154} coreSentence={[{"text": "否则，", "showFrom": 0, "endFrom": 0}, {"text": "你不是在寻找真相。", "showFrom": 1}, {"text": "你只是在被算法和负面营销", "showFrom": 2}, {"text": "投喂情绪", "showFrom": 3}]} coreSentenceAnchors={[{"coreSentenceAnchor": "寻找真相", "color": "#EF4444"}, {"coreSentenceAnchor": "投喂情绪", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={966} durationInFrames={25}>
                <Freeze frame={153}>
                    <BWTextFocus content={[{"text": "否则，", "startFrame": 0, "durationFrames": 23}, {"text": "你不是在寻找真相。", "startFrame": 22, "durationFrames": 40}, {"text": "你只是在被算法和负面营销，", "startFrame": 62, "durationFrames": 60}, {"text": "投喂情绪。", "startFrame": 122, "durationFrames": 31}]} totalDurationFrames={154} coreSentence={[{"text": "否则，", "showFrom": 0, "endFrom": 0}, {"text": "你不是在寻找真相。", "showFrom": 1}, {"text": "你只是在被算法和负面营销", "showFrom": 2}, {"text": "投喂情绪", "showFrom": 3}]} coreSentenceAnchors={[{"coreSentenceAnchor": "寻找真相", "color": "#EF4444"}, {"coreSentenceAnchor": "投喂情绪", "color": "#EF4444"}]} />
                </Freeze>
            </Sequence>
            <Audio src={staticFile("/audio/小米事故论/scene_5/scene_5.mp3")} />
        </AbsoluteFill>
    );
};
