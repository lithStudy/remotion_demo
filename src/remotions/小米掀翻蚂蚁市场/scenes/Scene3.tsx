import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus } from "../../../components";

// 8080战略
const SCENE_DURATION = 218;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={218}>
                <BWCenterFocus content={[{"text": "小米带着资本和效率杀进来。", "startFrame": 0, "durationFrames": 64}, {"text": "用所谓八零八零法则，", "startFrame": 63, "durationFrames": 52}, {"text": "抓住八成大众刚需、", "startFrame": 114, "durationFrames": 52}, {"text": "用八成资源把它打穿。", "startFrame": 165, "durationFrames": 52}]} totalDurationFrames={218} imageSrc={staticFile("images/小米掀翻蚂蚁市场/scene_3_1.png")} enterEffect="slideLeft" anchors={[{"text": "8080法则", "showFrom": 0, "color": "#EF4444", "anim": "highlight", "audioEffect": "woosh"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/小米掀翻蚂蚁市场/scene_3/scene_3.mp3")} />
        </AbsoluteFill>
    );
};
