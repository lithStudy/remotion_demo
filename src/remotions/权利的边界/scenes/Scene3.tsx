import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWBeatSequence, BWCaseBreakdown, BWCenterFocus, BWConceptCard, BWDosAndDonts, BWPanelGrid } from "../../../components";

// 反转·权利底层
const SCENE_DURATION = 86 + 196 + 72 + 139 + 313 + 374;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={86}>
                <BWCenterFocus content={[{"text": "很多人理解权利，", "startFrame": 0, "durationFrames": 40}, {"text": "第一反应是我要拥有什么。", "startFrame": 39, "durationFrames": 46}]} totalDurationFrames={86} imageSrc={staticFile("images/权利的边界/scene_3_1.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={86} durationInFrames={196}>
                <BWPanelGrid content={[{"text": "我要有钱。", "startFrame": 0, "durationFrames": 23}, {"text": "我要有地位。", "startFrame": 22, "durationFrames": 24}, {"text": "我要有资源。", "startFrame": 46, "durationFrames": 28}, {"text": "我要有话语权。", "startFrame": 73, "durationFrames": 35}, {"text": "这些当然重要。", "startFrame": 108, "durationFrames": 31}, {"text": "可它们都不是最底层的东西。", "startFrame": 138, "durationFrames": 57}]} totalDurationFrames={196} panels={[{ src: staticFile("images/权利的边界/scene_3_2_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { src: staticFile("images/权利的边界/scene_3_2_img1.png"), showFrom: 1, enterEffect: "fadeIn" }, { src: staticFile("images/权利的边界/scene_3_2_img2.png"), showFrom: 2, enterEffect: "fadeIn" }, { src: staticFile("images/权利的边界/scene_3_2_img3.png"), showFrom: 3, enterEffect: "fadeIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={282} durationInFrames={72}>
                <BWConceptCard content={[{"text": "最底层的东西，", "startFrame": 0, "durationFrames": 31}, {"text": "对别人说不的权利。", "startFrame": 30, "durationFrames": 41}]} totalDurationFrames={72} imageSrc={staticFile("images/权利的边界/scene_3_4.png")} conceptName={"说不的权利"} anchors={[]} />
            </Sequence>
            <Sequence from={354} durationInFrames={139}>
                <BWBeatSequence content={[{"text": "尤其是强者。", "startFrame": 0, "durationFrames": 33}, {"text": "尤其是权力。", "startFrame": 32, "durationFrames": 34}, {"text": "尤其是那个一句话就能改变你命运的人。", "startFrame": 66, "durationFrames": 72}]} totalDurationFrames={139} stages={[{ imageSrc: staticFile("images/权利的边界/scene_3_5_img0.png"), enterEffect: "breathe", tone: "calm" }, { imageSrc: staticFile("images/权利的边界/scene_3_5_img1.png"), enterEffect: "slideBottom", tone: "alert" }, { imageSrc: staticFile("images/权利的边界/scene_3_5_img2.png"), enterEffect: "zoomIn", tone: "alert" }]} anchors={[]} />
            </Sequence>
            <Sequence from={493} durationInFrames={313}>
                <BWDosAndDonts content={[{"text": "真正的权利，", "startFrame": 0, "durationFrames": 31}, {"text": "不是你站在高处时，", "startFrame": 30, "durationFrames": 46}, {"text": "别人对你客气。", "startFrame": 76, "durationFrames": 34}, {"text": "那可能只是交换。", "startFrame": 110, "durationFrames": 35}, {"text": "也可能只是忌惮。", "startFrame": 144, "durationFrames": 43}, {"text": "真正的权利，", "startFrame": 187, "durationFrames": 34}, {"text": "是你站在低处时，", "startFrame": 221, "durationFrames": 40}, {"text": "别人依然不能随便越界。", "startFrame": 260, "durationFrames": 52}]} totalDurationFrames={313} left={{label: "❌ 高处客气", src: staticFile("images/权利的边界/scene_3_6_left.png"), showFrom: 1 }} right={{label: "✅ 低处边界", src: staticFile("images/权利的边界/scene_3_6_right.png"), showFrom: 5 }} anchors={[]} />
            </Sequence>
            <Sequence from={806} durationInFrames={374}>
                <BWCaseBreakdown content={[{"text": "你住在破屋里。", "startFrame": 0, "durationFrames": 35}, {"text": "你没钱。", "startFrame": 34, "durationFrames": 26}, {"text": "没势。", "startFrame": 60, "durationFrames": 21}, {"text": "没背景。", "startFrame": 80, "durationFrames": 31}, {"text": "你看起来什么都没有。", "startFrame": 111, "durationFrames": 43}, {"text": "但有一件事，是你永远不能失去的。", "startFrame": 153, "durationFrames": 75}, {"text": "那就是未经允许，", "startFrame": 227, "durationFrames": 42}, {"text": "任何人不能闯入你的边界。", "startFrame": 269, "durationFrames": 54}, {"text": "这才是法治最硬的部分。", "startFrame": 322, "durationFrames": 51}]} totalDurationFrames={374} title={"破屋里的边界"} imageSrc={staticFile("images/权利的边界/scene_3_8.png")} phases={[{"phaseLabel": "低处处境", "showFrom": 0}, {"phaseLabel": "一无所有", "showFrom": 1}, {"phaseLabel": "不能失去", "showFrom": 5}, {"phaseLabel": "法治底线", "showFrom": 7}]} />
            </Sequence>
            <Audio src={staticFile("/audio/权利的边界/scene_3/scene_3.mp3")} />
        </AbsoluteFill>
    );
};
