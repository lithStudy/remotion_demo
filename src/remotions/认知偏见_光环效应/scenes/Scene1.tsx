import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCaseBreakdown, BWCenterFocus, BWPanelGrid } from "../../../components";

// 引入：光环效应与头衔崇拜
const SCENE_DURATION = 164 + 186 + 120 + 163 + 168;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={164}>
                <BWCenterFocus content={[{"text": "你有没有发现，", "startFrame": 0, "durationFrames": 33}, {"text": "很多人根本不是被内容说服的，", "startFrame": 32, "durationFrames": 79}, {"text": "而是被头衔说服的。", "startFrame": 111, "durationFrames": 53}]} totalDurationFrames={164} imageSrc={staticFile("images/认知偏见_光环效应/scene_1_1.png")} enterEffect="fadeIn" anchors={[{"text": "头衔", "showFrom": 2, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={164} durationInFrames={186}>
                <BWPanelGrid content={[{"text": "只要前面挂着", "startFrame": 0, "durationFrames": 35}, {"text": "医生、", "startFrame": 34, "durationFrames": 20}, {"text": "教授、", "startFrame": 54, "durationFrames": 22}, {"text": "专家、", "startFrame": 76, "durationFrames": 14}, {"text": "创始人，", "startFrame": 89, "durationFrames": 19}, {"text": "我们心里那道防线，", "startFrame": 108, "durationFrames": 43}, {"text": "一下就松了。", "startFrame": 150, "durationFrames": 35}]} totalDurationFrames={186} panels={[{ src: staticFile("images/认知偏见_光环效应/scene_1_2_img0.png"), showFrom: 1, enterEffect: "fadeIn" }, { src: staticFile("images/认知偏见_光环效应/scene_1_2_img1.png"), showFrom: 2, enterEffect: "fadeIn" }, { src: staticFile("images/认知偏见_光环效应/scene_1_2_img2.png"), showFrom: 3, enterEffect: "fadeIn" }, { src: staticFile("images/认知偏见_光环效应/scene_1_2_img3.png"), showFrom: 4, enterEffect: "fadeIn" }]} anchors={[{"text": "医生", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "ping"}, {"text": "教授", "showFrom": 2, "color": "#EF4444", "anim": "spring", "audioEffect": "ping"}, {"text": "专家", "showFrom": 3, "color": "#EF4444", "anim": "spring", "audioEffect": "ping"}, {"text": "创始人", "showFrom": 4, "color": "#EF4444", "anim": "spring", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={350} durationInFrames={120}>
                <BWCaseBreakdown content={[{"text": "一个医生推荐保健品，", "startFrame": 0, "durationFrames": 47}, {"text": "很多人先信了，", "startFrame": 46, "durationFrames": 35}, {"text": "根本不看成分。", "startFrame": 81, "durationFrames": 39}]} totalDurationFrames={120} title={"医生推荐"} imageSrc={staticFile("images/认知偏见_光环效应/scene_1_3.png")} phases={[{"phaseLabel": "现象", "showFrom": 0}, {"phaseLabel": "信任", "showFrom": 1}, {"phaseLabel": "不看成分", "showFrom": 2}]} anchors={[]} />
            </Sequence>
            <Sequence from={470} durationInFrames={163}>
                <BWCaseBreakdown content={[{"text": "一个教授出来聊育儿、", "startFrame": 0, "durationFrames": 51}, {"text": "聊婚姻、", "startFrame": 50, "durationFrames": 24}, {"text": "聊情绪管理，", "startFrame": 74, "durationFrames": 32}, {"text": "很多人也默认他说得专业。", "startFrame": 105, "durationFrames": 57}]} totalDurationFrames={163} title={"头衔的陷阱"} imageSrc={staticFile("images/认知偏见_光环效应/scene_1_4.png")} phases={[{"phaseLabel": "聊育儿", "showFrom": 0}, {"phaseLabel": "聊婚姻", "showFrom": 1}, {"phaseLabel": "聊情绪管理", "showFrom": 2}, {"phaseLabel": "专业？？？", "showFrom": 3}]} anchors={[]} />
            </Sequence>
            <Sequence from={633} durationInFrames={168}>
                <BWCaseBreakdown content={[{"text": "一个人穿着白大褂讲护肤，", "startFrame": 0, "durationFrames": 54}, {"text": "哪怕你都不知道他到底是不是皮肤科，", "startFrame": 53, "durationFrames": 71}, {"text": "你也更容易觉得靠谱。", "startFrame": 124, "durationFrames": 44}]} totalDurationFrames={168} title={"白大褂的信任"} imageSrc={staticFile("images/认知偏见_光环效应/scene_1_5.png")} phases={[{"phaseLabel": "讲护肤", "showFrom": 0}, {"phaseLabel": "是不是皮肤科????", "showFrom": 1}]} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/认知偏见_光环效应/scene_1/scene_1.mp3")} />
        </AbsoluteFill>
    );
};
