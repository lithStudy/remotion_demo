import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWDosAndDonts } from "../../../components";

// 剖析·恐惧劫持与本能
const SCENE_DURATION = 151 + 128 + 291;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={151}>
                <BWDosAndDonts content={[{"text": "我们总以为这是出于谨慎的理性选择，", "startFrame": 0, "durationFrames": 77}, {"text": "但其实我们又被恐惧情绪劫持了。", "startFrame": 76, "durationFrames": 75}]} totalDurationFrames={151} left={{ label: "❌ 以为理性", src: staticFile("images/认知偏见_可得性启发/scene_2_1_left.png"), showFrom: 0 }} right={{ label: "✅ 恐惧劫持", src: staticFile("images/认知偏见_可得性启发/scene_2_1_right.png"), showFrom: 10 }} />
            </Sequence>
            <Sequence from={151} durationInFrames={128}>
                <BWDosAndDonts content={[{"text": "这不是因为我们胆小怕事，", "startFrame": 0, "durationFrames": 46}, {"text": "而是原始基因刻在骨子里的生存本能。", "startFrame": 45, "durationFrames": 82}]} totalDurationFrames={128} left={{ label: "❌ 胆小怕事", src: staticFile("images/认知偏见_可得性启发/scene_2_2_left.png"), showFrom: 0 }} right={{ label: "✅ 生存本能", src: staticFile("images/认知偏见_可得性启发/scene_2_2_right.png"), showFrom: 10 }} />
            </Sequence>
            <Sequence from={279} durationInFrames={291}>
                <BWCenterFocus content={[{"text": "在这个流量为王的焦躁时代，", "startFrame": 0, "durationFrames": 60}, {"text": "媒体最喜欢放大的就是罕见极端事件。", "startFrame": 59, "durationFrames": 86}, {"text": "这些新闻像病毒一样霸占屏幕，", "startFrame": 145, "durationFrames": 69}, {"text": "让我们误以为这个世界极度危险。", "startFrame": 214, "durationFrames": 77}]} totalDurationFrames={291} imageSrc={staticFile("images/认知偏见_可得性启发/scene_2_3.png")} enterEffect="fadeIn" anchors={[{"text": "流量为王", "showFrom": 0, "color": "#EF4444", "anim": "popIn", "audioEffect": "woosh"}, {"text": "罕见极端事件", "showFrom": 1, "color": "#EF4444", "anim": "highlight", "audioEffect": null}, {"text": "极度危险", "showFrom": 3, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/认知偏见_可得性启发/scene_2/scene_2.mp3")} />
        </AbsoluteFill>
    );
};
