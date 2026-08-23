import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWBeatSequence, BWConceptCard, BWPanelGrid, BWSplitCompare, BWTextFocus } from "../../../components";

// 召唤·文明测试
const SCENE_DURATION = 165 + 279 + 73 + 135 + 181 + 52;

export const calculateScene5Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene5: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={165}>
                <BWConceptCard content={[{"text": "这就是“国王不能进”的真正含义。", "startFrame": 0, "durationFrames": 68}, {"text": "它不是一句浪漫的话。", "startFrame": 67, "durationFrames": 39}, {"text": "它是一句冷峻的制度判断。", "startFrame": 106, "durationFrames": 58}]} totalDurationFrames={165} imageSrc={staticFile("images/权利的边界/scene_5_1.png")} conceptName={"国王不能进"} anchors={[]} />
            </Sequence>
            <Sequence from={165} durationInFrames={279}>
                <BWSplitCompare content={[{"text": "一个社会，", "startFrame": 0, "durationFrames": 26}, {"text": "能不能保护普通人，", "startFrame": 25, "durationFrames": 43}, {"text": "不要看它怎样对待成功者。", "startFrame": 67, "durationFrames": 54}, {"text": "成功者本来就有人保护。", "startFrame": 121, "durationFrames": 52}, {"text": "不要看它怎样对待富人。", "startFrame": 172, "durationFrames": 52}, {"text": "富人有资源保护自己。", "startFrame": 224, "durationFrames": 55}]} totalDurationFrames={279} leftSrc={staticFile("images/权利的边界/scene_5_3_left.png")} rightSrc={staticFile("images/权利的边界/scene_5_3_right.png")} leftLabel={"成功者"} rightLabel={"富人"} leftShowFrom={2} rightShowFrom={4} anchors={[]} />
            </Sequence>
            <Sequence from={444} durationInFrames={73}>
                <BWTextFocus content={[{"text": "要看它怎样对待一个住在破房子里的人。", "startFrame": 0, "durationFrames": 73}]} totalDurationFrames={73} coreSentence={["要看它怎样对待一个住在破房子里的人。"]} coreSentenceAnchors={[]} />
            </Sequence>
            <Sequence from={517} durationInFrames={135}>
                <BWPanelGrid content={[{"text": "当一个人没有身份光环。", "startFrame": 0, "durationFrames": 48}, {"text": "没有舆论声量。", "startFrame": 48, "durationFrames": 38}, {"text": "没有讨价还价的筹码。", "startFrame": 85, "durationFrames": 50}]} totalDurationFrames={135} panels={[{ src: staticFile("images/权利的边界/scene_5_5_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { src: staticFile("images/权利的边界/scene_5_5_img1.png"), showFrom: 1, enterEffect: "fadeIn" }, { src: staticFile("images/权利的边界/scene_5_5_img2.png"), showFrom: 2, enterEffect: "fadeIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={652} durationInFrames={181}>
                <BWBeatSequence content={[{"text": "他还能不能关上门？", "startFrame": 0, "durationFrames": 32}, {"text": "他关上门以后，", "startFrame": 31, "durationFrames": 43}, {"text": "强者会不会停下？", "startFrame": 74, "durationFrames": 38}, {"text": "权力会不会承认，", "startFrame": 111, "durationFrames": 33}, {"text": "这里不是我的地方？", "startFrame": 144, "durationFrames": 36}]} totalDurationFrames={181} stages={[{ imageSrc: staticFile("images/权利的边界/scene_5_6_img0.png"), enterEffect: "breathe", tone: "calm", showFrom: 0 }, { imageSrc: staticFile("images/权利的边界/scene_5_6_img1.png"), enterEffect: "slideBottom", tone: "alert", showFrom: 2 }, { imageSrc: staticFile("images/权利的边界/scene_5_6_img2.png"), enterEffect: "slideBottom", tone: "alert", showFrom: 3 }]} anchors={[]} />
            </Sequence>
            <Sequence from={833} durationInFrames={52}>
                <BWTextFocus content={[{"text": "这才是文明的压力测试。", "startFrame": 0, "durationFrames": 52}]} totalDurationFrames={52} coreSentence={[{"text": "这才是文明的压力测试。", "showFrom": 0}]} coreSentenceAnchors={[{"coreSentenceAnchor": "压力测试", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/权利的边界/scene_5/scene_5.mp3")} />
        </AbsoluteFill>
    );
};
