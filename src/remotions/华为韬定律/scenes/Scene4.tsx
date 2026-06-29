import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCaseBreakdown, BWPanelGrid, BWSplitCompare, BWTextFocus } from "../../../components";

// 揭示·定律革命
const SCENE_DURATION = 55 + 169 + 241 + 211;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={55}>
                <BWTextFocus content={[{"text": "这一步，非常关键。", "startFrame": 0, "durationFrames": 55}]} totalDurationFrames={55} coreSentence={[{"text": "这一步，非常关键", "showFrom": 0}]} coreSentenceAnchors={[]} />
            </Sequence>
            <Sequence from={55} durationInFrames={169}>
                <BWCaseBreakdown content={[{"text": "工程路线，", "startFrame": 0, "durationFrames": 31}, {"text": "可以讨论成本。", "startFrame": 30, "durationFrames": 32}, {"text": "可以讨论良率。", "startFrame": 62, "durationFrames": 29}, {"text": "可以讨论散热。", "startFrame": 90, "durationFrames": 42}, {"text": "可以讨论可靠性。", "startFrame": 131, "durationFrames": 38}]} totalDurationFrames={169} title={"工程路线多维"} imageSrc={staticFile("images/华为韬定律/scene_4_2.png")} phases={[{"phaseLabel": "讨论成本", "showFrom": 1}, {"phaseLabel": "讨论良率", "showFrom": 2}, {"phaseLabel": "讨论散热", "showFrom": 3}, {"phaseLabel": "讨论可靠性", "showFrom": 4}]} />
            </Sequence>
            <Sequence from={224} durationInFrames={241}>
                <BWPanelGrid content={[{"text": "但定律革命，", "startFrame": 0, "durationFrames": 27}, {"text": "不一样。", "startFrame": 26, "durationFrames": 21}, {"text": "它会让普通人误以为：", "startFrame": 46, "durationFrames": 40}, {"text": "我们已经改写规则了。", "startFrame": 86, "durationFrames": 44}, {"text": "我们已经绕过封锁了。", "startFrame": 129, "durationFrames": 48}, {"text": "我们已经追平先进制程了。", "startFrame": 177, "durationFrames": 64}]} totalDurationFrames={241} panels={[{ src: staticFile("images/华为韬定律/scene_4_4_img0.png"), showFrom: 3, enterEffect: "zoomIn" }, { src: staticFile("images/华为韬定律/scene_4_4_img1.png"), showFrom: 4, enterEffect: "slideLeft" }, { src: staticFile("images/华为韬定律/scene_4_4_img2.png"), showFrom: 5, enterEffect: "fadeIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={465} durationInFrames={211}>
                <BWSplitCompare content={[{"text": "这就很危险，", "startFrame": 0, "durationFrames": 33}, {"text": "这会让很多人陷入一种盲目的自大之中，", "startFrame": 32, "durationFrames": 86}, {"text": "以井底之蛙的视角自以为看遍了整个世界。", "startFrame": 117, "durationFrames": 93}]} totalDurationFrames={211} leftSrc={staticFile("images/华为韬定律/scene_4_5_left.png")} rightSrc={staticFile("images/华为韬定律/scene_4_5_right.png")} leftLabel={"盲目自大"} rightLabel={"井底视角"} leftShowFrom={1} rightShowFrom={2} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/华为韬定律/scene_4/scene_4.mp3")} />
        </AbsoluteFill>
    );
};
