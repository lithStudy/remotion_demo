import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWBeatSequence, BWCauseChain, BWCenterFocus, BWConceptCard, BWDosAndDonts, BWTextFocus } from "../../../components";

// 比喻·方向盘与权责对等
const SCENE_DURATION = 288 + 112 + 103 + 177 + 89 + 101 + 215;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={288}>
                <BWBeatSequence content={[{"text": "我们必须强调权责对等。", "startFrame": 0, "durationFrames": 63}, {"text": "因为决策者握着方向盘。", "startFrame": 62, "durationFrames": 52}, {"text": "底层执行者。", "startFrame": 114, "durationFrames": 42}, {"text": "只有做事的权利。", "startFrame": 155, "durationFrames": 44}, {"text": "方向是你定的。", "startFrame": 199, "durationFrames": 38}, {"text": "资源是你分配的。", "startFrame": 236, "durationFrames": 51}]} totalDurationFrames={288} stages={[{ imageSrc: staticFile("images/权利与责任/scene_3_1_img0.png"), enterEffect: "breathe", tone: "calm", showFrom: 0 }, { imageSrc: staticFile("images/权利与责任/scene_3_1_img1.png"), enterEffect: "slideBottom", tone: "alert", showFrom: 2 }, { imageSrc: staticFile("images/权利与责任/scene_3_1_img2.png"), enterEffect: "slideBottom", tone: "alert", showFrom: 4 }]} anchors={[]} />
            </Sequence>
            <Sequence from={288} durationInFrames={112}>
                <BWCauseChain content={[{"text": "大巴冲下悬崖。", "startFrame": 0, "durationFrames": 41}, {"text": "只有握方向盘的人是最该被问责的。", "startFrame": 40, "durationFrames": 71}]} totalDurationFrames={112} layout={"horizontal"} nodes={[{ label: "坠崖事故", imageSrc: staticFile("images/权利与责任/scene_3_2_img0.png"), showFrom: 0 }, { label: "司机问责", imageSrc: staticFile("images/权利与责任/scene_3_2_img1.png"), showFrom: 1 }]} anchors={[]} />
            </Sequence>
            <Sequence from={400} durationInFrames={103}>
                <BWConceptCard content={[{"text": "人类文明进步。", "startFrame": 0, "durationFrames": 39}, {"text": "就是把权力与责任绑定的历史。", "startFrame": 38, "durationFrames": 65}]} totalDurationFrames={103} imageSrc={staticFile("images/权利与责任/scene_3_3.png")} conceptName={"权责绑定"} anchors={[]} />
            </Sequence>
            <Sequence from={503} durationInFrames={177}>
                <BWDosAndDonts content={[{"text": "过去。", "startFrame": 0, "durationFrames": 20}, {"text": "皇帝出了事可以找大臣顶罪。", "startFrame": 19, "durationFrames": 62}, {"text": "现在。", "startFrame": 80, "durationFrames": 24}, {"text": "现代法治把权力关进制度的笼子。", "startFrame": 104, "durationFrames": 72}]} totalDurationFrames={177} left={{label: "❌ 过去", src: staticFile("images/权利与责任/scene_3_4_left.png"), showFrom: 0 }} right={{label: "✅ 现在", src: staticFile("images/权利与责任/scene_3_4_right.png"), showFrom: 2 }} />
            </Sequence>
            <Sequence from={680} durationInFrames={89}>
                <BWConceptCard content={[{"text": "这个笼子的铁柱。", "startFrame": 0, "durationFrames": 38}, {"text": "叫权责法定。", "startFrame": 37, "durationFrames": 52}]} totalDurationFrames={89} imageSrc={staticFile("images/权利与责任/scene_3_5.png")} conceptName={"权责法定"} anchors={[]} />
            </Sequence>
            <Sequence from={769} durationInFrames={101}>
                <BWCenterFocus content={[{"text": "重大决策终身责任追究。", "startFrame": 0, "durationFrames": 68}, {"text": "就是在宣告。", "startFrame": 67, "durationFrames": 33}]} totalDurationFrames={101} imageSrc={staticFile("images/权利与责任/scene_3_6.png")} enterEffect="fadeIn" anchors={[{"text": "重大决策终身责任追究", "showFrom": 0, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={870} durationInFrames={215}>
                <BWTextFocus content={[{"text": "你调动了多大的资源。", "startFrame": 0, "durationFrames": 52}, {"text": "就绑上多重的炸药包。", "startFrame": 51, "durationFrames": 55}, {"text": "享受了权力的光环。", "startFrame": 105, "durationFrames": 52}, {"text": "就必须扛住决策的重量。", "startFrame": 156, "durationFrames": 59}]} totalDurationFrames={215} coreSentence={[{"text": "你调动了多大资源。", "showFrom": 0, "endFrom": 0}, {"text": "就绑上多重炸药包。", "showFrom": 1, "endFrom": 1}, {"text": "享受了权力的光环。", "showFrom": 2, "endFrom": 2}, {"text": "就必须扛住决策的重量。", "showFrom": 3, "endFrom": 3}]} coreSentenceAnchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/权利与责任/scene_3/scene_3.mp3")} />
        </AbsoluteFill>
    );
};
