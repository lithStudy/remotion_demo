import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWDosAndDonts } from "../../../components";

// 双标反转
const SCENE_DURATION = 350;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={350}>
                <BWDosAndDonts content={[{"text": "弱者用这种双标来麻痹自尊，", "startFrame": 0, "durationFrames": 72}, {"text": "靠这种滤镜维持活下去的勇气。", "startFrame": 72, "durationFrames": 63}, {"text": "却也用它封死了自己进化的通道。", "startFrame": 134, "durationFrames": 81}, {"text": "但强者从不被这个机制奴役,", "startFrame": 214, "durationFrames": 71}, {"text": "他们用反向双标来平衡世界。", "startFrame": 285, "durationFrames": 64}]} totalDurationFrames={350} left={{label: "❌ 弱者", src: staticFile("images/认知偏差_自利偏差/scene_3_1_left.png"), showFrom: 0 }} right={{label: "✅ 强者", src: staticFile("images/认知偏差_自利偏差/scene_3_1_right.png"), showFrom: 3 }} />
            </Sequence>
            <Audio src={staticFile("/audio/认知偏差_自利偏差/scene_3/scene_3.mp3")} />
        </AbsoluteFill>
    );
};
