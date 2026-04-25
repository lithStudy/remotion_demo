import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCauseChain, BWCenterFocus, BWDosAndDonts, BWQuoteCitation, BWTextFocus } from "../../../components";

// 剖析：乌合之众的镜像
const SCENE_DURATION = 182 + 182 + 393 + 94 + 279 + 167 + 99;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={182}>
                <BWCenterFocus content={[{"text": "为什么现实生活中温文尔雅的普通人，", "startFrame": 0, "durationFrames": 72}, {"text": "一进入网络评论区就会变得暴躁嗜血、", "startFrame": 72, "durationFrames": 77}, {"text": "急于定论？", "startFrame": 148, "durationFrames": 33}]} totalDurationFrames={182} imageSrc={staticFile("images/认知陷阱3/scene_3_1.png")} enterEffect="fadeIn" anchors={[{"text": "暴躁嗜血", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={182} durationInFrames={182}>
                <BWQuoteCitation content={[{"text": "勒庞在《乌合之众》中早有预言：", "startFrame": 0, "durationFrames": 70}, {"text": "当个人融入群体，", "startFrame": 69, "durationFrames": 38}, {"text": "匿名的面具会让他彻底丧失责任感。", "startFrame": 106, "durationFrames": 75}]} totalDurationFrames={182} quoteSource={"勒庞《乌合之众》"} quoteDisplayText={"当个人融入群体，匿名的面具会让他彻底丧失责任感。"} showFrom={1} anchors={[]} />
            </Sequence>
            <Sequence from={364} durationInFrames={393}>
                <BWDosAndDonts content={[{"text": "在现实街头，", "startFrame": 0, "durationFrames": 36}, {"text": "如果你指着一个遭遇车祸的陌生人大喊“你活该起火”，", "startFrame": 36, "durationFrames": 113}, {"text": "大概率会挨一顿毒打；", "startFrame": 148, "durationFrames": 51}, {"text": "但在互联网上，", "startFrame": 198, "durationFrames": 34}, {"text": "当你化身为十万条评论中的一个像素点时，", "startFrame": 232, "durationFrames": 92}, {"text": "作恶的成本被无限稀释了。", "startFrame": 324, "durationFrames": 69}]} totalDurationFrames={393} left={{label: "❌ 现实街头", src: staticFile("images/认知陷阱3/scene_3_3_left.png"), showFrom: 0 }} right={{label: "🌐 匿名校场", src: staticFile("images/认知陷阱3/scene_3_3_right.png"), showFrom: 3 }} />
            </Sequence>
            <Sequence from={757} durationInFrames={94}>
                <BWCenterFocus content={[{"text": "群体从来不善于推理，", "startFrame": 0, "durationFrames": 46}, {"text": "却极易被情绪裹挟。", "startFrame": 45, "durationFrames": 48}]} totalDurationFrames={94} imageSrc={staticFile("images/认知陷阱3/scene_3_4.png")} enterEffect="fadeIn" anchors={[{"text": "情绪裹挟", "showFrom": 1, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={851} durationInFrames={279}>
                <BWCauseChain content={[{"text": "当评论区高赞的前十条都在疯狂输出同一种情绪时，", "startFrame": 0, "durationFrames": 120}, {"text": "后来者会不由自主地放弃独立思考，", "startFrame": 120, "durationFrames": 92}, {"text": "纵身跃入这场情绪的狂欢。", "startFrame": 211, "durationFrames": 67}]} totalDurationFrames={279} layout={"horizontal"} nodes={[{ label: "情绪输出", imageSrc: staticFile("images/认知陷阱3/scene_3_5_img0.png"), showFrom: 0 }, { label: "放弃思考", imageSrc: staticFile("images/认知陷阱3/scene_3_5_img1.png"), showFrom: 1 }, { label: "情绪狂欢", imageSrc: staticFile("images/认知陷阱3/scene_3_5_img2.png"), showFrom: 2 }]} anchors={[]} />
            </Sequence>
            <Sequence from={1130} durationInFrames={167}>
                <BWCenterFocus content={[{"text": "那种急切下定论的快感，", "startFrame": 0, "durationFrames": 52}, {"text": "能让人瞬间获得一种虚幻的道德制高点与智力优越感—", "startFrame": 51, "durationFrames": 116}]} totalDurationFrames={167} imageSrc={staticFile("images/认知陷阱3/scene_3_6.png")} enterEffect="fadeIn" anchors={[{"text": "道德制高点", "showFrom": 1, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={1297} durationInFrames={99}>
                <BWTextFocus content={[{"text": "看，", "startFrame": 0, "durationFrames": 16}, {"text": "我一眼就看穿了真相，", "startFrame": 15, "durationFrames": 1}, {"text": "你们这些蠢货。", "startFrame": 0, "durationFrames": 870}]} totalDurationFrames={99} coreSentence={["“看，我一眼就看穿了真相，你们这些蠢货。”"]} coreSentenceAnchors={[{"coreSentenceAnchor": "一眼就看穿了真相"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/认知陷阱3/scene_3/scene_3.mp3")} />
        </AbsoluteFill>
    );
};
