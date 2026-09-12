import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWBeatSequence, BWCaseBreakdown, BWCenterFocus, BWCognitiveShift, BWConceptCard, BWMethodStack } from "../../../components";

// 剖析·凑数专利
const SCENE_DURATION = 77 + 169 + 240 + 270 + 251 + 113 + 260 + 292 + 217;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={77}>
                <BWConceptCard content={[{"text": "第三类：", "startFrame": 0, "durationFrames": 23}, {"text": "垃圾专利当炮灰。", "startFrame": 22, "durationFrames": 54}]} totalDurationFrames={77} imageSrc={staticFile("images/华为专利论/scene_4_1.png")} conceptName={"凑数专利"} anchors={[]} />
            </Sequence>
            <Sequence from={77} durationInFrames={169}>
                <BWCognitiveShift content={[{"text": "华为不是只会申请高大上的通信专利。", "startFrame": 0, "durationFrames": 89}, {"text": "还有工业化流水线一样的“凑数专利”。", "startFrame": 88, "durationFrames": 80}]} totalDurationFrames={169} notText={"只会高大上通信专利"} butText={"流水线凑数专利"} butSrc={staticFile("images/华为专利论/scene_4_2.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Sequence from={246} durationInFrames={240}>
                <BWBeatSequence content={[{"text": "2016 年打三星，", "startFrame": 0, "durationFrames": 47}, {"text": "有些专利名字特别唬人，", "startFrame": 46, "durationFrames": 57}, {"text": "什么扩展物理下行链路控制信道。", "startFrame": 103, "durationFrames": 86}, {"text": "听起来像火箭发射。", "startFrame": 189, "durationFrames": 51}]} totalDurationFrames={240} stages={[{ imageSrc: staticFile("images/华为专利论/scene_4_3_img0.png"), enterEffect: "slideBottom", tone: "alert" }, { imageSrc: staticFile("images/华为专利论/scene_4_3_img1.png"), enterEffect: "fadeIn", tone: "alert" }, { imageSrc: staticFile("images/华为专利论/scene_4_3_img2.png"), enterEffect: "zoomIn", tone: "alert" }]} anchors={[]} />
            </Sequence>
            <Sequence from={486} durationInFrames={270}>
                <BWBeatSequence content={[{"text": "翻成白话，", "startFrame": 0, "durationFrames": 29}, {"text": "就是手机和基站之间，", "startFrame": 28, "durationFrames": 51}, {"text": "怎么安排通信资源的一段规则。", "startFrame": 78, "durationFrames": 66}, {"text": "专家一拆，", "startFrame": 144, "durationFrames": 30}, {"text": "技术含量极低。", "startFrame": 173, "durationFrames": 45}, {"text": "就是术语堆出来的纸老虎。", "startFrame": 218, "durationFrames": 52}]} totalDurationFrames={270} stages={[{ imageSrc: staticFile("images/华为专利论/scene_4_4_img0.png"), enterEffect: "fadeIn", tone: "calm", showFrom: 0 }, { imageSrc: staticFile("images/华为专利论/scene_4_4_img1.png"), enterEffect: "slideBottom", tone: "alert", showFrom: 4 }]} anchors={[]} />
            </Sequence>
            <Sequence from={756} durationInFrames={251}>
                <BWCenterFocus content={[{"text": "还有中国的实用新型。", "startFrame": 0, "durationFrames": 51}, {"text": "你可以把它理解成：", "startFrame": 50, "durationFrames": 36}, {"text": "低配版专利。", "startFrame": 86, "durationFrames": 35}, {"text": "主要看材料形式过不过关。", "startFrame": 120, "durationFrames": 63}, {"text": "不太深挖技术到底有多新。", "startFrame": 182, "durationFrames": 69}]} totalDurationFrames={251} imageSrc={staticFile("images/华为专利论/scene_4_5.png")} enterEffect="fadeIn" anchors={[{"text": "实用新型", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": null}, {"text": "低配版专利", "showFrom": 2, "color": "#EF4444", "anim": "popIn", "audioEffect": null}]} />
            </Sequence>
            <Sequence from={1007} durationInFrames={113}>
                <BWBeatSequence content={[{"text": "所以下证快，", "startFrame": 0, "durationFrames": 29}, {"text": "成本低。", "startFrame": 28, "durationFrames": 24}, {"text": "华为体系里，", "startFrame": 52, "durationFrames": 31}, {"text": "这类东西不少。", "startFrame": 82, "durationFrames": 30}]} totalDurationFrames={113} stages={[{ imageSrc: staticFile("images/华为专利论/scene_4_6_img0.png"), enterEffect: "breathe", tone: "calm", showFrom: 0 }, { imageSrc: staticFile("images/华为专利论/scene_4_6_img1.png"), enterEffect: "slideBottom", tone: "alert", showFrom: 1 }]} anchors={[{"text": "下证快", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": null}, {"text": "成本低", "showFrom": 1, "color": "#EF4444", "anim": "popIn", "audioEffect": null}]} />
            </Sequence>
            <Sequence from={1120} durationInFrames={260}>
                <BWCaseBreakdown content={[{"text": "最出圈的是什么？", "startFrame": 0, "durationFrames": 39}, {"text": "赛力斯车载便器。", "startFrame": 38, "durationFrames": 45}, {"text": "座椅下面藏马桶，", "startFrame": 82, "durationFrames": 38}, {"text": "滑轨拉出来，", "startFrame": 120, "durationFrames": 28}, {"text": "用完推回去。", "startFrame": 147, "durationFrames": 32}, {"text": "网友都笑了：", "startFrame": 179, "durationFrames": 38}, {"text": "这也能叫专利？", "startFrame": 216, "durationFrames": 44}]} totalDurationFrames={260} title={"赛力斯车载便器"} imageSrc={staticFile("images/华为专利论/scene_4_7.png")} phases={[{"phaseLabel": "出圈之问", "showFrom": 0}, {"phaseLabel": "荒诞真相", "showFrom": 1}, {"phaseLabel": "网友群嘲", "showFrom": 5}, {"phaseLabel": "质疑收束", "showFrom": 6}]} anchors={[]} />
            </Sequence>
            <Sequence from={1380} durationInFrames={292}>
                <BWMethodStack content={[{"text": "你问它对汽车工业有什么推动？", "startFrame": 0, "durationFrames": 63}, {"text": "没有。", "startFrame": 62, "durationFrames": 24}, {"text": "它唯一的作用，", "startFrame": 86, "durationFrames": 32}, {"text": "是帮专利总数再 +1。", "startFrame": 118, "durationFrames": 52}, {"text": "是谈判桌上多一张牌。", "startFrame": 169, "durationFrames": 55}, {"text": "是宣传稿里多一个“创新”数字。", "startFrame": 223, "durationFrames": 68}]} totalDurationFrames={292} title={"唯一的作用"} imageSrc={staticFile("images/华为专利论/scene_4_8.png")} notes={[{"text": "专利总数 +1", "showFrom": 3}, {"text": "谈判多一张牌", "showFrom": 4}, {"text": "宣传稿多一个数字", "showFrom": 5}]} anchors={[]} />
            </Sequence>
            <Sequence from={1672} durationInFrames={217}>
                <BWCenterFocus content={[{"text": "一家天天讲 6G、AI、芯片的公司，", "startFrame": 0, "durationFrames": 92}, {"text": "武器库里混着这种货色。", "startFrame": 91, "durationFrames": 61}, {"text": "你还信“件件都是硬核科技”吗？", "startFrame": 152, "durationFrames": 65}]} totalDurationFrames={217} imageSrc={staticFile("images/华为专利论/scene_4_9.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/华为专利论/scene_4/scene_4.mp3")} />
        </AbsoluteFill>
    );
};
