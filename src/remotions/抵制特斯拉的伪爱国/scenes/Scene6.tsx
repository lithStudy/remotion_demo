import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWPanelGrid, BWTextFocus } from "../../../components";

// 剖析·倒逼进化
const SCENE_DURATION = 103 + 193 + 167 + 235 + 298 + 145;

export const calculateScene6Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene6: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={103}>
                <BWCenterFocus content={[{"text": "特斯拉进来之前，", "startFrame": 0, "durationFrames": 46}, {"text": "中国新能源市场什么样？", "startFrame": 45, "durationFrames": 57}]} totalDurationFrames={103} imageSrc={staticFile("images/抵制特斯拉的伪爱国/scene_6_1.png")} enterEffect="fadeIn" anchors={[{"text": "新能源市场", "showFrom": 1, "color": "#000000", "anim": "spring", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={103} durationInFrames={193}>
                <BWCenterFocus content={[{"text": "很多企业躺着拿政策钱，", "startFrame": 0, "durationFrames": 62}, {"text": "尽是开发一些骗补贴的低端电车。", "startFrame": 61, "durationFrames": 82}, {"text": "根本不想搞研发。", "startFrame": 142, "durationFrames": 50}]} totalDurationFrames={193} imageSrc={staticFile("images/抵制特斯拉的伪爱国/scene_6_3.png")} enterEffect="slideBottom" anchors={[{"text": "拿政策钱", "showFrom": 1, "color": "#EF4444", "anim": "highlight"}, {"text": "不搞研发", "showFrom": 2, "color": "#000000", "anim": "spring", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={296} durationInFrames={167}>
                <BWCenterFocus content={[{"text": "特斯拉一来，", "startFrame": 0, "durationFrames": 29}, {"text": "用极致的成本控制，", "startFrame": 28, "durationFrames": 47}, {"text": "把这群混日子的，", "startFrame": 75, "durationFrames": 36}, {"text": "直接逼到了生死线上。", "startFrame": 111, "durationFrames": 56}]} totalDurationFrames={167} imageSrc={staticFile("images/抵制特斯拉的伪爱国/scene_6_4.png")} enterEffect="slideLeft" anchors={[{"text": "特斯拉", "showFrom": 0, "color": "#000000", "anim": "spring", "audioEffect": "ping"}, {"text": "成本控制", "showFrom": 1, "color": "#000000", "anim": "highlight"}, {"text": "生死线", "showFrom": 3, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={463} durationInFrames={235}>
                <BWCenterFocus content={[{"text": "但它做的不止这一件事。", "startFrame": 0, "durationFrames": 52}, {"text": "它让所有人看见——", "startFrame": 51, "durationFrames": 39}, {"text": "纯电车，原来可以这样造。", "startFrame": 89, "durationFrames": 60}, {"text": "这条赛道，原来有这么大的商业价值。", "startFrame": 149, "durationFrames": 86}]} totalDurationFrames={235} imageSrc={staticFile("images/抵制特斯拉的伪爱国/scene_6_5.png")} enterEffect="fadeIn" anchors={[{"text": "纯电车", "showFrom": 2, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "商业价值", "showFrom": 3, "color": "#EF4444", "anim": "highlight"}]} />
            </Sequence>
            <Sequence from={698} durationInFrames={298}>
                <BWPanelGrid content={[{"text": "比亚迪、", "startFrame": 0, "durationFrames": 23}, {"text": "蔚来、", "startFrame": 22, "durationFrames": 21}, {"text": "小鹏、", "startFrame": 43, "durationFrames": 23}, {"text": "理想、", "startFrame": 66, "durationFrames": 21}, {"text": "极氪、", "startFrame": 87, "durationFrames": 20}, {"text": "小米。", "startFrame": 106, "durationFrames": 26}, {"text": "今天能站上世界舞台，", "startFrame": 131, "durationFrames": 54}, {"text": "是因为它们沿着特斯拉铺好的路，", "startFrame": 185, "durationFrames": 68}, {"text": "完成了快速进化。", "startFrame": 253, "durationFrames": 45}]} totalDurationFrames={298} panels={[{ src: staticFile("images/抵制特斯拉的伪爱国/scene_6_6_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { src: staticFile("images/抵制特斯拉的伪爱国/scene_6_6_img1.png"), showFrom: 1, enterEffect: "fadeIn" }, { src: staticFile("images/抵制特斯拉的伪爱国/scene_6_6_img2.png"), showFrom: 2, enterEffect: "fadeIn" }, { src: staticFile("images/抵制特斯拉的伪爱国/scene_6_6_img3.png"), showFrom: 3, enterEffect: "fadeIn" }, { src: staticFile("images/抵制特斯拉的伪爱国/scene_6_6_img4.png"), showFrom: 4, enterEffect: "fadeIn" }, { src: staticFile("images/抵制特斯拉的伪爱国/scene_6_6_img5.png"), showFrom: 5, enterEffect: "zoomIn" }]} />
            </Sequence>
            <Sequence from={996} durationInFrames={145}>
                <BWTextFocus content={[{"text": "先行者的血，", "startFrame": 0, "durationFrames": 35}, {"text": "换来的是后来者的加速度。", "startFrame": 34, "durationFrames": 58}, {"text": "这就是最强者的示范。", "startFrame": 92, "durationFrames": 53}]} totalDurationFrames={145} coreSentence={["先行者的血，", "换来的是后来者的加速度。", "这就是最强者的示范。"]} coreSentenceAnchors={[{"coreSentenceAnchor": "先行者的血", "color": "#EF4444"}, {"coreSentenceAnchor": "加速度", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/抵制特斯拉的伪爱国/scene_6/scene_6.mp3")} />
        </AbsoluteFill>
    );
};
