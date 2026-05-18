import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWPanelGrid, BWTextFocus } from "../../../components";

// 引入：极致便利现象
const SCENE_DURATION = 30 + 150;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={30}>
                <BWTextFocus content={[{"text": "在中国生活实在太便利了！", "startFrame": 0, "durationFrames": 30}]} totalDurationFrames={30} coreSentence={["在中国生活实在太便利了！"]} coreSentenceAnchors={[]} />
            </Sequence>
            <Sequence from={30} durationInFrames={150}>
                <BWPanelGrid content={[{"text": "9块9包邮的产品一大把，", "startFrame": 0, "durationFrames": 30}, {"text": "深更半夜点外卖，", "startFrame": 30, "durationFrames": 30}, {"text": "还能半小时就给送到了。", "startFrame": 60, "durationFrames": 30}, {"text": "客服24小时在线，", "startFrame": 90, "durationFrames": 30}, {"text": "都是秒回。", "startFrame": 120, "durationFrames": 30}]} totalDurationFrames={150} panels={[{ src: staticFile("images/template/scene1_1.png"), showFrom: 0, enterEffect: "zoomIn" }, { src: staticFile("images/template/scene1_1.png"), showFrom: 1, enterEffect: "slideLeft" }, { src: staticFile("images/template/scene1_1.png"), showFrom: 2, enterEffect: "breathe" }, { src: staticFile("images/template/scene1_1.png"), showFrom: 3, enterEffect: "fadeIn" }, { src: staticFile("images/template/scene1_1.png"), showFrom: 4, enterEffect: "slideBottom" }]} anchors={[]} />
            </Sequence>

        </AbsoluteFill>
    );
};
