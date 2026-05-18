import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift, BWDosAndDonts, BWKpiHero, BWMagnifyingGlass, BWTextFocus } from "../../../components";

// 剖析·人性与商业骗局
const SCENE_DURATION = 101 + 107 + 192 + 148 + 124 + 154 + 127 + 75 + 155 + 127 + 96 + 200 + 144 + 168 + 188 + 129 + 132 + 95 + 252 + 124 + 132 + 236;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={101}>
                <BWMagnifyingGlass content={[{"text": "这套逻辑里，", "startFrame": 0, "durationFrames": 28}, {"text": "漏掉了最底层的东西———", "startFrame": 27, "durationFrames": 51}, {"text": "人性。", "startFrame": 77, "durationFrames": 23}]} totalDurationFrames={101} anchors={[{"text": "人性", "showFrom": 3, "color": "#000000", "anim": "popIn", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={101} durationInFrames={107}>
                <BWTextFocus content={[{"text": "人性是趋利避害的，", "startFrame": 0, "durationFrames": 48}, {"text": "这是刻在基因里的底层代码。", "startFrame": 48, "durationFrames": 59}]} totalDurationFrames={107} coreSentence={["人性是趋利避害的", "这是刻在基因里的底层代码"]} coreSentenceAnchors={[{"coreSentenceAnchor": "趋利避害", "color": "#EF4444"}, {"coreSentenceAnchor": "刻在基因", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={208} durationInFrames={192}>
                <BWCenterFocus content={[{"text": "当一个资本家发现，", "startFrame": 0, "durationFrames": 43}, {"text": "只要给产品贴上爱国标签，", "startFrame": 42, "durationFrames": 65}, {"text": "哪怕做得再烂，", "startFrame": 106, "durationFrames": 35}, {"text": "你都会为了“情怀”买单。", "startFrame": 141, "durationFrames": 51}]} totalDurationFrames={192} imageSrc={staticFile("images/国产情怀的谎言/scene_2_3.png")} enterEffect="fadeIn" anchors={[{"text": "爱国标签", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "为“情怀”买单", "showFrom": 3, "color": "#EF4444", "anim": "popIn", "audioEffect": null}]} />
            </Sequence>
            <Sequence from={400} durationInFrames={148}>
                <BWDosAndDonts content={[{"text": "你猜，", "startFrame": 0, "durationFrames": 19}, {"text": "他会拿这笔钱去玩命搞研发，", "startFrame": 18, "durationFrames": 76}, {"text": "还是会心安理得地躺着数钱？", "startFrame": 93, "durationFrames": 54}]} totalDurationFrames={148} left={{label: "搞研发", src: staticFile("images/国产情怀的谎言/scene_2_4_left.png"), showFrom: 0 }} right={{label: "躺着数钱", src: staticFile("images/国产情怀的谎言/scene_2_4_right.png"), showFrom: 2 }} />
            </Sequence>
            <Sequence from={548} durationInFrames={124}>
                <BWCognitiveShift content={[{"text": "在资本家的逻辑里，", "startFrame": 0, "durationFrames": 43}, {"text": "这不叫“支持”，", "startFrame": 42, "durationFrames": 43}, {"text": "这叫“廉价的利润”。", "startFrame": 85, "durationFrames": 39}]} totalDurationFrames={124} notText={"支持"} butText={"廉价的利润"} butSrc={staticFile("images/国产情怀的谎言/scene_2_5.png")} notContentIndex={1} butContentIndex={2} anchors={[]} />
            </Sequence>
            <Sequence from={672} durationInFrames={154}>
                <BWCenterFocus content={[{"text": "既然不需要进步就能收割你，", "startFrame": 0, "durationFrames": 64}, {"text": "他们为什么要费力不讨好地去搞什么创新？", "startFrame": 63, "durationFrames": 91}]} totalDurationFrames={154} imageSrc={staticFile("images/国产情怀的谎言/scene_2_6.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={826} durationInFrames={127}>
                <BWCenterFocus content={[{"text": "别忘了，", "startFrame": 0, "durationFrames": 21}, {"text": "那些所谓的“国产大牌”，", "startFrame": 20, "durationFrames": 50}, {"text": "本质上是人在做生意。", "startFrame": 69, "durationFrames": 57}]} totalDurationFrames={127} imageSrc={staticFile("images/国产情怀的谎言/scene_2_7.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={953} durationInFrames={75}>
                <BWCenterFocus content={[{"text": "在老板眼里，", "startFrame": 0, "durationFrames": 31}, {"text": "利润永远排第一。", "startFrame": 30, "durationFrames": 44}]} totalDurationFrames={75} imageSrc={staticFile("images/国产情怀的谎言/scene_2_8.png")} enterEffect="fadeIn" anchors={[{"text": "利润", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={1028} durationInFrames={155}>
                <BWCognitiveShift content={[{"text": "至于“为国争光”？", "startFrame": 0, "durationFrames": 40}, {"text": "那是他们赚够了钱之后，", "startFrame": 39, "durationFrames": 45}, {"text": "顺带写进 PPT 里的装饰品。", "startFrame": 84, "durationFrames": 71}]} totalDurationFrames={155} notText={"为国争光"} butText={"PPT里的装饰品"} butSrc={staticFile("images/国产情怀的谎言/scene_2_9.png")} notContentIndex={0} butContentIndex={2} anchors={[]} />
            </Sequence>
            <Sequence from={1183} durationInFrames={127}>
                <BWTextFocus content={[{"text": "这绝对不是危言耸听，", "startFrame": 0, "durationFrames": 52}, {"text": "商业史上早已写满了血淋淋的教训。", "startFrame": 51, "durationFrames": 1}, {"text": "", "startFrame": 51, "durationFrames": 76}]} totalDurationFrames={127} coreSentence={["这不是危言耸听", "商业史上早已写满了血淋淋的教训"]} coreSentenceAnchors={[{"coreSentenceAnchor": "血淋淋的教训", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={1310} durationInFrames={96}>
                <BWCenterFocus content={[{"text": "还记得2018年闹出天大笑话的“红芯浏览器”吗？", "startFrame": 0, "durationFrames": 96}]} totalDurationFrames={96} imageSrc={staticFile("images/国产情怀的谎言/scene_2_11.png")} enterEffect="zoomIn" anchors={[]} />
            </Sequence>
            <Sequence from={1406} durationInFrames={200}>
                <BWCenterFocus content={[{"text": "它高举“打破美国垄断”、", "startFrame": 0, "durationFrames": 59}, {"text": " “自主研发世界第五大浏览器内核”的爱国大旗，", "startFrame": 58, "durationFrames": 99}, {"text": "把民族情怀拉满。", "startFrame": 157, "durationFrames": 43}]} totalDurationFrames={200} imageSrc={staticFile("images/国产情怀的谎言/scene_2_12.png")} enterEffect="fadeIn" anchors={[{"text": "爱国大旗", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": null}]} />
            </Sequence>
            <Sequence from={1606} durationInFrames={144}>
                <BWKpiHero content={[{"text": "靠着这套完美的爱国叙事，", "startFrame": 0, "durationFrames": 55}, {"text": "它成功融到了高达 2.5亿元 的资金。", "startFrame": 54, "durationFrames": 90}]} totalDurationFrames={144} blocks={[{"value": 2.5, "suffix": "亿元", "label": "融资", "showFrom": 1, "decimalPlaces": 1}]} anchors={[]} />
            </Sequence>
            <Sequence from={1750} durationInFrames={168}>
                <BWCenterFocus content={[{"text": "结果呢？", "startFrame": 0, "durationFrames": 22}, {"text": "当网友扒开它的安装包时，", "startFrame": 21, "durationFrames": 56}, {"text": "发现里面竟然是原封不动的谷歌 Chrome 文件。", "startFrame": 77, "durationFrames": 91}]} totalDurationFrames={168} imageSrc={staticFile("images/国产情怀的谎言/scene_2_14.png")} enterEffect="fadeIn" anchors={[{"text": "Chrome文件", "showFrom": 2, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={1918} durationInFrames={188}>
                <BWCognitiveShift content={[{"text": "他们拿到钱去死磕技术了吗？", "startFrame": 0, "durationFrames": 67}, {"text": "没有，", "startFrame": 66, "durationFrames": 21}, {"text": "他们只是花钱请人做了一个“换壳”的表面功夫。", "startFrame": 87, "durationFrames": 100}]} totalDurationFrames={188} notText={"死磕技术"} butText={"换壳的表面功夫"} butSrc={staticFile("images/国产情怀的谎言/scene_2_15.png")} notContentIndex={1} butContentIndex={2} anchors={[]} />
            </Sequence>
            <Sequence from={2106} durationInFrames={129}>
                <BWCenterFocus content={[{"text": "再看看中国科技史上刻骨铭心的耻辱—", "startFrame": 0, "durationFrames": 86}, {"text": "“汉芯一号”事件。", "startFrame": 85, "durationFrames": 44}]} totalDurationFrames={129} imageSrc={staticFile("images/国产情怀的谎言/scene_2_16.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={2235} durationInFrames={132}>
                <BWCenterFocus content={[{"text": "它打着“填补国内芯片空白”、", "startFrame": 0, "durationFrames": 68}, {"text": "“让国人扬眉吐气”的爱国旗号，", "startFrame": 67, "durationFrames": 65}]} totalDurationFrames={132} imageSrc={staticFile("images/国产情怀的谎言/scene_2_17.png")} enterEffect="zoomIn" anchors={[{"text": "爱国旗号", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={2367} durationInFrames={95}>
                <BWKpiHero content={[{"text": "骗取了高达 1.1亿元 的科研经费。", "startFrame": 0, "durationFrames": 95}]} totalDurationFrames={95} value={1.1} suffix={"亿元"} label={"科研经费"} decimalPlaces={1} anchors={[]} />
            </Sequence>
            <Sequence from={2462} durationInFrames={252}>
                <BWCognitiveShift content={[{"text": "而它所谓的“硬核研发”，", "startFrame": 0, "durationFrames": 50}, {"text": "不过是买来美国的摩托罗拉芯片，", "startFrame": 49, "durationFrames": 74}, {"text": "雇人拿砂纸把原厂 Logo 磨掉，", "startFrame": 122, "durationFrames": 79}, {"text": "再印上“汉芯”两个字！", "startFrame": 200, "durationFrames": 51}]} totalDurationFrames={252} notText={"硬核研发"} butText={"换标造假"} butSrc={staticFile("images/国产情怀的谎言/scene_2_19.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Sequence from={2714} durationInFrames={124}>
                <BWCenterFocus content={[{"text": "你以为你给“情怀”花的钱，", "startFrame": 0, "durationFrames": 52}, {"text": "变成了他们实验室里的研发资金？", "startFrame": 51, "durationFrames": 72}]} totalDurationFrames={124} imageSrc={staticFile("images/国产情怀的谎言/scene_2_20.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={2838} durationInFrames={132}>
                <BWTextFocus content={[{"text": "不，", "startFrame": 0, "durationFrames": 14}, {"text": "你的情怀，", "startFrame": 13, "durationFrames": 30}, {"text": "往往只变成了投机者账本上的暴利。", "startFrame": 42, "durationFrames": 90}]} totalDurationFrames={132} coreSentence={["你的情怀", "往往只变成了投机者账本上的暴利"]} coreSentenceAnchors={[{"coreSentenceAnchor": "投机者", "color": "#EF4444"}, {"coreSentenceAnchor": "暴利", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={2970} durationInFrames={236}>
                <BWCognitiveShift content={[{"text": "如果你无条件支持这些“烂”产品，", "startFrame": 0, "durationFrames": 66}, {"text": "你换来的绝不是国产的强大，", "startFrame": 65, "durationFrames": 62}, {"text": "而是资本的傲慢，", "startFrame": 126, "durationFrames": 42}, {"text": "和国产竞争力的集体退化。", "startFrame": 168, "durationFrames": 68}]} totalDurationFrames={236} notText={"国产的强大"} butText={"资本傲慢，竞争力退化"} butSrc={staticFile("images/国产情怀的谎言/scene_2_22.png")} notContentIndex={1} butContentIndex={2} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/国产情怀的谎言/scene_2/scene_2.mp3")} />
        </AbsoluteFill>
    );
};
