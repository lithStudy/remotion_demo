import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWConceptCard } from "../../../components";

// 剖析：归因偏差
const SCENE_DURATION = 361;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={361}>
                <BWConceptCard content={[{"text": "心理学上，", "startFrame": 0, "durationFrames": 29}, {"text": "这叫基本归因错误。", "startFrame": 28, "durationFrames": 54}, {"text": "简单说，就是评估别人时，", "startFrame": 81, "durationFrames": 65}, {"text": "我们习惯性归因为性格、人品或者态度。", "startFrame": 146, "durationFrames": 90}, {"text": "却无意识地，", "startFrame": 235, "durationFrames": 27}, {"text": "把对方身处的环境、压力、无奈，彻底抹杀了。", "startFrame": 261, "durationFrames": 99}]} totalDurationFrames={361} imageSrc={staticFile("images/认知偏差_基本归因错误/scene_2_1.png")} conceptName={"基本归因错误"} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/认知偏差_基本归因错误/scene_2/scene_2.mp3")} />
        </AbsoluteFill>
    );
};
