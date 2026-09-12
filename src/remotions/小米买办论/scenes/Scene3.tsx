import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCaseBreakdown, BWCauseChain, BWCenterFocus, BWDosAndDonts, BWQuoteCitation, BWSplitCompare, BWTextFocus } from "../../../components";

// 制裁指控
const SCENE_DURATION = 145 + 229 + 374 + 340 + 329 + 190 + 355 + 138 + 242;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={145}>
                <BWQuoteCitation content={[{"text": "再看第二个。", "startFrame": 0, "durationFrames": 32}, {"text": "小米没被制裁，", "startFrame": 31, "durationFrames": 39}, {"text": "所以是买办。", "startFrame": 69, "durationFrames": 29}, {"text": "其实小米也被制裁过。", "startFrame": 98, "durationFrames": 47}]} totalDurationFrames={145} quoteSource={"常见说法"} quoteDisplayText={"小米没被制裁，所以是买办。"} showFrom={1} />
            </Sequence>
            <Sequence from={145} durationInFrames={229}>
                <BWCauseChain content={[{"text": "2020年，", "startFrame": 0, "durationFrames": 33}, {"text": "美国国防部和财政部，", "startFrame": 32, "durationFrames": 51}, {"text": "把小米列入制裁清单。", "startFrame": 82, "durationFrames": 53}, {"text": "理由是，", "startFrame": 135, "durationFrames": 23}, {"text": "小米跟中国军方有联系。", "startFrame": 158, "durationFrames": 70}]} totalDurationFrames={229} layout={"horizontal"} nodes={[{ label: "美方机构", imageSrc: staticFile("images/小米买办论/scene_3_2_img0.png"), showFrom: 1, enterEffect: "fadeIn" }, { label: "列入清单", imageSrc: staticFile("images/小米买办论/scene_3_2_img1.png"), showFrom: 2, enterEffect: "slideLeft" }, { label: "涉军指控", imageSrc: staticFile("images/小米买办论/scene_3_2_img2.png"), showFrom: 4, enterEffect: "slideLeft" }]} anchors={[]} />
            </Sequence>
            <Sequence from={374} durationInFrames={374}>
                <BWCaseBreakdown content={[{"text": "小米怎么做的？", "startFrame": 0, "durationFrames": 31}, {"text": "它拿起了法律武器。", "startFrame": 30, "durationFrames": 45}, {"text": "指控美国国防部和财政部的行为，", "startFrame": 74, "durationFrames": 76}, {"text": "违反了《行政程序法》。", "startFrame": 150, "durationFrames": 47}, {"text": "法院审理后，", "startFrame": 196, "durationFrames": 35}, {"text": "判决小米胜诉。", "startFrame": 231, "durationFrames": 51}, {"text": "美国政府必须把小米从清单里移除。", "startFrame": 281, "durationFrames": 92}]} totalDurationFrames={374} title={"小米反制裁胜诉"} imageSrc={staticFile("images/小米买办论/scene_3_3.png")} phases={[{"phaseLabel": "困境质疑", "showFrom": 0}, {"phaseLabel": "法律反击", "showFrom": 1}, {"phaseLabel": "法院胜诉", "showFrom": 4}, {"phaseLabel": "制裁移除", "showFrom": 6}]} anchors={[]} />
            </Sequence>
            <Sequence from={748} durationInFrames={340}>
                <BWCenterFocus content={[{"text": "华为为什么不行？", "startFrame": 0, "durationFrames": 40}, {"text": "一方面，", "startFrame": 39, "durationFrames": 21}, {"text": "华为孟女士违反了美国禁令，", "startFrame": 60, "durationFrames": 59}, {"text": "向伊朗转卖设备，以及涉嫌银行欺诈，", "startFrame": 118, "durationFrames": 92}, {"text": "她已经部分认罪了。", "startFrame": 210, "durationFrames": 41}, {"text": "别说打不打的赢，", "startFrame": 250, "durationFrames": 42}, {"text": "华为有脸打官司吗？", "startFrame": 292, "durationFrames": 47}]} totalDurationFrames={340} imageSrc={staticFile("images/小米买办论/scene_3_4.png")} enterEffect="fadeIn" anchors={[{"text": "认罪", "showFrom": 4, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={1088} durationInFrames={329}>
                <BWCenterFocus content={[{"text": "另一方面，", "startFrame": 0, "durationFrames": 32}, {"text": "华为的主营业务，", "startFrame": 31, "durationFrames": 41}, {"text": "是网络基建。", "startFrame": 72, "durationFrames": 35}, {"text": "这是最底层的通讯链路。", "startFrame": 106, "durationFrames": 56}, {"text": "基站、核心网、传输设备，", "startFrame": 161, "durationFrames": 68}, {"text": "直接决定一个国家的主干网络能不能被远程控制。", "startFrame": 229, "durationFrames": 100}]} totalDurationFrames={329} imageSrc={staticFile("images/小米买办论/scene_3_5.png")} enterEffect="fadeIn" anchors={[{"text": "主干网络", "showFrom": 5, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={1417} durationInFrames={190}>
                <BWCenterFocus content={[{"text": "而小米主营是终端设备。", "startFrame": 0, "durationFrames": 57}, {"text": "手机、电视、手环。", "startFrame": 56, "durationFrames": 52}, {"text": "有问题，", "startFrame": 108, "durationFrames": 27}, {"text": "也只是威胁终端使用者。", "startFrame": 134, "durationFrames": 56}]} totalDurationFrames={190} imageSrc={staticFile("images/小米买办论/scene_3_6.png")} enterEffect="fadeIn" anchors={[{"text": "威胁终端使用者", "showFrom": 3, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={1607} durationInFrames={355}>
                <BWSplitCompare content={[{"text": "就像电网一样。", "startFrame": 0, "durationFrames": 31}, {"text": "华为的业务相当于是做输电线路和变电站，", "startFrame": 30, "durationFrames": 107}, {"text": "控制了就能远程切断一个省的电。", "startFrame": 137, "durationFrames": 76}, {"text": "小米就像是做家里的用电设备，", "startFrame": 212, "durationFrames": 64}, {"text": "家里的灯泡坏了，", "startFrame": 275, "durationFrames": 39}, {"text": "只影响你一个房间。", "startFrame": 313, "durationFrames": 41}]} totalDurationFrames={355} leftSrc={staticFile("images/小米买办论/scene_3_7_left.png")} rightSrc={staticFile("images/小米买办论/scene_3_7_right.png")} leftLabel={"电力基建"} rightLabel={"家用电器"} leftShowFrom={1} rightShowFrom={3} anchors={[]} />
            </Sequence>
            <Sequence from={1962} durationInFrames={138}>
                <BWTextFocus content={[{"text": "两家公司主营业务所处的位置，", "startFrame": 0, "durationFrames": 75}, {"text": "决定了对一个国家的威胁程度。", "startFrame": 74, "durationFrames": 63}]} totalDurationFrames={138} coreSentence={[{"text": "两家公司主营业务所处的位置，", "showFrom": 0, "endFrom": 0}, {"text": "决定了对一个国家的威胁程度。", "showFrom": 1, "endFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "威胁程度", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={2100} durationInFrames={242}>
                <BWDosAndDonts content={[{"text": "这不是技术问题，", "startFrame": 0, "durationFrames": 42}, {"text": "设计变电站的并不比设计家电的技术含量高；", "startFrame": 41, "durationFrames": 105}, {"text": "这是位置问题，", "startFrame": 146, "durationFrames": 35}, {"text": "基建总是比终端更要命。", "startFrame": 181, "durationFrames": 61}]} totalDurationFrames={242} left={{label: "❌ 技术问题", src: staticFile("images/小米买办论/scene_3_9_left.png"), showFrom: 0 }} right={{label: "✅ 位置问题", src: staticFile("images/小米买办论/scene_3_9_right.png"), showFrom: 2 }} />
            </Sequence>
            <Audio src={staticFile("/audio/小米买办论/scene_3/scene_3.mp3")} />
        </AbsoluteFill>
    );
};
