import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCaseBreakdown, BWCauseChain, BWCenterFocus, BWCognitiveShift, BWConceptCard, BWStepList, BWTextFocus } from "../../../components";

// 剖析·分案碰瓷
const SCENE_DURATION = 107 + 300 + 63 + 319 + 401 + 345 + 124 + 433 + 90;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={107}>
                <BWConceptCard content={[{"text": "第二类，", "startFrame": 0, "durationFrames": 22}, {"text": "最冷血的：", "startFrame": 21, "durationFrames": 31}, {"text": "时光倒流式狙击。", "startFrame": 52, "durationFrames": 55}]} totalDurationFrames={107} imageSrc={staticFile("images/华为专利论/scene_3_1.png")} conceptName={"时光倒流式狙击"} anchors={[]} />
            </Sequence>
            <Sequence from={107} durationInFrames={300}>
                <BWCenterFocus content={[{"text": "专利申请中有一种叫做分案申请，", "startFrame": 0, "durationFrames": 81}, {"text": "本来是好事。", "startFrame": 80, "durationFrames": 27}, {"text": "意思是：", "startFrame": 106, "durationFrames": 20}, {"text": "一份专利申请里，", "startFrame": 126, "durationFrames": 42}, {"text": "如果塞了两个不相关发明，", "startFrame": 168, "durationFrames": 57}, {"text": "拆开来审，", "startFrame": 224, "durationFrames": 27}, {"text": "各算各的。", "startFrame": 250, "durationFrames": 25}, {"text": "合理。", "startFrame": 275, "durationFrames": 24}]} totalDurationFrames={300} imageSrc={staticFile("images/华为专利论/scene_3_2.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={407} durationInFrames={63}>
                <BWTextFocus content={[{"text": "可华为把它玩成了时光机。", "startFrame": 0, "durationFrames": 63}]} totalDurationFrames={63} coreSentence={[{"text": "可华为把它玩成了时光机。", "showFrom": 0, "endFrom": 0}]} coreSentenceAnchors={[{"coreSentenceAnchor": "时光机", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={470} durationInFrames={319}>
                <BWCaseBreakdown content={[{"text": "说个实案。", "startFrame": 0, "durationFrames": 34}, {"text": "2024 年，", "startFrame": 33, "durationFrames": 31}, {"text": "华为起诉联发科。", "startFrame": 64, "durationFrames": 39}, {"text": "核心专利之一，", "startFrame": 103, "durationFrames": 36}, {"text": "2011 年才提交。", "startFrame": 139, "durationFrames": 41}, {"text": "但它不是新东西。", "startFrame": 179, "durationFrames": 37}, {"text": "它是从 2007 年那份老申请里，", "startFrame": 215, "durationFrames": 68}, {"text": "拆出来的“分身”。", "startFrame": 283, "durationFrames": 35}]} totalDurationFrames={319} title={"专利分身术"} imageSrc={staticFile("images/华为专利论/scene_3_4.png")} phases={[{"phaseLabel": "引出案例", "showFrom": 0}, {"phaseLabel": "表面时间线", "showFrom": 1}, {"phaseLabel": "真相揭露", "showFrom": 5}, {"phaseLabel": "分身概念", "showFrom": 7}]} anchors={[]} />
            </Sequence>
            <Sequence from={789} durationInFrames={401}>
                <BWConceptCard content={[{"text": "什么意思？", "startFrame": 0, "durationFrames": 30}, {"text": "先在 2007 年占一个坑。", "startFrame": 29, "durationFrames": 60}, {"text": "这份老申请，", "startFrame": 89, "durationFrames": 40}, {"text": "叫母案。", "startFrame": 128, "durationFrames": 25}, {"text": "后面拆出来的新申请，", "startFrame": 153, "durationFrames": 51}, {"text": "叫分案。", "startFrame": 203, "durationFrames": 30}, {"text": "分案的厉害之处在于：", "startFrame": 233, "durationFrames": 50}, {"text": "它看起来是后来提交的，", "startFrame": 282, "durationFrames": 54}, {"text": "却能往前借用母案的时间。", "startFrame": 335, "durationFrames": 65}]} totalDurationFrames={401} imageSrc={staticFile("images/华为专利论/scene_3_5.png")} conceptName={"分案时间回溯"} anchors={[]} />
            </Sequence>
            <Sequence from={1190} durationInFrames={345}>
                <BWStepList content={[{"text": "于是玩法就变了。", "startFrame": 0, "durationFrames": 39}, {"text": "先把坑占住。", "startFrame": 38, "durationFrames": 39}, {"text": "等联发科、", "startFrame": 76, "durationFrames": 31}, {"text": "三星把芯片做出来。", "startFrame": 106, "durationFrames": 44}, {"text": "等行业标准定下来。", "startFrame": 150, "durationFrames": 48}, {"text": "等产品上市。", "startFrame": 198, "durationFrames": 40}, {"text": "再调整专利保护范围。", "startFrame": 237, "durationFrames": 59}, {"text": "也就是修改权利要求。", "startFrame": 296, "durationFrames": 48}]} totalDurationFrames={345} title={"专利陷阱三步走"} steps={[{"text": "先占坑", "showFrom": 1}, {"text": "等产品上市", "showFrom": 5}, {"text": "调整保护范围", "showFrom": 6}]} anchors={[]} />
            </Sequence>
            <Sequence from={1535} durationInFrames={124}>
                <BWCenterFocus content={[{"text": "最后发生什么？", "startFrame": 0, "durationFrames": 35}, {"text": "你已经公开的产品，", "startFrame": 34, "durationFrames": 42}, {"text": "突然被它精准套住。", "startFrame": 76, "durationFrames": 48}]} totalDurationFrames={124} imageSrc={staticFile("images/华为专利论/scene_3_7.png")} enterEffect="zoomIn" anchors={[{"text": "精准套住", "showFrom": 2, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={1659} durationInFrames={433}>
                <BWCauseChain content={[{"text": "这就像你 2007 年签了一份模糊租房合同。", "startFrame": 0, "durationFrames": 96}, {"text": "房东说没事，", "startFrame": 96, "durationFrames": 28}, {"text": "先放着。", "startFrame": 123, "durationFrames": 21}, {"text": "你花十年把房子装修好、", "startFrame": 143, "durationFrames": 53}, {"text": "生意做起来了。", "startFrame": 195, "durationFrames": 38}, {"text": "2024 年他拿出补充条款：", "startFrame": 232, "durationFrames": 70}, {"text": "你阳台面积算我的，", "startFrame": 302, "durationFrames": 44}, {"text": "月租翻倍。", "startFrame": 346, "durationFrames": 33}, {"text": "你不签？", "startFrame": 378, "durationFrames": 26}, {"text": "法院见。", "startFrame": 403, "durationFrames": 29}]} totalDurationFrames={433} layout={"horizontal"} nodes={[{ label: "模糊签约", imageSrc: staticFile("images/华为专利论/scene_3_8_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { label: "十年投入", imageSrc: staticFile("images/华为专利论/scene_3_8_img1.png"), showFrom: 3, enterEffect: "slideLeft" }, { label: "补充条款", imageSrc: staticFile("images/华为专利论/scene_3_8_img2.png"), showFrom: 5, enterEffect: "zoomIn" }, { label: "法院见", imageSrc: staticFile("images/华为专利论/scene_3_8_img3.png"), showFrom: 8, enterEffect: "fadeIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={2092} durationInFrames={90}>
                <BWCognitiveShift content={[{"text": "这不是保护研发成果。", "startFrame": 0, "durationFrames": 51}, {"text": "这是事后碰瓷。", "startFrame": 50, "durationFrames": 40}]} totalDurationFrames={90} notText={"保护研发成果"} butText={"事后碰瓷"} butSrc={staticFile("images/华为专利论/scene_3_10.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/华为专利论/scene_3/scene_3.mp3")} />
        </AbsoluteFill>
    );
};
