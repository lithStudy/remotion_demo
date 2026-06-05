import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWBeatSequence, BWCenterFocus, BWMethodStack, BWPanelGrid, BWTextFocus } from "../../../components";

// 论证：没时间生娃
const SCENE_DURATION = 152 + 161 + 93 + 50 + 98 + 135;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={152}>
                <BWMethodStack content={[{"text": "人口问题也一样。", "startFrame": 0, "durationFrames": 51}, {"text": "不是年轻人不想生娃。", "startFrame": 50, "durationFrames": 54}, {"text": "是他们真的没时间。", "startFrame": 103, "durationFrames": 49}]} totalDurationFrames={152} title={"人口问题也一样"} imageSrc={staticFile("images/劳动法落实/scene_4_1.png")} notes={[{"text": "不是不想生娃", "showFrom": 1}, {"text": "而是真的没时间", "showFrom": 2}]} anchors={[]} />
            </Sequence>
            <Sequence from={152} durationInFrames={161}>
                <BWCenterFocus content={[{"text": "一个人下班之后，", "startFrame": 0, "durationFrames": 39}, {"text": "连洗澡、", "startFrame": 38, "durationFrames": 28}, {"text": "吃饭、", "startFrame": 65, "durationFrames": 17}, {"text": "睡觉，", "startFrame": 81, "durationFrames": 22}, {"text": "都要像赶任务一样完成。", "startFrame": 103, "durationFrames": 57}]} totalDurationFrames={161} imageSrc={staticFile("images/劳动法落实/scene_4_2.png")} enterEffect="fadeIn" anchors={[{"text": "赶任务", "showFrom": 4, "color": "#EF4444", "anim": "highlight", "audioEffect": "woosh"}]} />
            </Sequence>
            <Sequence from={313} durationInFrames={93}>
                <BWBeatSequence content={[{"text": "你让他怎么经营亲密关系？", "startFrame": 0, "durationFrames": 56}, {"text": "怎么照顾孩子？", "startFrame": 55, "durationFrames": 38}]} totalDurationFrames={93} stages={[{ imageSrc: staticFile("images/劳动法落实/scene_4_3_img0.png"), enterEffect: "breathe" }, { imageSrc: staticFile("images/劳动法落实/scene_4_3_img1.png"), enterEffect: "slideBottom" }]} anchors={[]} />
            </Sequence>
            <Sequence from={406} durationInFrames={50}>
                <BWTextFocus content={[{"text": "生育不是一句口号。", "startFrame": 0, "durationFrames": 50}]} totalDurationFrames={50} coreSentence={[{"text": "生育不是一句口号。", "showFrom": 0}]} coreSentenceAnchors={[]} />
            </Sequence>
            <Sequence from={456} durationInFrames={98}>
                <BWPanelGrid content={[{"text": "它需要时间。", "startFrame": 0, "durationFrames": 34}, {"text": "需要情绪。", "startFrame": 33, "durationFrames": 30}, {"text": "需要稳定预期。", "startFrame": 63, "durationFrames": 35}]} totalDurationFrames={98} panels={[{ src: staticFile("images/劳动法落实/scene_4_5_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { src: staticFile("images/劳动法落实/scene_4_5_img1.png"), showFrom: 1, enterEffect: "fadeIn" }, { src: staticFile("images/劳动法落实/scene_4_5_img2.png"), showFrom: 2, enterEffect: "fadeIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={554} durationInFrames={135}>
                <BWCenterFocus content={[{"text": "一个二十四小时待岗的人，", "startFrame": 0, "durationFrames": 51}, {"text": "很难相信自己有能力，", "startFrame": 50, "durationFrames": 47}, {"text": "再承担一个家庭。", "startFrame": 97, "durationFrames": 38}]} totalDurationFrames={135} imageSrc={staticFile("images/劳动法落实/scene_4_6.png")} enterEffect="zoomIn" anchors={[{"text": "待岗", "showFrom": 0, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/劳动法落实/scene_4/scene_4.mp3")} />
        </AbsoluteFill>
    );
};
