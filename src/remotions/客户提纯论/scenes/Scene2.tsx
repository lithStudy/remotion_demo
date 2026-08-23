import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCauseChain, BWMagnifyingGlass } from "../../../components";

// 剖析：最蠢的人特征
const SCENE_DURATION = 33 + 148 + 154 + 210 + 208 + 159 + 203 + 221;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={33}>
                <BWMagnifyingGlass content={[{"text": "哪些人最蠢？", "startFrame": 0, "durationFrames": 33}]} totalDurationFrames={33} anchors={[{"text": "最蠢", "showFrom": 0, "color": "#EF4444", "anim": "popIn", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={33} durationInFrames={148}>
                <BWCauseChain content={[{"text": "你就使劲的吹牛逼，", "startFrame": 0, "durationFrames": 40}, {"text": "但是不给可以量化的证据，", "startFrame": 39, "durationFrames": 58}, {"text": "那些相信的就是最蠢的人。", "startFrame": 97, "durationFrames": 51}]} totalDurationFrames={148} layout={"horizontal"} nodes={[{ label: "吹牛逼", imageSrc: staticFile("images/客户提纯论/scene_2_2_img0.png"), showFrom: 0, enterEffect: "breathe" }, { label: "无证据", imageSrc: staticFile("images/客户提纯论/scene_2_2_img1.png"), showFrom: 1, enterEffect: "slideBottom" }, { label: "最蠢", imageSrc: staticFile("images/客户提纯论/scene_2_2_img2.png"), showFrom: 2, enterEffect: "slideBottom" }]} />
            </Sequence>
            <Sequence from={181} durationInFrames={154}>
                <BWCauseChain content={[{"text": "你就为普通的产品，", "startFrame": 0, "durationFrames": 38}, {"text": "附加毫无来由的情怀价值，", "startFrame": 37, "durationFrames": 63}, {"text": "那些感动的就是最蠢的人。", "startFrame": 99, "durationFrames": 55}]} totalDurationFrames={154} layout={"horizontal"} nodes={[{ label: "普通产品", imageSrc: staticFile("images/客户提纯论/scene_2_3_img0.png"), showFrom: 0, enterEffect: "breathe" }, { label: "情怀价值", imageSrc: staticFile("images/客户提纯论/scene_2_3_img1.png"), showFrom: 1, enterEffect: "slideBottom" }, { label: "最蠢", imageSrc: staticFile("images/客户提纯论/scene_2_3_img2.png"), showFrom: 2, enterEffect: "slideBottom" }]} />
            </Sequence>
            <Sequence from={335} durationInFrames={210}>
                <BWCauseChain content={[{"text": "你就把正常的商业竞争和技术讨论，", "startFrame": 0, "durationFrames": 68}, {"text": "扭曲成敌我矛盾和立场站队，", "startFrame": 67, "durationFrames": 70}, {"text": "那些跟着扣帽子的就是最蠢的人。", "startFrame": 137, "durationFrames": 73}]} totalDurationFrames={210} layout={"horizontal"} nodes={[{ label: "商业竞争", imageSrc: staticFile("images/客户提纯论/scene_2_4_img0.png"), showFrom: 0, enterEffect: "breathe" }, { label: "立场站队", imageSrc: staticFile("images/客户提纯论/scene_2_4_img1.png"), showFrom: 1, enterEffect: "slideBottom" }, { label: "最蠢", imageSrc: staticFile("images/客户提纯论/scene_2_4_img2.png"), showFrom: 2, enterEffect: "slideBottom" }]} anchors={[]} />
            </Sequence>
            <Sequence from={545} durationInFrames={208}>
                <BWCauseChain content={[{"text": "你就把企业面临的客观技术瓶颈，", "startFrame": 0, "durationFrames": 66}, {"text": "洗地成“大棋局”和“且听龙吟”，", "startFrame": 65, "durationFrames": 70}, {"text": "那些盲目迷信的人就是最蠢的人。", "startFrame": 135, "durationFrames": 73}]} totalDurationFrames={208} layout={"horizontal"} nodes={[{ label: "技术瓶颈", imageSrc: staticFile("images/客户提纯论/scene_2_5_img0.png"), showFrom: 0, enterEffect: "breathe" }, { label: "洗成大棋", imageSrc: staticFile("images/客户提纯论/scene_2_5_img1.png"), showFrom: 1, enterEffect: "slideBottom" }, { label: "最蠢", imageSrc: staticFile("images/客户提纯论/scene_2_5_img2.png"), showFrom: 2, enterEffect: "slideBottom" }]} anchors={[]} />
            </Sequence>
            <Sequence from={753} durationInFrames={159}>
                <BWCauseChain content={[{"text": "你就拿宏大叙事当优越感，", "startFrame": 0, "durationFrames": 59}, {"text": "那些 与有荣焉、", "startFrame": 58, "durationFrames": 36}, {"text": "替老板代入人生的就是最蠢的人。", "startFrame": 94, "durationFrames": 64}]} totalDurationFrames={159} layout={"horizontal"} nodes={[{ label: "宏大叙事", imageSrc: staticFile("images/客户提纯论/scene_2_6_img0.png"), showFrom: 0, enterEffect: "breathe" }, { label: "与有荣焉", imageSrc: staticFile("images/客户提纯论/scene_2_6_img1.png"), showFrom: 1, enterEffect: "slideBottom" }, { label: "最蠢", imageSrc: staticFile("images/客户提纯论/scene_2_6_img2.png"), showFrom: 2, enterEffect: "slideBottom" }]} anchors={[]} />
            </Sequence>
            <Sequence from={912} durationInFrames={203}>
                <BWCauseChain content={[{"text": "你就洗脑式的告诉他们外面的产品都是垃圾，", "startFrame": 0, "durationFrames": 88}, {"text": "那些尚未体验就对新事物充满排斥的，", "startFrame": 87, "durationFrames": 80}, {"text": "就是最蠢的人。", "startFrame": 166, "durationFrames": 36}]} totalDurationFrames={203} layout={"horizontal"} nodes={[{ label: "洗脑排斥", imageSrc: staticFile("images/客户提纯论/scene_2_7_img0.png"), showFrom: 0, enterEffect: "breathe" }, { label: "排斥新事物", imageSrc: staticFile("images/客户提纯论/scene_2_7_img1.png"), showFrom: 1, enterEffect: "slideBottom" }, { label: "最蠢", imageSrc: staticFile("images/客户提纯论/scene_2_7_img2.png"), showFrom: 2, enterEffect: "slideBottom" }]} />
            </Sequence>
            <Sequence from={1115} durationInFrames={221}>
                <BWCauseChain content={[{"text": "你就拿对手产品的一两次缺憾拼命宣传，", "startFrame": 0, "durationFrames": 88}, {"text": "刻意忽略庞大的基数，", "startFrame": 87, "durationFrames": 53}, {"text": "那些跟着夸大其词的人就是最蠢的人。", "startFrame": 139, "durationFrames": 81}]} totalDurationFrames={221} layout={"horizontal"} nodes={[{ label: "放大缺憾", imageSrc: staticFile("images/客户提纯论/scene_2_8_img0.png"), showFrom: 0, enterEffect: "breathe" }, { label: "忽略基数", imageSrc: staticFile("images/客户提纯论/scene_2_8_img1.png"), showFrom: 1, enterEffect: "slideBottom" }, { label: "最蠢", imageSrc: staticFile("images/客户提纯论/scene_2_8_img2.png"), showFrom: 2, enterEffect: "slideBottom" }]} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/客户提纯论/scene_2/scene_2.mp3")} />
        </AbsoluteFill>
    );
};
