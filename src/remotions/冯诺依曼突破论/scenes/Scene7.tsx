import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile, Freeze } from "remotion";
import { BWCaseBreakdown, BWCenterFocus, BWPanelGrid, BWPeerInduct, BWTextFocus } from "../../../components";

// 贡献与成绩单
const SCENE_DURATION = 221 + 267 + 414 + 167 + 116 + 144;

export const calculateScene7Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene7: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={221}>
                <BWCenterFocus content={[{"text": "最后，", "startFrame": 0, "durationFrames": 16}, {"text": "客观的说一下。", "startFrame": 15, "durationFrames": 41}, {"text": "Peerium没有颠覆冯·诺依曼架构。", "startFrame": 55, "durationFrames": 61}, {"text": "它有没有贡献？", "startFrame": 116, "durationFrames": 33}, {"text": "有的，", "startFrame": 149, "durationFrames": 20}, {"text": "兄弟。", "startFrame": 168, "durationFrames": 20}, {"text": "理论上有的。", "startFrame": 188, "durationFrames": 32}]} totalDurationFrames={221} imageSrc={staticFile("images/冯诺依曼突破论/scene_7_1.png")} enterEffect="fadeIn" anchors={[{"text": "冯·诺依曼架构", "showFrom": 2, "color": "#000000", "anim": "highlight", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={221} durationInFrames={267}>
                <BWPanelGrid content={[{"text": "它的贡献。", "startFrame": 0, "durationFrames": 27}, {"text": "是挑战超大集群的通信瓶颈。", "startFrame": 26, "durationFrames": 90}, {"text": "是统一异构设备的互联。", "startFrame": 116, "durationFrames": 65}, {"text": "是降低百万处理器的协作成本。", "startFrame": 180, "durationFrames": 87}]} totalDurationFrames={267} panels={[{ src: staticFile("images/冯诺依曼突破论/scene_7_2_img0.png"), showFrom: 1, enterEffect: "slideBottom" }, { src: staticFile("images/冯诺依曼突破论/scene_7_2_img1.png"), showFrom: 2, enterEffect: "slideLeft" }, { src: staticFile("images/冯诺依曼突破论/scene_7_2_img2.png"), showFrom: 3, enterEffect: "zoomIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={488} durationInFrames={414}>
                <BWCaseBreakdown content={[{"text": "至于这些贡献到底是嘴上说说还是工程实现了呢？", "startFrame": 0, "durationFrames": 111}, {"text": "还要看真实部署。", "startFrame": 110, "durationFrames": 45}, {"text": "看第三方测试。", "startFrame": 155, "durationFrames": 43}, {"text": "看功耗和软件生态。", "startFrame": 198, "durationFrames": 51}, {"text": "毕竟，华为“且听龙吟”的次数已经太多了。", "startFrame": 249, "durationFrames": 105}, {"text": "实在不应该光听他们怎么吹。", "startFrame": 353, "durationFrames": 60}]} totalDurationFrames={414} title={"贡献真伪三验"} imageSrc={staticFile("images/冯诺依曼突破论/scene_7_3.png")} phases={[{"phaseLabel": "真实部署", "showFrom": 1}, {"phaseLabel": "外部验证", "showFrom": 2}, {"phaseLabel": "功耗和软件生态", "showFrom": 3}]} anchors={[{"text": "且听龙吟", "showFrom": 4, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={902} durationInFrames={167}>
                <BWPeerInduct content={[{"text": "我希望真的有技术突破，", "startFrame": 0, "durationFrames": 47}, {"text": "我希望能卡别人的脖子，", "startFrame": 46, "durationFrames": 56}, {"text": "但要给我看真正的成绩单。", "startFrame": 102, "durationFrames": 64}]} totalDurationFrames={167} premises={[{ imageSrc: staticFile("images/冯诺依曼突破论/scene_7_4_img0.png"), enterEffect: "fadeIn", showFrom: 0 }, { imageSrc: staticFile("images/冯诺依曼突破论/scene_7_4_img1.png"), enterEffect: "slideBottom", showFrom: 1 }]} conclusion={{ imageSrc: staticFile("images/冯诺依曼突破论/scene_7_4.png"), enterEffect: "zoomIn", tone: "alert", showFrom: 2 }} />
            </Sequence>
            <Sequence from={1069} durationInFrames={116}>
                <BWTextFocus content={[{"text": "说到底，真正有价值的工程。", "startFrame": 0, "durationFrames": 72}, {"text": "不需要冒充理论革命。", "startFrame": 72, "durationFrames": 44}]} totalDurationFrames={116} coreSentence={[{"text": "真正有价值的工程。", "showFrom": 0, "endFrom": 0}, {"text": "不需要冒充理论革命。", "showFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "理论革命", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={1185} durationInFrames={119}>
                <BWTextFocus content={[{"text": "尊重工程师。", "startFrame": 0, "durationFrames": 39}, {"text": "就别把五十度的水。", "startFrame": 38, "durationFrames": 42}, {"text": "硬吹成一百度。", "startFrame": 79, "durationFrames": 39}]} totalDurationFrames={119} coreSentence={[{"text": "尊重工程师。", "showFrom": 0}, {"text": "就别把五十度的水。", "showFrom": 1}, {"text": "硬吹成一百度。", "showFrom": 2}]} coreSentenceAnchors={[{"coreSentenceAnchor": "五十度", "color": "#EF4444"}, {"coreSentenceAnchor": "一百度", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={1304} durationInFrames={25}>
                <Freeze frame={118}>
                    <BWTextFocus content={[{"text": "尊重工程师。", "startFrame": 0, "durationFrames": 39}, {"text": "就别把五十度的水。", "startFrame": 38, "durationFrames": 42}, {"text": "硬吹成一百度。", "startFrame": 79, "durationFrames": 39}]} totalDurationFrames={119} coreSentence={[{"text": "尊重工程师。", "showFrom": 0}, {"text": "就别把五十度的水。", "showFrom": 1}, {"text": "硬吹成一百度。", "showFrom": 2}]} coreSentenceAnchors={[{"coreSentenceAnchor": "五十度", "color": "#EF4444"}, {"coreSentenceAnchor": "一百度", "color": "#EF4444"}]} />
                </Freeze>
            </Sequence>
            <Audio src={staticFile("/audio/冯诺依曼突破论/scene_7/scene_7.mp3")} />
        </AbsoluteFill>
    );
};
