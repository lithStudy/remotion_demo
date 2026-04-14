import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCaseBreakdown, BWCenterFocus, BWDosAndDonts, BWPanelGrid, BWQuoteCitation } from "../../../components";

// 代入
const SCENE_DURATION = 138 + 197 + 95 + 147 + 96;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={138}>
                <BWPanelGrid content={[{"text": "在职场、", "startFrame": 0, "durationFrames": 26}, {"text": "在酒桌、", "startFrame": 25, "durationFrames": 27}, {"text": "在亲戚聚会上。", "startFrame": 51, "durationFrames": 40}, {"text": "你一定遇到过这种人。", "startFrame": 90, "durationFrames": 47}]} totalDurationFrames={138} panels={[{ src: staticFile("images/认知偏见_达克效应/scene_4_1_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { src: staticFile("images/认知偏见_达克效应/scene_4_1_img1.png"), showFrom: 1, enterEffect: "fadeIn" }, { src: staticFile("images/认知偏见_达克效应/scene_4_1_img2.png"), showFrom: 2, enterEffect: "fadeIn" }]} />
            </Sequence>
            <Sequence from={138} durationInFrames={197}>
                <BWCaseBreakdown content={[{"text": "证据都甩脸上了，", "startFrame": 0, "durationFrames": 44}, {"text": "他还能面不改色地胡说。", "startFrame": 43, "durationFrames": 56}, {"text": "你以为他在耍流氓，", "startFrame": 99, "durationFrames": 42}, {"text": "其实他真觉得自己是对的。", "startFrame": 140, "durationFrames": 56}]} totalDurationFrames={197} title={"胡搅蛮缠"} imageSrc={staticFile("images/认知偏见_达克效应/scene_4_2.png")} phases={[{"phaseLabel": "无视证据", "showFrom": 0}, {"phaseLabel": "颠倒黑白", "showFrom": 1}, {"phaseLabel": "迷惑行为", "showFrom": 2}, {"phaseLabel": "自我肯定", "showFrom": 3}]} anchors={[]} />
            </Sequence>
            <Sequence from={335} durationInFrames={95}>
                <BWCenterFocus content={[{"text": "这时候你最容易犯的错，", "startFrame": 0, "durationFrames": 48}, {"text": "就是试图去纠正他。", "startFrame": 48, "durationFrames": 47}]} totalDurationFrames={95} imageSrc={staticFile("images/认知偏见_达克效应/scene_4_3.png")} enterEffect="fadeIn" anchors={[{"text": "试图去纠正他", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={430} durationInFrames={147}>
                <BWQuoteCitation content={[{"text": "相信我，", "startFrame": 0, "durationFrames": 28}, {"text": "当你试图用逻辑去打败一个没有逻辑的人时，", "startFrame": 27, "durationFrames": 92}, {"text": "你已经输了。", "startFrame": 118, "durationFrames": 28}]} totalDurationFrames={147} quoteSource={"社交生存法则"} anchors={[]} />
            </Sequence>
            <Sequence from={577} durationInFrames={96}>
                <BWDosAndDonts content={[{"text": "因为你带他寻找真理，", "startFrame": 0, "durationFrames": 47}, {"text": "他当你挑战他的地位。", "startFrame": 46, "durationFrames": 49}]} totalDurationFrames={96} left={{label: "❌ 寻找真理", src: staticFile("images/认知偏见_达克效应/scene_4_5_left.png"), showFrom: 0 }} right={{label: "✅ 挑战地位", src: staticFile("images/认知偏见_达克效应/scene_4_5_right.png"), showFrom: 1 }} />
            </Sequence>
            <Audio src={staticFile("/audio/认知偏见_达克效应/scene_4/scene_4.mp3")} />
        </AbsoluteFill>
    );
};
