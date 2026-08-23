import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift, BWDosAndDonts, BWKpiHero, BWMagnifyingGlass, BWTextFocus } from "../../../components";

// 剖析·人性与商业骗局
const SCENE_DURATION = 105 + 105 + 182 + 139 + 118 + 134 + 118 + 88 + 151 + 126 + 98 + 203 + 139 + 192 + 159 + 116 + 144 + 89 + 251 + 123 + 121 + 215;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={105}>
                <BWMagnifyingGlass content={[{"text": "这套逻辑里，", "startFrame": 0, "durationFrames": 29}, {"text": "漏掉了最底层的东西———", "startFrame": 28, "durationFrames": 48}, {"text": "人性。", "startFrame": 76, "durationFrames": 29}]} totalDurationFrames={105} anchors={[{"text": "人性", "showFrom": 3, "color": "#000000", "anim": "popIn", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={105} durationInFrames={105}>
                <BWTextFocus content={[{"text": "人性是趋利避害的，", "startFrame": 0, "durationFrames": 49}, {"text": "这是刻在基因里的底层代码。", "startFrame": 48, "durationFrames": 57}]} totalDurationFrames={105} coreSentence={["人性是趋利避害的", "这是刻在基因里的底层代码"]} coreSentenceAnchors={[{"coreSentenceAnchor": "趋利避害", "color": "#EF4444"}, {"coreSentenceAnchor": "刻在基因", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={210} durationInFrames={182}>
                <BWCenterFocus content={[{"text": "当一个资本家发现，", "startFrame": 0, "durationFrames": 40}, {"text": "只要给产品贴上爱国标签，", "startFrame": 39, "durationFrames": 63}, {"text": "哪怕做得再烂，", "startFrame": 101, "durationFrames": 39}, {"text": "你都会为了“情怀”买单。", "startFrame": 139, "durationFrames": 43}]} totalDurationFrames={182} imageSrc={staticFile("images/国产情怀的谎言/scene_2_3.png")} enterEffect="fadeIn" anchors={[{"text": "爱国标签", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "为“情怀”买单", "showFrom": 3, "color": "#EF4444", "anim": "popIn", "audioEffect": null}]} />
            </Sequence>
            <Sequence from={392} durationInFrames={139}>
                <BWDosAndDonts content={[{"text": "你猜，", "startFrame": 0, "durationFrames": 16}, {"text": "他会拿这笔钱去玩命搞研发，", "startFrame": 15, "durationFrames": 62}, {"text": "还是会心安理得地躺着数钱？", "startFrame": 76, "durationFrames": 62}]} totalDurationFrames={139} left={{label: "搞研发", src: staticFile("images/国产情怀的谎言/scene_2_4_left.png"), showFrom: 0 }} right={{label: "躺着数钱", src: staticFile("images/国产情怀的谎言/scene_2_4_right.png"), showFrom: 2 }} />
            </Sequence>
            <Sequence from={531} durationInFrames={118}>
                <BWCognitiveShift content={[{"text": "在资本家的逻辑里，", "startFrame": 0, "durationFrames": 42}, {"text": "这不叫“支持”，", "startFrame": 41, "durationFrames": 35}, {"text": "这叫“廉价的利润”。", "startFrame": 76, "durationFrames": 42}]} totalDurationFrames={118} notText={"支持"} butText={"廉价的利润"} butSrc={staticFile("images/国产情怀的谎言/scene_2_5.png")} notContentIndex={1} butContentIndex={2} anchors={[]} />
            </Sequence>
            <Sequence from={649} durationInFrames={134}>
                <BWCenterFocus content={[{"text": "既然不需要进步就能收割你，", "startFrame": 0, "durationFrames": 59}, {"text": "他们为什么要费力不讨好地去搞什么创新？", "startFrame": 58, "durationFrames": 75}]} totalDurationFrames={134} imageSrc={staticFile("images/国产情怀的谎言/scene_2_6.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={783} durationInFrames={118}>
                <BWCenterFocus content={[{"text": "别忘了，", "startFrame": 0, "durationFrames": 22}, {"text": "那些所谓的“国产大牌”，", "startFrame": 21, "durationFrames": 50}, {"text": "本质上是人在做生意。", "startFrame": 70, "durationFrames": 47}]} totalDurationFrames={118} imageSrc={staticFile("images/国产情怀的谎言/scene_2_7.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={901} durationInFrames={88}>
                <BWCenterFocus content={[{"text": "在老板眼里，", "startFrame": 0, "durationFrames": 36}, {"text": "利润永远排第一。", "startFrame": 36, "durationFrames": 52}]} totalDurationFrames={88} imageSrc={staticFile("images/国产情怀的谎言/scene_2_8.png")} enterEffect="fadeIn" anchors={[{"text": "利润", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={989} durationInFrames={151}>
                <BWCognitiveShift content={[{"text": "至于“为国争光”？", "startFrame": 0, "durationFrames": 36}, {"text": "那是他们赚够了钱之后，", "startFrame": 35, "durationFrames": 54}, {"text": "顺带写进 PPT 里的装饰品。", "startFrame": 89, "durationFrames": 62}]} totalDurationFrames={151} notText={"为国争光"} butText={"PPT里的装饰品"} butSrc={staticFile("images/国产情怀的谎言/scene_2_9.png")} notContentIndex={0} butContentIndex={2} anchors={[]} />
            </Sequence>
            <Sequence from={1140} durationInFrames={126}>
                <BWTextFocus content={[{"text": "这绝对不是危言耸听，", "startFrame": 0, "durationFrames": 51}, {"text": "商业史上早已写满了血淋淋的教训。", "startFrame": 50, "durationFrames": 1}, {"text": "", "startFrame": 50, "durationFrames": 76}]} totalDurationFrames={126} coreSentence={["这不是危言耸听", "商业史上早已写满了血淋淋的教训"]} coreSentenceAnchors={[{"coreSentenceAnchor": "血淋淋的教训", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={1266} durationInFrames={98}>
                <BWCenterFocus content={[{"text": "还记得2018年闹出天大笑话的“红芯浏览器”吗？", "startFrame": 0, "durationFrames": 98}]} totalDurationFrames={98} imageSrc={staticFile("images/国产情怀的谎言/scene_2_11.png")} enterEffect="zoomIn" anchors={[]} />
            </Sequence>
            <Sequence from={1364} durationInFrames={203}>
                <BWCenterFocus content={[{"text": "它高举“打破美国垄断”、", "startFrame": 0, "durationFrames": 57}, {"text": " “自主研发世界第五大浏览器内核”的爱国大旗，", "startFrame": 56, "durationFrames": 103}, {"text": "把民族情怀拉满。", "startFrame": 159, "durationFrames": 43}]} totalDurationFrames={203} imageSrc={staticFile("images/国产情怀的谎言/scene_2_12.png")} enterEffect="fadeIn" anchors={[{"text": "爱国大旗", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": null}]} />
            </Sequence>
            <Sequence from={1567} durationInFrames={139}>
                <BWKpiHero content={[{"text": "靠着这套完美的爱国叙事，", "startFrame": 0, "durationFrames": 56}, {"text": "它成功融到了高达 2.5亿元 的资金。", "startFrame": 55, "durationFrames": 83}]} totalDurationFrames={139} blocks={[{"value": 2.5, "suffix": "亿元", "label": "融资", "showFrom": 1, "decimalPlaces": 1}]} anchors={[]} />
            </Sequence>
            <Sequence from={1706} durationInFrames={192}>
                <BWCenterFocus content={[{"text": "结果呢？", "startFrame": 0, "durationFrames": 26}, {"text": "当网友扒开它的安装包时，", "startFrame": 25, "durationFrames": 64}, {"text": "发现里面竟然是原封不动的谷歌 Chrome 文件。", "startFrame": 88, "durationFrames": 104}]} totalDurationFrames={192} imageSrc={staticFile("images/国产情怀的谎言/scene_2_14.png")} enterEffect="fadeIn" anchors={[{"text": "Chrome文件", "showFrom": 2, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={1898} durationInFrames={159}>
                <BWCognitiveShift content={[{"text": "他们拿到钱去死磕技术了吗？", "startFrame": 0, "durationFrames": 59}, {"text": "没有，", "startFrame": 58, "durationFrames": 20}, {"text": "他们只是花钱请人做了一个“换壳”的表面功夫。", "startFrame": 78, "durationFrames": 81}]} totalDurationFrames={159} notText={"死磕技术"} butText={"换壳的表面功夫"} butSrc={staticFile("images/国产情怀的谎言/scene_2_15.png")} notContentIndex={1} butContentIndex={2} anchors={[]} />
            </Sequence>
            <Sequence from={2057} durationInFrames={116}>
                <BWCenterFocus content={[{"text": "再看看中国科技史上刻骨铭心的耻辱—", "startFrame": 0, "durationFrames": 77}, {"text": "“汉芯一号”事件。", "startFrame": 76, "durationFrames": 39}]} totalDurationFrames={116} imageSrc={staticFile("images/国产情怀的谎言/scene_2_16.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={2173} durationInFrames={144}>
                <BWCenterFocus content={[{"text": "它打着“填补国内芯片空白”、", "startFrame": 0, "durationFrames": 68}, {"text": "“让国人扬眉吐气”的爱国旗号，", "startFrame": 67, "durationFrames": 77}]} totalDurationFrames={144} imageSrc={staticFile("images/国产情怀的谎言/scene_2_17.png")} enterEffect="zoomIn" anchors={[{"text": "爱国旗号", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={2317} durationInFrames={89}>
                <BWKpiHero content={[{"text": "骗取了高达 1.1亿元 的科研经费。", "startFrame": 0, "durationFrames": 89}]} totalDurationFrames={89} value={1.1} suffix={"亿元"} label={"科研经费"} decimalPlaces={1} anchors={[]} />
            </Sequence>
            <Sequence from={2406} durationInFrames={251}>
                <BWCognitiveShift content={[{"text": "而它所谓的“硬核研发”，", "startFrame": 0, "durationFrames": 48}, {"text": "不过是买来美国的摩托罗拉芯片，", "startFrame": 48, "durationFrames": 72}, {"text": "雇人拿砂纸把原厂 Logo 磨掉，", "startFrame": 120, "durationFrames": 80}, {"text": "再印上“汉芯”两个字！", "startFrame": 199, "durationFrames": 52}]} totalDurationFrames={251} notText={"硬核研发"} butText={"换标造假"} butSrc={staticFile("images/国产情怀的谎言/scene_2_19.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Sequence from={2657} durationInFrames={123}>
                <BWCenterFocus content={[{"text": "你以为你给“情怀”花的钱，", "startFrame": 0, "durationFrames": 60}, {"text": "变成了他们实验室里的研发资金？", "startFrame": 60, "durationFrames": 63}]} totalDurationFrames={123} imageSrc={staticFile("images/国产情怀的谎言/scene_2_20.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={2780} durationInFrames={121}>
                <BWTextFocus content={[{"text": "不，", "startFrame": 0, "durationFrames": 16}, {"text": "你的情怀，", "startFrame": 15, "durationFrames": 28}, {"text": "往往只变成了投机者账本上的暴利。", "startFrame": 42, "durationFrames": 78}]} totalDurationFrames={121} coreSentence={["你的情怀", "往往只变成了投机者账本上的暴利"]} coreSentenceAnchors={[{"coreSentenceAnchor": "投机者", "color": "#EF4444"}, {"coreSentenceAnchor": "暴利", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={2901} durationInFrames={215}>
                <BWCognitiveShift content={[{"text": "如果你无条件支持这些“烂”产品，", "startFrame": 0, "durationFrames": 64}, {"text": "你换来的绝不是国产的强大，", "startFrame": 63, "durationFrames": 58}, {"text": "而是资本的傲慢，", "startFrame": 121, "durationFrames": 35}, {"text": "和国产竞争力的集体退化。", "startFrame": 156, "durationFrames": 59}]} totalDurationFrames={215} notText={"国产的强大"} butText={"资本傲慢，竞争力退化"} butSrc={staticFile("images/国产情怀的谎言/scene_2_22.png")} notContentIndex={1} butContentIndex={2} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/国产情怀的谎言/scene_2/scene_2.mp3")} />
        </AbsoluteFill>
    );
};
