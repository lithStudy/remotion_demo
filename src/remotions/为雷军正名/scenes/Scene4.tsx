import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCauseChain, BWCognitiveShift, BWConceptCard, BWPeerInduct, BWTextFocus } from "../../../components";

// 命名：工程师文化底色
const SCENE_DURATION = 116 + 184 + 88 + 118 + 164 + 225 + 88 + 207;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={116}>
                <BWConceptCard content={[{"text": "这其实就是小米的底色---", "startFrame": 0, "durationFrames": 65}, {"text": "极致的 “工程师文化”。", "startFrame": 64, "durationFrames": 52}]} totalDurationFrames={116} imageSrc={staticFile("images/为雷军正名/scene_4_1.png")} conceptName={"工程师文化"} />
            </Sequence>
            <Sequence from={116} durationInFrames={184}>
                <BWPeerInduct content={[{"text": "传统品牌跟你讲调性、", "startFrame": 0, "durationFrames": 48}, {"text": "讲生活方式，", "startFrame": 48, "durationFrames": 39}, {"text": "制造信息壁垒让你为了“感觉”去溢价买单。", "startFrame": 86, "durationFrames": 98}]} totalDurationFrames={184} premises={[{ imageSrc: staticFile("images/为雷军正名/scene_4_2_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { imageSrc: staticFile("images/为雷军正名/scene_4_2_img1.png"), showFrom: 1, enterEffect: "fadeIn" }]} conclusion={{ imageSrc: staticFile("images/为雷军正名/scene_4_2.png"), showFrom: 2, enterEffect: "zoomIn", tone: "alert" }} anchors={[{"text": "信息壁垒", "showFrom": 2, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={300} durationInFrames={88}>
                <BWTextFocus content={[{"text": "但工程师最讨厌虚无缥缈的形容词。", "startFrame": 0, "durationFrames": 88}]} totalDurationFrames={88} coreSentence={["但工程师最讨厌虚无缥缈的形容词"]} coreSentenceAnchors={[{"coreSentenceAnchor": "虚无缥缈的形容词", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={388} durationInFrames={118}>
                <BWCauseChain content={[{"text": "你说你性能好？", "startFrame": 0, "durationFrames": 39}, {"text": "不看小视频，", "startFrame": 38, "durationFrames": 33}, {"text": "直接打上纽北赛道；", "startFrame": 70, "durationFrames": 47}]} totalDurationFrames={118} layout={"horizontal"} nodes={[{ label: "质疑性能", imageSrc: staticFile("images/为雷军正名/scene_4_4_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { label: "纽北赛道", imageSrc: staticFile("images/为雷军正名/scene_4_4_img1.png"), showFrom: 2, enterEffect: "zoomIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={506} durationInFrames={164}>
                <BWCauseChain content={[{"text": "你说你电池好？", "startFrame": 0, "durationFrames": 33}, {"text": "别整PPT，", "startFrame": 32, "durationFrames": 33}, {"text": "雷军亲自开直播，", "startFrame": 65, "durationFrames": 46}, {"text": "从满电跑到趴窝；", "startFrame": 110, "durationFrames": 53}]} totalDurationFrames={164} layout={"horizontal"} nodes={[{ label: "你说电池好", imageSrc: staticFile("images/为雷军正名/scene_4_5_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { label: "高速直播", imageSrc: staticFile("images/为雷军正名/scene_4_5_img1.png"), showFrom: 2, enterEffect: "zoomIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={670} durationInFrames={225}>
                <BWCauseChain content={[{"text": "你说你车安全？", "startFrame": 0, "durationFrames": 42}, {"text": "别废话，", "startFrame": 41, "durationFrames": 23}, {"text": "直接把车大卸八块，", "startFrame": 64, "durationFrames": 42}, {"text": "防撞梁多厚、", "startFrame": 105, "durationFrames": 33}, {"text": "线束怎么走的，", "startFrame": 138, "durationFrames": 33}, {"text": "全网拿着放大镜看。", "startFrame": 171, "durationFrames": 54}]} totalDurationFrames={225} layout={"horizontal"} nodes={[{ label: "质疑安全", imageSrc: staticFile("images/为雷军正名/scene_4_6_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { label: "结构拆解", imageSrc: staticFile("images/为雷军正名/scene_4_6_img1.png"), showFrom: 2, enterEffect: "zoomIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={895} durationInFrames={88}>
                <BWTextFocus content={[{"text": "别废话，", "startFrame": 0, "durationFrames": 27}, {"text": "看东西 数据即正义", "startFrame": 26, "durationFrames": 62}]} totalDurationFrames={88} coreSentence={[{"text": "别废话", "showFrom": 0}, {"text": "看东西 数据即正义", "showFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "数据即正义", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={983} durationInFrames={207}>
                <BWCognitiveShift content={[{"text": "这种把底牌翻给消费者看的营销，", "startFrame": 0, "durationFrames": 68}, {"text": "没有滤镜，甚至有点“土”，", "startFrame": 67, "durationFrames": 58}, {"text": "但它是对消费者知情权最大的尊重。", "startFrame": 125, "durationFrames": 82}]} totalDurationFrames={207} notText={"没有滤镜有点土"} butText={"尊重消费者知情权"} butSrc={staticFile("images/为雷军正名/scene_4_8.png")} notContentIndex={1} butContentIndex={2} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/为雷军正名/scene_4/scene_4.mp3")} />
        </AbsoluteFill>
    );
};
