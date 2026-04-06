import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWDosAndDonts } from "../../../components";

// 剖析·恐惧劫持与本能
const SCENE_DURATION = 70 + 67 + 131;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={70}>
                <BWDosAndDonts content={[{"text": "我们总以为这是出于谨慎的理性选择。", "startFrame": 0, "durationFrames": 37}, {"text": "但其实我们又被恐惧情绪劫持了。", "startFrame": 37, "durationFrames": 33}]} totalDurationFrames={70} leftSrc={staticFile("冷静天平与理性面具的极简剪影，象征自以为的理性决策")} rightSrc={staticFile("大脑被红色警报与阴影笼罩的极简剪影，象征恐惧情绪劫持")} dontLabel={"❌ 以为理性"} doLabel={"✅ 恐惧劫持"} />
            </Sequence>
            <Sequence from={70} durationInFrames={67}>
                <BWDosAndDonts content={[{"text": "这不是因为我们胆小怕事。", "startFrame": 0, "durationFrames": 30}, {"text": "而是原始基因刻在骨子里的生存本能。", "startFrame": 30, "durationFrames": 37}]} totalDurationFrames={67} leftSrc={staticFile("退缩胆怯、缩成一团的小人极简剪影")} rightSrc={staticFile("DNA双螺旋与远古生存本能象征的极简黑白矢量图")} dontLabel={"❌ 胆小怕事"} doLabel={"✅ 生存本能"} />
            </Sequence>
            <Sequence from={137} durationInFrames={131}>
                <BWCenterFocus content={[{"text": "在这个流量为王的焦躁时代。", "startFrame": 0, "durationFrames": 30}, {"text": "媒体最喜欢放大的就是罕见极端事件。", "startFrame": 30, "durationFrames": 37}, {"text": "这些新闻像病毒一样霸占屏幕。", "startFrame": 67, "durationFrames": 31}, {"text": "让我们误以为这个世界极度危险。", "startFrame": 98, "durationFrames": 33}]} totalDurationFrames={131} imageSrc={staticFile("手机屏幕被爆炸标题与新闻弹窗占满的极简图示")} enterEffect="fadeIn" anchors={[{"text": "流量为王", "showFrom": 0, "color": "#EF4444", "anim": "popIn", "audioEffect": "woosh"}, {"text": "罕见极端事件", "showFrom": 1, "color": "#EF4444", "anim": "highlight", "audioEffect": null}, {"text": "极度危险", "showFrom": 3, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>

        </AbsoluteFill>
    );
};
