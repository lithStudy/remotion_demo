import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWPanelGrid, BWQuoteCitation, BWTextFocus } from "../../../components";

// 引入：极致便利的幻觉
const SCENE_DURATION = 68 + 211 + 186;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={68}>
                <BWTextFocus content={[{"text": "在中国生活实在太便利了！", "startFrame": 0, "durationFrames": 68}]} totalDurationFrames={68} coreSentence={[{"text": "在中国生活实在太便利了！", "showFrom": 0}]} coreSentenceAnchors={[{"coreSentenceAnchor": "实在太便利了", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={68} durationInFrames={211}>
                <BWPanelGrid content={[{"text": "9块9包邮的产品一大把，", "startFrame": 0, "durationFrames": 53}, {"text": "深更半夜点外卖，", "startFrame": 52, "durationFrames": 38}, {"text": "还能半小时就给送到了。", "startFrame": 89, "durationFrames": 44}, {"text": "客服24小时在线，", "startFrame": 133, "durationFrames": 45}, {"text": "都是秒回。", "startFrame": 178, "durationFrames": 33}]} totalDurationFrames={211} panels={[{ src: staticFile("images/廉价的便利/scene_1_2_img0.png"), showFrom: 0, enterEffect: "zoomIn" }, { src: staticFile("images/廉价的便利/scene_1_2_img1.png"), showFrom: 2, enterEffect: "slideLeft" }, { src: staticFile("images/廉价的便利/scene_1_2_img2.png"), showFrom: 3, enterEffect: "fadeIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={279} durationInFrames={186}>
                <BWQuoteCitation content={[{"text": "很多人张口就来，", "startFrame": 0, "durationFrames": 49}, {"text": "自豪得不行。", "startFrame": 48, "durationFrames": 29}, {"text": "“这一切，", "startFrame": 76, "durationFrames": 21}, {"text": "都因为咱们基建牛逼！", "startFrame": 97, "durationFrames": 41}, {"text": "高铁、", "startFrame": 137, "durationFrames": 18}, {"text": "5G，", "startFrame": 155, "durationFrames": 11}, {"text": "世界第一！”", "startFrame": 166, "durationFrames": 20}]} totalDurationFrames={186} quoteSource={"常见论调"} quoteDisplayText={"这一切都因为咱们基建牛逼！高铁、5G，世界第一！"} showFrom={2} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/廉价的便利/scene_1/scene_1.mp3")} />
        </AbsoluteFill>
    );
};
