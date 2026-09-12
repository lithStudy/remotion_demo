import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWMagnifyingGlass, BWPanelGrid, BWTextFocus } from "../../../components";

// 揭示·监管缺位
const SCENE_DURATION = 227 + 244 + 172 + 126 + 138;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={227}>
                <BWPanelGrid content={[{"text": "但是现在，", "startFrame": 0, "durationFrames": 26}, {"text": "三鹿奶粉要靠境外通报。", "startFrame": 25, "durationFrames": 54}, {"text": "煤油车装食用油要靠调查记者举报。", "startFrame": 78, "durationFrames": 80}, {"text": "泡药杨梅要靠自媒体举报。", "startFrame": 157, "durationFrames": 69}]} totalDurationFrames={227} panels={[{ src: staticFile("images/食品安全/scene_2_1_img0.png"), showFrom: 1, enterEffect: "fadeIn" }, { src: staticFile("images/食品安全/scene_2_1_img1.png"), showFrom: 2, enterEffect: "fadeIn" }, { src: staticFile("images/食品安全/scene_2_1_img2.png"), showFrom: 3, enterEffect: "fadeIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={227} durationInFrames={244}>
                <BWCenterFocus content={[{"text": "这些明显是非个例的广泛性问题，", "startFrame": 0, "durationFrames": 78}, {"text": "不仅要靠其他人来暴露，", "startFrame": 77, "durationFrames": 53}, {"text": "就算暴露了，也往往只是抓一两个典型，震慑不足。", "startFrame": 129, "durationFrames": 114}]} totalDurationFrames={244} imageSrc={staticFile("images/食品安全/scene_2_2.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={471} durationInFrames={172}>
                <BWPanelGrid content={[{"text": "既没有给予匹配消费者损失的补偿。", "startFrame": 0, "durationFrames": 83}, {"text": "也没有对商家或者整个行业震摄性的惩罚。", "startFrame": 82, "durationFrames": 89}]} totalDurationFrames={172} panels={[{ src: staticFile("images/食品安全/scene_2_4_img0.png"), showFrom: 0, enterEffect: "zoomIn" }, { src: staticFile("images/食品安全/scene_2_4_img1.png"), showFrom: 1, enterEffect: "slideBottom" }]} anchors={[]} />
            </Sequence>
            <Sequence from={643} durationInFrames={126}>
                <BWMagnifyingGlass content={[{"text": "更重要的是，", "startFrame": 0, "durationFrames": 33}, {"text": "监管缺位之后，也缺少结果导向的闭环。", "startFrame": 32, "durationFrames": 93}]} totalDurationFrames={126} anchors={[{"text": "监管缺位", "showFrom": 1, "color": "#EF4444", "anim": "popIn", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={769} durationInFrames={138}>
                <BWTextFocus content={[{"text": "如果一个机构不必为结果负责，", "startFrame": 0, "durationFrames": 64}, {"text": "结果导向的责任机制就很难落地。", "startFrame": 63, "durationFrames": 74}]} totalDurationFrames={138} coreSentence={[{"text": "如果一个机构不必为结果负责，", "showFrom": 0}, {"text": "结果导向的责任机制就很难落地。", "showFrom": 1, "endFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "不必为结果负责", "color": "#EF4444"}, {"coreSentenceAnchor": "很难落地", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/食品安全/scene_2/scene_2.mp3")} />
        </AbsoluteFill>
    );
};
