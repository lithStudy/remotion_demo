import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWDosAndDonts } from "../../../components";

// 剖析·恐惧劫持与本能
const SCENE_DURATION = 144 + 146 + 273;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={144}>
                <BWDosAndDonts content={[{"text": "我们总以为这是出于谨慎的理性选择。", "startFrame": 0, "durationFrames": 86}, {"text": "但其实我们又被恐惧情绪劫持了。", "startFrame": 85, "durationFrames": 59}]} totalDurationFrames={144} leftSrc={staticFile("images/认知偏见_可得性启发/scene_2_1_left.png")} rightSrc={staticFile("images/认知偏见_可得性启发/scene_2_1_right.png")} dontLabel={"❌ 以为理性"} doLabel={"✅ 恐惧劫持"} />
            </Sequence>
            <Sequence from={144} durationInFrames={146}>
                <BWDosAndDonts content={[{"text": "这不是因为我们胆小怕事。", "startFrame": 0, "durationFrames": 47}, {"text": "而是原始基因刻在骨子里的生存本能。", "startFrame": 46, "durationFrames": 99}]} totalDurationFrames={146} leftSrc={staticFile("images/认知偏见_可得性启发/scene_2_2_left.png")} rightSrc={staticFile("images/认知偏见_可得性启发/scene_2_2_right.png")} dontLabel={"❌ 胆小怕事"} doLabel={"✅ 生存本能"} />
            </Sequence>
            <Sequence from={290} durationInFrames={273}>
                <BWCenterFocus content={[{"text": "在这个流量为王的焦躁时代。", "startFrame": 0, "durationFrames": 55}, {"text": "媒体最喜欢放大的就是罕见极端事件。", "startFrame": 54, "durationFrames": 91}, {"text": "这些新闻像病毒一样霸占屏幕。", "startFrame": 145, "durationFrames": 63}, {"text": "让我们误以为这个世界极度危险。", "startFrame": 207, "durationFrames": 66}]} totalDurationFrames={273} imageSrc={staticFile("images/认知偏见_可得性启发/scene_2_3.png")} enterEffect="fadeIn" anchors={[{"text": "流量为王", "showFrom": 0, "color": "#EF4444", "anim": "popIn", "audioEffect": "woosh"}, {"text": "罕见极端事件", "showFrom": 1, "color": "#EF4444", "anim": "highlight", "audioEffect": null}, {"text": "极度危险", "showFrom": 3, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/认知偏见_可得性启发/scene_2/scene_2.mp3")} />
        </AbsoluteFill>
    );
};
