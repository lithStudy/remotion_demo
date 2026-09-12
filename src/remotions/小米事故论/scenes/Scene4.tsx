import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWBeatSequence, BWCenterFocus, BWCognitiveShift, BWMethodStack } from "../../../components";

// 错觉剖析
const SCENE_DURATION = 91 + 393 + 277 + 214 + 332 + 217 + 186;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={91}>
                <BWCenterFocus content={[{"text": "那为什么很多人还是觉得，", "startFrame": 0, "durationFrames": 47}, {"text": "小米问题特别多？", "startFrame": 46, "durationFrames": 44}]} totalDurationFrames={91} imageSrc={staticFile("images/小米事故论/scene_4_1.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={91} durationInFrames={393}>
                <BWMethodStack content={[{"text": "第一，", "startFrame": 0, "durationFrames": 17}, {"text": "车的保有量太大。", "startFrame": 16, "durationFrames": 33}, {"text": "2026年1月，小米汽车总交付量就已经超过了60万辆", "startFrame": 49, "durationFrames": 131}, {"text": "就算一年只有0.1%的事故率，", "startFrame": 180, "durationFrames": 69}, {"text": "那也是600起事故。", "startFrame": 248, "durationFrames": 41}, {"text": "加上小米自带的流量属性，你看到的新闻自然多", "startFrame": 289, "durationFrames": 103}]} totalDurationFrames={393} title={"保有量太大"} imageSrc={staticFile("images/小米事故论/scene_4_2.png")} notes={[{"text": "交付超60万辆，基数巨大", "showFrom": 2}, {"text": "0.1%事故率也有600起", "showFrom": 4}, {"text": "自带流量，新闻自然多", "showFrom": 5}]} anchors={[]} />
            </Sequence>
            <Sequence from={484} durationInFrames={277}>
                <BWMethodStack content={[{"text": "第二，", "startFrame": 0, "durationFrames": 18}, {"text": "算法会追着兴趣跑。", "startFrame": 17, "durationFrames": 47}, {"text": "当你刷到小米汽车事故的视频，", "startFrame": 63, "durationFrames": 68}, {"text": "你多停留两秒，", "startFrame": 131, "durationFrames": 35}, {"text": "算法就会觉得你对这种视频感兴趣，", "startFrame": 166, "durationFrames": 71}, {"text": "它就多喂你十条。", "startFrame": 237, "durationFrames": 40}]} totalDurationFrames={277} title={"算法追着恐惧跑"} imageSrc={staticFile("images/小米事故论/scene_4_3.png")} notes={[{"text": "停留就是喂养算法", "showFrom": 3}, {"text": "越多推荐越强化恐惧回路", "showFrom": 5}]} anchors={[]} />
            </Sequence>
            <Sequence from={761} durationInFrames={214}>
                <BWMethodStack content={[{"text": "第三，", "startFrame": 0, "durationFrames": 16}, {"text": "重复会制造真实感。", "startFrame": 15, "durationFrames": 47}, {"text": "同一起事故，", "startFrame": 62, "durationFrames": 29}, {"text": "不同角度剪三遍。", "startFrame": 90, "durationFrames": 41}, {"text": "你以为是三起事故。", "startFrame": 130, "durationFrames": 36}, {"text": "其实都是一件事。", "startFrame": 166, "durationFrames": 47}]} totalDurationFrames={214} title={"重复制造真实感"} imageSrc={staticFile("images/小米事故论/scene_4_4.png")} notes={[{"text": "同一事故被切分成不同视角", "showFrom": 2}, {"text": "你误以为发生了多次", "showFrom": 4}]} anchors={[]} />
            </Sequence>
            <Sequence from={975} durationInFrames={332}>
                <BWMethodStack content={[{"text": "第四，", "startFrame": 0, "durationFrames": 19}, {"text": "某些下作的攻击者也会借题发挥。", "startFrame": 18, "durationFrames": 71}, {"text": "把事故、", "startFrame": 88, "durationFrames": 20}, {"text": "人为操作、", "startFrame": 108, "durationFrames": 27}, {"text": "旧视频，", "startFrame": 134, "durationFrames": 23}, {"text": "混在同一个标签里。", "startFrame": 157, "durationFrames": 50}, {"text": "最后留给你的，", "startFrame": 206, "durationFrames": 30}, {"text": "就只剩一个印象：", "startFrame": 235, "durationFrames": 47}, {"text": "小米怎么天天出事？", "startFrame": 282, "durationFrames": 50}]} totalDurationFrames={332} title={"借题发挥的陷阱"} imageSrc={staticFile("images/小米事故论/scene_4_5.png")} notes={[{"text": "恶意炒作攻击者", "showFrom": 1}, {"text": "混淆事故与人为", "showFrom": 5}, {"text": "重复暗示制造偏见", "showFrom": 8}]} anchors={[]} />
            </Sequence>
            <Sequence from={1307} durationInFrames={217}>
                <BWBeatSequence content={[{"text": "我们的大脑，", "startFrame": 0, "durationFrames": 21}, {"text": "天生相信重复。", "startFrame": 20, "durationFrames": 41}, {"text": "一件事出现十次，", "startFrame": 61, "durationFrames": 42}, {"text": "我们就觉得它常见。", "startFrame": 102, "durationFrames": 36}, {"text": "一件事刷屏三天，", "startFrame": 138, "durationFrames": 39}, {"text": "我们就觉得它严重。", "startFrame": 176, "durationFrames": 41}]} totalDurationFrames={217} stages={[{ imageSrc: staticFile("images/小米事故论/scene_4_6_img0.png"), enterEffect: "breathe", tone: "calm" }, { imageSrc: staticFile("images/小米事故论/scene_4_6_img1.png"), enterEffect: "slideBottom", tone: "alert", showFrom: 2 }, { imageSrc: staticFile("images/小米事故论/scene_4_6_img2.png"), enterEffect: "slideBottom", tone: "alert", showFrom: 4 }]} anchors={[]} />
            </Sequence>
            <Sequence from={1524} durationInFrames={186}>
                <BWCognitiveShift content={[{"text": "但互联网的重复，", "startFrame": 0, "durationFrames": 38}, {"text": "不是现实的重复。", "startFrame": 37, "durationFrames": 38}, {"text": "它是流量的重复。", "startFrame": 75, "durationFrames": 39}, {"text": "是情绪的重复。", "startFrame": 113, "durationFrames": 34}, {"text": "是算法的重复。", "startFrame": 147, "durationFrames": 39}]} totalDurationFrames={186} notText={"现实的重复"} butText={"流量、情绪与算法的重复"} butSrc={staticFile("images/小米事故论/scene_4_7.png")} notContentIndex={1} butContentIndex={2} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/小米事故论/scene_4/scene_4.mp3")} />
        </AbsoluteFill>
    );
};
