import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCognitiveShift, BWMagnifyingGlass, BWMethodStack, BWPeerInduct, BWQuoteCitation, BWStatCompare, BWTextFocus } from "../../../components";

// 剖析·增值税真相
const SCENE_DURATION = 122 + 86 + 217 + 184 + 288 + 345 + 88 + 228;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={122}>
                <BWQuoteCitation content={[{"text": "那有人问了，", "startFrame": 0, "durationFrames": 28}, {"text": "民间组织也不会乱说话吧，", "startFrame": 27, "durationFrames": 59}, {"text": "总得有点依据吧？", "startFrame": 86, "durationFrames": 36}]} totalDurationFrames={122} quoteSource={"有人问"} quoteDisplayText={"民间组织也不会乱说话吧，总得有点依据吧？"} showFrom={1} />
            </Sequence>
            <Sequence from={122} durationInFrames={86}>
                <BWTextFocus content={[{"text": "要说依据，", "startFrame": 0, "durationFrames": 26}, {"text": "那唯一可信的应该就是年报了。", "startFrame": 25, "durationFrames": 60}]} totalDurationFrames={86} coreSentence={[{"text": "要说依据，", "showFrom": 0, "endFrom": 1}, {"text": "那唯一可信的应该就是年报了。", "showFrom": 1, "endFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "年报", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={208} durationInFrames={217}>
                <BWStatCompare content={[{"text": "很遗憾，", "startFrame": 0, "durationFrames": 19}, {"text": "华为自家发布的年报。", "startFrame": 18, "durationFrames": 50}, {"text": "2020年企业所得税是76亿元。", "startFrame": 68, "durationFrames": 100}, {"text": "只有腾讯的1/3。", "startFrame": 167, "durationFrames": 50}]} totalDurationFrames={217} bars={[{"label": "华为", "value": 76, "showFrom": 2, "decimalPlaces": 0}, {"label": "腾讯", "value": 228, "showFrom": 3}]} anchors={[]} />
            </Sequence>
            <Sequence from={425} durationInFrames={184}>
                <BWMagnifyingGlass content={[{"text": "那么这千亿中的827亿元的差额哪里来的呢？", "startFrame": 0, "durationFrames": 108}, {"text": "唯一可能的来源，", "startFrame": 107, "durationFrames": 40}, {"text": "是增值税。", "startFrame": 146, "durationFrames": 38}]} totalDurationFrames={184} anchors={[{"text": "增值税", "showFrom": 2, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={609} durationInFrames={288}>
                <BWMethodStack content={[{"text": "增值税，", "startFrame": 0, "durationFrames": 23}, {"text": "是典型的间接税。", "startFrame": 22, "durationFrames": 42}, {"text": "谁向税务机关申报？", "startFrame": 64, "durationFrames": 48}, {"text": "企业。", "startFrame": 112, "durationFrames": 22}, {"text": "谁把钱交进国库？", "startFrame": 134, "durationFrames": 43}, {"text": "也是企业。", "startFrame": 176, "durationFrames": 26}, {"text": "可谁最终承担税负？", "startFrame": 202, "durationFrames": 54}, {"text": "是消费者。", "startFrame": 256, "durationFrames": 32}]} totalDurationFrames={288} title={"谁最终承担税负"} imageSrc={staticFile("images/华为纳税论/scene_2_5.png")} notes={[{"text": "税负可以转嫁", "showFrom": 1}, {"text": "企业只是代收代缴", "showFrom": 5}, {"text": "消费者最终承担", "showFrom": 7}]} />
            </Sequence>
            <Sequence from={897} durationInFrames={345}>
                <BWStatCompare content={[{"text": "算一部手机就明白了。", "startFrame": 0, "durationFrames": 38}, {"text": "假设一部华为手机，", "startFrame": 37, "durationFrames": 46}, {"text": "售价七千元。", "startFrame": 83, "durationFrames": 42}, {"text": "按照百分之十三的税率，", "startFrame": 125, "durationFrames": 53}, {"text": "这七千元里面，", "startFrame": 177, "durationFrames": 35}, {"text": "大约有八百零五元，", "startFrame": 212, "durationFrames": 51}, {"text": "是消费者为手机额外付出的增值税，", "startFrame": 262, "durationFrames": 82}]} totalDurationFrames={345} bars={[{"label": "手机售价", "value": 7000, "showFrom": 2}, {"label": "增值税", "value": 805, "showFrom": 5}]} />
            </Sequence>
            <Sequence from={1242} durationInFrames={88}>
                <BWCognitiveShift content={[{"text": "这是你自己缴纳的税款，", "startFrame": 0, "durationFrames": 50}, {"text": "不是华为缴纳的。", "startFrame": 49, "durationFrames": 39}]} totalDurationFrames={88} notText={"华为缴纳的"} butText={"你自己缴纳的"} butSrc={staticFile("images/华为纳税论/scene_2_7.png")} notContentIndex={1} butContentIndex={0} anchors={[]} />
            </Sequence>
            <Sequence from={1330} durationInFrames={228}>
                <BWPeerInduct content={[{"text": "这就像商场收银台。", "startFrame": 0, "durationFrames": 46}, {"text": "顾客交钱给收银台，", "startFrame": 45, "durationFrames": 51}, {"text": "收银台交钱给商场，", "startFrame": 96, "durationFrames": 51}, {"text": "你就不能说这些钱都是收银员贡献的。", "startFrame": 146, "durationFrames": 82}]} totalDurationFrames={228} premises={[{ imageSrc: staticFile("images/华为纳税论/scene_2_8_img0.png"), enterEffect: "slideBottom", showFrom: 1 }, { imageSrc: staticFile("images/华为纳税论/scene_2_8_img1.png"), enterEffect: "slideBottom", showFrom: 2 }]} conclusion={{ imageSrc: staticFile("images/华为纳税论/scene_2_8.png"), enterEffect: "zoomIn", showFrom: 3, tone: "alert" }} />
            </Sequence>
            <Audio src={staticFile("/audio/华为纳税论/scene_2/scene_2.mp3")} />
        </AbsoluteFill>
    );
};
