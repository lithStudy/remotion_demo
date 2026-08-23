import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift, BWKpiHero, BWTextFocus } from "../../../components";

// 剖析·知识围墙的打破
const SCENE_DURATION = 86 + 87 + 99 + 139 + 98 + 144 + 77;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={86}>
                <BWCenterFocus content={[{"text": "在知识面前，", "startFrame": 0, "durationFrames": 31}, {"text": "开源也在打破围墙。", "startFrame": 30, "durationFrames": 55}]} totalDurationFrames={86} imageSrc={staticFile("images/开源精神/scene_4_1.png")} enterEffect="fadeIn" anchors={[{"text": "开源", "showFrom": 1, "color": "#000000", "anim": "spring"}]} />
            </Sequence>
            <Sequence from={86} durationInFrames={87}>
                <BWKpiHero content={[{"text": "维基百科拥有超过6500万个页面，", "startFrame": 0, "durationFrames": 87}]} totalDurationFrames={87} value={6500} prefix={"超过"} suffix={"万"} label={"维基百科"} useGrouping={true} decimalPlaces={0} />
            </Sequence>
            <Sequence from={173} durationInFrames={99}>
                <BWKpiHero content={[{"text": "全球网民每年在这里耗费29亿小时去学习。", "startFrame": 0, "durationFrames": 99}]} totalDurationFrames={99} value={29} suffix={"亿小时"} label={"每年学习时长"} useGrouping={false} />
            </Sequence>
            <Sequence from={272} durationInFrames={139}>
                <BWKpiHero content={[{"text": "麻省理工的开源课程，", "startFrame": 0, "durationFrames": 58}, {"text": "累计播放量突破4.2亿次。", "startFrame": 57, "durationFrames": 81}]} totalDurationFrames={139} blocks={[{"value": 4.2, "decimalPlaces": 1, "suffix": "亿次", "label": "累计播放量", "showFrom": 1}]} countDuration={28} />
            </Sequence>
            <Sequence from={411} durationInFrames={98}>
                <BWCognitiveShift content={[{"text": "这不仅仅是代码的公开，", "startFrame": 0, "durationFrames": 47}, {"text": "更是“生存机会”的公开。", "startFrame": 46, "durationFrames": 51}]} totalDurationFrames={98} notText={"代码的公开"} butText={"生存机会的公开"} butSrc={staticFile("images/开源精神/scene_4_5.png")} notContentIndex={0} butContentIndex={1} />
            </Sequence>
            <Sequence from={509} durationInFrames={144}>
                <BWCenterFocus content={[{"text": "它让一个偏远山区的孩子，", "startFrame": 0, "durationFrames": 52}, {"text": "可以和硅谷工程师看到一模一样的底层逻辑。", "startFrame": 51, "durationFrames": 93}]} totalDurationFrames={144} imageSrc={staticFile("images/开源精神/scene_4_6.png")} enterEffect="fadeIn" anchors={[{"text": "底层逻辑", "showFrom": 1, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={653} durationInFrames={77}>
                <BWTextFocus content={[{"text": "这就是科技带给人类，", "startFrame": 0, "durationFrames": 41}, {"text": "最顶级的温柔", "startFrame": 40, "durationFrames": 36}]} totalDurationFrames={77} coreSentence={["这就是科技带给人类，", "最顶级的温柔。"]} coreSentenceAnchors={[{"coreSentenceAnchor": "最顶级的温柔"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/开源精神/scene_4/scene_4.mp3")} />
        </AbsoluteFill>
    );
};
