import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWConceptCard, BWStepList } from "../../../components";

// 解释概念：确认偏误的运作方式
const SCENE_DURATION = 93 + 510 + 203 + 187;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={93}>
                <BWConceptCard content={[{"text": "在心理学上，", "startFrame": 0, "durationFrames": 30}, {"text": "这种现象有一个著名的核心概念，", "startFrame": 30, "durationFrames": 33}, {"text": "叫作“确认偏误”。", "startFrame": 63, "durationFrames": 30}]} imageSrc={staticFile("images/template/scene1_1.png")} conceptName={"确认偏误"} anchors={[]} totalDurationFrames={93} />
            </Sequence>
            <Sequence from={93} durationInFrames={510}>
                <BWStepList content={[{"text": "简单通俗地说，", "startFrame": 0, "durationFrames": 30}, {"text": "确认偏误就像是", "startFrame": 30, "durationFrames": 30}, {"text": "我们大脑自带的", "startFrame": 60, "durationFrames": 30}, {"text": "一副“有色滤镜”。", "startFrame": 90, "durationFrames": 30}, {"text": "当我们先入为主地", "startFrame": 120, "durationFrames": 30}, {"text": "相信一个观点时，", "startFrame": 150, "durationFrames": 30}, {"text": "我们的脑子会", "startFrame": 180, "durationFrames": 30}, {"text": "自动开启两个功能：", "startFrame": 210, "durationFrames": 30}, {"text": "第一，是“自动美颜”，", "startFrame": 240, "durationFrames": 30}, {"text": "凡是能证明我", "startFrame": 270, "durationFrames": 30}, {"text": "正确的信息，", "startFrame": 300, "durationFrames": 30}, {"text": "哪怕漏洞百出，", "startFrame": 330, "durationFrames": 30}, {"text": "我们也觉得是真理；", "startFrame": 360, "durationFrames": 30}, {"text": "第二，是“一键拉黑”，", "startFrame": 390, "durationFrames": 30}, {"text": "凡是反驳我们的证据，", "startFrame": 420, "durationFrames": 30}, {"text": "哪怕铁证如山，", "startFrame": 450, "durationFrames": 30}, {"text": "我们也觉得那是造谣。", "startFrame": 480, "durationFrames": 30}]} anchors={[{"text": "确认偏误", "showFrom": 3, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}]} totalDurationFrames={510} />
            </Sequence>
            <Sequence from={603} durationInFrames={203}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" content={[{"text": "这就像是一个正在热恋中的姑娘，", "startFrame": 0, "durationFrames": 33}, {"text": "她觉得男朋友哪儿都好。", "startFrame": 33, "durationFrames": 30}, {"text": "男朋友迟到那是“有个性”，", "startFrame": 63, "durationFrames": 30}, {"text": "男朋友不洗澡那是“纯爷们”。", "startFrame": 93, "durationFrames": 31}, {"text": "哪怕闺蜜拿出一叠男方劈腿的证据，", "startFrame": 124, "durationFrames": 35}, {"text": "她也能脑补出那是“坏女人在勾引我男人”。", "startFrame": 159, "durationFrames": 44}]} anchors={[]} totalDurationFrames={203} />
            </Sequence>
            <Sequence from={806} durationInFrames={187}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" content={[{"text": "这时候，事实已经不重要了，", "startFrame": 0, "durationFrames": 30}, {"text": "大脑只会疯狂寻找能支持“我没看错人”的证据。", "startFrame": 30, "durationFrames": 48}, {"text": "在互联网讨论中，", "startFrame": 78, "durationFrames": 30}, {"text": "很多人其实并不是在寻找真理，", "startFrame": 108, "durationFrames": 31}, {"text": "而是在玩一场名为“证明我是对的”的心理游戏。", "startFrame": 139, "durationFrames": 48}]} anchors={[]} totalDurationFrames={187} />
            </Sequence>

        </AbsoluteFill>
    );
};
