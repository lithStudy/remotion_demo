import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift, BWKpiHero, BWTextFocus } from "../../../components";

// 剖析·知识围墙的打破
const SCENE_DURATION = 86 + 89 + 116 + 131 + 114 + 129 + 80;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={86}>
                <BWCenterFocus content={[{"text": "在知识面前，", "startFrame": 0, "durationFrames": 32}, {"text": "开源也在打破围墙。", "startFrame": 31, "durationFrames": 54}]} totalDurationFrames={86} imageSrc={staticFile("images/开源精神/scene_4_1.png")} enterEffect="fadeIn" anchors={[{"text": "开源", "showFrom": 1, "color": "#000000", "anim": "spring"}]} />
            </Sequence>
            <Sequence from={86} durationInFrames={89}>
                <BWKpiHero content={[{"text": "维基百科拥有超过6500万个页面，", "startFrame": 0, "durationFrames": 89}]} totalDurationFrames={89} value={6500} prefix={"超过"} suffix={"万"} label={"维基百科"} useGrouping={true} decimalPlaces={0} />
            </Sequence>
            <Sequence from={175} durationInFrames={116}>
                <BWKpiHero content={[{"text": "全球网民每年在这里耗费29亿小时去学习。", "startFrame": 0, "durationFrames": 116}]} totalDurationFrames={116} value={29} suffix={"亿小时"} label={"每年学习时长"} useGrouping={false} />
            </Sequence>
            <Sequence from={291} durationInFrames={131}>
                <BWKpiHero content={[{"text": "麻省理工的开源课程，", "startFrame": 0, "durationFrames": 57}, {"text": "累计播放量突破4.2亿次。", "startFrame": 56, "durationFrames": 75}]} totalDurationFrames={131} blocks={[{"value": 4.2, "decimalPlaces": 1, "suffix": "亿次", "label": "累计播放量", "showFrom": 1}]} countDuration={28} />
            </Sequence>
            <Sequence from={422} durationInFrames={114}>
                <BWCognitiveShift content={[{"text": "这不仅仅是代码的公开，", "startFrame": 0, "durationFrames": 61}, {"text": "更是“生存机会”的公开。", "startFrame": 60, "durationFrames": 54}]} totalDurationFrames={114} notText={"代码的公开"} butText={"生存机会的公开"} butSrc={staticFile("images/开源精神/scene_4_5.png")} notContentIndex={0} butContentIndex={1} />
            </Sequence>
            <Sequence from={536} durationInFrames={129}>
                <BWCenterFocus content={[{"text": "它让一个偏远山区的孩子，", "startFrame": 0, "durationFrames": 48}, {"text": "可以和硅谷工程师看到一模一样的底层逻辑。", "startFrame": 48, "durationFrames": 81}]} totalDurationFrames={129} imageSrc={staticFile("images/开源精神/scene_4_6.png")} enterEffect="fadeIn" anchors={[{"text": "底层逻辑", "showFrom": 1, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={665} durationInFrames={80}>
                <BWTextFocus content={[{"text": "这就是科技带给人类，", "startFrame": 0, "durationFrames": 40}, {"text": "最顶级的温柔", "startFrame": 39, "durationFrames": 41}]} totalDurationFrames={80} coreSentence={["这就是科技带给人类，", "最顶级的温柔。"]} coreSentenceAnchors={[{"coreSentenceAnchor": "最顶级的温柔"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/开源精神/scene_4/scene_4.mp3")} />
        </AbsoluteFill>
    );
};
