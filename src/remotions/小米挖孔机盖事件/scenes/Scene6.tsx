import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWConceptCard, BWMagnifyingGlass, BWTextFocus, BWTimeline } from "../../../components";

// 召唤：真诚回归与改进之路
const SCENE_DURATION = 65 + 205 + 99 + 147 + 75 + 158;

export const calculateScene6Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene6: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={65}>
                <BWCenterFocus content={[{"text": "好在，", "startFrame": 0, "durationFrames": 17}, {"text": "小米还是那个小米。", "startFrame": 16, "durationFrames": 48}]} totalDurationFrames={65} imageSrc={staticFile("images/小米挖孔机盖事件/scene_6_1.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={65} durationInFrames={205}>
                <BWTimeline content={[{"text": "从深夜致歉，", "startFrame": 0, "durationFrames": 39}, {"text": "到移除宣传页的小字，", "startFrame": 38, "durationFrames": 56}, {"text": "到直播拆车，", "startFrame": 93, "durationFrames": 43}, {"text": "再到雷军亲自直播续航，", "startFrame": 136, "durationFrames": 68}]} totalDurationFrames={205} images={[{ src: staticFile("images/小米挖孔机盖事件/scene_6_2_img0.png"), enterEffect: "fadeIn", textIndex: 0 }, { src: staticFile("images/小米挖孔机盖事件/scene_6_2_img1.png"), enterEffect: "fadeIn", textIndex: 1 }, { src: staticFile("images/小米挖孔机盖事件/scene_6_2_img2.png"), enterEffect: "zoomIn", textIndex: 2 }, { src: staticFile("images/小米挖孔机盖事件/scene_6_2_img3.png"), enterEffect: "slideLeft", textIndex: 3 }]} anchors={[]} />
            </Sequence>
            <Sequence from={270} durationInFrames={99}>
                <BWMagnifyingGlass content={[{"text": "这些行为证明了，", "startFrame": 0, "durationFrames": 41}, {"text": "小米确实在吸取教训。", "startFrame": 40, "durationFrames": 58}]} totalDurationFrames={99} anchors={[{"text": "吸取教训", "showFrom": 1, "color": "#EF4444", "anim": "popIn", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={369} durationInFrames={147}>
                <BWConceptCard content={[{"text": "它开始明白，", "startFrame": 0, "durationFrames": 32}, {"text": "自己的每一句宣传用语，", "startFrame": 31, "durationFrames": 51}, {"text": "都要有可见的事实做支撑。", "startFrame": 81, "durationFrames": 65}]} totalDurationFrames={147} imageSrc={staticFile("images/小米挖孔机盖事件/scene_6_4.png")} conceptName={"事实做支撑"} anchors={[]} />
            </Sequence>
            <Sequence from={516} durationInFrames={75}>
                <BWCenterFocus content={[{"text": "我骂它，", "startFrame": 0, "durationFrames": 27}, {"text": "是因为我依然相信它。", "startFrame": 26, "durationFrames": 49}]} totalDurationFrames={75} imageSrc={staticFile("images/小米挖孔机盖事件/scene_6_5.png")} enterEffect="fadeIn" anchors={[{"text": "相信", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={591} durationInFrames={158}>
                <BWTextFocus content={[{"text": "我相信未来的小米，", "startFrame": 0, "durationFrames": 36}, {"text": "会继续回到最初的工程师文化中，", "startFrame": 36, "durationFrames": 70}, {"text": "实事求是，数据为王。", "startFrame": 105, "durationFrames": 53}]} totalDurationFrames={158} coreSentence={["回到最初的工程师文化中", "实事求是，数据为王"]} coreSentenceAnchors={[{"coreSentenceAnchor": "工程师文化", "color": "#2563EB"}, {"coreSentenceAnchor": "实事求是，数据为王"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/小米挖孔机盖事件/scene_6/scene_6.mp3")} />
        </AbsoluteFill>
    );
};
