import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWMagnifyingGlass, BWPanelGrid, BWTextFocus } from "../../../components";

// 总结
const SCENE_DURATION = 140 + 150 + 144 + 201 + 159 + 153;

export const calculateScene5Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene5: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={140}>
                <BWMagnifyingGlass content={[{"text": "讲到这里，", "startFrame": 0, "durationFrames": 26}, {"text": "有些人会急。", "startFrame": 25, "durationFrames": 38}, {"text": "难道小米不能被质疑吗？", "startFrame": 62, "durationFrames": 45}, {"text": "当然不是。", "startFrame": 106, "durationFrames": 33}]} totalDurationFrames={140} anchors={[{"text": "不能被质疑", "showFrom": 2, "color": "#EF4444", "anim": "popIn", "audioEffect": "ping"}, {"text": "当然不是", "showFrom": 3, "color": "#111111", "anim": "popIn", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={140} durationInFrames={150}>
                <BWPanelGrid content={[{"text": "车企当然要被质疑。", "startFrame": 0, "durationFrames": 44}, {"text": "安全当然要被追问。", "startFrame": 43, "durationFrames": 42}, {"text": "每一起事故，", "startFrame": 84, "durationFrames": 33}, {"text": "都该查清责任。", "startFrame": 117, "durationFrames": 32}]} totalDurationFrames={150} panels={[{ src: staticFile("images/小米事故论/scene_5_2_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { src: staticFile("images/小米事故论/scene_5_2_img1.png"), showFrom: 1, enterEffect: "fadeIn" }, { src: staticFile("images/小米事故论/scene_5_2_img2.png"), showFrom: 3, enterEffect: "fadeIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={290} durationInFrames={144}>
                <BWPanelGrid content={[{"text": "尤其是辅助驾驶。", "startFrame": 0, "durationFrames": 41}, {"text": "尤其是车门结构。", "startFrame": 40, "durationFrames": 42}, {"text": "尤其是碰撞后的逃生窗口。", "startFrame": 81, "durationFrames": 63}]} totalDurationFrames={144} panels={[{ src: staticFile("images/小米事故论/scene_5_3_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { src: staticFile("images/小米事故论/scene_5_3_img1.png"), showFrom: 1, enterEffect: "fadeIn" }, { src: staticFile("images/小米事故论/scene_5_3_img2.png"), showFrom: 2, enterEffect: "fadeIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={434} durationInFrames={201}>
                <BWCenterFocus content={[{"text": "这些不是小问题。", "startFrame": 0, "durationFrames": 40}, {"text": "也不能被一句概率低，", "startFrame": 39, "durationFrames": 42}, {"text": "轻轻带过。", "startFrame": 80, "durationFrames": 27}, {"text": "但质疑也要有尺子。", "startFrame": 106, "durationFrames": 45}, {"text": "愤怒也要有分母。", "startFrame": 151, "durationFrames": 50}]} totalDurationFrames={201} imageSrc={staticFile("images/小米事故论/scene_5_4.png")} enterEffect="fadeIn" anchors={[{"text": "尺子", "showFrom": 3, "color": "#000000", "anim": "popIn", "audioEffect": null}, {"text": "分母", "showFrom": 4, "color": "#EF4444", "anim": "spring", "audioEffect": null}]} />
            </Sequence>
            <Sequence from={635} durationInFrames={159}>
                <BWTextFocus content={[{"text": "看事故，要看原因。", "startFrame": 0, "durationFrames": 48}, {"text": "看安全，要看概率。", "startFrame": 47, "durationFrames": 56}, {"text": "看质量，要看数据。", "startFrame": 102, "durationFrames": 56}]} totalDurationFrames={159} coreSentence={[{"text": "看事故，要看原因。", "showFrom": 0}, {"text": "看安全，要看概率。", "showFrom": 1}, {"text": "看质量，要看数据。", "showFrom": 2}]} coreSentenceAnchors={[{"coreSentenceAnchor": "原因", "color": "#EF4444"}, {"coreSentenceAnchor": "概率", "color": "#EF4444"}, {"coreSentenceAnchor": "数据", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={794} durationInFrames={153}>
                <BWTextFocus content={[{"text": "否则，", "startFrame": 0, "durationFrames": 23}, {"text": "你不是在寻找真相。", "startFrame": 22, "durationFrames": 38}, {"text": "你只是在被算法和负面营销，", "startFrame": 60, "durationFrames": 62}, {"text": "投喂情绪。", "startFrame": 121, "durationFrames": 32}]} totalDurationFrames={153} coreSentence={[{"text": "否则，", "showFrom": 0, "endFrom": 0}, {"text": "你不是在寻找真相。", "showFrom": 1}, {"text": "你只是在被算法和负面营销", "showFrom": 2}, {"text": "投喂情绪", "showFrom": 3}]} coreSentenceAnchors={[{"coreSentenceAnchor": "寻找真相", "color": "#EF4444"}, {"coreSentenceAnchor": "投喂情绪", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/小米事故论/scene_5/scene_5.mp3")} />
        </AbsoluteFill>
    );
};
