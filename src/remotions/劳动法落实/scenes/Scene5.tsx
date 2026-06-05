import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWMethodStack, BWPanelGrid, BWTextFocus } from "../../../components";

// 论证：创新源于闲暇
const SCENE_DURATION = 278 + 175 + 141 + 211 + 100 + 242;

export const calculateScene5Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene5: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={278}>
                <BWMethodStack content={[{"text": "还有创新也一样。", "startFrame": 0, "durationFrames": 48}, {"text": "世界上绝大多数历史性的创新，", "startFrame": 48, "durationFrames": 69}, {"text": "都不是在工位上憋出来的。", "startFrame": 116, "durationFrames": 65}, {"text": "很多时候，", "startFrame": 181, "durationFrames": 27}, {"text": "是从闲暇里长出来的。", "startFrame": 207, "durationFrames": 70}]} totalDurationFrames={278} title={"创新"} imageSrc={staticFile("images/劳动法落实/scene_5_1.png")} notes={[{"text": "历史性创新不在工位", "showFrom": 2}, {"text": "创新从闲暇里长出来", "showFrom": 4}]} anchors={[]} />
            </Sequence>
            <Sequence from={278} durationInFrames={175}>
                <BWCenterFocus content={[{"text": "英伟达，", "startFrame": 0, "durationFrames": 21}, {"text": "最早干什么？", "startFrame": 20, "durationFrames": 33}, {"text": "给被中国家长嫌弃的臭打游戏的，", "startFrame": 53, "durationFrames": 81}, {"text": "做更好的显卡。", "startFrame": 134, "durationFrames": 41}]} totalDurationFrames={175} imageSrc={staticFile("images/劳动法落实/scene_5_3.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={453} durationInFrames={141}>
                <BWCenterFocus content={[{"text": "可谁能想到，", "startFrame": 0, "durationFrames": 35}, {"text": "到了人工智能时代，", "startFrame": 34, "durationFrames": 46}, {"text": "显卡成了卡脖子的巨头。", "startFrame": 80, "durationFrames": 60}]} totalDurationFrames={141} imageSrc={staticFile("images/劳动法落实/scene_5_5.png")} enterEffect="zoomIn" anchors={[{"text": "卡脖子", "showFrom": 2, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={594} durationInFrames={211}>
                <BWCenterFocus content={[{"text": "莱特兄弟呢？", "startFrame": 0, "durationFrames": 32}, {"text": "两个修自行车的。", "startFrame": 31, "durationFrames": 41}, {"text": "靠业余时间，鼓捣飞机。", "startFrame": 72, "durationFrames": 59}, {"text": "然后他们搞定了人类的飞天梦想。", "startFrame": 130, "durationFrames": 80}]} totalDurationFrames={211} imageSrc={staticFile("images/劳动法落实/scene_5_6.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={805} durationInFrames={100}>
                <BWTextFocus content={[{"text": "创新不只需要勤奋。", "startFrame": 0, "durationFrames": 62}, {"text": "更需要闲暇。", "startFrame": 61, "durationFrames": 39}]} totalDurationFrames={100} coreSentence={[{"text": "创新不只需要勤奋。", "showFrom": 0}, {"text": "更需要闲暇。", "showFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "闲暇", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={905} durationInFrames={242}>
                <BWPanelGrid content={[{"text": "有闲暇才能发呆。", "startFrame": 0, "durationFrames": 44}, {"text": "有闲暇才能试错。", "startFrame": 43, "durationFrames": 46}, {"text": "有闲暇，", "startFrame": 89, "durationFrames": 29}, {"text": "才会把脑子里的幻想，", "startFrame": 117, "durationFrames": 60}, {"text": "转变成改变人类的发明和创造。", "startFrame": 177, "durationFrames": 80}]} totalDurationFrames={242} panels={[{ src: staticFile("images/劳动法落实/scene_5_11_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { src: staticFile("images/劳动法落实/scene_5_11_img1.png"), showFrom: 1, enterEffect: "slideLeft" }, { src: staticFile("images/劳动法落实/scene_5_11_img2.png"), showFrom: 3, enterEffect: "zoomIn" }]} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/劳动法落实/scene_5/scene_5.mp3")} />
        </AbsoluteFill>
    );
};
