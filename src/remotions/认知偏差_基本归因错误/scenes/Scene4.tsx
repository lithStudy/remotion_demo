import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWMethodStack } from "../../../components";

// 召唤：两招破局
const SCENE_DURATION = 108 + 472 + 196;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={108}>
                <BWCenterFocus content={[{"text": "作为一个聪明人，要想对抗这种偏见，记住两招。", "startFrame": 0, "durationFrames": 108}]} totalDurationFrames={108} imageSrc={staticFile("images/认知偏差_基本归因错误/scene_4_1.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={108} durationInFrames={472}>
                <BWMethodStack content={[{"text": "第一招，强制外因替代。", "startFrame": 0, "durationFrames": 68}, {"text": "当你被对方的行为刺痛时，", "startFrame": 67, "durationFrames": 58}, {"text": "立刻在心里默念：", "startFrame": 125, "durationFrames": 44}, {"text": "他可能正经历着我不知道的危机。", "startFrame": 169, "durationFrames": 67}, {"text": "比如，他刚才收到了裁员通知，", "startFrame": 235, "durationFrames": 67}, {"text": "或者他刚和家里大吵一架。", "startFrame": 302, "durationFrames": 68}, {"text": "用“处境”代替“人品”，", "startFrame": 369, "durationFrames": 53}, {"text": "你的怒火瞬间就会熄灭。", "startFrame": 422, "durationFrames": 50}]} totalDurationFrames={472} title={"强制外因替代"} imageSrc={staticFile("images/认知偏差_基本归因错误/scene_4_2.png")} notes={[{"text": "对方可能有隐情", "showFrom": 3}, {"text": "用“处境”代替“人品", "showFrom": 6}]} anchors={[]} />
            </Sequence>
            <Sequence from={580} durationInFrames={196}>
                <BWMethodStack content={[{"text": "第二招，课题分离。", "startFrame": 0, "durationFrames": 51}, {"text": "他的情绪是他的环境产物，", "startFrame": 50, "durationFrames": 58}, {"text": "与你无关。", "startFrame": 108, "durationFrames": 30}, {"text": "你只需要观察，", "startFrame": 137, "durationFrames": 28}, {"text": "不需要负责。", "startFrame": 164, "durationFrames": 31}]} totalDurationFrames={196} title={"课题分离"} imageSrc={staticFile("images/认知偏差_基本归因错误/scene_4_3.png")} notes={[{"text": "情绪多来自环境，非针对你", "showFrom": 1}, {"text": "只观察，不必替他负责", "showFrom": 3}]} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/认知偏差_基本归因错误/scene_4/scene_4.mp3")} />
        </AbsoluteFill>
    );
};
