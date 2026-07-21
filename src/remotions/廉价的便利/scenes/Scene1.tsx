import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWPanelGrid, BWQuoteCitation, BWTextFocus } from "../../../components";

// 引入：极致便利的幻觉
const SCENE_DURATION = 67 + 216 + 181;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={67}>
                <BWTextFocus content={[{"text": "在中国生活实在太便利了！", "startFrame": 0, "durationFrames": 67}]} totalDurationFrames={67} coreSentence={[{"text": "在中国生活实在太便利了！", "showFrom": 0}]} coreSentenceAnchors={[{"coreSentenceAnchor": "实在太便利了", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={67} durationInFrames={216}>
                <BWPanelGrid content={[{"text": "9块9包邮的产品一大把，", "startFrame": 0, "durationFrames": 56}, {"text": "深更半夜点外卖，", "startFrame": 55, "durationFrames": 35}, {"text": "还能半小时就给送到了。", "startFrame": 90, "durationFrames": 47}, {"text": "客服24小时在线，", "startFrame": 137, "durationFrames": 48}, {"text": "都是秒回。", "startFrame": 185, "durationFrames": 31}]} totalDurationFrames={216} panels={[{ src: staticFile("images/廉价的便利/scene_1_2_img0.png"), showFrom: 0, enterEffect: "zoomIn" }, { src: staticFile("images/廉价的便利/scene_1_2_img1.png"), showFrom: 2, enterEffect: "slideLeft" }, { src: staticFile("images/廉价的便利/scene_1_2_img2.png"), showFrom: 3, enterEffect: "fadeIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={283} durationInFrames={181}>
                <BWQuoteCitation content={[{"text": "很多人张口就来，", "startFrame": 0, "durationFrames": 40}, {"text": "自豪得不行。", "startFrame": 39, "durationFrames": 27}, {"text": "“这一切，", "startFrame": 65, "durationFrames": 22}, {"text": "都因为咱们基建牛逼！", "startFrame": 87, "durationFrames": 44}, {"text": "高铁、", "startFrame": 130, "durationFrames": 16}, {"text": "5G，", "startFrame": 145, "durationFrames": 11}, {"text": "世界第一！”", "startFrame": 156, "durationFrames": 24}]} totalDurationFrames={181} quoteSource={"常见论调"} quoteDisplayText={"这一切都因为咱们基建牛逼！高铁、5G，世界第一！"} showFrom={2} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/廉价的便利/scene_1/scene_1.mp3")} />
        </AbsoluteFill>
    );
};
