import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCaseBreakdown, BWCenterFocus, BWQuoteCitation, BWTextFocus } from "../../../components";

// 命名：理工男浪漫
const SCENE_DURATION = 80 + 319 + 246 + 116 + 126;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={80}>
                <BWCenterFocus content={[{"text": "到了今天，", "startFrame": 0, "durationFrames": 26}, {"text": "这种工程师文化一点没变。", "startFrame": 25, "durationFrames": 55}]} totalDurationFrames={80} imageSrc={staticFile("images/小米营销论/scene_3_1.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={80} durationInFrames={319}>
                <BWCaseBreakdown content={[{"text": "你说你的电池耐用？", "startFrame": 0, "durationFrames": 40}, {"text": "别拿实验室的PPT数据糊弄我，", "startFrame": 39, "durationFrames": 70}, {"text": "咱们直接开个直播。", "startFrame": 109, "durationFrames": 36}, {"text": "高管自己开着车，", "startFrame": 144, "durationFrames": 39}, {"text": "从满电跑到趴窝，", "startFrame": 182, "durationFrames": 47}, {"text": "几十万网友盯着看真实的掉电曲线。", "startFrame": 229, "durationFrames": 89}]} totalDurationFrames={319} title={"电池续航直播验"} imageSrc={staticFile("images/小米营销论/scene_3_2.png")} phases={[{"phaseLabel": "质疑续航", "showFrom": 0}, {"phaseLabel": "拒绝纸面", "showFrom": 1}, {"phaseLabel": "直播开验", "showFrom": 2}, {"phaseLabel": "真曲线", "showFrom": 5}]} anchors={[]} />
            </Sequence>
            <Sequence from={399} durationInFrames={246}>
                <BWCaseBreakdown content={[{"text": "你说你的用料扎实？", "startFrame": 0, "durationFrames": 42}, {"text": "好，", "startFrame": 41, "durationFrames": 16}, {"text": "直接把车大卸八块，", "startFrame": 56, "durationFrames": 44}, {"text": "防撞梁多厚、", "startFrame": 100, "durationFrames": 35}, {"text": "电机什么结构、", "startFrame": 135, "durationFrames": 34}, {"text": "线束怎么走的，", "startFrame": 169, "durationFrames": 31}, {"text": "明明白白摆在台面上。", "startFrame": 199, "durationFrames": 47}]} totalDurationFrames={246} title={"用料拆解透明验"} imageSrc={staticFile("images/小米营销论/scene_3_3.png")} phases={[{"phaseLabel": "质疑用料", "showFrom": 0}, {"phaseLabel": "动手拆解", "showFrom": 2}, {"phaseLabel": "逐项验明", "showFrom": 3}, {"phaseLabel": "透明收束", "showFrom": 6}]} anchors={[]} />
            </Sequence>
            <Sequence from={645} durationInFrames={116}>
                <BWTextFocus content={[{"text": "这种营销，", "startFrame": 0, "durationFrames": 26}, {"text": "没有任何滤镜，", "startFrame": 25, "durationFrames": 34}, {"text": "也没有任何花里胡哨的形容词。", "startFrame": 58, "durationFrames": 57}]} totalDurationFrames={116} coreSentence={[{"text": "这种营销，", "showFrom": 0}, {"text": "没有任何滤镜，", "showFrom": 1}, {"text": "也没有任何花里胡哨的形容词。", "showFrom": 2}]} coreSentenceAnchors={[]} />
            </Sequence>
            <Sequence from={761} durationInFrames={126}>
                <BWQuoteCitation content={[{"text": "它就是一种极致的理工男浪漫：", "startFrame": 0, "durationFrames": 66}, {"text": "Talk is cheap,", "startFrame": 65, "durationFrames": 29}, {"text": "show me the code.", "startFrame": 93, "durationFrames": 33}]} totalDurationFrames={126} quoteSource={"Linus Torvalds"} showFrom={1} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/小米营销论/scene_3/scene_3.mp3")} />
        </AbsoluteFill>
    );
};
