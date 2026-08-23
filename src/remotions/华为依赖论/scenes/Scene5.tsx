import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCaseBreakdown, BWMethodStack, BWQuoteCitation, BWTextFocus } from "../../../components";

// 反转：份额不等于技术
const SCENE_DURATION = 109 + 94 + 439 + 429;

export const calculateScene5Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene5: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={109}>
                <BWQuoteCitation content={[{"text": "有人会说，", "startFrame": 0, "durationFrames": 23}, {"text": "华为份额那么高，", "startFrame": 22, "durationFrames": 41}, {"text": "不就说明技术最好吗？", "startFrame": 63, "durationFrames": 46}]} totalDurationFrames={109} quoteSource={"非业内人士"} quoteDisplayText={"华为份额那么高，，不就说明技术最好吗？"} showFrom={1} anchors={[]} />
            </Sequence>
            <Sequence from={109} durationInFrames={94}>
                <BWTextFocus content={[{"text": "你真这么想，", "startFrame": 0, "durationFrames": 29}, {"text": "说明你没做过B2B的生意。", "startFrame": 28, "durationFrames": 66}]} totalDurationFrames={94} coreSentence={["你真这么想，", "说明你没做过B2B的生意。"]} coreSentenceAnchors={[{"coreSentenceAnchor": "B2B的生意", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={203} durationInFrames={439}>
                <BWMethodStack content={[{"text": "但凡不是直接面向普通消费者的招投标，", "startFrame": 0, "durationFrames": 91}, {"text": "技术能力只是敲门砖—", "startFrame": 90, "durationFrames": 52}, {"text": "你够格了，", "startFrame": 141, "durationFrames": 28}, {"text": "才有资格坐到牌桌上。", "startFrame": 169, "durationFrames": 45}, {"text": "但真正决定谁能中标的，", "startFrame": 213, "durationFrames": 59}, {"text": "跟领导层的关系、", "startFrame": 272, "durationFrames": 42}, {"text": "利益绑定、", "startFrame": 313, "durationFrames": 29}, {"text": "长期合作默契，", "startFrame": 342, "durationFrames": 42}, {"text": "这些才是桌底下的牌。", "startFrame": 383, "durationFrames": 56}]} totalDurationFrames={439} title={"商业不止技术"} imageSrc={staticFile("images/华为依赖论/scene_5_3.png")} notes={[{"text": "技术仅够满足准入门槛", "showFrom": 1}, {"text": "关系、利益绑定、长期合作默契", "showFrom": 5}]} anchors={[]} />
            </Sequence>
            <Sequence from={642} durationInFrames={429}>
                <BWCaseBreakdown content={[{"text": "华为能拿过半份额，", "startFrame": 0, "durationFrames": 55}, {"text": "技术强是一方面，", "startFrame": 54, "durationFrames": 45}, {"text": "跟运营商多年深耕绑定的关系网，", "startFrame": 99, "durationFrames": 76}, {"text": "才是真正的护城河。", "startFrame": 174, "durationFrames": 49}, {"text": "中兴拿23%到37%，", "startFrame": 222, "durationFrames": 77}, {"text": "不代表技术差到只有华为一半，", "startFrame": 299, "durationFrames": 68}, {"text": "而是另一套关系网络的结果。", "startFrame": 366, "durationFrames": 63}]} totalDurationFrames={429} title={"华为护城河拆解"} imageSrc={staticFile("images/华为依赖论/scene_5_5.png")} phases={[{"phaseLabel": "表面现象", "showFrom": 0}, {"phaseLabel": "常见误判", "showFrom": 1}, {"phaseLabel": "真正护城河", "showFrom": 2}, {"phaseLabel": "反证收束", "showFrom": 4}]} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/华为依赖论/scene_5/scene_5.mp3")} />
        </AbsoluteFill>
    );
};
