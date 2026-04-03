import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift, BWMultiImage } from "../../../components";

// 理性看待偏方与传统
const SCENE_DURATION = 113 + 126 + 91 + 90;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={113}>
                <BWCenterFocus content={[{"text": "所以，", "startFrame": 0, "durationFrames": 30}, {"text": "下次再有任何人用亲身经历向你兜售某种神效偏方时，", "startFrame": 30, "durationFrames": 53}, {"text": "请在心里谨记三个准则：", "startFrame": 83, "durationFrames": 30}]} totalDurationFrames={113} imageSrc={staticFile("一群人围在一起听别人讲述经验的场景")} enterEffect="fadeIn" anchors={[{"text": "亲身经历", "showFrom": 1, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}, {"text": "神效偏方", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "woosh"}, {"text": "三个准则", "showFrom": 2, "color": "#000000", "anim": "slideUp", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={113} durationInFrames={126}>
                <BWMultiImage content={[{"text": "1.相关只是线索，", "startFrame": 0, "durationFrames": 30}, {"text": "不是定论；", "startFrame": 30, "durationFrames": 30}, {"text": "2.检查第三变量和反向因果；", "startFrame": 60, "durationFrames": 31}, {"text": "3.真正的因果需要双盲实验证明。", "startFrame": 91, "durationFrames": 35}]} totalDurationFrames={126} groups={[{"textIndex": 0, "image": {"src": "放大镜简笔画，寻找线索"}, "anchor": {"text": "相关只是线索", "color": "#000000", "anim": "popIn", "audioEffect": "ping"}}, {"textIndex": 2, "image": {"src": "问号简笔画，检查变量"}, "anchor": {"text": "检查第三变量", "color": "#000000", "anim": "popIn", "audioEffect": "ping"}}, {"textIndex": 3, "image": {"src": "双盲实验流程图"}, "anchor": {"text": "双盲实验", "color": "#000000", "anim": "popIn", "audioEffect": "ping"}}]} anchors={[]} />
            </Sequence>
            <Sequence from={239} durationInFrames={91}>
                <BWCognitiveShift content={[{"text": "真正的尊重传统，", "startFrame": 0, "durationFrames": 30}, {"text": "绝不是盲从，", "startFrame": 30, "durationFrames": 30}, {"text": "而是用现代逻辑去祛魅和验证。", "startFrame": 60, "durationFrames": 31}]} totalDurationFrames={91} notText={"盲从"} butText={"逻辑祛魅和验证"} butSrc={staticFile("一个研究者在实验室里进行科学实验")} notContentIndex={1} butContentIndex={2} anchors={[]} />
            </Sequence>
            <Sequence from={330} durationInFrames={90}>
                <BWCognitiveShift content={[{"text": "你宝贵的健康和钱包，", "startFrame": 0, "durationFrames": 30}, {"text": "值得交付给严谨的证据，", "startFrame": 30, "durationFrames": 30}, {"text": "而不是一次偶然的巧合。", "startFrame": 60, "durationFrames": 30}]} totalDurationFrames={90} notText={"偶然的巧合"} butText={"严谨的证据"} butSrc={staticFile("实验室内科学家观察实验数据")} notContentIndex={2} butContentIndex={1} anchors={[]} />
            </Sequence>

        </AbsoluteFill>
    );
};
