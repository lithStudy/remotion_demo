import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift } from "../../../components";

// 算法的视觉霸凌
const SCENE_DURATION = 76 + 125 + 139;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={76}>
                <BWCenterFocus content={[{"text": "请立刻停下来，", "startFrame": 0, "durationFrames": 30}, {"text": "不要再用这种精心包装的幻觉来惩罚你自己了。", "startFrame": 30, "durationFrames": 46}]} totalDurationFrames={76} imageSrc={staticFile("一个人停下脚步，周围环境变得模糊")} enterEffect="fadeIn" anchors={[{"text": "停下来", "showFrom": 0, "color": null, "anim": "spring", "audioEffect": "ping"}, {"text": "幻觉", "showFrom": 1, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={76} durationInFrames={125}>
                <BWCognitiveShift content={[{"text": "我们每天都在遭受着平台算法极其隐蔽的视觉霸凌，", "startFrame": 0, "durationFrames": 51}, {"text": "不知不觉地错把互联网精准投喂的信息茧房，", "startFrame": 51, "durationFrames": 44}, {"text": "当成了外面真实的全世界。", "startFrame": 95, "durationFrames": 30}]} totalDurationFrames={125} notText={"视觉霸凌"} butText={"真实全世界"} butSrc={staticFile("阳光明媚的真实城市")} notContentIndex={0} butContentIndex={2} anchors={[]} />
            </Sequence>
            <Sequence from={201} durationInFrames={139}>
                <BWCognitiveShift content={[{"text": "其实根本不是我们混得太差，", "startFrame": 0, "durationFrames": 30}, {"text": "而是那些收割注意力的资本和网红，", "startFrame": 30, "durationFrames": 35}, {"text": "联合起来刻意制造了这种群体性的生存焦虑，", "startFrame": 65, "durationFrames": 44}, {"text": "以此来掏空我们的口袋。", "startFrame": 109, "durationFrames": 30}]} totalDurationFrames={139} notText={"我们混得太差"} butText={"资本网红收割"} butSrc={staticFile("一群网红在直播，背后是巨大的资本logo")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>

        </AbsoluteFill>
    );
};
