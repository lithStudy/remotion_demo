import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift, BWConceptCard, BWSplitCompare } from "../../../components";

// 科学的定义：可证伪性
const SCENE_DURATION = 221 + 185 + 397 + 208 + 293;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={221}>
                <BWCenterFocus content={[{"text": "但在科学界，", "startFrame": 0, "durationFrames": 27}, {"text": "判断一个东西到底靠不靠谱，", "startFrame": 26, "durationFrames": 58}, {"text": "其实有一把最硬的标尺。", "startFrame": 84, "durationFrames": 62}, {"text": "在科学哲学上，", "startFrame": 145, "durationFrames": 35}, {"text": "这叫作证伪性。", "startFrame": 180, "durationFrames": 41}]} totalDurationFrames={221} imageSrc={staticFile("images/可证伪性/scene_3_1.png")} enterEffect="fadeIn" anchors={[{"text": "证伪性", "showFrom": 4, "color": "#000000", "anim": "spring", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={221} durationInFrames={185}>
                <BWConceptCard content={[{"text": "简单来说，", "startFrame": 0, "durationFrames": 28}, {"text": "一个理论如果是科学的，", "startFrame": 27, "durationFrames": 56}, {"text": "它必须敢于告诉大家：", "startFrame": 82, "durationFrames": 46}, {"text": "在什么情况下，", "startFrame": 128, "durationFrames": 31}, {"text": "我是错的。", "startFrame": 159, "durationFrames": 26}]} totalDurationFrames={185} imageSrc={staticFile("images/可证伪性/scene_3_2.png")} conceptName={"证伪性"} anchors={[]} />
            </Sequence>
            <Sequence from={406} durationInFrames={397}>
                <BWSplitCompare content={[{"text": "这听起来可能有点反直觉，", "startFrame": 0, "durationFrames": 52}, {"text": "但你仔细想想，", "startFrame": 51, "durationFrames": 35}, {"text": "这就像我们去相亲，", "startFrame": 86, "durationFrames": 45}, {"text": "对方如果说“我这人性格好”，", "startFrame": 130, "durationFrames": 64}, {"text": "这没法验证；", "startFrame": 194, "durationFrames": 33}, {"text": "但如果他说“我从来不迟到”，", "startFrame": 226, "durationFrames": 57}, {"text": "这就是可证伪的，", "startFrame": 283, "durationFrames": 39}, {"text": "只要他迟到一次，", "startFrame": 321, "durationFrames": 34}, {"text": "我们就知道他在撒谎。", "startFrame": 355, "durationFrames": 42}]} totalDurationFrames={397} leftSrc={staticFile("images/可证伪性/scene_3_3_left.png")} rightSrc={staticFile("images/可证伪性/scene_3_3_right.png")} leftLabel={"主观"} rightLabel={"客观"} anchors={[]} />
            </Sequence>
            <Sequence from={803} durationInFrames={208}>
                <BWCognitiveShift content={[{"text": "真正的科学不是为了证明自己永远正确，", "startFrame": 0, "durationFrames": 87}, {"text": "而是通过不断证明自己“哪里错了”来逼近真相。", "startFrame": 86, "durationFrames": 122}]} totalDurationFrames={208} notText={"证明自己永远正确"} butText={"证明哪里错了"} butSrc={staticFile("images/可证伪性/scene_3_4.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Sequence from={1011} durationInFrames={293}>
                <BWCenterFocus content={[{"text": "如果一个说法无论发生什么、", "startFrame": 0, "durationFrames": 57}, {"text": "无论结果如何，", "startFrame": 56, "durationFrames": 38}, {"text": "都能逻辑自洽地解释通，", "startFrame": 93, "durationFrames": 57}, {"text": "那它在科学眼里其实就是一句废话，", "startFrame": 150, "durationFrames": 82}, {"text": "跟星座算命没什么区别。", "startFrame": 232, "durationFrames": 61}]} totalDurationFrames={293} imageSrc={staticFile("images/可证伪性/scene_3_5.png")} enterEffect="fadeIn" anchors={[{"text": "逻辑自洽", "showFrom": 2, "color": "#000000", "anim": "spring", "audioEffect": "ping"}, {"text": "一句废话", "showFrom": 3, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/可证伪性/scene_3/scene_3.mp3")} />
        </AbsoluteFill>
    );
};
