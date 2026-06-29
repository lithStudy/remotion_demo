import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWChecklistReveal, BWDosAndDonts, BWTextFocus } from "../../../components";

// 例证·营销套路
const SCENE_DURATION = 117 + 185 + 187 + 257 + 62 + 214;

export const calculateScene5Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene5: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={117}>
                <BWCenterFocus content={[{"text": "实际上，", "startFrame": 0, "durationFrames": 22}, {"text": "华为相关的营销号干的这种破事已经不是第一次了。", "startFrame": 21, "durationFrames": 95}]} totalDurationFrames={117} imageSrc={staticFile("images/华为韬定律/scene_5_1.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={117} durationInFrames={185}>
                <BWDosAndDonts content={[{"text": "三进制专利，", "startFrame": 0, "durationFrames": 34}, {"text": "本来只是局部电路优化。", "startFrame": 33, "durationFrames": 52}, {"text": "到了营销号嘴里，", "startFrame": 85, "durationFrames": 39}, {"text": "就变成了打破美国计算标准。", "startFrame": 123, "durationFrames": 62}]} totalDurationFrames={185} left={{label: "❌ 打破美国计算标准", src: staticFile("images/华为韬定律/scene_5_2_left.png"), showFrom: 3 }} right={{label: "✅ 局部电路优化", src: staticFile("images/华为韬定律/scene_5_2_right.png"), showFrom: 1 }} anchors={[]} />
            </Sequence>
            <Sequence from={302} durationInFrames={187}>
                <BWDosAndDonts content={[{"text": "光子芯片，", "startFrame": 0, "durationFrames": 30}, {"text": "本来主要解决数据传输。", "startFrame": 29, "durationFrames": 63}, {"text": "到了营销号嘴里，", "startFrame": 91, "durationFrames": 39}, {"text": "就变成了光刻机要过时了", "startFrame": 129, "durationFrames": 55}, {"text": "。", "startFrame": 184, "durationFrames": 3}]} totalDurationFrames={187} left={{label: "❌ 光刻机要过时", src: staticFile("images/华为韬定律/scene_5_3_left.png"), showFrom: 3 }} right={{label: "✅ 解决数据传输", src: staticFile("images/华为韬定律/scene_5_3_right.png"), showFrom: 1 }} anchors={[]} />
            </Sequence>
            <Sequence from={489} durationInFrames={257}>
                <BWDosAndDonts content={[{"text": "四重图案化，", "startFrame": 0, "durationFrames": 33}, {"text": "本来是用更大代价的工艺，", "startFrame": 32, "durationFrames": 60}, {"text": "补偿没有先进光刻机的短板。", "startFrame": 92, "durationFrames": 69}, {"text": "到了营销号嘴里，", "startFrame": 161, "durationFrames": 34}, {"text": "就变成了中国版光刻厂。", "startFrame": 195, "durationFrames": 62}]} totalDurationFrames={257} left={{label: "❌ 中国版光刻厂", src: staticFile("images/华为韬定律/scene_5_4_left.png"), showFrom: 4 }} right={{label: "✅ 更大代价补偿短板", src: staticFile("images/华为韬定律/scene_5_4_right.png"), showFrom: 1 }} anchors={[]} />
            </Sequence>
            <Sequence from={746} durationInFrames={62}>
                <BWTextFocus content={[{"text": "你看，", "startFrame": 0, "durationFrames": 18}, {"text": "套路从来没变过。", "startFrame": 17, "durationFrames": 44}]} totalDurationFrames={62} coreSentence={[{"text": "套路从来没变过。", "showFrom": 1}]} coreSentenceAnchors={[]} />
            </Sequence>
            <Sequence from={808} durationInFrames={214}>
                <BWChecklistReveal content={[{"text": "工程补偿，", "startFrame": 0, "durationFrames": 32}, {"text": "说成弯道超车。", "startFrame": 31, "durationFrames": 46}, {"text": "局部优化，", "startFrame": 77, "durationFrames": 28}, {"text": "说成体系革命。", "startFrame": 104, "durationFrames": 34}, {"text": "技术路线，", "startFrame": 138, "durationFrames": 32}, {"text": "说成改写规则。", "startFrame": 169, "durationFrames": 44}]} totalDurationFrames={214} title={"营销号套路"} rows={[{"text": "工程补偿 → 弯道超车", "showFrom": 1}, {"text": "局部优化 → 体系革命", "showFrom": 3}, {"text": "技术路线 → 改写规则", "showFrom": 5}]} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/华为韬定律/scene_5/scene_5.mp3")} />
        </AbsoluteFill>
    );
};
