import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCauseChain, BWCenterFocus, BWMethodStack, BWSplitCompare, BWTextFocus } from "../../../components";

// 剖析：互联网部落主义
const SCENE_DURATION = 139 + 122 + 331 + 286 + 245 + 120;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={139}>
                <BWCenterFocus content={[{"text": "在今天的互联网语境下，", "startFrame": 0, "durationFrames": 48}, {"text": "消费品早已异化为身份认同的图腾。", "startFrame": 48, "durationFrames": 91}]} totalDurationFrames={139} imageSrc={staticFile("images/认知陷阱3/scene_2_1.png")} enterEffect="fadeIn" anchors={[{"text": "身份认同的图腾", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={139} durationInFrames={122}>
                <BWCauseChain content={[{"text": "你开什么车、", "startFrame": 0, "durationFrames": 31}, {"text": "用什么手机，", "startFrame": 30, "durationFrames": 28}, {"text": "直接决定了你属于哪个“部落”。", "startFrame": 57, "durationFrames": 64}]} totalDurationFrames={122} layout={"horizontal"} nodes={[{ label: "开什么车", imageSrc: staticFile("images/认知陷阱3/scene_2_2_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { label: "用什么手机", imageSrc: staticFile("images/认知陷阱3/scene_2_2_img1.png"), showFrom: 1, enterEffect: "slideLeft" }, { label: "部落归属", imageSrc: staticFile("images/认知陷阱3/scene_2_2_img2.png"), showFrom: 2, enterEffect: "zoomIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={261} durationInFrames={331}>
                <BWMethodStack content={[{"text": "当人们在评论区里疯狂攻击某个品牌时，", "startFrame": 0, "durationFrames": 86}, {"text": "他们真的是在聊产品吗？", "startFrame": 85, "durationFrames": 53}, {"text": "不，他们是在向对立部落宣战，", "startFrame": 137, "durationFrames": 81}, {"text": "同时向自己的部落递交“投名状”以换取归属感。", "startFrame": 218, "durationFrames": 113}]} totalDurationFrames={331} title={"评论区攻击的真相"} imageSrc={staticFile("images/认知陷阱3/scene_2_3.png")} notes={[{"text": "实为向对立部落宣战", "showFrom": 2}, {"text": "投名状换归属感", "showFrom": 3}]} />
            </Sequence>
            <Sequence from={592} durationInFrames={286}>
                <BWCenterFocus content={[{"text": "那段没头没尾的事故视频，", "startFrame": 0, "durationFrames": 68}, {"text": "不过是用来互相攻伐的廉价借口。", "startFrame": 67, "durationFrames": 67}, {"text": "社会学中的“内群体偏好与外群体贬损”，", "startFrame": 134, "durationFrames": 92}, {"text": "在这里展现得淋漓尽致：", "startFrame": 225, "durationFrames": 60}]} totalDurationFrames={286} imageSrc={staticFile("images/认知陷阱3/scene_2_4.png")} enterEffect="fadeIn" anchors={[{"text": "廉价借口", "showFrom": 1, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={878} durationInFrames={245}>
                <BWSplitCompare content={[{"text": "自己支持的品牌出了事，", "startFrame": 0, "durationFrames": 47}, {"text": "那是“偶发个例”、", "startFrame": 46, "durationFrames": 45}, {"text": "“车主脚法不行”；", "startFrame": 91, "durationFrames": 48}, {"text": "对立品牌出了事，", "startFrame": 139, "durationFrames": 36}, {"text": "那就是“工业垃圾”、“早晚药丸”。", "startFrame": 175, "durationFrames": 69}]} totalDurationFrames={245} leftSrc={staticFile("images/认知陷阱3/scene_2_5_left.png")} rightSrc={staticFile("images/认知陷阱3/scene_2_5_right.png")} leftLabel={"支持者"} rightLabel={"反对者"} leftShowFrom={0} rightShowFrom={3} anchors={[]} />
            </Sequence>
            <Sequence from={1123} durationInFrames={120}>
                <BWTextFocus content={[{"text": "在这里，", "startFrame": 0, "durationFrames": 20}, {"text": "事实早已被彻底扭曲，", "startFrame": 19, "durationFrames": 52}, {"text": "沦为立场的卑微附庸。", "startFrame": 70, "durationFrames": 50}]} totalDurationFrames={120} coreSentence={["在这里，事实早已被彻底扭曲，", "沦为立场的卑微附庸。"]} coreSentenceAnchors={[{"coreSentenceAnchor": "彻底扭曲", "color": "#EF4444"}, {"coreSentenceAnchor": "卑微附庸", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/认知陷阱3/scene_2/scene_2.mp3")} />
        </AbsoluteFill>
    );
};
