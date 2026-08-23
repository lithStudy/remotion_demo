import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWChatBubble, BWCognitiveShift, BWConceptCard, BWDosAndDonts, BWMagnifyingGlass, BWPanelGrid, BWPeerInduct, BWSplitCompare, BWTextFocus } from "../../../components";

// 剖析：5G技术的全球拼图
const SCENE_DURATION = 167 + 129 + 77 + 304 + 194 + 164 + 211 + 171 + 151 + 139 + 177 + 293 + 128 + 231 + 159 + 190 + 180 + 308 + 295 + 397 + 90 + 129 + 294 + 154 + 232;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={167}>
                <BWCenterFocus content={[{"text": "而现实是，", "startFrame": 0, "durationFrames": 28}, {"text": "5G是一整套系统工程，", "startFrame": 27, "durationFrames": 69}, {"text": "地基是全人类几十年的基础科学，", "startFrame": 96, "durationFrames": 71}]} totalDurationFrames={167} imageSrc={staticFile("images/华为的5G迷思/scene_2_1.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={167} durationInFrames={129}>
                <BWTextFocus content={[{"text": "其中参与者众多，", "startFrame": 0, "durationFrames": 44}, {"text": "你甚至不可能说清楚谁对5G的贡献最大，", "startFrame": 43, "durationFrames": 86}]} totalDurationFrames={129} coreSentence={[{"text": "你甚至不可能说清楚", "showFrom": 1, "endFrom": 1}, {"text": "谁对5G的贡献最大", "showFrom": 1, "endFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "不可能"}]} />
            </Sequence>
            <Sequence from={296} durationInFrames={77}>
                <BWTextFocus content={[{"text": "就更不存在5G是谁发明的这种说法。", "startFrame": 0, "durationFrames": 77}]} totalDurationFrames={77} coreSentence={[{"text": "就更不存在5G是谁发明的这种说法", "showFrom": 0, "endFrom": 0}]} coreSentenceAnchors={[{"coreSentenceAnchor": "不存在"}]} />
            </Sequence>
            <Sequence from={373} durationInFrames={304}>
                <BWPanelGrid content={[{"text": "所以今天不站队，", "startFrame": 0, "durationFrames": 38}, {"text": "我们只做一件事：", "startFrame": 37, "durationFrames": 40}, {"text": "把5G里最关键的几块拆开，", "startFrame": 76, "durationFrames": 67}, {"text": "看清楚哪些是基础理论，", "startFrame": 142, "durationFrames": 58}, {"text": "哪些是关键技术，", "startFrame": 200, "durationFrames": 44}, {"text": "哪些才是华为真正的贡献，", "startFrame": 244, "durationFrames": 59}]} totalDurationFrames={304} panels={[{ src: staticFile("images/华为的5G迷思/scene_2_5_img0.png"), showFrom: 3, enterEffect: "fadeIn" }, { src: staticFile("images/华为的5G迷思/scene_2_5_img1.png"), showFrom: 4, enterEffect: "slideBottom" }, { src: staticFile("images/华为的5G迷思/scene_2_5_img2.png"), showFrom: 5, enterEffect: "zoomIn" }]} anchors={[{"text": "不站队", "showFrom": 0}, {"text": "拆关键", "showFrom": 2}]} />
            </Sequence>
            <Sequence from={677} durationInFrames={194}>
                <BWCenterFocus content={[{"text": "也看清楚一个更容易被忽略的事实：", "startFrame": 0, "durationFrames": 81}, {"text": "就算只看中国，", "startFrame": 80, "durationFrames": 41}, {"text": "5G也不只是华为一家有贡献。", "startFrame": 121, "durationFrames": 73}]} totalDurationFrames={194} imageSrc={staticFile("images/华为的5G迷思/scene_2_6.png")} enterEffect="fadeIn" anchors={[{"text": "被忽略的事实", "showFrom": 0, "color": "#EF4444", "anim": "popIn", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={871} durationInFrames={164}>
                <BWCognitiveShift content={[{"text": "先说一句最基本的：", "startFrame": 0, "durationFrames": 48}, {"text": "5G不是一个单点发明，", "startFrame": 48, "durationFrames": 64}, {"text": "而是“一整套”通信系统。", "startFrame": 111, "durationFrames": 53}]} totalDurationFrames={164} notText={"单点发明"} butText={"一整套通信系统"} butSrc={staticFile("images/华为的5G迷思/scene_2_7.png")} notContentIndex={1} butContentIndex={2} anchors={[]} />
            </Sequence>
            <Sequence from={1035} durationInFrames={211}>
                <BWCognitiveShift content={[{"text": "所以你不能问“5G是谁发明的”，", "startFrame": 0, "durationFrames": 66}, {"text": "这个问题本身就错了。", "startFrame": 65, "durationFrames": 45}, {"text": "你得问：", "startFrame": 110, "durationFrames": 17}, {"text": "它背后的关键技术，", "startFrame": 126, "durationFrames": 41}, {"text": "分别从哪里来？", "startFrame": 166, "durationFrames": 44}]} totalDurationFrames={211} notText={"5G是谁发明的"} butText={"关键技术从哪来"} butSrc={staticFile("images/华为的5G迷思/scene_2_8.png")} notContentIndex={0} butContentIndex={2} anchors={[]} />
            </Sequence>
            <Sequence from={1246} durationInFrames={171}>
                <BWConceptCard content={[{"text": "首先说大规模天线阵列(Massive MIMO)。", "startFrame": 0, "durationFrames": 95}, {"text": "它是5G容量提升的关键引擎之一。", "startFrame": 94, "durationFrames": 77}]} totalDurationFrames={171} imageSrc={staticFile("images/华为的5G迷思/scene_2_9.png")} conceptName={"Massive MIMO"} anchors={[]} />
            </Sequence>
            <Sequence from={1417} durationInFrames={151}>
                <BWMagnifyingGlass content={[{"text": "这东西是谁奠基的？", "startFrame": 0, "durationFrames": 44}, {"text": "是前美国贝尔实验室的研究员Thomas Marzetta。", "startFrame": 43, "durationFrames": 107}]} totalDurationFrames={151} anchors={[{"text": "Thomas Marzetta", "showFrom": 1, "color": "#000000", "anim": "popIn", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={1568} durationInFrames={139}>
                <BWTextFocus content={[{"text": "没有这类理论和工程路径，", "startFrame": 0, "durationFrames": 66}, {"text": "5G的高速率根本无从谈起。", "startFrame": 65, "durationFrames": 74}]} totalDurationFrames={139} coreSentence={[{"text": "没有这类理论和工程路径", "showFrom": 0, "endFrom": 1}, {"text": "5G的高速率根本无从谈起", "showFrom": 1, "endFrom": 1}]} coreSentenceAnchors={["理论"]} />
            </Sequence>
            <Sequence from={1707} durationInFrames={177}>
                <BWConceptCard content={[{"text": "再说信道编码，", "startFrame": 0, "durationFrames": 36}, {"text": "他是将无线电波尽可能准确地还原为原始信息的关键技术。", "startFrame": 36, "durationFrames": 141}]} totalDurationFrames={177} imageSrc={staticFile("images/华为的5G迷思/scene_2_12.png")} conceptName={"信道编码"} anchors={[]} />
            </Sequence>
            <Sequence from={1884} durationInFrames={293}>
                <BWSplitCompare content={[{"text": "这东西分长码和短码。", "startFrame": 0, "durationFrames": 59}, {"text": "长码，", "startFrame": 58, "durationFrames": 19}, {"text": "是美国麻省理工学院在60年代就提出来的理论，", "startFrame": 77, "durationFrames": 92}, {"text": "高通是核心推动者。", "startFrame": 169, "durationFrames": 46}, {"text": "短码，", "startFrame": 215, "durationFrames": 26}, {"text": "才是华为拿下的标准。", "startFrame": 240, "durationFrames": 53}]} totalDurationFrames={293} leftSrc={staticFile("images/华为的5G迷思/scene_2_13_left.png")} rightSrc={staticFile("images/华为的5G迷思/scene_2_13_right.png")} leftLabel={"长码-高通"} rightLabel={"短码-华为"} leftShowFrom={1} rightShowFrom={4} anchors={[]} />
            </Sequence>
            <Sequence from={2177} durationInFrames={128}>
                <BWChatBubble content={[{"text": "这个时候有人可能要高潮了：", "startFrame": 0, "durationFrames": 68}, {"text": "这么关键的发明，", "startFrame": 67, "durationFrames": 36}, {"text": "怎么不牛逼？", "startFrame": 103, "durationFrames": 24}]} totalDurationFrames={128} bubbles={[{ bubbleText: "这么关键的发明，怎么不牛逼？", showFrom: 0, align: "left" }]} anchors={[]} />
            </Sequence>
            <Sequence from={2305} durationInFrames={231}>
                <BWCognitiveShift content={[{"text": "不好意思，", "startFrame": 0, "durationFrames": 18}, {"text": "这个标准的核心算法Polar,", "startFrame": 17, "durationFrames": 59}, {"text": "不是华为发明的，", "startFrame": 76, "durationFrames": 35}, {"text": "而是土耳其大学的教授Erdal Arıkan在2008年提出的。", "startFrame": 111, "durationFrames": 120}]} totalDurationFrames={231} notText={"华为发明的"} butText={"土耳其教授提出"} butSrc={staticFile("images/华为的5G迷思/scene_2_15.png")} notContentIndex={2} butContentIndex={3} anchors={[]} />
            </Sequence>
            <Sequence from={2536} durationInFrames={159}>
                <BWCenterFocus content={[{"text": "华为只是把原本停留在论文里的数学公式，", "startFrame": 0, "durationFrames": 100}, {"text": "实现到了工业级的芯片里。", "startFrame": 99, "durationFrames": 60}]} totalDurationFrames={159} imageSrc={staticFile("images/华为的5G迷思/scene_2_16.png")} enterEffect="fadeIn" anchors={[{"text": "工业级的芯片", "showFrom": 1, "color": "#000000", "anim": "popIn", "audioEffect": null}]} />
            </Sequence>
            <Sequence from={2695} durationInFrames={190}>
                <BWDosAndDonts content={[{"text": "这种工程变现能力，", "startFrame": 0, "durationFrames": 44}, {"text": "确实是华为的厉害之处，", "startFrame": 43, "durationFrames": 54}, {"text": "但却不能说是华为“发明”了短码协议。", "startFrame": 97, "durationFrames": 93}]} totalDurationFrames={190} left={{label: "✅ 正视工程变现", src: staticFile("images/华为的5G迷思/scene_2_17_left.png"), showFrom: 0 }} right={{label: "❌ 别说发明了短码", src: staticFile("images/华为的5G迷思/scene_2_17_right.png"), showFrom: 2 }} />
            </Sequence>
            <Sequence from={2885} durationInFrames={180}>
                <BWConceptCard content={[{"text": "再说毫米波。", "startFrame": 0, "durationFrames": 36}, {"text": "它给5G带来了更宽的频谱，", "startFrame": 36, "durationFrames": 66}, {"text": "也带来了穿墙差、", "startFrame": 101, "durationFrames": 39}, {"text": "覆盖短的问题。", "startFrame": 139, "durationFrames": 40}]} totalDurationFrames={180} imageSrc={staticFile("images/华为的5G迷思/scene_2_24.png")} conceptName={"毫米波"} anchors={[]} />
            </Sequence>
            <Sequence from={3065} durationInFrames={308}>
                <BWCenterFocus content={[{"text": "为了克服这些问题，", "startFrame": 0, "durationFrames": 39}, {"text": "全球通信界如美国的NYU Wireless团队，", "startFrame": 38, "durationFrames": 100}, {"text": "进行了艰苦的长期研究。", "startFrame": 137, "durationFrames": 58}, {"text": "华为只是基于这些成果，", "startFrame": 194, "durationFrames": 52}, {"text": "继续做了工程推进的一部分工作。", "startFrame": 245, "durationFrames": 62}]} totalDurationFrames={308} imageSrc={staticFile("images/华为的5G迷思/scene_2_25.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={3373} durationInFrames={295}>
                <BWPanelGrid content={[{"text": "再往下讲，", "startFrame": 0, "durationFrames": 24}, {"text": "还有波束赋形、", "startFrame": 24, "durationFrames": 42}, {"text": "网络切片、", "startFrame": 65, "durationFrames": 32}, {"text": "边缘计算、", "startFrame": 97, "durationFrames": 31}, {"text": "载波聚合、", "startFrame": 127, "durationFrames": 32}, {"text": "低时延协议、", "startFrame": 159, "durationFrames": 33}, {"text": "核心网虚拟化，", "startFrame": 192, "durationFrames": 39}, {"text": "一层套一层，", "startFrame": 230, "durationFrames": 33}, {"text": "一环扣一环。", "startFrame": 262, "durationFrames": 32}]} totalDurationFrames={295} panels={[{ src: staticFile("images/华为的5G迷思/scene_2_27_img0.png"), showFrom: 1, enterEffect: "fadeIn" }, { src: staticFile("images/华为的5G迷思/scene_2_27_img1.png"), showFrom: 2, enterEffect: "slideBottom" }, { src: staticFile("images/华为的5G迷思/scene_2_27_img2.png"), showFrom: 3, enterEffect: "zoomIn" }, { src: staticFile("images/华为的5G迷思/scene_2_27_img3.png"), showFrom: 4, enterEffect: "slideLeft" }, { src: staticFile("images/华为的5G迷思/scene_2_27_img4.png"), showFrom: 5, enterEffect: "fadeIn" }, { src: staticFile("images/华为的5G迷思/scene_2_27_img5.png"), showFrom: 6, enterEffect: "breathe" }]} anchors={[{"text": "一层套一层", "showFrom": 7}, {"text": "一环扣一环", "showFrom": 8}]} />
            </Sequence>
            <Sequence from={3668} durationInFrames={397}>
                <BWCognitiveShift content={[{"text": "篇幅有限，这里不再继续堆名词了，", "startFrame": 0, "durationFrames": 79}, {"text": "你只要看明白一件事：", "startFrame": 78, "durationFrames": 45}, {"text": "5G不是一个天才灵光一闪的发明，", "startFrame": 123, "durationFrames": 84}, {"text": "而是一代代科学家、工程师和公司，", "startFrame": 207, "durationFrames": 77}, {"text": "在同一套通信大厦上不断添砖加瓦才得到的成果。", "startFrame": 283, "durationFrames": 114}]} totalDurationFrames={397} notText={"天才灵光一闪的发明"} butText={"一代代科学家工程师和公司"} butSrc={staticFile("images/华为的5G迷思/scene_2_28.png")} notContentIndex={2} butContentIndex={3} anchors={[]} />
            </Sequence>
            <Sequence from={4065} durationInFrames={90}>
                <BWCognitiveShift content={[{"text": "而且就算把视角收回中国，", "startFrame": 0, "durationFrames": 54}, {"text": "也不是只有华为。", "startFrame": 53, "durationFrames": 37}]} totalDurationFrames={90} notText={"只有华为"} butText={"全产业链共建"} butSrc={staticFile("images/华为的5G迷思/scene_2_29.png")} notContentIndex={1} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Sequence from={4155} durationInFrames={129}>
                <BWCenterFocus content={[{"text": "中兴通讯同样是全球5G设备和标准里的重要玩家，", "startFrame": 0, "durationFrames": 129}]} totalDurationFrames={129} imageSrc={staticFile("images/华为的5G迷思/scene_2_30.png")} enterEffect="fadeIn" anchors={[{"text": "中兴通讯", "showFrom": 0, "color": "#000000", "anim": "popIn", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={4284} durationInFrames={294}>
                <BWPeerInduct content={[{"text": "中国移动、", "startFrame": 0, "durationFrames": 27}, {"text": "中国电信、", "startFrame": 26, "durationFrames": 28}, {"text": "中国联通这些运营商，", "startFrame": 53, "durationFrames": 54}, {"text": "同样在负责把标准变成真实网络，", "startFrame": 106, "durationFrames": 90}, {"text": "负责组网、测试、部署和行业应用。", "startFrame": 196, "durationFrames": 98}]} totalDurationFrames={294} premises={[{ imageSrc: staticFile("images/华为的5G迷思/scene_2_31_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { imageSrc: staticFile("images/华为的5G迷思/scene_2_31_img1.png"), showFrom: 1, enterEffect: "slideBottom" }, { imageSrc: staticFile("images/华为的5G迷思/scene_2_31_img2.png"), showFrom: 2, enterEffect: "zoomIn" }]} conclusion={{ imageSrc: staticFile("images/华为的5G迷思/scene_2_31.png"), showFrom: 3, enterEffect: "zoomIn", tone: "calm" }} anchors={[{"text": "运营商", "showFrom": 2}, {"text": "深度参与", "showFrom": 4, "color": "red"}]} />
            </Sequence>
            <Sequence from={4578} durationInFrames={154}>
                <BWPeerInduct content={[{"text": "中国信科、", "startFrame": 0, "durationFrames": 27}, {"text": "大唐这些公司，", "startFrame": 26, "durationFrames": 35}, {"text": "也在通信标准和产业演进里长期参与。", "startFrame": 61, "durationFrames": 93}]} totalDurationFrames={154} premises={[{ imageSrc: staticFile("images/华为的5G迷思/scene_2_32_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { imageSrc: staticFile("images/华为的5G迷思/scene_2_32_img1.png"), showFrom: 1, enterEffect: "slideBottom" }]} conclusion={{ imageSrc: staticFile("images/华为的5G迷思/scene_2_32.png"), showFrom: 2, enterEffect: "zoomIn", tone: "calm" }} anchors={[]} />
            </Sequence>
            <Sequence from={4732} durationInFrames={232}>
                <BWCognitiveShift content={[{"text": "换句话说，", "startFrame": 0, "durationFrames": 31}, {"text": "中国5G的进步，", "startFrame": 30, "durationFrames": 46}, {"text": "也是一整个产业链一起往前推出来的，", "startFrame": 76, "durationFrames": 79}, {"text": "不是某一家公司单枪匹马打下来的。", "startFrame": 154, "durationFrames": 77}]} totalDurationFrames={232} notText={"某一家公司单枪匹马"} butText={"全产业链共同推进"} butSrc={staticFile("images/华为的5G迷思/scene_2_33.png")} notContentIndex={3} butContentIndex={2} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/华为的5G迷思/scene_2/scene_2.mp3")} />
        </AbsoluteFill>
    );
};
