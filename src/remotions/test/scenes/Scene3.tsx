import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWConceptCard } from "../../../components";

// 概念降维与智力赋能
const SCENE_DURATION = 117 + 321 + 196 + 174;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={117}>
                <BWConceptCard imageSrc={staticFile("images/template/scene1_1.png")} conceptName={"确认偏误"} content={[{"text": "在心理学上，这种现象有一个著名的核心概念，叫作**“确认偏误”（Confirmation Bias）**。", "startFrame": 0, "durationFrames": 117, "anchor": null, "anchorColor": null, "audioEffect": null}]} totalDurationFrames={117} />
            </Sequence>
            <Sequence from={117} durationInFrames={321}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" content={[{"text": "简单通俗地说，确认偏误就像是我们大脑自带的一副“有色滤镜”。当我们先入为主地相信一个观点时，我们的脑子会自动开启两个功能：**第一，是“自动美颜”，**凡是能证明我正确的信息，哪怕漏洞百出，我们也觉得是真理；**第二，是“一键拉黑”，**凡是反驳我们的证据，哪怕铁证如山，我们也觉得那是造谣。", "startFrame": 0, "durationFrames": 321, "anchor": null, "anchorColor": null, "audioEffect": null}]} totalDurationFrames={321} />
            </Sequence>
            <Sequence from={438} durationInFrames={196}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" content={[{"text": "这就像是一个正在热恋中的姑娘，她觉得男朋友哪儿都好。男朋友迟到那是“有个性”，男朋友不洗澡那是“纯爷们”。哪怕闺蜜拿出一叠男方劈腿的证据，她也能脑补出那是“坏女人在勾引我男人”。", "startFrame": 0, "durationFrames": 196, "anchor": null, "anchorColor": null, "audioEffect": null}]} totalDurationFrames={196} />
            </Sequence>
            <Sequence from={634} durationInFrames={174}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" content={[{"text": "这时候，事实已经不重要了，大脑只会疯狂寻找能支持“我没看错人”的证据。在互联网讨论中，很多人其实并不是在寻找真理，而是在玩一场名为“证明我是对的”的心理游戏。", "startFrame": 0, "durationFrames": 174, "anchor": null, "anchorColor": null, "audioEffect": null}]} totalDurationFrames={174} />
            </Sequence>

        </AbsoluteFill>
    );
};
