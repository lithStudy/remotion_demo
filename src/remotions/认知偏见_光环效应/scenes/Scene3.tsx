import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWBeatSequence, BWCenterFocus, BWCognitiveShift, BWPanelGrid } from "../../../components";

// 反转：光环效应的潜在危害
const SCENE_DURATION = 129 + 389 + 199 + 312;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={129}>
                <BWCenterFocus content={[{"text": "而这件事真正麻烦的地方是，", "startFrame": 0, "durationFrames": 66}, {"text": "它骗走的不只是一次判断。", "startFrame": 65, "durationFrames": 64}]} totalDurationFrames={129} imageSrc={staticFile("images/认知偏见_光环效应/scene_3_1.png")} enterEffect="fadeIn" />
            </Sequence>
            <Sequence from={129} durationInFrames={389}>
                <BWBeatSequence content={[{"text": "它会让你花冤枉钱，", "startFrame": 0, "durationFrames": 48}, {"text": "甚至在重要的事情上作出错误的决定。", "startFrame": 48, "durationFrames": 82}, {"text": "你可能因为一个明星的推荐，", "startFrame": 129, "durationFrames": 55}, {"text": "买了一堆根本不适合自己的东西。", "startFrame": 184, "durationFrames": 66}, {"text": "也可能因为一个专家推荐，", "startFrame": 249, "durationFrames": 53}, {"text": "把一句未经验证的话，", "startFrame": 302, "durationFrames": 47}, {"text": "当成了靠谱建议。", "startFrame": 349, "durationFrames": 40}]} totalDurationFrames={389} stages={[{ imageSrc: staticFile("images/认知偏见_光环效应/scene_3_2_img0.png"), enterEffect: "fadeIn", tone: "calm", showFrom: 0 }, { imageSrc: staticFile("images/认知偏见_光环效应/scene_3_2_img1.png"), enterEffect: "fadeIn", showFrom: 2 }, { imageSrc: staticFile("images/认知偏见_光环效应/scene_3_2_img2.png"), enterEffect: "fadeIn", showFrom: 4 }]} />
            </Sequence>
            <Sequence from={518} durationInFrames={199}>
                <BWCognitiveShift content={[{"text": "光环效应最厉害的地方就在于，", "startFrame": 0, "durationFrames": 60}, {"text": "它不是让你什么都看不见，", "startFrame": 60, "durationFrames": 51}, {"text": "而是让你自动跳过了本来该问的问题。", "startFrame": 110, "durationFrames": 89}]} totalDurationFrames={199} notText={"什么都看不见"} butText={"跳过该问的问题"} butSrc={staticFile("images/认知偏见_光环效应/scene_3_3.png")} notContentIndex={1} butContentIndex={2} anchors={[]} />
            </Sequence>
            <Sequence from={717} durationInFrames={312}>
                <BWPanelGrid content={[{"text": "比如，他说的到底是不是他的专业范围？", "startFrame": 0, "durationFrames": 101}, {"text": "他给的是证据，", "startFrame": 100, "durationFrames": 35}, {"text": "还是只是身份带来的压迫感？", "startFrame": 135, "durationFrames": 59}, {"text": "你相信的是内容，", "startFrame": 194, "durationFrames": 42}, {"text": "还是他身上那层看起来很厉害的光？", "startFrame": 235, "durationFrames": 76}]} totalDurationFrames={312} panels={[{ src: staticFile("images/认知偏见_光环效应/scene_3_4_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { src: staticFile("images/认知偏见_光环效应/scene_3_4_img1.png"), showFrom: 2, enterEffect: "fadeIn" }, { src: staticFile("images/认知偏见_光环效应/scene_3_4_img2.png"), showFrom: 3, enterEffect: "fadeIn" }]} />
            </Sequence>
            <Audio src={staticFile("/audio/认知偏见_光环效应/scene_3/scene_3.mp3")} />
        </AbsoluteFill>
    );
};
