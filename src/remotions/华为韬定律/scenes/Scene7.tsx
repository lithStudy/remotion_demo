import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile, Freeze } from "remotion";
import { BWCenterFocus, BWDosAndDonts, BWPanelGrid, BWTextFocus } from "../../../components";

// 召唤·真正自强
const SCENE_DURATION = 113 + 87 + 76 + 86 + 309 + 201;

export const calculateScene7Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene7: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={113}>
                <BWCenterFocus content={[{"text": "所以，", "startFrame": 0, "durationFrames": 18}, {"text": "华为韬定律最大的问题，", "startFrame": 17, "durationFrames": 50}, {"text": "不是它有没有工程价值。", "startFrame": 66, "durationFrames": 47}]} totalDurationFrames={113} imageSrc={staticFile("images/华为韬定律/scene_7_1.png")} enterEffect="fadeIn" anchors={[{"text": "最大的问题", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={113} durationInFrames={87}>
                <BWDosAndDonts content={[{"text": "而是它把工程探索，", "startFrame": 0, "durationFrames": 42}, {"text": "包装成学术权威。", "startFrame": 41, "durationFrames": 45}]} totalDurationFrames={87} left={{label: "❌ 学术权威", src: staticFile("images/华为韬定律/scene_7_2_left.png"), showFrom: 1 }} right={{label: "✅ 工程探索", src: staticFile("images/华为韬定律/scene_7_2_right.png"), showFrom: 0 }} anchors={[]} />
            </Sequence>
            <Sequence from={200} durationInFrames={76}>
                <BWDosAndDonts content={[{"text": "把局部改良，", "startFrame": 0, "durationFrames": 34}, {"text": "包装成规则改写。", "startFrame": 33, "durationFrames": 42}]} totalDurationFrames={76} left={{label: "❌ 规则改写", src: staticFile("images/华为韬定律/scene_7_3_left.png"), showFrom: 1 }} right={{label: "✅ 局部改良", src: staticFile("images/华为韬定律/scene_7_3_right.png"), showFrom: 0 }} anchors={[]} />
            </Sequence>
            <Sequence from={276} durationInFrames={86}>
                <BWDosAndDonts content={[{"text": "把艰难优化，", "startFrame": 0, "durationFrames": 33}, {"text": "包装成全面胜利。", "startFrame": 32, "durationFrames": 53}]} totalDurationFrames={86} left={{label: "❌ 全面胜利", src: staticFile("images/华为韬定律/scene_7_4_left.png"), showFrom: 1 }} right={{label: "✅ 艰难优化", src: staticFile("images/华为韬定律/scene_7_4_right.png"), showFrom: 0 }} anchors={[]} />
            </Sequence>
            <Sequence from={362} durationInFrames={309}>
                <BWPanelGrid content={[{"text": "这套话术，", "startFrame": 0, "durationFrames": 29}, {"text": "短期很爽。", "startFrame": 28, "durationFrames": 33}, {"text": "品牌赢了。", "startFrame": 60, "durationFrames": 30}, {"text": "流量赢了。", "startFrame": 90, "durationFrames": 29}, {"text": "股价也赢了。", "startFrame": 118, "durationFrames": 36}, {"text": "但中国科技，", "startFrame": 154, "durationFrames": 33}, {"text": "输了耐心。", "startFrame": 187, "durationFrames": 30}, {"text": "输了诚实。", "startFrame": 216, "durationFrames": 33}, {"text": "输了对物理规律的敬畏。", "startFrame": 249, "durationFrames": 59}]} totalDurationFrames={309} panels={[{ src: staticFile("images/华为韬定律/scene_7_5_img0.png"), showFrom: 2, enterEffect: "slideBottom" }, { src: staticFile("images/华为韬定律/scene_7_5_img1.png"), showFrom: 3, enterEffect: "slideBottom" }, { src: staticFile("images/华为韬定律/scene_7_5_img2.png"), showFrom: 4, enterEffect: "slideBottom" }, { src: staticFile("images/华为韬定律/scene_7_5_img3.png"), showFrom: 6, enterEffect: "slideBottom" }, { src: staticFile("images/华为韬定律/scene_7_5_img4.png"), showFrom: 7, enterEffect: "slideBottom" }, { src: staticFile("images/华为韬定律/scene_7_5_img5.png"), showFrom: 8, enterEffect: "zoomIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={671} durationInFrames={176}>
                <BWTextFocus content={[{"text": "真正的自强，", "startFrame": 0, "durationFrames": 30}, {"text": "不是重新定义开水，", "startFrame": 29, "durationFrames": 43}, {"text": "而是承认五十度的水还不够。", "startFrame": 72, "durationFrames": 54}, {"text": "然后继续烧。", "startFrame": 126, "durationFrames": 50}]} totalDurationFrames={176} coreSentence={[{"text": "真正的自强，不是重新定义“开水”", "showFrom": 0, "endFrom": 3}, {"text": "而是承认五十度的水还不够", "showFrom": 2, "endFrom": 3}, {"text": "然后继续烧", "showFrom": 3, "endFrom": 3}]} coreSentenceAnchors={[{"coreSentenceAnchor": "真正的自强", "color": "#EF4444"}, {"coreSentenceAnchor": "还不够", "color": "#EF4444"}, {"coreSentenceAnchor": "继续烧", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={847} durationInFrames={25}>
                <Freeze frame={175}>
                    <BWTextFocus content={[{"text": "真正的自强，", "startFrame": 0, "durationFrames": 30}, {"text": "不是重新定义开水，", "startFrame": 29, "durationFrames": 43}, {"text": "而是承认五十度的水还不够。", "startFrame": 72, "durationFrames": 54}, {"text": "然后继续烧。", "startFrame": 126, "durationFrames": 50}]} totalDurationFrames={176} coreSentence={[{"text": "真正的自强，不是重新定义“开水”", "showFrom": 0, "endFrom": 3}, {"text": "而是承认五十度的水还不够", "showFrom": 2, "endFrom": 3}, {"text": "然后继续烧", "showFrom": 3, "endFrom": 3}]} coreSentenceAnchors={[{"coreSentenceAnchor": "真正的自强", "color": "#EF4444"}, {"coreSentenceAnchor": "还不够", "color": "#EF4444"}, {"coreSentenceAnchor": "继续烧", "color": "#EF4444"}]} />
                </Freeze>
            </Sequence>
            <Audio src={staticFile("/audio/华为韬定律/scene_7/scene_7.mp3")} />
        </AbsoluteFill>
    );
};
