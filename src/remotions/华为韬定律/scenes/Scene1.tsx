import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCaseBreakdown, BWCenterFocus, BWCognitiveShift, BWMagnifyingGlass, BWPanelGrid, BWTextFocus } from "../../../components";

// 引入·科学神话
const SCENE_DURATION = 181 + 184 + 123 + 149 + 95 + 218 + 223;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={181}>
                <BWTextFocus content={[{"text": "华为韬定律，", "startFrame": 0, "durationFrames": 40}, {"text": "最不要脸的地方在于，", "startFrame": 39, "durationFrames": 50}, {"text": "它把普通工程题，", "startFrame": 88, "durationFrames": 44}, {"text": "包装成了科学神话。", "startFrame": 132, "durationFrames": 49}]} totalDurationFrames={181} coreSentence={[{"text": "华为韬定律，", "showFrom": 0, "endFrom": 3}, {"text": "把普通工程题，", "showFrom": 2, "endFrom": 3}, {"text": "包装成了科学神话。", "showFrom": 3, "endFrom": 3}]} coreSentenceAnchors={[{"coreSentenceAnchor": "韬定律", "color": "#EF4444"}, {"coreSentenceAnchor": "科学神话", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={181} durationInFrames={184}>
                <BWCenterFocus content={[{"text": "很多人一听定律，", "startFrame": 0, "durationFrames": 32}, {"text": "就肃然起敬。", "startFrame": 31, "durationFrames": 36}, {"text": "牛顿有定律。", "startFrame": 67, "durationFrames": 35}, {"text": "摩尔有定律。", "startFrame": 102, "durationFrames": 29}, {"text": "现在华为也有定律？", "startFrame": 130, "durationFrames": 54}]} totalDurationFrames={184} imageSrc={staticFile("images/华为韬定律/scene_1_2.png")} enterEffect="fadeIn" anchors={[{"text": "定律", "showFrom": 0, "color": "#EF4444", "anim": "spring"}, {"text": "华为", "showFrom": 4, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={365} durationInFrames={123}>
                <BWCognitiveShift content={[{"text": "问题来了：", "startFrame": 0, "durationFrames": 32}, {"text": "它到底发现了新物理？", "startFrame": 31, "durationFrames": 43}, {"text": "还是换了个高级名字？", "startFrame": 74, "durationFrames": 48}]} totalDurationFrames={123} notText={"新物理发现"} butText={"高级包装"} butSrc={staticFile("images/华为韬定律/scene_1_3.png")} notContentIndex={1} butContentIndex={2} anchors={[]} />
            </Sequence>
            <Sequence from={488} durationInFrames={149}>
                <BWMagnifyingGlass content={[{"text": "我们先用生活话讲。", "startFrame": 0, "durationFrames": 43}, {"text": "你家厨房太小。", "startFrame": 42, "durationFrames": 35}, {"text": "你做饭很慢。", "startFrame": 77, "durationFrames": 35}, {"text": "正常办法是什么？", "startFrame": 112, "durationFrames": 36}]} totalDurationFrames={149} anchors={[{"text": "厨房太小", "showFrom": 1, "color": "#000000", "anim": "spring"}, {"text": "正常办法", "showFrom": 3, "color": "#EF4444", "anim": "popIn", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={637} durationInFrames={95}>
                <BWPanelGrid content={[{"text": "换更大的厨房。", "startFrame": 0, "durationFrames": 32}, {"text": "买更好的灶。", "startFrame": 31, "durationFrames": 29}, {"text": "优化动线。", "startFrame": 59, "durationFrames": 35}]} totalDurationFrames={95} panels={[{ src: staticFile("images/华为韬定律/scene_1_5_img0.png"), showFrom: 0, enterEffect: "slideLeft" }, { src: staticFile("images/华为韬定律/scene_1_5_img1.png"), showFrom: 1, enterEffect: "zoomIn" }, { src: staticFile("images/华为韬定律/scene_1_5_img2.png"), showFrom: 2, enterEffect: "fadeIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={732} durationInFrames={218}>
                <BWCaseBreakdown content={[{"text": "现在有人说，", "startFrame": 0, "durationFrames": 31}, {"text": "不用。", "startFrame": 30, "durationFrames": 18}, {"text": "我发明了一个厨房时间压缩定律。", "startFrame": 48, "durationFrames": 66}, {"text": "把锅叠起来。", "startFrame": 113, "durationFrames": 34}, {"text": "把碗挂起来。", "startFrame": 147, "durationFrames": 34}, {"text": "把灶台分层。", "startFrame": 181, "durationFrames": 36}]} totalDurationFrames={218} title={"厨房时间压缩定律"} imageSrc={staticFile("images/华为韬定律/scene_1_6.png")} phases={[{"phaseLabel": "把锅叠起来。", "showFrom": 3}, {"phaseLabel": "把碗挂起来。", "showFrom": 4}, {"phaseLabel": "把灶台分层。", "showFrom": 5}]} />
            </Sequence>
            <Sequence from={950} durationInFrames={223}>
                <BWCognitiveShift content={[{"text": "听起来很高级。", "startFrame": 0, "durationFrames": 38}, {"text": "但本质是什么？", "startFrame": 37, "durationFrames": 38}, {"text": "还是厨房收纳。", "startFrame": 74, "durationFrames": 36}, {"text": "还是动线优化。", "startFrame": 110, "durationFrames": 40}, {"text": "不是新物理。", "startFrame": 149, "durationFrames": 36}, {"text": "不是新定律。", "startFrame": 185, "durationFrames": 37}]} totalDurationFrames={223} notText={"新物理与定律"} butText={"厨房收纳与动线优化"} butSrc={staticFile("images/华为韬定律/scene_1_8.png")} notContentIndex={4} butContentIndex={2} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/华为韬定律/scene_1/scene_1.mp3")} />
        </AbsoluteFill>
    );
};
