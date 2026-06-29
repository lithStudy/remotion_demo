import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWBeatSequence, BWCauseChain, BWCenterFocus, BWCognitiveShift, BWConceptCard, BWDataTable, BWKpiHero, BWMagnifyingGlass, BWQuoteCitation, BWSplitCompare, BWTextFocus, BWTimeline } from "../../../components";

// 剖析：概念定义与时间线真相
const SCENE_DURATION = 148 + 149 + 320 + 41 + 69 + 631 + 77 + 838 + 300 + 94 + 86 + 208 + 236 + 103 + 180 + 116 + 1772 + 113 + 38 + 120 + 246 + 154 + 237 + 65 + 156 + 230 + 733 + 104 + 176;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={148}>
                <BWCenterFocus content={[{"text": "为了防止某些智慧群体的记忆被篡改，", "startFrame": 0, "durationFrames": 71}, {"text": "我就来讲讲语言大模型的发展时间线。", "startFrame": 70, "durationFrames": 77}]} totalDurationFrames={148} imageSrc={staticFile("images/大模型先驱论/scene_2_1.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={148} durationInFrames={149}>
                <BWMagnifyingGlass content={[{"text": "大模型确实是这一两年突然崛起的技术，", "startFrame": 0, "durationFrames": 94}, {"text": "但并不是突然出现的技术。", "startFrame": 93, "durationFrames": 55}]} totalDurationFrames={149} anchors={[{"text": "突然崛起", "showFrom": 0, "color": "#000000", "anim": "spring", "audioEffect": "ping"}, {"text": "并不是突然出现", "showFrom": 1, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={297} durationInFrames={320}>
                <BWCauseChain content={[{"text": "实际上，", "startFrame": 0, "durationFrames": 22}, {"text": "任何看起来突破性的技术都是经过了长期的技术积累，", "startFrame": 21, "durationFrames": 116}, {"text": "只是正好积累到了一定的程度，", "startFrame": 137, "durationFrames": 64}, {"text": "解决了各种问题，", "startFrame": 200, "durationFrames": 41}, {"text": "然后才真正具有性价比的应用在生活中。", "startFrame": 241, "durationFrames": 79}]} totalDurationFrames={320} layout={"horizontal"} nodes={[{ label: "长期积累", imageSrc: staticFile("images/大模型先驱论/scene_2_13_img0.png"), showFrom: 1 }, { label: "量变到质变", imageSrc: staticFile("images/大模型先驱论/scene_2_13_img1.png"), showFrom: 2 }, { label: "解决问题", imageSrc: staticFile("images/大模型先驱论/scene_2_13_img2.png"), showFrom: 3 }, { label: "应用落地", imageSrc: staticFile("images/大模型先驱论/scene_2_13_img3.png"), showFrom: 4 }]} anchors={[]} />
            </Sequence>
            <Sequence from={617} durationInFrames={41}>
                <BWTextFocus content={[{"text": "大模型也是这样的。", "startFrame": 0, "durationFrames": 41}]} totalDurationFrames={41} coreSentence={[{"text": "大模型也是这样的。", "showFrom": 0}]} coreSentenceAnchors={[]} />
            </Sequence>
            <Sequence from={658} durationInFrames={69}>
                <BWConceptCard content={[{"text": "第一阶段，", "startFrame": 0, "durationFrames": 26}, {"text": "深度学习奠基。", "startFrame": 25, "durationFrames": 44}]} totalDurationFrames={69} imageSrc={staticFile("images/大模型先驱论/scene_2_15.png")} conceptName={"深度学习奠基"} anchors={[]} />
            </Sequence>
            <Sequence from={727} durationInFrames={631}>
                <BWTimeline content={[{"text": "1957年，", "startFrame": 0, "durationFrames": 32}, {"text": "Rosenblatt，", "startFrame": 31, "durationFrames": 24}, {"text": "感知机提出，", "startFrame": 55, "durationFrames": 34}, {"text": "为神经网络奠定雏形。", "startFrame": 89, "durationFrames": 54}, {"text": "1986年，", "startFrame": 142, "durationFrames": 29}, {"text": "Hinton，", "startFrame": 171, "durationFrames": 20}, {"text": "反向传播算法，", "startFrame": 190, "durationFrames": 40}, {"text": "神经网络训练成为可能。", "startFrame": 230, "durationFrames": 58}, {"text": "1997年，", "startFrame": 287, "durationFrames": 33}, {"text": "Hochreiter，", "startFrame": 320, "durationFrames": 22}, {"text": "LSTM问世，", "startFrame": 342, "durationFrames": 40}, {"text": "神经网络具备记忆能力。", "startFrame": 381, "durationFrames": 63}, {"text": "2012年，", "startFrame": 443, "durationFrames": 34}, {"text": "Hinton及团队，", "startFrame": 477, "durationFrames": 21}, {"text": "AlexNet震撼问世，", "startFrame": 498, "durationFrames": 53}, {"text": "深度学习首次大规模商业验证。", "startFrame": 550, "durationFrames": 81}]} totalDurationFrames={631} images={[{ src: staticFile("images/大模型先驱论/scene_2_16_img0.png"), enterEffect: "fadeIn", textIndex: 0 }, { src: staticFile("images/大模型先驱论/scene_2_16_img1.png"), enterEffect: "fadeIn", textIndex: 4 }, { src: staticFile("images/大模型先驱论/scene_2_16_img2.png"), enterEffect: "fadeIn", textIndex: 8 }, { src: staticFile("images/大模型先驱论/scene_2_16_img3.png"), enterEffect: "fadeIn", textIndex: 12 }]} anchors={[]} />
            </Sequence>
            <Sequence from={1358} durationInFrames={77}>
                <BWConceptCard content={[{"text": "第二阶段，", "startFrame": 0, "durationFrames": 24}, {"text": "预训练双路线。", "startFrame": 24, "durationFrames": 53}]} totalDurationFrames={77} imageSrc={staticFile("images/大模型先驱论/scene_2_17.png")} conceptName={"预训练双路线"} anchors={[]} />
            </Sequence>
            <Sequence from={1435} durationInFrames={838}>
                <BWTimeline content={[{"text": "2017年，", "startFrame": 0, "durationFrames": 32}, {"text": "Google，", "startFrame": 31, "durationFrames": 16}, {"text": "提出Transformer。", "startFrame": 46, "durationFrames": 41}, {"text": "这是所有现代大模型的基石，", "startFrame": 87, "durationFrames": 65}, {"text": "是智能化的关键。", "startFrame": 151, "durationFrames": 44}, {"text": "2018年，", "startFrame": 195, "durationFrames": 30}, {"text": "OpenAI，", "startFrame": 224, "durationFrames": 23}, {"text": "GPT-1。", "startFrame": 247, "durationFrames": 32}, {"text": "首个基于Transformer的大规模语言生成模型，", "startFrame": 279, "durationFrames": 112}, {"text": "开启了“预训练-微调”范式。", "startFrame": 390, "durationFrames": 63}, {"text": "2018年，", "startFrame": 453, "durationFrames": 29}, {"text": "Google，", "startFrame": 481, "durationFrames": 15}, {"text": "BERT。", "startFrame": 496, "durationFrames": 14}, {"text": "完全独立于GPT的另一种模型架构的尝试。", "startFrame": 509, "durationFrames": 96}, {"text": "2020年6月，", "startFrame": 604, "durationFrames": 44}, {"text": "OpenAI，", "startFrame": 648, "durationFrames": 23}, {"text": "GPT-3出现，", "startFrame": 671, "durationFrames": 44}, {"text": "大模型彻底成型，", "startFrame": 714, "durationFrames": 45}, {"text": "行业公认“现代大模型时代”的起点。", "startFrame": 759, "durationFrames": 79}]} totalDurationFrames={838} images={[{ src: staticFile("images/大模型先驱论/scene_2_18_img0.png"), enterEffect: "breathe", textIndex: 2, label: "Transformer" }, { src: staticFile("images/大模型先驱论/scene_2_18_img1.png"), enterEffect: "slideLeft", textIndex: 7, label: "GPT-1" }, { src: staticFile("images/大模型先驱论/scene_2_18_img2.png"), enterEffect: "fadeIn", textIndex: 12, label: "BERT" }, { src: staticFile("images/大模型先驱论/scene_2_18_img3.png"), enterEffect: "zoomIn", textIndex: 16, label: "GPT-3" }]} anchors={[]} />
            </Sequence>
            <Sequence from={2273} durationInFrames={300}>
                <BWCenterFocus content={[{"text": "以上两个阶段，", "startFrame": 0, "durationFrames": 35}, {"text": "从1957年开始出现大模型的基础理论，", "startFrame": 34, "durationFrames": 103}, {"text": "直到2020年的GPT-3出现，", "startFrame": 137, "durationFrames": 88}, {"text": "才是真正走完了大模型的蜕变之路。", "startFrame": 224, "durationFrames": 75}]} totalDurationFrames={300} imageSrc={staticFile("images/大模型先驱论/scene_2_19.png")} enterEffect="fadeIn" anchors={[{"text": "GPT-3", "showFrom": 2, "color": "#EF4444", "anim": "spring", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={2573} durationInFrames={94}>
                <BWTextFocus content={[{"text": "这个阶段，", "startFrame": 0, "durationFrames": 23}, {"text": "华为连大模型的概念都没摸到。", "startFrame": 22, "durationFrames": 71}]} totalDurationFrames={94} coreSentence={[{"text": "这个阶段，", "showFrom": 0}, {"text": "华为连大模型的概念都没摸到。", "showFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "华为", "color": "#EF4444"}, {"coreSentenceAnchor": "没摸到", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={2667} durationInFrames={86}>
                <BWConceptCard content={[{"text": "第三阶段，", "startFrame": 0, "durationFrames": 32}, {"text": "ChatGPT与百模大战。", "startFrame": 31, "durationFrames": 54}]} totalDurationFrames={86} imageSrc={staticFile("images/大模型先驱论/scene_2_21.png")} conceptName={"ChatGPT与百模大战"} anchors={[]} />
            </Sequence>
            <Sequence from={2753} durationInFrames={208}>
                <BWCenterFocus content={[{"text": "在GPT-3出现之后，", "startFrame": 0, "durationFrames": 51}, {"text": "国内外的业内人士终于意识到大模型的强大之处，", "startFrame": 50, "durationFrames": 116}, {"text": "纷纷开始研究。", "startFrame": 165, "durationFrames": 42}]} totalDurationFrames={208} imageSrc={staticFile("images/大模型先驱论/scene_2_22.png")} enterEffect="zoomIn" anchors={[]} />
            </Sequence>
            <Sequence from={2961} durationInFrames={236}>
                <BWCenterFocus content={[{"text": "2021年4月，", "startFrame": 0, "durationFrames": 41}, {"text": "华为所谓的盘古大模型1.0发布了，", "startFrame": 40, "durationFrames": 82}, {"text": "但是发布只是按其传统艺能嘴上喊着遥遥领先，", "startFrame": 122, "durationFrames": 114}]} totalDurationFrames={236} imageSrc={staticFile("images/大模型先驱论/scene_2_23.png")} enterEffect="fadeIn" anchors={[{"text": "遥遥领先", "showFrom": 2, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={3197} durationInFrames={103}>
                <BWSplitCompare content={[{"text": "既没有开放给普通用户体验，", "startFrame": 0, "durationFrames": 58}, {"text": "也没有相关技术报告。", "startFrame": 57, "durationFrames": 45}]} totalDurationFrames={103} leftSrc={staticFile("images/大模型先驱论/scene_2_24_left.png")} rightSrc={staticFile("images/大模型先驱论/scene_2_24_right.png")} leftLabel={"未开放"} rightLabel={"无报告"} leftShowFrom={0} rightShowFrom={1} anchors={[]} />
            </Sequence>
            <Sequence from={3300} durationInFrames={180}>
                <BWCauseChain content={[{"text": "他到底是嘴上说说，", "startFrame": 0, "durationFrames": 40}, {"text": "还是套壳，", "startFrame": 39, "durationFrames": 23}, {"text": "还是传统工业程序，", "startFrame": 62, "durationFrames": 38}, {"text": "还是真的有点东西，", "startFrame": 99, "durationFrames": 42}, {"text": "咱也没法验证。", "startFrame": 140, "durationFrames": 39}]} totalDurationFrames={180} layout={"horizontal"} nodes={[{ label: "嘴上说说", imageSrc: staticFile("images/大模型先驱论/scene_2_25_img0.png"), showFrom: 0, enterEffect: "breathe" }, { label: "只是套壳", imageSrc: staticFile("images/大模型先驱论/scene_2_25_img1.png"), showFrom: 1, enterEffect: "slideBottom" }, { label: "老式程序", imageSrc: staticFile("images/大模型先驱论/scene_2_25_img2.png"), showFrom: 2, enterEffect: "slideBottom" }, { label: "或有真料", imageSrc: staticFile("images/大模型先驱论/scene_2_25_img3.png"), showFrom: 3, enterEffect: "slideBottom" }]} anchors={[{"text": "没法验证", "showFrom": 4, "anim": "highlight", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={3480} durationInFrames={116}>
                <BWMagnifyingGlass content={[{"text": "但是从后来的表现来看，", "startFrame": 0, "durationFrames": 46}, {"text": "我是不认为他有相关技术积累的。", "startFrame": 45, "durationFrames": 70}]} totalDurationFrames={116} anchors={[{"text": "无技术积累", "showFrom": 1, "color": "#EF4444", "anim": "popIn", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={3596} durationInFrames={1772}>
                <BWTimeline content={[{"text": "2022年11月，", "startFrame": 0, "durationFrames": 45}, {"text": "OpenAI，", "startFrame": 44, "durationFrames": 24}, {"text": "ChatGPT开放给所有用户使用，", "startFrame": 68, "durationFrames": 74}, {"text": "第一次引爆普通用户对AI的期望。", "startFrame": 141, "durationFrames": 74}, {"text": "2023年2月，", "startFrame": 215, "durationFrames": 36}, {"text": "Meta，", "startFrame": 251, "durationFrames": 12}, {"text": "Llama开源，", "startFrame": 263, "durationFrames": 40}, {"text": "这是第一个真正开源的大模型，", "startFrame": 302, "durationFrames": 60}, {"text": "国内后来如雨后般春笋的各种大模型，", "startFrame": 362, "durationFrames": 87}, {"text": "绝大部分都是基于这个模型二次开发的，", "startFrame": 448, "durationFrames": 88}, {"text": "而百分之一百的模型都参考了其底层架构设计方案。", "startFrame": 535, "durationFrames": 120}, {"text": "2023年3月，", "startFrame": 655, "durationFrames": 41}, {"text": "百度，", "startFrame": 695, "durationFrames": 17}, {"text": "文心一言开放使用，", "startFrame": 712, "durationFrames": 47}, {"text": "这是中国第一个真正能被部分用户体验到的模型，", "startFrame": 759, "durationFrames": 101}, {"text": "虽然体验上很差，", "startFrame": 859, "durationFrames": 40}, {"text": "但也算是真正有证据证明其先驱的地位了。", "startFrame": 898, "durationFrames": 87}, {"text": "2023年3月：", "startFrame": 985, "durationFrames": 42}, {"text": "智谱AI · ChatGLM 闪亮登场，", "startFrame": 1027, "durationFrames": 84}, {"text": "这是国内第一个真正引爆开源社区、", "startFrame": 1111, "durationFrames": 87}, {"text": "能让开发者在单张消费级显卡上跑起来的中文对话模型", "startFrame": 1197, "durationFrames": 137}, {"text": "2023年4月，", "startFrame": 1333, "durationFrames": 44}, {"text": "阿里千问模型发布，", "startFrame": 1377, "durationFrames": 54}, {"text": "且可以被普通用户通过内测邀请使用。", "startFrame": 1430, "durationFrames": 86}, {"text": "2023年7月，", "startFrame": 1516, "durationFrames": 42}, {"text": "华为发布盘古3.0，", "startFrame": 1558, "durationFrames": 62}, {"text": "但是依然，", "startFrame": 1619, "durationFrames": 26}, {"text": "这又是一个只存在于ppt，", "startFrame": 1644, "durationFrames": 58}, {"text": "没有被普通用户使用过的模型。", "startFrame": 1702, "durationFrames": 70}]} totalDurationFrames={1772} images={[{ src: staticFile("images/大模型先驱论/scene_2_27_img0.png"), enterEffect: "fadeIn", textIndex: 0, label: "ChatGPT" }, { src: staticFile("images/大模型先驱论/scene_2_27_img1.png"), enterEffect: "fadeIn", textIndex: 4, label: "Llama" }, { src: staticFile("images/大模型先驱论/scene_2_27_img2.png"), enterEffect: "fadeIn", textIndex: 11, label: "文心一言" }, { src: staticFile("images/大模型先驱论/scene_2_27_img3.png"), enterEffect: "zoomIn", textIndex: 17, label: "ChatGLM" }, { src: staticFile("images/大模型先驱论/scene_2_27_img4.png"), enterEffect: "fadeIn", textIndex: 22, label: "阿里千问" }]} anchors={[]} />
            </Sequence>
            <Sequence from={5368} durationInFrames={113}>
                <BWCenterFocus content={[{"text": "后面的模型就太多了，", "startFrame": 0, "durationFrames": 45}, {"text": "可谓是一周一迭代，", "startFrame": 44, "durationFrames": 41}, {"text": "一月一版本。", "startFrame": 85, "durationFrames": 28}]} totalDurationFrames={113} imageSrc={staticFile("images/大模型先驱论/scene_2_28.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={5481} durationInFrames={38}>
                <BWTextFocus content={[{"text": "但是高潮来了。", "startFrame": 0, "durationFrames": 38}]} totalDurationFrames={38} coreSentence={["但是高潮来了。"]} coreSentenceAnchors={[{"coreSentenceAnchor": "高潮", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={5519} durationInFrames={120}>
                <BWCenterFocus content={[{"text": "2025年6月30，", "startFrame": 0, "durationFrames": 47}, {"text": "华为宣布开源盘古两个大模型。", "startFrame": 46, "durationFrames": 73}]} totalDurationFrames={120} imageSrc={staticFile("images/大模型先驱论/scene_2_30.png")} enterEffect="fadeIn" anchors={[{"text": "盘古", "showFrom": 1, "color": "#EF4444", "anim": "popIn", "audioEffect": null}]} />
            </Sequence>
            <Sequence from={5639} durationInFrames={246}>
                <BWKpiHero content={[{"text": "但是7月4日，", "startFrame": 0, "durationFrames": 33}, {"text": "被通过大模型指纹技术,", "startFrame": 32, "durationFrames": 62}, {"text": "分析出与千问2.5的14B模型相似度高达0.927%，", "startFrame": 93, "durationFrames": 152}]} totalDurationFrames={246} value={0.927} suffix={"%"} label={"与千问相似度"} decimalPlaces={3} anchors={[]} />
            </Sequence>
            <Sequence from={5885} durationInFrames={154}>
                <BWCenterFocus content={[{"text": "有开发者在其开源代码中，", "startFrame": 0, "durationFrames": 67}, {"text": "看到了带有阿里版权声明或残留的字样。", "startFrame": 66, "durationFrames": 88}]} totalDurationFrames={154} imageSrc={staticFile("images/大模型先驱论/scene_2_32.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={6039} durationInFrames={237}>
                <BWQuoteCitation content={[{"text": "同时网络上疯传疑似内部员工长文《盘古之殇》,", "startFrame": 0, "durationFrames": 118}, {"text": "直指其“套壳换血”。", "startFrame": 117, "durationFrames": 49}, {"text": "这也算是某家公司的传统艺能了。", "startFrame": 166, "durationFrames": 70}]} totalDurationFrames={237} quoteSource={"《盘古之殇》"} quoteDisplayText={"套壳换血"} anchors={[]} />
            </Sequence>
            <Sequence from={6276} durationInFrames={65}>
                <BWMagnifyingGlass content={[{"text": "说回来，", "startFrame": 0, "durationFrames": 22}, {"text": "什么叫先驱者？", "startFrame": 21, "durationFrames": 43}]} totalDurationFrames={65} anchors={[{"text": "先驱者", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={6341} durationInFrames={156}>
                <BWBeatSequence content={[{"text": "不是嘴上说。", "startFrame": 0, "durationFrames": 29}, {"text": "不是PPT上写。", "startFrame": 28, "durationFrames": 56}, {"text": "不是发布会上喊几声遥遥领先。", "startFrame": 84, "durationFrames": 72}]} totalDurationFrames={156} stages={[{ imageSrc: staticFile("images/大模型先驱论/scene_2_37_img0.png"), enterEffect: "breathe", tone: "calm" }, { imageSrc: staticFile("images/大模型先驱论/scene_2_37_img1.png"), enterEffect: "slideBottom", tone: "alert" }, { imageSrc: staticFile("images/大模型先驱论/scene_2_37_img2.png"), enterEffect: "zoomIn", tone: "alert" }]} anchors={[]} />
            </Sequence>
            <Sequence from={6497} durationInFrames={230}>
                <BWBeatSequence content={[{"text": "先驱者，", "startFrame": 0, "durationFrames": 26}, {"text": "是第一个把路走通的人。", "startFrame": 25, "durationFrames": 53}, {"text": "第一个让人用起来的人。", "startFrame": 77, "durationFrames": 43}, {"text": "第一个把代码开源，", "startFrame": 120, "durationFrames": 48}, {"text": "让别人站在你肩膀上的人。", "startFrame": 168, "durationFrames": 62}]} totalDurationFrames={230} stages={[{ imageSrc: staticFile("images/大模型先驱论/scene_2_38_img0.png"), enterEffect: "breathe", tone: "calm", showFrom: 0 }, { imageSrc: staticFile("images/大模型先驱论/scene_2_38_img1.png"), enterEffect: "slideBottom", tone: "alert", showFrom: 1 }, { imageSrc: staticFile("images/大模型先驱论/scene_2_38_img2.png"), enterEffect: "slideBottom", tone: "alert", showFrom: 2 }, { imageSrc: staticFile("images/大模型先驱论/scene_2_38_img3.png"), enterEffect: "zoomIn", tone: "alert", showFrom: 3 }]} anchors={[]} />
            </Sequence>
            <Sequence from={6727} durationInFrames={733}>
                <BWDataTable content={[{"text": "Transformer，2017年来自于Google，所有现代大模型的基石。", "startFrame": 0, "durationFrames": 135}, {"text": "GPT-3，2020年来自于OpenAI，大模型真正成型。", "startFrame": 134, "durationFrames": 136}, {"text": "ChatGPT，2022年来自于OpenAI，第一次让普通人摸到AI。", "startFrame": 269, "durationFrames": 136}, {"text": "Llama，2023年来自于Meta，开源，国内百模大战的奠基者。", "startFrame": 405, "durationFrames": 140}, {"text": "DeepseekR1，2024年来自于深度求索，深度思考的创新者。", "startFrame": 544, "durationFrames": 138}, {"text": "这些才叫先驱。", "startFrame": 681, "durationFrames": 51}]} totalDurationFrames={733} title={"真正的先驱"} columns={["模型", "年份", "机构", "意义"]} rows={[{"cells": ["Transformer", "2017", "Google", "现代大模型基石"], "showFrom": 0}, {"cells": ["GPT-3", "2020", "OpenAI", "大模型真正成型"], "showFrom": 1}, {"cells": ["ChatGPT", "2022", "OpenAI", "普通人触达AI"], "showFrom": 2}, {"cells": ["Llama", "2023", "Meta", "开源·百模大战"], "showFrom": 3}, {"cells": ["DeepseekR1", "2024", "深度求索", "深度思考创新"], "showFrom": 4}]} anchors={[]} />
            </Sequence>
            <Sequence from={7460} durationInFrames={104}>
                <BWMagnifyingGlass content={[{"text": "盘古呢？", "startFrame": 0, "durationFrames": 26}, {"text": "到现在个人开发者连API都调不了。", "startFrame": 25, "durationFrames": 79}]} totalDurationFrames={104} anchors={[{"text": "API调不了", "showFrom": 1, "color": "#EF4444", "anim": "popIn", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={7564} durationInFrames={176}>
                <BWCognitiveShift content={[{"text": "先驱者的头衔，", "startFrame": 0, "durationFrames": 35}, {"text": "是行业认的，", "startFrame": 34, "durationFrames": 21}, {"text": "是历史记的，", "startFrame": 55, "durationFrames": 22}, {"text": "是代码里留名的。", "startFrame": 77, "durationFrames": 38}, {"text": "不是余承东自己往头上扣的。", "startFrame": 115, "durationFrames": 61}]} totalDurationFrames={176} notText={"余承东自封"} butText={"行业认，历史记，代码留"} butSrc={staticFile("images/大模型先驱论/scene_2_41.png")} notContentIndex={4} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/大模型先驱论/scene_2/scene_2.mp3")} />
        </AbsoluteFill>
    );
};
