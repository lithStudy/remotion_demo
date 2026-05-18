import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCauseChain, BWCenterFocus, BWCognitiveShift, BWConceptCard, BWPanelGrid } from "../../../components";

// 反转：谦卑的参数战
const SCENE_DURATION = 86 + 257 + 322 + 165 + 258 + 43 + 242 + 178;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={86}>
                <BWConceptCard content={[{"text": "再说说大家都觉得他不讨喜的“碰瓷营销”。", "startFrame": 0, "durationFrames": 86}]} totalDurationFrames={86} imageSrc={staticFile("images/为雷军正名/scene_3_1.png")} conceptName={"碰瓷营销"} />
            </Sequence>
            <Sequence from={86} durationInFrames={257}>
                <BWCognitiveShift content={[{"text": "很多人觉得雷军狂妄，", "startFrame": 0, "durationFrames": 53}, {"text": "天天在发布会上“吊打”友商。", "startFrame": 52, "durationFrames": 75}, {"text": "但如果你真看完过他的发布会，", "startFrame": 126, "durationFrames": 59}, {"text": "你会发现他极少说“吊打”这个词。", "startFrame": 185, "durationFrames": 72}]} totalDurationFrames={257} notText={"经常吊打友商"} butText={"极少说“吊打”"} butSrc={staticFile("images/为雷军正名/scene_3_2.png")} notContentIndex={1} butContentIndex={3} anchors={[]} />
            </Sequence>
            <Sequence from={343} durationInFrames={322}>
                <BWPanelGrid content={[{"text": "面对苹果，", "startFrame": 0, "durationFrames": 30}, {"text": "面对保时捷，", "startFrame": 29, "durationFrames": 32}, {"text": "他嘴上说的永远是“全面对标”、", "startFrame": 61, "durationFrames": 70}, {"text": "“向行业标杆学习”、", "startFrame": 130, "durationFrames": 52}, {"text": "“如果局部有超越，请大家给点掌声”。", "startFrame": 182, "durationFrames": 93}, {"text": "态度极其谦卑。", "startFrame": 274, "durationFrames": 47}]} totalDurationFrames={322} panels={[{ src: staticFile("images/为雷军正名/scene_3_3_img0.png"), showFrom: 0, enterEffect: "zoomIn" }, { src: staticFile("images/为雷军正名/scene_3_3_img1.png"), showFrom: 1, enterEffect: "fadeIn" }]} anchors={[{"text": "全面对标", "showFrom": 2, "color": "#EF4444", "anim": "popIn", "audioEffect": null}, {"text": "向行业标杆学习", "showFrom": 3, "color": "#EF4444", "anim": "popIn", "audioEffect": null}, {"text": "局部超越", "showFrom": 4, "color": "#EF4444", "anim": "popIn", "audioEffect": null}]} />
            </Sequence>
            <Sequence from={665} durationInFrames={165}>
                <BWCenterFocus content={[{"text": " 只是转头，", "startFrame": 0, "durationFrames": 30}, {"text": "大屏幕上打出来的，", "startFrame": 29, "durationFrames": 44}, {"text": "却是一张张密密麻麻的参数对比表。", "startFrame": 73, "durationFrames": 92}]} totalDurationFrames={165} imageSrc={staticFile("images/为雷军正名/scene_3_5.png")} enterEffect="fadeIn" anchors={[{"text": "参数对比表", "showFrom": 2, "color": "#000000", "anim": "popIn", "audioEffect": null}]} />
            </Sequence>
            <Sequence from={830} durationInFrames={258}>
                <BWPanelGrid content={[{"text": "处理器跑分、", "startFrame": 0, "durationFrames": 33}, {"text": "电池续航、", "startFrame": 32, "durationFrames": 29}, {"text": "零百加速、", "startFrame": 61, "durationFrames": 29}, {"text": "风阻系数等等。", "startFrame": 89, "durationFrames": 44}, {"text": "他用最谦虚的语气，", "startFrame": 132, "durationFrames": 50}, {"text": "干着最狠的“拉表”动作。", "startFrame": 182, "durationFrames": 76}]} totalDurationFrames={258} panels={[{ src: staticFile("images/为雷军正名/scene_3_6_img0.png"), showFrom: 0, enterEffect: "zoomIn" }, { src: staticFile("images/为雷军正名/scene_3_6_img1.png"), showFrom: 1, enterEffect: "fadeIn" }, { src: staticFile("images/为雷军正名/scene_3_6_img2.png"), showFrom: 2, enterEffect: "slideLeft" }, { src: staticFile("images/为雷军正名/scene_3_6_img3.png"), showFrom: 3, enterEffect: "fadeIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={1088} durationInFrames={43}>
                <BWCenterFocus content={[{"text": "为什么要这么干？", "startFrame": 0, "durationFrames": 43}]} totalDurationFrames={43} imageSrc={staticFile("images/为雷军正名/scene_3_7.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={1131} durationInFrames={242}>
                <BWCauseChain content={[{"text": "因为绝大多数普通人看不懂深奥的技术名词，", "startFrame": 0, "durationFrames": 105}, {"text": "但大家能看懂表格，", "startFrame": 104, "durationFrames": 47}, {"text": "能看懂谁的数字更大，", "startFrame": 151, "durationFrames": 48}, {"text": "谁的价格更低。", "startFrame": 199, "durationFrames": 42}]} totalDurationFrames={242} layout={"horizontal"} nodes={[{ label: "术语门槛", imageSrc: staticFile("images/为雷军正名/scene_3_8_img0.png"), showFrom: 0 }, { label: "表格语言", imageSrc: staticFile("images/为雷军正名/scene_3_8_img1.png"), showFrom: 1 }, { label: "数字可比", imageSrc: staticFile("images/为雷军正名/scene_3_8_img2.png"), showFrom: 2 }, { label: "价格更低", imageSrc: staticFile("images/为雷军正名/scene_3_8_img3.png"), showFrom: 3 }]} anchors={[]} />
            </Sequence>
            <Sequence from={1373} durationInFrames={178}>
                <BWCognitiveShift content={[{"text": "他不是在“碰瓷”，", "startFrame": 0, "durationFrames": 44}, {"text": "他只是想把产品的好坏对比，", "startFrame": 43, "durationFrames": 62}, {"text": "以最没有门槛的方式给你看到。", "startFrame": 104, "durationFrames": 73}]} totalDurationFrames={178} notText={"碰瓷"} butText={"硬核展现产品质量"} butSrc={staticFile("images/为雷军正名/scene_3_9.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/为雷军正名/scene_3/scene_3.mp3")} />
        </AbsoluteFill>
    );
};
