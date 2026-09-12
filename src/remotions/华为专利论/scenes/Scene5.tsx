import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift } from "../../../components";

// 剖析·专利封锁
const SCENE_DURATION = 265 + 114 + 130;

export const calculateScene5Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene5: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={265}>
                <BWCognitiveShift content={[{"text": "经济学早就证明：", "startFrame": 0, "durationFrames": 39}, {"text": "电信、软件这种复杂行业，", "startFrame": 38, "durationFrames": 65}, {"text": "专利越密，", "startFrame": 102, "durationFrames": 23}, {"text": "小公司越不敢进场。", "startFrame": 125, "durationFrames": 45}, {"text": "不是他们不想创新，", "startFrame": 170, "durationFrames": 42}, {"text": "是他们请不起律师团。", "startFrame": 211, "durationFrames": 53}]} totalDurationFrames={265} notText={"不想创新"} butText={"请不起律师团"} butSrc={staticFile("images/华为专利论/scene_5_2.png")} notContentIndex={5} butContentIndex={6} anchors={[]} />
            </Sequence>
            <Sequence from={265} durationInFrames={114}>
                <BWCenterFocus content={[{"text": "华为在局部技术节点上，", "startFrame": 0, "durationFrames": 57}, {"text": "织几百上千张重叠的网。", "startFrame": 56, "durationFrames": 57}]} totalDurationFrames={114} imageSrc={staticFile("images/华为专利论/scene_5_3.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={379} durationInFrames={130}>
                <BWCenterFocus content={[{"text": "你想做兼容设备？", "startFrame": 0, "durationFrames": 53}, {"text": "想改一点交互？", "startFrame": 52, "durationFrames": 42}, {"text": "一脚踩雷。", "startFrame": 93, "durationFrames": 36}]} totalDurationFrames={130} imageSrc={staticFile("images/华为专利论/scene_5_4.png")} enterEffect="fadeIn" anchors={[{"text": "踩雷", "showFrom": 2, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/华为专利论/scene_5/scene_5.mp3")} />
        </AbsoluteFill>
    );
};
