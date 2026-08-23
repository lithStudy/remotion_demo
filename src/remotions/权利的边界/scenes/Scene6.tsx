import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWMethodStack } from "../../../components";

// 提醒·两个边界
const SCENE_DURATION = 133 + 338 + 421;

export const calculateScene6Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene6: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={133}>
                <BWCenterFocus content={[{"text": "普通人理解这句话，", "startFrame": 0, "durationFrames": 34}, {"text": "也不能只把它当作一句浪漫的话。", "startFrame": 33, "durationFrames": 58}, {"text": "它有两个现实提醒。", "startFrame": 91, "durationFrames": 42}]} totalDurationFrames={133} imageSrc={staticFile("images/权利的边界/scene_6_1.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={133} durationInFrames={338}>
                <BWMethodStack content={[{"text": "第一，", "startFrame": 0, "durationFrames": 15}, {"text": "看权力时，", "startFrame": 14, "durationFrames": 32}, {"text": "不要只看它承诺什么。", "startFrame": 45, "durationFrames": 44}, {"text": "要看它不能做什么。", "startFrame": 89, "durationFrames": 42}, {"text": "一个权力说了很多好听的话，", "startFrame": 130, "durationFrames": 54}, {"text": "不代表它被约束了。", "startFrame": 183, "durationFrames": 41}, {"text": "真正的约束，", "startFrame": 224, "durationFrames": 29}, {"text": "是它想进打破边界时，", "startFrame": 253, "durationFrames": 45}, {"text": "有没有人能拦住它。", "startFrame": 297, "durationFrames": 40}]} totalDurationFrames={338} title={"看权力边界"} imageSrc={staticFile("images/权利的边界/scene_6_2.png")} notes={[{"text": "不只看它承诺什么", "showFrom": 2}, {"text": "看它不能做什么", "showFrom": 3}]} anchors={[]} />
            </Sequence>
            <Sequence from={471} durationInFrames={421}>
                <BWMethodStack content={[{"text": "第二，", "startFrame": 0, "durationFrames": 16}, {"text": "看规则时，", "startFrame": 15, "durationFrames": 29}, {"text": "不要嫌程序麻烦。", "startFrame": 43, "durationFrames": 43}, {"text": "程序看起来慢。", "startFrame": 86, "durationFrames": 35}, {"text": "可它保护的，", "startFrame": 120, "durationFrames": 28}, {"text": "正是普通人。", "startFrame": 147, "durationFrames": 33}, {"text": "敲门很慢。", "startFrame": 180, "durationFrames": 34}, {"text": "授权很慢。", "startFrame": 214, "durationFrames": 30}, {"text": "审查很慢。", "startFrame": 243, "durationFrames": 29}, {"text": "留下记录也很慢。", "startFrame": 271, "durationFrames": 51}, {"text": "但这些慢，", "startFrame": 321, "durationFrames": 31}, {"text": "都是在告诉权力，", "startFrame": 352, "durationFrames": 38}, {"text": "你不是主人。", "startFrame": 389, "durationFrames": 31}]} totalDurationFrames={421} title={"看规则边界"} imageSrc={staticFile("images/权利的边界/scene_6_3.png")} notes={[{"text": "不要嫌程序麻烦", "showFrom": 3}, {"text": "慢是保护普通人", "showFrom": 4}]} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/权利的边界/scene_6/scene_6.mp3")} />
        </AbsoluteFill>
    );
};
