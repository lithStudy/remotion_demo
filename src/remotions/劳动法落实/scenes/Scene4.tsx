import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWBeatSequence, BWCenterFocus, BWMethodStack, BWPanelGrid, BWTextFocus } from "../../../components";

// 论证：没时间生娃
const SCENE_DURATION = 130 + 146 + 79 + 45 + 94 + 130;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={130}>
                <BWMethodStack content={[{"text": "人口问题也一样。", "startFrame": 0, "durationFrames": 43}, {"text": "不是年轻人不想生娃。", "startFrame": 42, "durationFrames": 46}, {"text": "是他们真的没时间。", "startFrame": 88, "durationFrames": 42}]} totalDurationFrames={130} title={"人口问题也一样"} imageSrc={staticFile("images/劳动法落实/scene_4_1.png")} notes={[{"text": "不是不想生娃", "showFrom": 1}, {"text": "而是真的没时间", "showFrom": 2}]} anchors={[]} />
            </Sequence>
            <Sequence from={130} durationInFrames={146}>
                <BWCenterFocus content={[{"text": "一个人下班之后，", "startFrame": 0, "durationFrames": 35}, {"text": "连洗澡、", "startFrame": 34, "durationFrames": 26}, {"text": "吃饭、", "startFrame": 60, "durationFrames": 19}, {"text": "睡觉，", "startFrame": 78, "durationFrames": 17}, {"text": "都要像赶任务一样完成。", "startFrame": 94, "durationFrames": 51}]} totalDurationFrames={146} imageSrc={staticFile("images/劳动法落实/scene_4_2.png")} enterEffect="fadeIn" anchors={[{"text": "赶任务", "showFrom": 4, "color": "#EF4444", "anim": "highlight", "audioEffect": "woosh"}]} />
            </Sequence>
            <Sequence from={276} durationInFrames={79}>
                <BWBeatSequence content={[{"text": "你让他怎么经营亲密关系？", "startFrame": 0, "durationFrames": 51}, {"text": "怎么照顾孩子？", "startFrame": 50, "durationFrames": 29}]} totalDurationFrames={79} stages={[{ imageSrc: staticFile("images/劳动法落实/scene_4_3_img0.png"), enterEffect: "breathe" }, { imageSrc: staticFile("images/劳动法落实/scene_4_3_img1.png"), enterEffect: "slideBottom" }]} anchors={[]} />
            </Sequence>
            <Sequence from={355} durationInFrames={45}>
                <BWTextFocus content={[{"text": "生育不是一句口号。", "startFrame": 0, "durationFrames": 45}]} totalDurationFrames={45} coreSentence={[{"text": "生育不是一句口号。", "showFrom": 0}]} coreSentenceAnchors={[]} />
            </Sequence>
            <Sequence from={400} durationInFrames={94}>
                <BWPanelGrid content={[{"text": "它需要时间。", "startFrame": 0, "durationFrames": 30}, {"text": "需要情绪。", "startFrame": 29, "durationFrames": 29}, {"text": "需要稳定预期。", "startFrame": 57, "durationFrames": 36}]} totalDurationFrames={94} panels={[{ src: staticFile("images/劳动法落实/scene_4_5_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { src: staticFile("images/劳动法落实/scene_4_5_img1.png"), showFrom: 1, enterEffect: "fadeIn" }, { src: staticFile("images/劳动法落实/scene_4_5_img2.png"), showFrom: 2, enterEffect: "fadeIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={494} durationInFrames={130}>
                <BWCenterFocus content={[{"text": "一个二十四小时待岗的人，", "startFrame": 0, "durationFrames": 50}, {"text": "很难相信自己有能力，", "startFrame": 49, "durationFrames": 44}, {"text": "再承担一个家庭。", "startFrame": 92, "durationFrames": 37}]} totalDurationFrames={130} imageSrc={staticFile("images/劳动法落实/scene_4_6.png")} enterEffect="zoomIn" anchors={[{"text": "待岗", "showFrom": 0, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/劳动法落实/scene_4/scene_4.mp3")} />
        </AbsoluteFill>
    );
};
