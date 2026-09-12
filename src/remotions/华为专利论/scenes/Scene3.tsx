import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCaseBreakdown, BWCauseChain, BWCenterFocus, BWCognitiveShift, BWConceptCard, BWStepList, BWTextFocus } from "../../../components";

// 剖析·分案碰瓷
const SCENE_DURATION = 112 + 314 + 63 + 337 + 410 + 337 + 109 + 435 + 87;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={112}>
                <BWConceptCard content={[{"text": "第二类，", "startFrame": 0, "durationFrames": 24}, {"text": "最冷血的：", "startFrame": 24, "durationFrames": 35}, {"text": "时光倒流式狙击。", "startFrame": 58, "durationFrames": 53}]} totalDurationFrames={112} imageSrc={staticFile("images/华为专利论/scene_3_1.png")} conceptName={"时光倒流式狙击"} anchors={[]} />
            </Sequence>
            <Sequence from={112} durationInFrames={314}>
                <BWCenterFocus content={[{"text": "专利申请中有一种叫做分案申请，", "startFrame": 0, "durationFrames": 84}, {"text": "本来是好事。", "startFrame": 84, "durationFrames": 28}, {"text": "意思是：", "startFrame": 111, "durationFrames": 20}, {"text": "一份专利申请里，", "startFrame": 131, "durationFrames": 44}, {"text": "如果塞了两个不相关发明，", "startFrame": 174, "durationFrames": 56}, {"text": "拆开来审，", "startFrame": 230, "durationFrames": 29}, {"text": "各算各的。", "startFrame": 258, "durationFrames": 31}, {"text": "合理。", "startFrame": 289, "durationFrames": 24}]} totalDurationFrames={314} imageSrc={staticFile("images/华为专利论/scene_3_2.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={426} durationInFrames={63}>
                <BWTextFocus content={[{"text": "可华为把它玩成了时光机。", "startFrame": 0, "durationFrames": 63}]} totalDurationFrames={63} coreSentence={[{"text": "可华为把它玩成了时光机。", "showFrom": 0, "endFrom": 0}]} coreSentenceAnchors={[{"coreSentenceAnchor": "时光机", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={489} durationInFrames={337}>
                <BWCaseBreakdown content={[{"text": "说个实案。", "startFrame": 0, "durationFrames": 35}, {"text": "2024 年，", "startFrame": 34, "durationFrames": 31}, {"text": "华为起诉联发科。", "startFrame": 65, "durationFrames": 46}, {"text": "核心专利之一，", "startFrame": 110, "durationFrames": 33}, {"text": "2011 年才提交。", "startFrame": 143, "durationFrames": 44}, {"text": "但它不是新东西。", "startFrame": 187, "durationFrames": 42}, {"text": "它是从 2007 年那份老申请里，", "startFrame": 228, "durationFrames": 74}, {"text": "拆出来的“分身”。", "startFrame": 301, "durationFrames": 35}]} totalDurationFrames={337} title={"专利分身术"} imageSrc={staticFile("images/华为专利论/scene_3_4.png")} phases={[{"phaseLabel": "引出案例", "showFrom": 0}, {"phaseLabel": "表面时间线", "showFrom": 1}, {"phaseLabel": "真相揭露", "showFrom": 5}, {"phaseLabel": "分身概念", "showFrom": 7}]} anchors={[]} />
            </Sequence>
            <Sequence from={826} durationInFrames={410}>
                <BWConceptCard content={[{"text": "什么意思？", "startFrame": 0, "durationFrames": 33}, {"text": "先在 2007 年占一个坑。", "startFrame": 32, "durationFrames": 66}, {"text": "这份老申请，", "startFrame": 98, "durationFrames": 40}, {"text": "叫母案。", "startFrame": 137, "durationFrames": 22}, {"text": "后面拆出来的新申请，", "startFrame": 158, "durationFrames": 47}, {"text": "叫分案。", "startFrame": 205, "durationFrames": 32}, {"text": "分案的厉害之处在于：", "startFrame": 237, "durationFrames": 55}, {"text": "它看起来是后来提交的，", "startFrame": 291, "durationFrames": 55}, {"text": "却能往前借用母案的时间。", "startFrame": 346, "durationFrames": 64}]} totalDurationFrames={410} imageSrc={staticFile("images/华为专利论/scene_3_5.png")} conceptName={"分案时间回溯"} anchors={[]} />
            </Sequence>
            <Sequence from={1236} durationInFrames={337}>
                <BWStepList content={[{"text": "于是玩法就变了。", "startFrame": 0, "durationFrames": 38}, {"text": "先把坑占住。", "startFrame": 37, "durationFrames": 38}, {"text": "等联发科、", "startFrame": 74, "durationFrames": 27}, {"text": "三星把芯片做出来。", "startFrame": 100, "durationFrames": 43}, {"text": "等行业标准定下来。", "startFrame": 143, "durationFrames": 52}, {"text": "等产品上市。", "startFrame": 194, "durationFrames": 43}, {"text": "再调整专利保护范围。", "startFrame": 237, "durationFrames": 55}, {"text": "也就是修改权利要求。", "startFrame": 291, "durationFrames": 45}]} totalDurationFrames={337} title={"专利陷阱三步走"} steps={[{"text": "先占坑", "showFrom": 1}, {"text": "等产品上市", "showFrom": 5}, {"text": "调整保护范围", "showFrom": 6}]} anchors={[]} />
            </Sequence>
            <Sequence from={1573} durationInFrames={109}>
                <BWCenterFocus content={[{"text": "最后发生什么？", "startFrame": 0, "durationFrames": 29}, {"text": "你已经公开的产品，", "startFrame": 28, "durationFrames": 40}, {"text": "突然被它精准套住。", "startFrame": 67, "durationFrames": 42}]} totalDurationFrames={109} imageSrc={staticFile("images/华为专利论/scene_3_7.png")} enterEffect="zoomIn" anchors={[{"text": "精准套住", "showFrom": 2, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={1682} durationInFrames={435}>
                <BWCauseChain content={[{"text": "这就像你 2007 年签了一份模糊租房合同。", "startFrame": 0, "durationFrames": 96}, {"text": "房东说没事，", "startFrame": 96, "durationFrames": 30}, {"text": "先放着。", "startFrame": 125, "durationFrames": 26}, {"text": "你花十年把房子装修好、", "startFrame": 151, "durationFrames": 53}, {"text": "生意做起来了。", "startFrame": 203, "durationFrames": 36}, {"text": "2024 年他拿出补充条款：", "startFrame": 239, "durationFrames": 67}, {"text": "你阳台面积算我的，", "startFrame": 305, "durationFrames": 41}, {"text": "月租翻倍。", "startFrame": 346, "durationFrames": 28}, {"text": "你不签？", "startFrame": 373, "durationFrames": 34}, {"text": "法院见。", "startFrame": 407, "durationFrames": 28}]} totalDurationFrames={435} layout={"horizontal"} nodes={[{ label: "模糊签约", imageSrc: staticFile("images/华为专利论/scene_3_8_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { label: "十年投入", imageSrc: staticFile("images/华为专利论/scene_3_8_img1.png"), showFrom: 3, enterEffect: "slideLeft" }, { label: "补充条款", imageSrc: staticFile("images/华为专利论/scene_3_8_img2.png"), showFrom: 5, enterEffect: "zoomIn" }, { label: "法院见", imageSrc: staticFile("images/华为专利论/scene_3_8_img3.png"), showFrom: 8, enterEffect: "fadeIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={2117} durationInFrames={87}>
                <BWCognitiveShift content={[{"text": "这不是保护研发成果。", "startFrame": 0, "durationFrames": 47}, {"text": "这是事后碰瓷。", "startFrame": 46, "durationFrames": 40}]} totalDurationFrames={87} notText={"保护研发成果"} butText={"事后碰瓷"} butSrc={staticFile("images/华为专利论/scene_3_10.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/华为专利论/scene_3/scene_3.mp3")} />
        </AbsoluteFill>
    );
};
