import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWConceptCard } from "../../../components";

// 剖析：归因偏差
const SCENE_DURATION = 206;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={206}>
                <BWConceptCard content={[{"text": "心理学上，", "startFrame": 0, "durationFrames": 30}, {"text": "这叫基本归因错误。", "startFrame": 30, "durationFrames": 30}, {"text": "简单说，就是评估别人时，", "startFrame": 60, "durationFrames": 30}, {"text": "我们习惯性归因为性格、人品或者态度。", "startFrame": 90, "durationFrames": 40}, {"text": "却无意识地，", "startFrame": 130, "durationFrames": 30}, {"text": "把对方身处的环境、压力、无奈，彻底抹杀了。", "startFrame": 160, "durationFrames": 46}]} totalDurationFrames={206} imageSrc={staticFile("大脑简笔画图标")} conceptName={"基本归因错误"} anchors={[]} />
            </Sequence>

        </AbsoluteFill>
    );
};
