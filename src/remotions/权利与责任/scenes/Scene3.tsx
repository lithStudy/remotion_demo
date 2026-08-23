import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWBeatSequence, BWCauseChain, BWCenterFocus, BWConceptCard, BWDosAndDonts, BWTextFocus } from "../../../components";

// 比喻·方向盘与权责对等
const SCENE_DURATION = 295 + 127 + 108 + 192 + 80 + 96 + 206;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={295}>
                <BWBeatSequence content={[{"text": "我们必须强调权责对等。", "startFrame": 0, "durationFrames": 62}, {"text": "因为决策者握着方向盘。", "startFrame": 61, "durationFrames": 61}, {"text": "底层执行者。", "startFrame": 121, "durationFrames": 45}, {"text": "只有做事的权利。", "startFrame": 166, "durationFrames": 45}, {"text": "方向是你定的。", "startFrame": 211, "durationFrames": 39}, {"text": "资源是你分配的。", "startFrame": 249, "durationFrames": 45}]} totalDurationFrames={295} stages={[{ imageSrc: staticFile("images/权利与责任/scene_3_1_img0.png"), enterEffect: "breathe", tone: "calm", showFrom: 0 }, { imageSrc: staticFile("images/权利与责任/scene_3_1_img1.png"), enterEffect: "slideBottom", tone: "alert", showFrom: 2 }, { imageSrc: staticFile("images/权利与责任/scene_3_1_img2.png"), enterEffect: "slideBottom", tone: "alert", showFrom: 4 }]} anchors={[]} />
            </Sequence>
            <Sequence from={295} durationInFrames={127}>
                <BWCauseChain content={[{"text": "大巴冲下悬崖。", "startFrame": 0, "durationFrames": 50}, {"text": "只有握方向盘的人是最该被问责的。", "startFrame": 49, "durationFrames": 78}]} totalDurationFrames={127} layout={"horizontal"} nodes={[{ label: "坠崖事故", imageSrc: staticFile("images/权利与责任/scene_3_2_img0.png"), showFrom: 0 }, { label: "司机问责", imageSrc: staticFile("images/权利与责任/scene_3_2_img1.png"), showFrom: 1 }]} anchors={[]} />
            </Sequence>
            <Sequence from={422} durationInFrames={108}>
                <BWConceptCard content={[{"text": "人类文明进步。", "startFrame": 0, "durationFrames": 42}, {"text": "就是把权力与责任绑定的历史。", "startFrame": 41, "durationFrames": 67}]} totalDurationFrames={108} imageSrc={staticFile("images/权利与责任/scene_3_3.png")} conceptName={"权责绑定"} anchors={[]} />
            </Sequence>
            <Sequence from={530} durationInFrames={192}>
                <BWDosAndDonts content={[{"text": "过去。", "startFrame": 0, "durationFrames": 26}, {"text": "皇帝出了事可以找大臣顶罪。", "startFrame": 25, "durationFrames": 78}, {"text": "现在。", "startFrame": 102, "durationFrames": 25}, {"text": "现代法治把权力关进制度的笼子。", "startFrame": 126, "durationFrames": 66}]} totalDurationFrames={192} left={{label: "❌ 过去", src: staticFile("images/权利与责任/scene_3_4_left.png"), showFrom: 0 }} right={{label: "✅ 现在", src: staticFile("images/权利与责任/scene_3_4_right.png"), showFrom: 2 }} />
            </Sequence>
            <Sequence from={722} durationInFrames={80}>
                <BWConceptCard content={[{"text": "这个笼子的铁柱。", "startFrame": 0, "durationFrames": 38}, {"text": "叫权责法定。", "startFrame": 37, "durationFrames": 43}]} totalDurationFrames={80} imageSrc={staticFile("images/权利与责任/scene_3_5.png")} conceptName={"权责法定"} anchors={[]} />
            </Sequence>
            <Sequence from={802} durationInFrames={96}>
                <BWCenterFocus content={[{"text": "重大决策终身责任追究。", "startFrame": 0, "durationFrames": 67}, {"text": "就是在宣告。", "startFrame": 66, "durationFrames": 30}]} totalDurationFrames={96} imageSrc={staticFile("images/权利与责任/scene_3_6.png")} enterEffect="fadeIn" anchors={[{"text": "重大决策终身责任追究", "showFrom": 0, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={898} durationInFrames={206}>
                <BWTextFocus content={[{"text": "你调动了多大的资源。", "startFrame": 0, "durationFrames": 51}, {"text": "就绑上多重的炸药包。", "startFrame": 50, "durationFrames": 49}, {"text": "享受了权力的光环。", "startFrame": 98, "durationFrames": 48}, {"text": "就必须扛住决策的重量。", "startFrame": 146, "durationFrames": 60}]} totalDurationFrames={206} coreSentence={[{"text": "你调动了多大资源。", "showFrom": 0, "endFrom": 0}, {"text": "就绑上多重炸药包。", "showFrom": 1, "endFrom": 1}, {"text": "享受了权力的光环。", "showFrom": 2, "endFrom": 2}, {"text": "就必须扛住决策的重量。", "showFrom": 3, "endFrom": 3}]} coreSentenceAnchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/权利与责任/scene_3/scene_3.mp3")} />
        </AbsoluteFill>
    );
};
