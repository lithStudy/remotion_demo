import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWConceptCard, BWMultiImage, BWTextFocus } from "../../../components";

// 解释概念：确认偏误
const SCENE_DURATION = 133 + 120 + 260 + 203 + 78 + 126;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={133}>
                <BWConceptCard imageSrc={staticFile("大脑思考的简笔画图标")} conceptName={"确认偏误"} content={[{"text": "在心理学上，这种现象有一个著名的核心概念，", "startFrame": 0, "durationFrames": 46, "audioEffect": "ping"}, {"text": "叫作", "startFrame": 46, "durationFrames": 30, "audioEffect": "ping"}, {"text": "“确认偏误”（Confirmation Bias）。", "startFrame": 76, "durationFrames": 57, "audioEffect": "ping"}]} anchors={[]} totalDurationFrames={133} />
            </Sequence>
            <Sequence from={133} durationInFrames={120}>
                <BWCenterFocus imageSrc={staticFile("大脑内部结构的示意图，背景是滤镜")} enterEffect="breathe" content={[{"text": "简单通俗地说，", "startFrame": 0, "durationFrames": 30, "audioEffect": "ping"}, {"text": "确认偏误就像是我们", "startFrame": 30, "durationFrames": 30, "audioEffect": "ping"}, {"text": "大脑自带的一副", "startFrame": 60, "durationFrames": 30, "audioEffect": "ping"}, {"text": "“有色滤镜”。", "startFrame": 90, "durationFrames": 30, "audioEffect": "ping"}]} anchors={[]} totalDurationFrames={120} />
            </Sequence>
            <Sequence from={253} durationInFrames={260}>
                <BWMultiImage images={[{ src: staticFile("大脑简笔画，齿轮转动"), textIndex: 2 }, { src: staticFile("垃圾桶简笔画"), textIndex: 5 }]} content={[{"text": "当我们先入为主地相信一个观点时，", "startFrame": 0, "durationFrames": 35, "audioEffect": "ping"}, {"text": "我们的脑子会自动开启两个功能：", "startFrame": 35, "durationFrames": 33, "audioEffect": "ping"}, {"text": "第一，是“自动美颜”，", "startFrame": 68, "durationFrames": 30, "audioEffect": "impact_thud"}, {"text": "凡是能证明我正确的信息，", "startFrame": 98, "durationFrames": 30, "audioEffect": "ping"}, {"text": "哪怕漏洞百出，我们也觉得是真理；", "startFrame": 128, "durationFrames": 35, "audioEffect": "ping"}, {"text": "第二，是“一键拉黑”，", "startFrame": 163, "durationFrames": 30, "audioEffect": "impact_thud"}, {"text": "凡是反驳我们的证据，", "startFrame": 193, "durationFrames": 30, "audioEffect": "ping"}, {"text": "哪怕铁证如山，我们也觉得那是造谣。", "startFrame": 223, "durationFrames": 37, "audioEffect": null}]} anchors={[]} totalDurationFrames={260} />
            </Sequence>
            <Sequence from={513} durationInFrames={203}>
                <BWCenterFocus imageSrc={staticFile("一对情侣在约会，背景是浪漫的城市夜景")} enterEffect="breathe" content={[{"text": "这就像是一个正在热恋中的姑娘，", "startFrame": 0, "durationFrames": 33, "audioEffect": "ping"}, {"text": "她觉得男朋友哪儿都好。", "startFrame": 33, "durationFrames": 30, "audioEffect": "ping"}, {"text": "男朋友迟到那是“有个性”，", "startFrame": 63, "durationFrames": 30, "audioEffect": "ping"}, {"text": "男朋友不洗澡那是“纯爷们”。", "startFrame": 93, "durationFrames": 31, "audioEffect": "ping"}, {"text": "哪怕闺蜜拿出一叠男方劈腿的证据，", "startFrame": 124, "durationFrames": 35, "audioEffect": "ping"}, {"text": "她也能脑补出那是“坏女人在勾引我男人”。", "startFrame": 159, "durationFrames": 44, "audioEffect": null}]} anchors={[]} totalDurationFrames={203} />
            </Sequence>
            <Sequence from={716} durationInFrames={78}>
                <BWTextFocus content={[{"text": "这时候，事实已经不重要了，", "startFrame": 0, "durationFrames": 30, "audioEffect": "ping"}, {"text": "大脑只会疯狂寻找能支持“我没看错人”的证据。", "startFrame": 30, "durationFrames": 48, "audioEffect": null}]} anchors={[]} totalDurationFrames={78} />
            </Sequence>
            <Sequence from={794} durationInFrames={126}>
                <BWCenterFocus imageSrc={staticFile("一群人在电脑前激烈讨论的场景")} enterEffect="fadeIn" content={[{"text": "在互联网讨论中，", "startFrame": 0, "durationFrames": 30, "audioEffect": "ping"}, {"text": "很多人其实并不是在寻找真理，", "startFrame": 30, "durationFrames": 31, "audioEffect": "ping"}, {"text": "而是在玩一场名为“证明我是对的”", "startFrame": 61, "durationFrames": 35, "audioEffect": "ping"}, {"text": "的心理游戏。", "startFrame": 96, "durationFrames": 30, "audioEffect": "ping"}]} anchors={[]} totalDurationFrames={126} />
            </Sequence>

        </AbsoluteFill>
    );
};
