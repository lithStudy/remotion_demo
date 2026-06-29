import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWBeatSequence, BWConceptCard, BWPanelGrid, BWSplitCompare, BWTextFocus } from "../../../components";

// 召唤·文明测试
const SCENE_DURATION = 157 + 260 + 79 + 130 + 205 + 54;

export const calculateScene5Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene5: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={157}>
                <BWConceptCard content={[{"text": "这就是“国王不能进”的真正含义。", "startFrame": 0, "durationFrames": 64}, {"text": "它不是一句浪漫的话。", "startFrame": 63, "durationFrames": 39}, {"text": "它是一句冷峻的制度判断。", "startFrame": 101, "durationFrames": 56}]} totalDurationFrames={157} imageSrc={staticFile("images/权利的边界/scene_5_1.png")} conceptName={"国王不能进"} anchors={[]} />
            </Sequence>
            <Sequence from={157} durationInFrames={260}>
                <BWSplitCompare content={[{"text": "一个社会，", "startFrame": 0, "durationFrames": 24}, {"text": "能不能保护普通人，", "startFrame": 23, "durationFrames": 40}, {"text": "不要看它怎样对待成功者。", "startFrame": 63, "durationFrames": 45}, {"text": "成功者本来就有人保护。", "startFrame": 108, "durationFrames": 56}, {"text": "不要看它怎样对待富人。", "startFrame": 163, "durationFrames": 42}, {"text": "富人有资源保护自己。", "startFrame": 205, "durationFrames": 55}]} totalDurationFrames={260} leftSrc={staticFile("images/权利的边界/scene_5_3_left.png")} rightSrc={staticFile("images/权利的边界/scene_5_3_right.png")} leftLabel={"成功者"} rightLabel={"富人"} leftShowFrom={2} rightShowFrom={4} anchors={[]} />
            </Sequence>
            <Sequence from={417} durationInFrames={79}>
                <BWTextFocus content={[{"text": "要看它怎样对待一个住在破房子里的人。", "startFrame": 0, "durationFrames": 79}]} totalDurationFrames={79} coreSentence={["要看它怎样对待一个住在破房子里的人。"]} coreSentenceAnchors={[]} />
            </Sequence>
            <Sequence from={496} durationInFrames={130}>
                <BWPanelGrid content={[{"text": "当一个人没有身份光环。", "startFrame": 0, "durationFrames": 47}, {"text": "没有舆论声量。", "startFrame": 46, "durationFrames": 39}, {"text": "没有讨价还价的筹码。", "startFrame": 85, "durationFrames": 44}]} totalDurationFrames={130} panels={[{ src: staticFile("images/权利的边界/scene_5_5_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { src: staticFile("images/权利的边界/scene_5_5_img1.png"), showFrom: 1, enterEffect: "fadeIn" }, { src: staticFile("images/权利的边界/scene_5_5_img2.png"), showFrom: 2, enterEffect: "fadeIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={626} durationInFrames={205}>
                <BWBeatSequence content={[{"text": "他还能不能关上门？", "startFrame": 0, "durationFrames": 50}, {"text": "他关上门以后，", "startFrame": 49, "durationFrames": 36}, {"text": "强者会不会停下？", "startFrame": 85, "durationFrames": 45}, {"text": "权力会不会承认，", "startFrame": 129, "durationFrames": 39}, {"text": "这里不是我的地方？", "startFrame": 167, "durationFrames": 38}]} totalDurationFrames={205} stages={[{ imageSrc: staticFile("images/权利的边界/scene_5_6_img0.png"), enterEffect: "breathe", tone: "calm", showFrom: 0 }, { imageSrc: staticFile("images/权利的边界/scene_5_6_img1.png"), enterEffect: "slideBottom", tone: "alert", showFrom: 2 }, { imageSrc: staticFile("images/权利的边界/scene_5_6_img2.png"), enterEffect: "slideBottom", tone: "alert", showFrom: 3 }]} anchors={[]} />
            </Sequence>
            <Sequence from={831} durationInFrames={54}>
                <BWTextFocus content={[{"text": "这才是文明的压力测试。", "startFrame": 0, "durationFrames": 54}]} totalDurationFrames={54} coreSentence={[{"text": "这才是文明的压力测试。", "showFrom": 0}]} coreSentenceAnchors={[{"coreSentenceAnchor": "压力测试", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/权利的边界/scene_5/scene_5.mp3")} />
        </AbsoluteFill>
    );
};
