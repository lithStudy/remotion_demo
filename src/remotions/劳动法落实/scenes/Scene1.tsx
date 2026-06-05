import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCauseChain, BWCenterFocus, BWCognitiveShift, BWPeerInduct, BWQuoteCitation, BWSplitCompare } from "../../../components";

// 引入：偷换收入概念
const SCENE_DURATION = 87 + 161 + 230 + 154 + 141 + 215 + 108 + 267 + 142 + 120;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={87}>
                <BWQuoteCitation content={[{"text": "「不加班，", "startFrame": 0, "durationFrames": 31}, {"text": "工资9000变6000！」", "startFrame": 30, "durationFrames": 57}]} totalDurationFrames={87} quoteDisplayText={"不加班，工资9000变6000！"} quoteSource={"常见说法"} anchors={[]} />
            </Sequence>
            <Sequence from={87} durationInFrames={161}>
                <BWCenterFocus content={[{"text": "很多人把这句话，", "startFrame": 0, "durationFrames": 38}, {"text": "当成劳动法不能严格落实的理由。", "startFrame": 37, "durationFrames": 74}, {"text": "这话听着像实话。", "startFrame": 110, "durationFrames": 51}]} totalDurationFrames={161} imageSrc={staticFile("images/劳动法落实/scene_1_2.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={248} durationInFrames={230}>
                <BWSplitCompare content={[{"text": "毕竟不管是富士康的流水线工人，", "startFrame": 0, "durationFrames": 74}, {"text": "还是字节的程序员，", "startFrame": 73, "durationFrames": 47}, {"text": "很多人的薪资构成里，", "startFrame": 120, "durationFrames": 52}, {"text": "加班费确实是很重要的一部分。", "startFrame": 171, "durationFrames": 59}]} totalDurationFrames={230} leftSrc={staticFile("images/劳动法落实/scene_1_3_left.png")} rightSrc={staticFile("images/劳动法落实/scene_1_3_right.png")} leftLabel={"流水线工人"} rightLabel={"程序员"} leftShowFrom={0} rightShowFrom={1} anchors={[]} />
            </Sequence>
            <Sequence from={478} durationInFrames={154}>
                <BWCauseChain content={[{"text": "但这里有一个滑坡谬误：", "startFrame": 0, "durationFrames": 52}, {"text": "它把“加班少了”，", "startFrame": 51, "durationFrames": 36}, {"text": "滑坡成了“收入一定少了”。", "startFrame": 87, "durationFrames": 67}]} totalDurationFrames={154} layout={"horizontal"} nodes={[{ label: "加班少", imageSrc: staticFile("images/劳动法落实/scene_1_4_img0.png"), showFrom: 1, enterEffect: "fadeIn" }, { label: "收入减少", imageSrc: staticFile("images/劳动法落实/scene_1_4_img1.png"), showFrom: 2, enterEffect: "fadeIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={632} durationInFrames={141}>
                <BWCenterFocus content={[{"text": "打工人的工时确实变少了，", "startFrame": 0, "durationFrames": 69}, {"text": "但社会上的活，", "startFrame": 68, "durationFrames": 38}, {"text": "总量变了吗？", "startFrame": 105, "durationFrames": 35}]} totalDurationFrames={141} imageSrc={staticFile("images/劳动法落实/scene_1_5.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={773} durationInFrames={215}>
                <BWPeerInduct content={[{"text": "订单还在。", "startFrame": 0, "durationFrames": 32}, {"text": "项目还在。", "startFrame": 31, "durationFrames": 30}, {"text": "客户还在。", "startFrame": 61, "durationFrames": 29}, {"text": "活没少。", "startFrame": 89, "durationFrames": 35}, {"text": "只是不能再让三个人，", "startFrame": 124, "durationFrames": 46}, {"text": "干五个人的时长。", "startFrame": 170, "durationFrames": 45}]} totalDurationFrames={215} premises={[{ imageSrc: staticFile("images/劳动法落实/scene_1_6_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { imageSrc: staticFile("images/劳动法落实/scene_1_6_img1.png"), showFrom: 1, enterEffect: "fadeIn" }, { imageSrc: staticFile("images/劳动法落实/scene_1_6_img2.png"), showFrom: 2, enterEffect: "fadeIn" }]} conclusion={{ imageSrc: staticFile("images/劳动法落实/scene_1_6.png"), showFrom: 3, enterEffect: "zoomIn", tone: "alert" }} anchors={[]} />
            </Sequence>
            <Sequence from={988} durationInFrames={108}>
                <BWCauseChain content={[{"text": "那会发生什么？", "startFrame": 0, "durationFrames": 39}, {"text": "同样多的活，", "startFrame": 38, "durationFrames": 30}, {"text": "必须分给更多人干。", "startFrame": 67, "durationFrames": 40}]} totalDurationFrames={108} layout={"horizontal"} nodes={[{ label: "工作量不变", imageSrc: staticFile("images/劳动法落实/scene_1_8_img0.png"), showFrom: 1, enterEffect: "fadeIn" }, { label: "分给更多人", imageSrc: staticFile("images/劳动法落实/scene_1_8_img1.png"), showFrom: 2, enterEffect: "fadeIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={1096} durationInFrames={267}>
                <BWCauseChain content={[{"text": "公司想交付，", "startFrame": 0, "durationFrames": 34}, {"text": "就得多招人。", "startFrame": 33, "durationFrames": 40}, {"text": "就业率往上走。", "startFrame": 73, "durationFrames": 42}, {"text": "社会的工资总额就不会往下走，", "startFrame": 114, "durationFrames": 80}, {"text": "贫富差距也能进一步缩小。", "startFrame": 194, "durationFrames": 72}]} totalDurationFrames={267} layout={"horizontal"} nodes={[{ label: "需招人", imageSrc: staticFile("images/劳动法落实/scene_1_9_img0.png"), showFrom: 1 }, { label: "就业率上升", imageSrc: staticFile("images/劳动法落实/scene_1_9_img1.png"), showFrom: 2 }, { label: "工资总额不降", imageSrc: staticFile("images/劳动法落实/scene_1_9_img2.png"), showFrom: 3 }, { label: "贫富差距缩小", imageSrc: staticFile("images/劳动法落实/scene_1_9_img3.png"), showFrom: 4 }]} anchors={[]} />
            </Sequence>
            <Sequence from={1363} durationInFrames={142}>
                <BWCenterFocus content={[{"text": "真正被压缩的，", "startFrame": 0, "durationFrames": 38}, {"text": "是老板的利润。", "startFrame": 37, "durationFrames": 36}, {"text": "他们需要多雇人，", "startFrame": 73, "durationFrames": 38}, {"text": "多交社保。", "startFrame": 110, "durationFrames": 32}]} totalDurationFrames={142} imageSrc={staticFile("images/劳动法落实/scene_1_10.png")} enterEffect="fadeIn" anchors={[{"text": "利润", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={1505} durationInFrames={120}>
                <BWCognitiveShift content={[{"text": "所以反对最凶的，", "startFrame": 0, "durationFrames": 38}, {"text": "从来不是打工人，", "startFrame": 37, "durationFrames": 36}, {"text": "是舍不得分利润的人。", "startFrame": 73, "durationFrames": 47}]} totalDurationFrames={120} notText={"打工人"} butText={"舍不得分利润的人"} butSrc={staticFile("images/劳动法落实/scene_1_11.png")} notContentIndex={1} butContentIndex={2} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/劳动法落实/scene_1/scene_1.mp3")} />
        </AbsoluteFill>
    );
};
