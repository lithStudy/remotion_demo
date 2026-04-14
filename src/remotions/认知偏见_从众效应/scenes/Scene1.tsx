import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCauseChain, BWCenterFocus, BWCognitiveShift, BWQuoteCitation } from "../../../components";

// 引入·从众心理
const SCENE_DURATION = 167 + 152 + 90 + 278 + 224 + 163 + 109 + 199;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={167}>
                <BWCenterFocus content={[{"text": "看着商场里的网红奶茶店，", "startFrame": 0, "durationFrames": 59}, {"text": " 队伍排得根本看不到尽头。", "startFrame": 58, "durationFrames": 55}, {"text": " 你毫不犹豫地排到队尾。", "startFrame": 113, "durationFrames": 54}]} totalDurationFrames={167} imageSrc={staticFile("images/认知偏见_从众效应/scene_1_1.png")} enterEffect="fadeIn" anchors={[{"text": "网红奶茶店", "showFrom": 0, "color": "#000000", "anim": "spring", "audioEffect": "ping"}, {"text": "排队", "showFrom": 2, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={167} durationInFrames={152}>
                <BWCenterFocus content={[{"text": "哪怕你连这家店卖什么，", "startFrame": 0, "durationFrames": 52}, {"text": " 好不好喝都一无所知。", "startFrame": 51, "durationFrames": 59}, {"text": " 你心里默默笃定：", "startFrame": 110, "durationFrames": 42}]} totalDurationFrames={152} imageSrc={staticFile("images/认知偏见_从众效应/scene_1_2.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={319} durationInFrames={90}>
                <BWQuoteCitation content={[{"text": "“这么多人愿意排队，", "startFrame": 0, "durationFrames": 44}, {"text": " 味道肯定差不到哪里去。”", "startFrame": 43, "durationFrames": 47}]} totalDurationFrames={90} quoteSource={"从众心理"} anchors={[]} />
            </Sequence>
            <Sequence from={409} durationInFrames={278}>
                <BWCenterFocus content={[{"text": "将自己隐入庞大的人群，", "startFrame": 0, "durationFrames": 59}, {"text": " 不仅没有任何心理负担，", "startFrame": 58, "durationFrames": 47}, {"text": " 这种充满错觉的安全感，", "startFrame": 105, "durationFrames": 53}, {"text": " 还让你觉得特别轻松，", "startFrame": 158, "durationFrames": 50}, {"text": " 甚至有一丝合群的沾沾自喜。", "startFrame": 207, "durationFrames": 70}]} totalDurationFrames={278} imageSrc={staticFile("images/认知偏见_从众效应/scene_1_4.png")} enterEffect="fadeIn" anchors={[{"text": "安全感", "showFrom": 2, "color": "#000000", "anim": "spring", "audioEffect": "ping"}, {"text": "合群", "showFrom": 4, "color": "#EF4444", "anim": "slideUp", "audioEffect": "woosh"}]} />
            </Sequence>
            <Sequence from={687} durationInFrames={224}>
                <BWCauseChain content={[{"text": "我们总以为群众眼睛雪亮。", "startFrame": 0, "durationFrames": 68}, {"text": " 认为这是在利用群体智慧避坑。", "startFrame": 67, "durationFrames": 73}, {"text": "但其实，你正在贱卖独立思考权。", "startFrame": 139, "durationFrames": 84}]} totalDurationFrames={224} layout={"horizontal"} nodes={[{ label: "群众雪亮", imageSrc: staticFile("images/认知偏见_从众效应/scene_1_5_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { label: "群体智慧", imageSrc: staticFile("images/认知偏见_从众效应/scene_1_5_img1.png"), showFrom: 1, enterEffect: "fadeIn" }, { label: "贱卖思考", imageSrc: staticFile("images/认知偏见_从众效应/scene_1_5_img2.png"), showFrom: 2, enterEffect: "fadeIn" }]} />
            </Sequence>
            <Sequence from={911} durationInFrames={163}>
                <BWCognitiveShift content={[{"text": "这并非你天生智商欠费，", "startFrame": 0, "durationFrames": 56}, {"text": " 也不是你毫无主见。", "startFrame": 55, "durationFrames": 44}, {"text": " 而是基因里的生存法则作祟。", "startFrame": 99, "durationFrames": 64}]} totalDurationFrames={163} notText={"智商或主见"} butText={"生存法则"} butSrc={staticFile("images/认知偏见_从众效应/scene_1_7.png")} notContentIndex={0} butContentIndex={2} anchors={[]} />
            </Sequence>
            <Sequence from={1074} durationInFrames={109}>
                <BWCenterFocus content={[{"text": "远古时代落单的原始人，", "startFrame": 0, "durationFrames": 56}, {"text": " 面临的往往是死路一条。", "startFrame": 55, "durationFrames": 53}]} totalDurationFrames={109} imageSrc={staticFile("images/认知偏见_从众效应/scene_1_8.png")} enterEffect="fadeIn" anchors={[{"text": "落单", "showFrom": 0, "color": "#000000", "anim": "spring", "audioEffect": "ping"}, {"text": "死路一条", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={1183} durationInFrames={199}>
                <BWCenterFocus content={[{"text": "而在今天，", "startFrame": 0, "durationFrames": 27}, {"text": " 无数举着镰刀的嗜血资本，", "startFrame": 26, "durationFrames": 56}, {"text": " 精准利用了这种原始恐惧。", "startFrame": 81, "durationFrames": 55}, {"text": " 无限放大了你的不安全感。", "startFrame": 136, "durationFrames": 63}]} totalDurationFrames={199} imageSrc={staticFile("images/认知偏见_从众效应/scene_1_9.png")} enterEffect="fadeIn" anchors={[{"text": "嗜血资本", "showFrom": 1, "color": "#000000", "anim": "spring", "audioEffect": "ping"}, {"text": "放大不安全感", "showFrom": 3, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/认知偏见_从众效应/scene_1/scene_1.mp3")} />
        </AbsoluteFill>
    );
};
