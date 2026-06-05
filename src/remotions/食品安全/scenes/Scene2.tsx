import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWMagnifyingGlass, BWPanelGrid, BWTextFocus } from "../../../components";

// 揭示·监管缺位
const SCENE_DURATION = 266 + 244 + 168 + 100 + 129;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={266}>
                <BWPanelGrid content={[{"text": "但是现在，", "startFrame": 0, "durationFrames": 28}, {"text": "三鹿奶粉要靠新西兰政府举报。", "startFrame": 27, "durationFrames": 76}, {"text": "煤油车装食用油要靠调查记者举报。", "startFrame": 102, "durationFrames": 91}, {"text": "泡药杨梅要靠自媒体举报。", "startFrame": 193, "durationFrames": 72}]} totalDurationFrames={266} panels={[{ src: staticFile("images/食品安全/scene_2_1_img0.png"), showFrom: 1, enterEffect: "fadeIn" }, { src: staticFile("images/食品安全/scene_2_1_img1.png"), showFrom: 2, enterEffect: "fadeIn" }, { src: staticFile("images/食品安全/scene_2_1_img2.png"), showFrom: 3, enterEffect: "fadeIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={266} durationInFrames={244}>
                <BWCenterFocus content={[{"text": "这些明显是非个例的广泛性问题，", "startFrame": 0, "durationFrames": 82}, {"text": "不仅要靠其他人来暴露，", "startFrame": 81, "durationFrames": 47}, {"text": "就算暴露了每次也都只是抓一两个典型草草收场。", "startFrame": 128, "durationFrames": 115}]} totalDurationFrames={244} imageSrc={staticFile("images/食品安全/scene_2_2.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={510} durationInFrames={168}>
                <BWPanelGrid content={[{"text": "既没有给予匹配消费者损失的补偿。", "startFrame": 0, "durationFrames": 75}, {"text": "也没有对商家或者整个行业震摄性的惩罚。", "startFrame": 74, "durationFrames": 94}]} totalDurationFrames={168} panels={[{ src: staticFile("images/食品安全/scene_2_4_img0.png"), showFrom: 0, enterEffect: "zoomIn" }, { src: staticFile("images/食品安全/scene_2_4_img1.png"), showFrom: 1, enterEffect: "slideBottom" }]} anchors={[]} />
            </Sequence>
            <Sequence from={678} durationInFrames={100}>
                <BWMagnifyingGlass content={[{"text": "更重要的是，", "startFrame": 0, "durationFrames": 29}, {"text": "完全没有对监管缺位的追责。", "startFrame": 28, "durationFrames": 71}]} totalDurationFrames={100} anchors={[{"text": "监管缺位", "showFrom": 1, "color": "#EF4444", "anim": "popIn", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={778} durationInFrames={129}>
                <BWTextFocus content={[{"text": "如果一个机构不需要为结果负责，", "startFrame": 0, "durationFrames": 66}, {"text": "那么这个机构还有存在的意义吗？", "startFrame": 65, "durationFrames": 63}]} totalDurationFrames={129} coreSentence={[{"text": "如果一个机构不需要为结果负责，", "showFrom": 0}, {"text": "那么这个机构还有存在的意义吗？", "showFrom": 1, "endFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "不需要为结果负责", "color": "#EF4444"}, {"coreSentenceAnchor": "存在的意义", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/食品安全/scene_2/scene_2.mp3")} />
        </AbsoluteFill>
    );
};
