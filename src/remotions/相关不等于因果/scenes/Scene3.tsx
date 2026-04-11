import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift, BWPanelGrid, BWTextFocus } from "../../../components";

// 理性看待偏方与传统
const SCENE_DURATION = 201 + 264 + 154 + 164;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={201}>
                <BWCenterFocus content={[{"text": "所以，", "startFrame": 0, "durationFrames": 24}, {"text": "下次再有任何人用亲身经历向你兜售某种神效偏方时，", "startFrame": 24, "durationFrames": 118}, {"text": "请在心里谨记三个准则：", "startFrame": 141, "durationFrames": 59}]} totalDurationFrames={201} imageSrc={staticFile("images/相关不等于因果/scene_3_1.png")} enterEffect="fadeIn" anchors={[{"text": "亲身经历", "showFrom": 1, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}, {"text": "神效偏方", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "woosh"}, {"text": "三个准则", "showFrom": 2, "color": "#000000", "anim": "slideUp", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={201} durationInFrames={264}>
                <BWPanelGrid content={[{"text": "1.相关只是线索，", "startFrame": 0, "durationFrames": 54}, {"text": "不是定论；", "startFrame": 53, "durationFrames": 26}, {"text": "2.检查第三变量和反向因果；", "startFrame": 78, "durationFrames": 90}, {"text": "3.真正的因果需要双盲实验证明。", "startFrame": 168, "durationFrames": 96}]} totalDurationFrames={264} panels={[{"src": "images/相关不等于因果/scene_3_2_img0.png", "showFrom": 0, "enterEffect": "breathe"}, {"src": "images/相关不等于因果/scene_3_2_img1.png", "showFrom": 2, "enterEffect": "breathe"}, {"src": "images/相关不等于因果/scene_3_2_img2.png", "showFrom": 3, "enterEffect": "breathe"}]} anchors={[{"text": "相关只是线索", "showFrom": 0, "color": "#000000", "anim": "popIn", "audioEffect": "ping"}, {"text": "检查第三变量", "showFrom": 2, "color": "#000000", "anim": "popIn", "audioEffect": "ping"}, {"text": "双盲实验", "showFrom": 3, "color": "#000000", "anim": "popIn", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={465} durationInFrames={154}>
                <BWCognitiveShift content={[{"text": "真正的尊重传统，", "startFrame": 0, "durationFrames": 43}, {"text": "绝不是盲从，", "startFrame": 42, "durationFrames": 31}, {"text": "而是用现代逻辑去祛魅和验证。", "startFrame": 73, "durationFrames": 81}]} totalDurationFrames={154} notText={"盲从"} butText={"逻辑祛魅和验证"} butSrc={staticFile("images/相关不等于因果/scene_3_3.png")} notContentIndex={1} butContentIndex={2} anchors={[]} />
            </Sequence>
            <Sequence from={619} durationInFrames={164}>
                <BWTextFocus content={[{"text": "你宝贵的健康和钱包，", "startFrame": 0, "durationFrames": 48}, {"text": "值得交付给严谨的证据，", "startFrame": 48, "durationFrames": 55}, {"text": "而不是一次偶然的巧合。", "startFrame": 102, "durationFrames": 62}]} totalDurationFrames={164} coreSentence={"你宝贵的健康和钱包，值得交付给严谨证据，而非偶然巧合"} coreSentenceAnchors={[{"coreSentenceAnchor": "严谨证据", "color": "#EF4444"}, {"coreSentenceAnchor": "偶然巧合", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/相关不等于因果/scene_3/scene_3.mp3")} />
        </AbsoluteFill>
    );
};
