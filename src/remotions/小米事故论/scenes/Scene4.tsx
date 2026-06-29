import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWBeatSequence, BWCenterFocus, BWCognitiveShift, BWMethodStack } from "../../../components";

// 错觉剖析
const SCENE_DURATION = 94 + 421 + 287 + 230 + 329 + 226 + 197;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={94}>
                <BWCenterFocus content={[{"text": "那为什么很多人还是觉得，", "startFrame": 0, "durationFrames": 45}, {"text": "小米问题特别多？", "startFrame": 44, "durationFrames": 50}]} totalDurationFrames={94} imageSrc={staticFile("images/小米事故论/scene_4_1.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={94} durationInFrames={421}>
                <BWMethodStack content={[{"text": "第一，", "startFrame": 0, "durationFrames": 16}, {"text": "车的保有量太大。", "startFrame": 15, "durationFrames": 34}, {"text": "2026年1月，小米汽车总交付量就已经超过了60万辆", "startFrame": 48, "durationFrames": 134}, {"text": "就算一年只有0.1%的事故率，", "startFrame": 181, "durationFrames": 77}, {"text": "那也是600起事故。", "startFrame": 257, "durationFrames": 47}, {"text": "加上小米自带的流量属性，你看到的新闻自然多", "startFrame": 304, "durationFrames": 116}]} totalDurationFrames={421} title={"保有量太大"} imageSrc={staticFile("images/小米事故论/scene_4_2.png")} notes={[{"text": "交付超60万辆，基数巨大", "showFrom": 2}, {"text": "0.1%事故率也有600起", "showFrom": 4}, {"text": "自带流量，新闻自然多", "showFrom": 5}]} anchors={[]} />
            </Sequence>
            <Sequence from={515} durationInFrames={287}>
                <BWMethodStack content={[{"text": "第二，", "startFrame": 0, "durationFrames": 19}, {"text": "算法会追着兴趣跑。", "startFrame": 18, "durationFrames": 48}, {"text": "当你刷到小米汽车事故的视频，", "startFrame": 66, "durationFrames": 60}, {"text": "你多停留两秒，", "startFrame": 126, "durationFrames": 36}, {"text": "算法就会觉得你对这种视频感兴趣，", "startFrame": 162, "durationFrames": 82}, {"text": "它就多喂你十条。", "startFrame": 243, "durationFrames": 43}]} totalDurationFrames={287} title={"算法追着恐惧跑"} imageSrc={staticFile("images/小米事故论/scene_4_3.png")} notes={[{"text": "停留就是喂养算法", "showFrom": 3}, {"text": "越多推荐越强化恐惧回路", "showFrom": 5}]} anchors={[]} />
            </Sequence>
            <Sequence from={802} durationInFrames={230}>
                <BWMethodStack content={[{"text": "第三，", "startFrame": 0, "durationFrames": 20}, {"text": "重复会制造真实感。", "startFrame": 19, "durationFrames": 56}, {"text": "同一起事故，", "startFrame": 75, "durationFrames": 28}, {"text": "不同角度剪三遍。", "startFrame": 102, "durationFrames": 46}, {"text": "你以为是三起事故。", "startFrame": 148, "durationFrames": 40}, {"text": "其实都是一件事。", "startFrame": 187, "durationFrames": 42}]} totalDurationFrames={230} title={"重复制造真实感"} imageSrc={staticFile("images/小米事故论/scene_4_4.png")} notes={[{"text": "同一事故被切分成不同视角", "showFrom": 2}, {"text": "你误以为发生了多次", "showFrom": 4}]} anchors={[]} />
            </Sequence>
            <Sequence from={1032} durationInFrames={329}>
                <BWMethodStack content={[{"text": "第四，", "startFrame": 0, "durationFrames": 19}, {"text": "某些下作的攻击者也会借题发挥。", "startFrame": 18, "durationFrames": 70}, {"text": "把事故、", "startFrame": 88, "durationFrames": 23}, {"text": "人为操作、", "startFrame": 111, "durationFrames": 28}, {"text": "旧视频，", "startFrame": 138, "durationFrames": 27}, {"text": "混在同一个标签里。", "startFrame": 164, "durationFrames": 51}, {"text": "最后留给你的，", "startFrame": 214, "durationFrames": 31}, {"text": "就只剩一个印象：", "startFrame": 245, "durationFrames": 40}, {"text": "小米怎么天天出事？", "startFrame": 284, "durationFrames": 45}]} totalDurationFrames={329} title={"借题发挥的陷阱"} imageSrc={staticFile("images/小米事故论/scene_4_5.png")} notes={[{"text": "恶意炒作攻击者", "showFrom": 1}, {"text": "混淆事故与人为", "showFrom": 5}, {"text": "重复暗示制造偏见", "showFrom": 8}]} anchors={[]} />
            </Sequence>
            <Sequence from={1361} durationInFrames={226}>
                <BWBeatSequence content={[{"text": "我们的大脑，", "startFrame": 0, "durationFrames": 20}, {"text": "天生相信重复。", "startFrame": 19, "durationFrames": 40}, {"text": "一件事出现十次，", "startFrame": 58, "durationFrames": 43}, {"text": "我们就觉得它常见。", "startFrame": 101, "durationFrames": 40}, {"text": "一件事刷屏三天，", "startFrame": 140, "durationFrames": 45}, {"text": "我们就觉得它严重。", "startFrame": 185, "durationFrames": 41}]} totalDurationFrames={226} stages={[{ imageSrc: staticFile("images/小米事故论/scene_4_6_img0.png"), enterEffect: "breathe", tone: "calm" }, { imageSrc: staticFile("images/小米事故论/scene_4_6_img1.png"), enterEffect: "slideBottom", tone: "alert", showFrom: 2 }, { imageSrc: staticFile("images/小米事故论/scene_4_6_img2.png"), enterEffect: "slideBottom", tone: "alert", showFrom: 4 }]} anchors={[]} />
            </Sequence>
            <Sequence from={1587} durationInFrames={197}>
                <BWCognitiveShift content={[{"text": "但互联网的重复，", "startFrame": 0, "durationFrames": 36}, {"text": "不是现实的重复。", "startFrame": 36, "durationFrames": 38}, {"text": "它是流量的重复。", "startFrame": 73, "durationFrames": 42}, {"text": "是情绪的重复。", "startFrame": 115, "durationFrames": 42}, {"text": "是算法的重复。", "startFrame": 156, "durationFrames": 40}]} totalDurationFrames={197} notText={"现实的重复"} butText={"流量、情绪与算法的重复"} butSrc={staticFile("images/小米事故论/scene_4_7.png")} notContentIndex={1} butContentIndex={2} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/小米事故论/scene_4/scene_4.mp3")} />
        </AbsoluteFill>
    );
};
