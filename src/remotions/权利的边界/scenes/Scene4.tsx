import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCauseChain, BWCenterFocus, BWCognitiveShift, BWDosAndDonts, BWPanelGrid, BWStepList, BWTextFocus, BWTimeline } from "../../../components";

// 命名·权力借口
const SCENE_DURATION = 222 + 127 + 220 + 45 + 175 + 168 + 156 + 205 + 75 + 101 + 148;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={222}>
                <BWDosAndDonts content={[{"text": "法治不是把每个人都变成强者。", "startFrame": 0, "durationFrames": 79}, {"text": "那不现实。", "startFrame": 78, "durationFrames": 44}, {"text": "法治真正做的，", "startFrame": 122, "durationFrames": 44}, {"text": "是让强者也必须停一下。", "startFrame": 165, "durationFrames": 56}]} totalDurationFrames={222} left={{label: "❌ 让人变强", src: staticFile("images/权利的边界/scene_4_1_left.png"), showFrom: 0 }} right={{label: "✅ 强者须停", src: staticFile("images/权利的边界/scene_4_1_right.png"), showFrom: 2 }} anchors={[]} />
            </Sequence>
            <Sequence from={222} durationInFrames={127}>
                <BWStepList content={[{"text": "他要解释。", "startFrame": 0, "durationFrames": 33}, {"text": "要申请。", "startFrame": 32, "durationFrames": 29}, {"text": "要经过程序。", "startFrame": 61, "durationFrames": 33}, {"text": "要承担责任。", "startFrame": 93, "durationFrames": 33}]} totalDurationFrames={127} steps={[{"text": "他要解释。", "showFrom": 0}, {"text": "要申请。", "showFrom": 1}, {"text": "要经过程序。", "showFrom": 2}, {"text": "要承担责任。", "showFrom": 3}]} anchors={[]} />
            </Sequence>
            <Sequence from={349} durationInFrames={220}>
                <BWCenterFocus content={[{"text": "很多人会觉得，", "startFrame": 0, "durationFrames": 40}, {"text": "这太麻烦了。", "startFrame": 39, "durationFrames": 32}, {"text": "抓紧办事不好吗？", "startFrame": 70, "durationFrames": 35}, {"text": "遇到问题直接冲进去，不是更快吗？", "startFrame": 105, "durationFrames": 65}, {"text": "这就是最大的陷阱。", "startFrame": 170, "durationFrames": 50}]} totalDurationFrames={220} imageSrc={staticFile("images/权利的边界/scene_4_3.png")} enterEffect="fadeIn" anchors={[{"text": "最大的陷阱", "showFrom": 4, "color": "#000000", "anim": "spring", "audioEffect": null}]} />
            </Sequence>
            <Sequence from={569} durationInFrames={45}>
                <BWTextFocus content={[{"text": "权力最喜欢借口。", "startFrame": 0, "durationFrames": 45}]} totalDurationFrames={45} coreSentence={["权力最喜欢借口。"]} coreSentenceAnchors={[]} />
            </Sequence>
            <Sequence from={614} durationInFrames={175}>
                <BWPanelGrid content={[{"text": "效率，", "startFrame": 0, "durationFrames": 18}, {"text": "是它最常用的借口。", "startFrame": 17, "durationFrames": 40}, {"text": "安全，", "startFrame": 56, "durationFrames": 16}, {"text": "是它最漂亮的借口。", "startFrame": 72, "durationFrames": 43}, {"text": "大局，", "startFrame": 114, "durationFrames": 19}, {"text": "是它最难反驳的借口。", "startFrame": 133, "durationFrames": 42}]} totalDurationFrames={175} panels={[{ src: staticFile("images/权利的边界/scene_4_5_img0.png"), showFrom: 0, enterEffect: "zoomIn" }, { src: staticFile("images/权利的边界/scene_4_5_img1.png"), showFrom: 2 }, { src: staticFile("images/权利的边界/scene_4_5_img2.png"), showFrom: 4 }]} anchors={[]} />
            </Sequence>
            <Sequence from={789} durationInFrames={168}>
                <BWCauseChain content={[{"text": "可一旦这些借口，", "startFrame": 0, "durationFrames": 34}, {"text": "可以随便推开一扇普通人的门。", "startFrame": 33, "durationFrames": 59}, {"text": "那扇门就不再是门。", "startFrame": 92, "durationFrames": 42}, {"text": "它只是摆设。", "startFrame": 133, "durationFrames": 34}]} totalDurationFrames={168} layout={"horizontal"} nodes={[{ label: "借口推门", imageSrc: staticFile("images/权利的边界/scene_4_6_img0.png"), showFrom: 0 }, { label: "门成摆设", imageSrc: staticFile("images/权利的边界/scene_4_6_img1.png"), showFrom: 2 }]} />
            </Sequence>
            <Sequence from={957} durationInFrames={156}>
                <BWCognitiveShift content={[{"text": "你以为损失的，", "startFrame": 0, "durationFrames": 31}, {"text": "只是一个人的隐私。", "startFrame": 30, "durationFrames": 59}, {"text": "不。", "startFrame": 89, "durationFrames": 5}, {"text": "损失的是所有人的边界感。", "startFrame": 93, "durationFrames": 63}]} totalDurationFrames={156} notText={"只损失个人隐私"} butText={"损失所有人边界感"} butSrc={staticFile("images/权利的边界/scene_4_7.png")} notContentIndex={1} butContentIndex={3} anchors={[]} />
            </Sequence>
            <Sequence from={1113} durationInFrames={205}>
                <BWTimeline content={[{"text": "今天它可以为了效率进他的门。", "startFrame": 0, "durationFrames": 59}, {"text": "明天它也可以为了安全进你的门。", "startFrame": 58, "durationFrames": 59}, {"text": "后天它就可以为了大局，", "startFrame": 117, "durationFrames": 53}, {"text": "进入每一个人的门。", "startFrame": 169, "durationFrames": 35}]} totalDurationFrames={205} images={[{ src: staticFile("images/权利的边界/scene_4_8_img0.png"), enterEffect: "slideLeft", textIndex: 0 }, { src: staticFile("images/权利的边界/scene_4_8_img1.png"), enterEffect: "fadeIn", textIndex: 1 }, { src: staticFile("images/权利的边界/scene_4_8_img2.png"), enterEffect: "slideLeft", textIndex: 2 }]} anchors={[]} />
            </Sequence>
            <Sequence from={1318} durationInFrames={75}>
                <BWCenterFocus content={[{"text": "门一旦失去意义，", "startFrame": 0, "durationFrames": 33}, {"text": "家也会失去意义。", "startFrame": 32, "durationFrames": 42}]} totalDurationFrames={75} imageSrc={staticFile("images/权利的边界/scene_4_9.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={1393} durationInFrames={101}>
                <BWCognitiveShift content={[{"text": "家不是四面墙。", "startFrame": 0, "durationFrames": 39}, {"text": "家是一个人最后能说“不”的地方。", "startFrame": 38, "durationFrames": 63}]} totalDurationFrames={101} notText={"四面墙"} butText={"最后能说“不”的地方"} butSrc={staticFile("images/权利的边界/scene_4_10.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Sequence from={1494} durationInFrames={148}>
                <BWCauseChain content={[{"text": "如果连这里都不能拒绝，", "startFrame": 0, "durationFrames": 50}, {"text": "那人就不是生活在家里。", "startFrame": 49, "durationFrames": 43}, {"text": "他只是暂时被允许待在那里。", "startFrame": 91, "durationFrames": 56}]} totalDurationFrames={148} layout={"horizontal"} nodes={[{ label: "失去拒绝权", imageSrc: staticFile("images/权利的边界/scene_4_11_img0.png"), showFrom: 0 }, { label: "家不再是家", imageSrc: staticFile("images/权利的边界/scene_4_11_img1.png"), showFrom: 1 }, { label: "暂时被允许", imageSrc: staticFile("images/权利的边界/scene_4_11_img2.png"), showFrom: 2 }]} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/权利的边界/scene_4/scene_4.mp3")} />
        </AbsoluteFill>
    );
};
