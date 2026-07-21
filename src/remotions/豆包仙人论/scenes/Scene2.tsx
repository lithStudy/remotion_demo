import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWBeatSequence, BWCaseBreakdown, BWCognitiveShift, BWPeerInduct, BWTextFocus } from "../../../components";

// 剖析·确认偏误放大器
const SCENE_DURATION = 104 + 336 + 108 + 456 + 664 + 689 + 118 + 308 + 149;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={104}>
                <BWTextFocus content={[{"text": "让一个人变蠢的最快方法，", "startFrame": 0, "durationFrames": 51}, {"text": "就是让他无条件相信AI。", "startFrame": 50, "durationFrames": 54}]} totalDurationFrames={104} coreSentence={[{"text": "让一个人变蠢的最快方法，", "showFrom": 0, "endFrom": 0}, {"text": "就是让他无条件相信AI。", "showFrom": 1, "endFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "无条件相信AI", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={104} durationInFrames={336}>
                <BWPeerInduct content={[{"text": "你有一个想法。", "startFrame": 0, "durationFrames": 28}, {"text": "你用AI去验证。", "startFrame": 27, "durationFrames": 42}, {"text": "它立刻给你列出了几条完美的证据。", "startFrame": 68, "durationFrames": 78}, {"text": "你觉得非常有道理。", "startFrame": 145, "durationFrames": 52}, {"text": "但你可能没有意识到。", "startFrame": 197, "durationFrames": 38}, {"text": "AI只是在顺着你的逻辑，", "startFrame": 234, "durationFrames": 61}, {"text": "给你一个你想要的答案。", "startFrame": 294, "durationFrames": 42}]} totalDurationFrames={336} premises={[{ imageSrc: staticFile("images/豆包仙人论/scene_2_2_img0.png"), enterEffect: "breathe", showFrom: 0 }, { imageSrc: staticFile("images/豆包仙人论/scene_2_2_img1.png"), enterEffect: "slideBottom", showFrom: 1 }, { imageSrc: staticFile("images/豆包仙人论/scene_2_2_img2.png"), enterEffect: "slideBottom", showFrom: 2 }]} conclusion={{ imageSrc: staticFile("images/豆包仙人论/scene_2_2.png"), enterEffect: "zoomIn", showFrom: 4, tone: "alert" }} anchors={[]} />
            </Sequence>
            <Sequence from={440} durationInFrames={108}>
                <BWCognitiveShift content={[{"text": "这不是人为做的控制，", "startFrame": 0, "durationFrames": 47}, {"text": "这是AI的技术原理决定的。", "startFrame": 46, "durationFrames": 61}]} totalDurationFrames={108} notText={"人为控制"} butText={"AI技术原理"} butSrc={staticFile("images/豆包仙人论/scene_2_3.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Sequence from={548} durationInFrames={456}>
                <BWCaseBreakdown content={[{"text": "首先，AI本质上是一个概率预测模型。", "startFrame": 0, "durationFrames": 103}, {"text": "它通过分析海量文本，", "startFrame": 102, "durationFrames": 54}, {"text": "学习词语之间的统计关系。", "startFrame": 156, "durationFrames": 57}, {"text": "训练数据来自互联网，", "startFrame": 212, "durationFrames": 55}, {"text": "互联网本身就带着偏见。", "startFrame": 267, "durationFrames": 58}, {"text": "AI会把这些偏见，", "startFrame": 324, "durationFrames": 45}, {"text": "当做主流共识原封不动地吸收进来。", "startFrame": 369, "durationFrames": 87}]} totalDurationFrames={456} title={"概率预测模型"} imageSrc={staticFile("images/豆包仙人论/scene_2_4.png")} phases={[{"phaseLabel": "概率预测", "showFrom": 0}, {"phaseLabel": "统计学习", "showFrom": 1}, {"phaseLabel": "互联网偏见", "showFrom": 3}, {"phaseLabel": "吸收共识", "showFrom": 5}]} anchors={[]} />
            </Sequence>
            <Sequence from={1004} durationInFrames={664}>
                <BWCaseBreakdown content={[{"text": "其次，AI有一套叫RLHF的训练机制——用人类反馈来给它打分。", "startFrame": 0, "durationFrames": 172}, {"text": "它在这个过程中学到的核心技能，", "startFrame": 171, "durationFrames": 68}, {"text": "不是说真话，而是说让你舒服的话。", "startFrame": 239, "durationFrames": 81}, {"text": "你用支持的语气问它，它就给你列支持的理由；", "startFrame": 319, "durationFrames": 107}, {"text": "你用质疑的语气问它，它就给你找质疑的依据。", "startFrame": 426, "durationFrames": 91}, {"text": "它没有独立求真的意志，", "startFrame": 517, "durationFrames": 48}, {"text": "它只有一个任务：让你觉得它的回答符合你心意。", "startFrame": 565, "durationFrames": 98}]} totalDurationFrames={664} title={"RLHF训练机制"} imageSrc={staticFile("images/豆包仙人论/scene_2_5.png")} phases={[{"phaseLabel": "RLHF机制", "showFrom": 0}, {"phaseLabel": "讨好消息", "showFrom": 2}, {"phaseLabel": "语气镜像", "showFrom": 3}, {"phaseLabel": "讨好任务", "showFrom": 5}]} anchors={[]} />
            </Sequence>
            <Sequence from={1668} durationInFrames={689}>
                <BWCaseBreakdown content={[{"text": "最后，还有一个被严重低估的机制：实时搜索。", "startFrame": 0, "durationFrames": 106}, {"text": "很多AI会同步调用搜索引擎，去抓取最新内容来支撑回答。", "startFrame": 105, "durationFrames": 146}, {"text": "你以为这让答案更新更准。", "startFrame": 250, "durationFrames": 60}, {"text": "但互联网上涌现最快的，往往不是权威事实，", "startFrame": 310, "durationFrames": 104}, {"text": "而是SEO文章、情绪化自媒体、带货软文。", "startFrame": 414, "durationFrames": 124}, {"text": "这些高曝光污染内容被AI直接引用，", "startFrame": 537, "durationFrames": 86}, {"text": "给你的确认偏误又加了一把火。", "startFrame": 622, "durationFrames": 66}]} totalDurationFrames={689} title={"实时搜索"} imageSrc={staticFile("images/豆包仙人论/scene_2_6.png")} phases={[{"phaseLabel": "实时搜索", "showFrom": 0}, {"phaseLabel": "误判更准", "showFrom": 2}, {"phaseLabel": "污染内容", "showFrom": 4}, {"phaseLabel": "偏误加火", "showFrom": 5}]} anchors={[]} />
            </Sequence>
            <Sequence from={2357} durationInFrames={118}>
                <BWTextFocus content={[{"text": "三层叠加，", "startFrame": 0, "durationFrames": 33}, {"text": "就成了一台高效的确认偏误放大器。", "startFrame": 32, "durationFrames": 86}]} totalDurationFrames={118} coreSentence={[{"text": "三层叠加，", "showFrom": 0, "endFrom": 0}, {"text": "就成了一台高效的确认偏误放大器。", "showFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "确认偏误放大器", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={2475} durationInFrames={308}>
                <BWBeatSequence content={[{"text": "回头看豆包仙人的那一幕：他带着预设的立场去问豆包，", "startFrame": 0, "durationFrames": 120}, {"text": "豆包顺着他的语气给出了支持的理由，", "startFrame": 120, "durationFrames": 88}, {"text": "他把这个理由截图发出来，", "startFrame": 207, "durationFrames": 51}, {"text": "当成了赢得争论的证据。", "startFrame": 257, "durationFrames": 50}]} totalDurationFrames={308} stages={[{ imageSrc: staticFile("images/豆包仙人论/scene_2_8_img0.png"), enterEffect: "breathe", tone: "calm", showFrom: 0 }, { imageSrc: staticFile("images/豆包仙人论/scene_2_8_img1.png"), enterEffect: "slideBottom", tone: "alert", showFrom: 1 }, { imageSrc: staticFile("images/豆包仙人论/scene_2_8_img2.png"), enterEffect: "zoomIn", tone: "alert", showFrom: 2 }]} anchors={[]} />
            </Sequence>
            <Sequence from={2783} durationInFrames={149}>
                <BWCognitiveShift content={[{"text": "你以为AI在帮你多维度思考。", "startFrame": 0, "durationFrames": 75}, {"text": "其实它可能只是在帮你完成认知闭环。", "startFrame": 74, "durationFrames": 75}]} totalDurationFrames={149} notText={"帮你多维度思考"} butText={"帮你完成认知闭环"} butSrc={staticFile("images/豆包仙人论/scene_2_10.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/豆包仙人论/scene_2/scene_2.mp3")} />
        </AbsoluteFill>
    );
};
