import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCaseBreakdown, BWCauseChain, BWCenterFocus, BWDosAndDonts, BWQuoteCitation, BWSplitCompare, BWTextFocus } from "../../../components";

// 制裁指控
const SCENE_DURATION = 155 + 227 + 367 + 272 + 339 + 200 + 380 + 135 + 235;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={155}>
                <BWQuoteCitation content={[{"text": "再看第二个。", "startFrame": 0, "durationFrames": 32}, {"text": "小米没被制裁，", "startFrame": 31, "durationFrames": 41}, {"text": "所以是买办。", "startFrame": 72, "durationFrames": 36}, {"text": "其实小米也被制裁过。", "startFrame": 108, "durationFrames": 47}]} totalDurationFrames={155} quoteSource={"常见说法"} quoteDisplayText={"小米没被制裁，所以是买办。"} showFrom={1} />
            </Sequence>
            <Sequence from={155} durationInFrames={227}>
                <BWCauseChain content={[{"text": "2020年，", "startFrame": 0, "durationFrames": 33}, {"text": "美国国防部和财政部，", "startFrame": 32, "durationFrames": 53}, {"text": "把小米列入制裁清单。", "startFrame": 85, "durationFrames": 49}, {"text": "理由是，", "startFrame": 133, "durationFrames": 24}, {"text": "小米跟中国军方有联系。", "startFrame": 157, "durationFrames": 70}]} totalDurationFrames={227} layout={"horizontal"} nodes={[{ label: "美方机构", imageSrc: staticFile("images/小米买办论/scene_3_2_img0.png"), showFrom: 1, enterEffect: "fadeIn" }, { label: "列入清单", imageSrc: staticFile("images/小米买办论/scene_3_2_img1.png"), showFrom: 2, enterEffect: "slideLeft" }, { label: "涉军指控", imageSrc: staticFile("images/小米买办论/scene_3_2_img2.png"), showFrom: 4, enterEffect: "slideLeft" }]} anchors={[]} />
            </Sequence>
            <Sequence from={382} durationInFrames={367}>
                <BWCaseBreakdown content={[{"text": "小米怎么做的？", "startFrame": 0, "durationFrames": 35}, {"text": "它拿起了法律武器。", "startFrame": 34, "durationFrames": 47}, {"text": "指控美国国防部和财政部的行为，", "startFrame": 81, "durationFrames": 82}, {"text": "违反了《行政程序法》。", "startFrame": 162, "durationFrames": 43}, {"text": "法院审理后，", "startFrame": 205, "durationFrames": 32}, {"text": "判决小米胜诉。", "startFrame": 237, "durationFrames": 41}, {"text": "美国政府必须把小米从清单里移除。", "startFrame": 277, "durationFrames": 90}]} totalDurationFrames={367} title={"小米反制裁胜诉"} imageSrc={staticFile("images/小米买办论/scene_3_3.png")} phases={[{"phaseLabel": "困境质疑", "showFrom": 0}, {"phaseLabel": "法律反击", "showFrom": 1}, {"phaseLabel": "法院胜诉", "showFrom": 4}, {"phaseLabel": "制裁移除", "showFrom": 6}]} anchors={[]} />
            </Sequence>
            <Sequence from={749} durationInFrames={272}>
                <BWCenterFocus content={[{"text": "华为为什么不行？", "startFrame": 0, "durationFrames": 42}, {"text": "一方面，", "startFrame": 41, "durationFrames": 20}, {"text": "华为孟女士违反了美国禁令，", "startFrame": 61, "durationFrames": 55}, {"text": "向伊朗转卖设备，", "startFrame": 115, "durationFrames": 40}, {"text": "她认罪了。", "startFrame": 154, "durationFrames": 27}, {"text": "别说打不打的赢，", "startFrame": 181, "durationFrames": 41}, {"text": "华为有脸打官司吗？", "startFrame": 222, "durationFrames": 50}]} totalDurationFrames={272} imageSrc={staticFile("images/小米买办论/scene_3_4.png")} enterEffect="fadeIn" anchors={[{"text": "认罪", "showFrom": 4, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={1021} durationInFrames={339}>
                <BWCenterFocus content={[{"text": "另一方面，", "startFrame": 0, "durationFrames": 26}, {"text": "华为的主营业务，", "startFrame": 25, "durationFrames": 39}, {"text": "是网络基建。", "startFrame": 63, "durationFrames": 35}, {"text": "这是最底层的通讯链路。", "startFrame": 97, "durationFrames": 59}, {"text": "基站、核心网、传输设备，", "startFrame": 156, "durationFrames": 79}, {"text": "直接决定一个国家的主干网络能不能被远程控制。", "startFrame": 234, "durationFrames": 104}]} totalDurationFrames={339} imageSrc={staticFile("images/小米买办论/scene_3_5.png")} enterEffect="fadeIn" anchors={[{"text": "主干网络", "showFrom": 5, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={1360} durationInFrames={200}>
                <BWCenterFocus content={[{"text": "而小米主营是终端设备。", "startFrame": 0, "durationFrames": 68}, {"text": "手机、电视、手环。", "startFrame": 67, "durationFrames": 62}, {"text": "有问题，", "startFrame": 128, "durationFrames": 24}, {"text": "也只是威胁终端使用者。", "startFrame": 152, "durationFrames": 47}]} totalDurationFrames={200} imageSrc={staticFile("images/小米买办论/scene_3_6.png")} enterEffect="fadeIn" anchors={[{"text": "威胁终端使用者", "showFrom": 3, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={1560} durationInFrames={380}>
                <BWSplitCompare content={[{"text": "就像电网一样。", "startFrame": 0, "durationFrames": 33}, {"text": "华为的业务相当于是做输电线路和变电站，", "startFrame": 32, "durationFrames": 114}, {"text": "控制了就能远程切断一个省的电。", "startFrame": 146, "durationFrames": 74}, {"text": "小米就像是做家里的用电设备，", "startFrame": 220, "durationFrames": 77}, {"text": "家里的灯泡坏了，", "startFrame": 296, "durationFrames": 42}, {"text": "只影响你一个房间。", "startFrame": 337, "durationFrames": 42}]} totalDurationFrames={380} leftSrc={staticFile("images/小米买办论/scene_3_7_left.png")} rightSrc={staticFile("images/小米买办论/scene_3_7_right.png")} leftLabel={"电力基建"} rightLabel={"家用电器"} leftShowFrom={1} rightShowFrom={3} anchors={[]} />
            </Sequence>
            <Sequence from={1940} durationInFrames={135}>
                <BWTextFocus content={[{"text": "两家公司主营业务所处的位置，", "startFrame": 0, "durationFrames": 70}, {"text": "决定了对一个国家的威胁程度。", "startFrame": 69, "durationFrames": 65}]} totalDurationFrames={135} coreSentence={[{"text": "两家公司主营业务所处的位置，", "showFrom": 0, "endFrom": 0}, {"text": "决定了对一个国家的威胁程度。", "showFrom": 1, "endFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "威胁程度", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={2075} durationInFrames={235}>
                <BWDosAndDonts content={[{"text": "这不是技术问题，", "startFrame": 0, "durationFrames": 38}, {"text": "设计变电站的并不比设计家电的技术含量高；", "startFrame": 37, "durationFrames": 102}, {"text": "这是位置问题，", "startFrame": 138, "durationFrames": 40}, {"text": "基建总是比终端更要命。", "startFrame": 177, "durationFrames": 57}]} totalDurationFrames={235} left={{label: "❌ 技术问题", src: staticFile("images/小米买办论/scene_3_9_left.png"), showFrom: 0 }} right={{label: "✅ 位置问题", src: staticFile("images/小米买办论/scene_3_9_right.png"), showFrom: 2 }} />
            </Sequence>
            <Audio src={staticFile("/audio/小米买办论/scene_3/scene_3.mp3")} />
        </AbsoluteFill>
    );
};
