import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCauseChain, BWHubRadiate, BWPunchCaption, BWQuoteCitation, BWSplitCompare, BWTextFocus } from "../../../components";

// 官网英文说扩展
const SCENE_DURATION = 127 + 126 + 177 + 210 + 153 + 262 + 113 + 234 + 84;

export const calculateScene6Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene6: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={127}>
                <BWPunchCaption content={[{"text": "更何况，", "startFrame": 0, "durationFrames": 18}, {"text": "华为自己的中英文官网。", "startFrame": 17, "durationFrames": 51}, {"text": "给出了两种完全不同的说辞。", "startFrame": 67, "durationFrames": 60}]} totalDurationFrames={127} punches={[{"text": "更何况，", "showFrom": 0, "enterEffect": "slideUp", "tone": "calm"}, {"text": "华为自己的官网", "showFrom": 1, "enterEffect": "snap", "tone": "alert"}, {"text": "两种不同说辞", "showFrom": 2, "enterEffect": "shake", "tone": "alert"}]} />
            </Sequence>
            <Sequence from={127} durationInFrames={126}>
                <BWQuoteCitation content={[{"text": "华为中文官网写的是：", "startFrame": 0, "durationFrames": 56}, {"text": "突破，", "startFrame": 55, "durationFrames": 17}, {"text": "冯·诺依曼单机架构。", "startFrame": 72, "durationFrames": 54}]} totalDurationFrames={126} quoteSource={"华为中文官网"} quoteDisplayText={"突破，冯·诺依曼单机架构。"} showFrom={1} />
            </Sequence>
            <Sequence from={253} durationInFrames={177}>
                <BWQuoteCitation content={[{"text": "可同一篇新闻的英文官网写的是：", "startFrame": 0, "durationFrames": 72}, {"text": "extends the von Neumann single-machine architecture。", "startFrame": 72, "durationFrames": 105}]} totalDurationFrames={177} quoteSource={"华为英文官网"} quoteDisplayText={"extends the von Neumann single-machine architecture。"} showFrom={1} />
            </Sequence>
            <Sequence from={430} durationInFrames={210}>
                <BWHubRadiate content={[{"text": "这句英文什么意思？", "startFrame": 0, "durationFrames": 40}, {"text": "扩展，冯·诺依曼单机架构。", "startFrame": 39, "durationFrames": 72}, {"text": "不是replace。", "startFrame": 111, "durationFrames": 40}, {"text": "不是overturn。", "startFrame": 151, "durationFrames": 26}, {"text": "更不是abandon。", "startFrame": 176, "durationFrames": 34}]} totalDurationFrames={210} hub={{ imageSrc: staticFile("images/冯诺依曼突破论/scene_6_4.png"), enterEffect: "zoomIn", showFrom: 1 }} rays={[{ imageSrc: staticFile("images/冯诺依曼突破论/scene_6_4_img0.png"), enterEffect: "fadeIn", showFrom: 2 }, { imageSrc: staticFile("images/冯诺依曼突破论/scene_6_4_img1.png"), enterEffect: "slideLeft", showFrom: 3 }, { imageSrc: staticFile("images/冯诺依曼突破论/scene_6_4_img2.png"), enterEffect: "slideBottom", showFrom: 4 }]} anchors={[{"text": "扩展", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={640} durationInFrames={153}>
                <BWTextFocus content={[{"text": "你看。", "startFrame": 0, "durationFrames": 18}, {"text": "扩展这个词用的就很好。", "startFrame": 17, "durationFrames": 55}, {"text": "其实华为的工程师，", "startFrame": 71, "durationFrames": 42}, {"text": "是懂用词的。", "startFrame": 113, "durationFrames": 40}]} totalDurationFrames={153} coreSentence={[{"text": "扩展", "showFrom": 1, "endFrom": 3}]} coreSentenceAnchors={[]} />
            </Sequence>
            <Sequence from={793} durationInFrames={262}>
                <BWSplitCompare content={[{"text": "面对懂技术的全球同行。", "startFrame": 0, "durationFrames": 53}, {"text": "它知道这叫扩展。", "startFrame": 52, "durationFrames": 43}, {"text": "到了中文舆论场。", "startFrame": 94, "durationFrames": 44}, {"text": "扩展就变成了突破。", "startFrame": 138, "durationFrames": 47}, {"text": "扩大规模就变成了改写规则。", "startFrame": 185, "durationFrames": 77}]} totalDurationFrames={262} leftSrc={staticFile("images/冯诺依曼突破论/scene_6_6_left.png")} rightSrc={staticFile("images/冯诺依曼突破论/scene_6_6_right.png")} leftLabel={"全球同行"} rightLabel={"中文舆论场"} leftShowFrom={0} rightShowFrom={2} />
            </Sequence>
            <Sequence from={1055} durationInFrames={113}>
                <BWCauseChain content={[{"text": "国内忽悠人，几乎没有成本。", "startFrame": 0, "durationFrames": 62}, {"text": "所以你就可劲吹牛逼呗？", "startFrame": 61, "durationFrames": 51}]} totalDurationFrames={113} layout={"horizontal"} nodes={[{ label: "忽悠无成本", imageSrc: staticFile("images/冯诺依曼突破论/scene_6_7_img0.png"), showFrom: 0, enterEffect: "breathe" }, { label: "可劲吹牛", imageSrc: staticFile("images/冯诺依曼突破论/scene_6_7_img1.png"), showFrom: 1, enterEffect: "breathe" }]} anchors={[{"text": "忽悠人", "showFrom": 0, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}, {"text": "可劲吹", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={1168} durationInFrames={234}>
                <BWHubRadiate content={[{"text": "华为系营销号的套路。", "startFrame": 0, "durationFrames": 55}, {"text": "一直都是这样。", "startFrame": 54, "durationFrames": 32}, {"text": "把工程优化，", "startFrame": 86, "durationFrames": 33}, {"text": "说成理论革命。", "startFrame": 119, "durationFrames": 43}, {"text": "把解决瓶颈，", "startFrame": 161, "durationFrames": 32}, {"text": "说成改写规则。", "startFrame": 193, "durationFrames": 41}]} totalDurationFrames={234} hub={{ imageSrc: staticFile("images/冯诺依曼突破论/scene_6_8.png"), enterEffect: "zoomIn", showFrom: 0 }} rays={[{ imageSrc: staticFile("images/冯诺依曼突破论/scene_6_8_img0.png"), showFrom: 2, enterEffect: "slideLeft" }, { imageSrc: staticFile("images/冯诺依曼突破论/scene_6_8_img1.png"), showFrom: 4, enterEffect: "slideLeft" }]} />
            </Sequence>
            <Sequence from={1402} durationInFrames={84}>
                <BWTextFocus content={[{"text": "韬定律之后。", "startFrame": 0, "durationFrames": 36}, {"text": "这次轮到了冯·诺依曼。", "startFrame": 36, "durationFrames": 48}]} totalDurationFrames={84} coreSentence={[{"text": "韬定律之后。", "showFrom": 0, "endFrom": 0}, {"text": "这次轮到了冯·诺依曼。", "showFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "冯·诺依曼", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/冯诺依曼突破论/scene_6/scene_6.mp3")} />
        </AbsoluteFill>
    );
};
