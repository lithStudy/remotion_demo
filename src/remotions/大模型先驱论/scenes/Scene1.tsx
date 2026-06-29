import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWBeatSequence, BWCenterFocus, BWMagnifyingGlass, BWQuoteCitation, BWTextFocus } from "../../../components";

// 引入：厚颜无耻的行业搅屎棍
const SCENE_DURATION = 75 + 143 + 71 + 186 + 296 + 206;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={75}>
                <BWTextFocus content={[{"text": "我从未见过如此厚颜无耻之人，", "startFrame": 0, "durationFrames": 75}]} totalDurationFrames={75} coreSentence={[{"text": "我从未见过如此厚颜无耻之人", "showFrom": 0, "endFrom": 0}]} coreSentenceAnchors={[{"coreSentenceAnchor": "厚颜无耻", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={75} durationInFrames={143}>
                <BWQuoteCitation content={[{"text": "某大嘴居然宣称：", "startFrame": 0, "durationFrames": 42}, {"text": "盘古大模型是大模型行业绝对的全球先驱者。", "startFrame": 41, "durationFrames": 101}]} totalDurationFrames={143} quoteSource={"余承东"} quoteDisplayText={"盘古大模型是大模型行业绝对的全球先驱者。"} showFrom={1} anchors={[]} />
            </Sequence>
            <Sequence from={218} durationInFrames={71}>
                <BWTextFocus content={[{"text": "行业搅屎棍真是名不虚传。", "startFrame": 0, "durationFrames": 71}]} totalDurationFrames={71} coreSentence={[{"text": "行业搅屎棍真是名不虚传。", "showFrom": 0, "endFrom": 0}]} coreSentenceAnchors={[{"coreSentenceAnchor": "搅屎棍", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={289} durationInFrames={186}>
                <BWCenterFocus content={[{"text": "作为在12年前就开始接触神经网络的人，", "startFrame": 0, "durationFrames": 84}, {"text": "我可以说是AI变革的第一批体验者和关注者了。", "startFrame": 84, "durationFrames": 102}]} totalDurationFrames={186} imageSrc={staticFile("images/大模型先驱论/scene_1_4.png")} enterEffect="fadeIn" anchors={[{"text": "12年前", "showFrom": 0, "color": "#000000", "anim": "spring", "audioEffect": "ping"}, {"text": "第一批体验者", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={475} durationInFrames={296}>
                <BWBeatSequence content={[{"text": "即使是OpenAI也没敢说自己是行业先驱，", "startFrame": 0, "durationFrames": 86}, {"text": "现在居然有一个大嘴巴，", "startFrame": 85, "durationFrames": 45}, {"text": "堂而皇之的再一次岁月史书，", "startFrame": 129, "durationFrames": 72}, {"text": "企图像哄蒙一样攫取大模型的道德制高点。", "startFrame": 201, "durationFrames": 94}]} totalDurationFrames={296} stages={[{ imageSrc: staticFile("images/大模型先驱论/scene_1_5_img0.png"), enterEffect: "breathe", tone: "calm", showFrom: 0 }, { imageSrc: staticFile("images/大模型先驱论/scene_1_5_img1.png"), enterEffect: "slideBottom", tone: "alert", showFrom: 2 }, { imageSrc: staticFile("images/大模型先驱论/scene_1_5_img2.png"), enterEffect: "zoomIn", tone: "alert", showFrom: 3 }]} anchors={[]} />
            </Sequence>
            <Sequence from={771} durationInFrames={206}>
                <BWMagnifyingGlass content={[{"text": "对于这种说法我非常的愤慨，", "startFrame": 0, "durationFrames": 58}, {"text": "这不仅仅是对科技事实的不尊重，", "startFrame": 57, "durationFrames": 70}, {"text": "还又一次把中国的脸丢到全世界了。", "startFrame": 127, "durationFrames": 78}]} totalDurationFrames={206} anchors={[{"text": "丢到全世界", "showFrom": 2, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/大模型先驱论/scene_1/scene_1.mp3")} />
        </AbsoluteFill>
    );
};
