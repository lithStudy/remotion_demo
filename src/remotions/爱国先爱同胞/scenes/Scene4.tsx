import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift, BWConceptCard, BWQuoteCitation, BWTreeDiagram } from "../../../components";

// 剖析：经济误判
const SCENE_DURATION = 66 + 116 + 149 + 259 + 196;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={66}>
                <BWTreeDiagram content={[{"text": "再往下一层，", "startFrame": 0, "durationFrames": 28}, {"text": "是经济误判。", "startFrame": 27, "durationFrames": 39}]} totalDurationFrames={66} root={{ label: "伪爱国", showFrom: 0, children: [{ label: "道德错位", showFrom: 0 }, { label: "经济误判", showFrom: 1 }] }} anchors={[]} />
            </Sequence>
            <Sequence from={66} durationInFrames={116}>
                <BWQuoteCitation content={[{"text": "他们常说“中国人买外国货就是给外国送钱”", "startFrame": 0, "durationFrames": 116}]} totalDurationFrames={116} quoteDisplayText={"中国人买外国货就是给外国送钱"} quoteSource={"常见论调"} anchors={[]} />
            </Sequence>
            <Sequence from={182} durationInFrames={149}>
                <BWCognitiveShift content={[{"text": "这句话听起来热血，", "startFrame": 0, "durationFrames": 53}, {"text": "其实是把现代经济说成了单向输血。", "startFrame": 52, "durationFrames": 96}]} totalDurationFrames={149} notText={"听起来热血"} butText={"单向输血"} butSrc={staticFile("images/爱国先爱同胞/scene_4_3.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Sequence from={331} durationInFrames={259}>
                <BWConceptCard content={[{"text": "真实世界里，", "startFrame": 0, "durationFrames": 32}, {"text": "消费是双向交换：", "startFrame": 31, "durationFrames": 45}, {"text": "你买到更合适的商品，", "startFrame": 76, "durationFrames": 48}, {"text": "国内也在仓储、", "startFrame": 124, "durationFrames": 46}, {"text": "物流、", "startFrame": 170, "durationFrames": 20}, {"text": "售后等环节创造就业和税收。", "startFrame": 189, "durationFrames": 69}]} totalDurationFrames={259} imageSrc={staticFile("images/爱国先爱同胞/scene_4_4.png")} conceptName={"双向交换"} anchors={[]} />
            </Sequence>
            <Sequence from={590} durationInFrames={196}>
                <BWCenterFocus content={[{"text": "还有很多所谓“外国货”早已在中国研发、制造、雇人，", "startFrame": 0, "durationFrames": 123}, {"text": "他们也在为国人创造就业和税收。", "startFrame": 122, "durationFrames": 74}]} totalDurationFrames={196} imageSrc={staticFile("images/爱国先爱同胞/scene_4_5.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/爱国先爱同胞/scene_4/scene_4.mp3")} />
        </AbsoluteFill>
    );
};
