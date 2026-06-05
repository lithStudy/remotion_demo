import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWBeatSequence, BWCenterFocus, BWPanelGrid } from "../../../components";

// 反转·屠龙变恶龙
const SCENE_DURATION = 138 + 268 + 170 + 202;

export const calculateScene6Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene6: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={138}>
                <BWCenterFocus content={[{"text": "最后说最让人心寒的反转。", "startFrame": 0, "durationFrames": 68}, {"text": "2013 年，华为还是受害者。", "startFrame": 67, "durationFrames": 70}]} totalDurationFrames={138} imageSrc={staticFile("images/华为专利论/scene_6_1.png")} enterEffect="fadeIn" anchors={[{"text": "受害者", "showFrom": 1, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={138} durationInFrames={268}>
                <BWBeatSequence content={[{"text": "美国公司 IDC，", "startFrame": 0, "durationFrames": 41}, {"text": "拿标准专利漫天要价，", "startFrame": 40, "durationFrames": 59}, {"text": "还强行搭售。", "startFrame": 99, "durationFrames": 41}, {"text": "华为告它反垄断，", "startFrame": 139, "durationFrames": 41}, {"text": "告赢了。", "startFrame": 179, "durationFrames": 26}, {"text": "那时它是屠龙少年。", "startFrame": 205, "durationFrames": 63}]} totalDurationFrames={268} stages={[{ imageSrc: staticFile("images/华为专利论/scene_6_2_img0.png"), enterEffect: "breathe", tone: "alert", showFrom: 0 }, { imageSrc: staticFile("images/华为专利论/scene_6_2_img1.png"), enterEffect: "slideBottom", tone: "calm", showFrom: 3 }, { imageSrc: staticFile("images/华为专利论/scene_6_2_img2.png"), enterEffect: "zoomIn", tone: "alert", showFrom: 5 }]} anchors={[]} />
            </Sequence>
            <Sequence from={406} durationInFrames={170}>
                <BWCenterFocus content={[{"text": "今天呢？", "startFrame": 0, "durationFrames": 22}, {"text": "它手里攥着十六万件专利。", "startFrame": 21, "durationFrames": 61}, {"text": "也开始用专利池，", "startFrame": 81, "durationFrames": 39}, {"text": "向产业链收过路费。", "startFrame": 120, "durationFrames": 50}]} totalDurationFrames={170} imageSrc={staticFile("images/华为专利论/scene_6_3.png")} enterEffect="fadeIn" anchors={[{"text": "十六万件专利", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": null}, {"text": "专利池", "showFrom": 2, "color": "#EF4444", "anim": "spring", "audioEffect": null}, {"text": "过路费", "showFrom": 3, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={576} durationInFrames={202}>
                <BWPanelGrid content={[{"text": "芯片厂要谈。", "startFrame": 0, "durationFrames": 36}, {"text": "路由器厂要谈。", "startFrame": 36, "durationFrames": 35}, {"text": "整机厂也要谈。", "startFrame": 70, "durationFrames": 36}, {"text": "它曾经恨过的那套玩法，", "startFrame": 105, "durationFrames": 51}, {"text": "现在用得比谁都熟。", "startFrame": 156, "durationFrames": 45}]} totalDurationFrames={202} panels={[{ src: staticFile("images/华为专利论/scene_6_4_img0.png"), showFrom: 0, enterEffect: "zoomIn" }, { src: staticFile("images/华为专利论/scene_6_4_img1.png"), showFrom: 1, enterEffect: "fadeIn" }, { src: staticFile("images/华为专利论/scene_6_4_img2.png"), showFrom: 2, enterEffect: "slideBottom" }]} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/华为专利论/scene_6/scene_6.mp3")} />
        </AbsoluteFill>
    );
};
