import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWChatBubble, BWSplitCompare, BWTextFocus } from "../../../components";

// 引入：车祸评论怪象
const SCENE_DURATION = 279 + 341 + 175 + 155;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={279}>
                <BWCenterFocus content={[{"text": "我今天刷了上百条车祸视频的评论，", "startFrame": 0, "durationFrames": 83}, {"text": "发现了一个极其诡异的现象：", "startFrame": 82, "durationFrames": 64}, {"text": "大家吵得不可开交，", "startFrame": 146, "durationFrames": 44}, {"text": "但没有一个人关心车里的人活没活着。", "startFrame": 189, "durationFrames": 89}]} totalDurationFrames={279} imageSrc={staticFile("images/认知陷阱3/scene_1_1.png")} enterEffect="fadeIn" anchors={[{"text": "诡异现象", "showFrom": 1, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={279} durationInFrames={341}>
                <BWChatBubble content={[{"text": "“这一定是小米吧！”", "startFrame": 0, "durationFrames": 54}, {"text": "“肯定是某界！”", "startFrame": 53, "durationFrames": 61}, {"text": "当一段没有任何品牌标识的事故视频在全网疯传，", "startFrame": 113, "durationFrames": 108}, {"text": "评论区往往在三秒内沦为不同品牌粉丝的嗜血战场。", "startFrame": 221, "durationFrames": 119}]} totalDurationFrames={341} bubbles={[{ bubbleText: "这一定是小米吧！", showFrom: 0, align: "left" }, { bubbleText: "肯定是某界！", showFrom: 1, align: "right" }]} />
            </Sequence>
            <Sequence from={620} durationInFrames={175}>
                <BWSplitCompare content={[{"text": "仔细观察你会发现：", "startFrame": 0, "durationFrames": 51}, {"text": "根本没人在乎车祸中的伤者，", "startFrame": 50, "durationFrames": 64}, {"text": "也没人在乎事故的前因后果。", "startFrame": 113, "durationFrames": 62}]} totalDurationFrames={175} leftSrc={staticFile("images/认知陷阱3/scene_1_3_left.png")} rightSrc={staticFile("images/认知陷阱3/scene_1_3_right.png")} leftLabel={"车祸伤者"} rightLabel={"前因后果"} leftShowFrom={1} rightShowFrom={2} anchors={[]} />
            </Sequence>
            <Sequence from={795} durationInFrames={155}>
                <BWTextFocus content={[{"text": "他们急不可耐地敲下定论，", "startFrame": 0, "durationFrames": 59}, {"text": "本质上是在完成一场心照不宣的社交表演。", "startFrame": 58, "durationFrames": 96}]} totalDurationFrames={155} coreSentence={["他们在完成一场心照不宣的社交表演"]} coreSentenceAnchors={[{"coreSentenceAnchor": "社交表演", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/认知陷阱3/scene_1/scene_1.mp3")} />
        </AbsoluteFill>
    );
};
