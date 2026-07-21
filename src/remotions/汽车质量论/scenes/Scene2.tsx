import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWKpiHero, BWPanelGrid, BWPeerInduct, BWTextFocus } from "../../../components";

// 举证：耐力赛三电试金石
const SCENE_DURATION = 94 + 98 + 144 + 114 + 210 + 174;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={94}>
                <BWCenterFocus content={[{"text": "再说耐力赛。", "startFrame": 0, "durationFrames": 39}, {"text": "这里考的是三电系统。", "startFrame": 38, "durationFrames": 56}]} totalDurationFrames={94} imageSrc={staticFile("images/汽车质量论/scene_2_1.png")} enterEffect="fadeIn" anchors={[{"text": "三电系统", "showFrom": 1, "color": "#000000", "anim": "spring", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={94} durationInFrames={98}>
                <BWPanelGrid content={[{"text": "电池热管理，", "startFrame": 0, "durationFrames": 41}, {"text": "电机效率，", "startFrame": 40, "durationFrames": 30}, {"text": "电控策略。", "startFrame": 69, "durationFrames": 28}]} totalDurationFrames={98} panels={[{ src: staticFile("images/汽车质量论/scene_2_2_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { src: staticFile("images/汽车质量论/scene_2_2_img1.png"), showFrom: 1, enterEffect: "fadeIn" }, { src: staticFile("images/汽车质量论/scene_2_2_img2.png"), showFrom: 2, enterEffect: "fadeIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={192} durationInFrames={144}>
                <BWCenterFocus content={[{"text": "连续高强度跑24小时，", "startFrame": 0, "durationFrames": 64}, {"text": "你必须精准控制每一度电、", "startFrame": 63, "durationFrames": 53}, {"text": "每一度温度。", "startFrame": 115, "durationFrames": 28}]} totalDurationFrames={144} imageSrc={staticFile("images/汽车质量论/scene_2_3.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={336} durationInFrames={114}>
                <BWKpiHero content={[{"text": "小米SU7，", "startFrame": 0, "durationFrames": 27}, {"text": "珠海耐力赛，", "startFrame": 26, "durationFrames": 26}, {"text": "24小时，", "startFrame": 51, "durationFrames": 29}, {"text": "2000多公里，", "startFrame": 79, "durationFrames": 34}]} totalDurationFrames={114} blocks={[{"value": 24, "suffix": "小时", "label": "连续行驶", "showFrom": 2}, {"value": 2000, "prefix": ">", "suffix": "公里", "label": "总里程", "useGrouping": true, "showFrom": 3}]} anchors={[]} />
            </Sequence>
            <Sequence from={450} durationInFrames={210}>
                <BWPeerInduct content={[{"text": "电池温度始终压在合理区间。", "startFrame": 0, "durationFrames": 71}, {"text": "车没趴窝，", "startFrame": 70, "durationFrames": 35}, {"text": "电池没起火。", "startFrame": 105, "durationFrames": 38}, {"text": "体现了优秀的三电控制能力。", "startFrame": 142, "durationFrames": 67}]} totalDurationFrames={210} premises={[{ imageSrc: staticFile("images/汽车质量论/scene_2_5_img0.png"), enterEffect: "fadeIn", showFrom: 0 }, { imageSrc: staticFile("images/汽车质量论/scene_2_5_img1.png"), enterEffect: "slideBottom", showFrom: 1 }, { imageSrc: staticFile("images/汽车质量论/scene_2_5_img2.png"), enterEffect: "slideBottom", showFrom: 2 }]} conclusion={{ imageSrc: staticFile("images/汽车质量论/scene_2_5.png"), enterEffect: "zoomIn", showFrom: 3, tone: "calm" }} anchors={[]} />
            </Sequence>
            <Sequence from={660} durationInFrames={174}>
                <BWTextFocus content={[{"text": "界车既然遥遥领先，", "startFrame": 0, "durationFrames": 42}, {"text": "为什么不来跑一跑？", "startFrame": 41, "durationFrames": 44}, {"text": "让大家见识见识，", "startFrame": 85, "durationFrames": 36}, {"text": "什么叫优秀的三电调教？", "startFrame": 121, "durationFrames": 53}]} totalDurationFrames={174} coreSentence={[{"text": "界车既然遥遥领先，为什么不来跑一跑？", "showFrom": 0}, {"text": "让大家见识见识，", "showFrom": 2}, {"text": "什么叫优秀的三电调教？", "showFrom": 3}]} coreSentenceAnchors={[{"coreSentenceAnchor": "遥遥领先", "color": "#EF4444"}, {"coreSentenceAnchor": "优秀的三电调教", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/汽车质量论/scene_2/scene_2.mp3")} />
        </AbsoluteFill>
    );
};
