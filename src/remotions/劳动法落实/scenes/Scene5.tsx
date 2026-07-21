import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWMethodStack, BWPanelGrid, BWTextFocus } from "../../../components";

// 论证：创新源于闲暇
const SCENE_DURATION = 223 + 156 + 126 + 192 + 92 + 244;

export const calculateScene5Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene5: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={223}>
                <BWMethodStack content={[{"text": "还有创新也一样。", "startFrame": 0, "durationFrames": 42}, {"text": "世界上绝大多数历史性的创新，", "startFrame": 41, "durationFrames": 67}, {"text": "都不是在工位上憋出来的。", "startFrame": 108, "durationFrames": 45}, {"text": "很多时候，", "startFrame": 152, "durationFrames": 23}, {"text": "是从闲暇里长出来的。", "startFrame": 175, "durationFrames": 47}]} totalDurationFrames={223} title={"创新"} imageSrc={staticFile("images/劳动法落实/scene_5_1.png")} notes={[{"text": "历史性创新不在工位", "showFrom": 2}, {"text": "创新从闲暇里长出来", "showFrom": 4}]} anchors={[]} />
            </Sequence>
            <Sequence from={223} durationInFrames={156}>
                <BWCenterFocus content={[{"text": "英伟达，", "startFrame": 0, "durationFrames": 21}, {"text": "最早干什么？", "startFrame": 20, "durationFrames": 28}, {"text": "给被中国家长嫌弃的臭打游戏的，", "startFrame": 47, "durationFrames": 71}, {"text": "做更好的显卡。", "startFrame": 118, "durationFrames": 37}]} totalDurationFrames={156} imageSrc={staticFile("images/劳动法落实/scene_5_3.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={379} durationInFrames={126}>
                <BWCenterFocus content={[{"text": "可谁能想到，", "startFrame": 0, "durationFrames": 30}, {"text": "到了人工智能时代，", "startFrame": 29, "durationFrames": 38}, {"text": "显卡成了卡脖子的巨头。", "startFrame": 66, "durationFrames": 59}]} totalDurationFrames={126} imageSrc={staticFile("images/劳动法落实/scene_5_5.png")} enterEffect="zoomIn" anchors={[{"text": "卡脖子", "showFrom": 2, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={505} durationInFrames={192}>
                <BWCenterFocus content={[{"text": "莱特兄弟呢？", "startFrame": 0, "durationFrames": 35}, {"text": "两个修自行车的。", "startFrame": 34, "durationFrames": 41}, {"text": "靠业余时间，鼓捣飞机。", "startFrame": 75, "durationFrames": 53}, {"text": "然后他们搞定了人类的飞天梦想。", "startFrame": 127, "durationFrames": 64}]} totalDurationFrames={192} imageSrc={staticFile("images/劳动法落实/scene_5_6.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={697} durationInFrames={92}>
                <BWTextFocus content={[{"text": "创新不只需要勤奋。", "startFrame": 0, "durationFrames": 55}, {"text": "更需要闲暇。", "startFrame": 54, "durationFrames": 38}]} totalDurationFrames={92} coreSentence={[{"text": "创新不只需要勤奋。", "showFrom": 0}, {"text": "更需要闲暇。", "showFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "闲暇", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={789} durationInFrames={244}>
                <BWPanelGrid content={[{"text": "有闲暇才能发呆。", "startFrame": 0, "durationFrames": 46}, {"text": "有闲暇才能试错。", "startFrame": 45, "durationFrames": 46}, {"text": "有闲暇，", "startFrame": 90, "durationFrames": 28}, {"text": "才会把脑子里的幻想，", "startFrame": 118, "durationFrames": 1}, {"text": "转变成改变人类的发明和创造。", "startFrame": 0, "durationFrames": 826}]} totalDurationFrames={244} panels={[{ src: staticFile("images/劳动法落实/scene_5_11_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { src: staticFile("images/劳动法落实/scene_5_11_img1.png"), showFrom: 1, enterEffect: "slideLeft" }, { src: staticFile("images/劳动法落实/scene_5_11_img2.png"), showFrom: 3, enterEffect: "zoomIn" }]} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/劳动法落实/scene_5/scene_5.mp3")} />
        </AbsoluteFill>
    );
};
