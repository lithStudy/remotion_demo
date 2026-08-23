import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift, BWConceptCard, BWQuoteCitation, BWTreeDiagram } from "../../../components";

// 剖析：经济误判
const SCENE_DURATION = 59 + 106 + 119 + 267 + 190;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={59}>
                <BWTreeDiagram content={[{"text": "再往下一层，", "startFrame": 0, "durationFrames": 27}, {"text": "是经济误判。", "startFrame": 26, "durationFrames": 33}]} totalDurationFrames={59} root={{ label: "伪爱国", showFrom: 0, children: [{ label: "道德错位", showFrom: 0 }, { label: "经济误判", showFrom: 1 }] }} />
            </Sequence>
            <Sequence from={59} durationInFrames={106}>
                <BWQuoteCitation content={[{"text": "他们常说\"中国人买外国货就是给外国送钱\"，", "startFrame": 0, "durationFrames": 106}]} totalDurationFrames={106} quoteDisplayText={"中国人买外国货就是给外国送钱"} quoteSource={"常见论调"} />
            </Sequence>
            <Sequence from={165} durationInFrames={119}>
                <BWCognitiveShift content={[{"text": "这句话听起来热血，", "startFrame": 0, "durationFrames": 43}, {"text": "其实是把现代经济说成了单向输血。", "startFrame": 42, "durationFrames": 76}]} totalDurationFrames={119} notText={"听起来热血"} butText={"单向输血"} butSrc={staticFile("images/爱国先爱同胞/scene_4_3.png")} notContentIndex={0} butContentIndex={1} />
            </Sequence>
            <Sequence from={284} durationInFrames={267}>
                <BWConceptCard content={[{"text": "真实世界里，", "startFrame": 0, "durationFrames": 33}, {"text": "消费是双向交换：", "startFrame": 32, "durationFrames": 51}, {"text": "你买到更合适的商品，", "startFrame": 82, "durationFrames": 48}, {"text": "国内也在仓储、", "startFrame": 130, "durationFrames": 42}, {"text": "物流、", "startFrame": 172, "durationFrames": 19}, {"text": "售后等环节创造就业和税收。", "startFrame": 190, "durationFrames": 76}]} totalDurationFrames={267} imageSrc={staticFile("images/爱国先爱同胞/scene_4_4.png")} conceptName={"双向交换"} />
            </Sequence>
            <Sequence from={551} durationInFrames={190}>
                <BWCenterFocus content={[{"text": "还有很多所谓\"外国货\"早已在中国研发、制造、雇人，", "startFrame": 0, "durationFrames": 120}, {"text": "他们也在为国人创造就业和税收。", "startFrame": 120, "durationFrames": 70}]} totalDurationFrames={190} imageSrc={staticFile("images/爱国先爱同胞/scene_4_5.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/爱国先爱同胞/scene_4/scene_4.mp3")} />
        </AbsoluteFill>
    );
};
