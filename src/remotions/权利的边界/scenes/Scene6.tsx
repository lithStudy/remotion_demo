import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWMethodStack } from "../../../components";

// 提醒·两个边界
const SCENE_DURATION = 136 + 361 + 406;

export const calculateScene6Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene6: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={136}>
                <BWCenterFocus content={[{"text": "普通人理解这句话，", "startFrame": 0, "durationFrames": 34}, {"text": "也不能只把它当作一句浪漫的话。", "startFrame": 33, "durationFrames": 61}, {"text": "它有两个现实提醒。", "startFrame": 93, "durationFrames": 42}]} totalDurationFrames={136} imageSrc={staticFile("images/权利的边界/scene_6_1.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={136} durationInFrames={361}>
                <BWMethodStack content={[{"text": "第一，", "startFrame": 0, "durationFrames": 18}, {"text": "看权力时，", "startFrame": 17, "durationFrames": 30}, {"text": "不要只看它承诺什么。", "startFrame": 46, "durationFrames": 45}, {"text": "要看它不能做什么。", "startFrame": 91, "durationFrames": 47}, {"text": "一个权力说了很多好听的话，", "startFrame": 138, "durationFrames": 58}, {"text": "不代表它被约束了。", "startFrame": 196, "durationFrames": 42}, {"text": "真正的约束，", "startFrame": 237, "durationFrames": 32}, {"text": "是它想进打破边界时，", "startFrame": 269, "durationFrames": 51}, {"text": "有没有人能拦住它。", "startFrame": 319, "durationFrames": 42}]} totalDurationFrames={361} title={"看权力边界"} imageSrc={staticFile("images/权利的边界/scene_6_2.png")} notes={[{"text": "不只看它承诺什么", "showFrom": 2}, {"text": "看它不能做什么", "showFrom": 3}]} anchors={[]} />
            </Sequence>
            <Sequence from={497} durationInFrames={406}>
                <BWMethodStack content={[{"text": "第二，", "startFrame": 0, "durationFrames": 17}, {"text": "看规则时，", "startFrame": 16, "durationFrames": 30}, {"text": "不要嫌程序麻烦。", "startFrame": 45, "durationFrames": 40}, {"text": "程序看起来慢。", "startFrame": 85, "durationFrames": 36}, {"text": "可它保护的，", "startFrame": 120, "durationFrames": 22}, {"text": "正是普通人。", "startFrame": 142, "durationFrames": 33}, {"text": "敲门很慢。", "startFrame": 174, "durationFrames": 28}, {"text": "授权很慢。", "startFrame": 202, "durationFrames": 31}, {"text": "审查很慢。", "startFrame": 232, "durationFrames": 34}, {"text": "留下记录也很慢。", "startFrame": 266, "durationFrames": 42}, {"text": "但这些慢，", "startFrame": 308, "durationFrames": 29}, {"text": "都是在告诉权力，", "startFrame": 336, "durationFrames": 37}, {"text": "你不是主人。", "startFrame": 372, "durationFrames": 33}]} totalDurationFrames={406} title={"看规则边界"} imageSrc={staticFile("images/权利的边界/scene_6_3.png")} notes={[{"text": "不要嫌程序麻烦", "showFrom": 3}, {"text": "慢是保护普通人", "showFrom": 4}]} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/权利的边界/scene_6/scene_6.mp3")} />
        </AbsoluteFill>
    );
};
