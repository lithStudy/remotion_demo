import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCaseBreakdown, BWCenterFocus, BWCognitiveShift, BWDosAndDonts, BWKpiHero, BWMagnifyingGlass, BWMethodStack, BWSplitCompare, BWTextFocus } from "../../../components";

// 反转：看清真实贡献
const SCENE_DURATION = 182 + 366 + 431 + 159 + 338 + 161 + 409 + 95 + 179 + 180 + 134 + 92 + 96;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={182}>
                <BWTextFocus content={[{"text": "所以，你现在应该理解了：", "startFrame": 0, "durationFrames": 52}, {"text": "5G是全人类几十年通信基础科学的集大成者。", "startFrame": 51, "durationFrames": 130}]} totalDurationFrames={182} coreSentence={["全人类几十年通信基础科学的集大成者"]} coreSentenceAnchors={[{"coreSentenceAnchor": "集大成者", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={182} durationInFrames={366}>
                <BWDosAndDonts content={[{"text": "看懂这一点，", "startFrame": 0, "durationFrames": 31}, {"text": "你再回头看那些天天喊“无华为不5G”的人，", "startFrame": 30, "durationFrames": 101}, {"text": "就会发现，", "startFrame": 130, "durationFrames": 27}, {"text": "他们要么是蠢，不理解现代工业是集体努力的成果。", "startFrame": 157, "durationFrames": 112}, {"text": "要么是坏，故意抹杀其他国家和公司的贡献。", "startFrame": 268, "durationFrames": 98}]} totalDurationFrames={366} left={{label: "❌ 要么是蠢", src: staticFile("images/华为的5G迷思/scene_3_1_left.png"), showFrom: 3 }} right={{label: "❌ 要么是坏", src: staticFile("images/华为的5G迷思/scene_3_1_right.png"), showFrom: 4 }} anchors={[{"text": "无华为不5G", "showFrom": 1, "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={548} durationInFrames={431}>
                <BWKpiHero content={[{"text": "你如果去查全球最权威的标准必要专利实证数据，", "startFrame": 0, "durationFrames": 118}, {"text": "剔除掉那些注水的数据后，", "startFrame": 117, "durationFrames": 65}, {"text": "华为在真正的5G核心专利里，", "startFrame": 182, "durationFrames": 78}, {"text": "占比大概在15%到20%之间。", "startFrame": 259, "durationFrames": 102}, {"text": "这个数字牛不牛？", "startFrame": 361, "durationFrames": 39}, {"text": "非常牛！", "startFrame": 399, "durationFrames": 32}]} totalDurationFrames={431} blocks={[{"value": 15, "suffix": "%", "label": "华为核心专利占比", "showFrom": 3}]} countDuration={28} anchors={[]} />
            </Sequence>
            <Sequence from={979} durationInFrames={159}>
                <BWMagnifyingGlass content={[{"text": "它意味着中国通信产业从以前的跟跑，", "startFrame": 0, "durationFrames": 82}, {"text": "终于变成了牌桌上的庄家之一。", "startFrame": 81, "durationFrames": 78}]} totalDurationFrames={159} anchors={[{"text": "牌桌上的庄家", "showFrom": 1, "color": "#111111", "anim": "spring", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={1138} durationInFrames={338}>
                <BWMethodStack content={[{"text": "但是，这也意味着，", "startFrame": 0, "durationFrames": 43}, {"text": "还有至少80%的核心专利，", "startFrame": 42, "durationFrames": 69}, {"text": "掌握在中国的中兴、大唐、电信；", "startFrame": 111, "durationFrames": 90}, {"text": "以及外国的高通、爱立信、诺基亚、", "startFrame": 200, "durationFrames": 87}, {"text": "三星这些巨头手里。", "startFrame": 286, "durationFrames": 51}]} totalDurationFrames={338} title={"八成核心专利归属"} imageSrc={staticFile("images/华为的5G迷思/scene_3_8.png")} notes={[{"text": "中兴、大唐、移动等（国内侧）", "showFrom": 2}, {"text": "高通、爱立信、诺基亚、三星（海外侧）", "showFrom": 3}]} />
            </Sequence>
            <Sequence from={1476} durationInFrames={161}>
                <BWCenterFocus content={[{"text": "在欧洲和美国的很多地方，", "startFrame": 0, "durationFrames": 52}, {"text": "因为各种制裁，", "startFrame": 51, "durationFrames": 35}, {"text": "他们把华为的设备从网络里拆出去了。", "startFrame": 86, "durationFrames": 75}]} totalDurationFrames={161} imageSrc={staticFile("images/华为的5G迷思/scene_3_9.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={1637} durationInFrames={409}>
                <BWCaseBreakdown content={[{"text": "结果呢？", "startFrame": 0, "durationFrames": 23}, {"text": "他们的5G网络瘫痪了吗？", "startFrame": 22, "durationFrames": 56}, {"text": "并没有。", "startFrame": 78, "durationFrames": 22}, {"text": "靠着爱立信和诺基亚，", "startFrame": 100, "durationFrames": 46}, {"text": "他们不仅仅建起了5G网络，甚至覆盖了90%的人口", "startFrame": 146, "durationFrames": 128}, {"text": "他们只需要把涉及华为的那一小部分内容，", "startFrame": 273, "durationFrames": 84}, {"text": "换成其他方案而已。", "startFrame": 357, "durationFrames": 51}]} totalDurationFrames={409} title={"拆掉华为之后"} imageSrc={staticFile("images/华为的5G迷思/scene_3_10.png")} phases={[{"phaseLabel": "抛问", "showFrom": 0}, {"phaseLabel": "未瘫痪", "showFrom": 2}, {"phaseLabel": "补位覆盖", "showFrom": 3}, {"phaseLabel": "可替换", "showFrom": 5}]} anchors={[]} />
            </Sequence>
            <Sequence from={2046} durationInFrames={95}>
                <BWSplitCompare content={[{"text": "反而是在中国，我却从来没有体验过5G", "startFrame": 0, "durationFrames": 95}]} totalDurationFrames={95} leftSrc={staticFile("images/华为的5G迷思/scene_3_11_left.png")} rightSrc={staticFile("images/华为的5G迷思/scene_3_11_right.png")} leftLabel={"欧美现实"} rightLabel={"我的感受"} leftShowFrom={0} rightShowFrom={0} anchors={[]} />
            </Sequence>
            <Sequence from={2141} durationInFrames={179}>
                <BWCognitiveShift content={[{"text": "当你在神话某一家企业，", "startFrame": 0, "durationFrames": 52}, {"text": "把它包装成救世主的时候，", "startFrame": 51, "durationFrames": 59}, {"text": "你其实是在侮辱现代工业。", "startFrame": 110, "durationFrames": 69}]} totalDurationFrames={179} notText={"把企业神话为救世主"} butText={"侮辱现代工业"} butSrc={staticFile("images/华为的5G迷思/scene_3_12.png")} notContentIndex={0} butContentIndex={2} anchors={[]} />
            </Sequence>
            <Sequence from={2320} durationInFrames={180}>
                <BWCognitiveShift content={[{"text": "5G从来不是某一家企业的私产，", "startFrame": 0, "durationFrames": 76}, {"text": "它是全人类百年无线电科技协作的工业明珠。", "startFrame": 75, "durationFrames": 105}]} totalDurationFrames={180} notText={"某一家企业私产"} butText={"百年科技协作的工业明珠"} butSrc={staticFile("images/华为的5G迷思/scene_3_13.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Sequence from={2500} durationInFrames={134}>
                <BWCenterFocus content={[{"text": "真正的科技自信，", "startFrame": 0, "durationFrames": 42}, {"text": "不是靠抢别人的功劳来给自己脸上贴金。", "startFrame": 41, "durationFrames": 92}]} totalDurationFrames={134} imageSrc={staticFile("images/华为的5G迷思/scene_3_14.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={2634} durationInFrames={92}>
                <BWTextFocus content={[{"text": "承认别人的地基，", "startFrame": 0, "durationFrames": 40}, {"text": "才能看清自己的大厦。", "startFrame": 39, "durationFrames": 53}]} totalDurationFrames={92} coreSentence={[{"text": "承认别人的地基", "showFrom": 0, "endFrom": 1}, {"text": "才能看清自己的大厦", "showFrom": 1, "endFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "地基", "color": "#EF4444"}, {"coreSentenceAnchor": "大厦", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={2726} durationInFrames={96}>
                <BWTextFocus content={[{"text": "尊重事实，", "startFrame": 0, "durationFrames": 31}, {"text": "才是对中国科技最大的尊重。", "startFrame": 30, "durationFrames": 65}]} totalDurationFrames={96} coreSentence={[{"text": "尊重事实", "showFrom": 0, "endFrom": 1}, {"text": "才是对中国科技最大的尊重", "showFrom": 1, "endFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "尊重事实", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/华为的5G迷思/scene_3/scene_3.mp3")} />
        </AbsoluteFill>
    );
};
