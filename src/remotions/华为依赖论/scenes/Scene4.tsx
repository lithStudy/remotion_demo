import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWConceptCard, BWPanelGrid } from "../../../components";

// 命名：压舱石角色
const SCENE_DURATION = 363 + 164 + 152;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={363}>
                <BWPanelGrid content={[{"text": "而中兴确实接得住这个角色。", "startFrame": 0, "durationFrames": 64}, {"text": "7纳米5G基站芯片量产，", "startFrame": 63, "durationFrames": 66}, {"text": "5纳米在推进。", "startFrame": 128, "durationFrames": 34}, {"text": "核心网云原生化全球55家客户。", "startFrame": 162, "durationFrames": 103}, {"text": "2024年全年营收约1213亿。", "startFrame": 265, "durationFrames": 98}]} totalDurationFrames={363} panels={[{ src: staticFile("images/华为依赖论/scene_4_2_img0.png"), showFrom: 1, enterEffect: "zoomIn" }, { src: staticFile("images/华为依赖论/scene_4_2_img1.png"), showFrom: 2, enterEffect: "fadeIn" }, { src: staticFile("images/华为依赖论/scene_4_2_img2.png"), showFrom: 3, enterEffect: "slideBottom" }, { src: staticFile("images/华为依赖论/scene_4_2_img3.png"), showFrom: 4, enterEffect: "slideBottom" }]} anchors={[{"text": "中兴压舱石", "color": "#EF4444", "showFrom": 0}]} />
            </Sequence>
            <Sequence from={363} durationInFrames={164}>
                <BWCenterFocus content={[{"text": "中国移动75亿的核心网招标，", "startFrame": 0, "durationFrames": 72}, {"text": "华为和中兴两家瓜分绝大多数份额。", "startFrame": 72, "durationFrames": 92}]} totalDurationFrames={164} imageSrc={staticFile("images/华为依赖论/scene_4_3.png")} enterEffect="fadeIn" anchors={[{"text": "75亿", "showFrom": 0, "color": "#EF4444", "anim": "highlight", "audioEffect": null}]} />
            </Sequence>
            <Sequence from={527} durationInFrames={152}>
                <BWConceptCard content={[{"text": "业内管中兴叫“压舱石”—", "startFrame": 0, "durationFrames": 62}, {"text": "有它在，", "startFrame": 61, "durationFrames": 27}, {"text": "运营商就永远有第二选择。", "startFrame": 87, "durationFrames": 65}]} totalDurationFrames={152} imageSrc={staticFile("images/华为依赖论/scene_4_4.png")} conceptName={"压舱石"} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/华为依赖论/scene_4/scene_4.mp3")} />
        </AbsoluteFill>
    );
};
