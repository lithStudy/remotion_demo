import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWDosAndDonts, BWPanelGrid, BWTextFocus } from "../../../components";

// 召唤·真正自强
const SCENE_DURATION = 125 + 95 + 85 + 81 + 280 + 166;

export const calculateScene7Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene7: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={125}>
                <BWCenterFocus content={[{"text": "所以，", "startFrame": 0, "durationFrames": 20}, {"text": "华为韬定律最大的问题，", "startFrame": 19, "durationFrames": 58}, {"text": "不是它有没有工程价值。", "startFrame": 77, "durationFrames": 47}]} totalDurationFrames={125} imageSrc={staticFile("images/华为韬定律/scene_7_1.png")} enterEffect="fadeIn" anchors={[{"text": "最大的问题", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={125} durationInFrames={95}>
                <BWDosAndDonts content={[{"text": "而是它把工程探索，", "startFrame": 0, "durationFrames": 45}, {"text": "包装成学术权威。", "startFrame": 44, "durationFrames": 51}]} totalDurationFrames={95} left={{label: "❌ 学术权威", src: staticFile("images/华为韬定律/scene_7_2_left.png"), showFrom: 1 }} right={{label: "✅ 工程探索", src: staticFile("images/华为韬定律/scene_7_2_right.png"), showFrom: 0 }} anchors={[]} />
            </Sequence>
            <Sequence from={220} durationInFrames={85}>
                <BWDosAndDonts content={[{"text": "把局部改良，", "startFrame": 0, "durationFrames": 34}, {"text": "包装成规则改写。", "startFrame": 33, "durationFrames": 51}]} totalDurationFrames={85} left={{label: "❌ 规则改写", src: staticFile("images/华为韬定律/scene_7_3_left.png"), showFrom: 1 }} right={{label: "✅ 局部改良", src: staticFile("images/华为韬定律/scene_7_3_right.png"), showFrom: 0 }} anchors={[]} />
            </Sequence>
            <Sequence from={305} durationInFrames={81}>
                <BWDosAndDonts content={[{"text": "把艰难优化，", "startFrame": 0, "durationFrames": 30}, {"text": "包装成全面胜利。", "startFrame": 29, "durationFrames": 52}]} totalDurationFrames={81} left={{label: "❌ 全面胜利", src: staticFile("images/华为韬定律/scene_7_4_left.png"), showFrom: 1 }} right={{label: "✅ 艰难优化", src: staticFile("images/华为韬定律/scene_7_4_right.png"), showFrom: 0 }} anchors={[]} />
            </Sequence>
            <Sequence from={386} durationInFrames={280}>
                <BWPanelGrid content={[{"text": "这套话术，", "startFrame": 0, "durationFrames": 27}, {"text": "短期很爽。", "startFrame": 26, "durationFrames": 32}, {"text": "品牌赢了。", "startFrame": 57, "durationFrames": 26}, {"text": "流量赢了。", "startFrame": 82, "durationFrames": 26}, {"text": "股价也赢了。", "startFrame": 107, "durationFrames": 31}, {"text": "但中国科技，", "startFrame": 138, "durationFrames": 32}, {"text": "输了耐心。", "startFrame": 169, "durationFrames": 29}, {"text": "输了诚实。", "startFrame": 198, "durationFrames": 28}, {"text": "输了对物理规律的敬畏。", "startFrame": 225, "durationFrames": 54}]} totalDurationFrames={280} panels={[{ src: staticFile("images/华为韬定律/scene_7_5_img0.png"), showFrom: 2, enterEffect: "slideBottom" }, { src: staticFile("images/华为韬定律/scene_7_5_img1.png"), showFrom: 3, enterEffect: "slideBottom" }, { src: staticFile("images/华为韬定律/scene_7_5_img2.png"), showFrom: 4, enterEffect: "slideBottom" }, { src: staticFile("images/华为韬定律/scene_7_5_img3.png"), showFrom: 6, enterEffect: "slideBottom" }, { src: staticFile("images/华为韬定律/scene_7_5_img4.png"), showFrom: 7, enterEffect: "slideBottom" }, { src: staticFile("images/华为韬定律/scene_7_5_img5.png"), showFrom: 8, enterEffect: "zoomIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={666} durationInFrames={166}>
                <BWTextFocus content={[{"text": "真正的自强，", "startFrame": 0, "durationFrames": 32}, {"text": "不是重新定义开水，", "startFrame": 31, "durationFrames": 40}, {"text": "而是承认五十度的水还不够。", "startFrame": 70, "durationFrames": 56}, {"text": "然后继续烧。", "startFrame": 126, "durationFrames": 40}]} totalDurationFrames={166} coreSentence={[{"text": "真正的自强，不是重新定义“开水”", "showFrom": 0, "endFrom": 3}, {"text": "而是承认五十度的水还不够", "showFrom": 2, "endFrom": 3}, {"text": "然后继续烧", "showFrom": 3, "endFrom": 3}]} coreSentenceAnchors={[{"coreSentenceAnchor": "真正的自强", "color": "#EF4444"}, {"coreSentenceAnchor": "还不够", "color": "#EF4444"}, {"coreSentenceAnchor": "继续烧", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/华为韬定律/scene_7/scene_7.mp3")} />
        </AbsoluteFill>
    );
};
