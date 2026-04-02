import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift } from "../../../components";

// 算法的视觉霸凌
const SCENE_DURATION = 131 + 273 + 269;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={131}>
                <BWCenterFocus content={[{"text": "请立刻停下来，", "startFrame": 0, "durationFrames": 35}, {"text": "不要再用这种精心包装的幻觉来惩罚你自己了。", "startFrame": 34, "durationFrames": 96}]} totalDurationFrames={131} imageSrc={staticFile("images/样本偏差/scene_2_1.png")} enterEffect="fadeIn" anchors={[{"text": "停下来", "showFrom": 0, "color": null, "anim": "spring", "audioEffect": "ping"}, {"text": "幻觉", "showFrom": 1, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={131} durationInFrames={273}>
                <BWCognitiveShift content={[{"text": "我们每天都在遭受着平台算法极其隐蔽的视觉霸凌，", "startFrame": 0, "durationFrames": 113}, {"text": "不知不觉地错把互联网精准投喂的信息茧房，", "startFrame": 112, "durationFrames": 105}, {"text": "当成了外面真实的全世界。", "startFrame": 217, "durationFrames": 56}]} totalDurationFrames={273} notText={"视觉霸凌"} butText={"真实全世界"} butSrc={staticFile("images/样本偏差/scene_2_2.png")} notContentIndex={0} butContentIndex={2} anchors={[]} />
            </Sequence>
            <Sequence from={404} durationInFrames={269}>
                <BWCognitiveShift content={[{"text": "其实根本不是我们混得太差，", "startFrame": 0, "durationFrames": 52}, {"text": "而是那些收割注意力的资本和网红，", "startFrame": 51, "durationFrames": 72}, {"text": "联合起来刻意制造了这种群体性的生存焦虑，", "startFrame": 123, "durationFrames": 90}, {"text": "以此来掏空我们的口袋。", "startFrame": 212, "durationFrames": 57}]} totalDurationFrames={269} notText={"我们混得太差"} butText={"资本网红收割"} butSrc={staticFile("images/样本偏差/scene_2_3.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/样本偏差/scene_2/scene_2.mp3")} />
        </AbsoluteFill>
    );
};
