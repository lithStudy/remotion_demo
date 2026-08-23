import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWBeatSequence, BWCenterFocus, BWMagnifyingGlass, BWQuoteCitation, BWTextFocus } from "../../../components";

// 引入：厚颜无耻的行业搅屎棍
const SCENE_DURATION = 68 + 144 + 68 + 189 + 280 + 197;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={68}>
                <BWTextFocus content={[{"text": "我从未见过如此厚颜无耻之人，", "startFrame": 0, "durationFrames": 68}]} totalDurationFrames={68} coreSentence={[{"text": "我从未见过如此厚颜无耻之人", "showFrom": 0, "endFrom": 0}]} coreSentenceAnchors={[{"coreSentenceAnchor": "厚颜无耻", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={68} durationInFrames={144}>
                <BWQuoteCitation content={[{"text": "某大嘴居然宣称：", "startFrame": 0, "durationFrames": 44}, {"text": "盘古大模型是大模型行业绝对的全球先驱者。", "startFrame": 43, "durationFrames": 101}]} totalDurationFrames={144} quoteSource={"余承东"} quoteDisplayText={"盘古大模型是大模型行业绝对的全球先驱者。"} showFrom={1} anchors={[]} />
            </Sequence>
            <Sequence from={212} durationInFrames={68}>
                <BWTextFocus content={[{"text": "行业搅屎棍真是名不虚传。", "startFrame": 0, "durationFrames": 68}]} totalDurationFrames={68} coreSentence={[{"text": "行业搅屎棍真是名不虚传。", "showFrom": 0, "endFrom": 0}]} coreSentenceAnchors={[{"coreSentenceAnchor": "搅屎棍", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={280} durationInFrames={189}>
                <BWCenterFocus content={[{"text": "作为在12年前就开始接触神经网络的人，", "startFrame": 0, "durationFrames": 82}, {"text": "我可以说是AI变革的第一批体验者和关注者了。", "startFrame": 81, "durationFrames": 107}]} totalDurationFrames={189} imageSrc={staticFile("images/大模型先驱论/scene_1_4.png")} enterEffect="fadeIn" anchors={[{"text": "12年前", "showFrom": 0, "color": "#000000", "anim": "spring", "audioEffect": "ping"}, {"text": "第一批体验者", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={469} durationInFrames={280}>
                <BWBeatSequence content={[{"text": "即使是OpenAI也没敢说自己是行业先驱，", "startFrame": 0, "durationFrames": 77}, {"text": "现在居然有一个大嘴巴，", "startFrame": 76, "durationFrames": 49}, {"text": "堂而皇之的再一次岁月史书，", "startFrame": 124, "durationFrames": 66}, {"text": "企图像哄蒙一样攫取大模型的道德制高点。", "startFrame": 189, "durationFrames": 90}]} totalDurationFrames={280} stages={[{ imageSrc: staticFile("images/大模型先驱论/scene_1_5_img0.png"), enterEffect: "breathe", tone: "calm", showFrom: 0 }, { imageSrc: staticFile("images/大模型先驱论/scene_1_5_img1.png"), enterEffect: "slideBottom", tone: "alert", showFrom: 2 }, { imageSrc: staticFile("images/大模型先驱论/scene_1_5_img2.png"), enterEffect: "zoomIn", tone: "alert", showFrom: 3 }]} anchors={[]} />
            </Sequence>
            <Sequence from={749} durationInFrames={197}>
                <BWMagnifyingGlass content={[{"text": "对于这种说法我非常的愤慨，", "startFrame": 0, "durationFrames": 58}, {"text": "这不仅仅是对科技事实的不尊重，", "startFrame": 57, "durationFrames": 71}, {"text": "还又一次把中国的脸丢到全世界了。", "startFrame": 128, "durationFrames": 68}]} totalDurationFrames={197} anchors={[{"text": "丢到全世界", "showFrom": 2, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/大模型先驱论/scene_1/scene_1.mp3")} />
        </AbsoluteFill>
    );
};
