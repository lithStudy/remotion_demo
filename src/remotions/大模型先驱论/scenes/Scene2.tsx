import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWBeatSequence, BWCauseChain, BWCenterFocus, BWCognitiveShift, BWConceptCard, BWDataTable, BWKpiHero, BWMagnifyingGlass, BWQuoteCitation, BWSplitCompare, BWTextFocus, BWTimeline } from "../../../components";

// 剖析：概念定义与时间线真相
const SCENE_DURATION = 168 + 141 + 336 + 44 + 69 + 654 + 77 + 828 + 308 + 96 + 86 + 195 + 244 + 100 + 164 + 121 + 1752 + 119 + 34 + 124 + 252 + 150 + 237 + 53 + 149 + 220 + 714 + 104 + 187;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={168}>
                <BWCenterFocus content={[{"text": "为了防止某些智慧群体的记忆被篡改，", "startFrame": 0, "durationFrames": 78}, {"text": "我就来讲讲语言大模型的发展时间线。", "startFrame": 77, "durationFrames": 91}]} totalDurationFrames={168} imageSrc={staticFile("images/大模型先驱论/scene_2_1.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={168} durationInFrames={141}>
                <BWMagnifyingGlass content={[{"text": "大模型确实是这一两年突然崛起的技术，", "startFrame": 0, "durationFrames": 88}, {"text": "但并不是突然出现的技术。", "startFrame": 87, "durationFrames": 54}]} totalDurationFrames={141} anchors={[{"text": "突然崛起", "showFrom": 0, "color": "#000000", "anim": "spring", "audioEffect": "ping"}, {"text": "并不是突然出现", "showFrom": 1, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={309} durationInFrames={336}>
                <BWCauseChain content={[{"text": "实际上，", "startFrame": 0, "durationFrames": 20}, {"text": "任何看起来突破性的技术都是经过了长期的技术积累，", "startFrame": 19, "durationFrames": 118}, {"text": "只是正好积累到了一定的程度，", "startFrame": 137, "durationFrames": 62}, {"text": "解决了各种问题，", "startFrame": 198, "durationFrames": 44}, {"text": "然后才真正具有性价比的应用在生活中。", "startFrame": 242, "durationFrames": 94}]} totalDurationFrames={336} layout={"horizontal"} nodes={[{ label: "长期积累", imageSrc: staticFile("images/大模型先驱论/scene_2_13_img0.png"), showFrom: 1 }, { label: "量变到质变", imageSrc: staticFile("images/大模型先驱论/scene_2_13_img1.png"), showFrom: 2 }, { label: "解决问题", imageSrc: staticFile("images/大模型先驱论/scene_2_13_img2.png"), showFrom: 3 }, { label: "应用落地", imageSrc: staticFile("images/大模型先驱论/scene_2_13_img3.png"), showFrom: 4 }]} anchors={[]} />
            </Sequence>
            <Sequence from={645} durationInFrames={44}>
                <BWTextFocus content={[{"text": "大模型也是这样的。", "startFrame": 0, "durationFrames": 44}]} totalDurationFrames={44} coreSentence={[{"text": "大模型也是这样的。", "showFrom": 0}]} coreSentenceAnchors={[]} />
            </Sequence>
            <Sequence from={689} durationInFrames={69}>
                <BWConceptCard content={[{"text": "第一阶段，", "startFrame": 0, "durationFrames": 24}, {"text": "深度学习奠基。", "startFrame": 24, "durationFrames": 45}]} totalDurationFrames={69} imageSrc={staticFile("images/大模型先驱论/scene_2_15.png")} conceptName={"深度学习奠基"} anchors={[]} />
            </Sequence>
            <Sequence from={758} durationInFrames={654}>
                <BWTimeline content={[{"text": "1957年，", "startFrame": 0, "durationFrames": 31}, {"text": "Rosenblatt，", "startFrame": 30, "durationFrames": 23}, {"text": "感知机提出，", "startFrame": 53, "durationFrames": 33}, {"text": "为神经网络奠定雏形。", "startFrame": 86, "durationFrames": 50}, {"text": "1986年，", "startFrame": 135, "durationFrames": 34}, {"text": "Hinton，", "startFrame": 169, "durationFrames": 19}, {"text": "反向传播算法，", "startFrame": 188, "durationFrames": 42}, {"text": "神经网络训练成为可能。", "startFrame": 229, "durationFrames": 63}, {"text": "1997年，", "startFrame": 292, "durationFrames": 33}, {"text": "Hochreiter，", "startFrame": 324, "durationFrames": 27}, {"text": "LSTM问世，", "startFrame": 351, "durationFrames": 39}, {"text": "神经网络具备记忆能力。", "startFrame": 389, "durationFrames": 60}, {"text": "2012年，", "startFrame": 448, "durationFrames": 31}, {"text": "Hinton及团队，", "startFrame": 478, "durationFrames": 36}, {"text": "AlexNet震撼问世，", "startFrame": 514, "durationFrames": 55}, {"text": "深度学习首次大规模商业验证。", "startFrame": 569, "durationFrames": 84}]} totalDurationFrames={654} images={[{ src: staticFile("images/大模型先驱论/scene_2_16_img0.png"), enterEffect: "fadeIn", textIndex: 0 }, { src: staticFile("images/大模型先驱论/scene_2_16_img1.png"), enterEffect: "fadeIn", textIndex: 4 }, { src: staticFile("images/大模型先驱论/scene_2_16_img2.png"), enterEffect: "fadeIn", textIndex: 8 }, { src: staticFile("images/大模型先驱论/scene_2_16_img3.png"), enterEffect: "fadeIn", textIndex: 12 }]} anchors={[]} />
            </Sequence>
            <Sequence from={1412} durationInFrames={77}>
                <BWConceptCard content={[{"text": "第二阶段，", "startFrame": 0, "durationFrames": 27}, {"text": "预训练双路线。", "startFrame": 26, "durationFrames": 51}]} totalDurationFrames={77} imageSrc={staticFile("images/大模型先驱论/scene_2_17.png")} conceptName={"预训练双路线"} anchors={[]} />
            </Sequence>
            <Sequence from={1489} durationInFrames={828}>
                <BWTimeline content={[{"text": "2017年，", "startFrame": 0, "durationFrames": 30}, {"text": "Google，", "startFrame": 29, "durationFrames": 15}, {"text": "提出Transformer。", "startFrame": 43, "durationFrames": 37}, {"text": "这是所有现代大模型的基石，", "startFrame": 79, "durationFrames": 60}, {"text": "是智能化的关键。", "startFrame": 139, "durationFrames": 43}, {"text": "2018年，", "startFrame": 182, "durationFrames": 31}, {"text": "OpenAI，", "startFrame": 212, "durationFrames": 21}, {"text": "GPT-1。", "startFrame": 233, "durationFrames": 28}, {"text": "首个基于Transformer的大规模语言生成模型，", "startFrame": 261, "durationFrames": 104}, {"text": "开启了“预训练-微调”范式。", "startFrame": 365, "durationFrames": 68}, {"text": "2018年，", "startFrame": 433, "durationFrames": 33}, {"text": "Google，", "startFrame": 465, "durationFrames": 11}, {"text": "BERT。", "startFrame": 476, "durationFrames": 16}, {"text": "完全独立于GPT的另一种模型架构的尝试。", "startFrame": 491, "durationFrames": 105}, {"text": "2020年6月，", "startFrame": 596, "durationFrames": 42}, {"text": "OpenAI，", "startFrame": 638, "durationFrames": 21}, {"text": "GPT-3出现，", "startFrame": 659, "durationFrames": 42}, {"text": "大模型彻底成型，", "startFrame": 700, "durationFrames": 47}, {"text": "行业公认“现代大模型时代”的起点。", "startFrame": 747, "durationFrames": 80}]} totalDurationFrames={828} images={[{ src: staticFile("images/大模型先驱论/scene_2_18_img0.png"), enterEffect: "breathe", textIndex: 2, label: "Transformer" }, { src: staticFile("images/大模型先驱论/scene_2_18_img1.png"), enterEffect: "slideLeft", textIndex: 7, label: "GPT-1" }, { src: staticFile("images/大模型先驱论/scene_2_18_img2.png"), enterEffect: "fadeIn", textIndex: 12, label: "BERT" }, { src: staticFile("images/大模型先驱论/scene_2_18_img3.png"), enterEffect: "zoomIn", textIndex: 16, label: "GPT-3" }]} anchors={[]} />
            </Sequence>
            <Sequence from={2317} durationInFrames={308}>
                <BWCenterFocus content={[{"text": "以上两个阶段，", "startFrame": 0, "durationFrames": 39}, {"text": "从1957年开始出现大模型的基础理论，", "startFrame": 38, "durationFrames": 110}, {"text": "直到2020年的GPT-3出现，", "startFrame": 147, "durationFrames": 81}, {"text": "才是真正走完了大模型的蜕变之路。", "startFrame": 228, "durationFrames": 80}]} totalDurationFrames={308} imageSrc={staticFile("images/大模型先驱论/scene_2_19.png")} enterEffect="fadeIn" anchors={[{"text": "GPT-3", "showFrom": 2, "color": "#EF4444", "anim": "spring", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={2625} durationInFrames={96}>
                <BWTextFocus content={[{"text": "这个阶段，", "startFrame": 0, "durationFrames": 24}, {"text": "华为连大模型的概念都没摸到。", "startFrame": 24, "durationFrames": 72}]} totalDurationFrames={96} coreSentence={[{"text": "这个阶段，", "showFrom": 0}, {"text": "华为连大模型的概念都没摸到。", "showFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "华为", "color": "#EF4444"}, {"coreSentenceAnchor": "没摸到", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={2721} durationInFrames={86}>
                <BWConceptCard content={[{"text": "第三阶段，", "startFrame": 0, "durationFrames": 29}, {"text": "ChatGPT与百模大战。", "startFrame": 28, "durationFrames": 58}]} totalDurationFrames={86} imageSrc={staticFile("images/大模型先驱论/scene_2_21.png")} conceptName={"ChatGPT与百模大战"} anchors={[]} />
            </Sequence>
            <Sequence from={2807} durationInFrames={195}>
                <BWCenterFocus content={[{"text": "在GPT-3出现之后，", "startFrame": 0, "durationFrames": 51}, {"text": "国内外的业内人士终于意识到大模型的强大之处，", "startFrame": 50, "durationFrames": 106}, {"text": "纷纷开始研究。", "startFrame": 156, "durationFrames": 39}]} totalDurationFrames={195} imageSrc={staticFile("images/大模型先驱论/scene_2_22.png")} enterEffect="zoomIn" anchors={[]} />
            </Sequence>
            <Sequence from={3002} durationInFrames={244}>
                <BWCenterFocus content={[{"text": "2021年4月，", "startFrame": 0, "durationFrames": 40}, {"text": "华为所谓的盘古大模型1.0发布了，", "startFrame": 39, "durationFrames": 96}, {"text": "但是发布只是按其传统艺能嘴上喊着遥遥领先，", "startFrame": 135, "durationFrames": 108}]} totalDurationFrames={244} imageSrc={staticFile("images/大模型先驱论/scene_2_23.png")} enterEffect="fadeIn" anchors={[{"text": "遥遥领先", "showFrom": 2, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={3246} durationInFrames={100}>
                <BWSplitCompare content={[{"text": "既没有开放给普通用户体验，", "startFrame": 0, "durationFrames": 57}, {"text": "也没有相关技术报告。", "startFrame": 56, "durationFrames": 44}]} totalDurationFrames={100} leftSrc={staticFile("images/大模型先驱论/scene_2_24_left.png")} rightSrc={staticFile("images/大模型先驱论/scene_2_24_right.png")} leftLabel={"未开放"} rightLabel={"无报告"} leftShowFrom={0} rightShowFrom={1} anchors={[]} />
            </Sequence>
            <Sequence from={3346} durationInFrames={164}>
                <BWCauseChain content={[{"text": "他到底是嘴上说说，", "startFrame": 0, "durationFrames": 41}, {"text": "还是套壳，", "startFrame": 40, "durationFrames": 22}, {"text": "还是传统工业程序，", "startFrame": 62, "durationFrames": 34}, {"text": "还是真的有点东西，", "startFrame": 96, "durationFrames": 35}, {"text": "咱也没法验证。", "startFrame": 130, "durationFrames": 33}]} totalDurationFrames={164} layout={"horizontal"} nodes={[{ label: "嘴上说说", imageSrc: staticFile("images/大模型先驱论/scene_2_25_img0.png"), showFrom: 0, enterEffect: "breathe" }, { label: "只是套壳", imageSrc: staticFile("images/大模型先驱论/scene_2_25_img1.png"), showFrom: 1, enterEffect: "slideBottom" }, { label: "老式程序", imageSrc: staticFile("images/大模型先驱论/scene_2_25_img2.png"), showFrom: 2, enterEffect: "slideBottom" }, { label: "或有真料", imageSrc: staticFile("images/大模型先驱论/scene_2_25_img3.png"), showFrom: 3, enterEffect: "slideBottom" }]} anchors={[{"text": "没法验证", "showFrom": 4, "anim": "highlight", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={3510} durationInFrames={121}>
                <BWMagnifyingGlass content={[{"text": "但是从后来的表现来看，", "startFrame": 0, "durationFrames": 52}, {"text": "我是不认为他有相关技术积累的。", "startFrame": 51, "durationFrames": 70}]} totalDurationFrames={121} anchors={[{"text": "无技术积累", "showFrom": 1, "color": "#EF4444", "anim": "popIn", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={3631} durationInFrames={1752}>
                <BWTimeline content={[{"text": "2022年11月，", "startFrame": 0, "durationFrames": 51}, {"text": "OpenAI，", "startFrame": 50, "durationFrames": 21}, {"text": "ChatGPT开放给所有用户使用，", "startFrame": 70, "durationFrames": 76}, {"text": "第一次引爆普通用户对AI的期望。", "startFrame": 146, "durationFrames": 77}, {"text": "2023年2月，", "startFrame": 222, "durationFrames": 36}, {"text": "Meta，", "startFrame": 258, "durationFrames": 14}, {"text": "Llama开源，", "startFrame": 271, "durationFrames": 32}, {"text": "这是第一个真正开源的大模型，", "startFrame": 303, "durationFrames": 66}, {"text": "国内后来如雨后般春笋的各种大模型，", "startFrame": 368, "durationFrames": 88}, {"text": "绝大部分都是基于这个模型二次开发的，", "startFrame": 456, "durationFrames": 81}, {"text": "而百分之一百的模型都参考了其底层架构设计方案。", "startFrame": 536, "durationFrames": 110}, {"text": "2023年3月，", "startFrame": 646, "durationFrames": 36}, {"text": "百度，", "startFrame": 682, "durationFrames": 17}, {"text": "文心一言开放使用，", "startFrame": 698, "durationFrames": 52}, {"text": "这是中国第一个真正能被部分用户体验到的模型，", "startFrame": 749, "durationFrames": 95}, {"text": "虽然体验上很差，", "startFrame": 844, "durationFrames": 42}, {"text": "但也算是真正有证据证明其先驱的地位了。", "startFrame": 886, "durationFrames": 87}, {"text": "2023年3月：", "startFrame": 972, "durationFrames": 41}, {"text": "智谱AI · ChatGLM 闪亮登场，", "startFrame": 1013, "durationFrames": 84}, {"text": "这是国内第一个真正引爆开源社区、", "startFrame": 1097, "durationFrames": 91}, {"text": "能让开发者在单张消费级显卡上跑起来的中文对话模型", "startFrame": 1187, "durationFrames": 150}, {"text": "2023年4月，", "startFrame": 1337, "durationFrames": 43}, {"text": "阿里千问模型发布，", "startFrame": 1379, "durationFrames": 51}, {"text": "且可以被普通用户通过内测邀请使用。", "startFrame": 1429, "durationFrames": 96}, {"text": "2023年7月，", "startFrame": 1525, "durationFrames": 38}, {"text": "华为发布盘古3.0，", "startFrame": 1562, "durationFrames": 57}, {"text": "但是依然，", "startFrame": 1619, "durationFrames": 23}, {"text": "这又是一个只存在于ppt，", "startFrame": 1642, "durationFrames": 51}, {"text": "没有被普通用户使用过的模型。", "startFrame": 1692, "durationFrames": 59}]} totalDurationFrames={1752} images={[{ src: staticFile("images/大模型先驱论/scene_2_27_img0.png"), enterEffect: "fadeIn", textIndex: 0, label: "ChatGPT" }, { src: staticFile("images/大模型先驱论/scene_2_27_img1.png"), enterEffect: "fadeIn", textIndex: 4, label: "Llama" }, { src: staticFile("images/大模型先驱论/scene_2_27_img2.png"), enterEffect: "fadeIn", textIndex: 11, label: "文心一言" }, { src: staticFile("images/大模型先驱论/scene_2_27_img3.png"), enterEffect: "zoomIn", textIndex: 17, label: "ChatGLM" }, { src: staticFile("images/大模型先驱论/scene_2_27_img4.png"), enterEffect: "fadeIn", textIndex: 22, label: "阿里千问" }]} anchors={[]} />
            </Sequence>
            <Sequence from={5383} durationInFrames={119}>
                <BWCenterFocus content={[{"text": "后面的模型就太多了，", "startFrame": 0, "durationFrames": 44}, {"text": "可谓是一周一迭代，", "startFrame": 43, "durationFrames": 43}, {"text": "一月一版本。", "startFrame": 86, "durationFrames": 33}]} totalDurationFrames={119} imageSrc={staticFile("images/大模型先驱论/scene_2_28.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={5502} durationInFrames={34}>
                <BWTextFocus content={[{"text": "但是高潮来了。", "startFrame": 0, "durationFrames": 34}]} totalDurationFrames={34} coreSentence={["但是高潮来了。"]} coreSentenceAnchors={[{"coreSentenceAnchor": "高潮", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={5536} durationInFrames={124}>
                <BWCenterFocus content={[{"text": "2025年6月30，", "startFrame": 0, "durationFrames": 54}, {"text": "华为宣布开源盘古两个大模型。", "startFrame": 53, "durationFrames": 71}]} totalDurationFrames={124} imageSrc={staticFile("images/大模型先驱论/scene_2_30.png")} enterEffect="fadeIn" anchors={[{"text": "盘古", "showFrom": 1, "color": "#EF4444", "anim": "popIn", "audioEffect": null}]} />
            </Sequence>
            <Sequence from={5660} durationInFrames={252}>
                <BWKpiHero content={[{"text": "但是7月4日，", "startFrame": 0, "durationFrames": 36}, {"text": "被通过大模型指纹技术,", "startFrame": 36, "durationFrames": 64}, {"text": "分析出与千问2.5的14B模型相似度高达92.7%，", "startFrame": 99, "durationFrames": 153}]} totalDurationFrames={252} value={92.7} suffix={"%"} label={"与千问相似度"} decimalPlaces={1} anchors={[]} />
            </Sequence>
            <Sequence from={5912} durationInFrames={150}>
                <BWCenterFocus content={[{"text": "有开发者在其开源代码中，", "startFrame": 0, "durationFrames": 64}, {"text": "看到了带有阿里版权声明或残留的字样。", "startFrame": 63, "durationFrames": 87}]} totalDurationFrames={150} imageSrc={staticFile("images/大模型先驱论/scene_2_32.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={6062} durationInFrames={237}>
                <BWQuoteCitation content={[{"text": "同时网络上疯传疑似内部员工长文《盘古之殇》,", "startFrame": 0, "durationFrames": 117}, {"text": "直指其“套壳换血”。", "startFrame": 116, "durationFrames": 55}, {"text": "这也算是某家公司的传统艺能了。", "startFrame": 171, "durationFrames": 66}]} totalDurationFrames={237} quoteSource={"《盘古之殇》"} quoteDisplayText={"套壳换血"} anchors={[]} />
            </Sequence>
            <Sequence from={6299} durationInFrames={53}>
                <BWMagnifyingGlass content={[{"text": "说回来，", "startFrame": 0, "durationFrames": 20}, {"text": "什么叫先驱者？", "startFrame": 19, "durationFrames": 33}]} totalDurationFrames={53} anchors={[{"text": "先驱者", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={6352} durationInFrames={149}>
                <BWBeatSequence content={[{"text": "不是嘴上说。", "startFrame": 0, "durationFrames": 26}, {"text": "不是PPT上写。", "startFrame": 25, "durationFrames": 53}, {"text": "不是发布会上喊几声遥遥领先。", "startFrame": 77, "durationFrames": 72}]} totalDurationFrames={149} stages={[{ imageSrc: staticFile("images/大模型先驱论/scene_2_37_img0.png"), enterEffect: "breathe", tone: "calm" }, { imageSrc: staticFile("images/大模型先驱论/scene_2_37_img1.png"), enterEffect: "slideBottom", tone: "alert" }, { imageSrc: staticFile("images/大模型先驱论/scene_2_37_img2.png"), enterEffect: "zoomIn", tone: "alert" }]} anchors={[]} />
            </Sequence>
            <Sequence from={6501} durationInFrames={220}>
                <BWBeatSequence content={[{"text": "先驱者，", "startFrame": 0, "durationFrames": 22}, {"text": "是第一个把路走通的人。", "startFrame": 21, "durationFrames": 50}, {"text": "第一个让人用起来的人。", "startFrame": 70, "durationFrames": 40}, {"text": "第一个把代码开源，", "startFrame": 110, "durationFrames": 47}, {"text": "让别人站在你肩膀上的人。", "startFrame": 157, "durationFrames": 63}]} totalDurationFrames={220} stages={[{ imageSrc: staticFile("images/大模型先驱论/scene_2_38_img0.png"), enterEffect: "breathe", tone: "calm", showFrom: 0 }, { imageSrc: staticFile("images/大模型先驱论/scene_2_38_img1.png"), enterEffect: "slideBottom", tone: "alert", showFrom: 1 }, { imageSrc: staticFile("images/大模型先驱论/scene_2_38_img2.png"), enterEffect: "slideBottom", tone: "alert", showFrom: 2 }, { imageSrc: staticFile("images/大模型先驱论/scene_2_38_img3.png"), enterEffect: "zoomIn", tone: "alert", showFrom: 3 }]} anchors={[]} />
            </Sequence>
            <Sequence from={6721} durationInFrames={714}>
                <BWDataTable content={[{"text": "Transformer，2017年来自于Google，所有现代大模型的基石。", "startFrame": 0, "durationFrames": 135}, {"text": "GPT-3，2020年来自于OpenAI，大模型真正成型。", "startFrame": 134, "durationFrames": 131}, {"text": "ChatGPT，2022年来自于OpenAI，第一次让普通人摸到AI。", "startFrame": 264, "durationFrames": 134}, {"text": "Llama，2023年来自于Meta，开源，国内百模大战的奠基者。", "startFrame": 397, "durationFrames": 145}, {"text": "DeepseekR1，2024年来自于深度求索，深度思考的创新者。", "startFrame": 542, "durationFrames": 127}, {"text": "这些才叫先驱。", "startFrame": 669, "durationFrames": 45}]} totalDurationFrames={714} title={"真正的先驱"} columns={["模型", "年份", "机构", "意义"]} rows={[{"cells": ["Transformer", "2017", "Google", "现代大模型基石"], "showFrom": 0}, {"cells": ["GPT-3", "2020", "OpenAI", "大模型真正成型"], "showFrom": 1}, {"cells": ["ChatGPT", "2022", "OpenAI", "普通人触达AI"], "showFrom": 2}, {"cells": ["Llama", "2023", "Meta", "开源·百模大战"], "showFrom": 3}, {"cells": ["DeepseekR1", "2024", "深度求索", "深度思考创新"], "showFrom": 4}]} anchors={[]} />
            </Sequence>
            <Sequence from={7435} durationInFrames={104}>
                <BWMagnifyingGlass content={[{"text": "盘古呢？", "startFrame": 0, "durationFrames": 32}, {"text": "到现在个人开发者连API都调不了。", "startFrame": 31, "durationFrames": 73}]} totalDurationFrames={104} anchors={[{"text": "API调不了", "showFrom": 1, "color": "#EF4444", "anim": "popIn", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={7539} durationInFrames={187}>
                <BWCognitiveShift content={[{"text": "先驱者的头衔，", "startFrame": 0, "durationFrames": 38}, {"text": "是行业认的，", "startFrame": 37, "durationFrames": 26}, {"text": "是历史记的，", "startFrame": 62, "durationFrames": 27}, {"text": "是代码里留名的。", "startFrame": 88, "durationFrames": 35}, {"text": "不是某些人自己往头上扣的。", "startFrame": 122, "durationFrames": 64}]} totalDurationFrames={187} notText={"无脸自封"} butText={"行业认，历史记，代码留"} butSrc={staticFile("images/大模型先驱论/scene_2_41.png")} notContentIndex={4} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/大模型先驱论/scene_2/scene_2.mp3")} />
        </AbsoluteFill>
    );
};
