import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCauseChain, BWCenterFocus, BWCognitiveShift, BWMagnifyingGlass, BWPanelGrid, BWTextFocus } from "../../../components";

// 引入·谁更该跪
const SCENE_DURATION = 103 + 191 + 188 + 267 + 173 + 113 + 116 + 59 + 98 + 98;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={103}>
                <BWTextFocus content={[{"text": "你觉得赵构和秦桧，", "startFrame": 0, "durationFrames": 43}, {"text": "谁更应该跪在岳飞的墓前？", "startFrame": 42, "durationFrames": 60}]} totalDurationFrames={103} coreSentence={[{"text": "你觉得赵构和秦桧，", "showFrom": 0}, {"text": "谁更应该跪在岳飞的墓前？", "showFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "岳飞的墓", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={103} durationInFrames={191}>
                <BWCenterFocus content={[{"text": "千百年来。", "startFrame": 0, "durationFrames": 30}, {"text": "西湖边的秦桧铁像 受尽唾骂。", "startFrame": 29, "durationFrames": 83}, {"text": "秦桧杀害岳飞，", "startFrame": 112, "durationFrames": 40}, {"text": "确实是罪有应得。", "startFrame": 151, "durationFrames": 40}]} totalDurationFrames={191} imageSrc={staticFile("images/权利与责任/scene_1_2.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={294} durationInFrames={188}>
                <BWMagnifyingGlass content={[{"text": "但问题来了。", "startFrame": 0, "durationFrames": 33}, {"text": "如果没有最高统治者的默许。", "startFrame": 32, "durationFrames": 64}, {"text": "一个文臣。", "startFrame": 96, "durationFrames": 30}, {"text": "凭什么能夺走抗金统帅的性命？", "startFrame": 125, "durationFrames": 63}]} totalDurationFrames={188} anchors={[{"text": "最高统治者的默许", "showFrom": 1, "color": "#EF4444", "anim": "popIn", "audioEffect": "ping"}, {"text": "凭什么", "showFrom": 3, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={482} durationInFrames={267}>
                <BWPanelGrid content={[{"text": "整件事，", "startFrame": 0, "durationFrames": 25}, {"text": "要么赵构有意授权，", "startFrame": 24, "durationFrames": 43}, {"text": "防止二圣归来。", "startFrame": 66, "durationFrames": 36}, {"text": "要么赵构昏庸无道，", "startFrame": 101, "durationFrames": 46}, {"text": "听信谗言。", "startFrame": 147, "durationFrames": 36}, {"text": "要么赵构御下无方，", "startFrame": 183, "durationFrames": 53}, {"text": "酿成祸事。", "startFrame": 235, "durationFrames": 31}]} totalDurationFrames={267} panels={[{ src: staticFile("images/权利与责任/scene_1_4_img0.png"), showFrom: 1, enterEffect: "fadeIn" }, { src: staticFile("images/权利与责任/scene_1_4_img1.png"), showFrom: 3, enterEffect: "fadeIn" }, { src: staticFile("images/权利与责任/scene_1_4_img2.png"), showFrom: 5, enterEffect: "fadeIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={749} durationInFrames={173}>
                <BWCauseChain content={[{"text": "但不管哪个理由。", "startFrame": 0, "durationFrames": 36}, {"text": "既然赵构手握最高决策权，", "startFrame": 36, "durationFrames": 71}, {"text": "那么他都应该是最大责任承担者。", "startFrame": 106, "durationFrames": 67}]} totalDurationFrames={173} layout={"horizontal"} nodes={[{ label: "最高决策权", imageSrc: staticFile("images/权利与责任/scene_1_5_img0.png"), showFrom: 1 }, { label: "最大责任", imageSrc: staticFile("images/权利与责任/scene_1_5_img1.png"), showFrom: 2 }]} anchors={[{"text": "最大责任", "showFrom": 2, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={922} durationInFrames={113}>
                <BWCenterFocus content={[{"text": "他躲在权力帷幕的后面，", "startFrame": 0, "durationFrames": 51}, {"text": "却把千古骂名甩给了执行者。", "startFrame": 50, "durationFrames": 63}]} totalDurationFrames={113} imageSrc={staticFile("images/权利与责任/scene_1_6.png")} enterEffect="fadeIn" anchors={[{"text": "权力帷幕", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "woosh"}]} />
            </Sequence>
            <Sequence from={1035} durationInFrames={116}>
                <BWTextFocus content={[{"text": "如果决策者不需要为结果负责，", "startFrame": 0, "durationFrames": 62}, {"text": "那么决策者就能肆无忌惮。", "startFrame": 61, "durationFrames": 55}]} totalDurationFrames={116} coreSentence={[{"text": "如果决策者不需要为结果负责，", "showFrom": 0, "endFrom": 0}, {"text": "那么决策者就能肆无忌惮。", "showFrom": 1, "endFrom": 1}]} coreSentenceAnchors={[]} />
            </Sequence>
            <Sequence from={1151} durationInFrames={59}>
                <BWTextFocus content={[{"text": "权力越大。", "startFrame": 0, "durationFrames": 30}, {"text": "责任就越大。", "startFrame": 29, "durationFrames": 30}]} totalDurationFrames={59} coreSentence={[{"text": "权力越大。", "showFrom": 0, "endFrom": 0}, {"text": "责任就越大。", "showFrom": 1, "endFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "责任", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={1210} durationInFrames={98}>
                <BWCenterFocus content={[{"text": "让秦桧下跪。", "startFrame": 0, "durationFrames": 40}, {"text": "是老百姓对作恶者的惩罚。", "startFrame": 39, "durationFrames": 58}]} totalDurationFrames={98} imageSrc={staticFile("images/权利与责任/scene_1_9.png")} anchors={[]} />
            </Sequence>
            <Sequence from={1308} durationInFrames={98}>
                <BWCognitiveShift content={[{"text": "让赵构下跪。", "startFrame": 0, "durationFrames": 36}, {"text": "才是对权利与责任的看清。", "startFrame": 36, "durationFrames": 62}]} totalDurationFrames={98} notText={"惩罚作恶者"} butText={"权力与责任看清"} butSrc={staticFile("images/权利与责任/scene_1_10.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/权利与责任/scene_1/scene_1.mp3")} />
        </AbsoluteFill>
    );
};
