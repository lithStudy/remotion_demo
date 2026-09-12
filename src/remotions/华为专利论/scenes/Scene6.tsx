import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWBeatSequence, BWCenterFocus, BWPanelGrid } from "../../../components";

// 反转·屠龙变恶龙
const SCENE_DURATION = 125 + 239 + 174 + 217;

export const calculateScene6Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene6: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={125}>
                <BWCenterFocus content={[{"text": "最后说最让人心寒的反转。", "startFrame": 0, "durationFrames": 59}, {"text": "2013 年，华为还是受害者。", "startFrame": 58, "durationFrames": 66}]} totalDurationFrames={125} imageSrc={staticFile("images/华为专利论/scene_6_1.png")} enterEffect="fadeIn" anchors={[{"text": "受害者", "showFrom": 1, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={125} durationInFrames={239}>
                <BWBeatSequence content={[{"text": "美国公司 IDC，", "startFrame": 0, "durationFrames": 39}, {"text": "拿标准专利漫天要价，", "startFrame": 38, "durationFrames": 52}, {"text": "还强行搭售。", "startFrame": 89, "durationFrames": 34}, {"text": "华为告它反垄断，", "startFrame": 122, "durationFrames": 39}, {"text": "告赢了。", "startFrame": 161, "durationFrames": 30}, {"text": "那时它是屠龙少年。", "startFrame": 190, "durationFrames": 48}]} totalDurationFrames={239} stages={[{ imageSrc: staticFile("images/华为专利论/scene_6_2_img0.png"), enterEffect: "breathe", tone: "alert", showFrom: 0 }, { imageSrc: staticFile("images/华为专利论/scene_6_2_img1.png"), enterEffect: "slideBottom", tone: "calm", showFrom: 3 }, { imageSrc: staticFile("images/华为专利论/scene_6_2_img2.png"), enterEffect: "zoomIn", tone: "alert", showFrom: 5 }]} anchors={[]} />
            </Sequence>
            <Sequence from={364} durationInFrames={174}>
                <BWCenterFocus content={[{"text": "今天呢？", "startFrame": 0, "durationFrames": 23}, {"text": "它手里攥着十六万件专利。", "startFrame": 22, "durationFrames": 64}, {"text": "也开始用专利池，", "startFrame": 85, "durationFrames": 42}, {"text": "向产业链收过路费。", "startFrame": 127, "durationFrames": 47}]} totalDurationFrames={174} imageSrc={staticFile("images/华为专利论/scene_6_3.png")} enterEffect="fadeIn" anchors={[{"text": "十六万件专利", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": null}, {"text": "专利池", "showFrom": 2, "color": "#EF4444", "anim": "spring", "audioEffect": null}, {"text": "过路费", "showFrom": 3, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={538} durationInFrames={217}>
                <BWPanelGrid content={[{"text": "芯片厂要谈。", "startFrame": 0, "durationFrames": 39}, {"text": "路由器厂要谈。", "startFrame": 38, "durationFrames": 40}, {"text": "整机厂也要谈。", "startFrame": 77, "durationFrames": 44}, {"text": "它曾经恨过的那套玩法，", "startFrame": 121, "durationFrames": 52}, {"text": "现在用得比谁都熟。", "startFrame": 172, "durationFrames": 44}]} totalDurationFrames={217} panels={[{ src: staticFile("images/华为专利论/scene_6_4_img0.png"), showFrom: 0, enterEffect: "zoomIn" }, { src: staticFile("images/华为专利论/scene_6_4_img1.png"), showFrom: 1, enterEffect: "fadeIn" }, { src: staticFile("images/华为专利论/scene_6_4_img2.png"), showFrom: 2, enterEffect: "slideBottom" }]} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/华为专利论/scene_6/scene_6.mp3")} />
        </AbsoluteFill>
    );
};
