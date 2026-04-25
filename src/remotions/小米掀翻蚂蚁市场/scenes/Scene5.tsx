import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus } from "../../../components";

// 降维打击
const SCENE_DURATION = 260;

export const calculateScene5Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene5: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={260}>
                <BWCenterFocus content={[{"text": "后面几代米家扫地机，", "startFrame": 0, "durationFrames": 51}, {"text": "把当时 iRobot 那种三四千的“高价低配”，", "startFrame": 50, "durationFrames": 92}, {"text": "直接打到几百块。", "startFrame": 141, "durationFrames": 44}, {"text": "同时也让石头科技声名鹊起。", "startFrame": 185, "durationFrames": 75}]} totalDurationFrames={260} imageSrc={staticFile("images/小米掀翻蚂蚁市场/scene_5_1.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/小米掀翻蚂蚁市场/scene_5/scene_5.mp3")} />
        </AbsoluteFill>
    );
};
