import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCauseChain, BWConceptCard, BWQuoteCitation } from "../../../components";

// 反转·华为伪工业大模型
const SCENE_DURATION = 148 + 175 + 288;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={148}>
                <BWQuoteCitation content={[{"text": "这个时候花粉可能要高潮了，", "startFrame": 0, "durationFrames": 62}, {"text": "那华为那些号称“工业大模型”的一定很牛逼吧。", "startFrame": 61, "durationFrames": 87}]} totalDurationFrames={148} quoteSource={"花粉"} quoteDisplayText={"那华为那些号称「工业大模型」的一定很牛逼吧。"} showFrom={1} anchors={[]} />
            </Sequence>
            <Sequence from={148} durationInFrames={175}>
                <BWConceptCard content={[{"text": "但是我要告诉你，", "startFrame": 0, "durationFrames": 35}, {"text": "我之前说的那些名词，", "startFrame": 34, "durationFrames": 52}, {"text": "是正常的，", "startFrame": 86, "durationFrames": 30}, {"text": "诚实的，", "startFrame": 115, "durationFrames": 26}, {"text": "正直的人的约定。", "startFrame": 140, "durationFrames": 34}]} totalDurationFrames={175} imageSrc={staticFile("images/模型论/scene_4_2.png")} conceptName={"术语约定"} anchors={[]} />
            </Sequence>
            <Sequence from={323} durationInFrames={288}>
                <BWCauseChain content={[{"text": "如果有些不正常的，", "startFrame": 0, "durationFrames": 40}, {"text": "不诚实的，", "startFrame": 39, "durationFrames": 19}, {"text": "不正直的人，", "startFrame": 57, "durationFrames": 28}, {"text": "非要说自己的1+1=2的程序，", "startFrame": 85, "durationFrames": 67}, {"text": "是工业大模型，", "startFrame": 151, "durationFrames": 39}, {"text": "还不给你测试验证的机会，", "startFrame": 189, "durationFrames": 46}, {"text": "那谁也没有办法反驳他。", "startFrame": 235, "durationFrames": 53}]} totalDurationFrames={288} layout={"horizontal"} nodes={[{ label: "滑伪之人", imageSrc: staticFile("images/模型论/scene_4_3_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { label: "虚假宣称", imageSrc: staticFile("images/模型论/scene_4_3_img1.png"), showFrom: 3, enterEffect: "slideLeft" }, { label: "不给测试", imageSrc: staticFile("images/模型论/scene_4_3_img2.png"), showFrom: 5, enterEffect: "slideBottom" }, { label: "无从反驳", imageSrc: staticFile("images/模型论/scene_4_3_img3.png"), showFrom: 6, enterEffect: "zoomIn" }]} anchors={[{"text": "“宣称”工业大模型", "showFrom": 4, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/模型论/scene_4/scene_4.mp3")} />
        </AbsoluteFill>
    );
};
