import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift, BWPanelGrid, BWPeerInduct, BWTextFocus } from "../../../components";

// 剖析：雷达训练的成本黑洞
const SCENE_DURATION = 287 + 265 + 428 + 416 + 131 + 44 + 100 + 297 + 216 + 88 + 117;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={287}>
                <BWCenterFocus content={[{"text": "毫米波雷达硬件相当贵。", "startFrame": 0, "durationFrames": 64}, {"text": "一套车规级毫米波雷达，", "startFrame": 63, "durationFrames": 63}, {"text": "单颗3000到5000元。", "startFrame": 125, "durationFrames": 51}, {"text": "4颗就是1.2万到2万。", "startFrame": 175, "durationFrames": 66}, {"text": "这只是采购价。", "startFrame": 240, "durationFrames": 46}]} totalDurationFrames={287} imageSrc={staticFile("images/智驾论之性价比/scene_2_1.png")} enterEffect="fadeIn" anchors={[{"text": "毫米波雷达", "showFrom": 0, "color": "#000000", "anim": "spring", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={287} durationInFrames={265}>
                <BWPanelGrid content={[{"text": "车企还要承担集成、", "startFrame": 0, "durationFrames": 53}, {"text": "标定、", "startFrame": 52, "durationFrames": 18}, {"text": "测试的成本。", "startFrame": 69, "durationFrames": 32}, {"text": "加起来，", "startFrame": 101, "durationFrames": 23}, {"text": "一套雷达方案的硬件溢价，", "startFrame": 124, "durationFrames": 60}, {"text": "可能超过3万。", "startFrame": 184, "durationFrames": 40}, {"text": "这还只是硬件。", "startFrame": 224, "durationFrames": 41}]} totalDurationFrames={265} panels={[{ src: staticFile("images/智驾论之性价比/scene_2_2_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { src: staticFile("images/智驾论之性价比/scene_2_2_img1.png"), showFrom: 1, enterEffect: "fadeIn" }, { src: staticFile("images/智驾论之性价比/scene_2_2_img2.png"), showFrom: 2, enterEffect: "slideBottom" }]} anchors={[{"text": "超过3万", "showFrom": 5, "color": "#EF4444", "anim": "spring", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={552} durationInFrames={428}>
                <BWCenterFocus content={[{"text": "更贵的是训练。", "startFrame": 0, "durationFrames": 45}, {"text": "现在的智驾，", "startFrame": 44, "durationFrames": 35}, {"text": "本质是神经网络。", "startFrame": 79, "durationFrames": 42}, {"text": "神经网络的训练，", "startFrame": 120, "durationFrames": 42}, {"text": "靠的是海量标注数据。", "startFrame": 162, "durationFrames": 64}, {"text": "纯视觉方案，", "startFrame": 225, "durationFrames": 34}, {"text": "只需要训练摄像头这一种输入。", "startFrame": 259, "durationFrames": 67}, {"text": "加了毫米波雷达，", "startFrame": 325, "durationFrames": 38}, {"text": "你就要同时训练两种信号。", "startFrame": 362, "durationFrames": 65}]} totalDurationFrames={428} imageSrc={staticFile("images/智驾论之性价比/scene_2_3.png")} enterEffect="fadeIn" anchors={[{"text": "训练", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": null}]} />
            </Sequence>
            <Sequence from={980} durationInFrames={416}>
                <BWPeerInduct content={[{"text": "更麻烦的是，两种信号会冲突。", "startFrame": 0, "durationFrames": 78}, {"text": "极端大雨天，摄像头模糊，雷达信号强。", "startFrame": 77, "durationFrames": 90}, {"text": "晴天，摄像头清晰，雷达可能因为金属护栏产生虚警。", "startFrame": 167, "durationFrames": 136}, {"text": "训练时，你必须同时处理一致和冲突两种情况。", "startFrame": 303, "durationFrames": 113}]} totalDurationFrames={416} premises={[{ imageSrc: staticFile("images/智驾论之性价比/scene_2_4_img0.png"), enterEffect: "slideBottom", showFrom: 1 }, { imageSrc: staticFile("images/智驾论之性价比/scene_2_4_img1.png"), enterEffect: "slideBottom", showFrom: 2 }]} conclusion={{ imageSrc: staticFile("images/智驾论之性价比/scene_2_4.png"), enterEffect: "zoomIn", showFrom: 3, tone: "alert" }} anchors={[]} />
            </Sequence>
            <Sequence from={1396} durationInFrames={131}>
                <BWCognitiveShift content={[{"text": "这意味着，", "startFrame": 0, "durationFrames": 26}, {"text": "训练数据量不是翻一倍，", "startFrame": 25, "durationFrames": 60}, {"text": "而是指数级上升。", "startFrame": 85, "durationFrames": 46}]} totalDurationFrames={131} notText={"翻一倍"} butText={"指数级上升"} butSrc={staticFile("images/智驾论之性价比/scene_2_5.png")} notContentIndex={1} butContentIndex={2} anchors={[]} />
            </Sequence>
            <Sequence from={1527} durationInFrames={44}>
                <BWTextFocus content={[{"text": "为什么是指数级？", "startFrame": 0, "durationFrames": 44}]} totalDurationFrames={44} coreSentence={[{"text": "为什么是指数级？", "showFrom": 0, "endFrom": 0}]} coreSentenceAnchors={[{"coreSentenceAnchor": "指数级", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={1571} durationInFrames={100}>
                <BWCenterFocus content={[{"text": "因为冲突场景的数量，", "startFrame": 0, "durationFrames": 52}, {"text": "远多于单一场景。", "startFrame": 51, "durationFrames": 49}]} totalDurationFrames={100} imageSrc={staticFile("images/智驾论之性价比/scene_2_7.png")} enterEffect="fadeIn" anchors={[{"text": "冲突场景", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": null}]} />
            </Sequence>
            <Sequence from={1671} durationInFrames={297}>
                <BWPanelGrid content={[{"text": "你需要训练“摄像头可靠、雷达可靠”。", "startFrame": 0, "durationFrames": 89}, {"text": "“摄像头可靠、雷达不可靠”。", "startFrame": 88, "durationFrames": 64}, {"text": "“摄像头不可靠、雷达可靠”。", "startFrame": 151, "durationFrames": 59}, {"text": "“摄像头不可靠、雷达不可靠”四种组合。", "startFrame": 210, "durationFrames": 87}]} totalDurationFrames={297} panels={[{ src: staticFile("images/智驾论之性价比/scene_2_8_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { src: staticFile("images/智驾论之性价比/scene_2_8_img1.png"), showFrom: 1, enterEffect: "fadeIn" }, { src: staticFile("images/智驾论之性价比/scene_2_8_img2.png"), showFrom: 2, enterEffect: "fadeIn" }, { src: staticFile("images/智驾论之性价比/scene_2_8_img3.png"), showFrom: 3, enterEffect: "fadeIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={1968} durationInFrames={216}>
                <BWPanelGrid content={[{"text": "每增加一种组合，", "startFrame": 0, "durationFrames": 45}, {"text": "标注成本、", "startFrame": 44, "durationFrames": 32}, {"text": "算力成本、", "startFrame": 76, "durationFrames": 29}, {"text": "时间成本，", "startFrame": 104, "durationFrames": 32}, {"text": "都不是线性增长，", "startFrame": 136, "durationFrames": 38}, {"text": "而是指数增长。", "startFrame": 173, "durationFrames": 42}]} totalDurationFrames={216} panels={[{ src: staticFile("images/智驾论之性价比/scene_2_9_img0.png"), showFrom: 1, enterEffect: "fadeIn" }, { src: staticFile("images/智驾论之性价比/scene_2_9_img1.png"), showFrom: 2, enterEffect: "fadeIn" }, { src: staticFile("images/智驾论之性价比/scene_2_9_img2.png"), showFrom: 3, enterEffect: "fadeIn" }]} anchors={[{"text": "指数增长", "showFrom": 5, "color": "#EF4444", "anim": "spring", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={2184} durationInFrames={88}>
                <BWCenterFocus content={[{"text": "最终，", "startFrame": 0, "durationFrames": 19}, {"text": "这些成本会传导到终端。", "startFrame": 18, "durationFrames": 69}]} totalDurationFrames={88} imageSrc={staticFile("images/智驾论之性价比/scene_2_10.png")} enterEffect="fadeIn" anchors={[{"text": "成本传导", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={2272} durationInFrames={117}>
                <BWTextFocus content={[{"text": "车企不会自己吃亏。", "startFrame": 0, "durationFrames": 51}, {"text": "买单的，", "startFrame": 50, "durationFrames": 26}, {"text": "是每一个消费者。", "startFrame": 76, "durationFrames": 41}]} totalDurationFrames={117} coreSentence={[{"text": "车企不会自己吃亏。", "showFrom": 0}, {"text": "买单的，", "showFrom": 1}, {"text": "是每一个消费者。", "showFrom": 2}]} coreSentenceAnchors={[{"coreSentenceAnchor": "买单的", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/智驾论之性价比/scene_2/scene_2.mp3")} />
        </AbsoluteFill>
    );
};
