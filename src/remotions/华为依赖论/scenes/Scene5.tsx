import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCaseBreakdown, BWMethodStack, BWQuoteCitation, BWTextFocus } from "../../../components";

// 反转：份额不等于技术
const SCENE_DURATION = 107 + 101 + 433 + 427;

export const calculateScene5Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene5: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={107}>
                <BWQuoteCitation content={[{"text": "有人会说，", "startFrame": 0, "durationFrames": 24}, {"text": "华为份额那么高，", "startFrame": 24, "durationFrames": 44}, {"text": "不就说明技术最好吗？", "startFrame": 67, "durationFrames": 39}]} totalDurationFrames={107} quoteSource={"非业内人士"} quoteDisplayText={"华为份额那么高，，不就说明技术最好吗？"} showFrom={1} anchors={[]} />
            </Sequence>
            <Sequence from={107} durationInFrames={101}>
                <BWTextFocus content={[{"text": "你真这么想，", "startFrame": 0, "durationFrames": 33}, {"text": "说明你没做过B2B的生意。", "startFrame": 32, "durationFrames": 68}]} totalDurationFrames={101} coreSentence={["你真这么想，", "说明你没做过B2B的生意。"]} coreSentenceAnchors={[{"coreSentenceAnchor": "B2B的生意", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={208} durationInFrames={433}>
                <BWMethodStack content={[{"text": "但凡不是直接面向普通消费者的招投标，", "startFrame": 0, "durationFrames": 84}, {"text": "技术能力只是敲门砖—", "startFrame": 84, "durationFrames": 58}, {"text": "你够格了，", "startFrame": 141, "durationFrames": 30}, {"text": "才有资格坐到牌桌上。", "startFrame": 171, "durationFrames": 46}, {"text": "但真正决定谁能中标的，", "startFrame": 217, "durationFrames": 59}, {"text": "跟领导层的关系、", "startFrame": 275, "durationFrames": 44}, {"text": "利益绑定、", "startFrame": 319, "durationFrames": 27}, {"text": "长期合作默契，", "startFrame": 345, "durationFrames": 41}, {"text": "这些才是桌底下的牌。", "startFrame": 386, "durationFrames": 46}]} totalDurationFrames={433} title={"商业不止技术"} imageSrc={staticFile("images/华为依赖论/scene_5_3.png")} notes={[{"text": "技术仅够满足准入门槛", "showFrom": 1}, {"text": "关系、利益绑定、长期合作默契", "showFrom": 5}]} anchors={[]} />
            </Sequence>
            <Sequence from={641} durationInFrames={427}>
                <BWCaseBreakdown content={[{"text": "华为能拿过半份额，", "startFrame": 0, "durationFrames": 51}, {"text": "技术强是一方面，", "startFrame": 50, "durationFrames": 45}, {"text": "跟运营商多年深耕绑定的关系网，", "startFrame": 94, "durationFrames": 79}, {"text": "才是真正的护城河。", "startFrame": 173, "durationFrames": 45}, {"text": "中兴拿23%到37%，", "startFrame": 217, "durationFrames": 77}, {"text": "不代表技术差到只有华为一半，", "startFrame": 293, "durationFrames": 67}, {"text": "而是另一套关系网络的结果。", "startFrame": 360, "durationFrames": 66}]} totalDurationFrames={427} title={"华为护城河拆解"} imageSrc={staticFile("images/华为依赖论/scene_5_5.png")} phases={[{"phaseLabel": "表面现象", "showFrom": 0}, {"phaseLabel": "常见误判", "showFrom": 1}, {"phaseLabel": "真正护城河", "showFrom": 2}, {"phaseLabel": "反证收束", "showFrom": 4}]} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/华为依赖论/scene_5/scene_5.mp3")} />
        </AbsoluteFill>
    );
};
