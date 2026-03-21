import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWConceptCard } from "../../../components";

// 概念降维与智力赋能
const SCENE_DURATION = 164 + 240 + 120 + 120 + 210 + 150 + 150 + 180;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={164}>
                <BWConceptCard imageSrc={staticFile("images/template/scene1_1.png")} conceptName={"确认偏误"} content={[{"text": "在心理学上，这种", "startFrame": 0, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "现象有一个著名的", "startFrame": 30, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "核心概念，叫作", "startFrame": 60, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "“确认偏误”", "startFrame": 90, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "(Confirmation Bias）。", "startFrame": 120, "durationFrames": 44, "anchor": null, "anchorColor": null, "audioEffect": null}]} totalDurationFrames={164} />
            </Sequence>
            <Sequence from={164} durationInFrames={240}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" content={[{"text": "简单通俗地说，", "startFrame": 0, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "确认偏误就像是我们", "startFrame": 30, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "大脑自带的一副", "startFrame": 60, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "“有色滤镜”。", "startFrame": 90, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "当我们先入为主地", "startFrame": 120, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "相信一个观点时，", "startFrame": 150, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "我们的脑子会自动", "startFrame": 180, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "开启两个功能：", "startFrame": 210, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}]} totalDurationFrames={240} />
            </Sequence>
            <Sequence from={404} durationInFrames={120}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" content={[{"text": "第一，是“自动美颜”，", "startFrame": 0, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "凡是能证明我正确的", "startFrame": 30, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "信息，哪怕漏洞百出，", "startFrame": 60, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "我们也觉得是真理；", "startFrame": 90, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}]} totalDurationFrames={120} />
            </Sequence>
            <Sequence from={524} durationInFrames={120}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" content={[{"text": "第二，是“一键拉黑”，", "startFrame": 0, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "凡是反驳我们的证据，", "startFrame": 30, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "哪怕铁证如山，我们", "startFrame": 60, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "也觉得那是造谣。", "startFrame": 90, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}]} totalDurationFrames={120} />
            </Sequence>
            <Sequence from={644} durationInFrames={210}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" content={[{"text": "这就像是一个正在", "startFrame": 0, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "热恋中的姑娘，", "startFrame": 30, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "她觉得男朋友哪儿", "startFrame": 60, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "都好。男朋友迟到", "startFrame": 90, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "那是“有个性”，", "startFrame": 120, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "男朋友不洗澡", "startFrame": 150, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "那是“纯爷们”。", "startFrame": 180, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}]} totalDurationFrames={210} />
            </Sequence>
            <Sequence from={854} durationInFrames={150}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" content={[{"text": "哪怕闺蜜拿出一叠", "startFrame": 0, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "男方劈腿的证据，", "startFrame": 30, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "她也能脑补出那是", "startFrame": 60, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "“坏女人在勾引", "startFrame": 90, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "我男人”。", "startFrame": 120, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}]} totalDurationFrames={150} />
            </Sequence>
            <Sequence from={1004} durationInFrames={150}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" content={[{"text": "这时候，事实已经", "startFrame": 0, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "不重要了，大脑只会", "startFrame": 30, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "疯狂寻找能支持", "startFrame": 60, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "“我没看错人”", "startFrame": 90, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "的证据。", "startFrame": 120, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}]} totalDurationFrames={150} />
            </Sequence>
            <Sequence from={1154} durationInFrames={180}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" content={[{"text": "在互联网讨论中，", "startFrame": 0, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "很多人其实并不是", "startFrame": 30, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "在寻找真理，而是在", "startFrame": 60, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "玩一场名为“证明", "startFrame": 90, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "我是对的”的", "startFrame": 120, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "心理游戏。", "startFrame": 150, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}]} totalDurationFrames={180} />
            </Sequence>

        </AbsoluteFill>
    );
};
