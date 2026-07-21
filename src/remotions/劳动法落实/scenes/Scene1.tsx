import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCauseChain, BWCenterFocus, BWCognitiveShift, BWPeerInduct, BWQuoteCitation, BWSplitCompare } from "../../../components";

// 引入：偷换收入概念
const SCENE_DURATION = 73 + 149 + 225 + 162 + 129 + 200 + 103 + 231 + 131 + 127;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={73}>
                <BWQuoteCitation content={[{"text": "「不加班，", "startFrame": 0, "durationFrames": 22}, {"text": "工资9000变6000！」", "startFrame": 21, "durationFrames": 52}]} totalDurationFrames={73} quoteDisplayText={"不加班，工资9000变6000！"} quoteSource={"常见说法"} anchors={[]} />
            </Sequence>
            <Sequence from={73} durationInFrames={149}>
                <BWCenterFocus content={[{"text": "很多人把这句话，", "startFrame": 0, "durationFrames": 33}, {"text": "当成劳动法不能严格落实的理由。", "startFrame": 32, "durationFrames": 62}, {"text": "这话听着像实话。", "startFrame": 94, "durationFrames": 55}]} totalDurationFrames={149} imageSrc={staticFile("images/劳动法落实/scene_1_2.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={222} durationInFrames={225}>
                <BWSplitCompare content={[{"text": "毕竟不管是富士康的流水线工人，", "startFrame": 0, "durationFrames": 66}, {"text": "还是字节的程序员，", "startFrame": 65, "durationFrames": 46}, {"text": "很多人的薪资构成里，", "startFrame": 111, "durationFrames": 48}, {"text": "加班费确实是很重要的一部分。", "startFrame": 159, "durationFrames": 66}]} totalDurationFrames={225} leftSrc={staticFile("images/劳动法落实/scene_1_3_left.png")} rightSrc={staticFile("images/劳动法落实/scene_1_3_right.png")} leftLabel={"流水线工人"} rightLabel={"程序员"} leftShowFrom={0} rightShowFrom={1} anchors={[]} />
            </Sequence>
            <Sequence from={447} durationInFrames={162}>
                <BWCauseChain content={[{"text": "但这里有一个滑坡谬误：", "startFrame": 0, "durationFrames": 56}, {"text": "它把“加班少了”，", "startFrame": 55, "durationFrames": 39}, {"text": "滑坡成了“收入一定少了”。", "startFrame": 93, "durationFrames": 68}]} totalDurationFrames={162} layout={"horizontal"} nodes={[{ label: "加班少", imageSrc: staticFile("images/劳动法落实/scene_1_4_img0.png"), showFrom: 1, enterEffect: "fadeIn" }, { label: "收入减少", imageSrc: staticFile("images/劳动法落实/scene_1_4_img1.png"), showFrom: 2, enterEffect: "fadeIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={609} durationInFrames={129}>
                <BWCenterFocus content={[{"text": "打工人的工时确实变少了，", "startFrame": 0, "durationFrames": 63}, {"text": "但社会上的活，", "startFrame": 62, "durationFrames": 32}, {"text": "总量变了吗？", "startFrame": 93, "durationFrames": 35}]} totalDurationFrames={129} imageSrc={staticFile("images/劳动法落实/scene_1_5.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={738} durationInFrames={200}>
                <BWPeerInduct content={[{"text": "订单还在。", "startFrame": 0, "durationFrames": 33}, {"text": "项目还在。", "startFrame": 32, "durationFrames": 33}, {"text": "客户还在。", "startFrame": 65, "durationFrames": 30}, {"text": "活没少。", "startFrame": 94, "durationFrames": 33}, {"text": "只是不能再让三个人，", "startFrame": 127, "durationFrames": 41}, {"text": "干五个人的时长。", "startFrame": 168, "durationFrames": 32}]} totalDurationFrames={200} premises={[{ imageSrc: staticFile("images/劳动法落实/scene_1_6_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { imageSrc: staticFile("images/劳动法落实/scene_1_6_img1.png"), showFrom: 1, enterEffect: "fadeIn" }, { imageSrc: staticFile("images/劳动法落实/scene_1_6_img2.png"), showFrom: 2, enterEffect: "fadeIn" }]} conclusion={{ imageSrc: staticFile("images/劳动法落实/scene_1_6.png"), showFrom: 3, enterEffect: "zoomIn", tone: "alert" }} anchors={[]} />
            </Sequence>
            <Sequence from={938} durationInFrames={103}>
                <BWCauseChain content={[{"text": "那会发生什么？", "startFrame": 0, "durationFrames": 29}, {"text": "同样多的活，", "startFrame": 28, "durationFrames": 32}, {"text": "必须分给更多人干。", "startFrame": 60, "durationFrames": 43}]} totalDurationFrames={103} layout={"horizontal"} nodes={[{ label: "工作量不变", imageSrc: staticFile("images/劳动法落实/scene_1_8_img0.png"), showFrom: 1, enterEffect: "fadeIn" }, { label: "分给更多人", imageSrc: staticFile("images/劳动法落实/scene_1_8_img1.png"), showFrom: 2, enterEffect: "fadeIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={1041} durationInFrames={231}>
                <BWCauseChain content={[{"text": "公司想交付，", "startFrame": 0, "durationFrames": 30}, {"text": "就得多招人。", "startFrame": 29, "durationFrames": 35}, {"text": "就业率往上走。", "startFrame": 64, "durationFrames": 39}, {"text": "社会的工资总额就不会往下走，", "startFrame": 102, "durationFrames": 70}, {"text": "贫富差距也能进一步缩小。", "startFrame": 172, "durationFrames": 59}]} totalDurationFrames={231} layout={"horizontal"} nodes={[{ label: "需招人", imageSrc: staticFile("images/劳动法落实/scene_1_9_img0.png"), showFrom: 1 }, { label: "就业率上升", imageSrc: staticFile("images/劳动法落实/scene_1_9_img1.png"), showFrom: 2 }, { label: "工资总额不降", imageSrc: staticFile("images/劳动法落实/scene_1_9_img2.png"), showFrom: 3 }, { label: "贫富差距缩小", imageSrc: staticFile("images/劳动法落实/scene_1_9_img3.png"), showFrom: 4 }]} anchors={[]} />
            </Sequence>
            <Sequence from={1272} durationInFrames={131}>
                <BWCenterFocus content={[{"text": "真正被压缩的，", "startFrame": 0, "durationFrames": 33}, {"text": "是老板的利润。", "startFrame": 32, "durationFrames": 35}, {"text": "他们需要多雇人，", "startFrame": 67, "durationFrames": 38}, {"text": "多交社保。", "startFrame": 104, "durationFrames": 26}]} totalDurationFrames={131} imageSrc={staticFile("images/劳动法落实/scene_1_10.png")} enterEffect="fadeIn" anchors={[{"text": "利润", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={1403} durationInFrames={127}>
                <BWCognitiveShift content={[{"text": "所以反对最凶的，", "startFrame": 0, "durationFrames": 40}, {"text": "从来不是打工人，", "startFrame": 39, "durationFrames": 38}, {"text": "是舍不得分利润的人。", "startFrame": 76, "durationFrames": 51}]} totalDurationFrames={127} notText={"打工人"} butText={"舍不得分利润的人"} butSrc={staticFile("images/劳动法落实/scene_1_11.png")} notContentIndex={1} butContentIndex={2} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/劳动法落实/scene_1/scene_1.mp3")} />
        </AbsoluteFill>
    );
};
