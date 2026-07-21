import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCauseChain, BWPeerInduct, BWTextFocus } from "../../../components";

// 召唤·实测接管率
const SCENE_DURATION = 77 + 169 + 162 + 61;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={77}>
                <BWTextFocus content={[{"text": "所以，", "startFrame": 0, "durationFrames": 16}, {"text": "不要再陷于输入端的口水战了。", "startFrame": 15, "durationFrames": 62}]} totalDurationFrames={77} coreSentence={[{"text": "所以，", "showFrom": 0, "endFrom": 0}, {"text": "不要再陷于输入端的口水战了", "showFrom": 1, "endFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "输入端", "color": "#EF4444"}, {"coreSentenceAnchor": "口水战", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={77} durationInFrames={169}>
                <BWPeerInduct content={[{"text": "不用看摄像头数量，", "startFrame": 0, "durationFrames": 44}, {"text": "不用看雷达数量，", "startFrame": 43, "durationFrames": 36}, {"text": "不用看激光线束数量。", "startFrame": 79, "durationFrames": 46}, {"text": "去看实际的测试。", "startFrame": 124, "durationFrames": 44}]} totalDurationFrames={169} premises={[{ imageSrc: staticFile("images/智驾论之瓶颈/scene_4_2_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { imageSrc: staticFile("images/智驾论之瓶颈/scene_4_2_img1.png"), showFrom: 1, enterEffect: "fadeIn" }, { imageSrc: staticFile("images/智驾论之瓶颈/scene_4_2_img2.png"), showFrom: 2, enterEffect: "fadeIn" }]} conclusion={{ imageSrc: staticFile("images/智驾论之瓶颈/scene_4_2.png"), showFrom: 3, enterEffect: "zoomIn", tone: "alert" }} anchors={[]} />
            </Sequence>
            <Sequence from={246} durationInFrames={162}>
                <BWCauseChain content={[{"text": "让车跑在蜿蜒的山路上，", "startFrame": 0, "durationFrames": 53}, {"text": "让车跑在汹涌的车流间，", "startFrame": 52, "durationFrames": 54}, {"text": "让车跑在上班的高峰中。", "startFrame": 105, "durationFrames": 56}]} totalDurationFrames={162} layout={"horizontal"} nodes={[{ label: "蜿蜒山路", imageSrc: staticFile("images/智驾论之瓶颈/scene_4_3_img0.png"), showFrom: 0 }, { label: "汹涌车流", imageSrc: staticFile("images/智驾论之瓶颈/scene_4_3_img1.png"), showFrom: 1 }, { label: "上班高峰", imageSrc: staticFile("images/智驾论之瓶颈/scene_4_3_img2.png"), showFrom: 2 }]} anchors={[]} />
            </Sequence>
            <Sequence from={408} durationInFrames={61}>
                <BWTextFocus content={[{"text": "然后，", "startFrame": 0, "durationFrames": 17}, {"text": "你自己去看接管率。", "startFrame": 16, "durationFrames": 45}]} totalDurationFrames={61} coreSentence={[{"text": "你自己去看接管率", "showFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "接管率", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/智驾论之瓶颈/scene_4/scene_4.mp3")} />
        </AbsoluteFill>
    );
};
