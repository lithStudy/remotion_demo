import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift } from "../../../components";

// 剖析·专利封锁
const SCENE_DURATION = 280 + 114 + 120;

export const calculateScene5Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene5: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={280}>
                <BWCognitiveShift content={[{"text": "经济学早就证明：", "startFrame": 0, "durationFrames": 42}, {"text": "电信、软件这种复杂行业，", "startFrame": 41, "durationFrames": 75}, {"text": "专利越密，", "startFrame": 115, "durationFrames": 28}, {"text": "小公司越不敢进场。", "startFrame": 142, "durationFrames": 43}, {"text": "不是他们不想创新，", "startFrame": 185, "durationFrames": 42}, {"text": "是他们请不起律师团。", "startFrame": 227, "durationFrames": 53}]} totalDurationFrames={280} notText={"不想创新"} butText={"请不起律师团"} butSrc={staticFile("images/华为专利论/scene_5_2.png")} notContentIndex={5} butContentIndex={6} anchors={[]} />
            </Sequence>
            <Sequence from={280} durationInFrames={114}>
                <BWCenterFocus content={[{"text": "华为在局部技术节点上，", "startFrame": 0, "durationFrames": 54}, {"text": "织几百上千张重叠的网。", "startFrame": 53, "durationFrames": 61}]} totalDurationFrames={114} imageSrc={staticFile("images/华为专利论/scene_5_3.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={394} durationInFrames={120}>
                <BWCenterFocus content={[{"text": "你想做兼容设备？", "startFrame": 0, "durationFrames": 46}, {"text": "想改一点交互？", "startFrame": 45, "durationFrames": 40}, {"text": "一脚踩雷。", "startFrame": 85, "durationFrames": 35}]} totalDurationFrames={120} imageSrc={staticFile("images/华为专利论/scene_5_4.png")} enterEffect="fadeIn" anchors={[{"text": "踩雷", "showFrom": 2, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/华为专利论/scene_5/scene_5.mp3")} />
        </AbsoluteFill>
    );
};
