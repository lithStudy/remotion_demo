import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWBeatSequence, BWCenterFocus } from "../../../components";

// 发布会现场的视觉陷阱
const SCENE_DURATION = 247 + 363;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={247}>
                <BWCenterFocus content={[{"text": "看着大屏幕上那条几乎垂直冲向云霄的业绩增长红线，", "startFrame": 0, "durationFrames": 127}, {"text": "台下的投资者们热血沸腾，", "startFrame": 126, "durationFrames": 60}, {"text": "响起了雷鸣般的掌声。", "startFrame": 186, "durationFrames": 60}]} totalDurationFrames={247} imageSrc={staticFile("images/数据可视化陷阱/scene_1_1.png")} enterEffect="slideBottom" anchors={[{"text": "业绩增长", "showFrom": 0, "color": "#000000", "anim": "slideUp", "audioEffect": "ping"}, {"text": "热血沸腾", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={247} durationInFrames={363}>
                <BWBeatSequence content={[{"text": "屏幕上充满视觉张力的图表，", "startFrame": 0, "durationFrames": 68}, {"text": "看起来是如此的震撼和雄辩，", "startFrame": 67, "durationFrames": 70}, {"text": "以至于在场根本没有一个人去仔细看一眼，", "startFrame": 137, "durationFrames": 88}, {"text": "图表边缘那个被偷偷做过手脚、", "startFrame": 224, "durationFrames": 83}, {"text": "刻意截断了的纵坐标。", "startFrame": 307, "durationFrames": 56}]} totalDurationFrames={363} stages={[{ imageSrc: staticFile("images/数据可视化陷阱/scene_1_2_img0.png"), enterEffect: "breathe", tone: "calm", showFrom: 0 }, { imageSrc: staticFile("images/数据可视化陷阱/scene_1_2_img1.png"), enterEffect: "slideLeft", tone: "alert", showFrom: 2 }, { imageSrc: staticFile("images/数据可视化陷阱/scene_1_2_img2.png"), enterEffect: "zoomIn", tone: "alert", showFrom: 3 }]} />
            </Sequence>
            <Audio src={staticFile("/audio/数据可视化陷阱/scene_1/scene_1.mp3")} />
        </AbsoluteFill>
    );
};
