import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCaseBreakdown, BWCauseChain, BWPanelGrid, BWSplitCompare, BWTextFocus } from "../../../components";

// 剖析·四大伤害
const SCENE_DURATION = 69 + 229 + 305 + 102 + 390 + 232 + 142 + 367 + 32 + 238;

export const calculateScene6Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene6: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={69}>
                <BWTextFocus content={[{"text": "真正伤害中国科技的，", "startFrame": 0, "durationFrames": 43}, {"text": "也正是这里。", "startFrame": 42, "durationFrames": 27}]} totalDurationFrames={69} coreSentence={[{"text": "真正伤害中国科技的，", "showFrom": 0}, {"text": "也正是这里。", "showFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "伤害", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={69} durationInFrames={229}>
                <BWCaseBreakdown content={[{"text": "第一，", "startFrame": 0, "durationFrames": 15}, {"text": "它伤害求真文化。", "startFrame": 14, "durationFrames": 34}, {"text": "科技进步，", "startFrame": 47, "durationFrames": 26}, {"text": "靠承认差距。", "startFrame": 72, "durationFrames": 34}, {"text": "靠长期死磕。", "startFrame": 106, "durationFrames": 36}, {"text": "靠把问题拆细。", "startFrame": 142, "durationFrames": 36}, {"text": "不是靠把短板改名。", "startFrame": 178, "durationFrames": 51}]} totalDurationFrames={229} title={"伤害求真文化"} imageSrc={staticFile("images/华为韬定律/scene_6_2.png")} phases={[{"phaseLabel": "危害点名", "showFrom": 0}, {"phaseLabel": "正道三法", "showFrom": 3}, {"phaseLabel": "拒绝改名", "showFrom": 6}]} />
            </Sequence>
            <Sequence from={298} durationInFrames={305}>
                <BWPanelGrid content={[{"text": "先进制程受限，", "startFrame": 0, "durationFrames": 42}, {"text": "那就诚实说受限。", "startFrame": 41, "durationFrames": 45}, {"text": "芯片设计软件不足，", "startFrame": 85, "durationFrames": 45}, {"text": "那就补设计软件。", "startFrame": 130, "durationFrames": 58}, {"text": "材料不够，", "startFrame": 188, "durationFrames": 30}, {"text": "那就补材料。", "startFrame": 217, "durationFrames": 35}, {"text": "光刻难，", "startFrame": 251, "durationFrames": 24}, {"text": "那就攻光刻。", "startFrame": 275, "durationFrames": 29}]} totalDurationFrames={305} panels={[{ src: staticFile("images/华为韬定律/scene_6_5_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { src: staticFile("images/华为韬定律/scene_6_5_img1.png"), showFrom: 2, enterEffect: "slideBottom" }, { src: staticFile("images/华为韬定律/scene_6_5_img2.png"), showFrom: 4, enterEffect: "zoomIn" }, { src: staticFile("images/华为韬定律/scene_6_5_img3.png"), showFrom: 6, enterEffect: "fadeIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={603} durationInFrames={102}>
                <BWCauseChain content={[{"text": "最怕的是：", "startFrame": 0, "durationFrames": 26}, {"text": "问题还没解决。", "startFrame": 25, "durationFrames": 39}, {"text": "口号先胜利了。", "startFrame": 63, "durationFrames": 38}]} totalDurationFrames={102} layout={"horizontal"} nodes={[{ label: "问题未解", imageSrc: staticFile("images/华为韬定律/scene_6_6_img0.png"), showFrom: 1 }, { label: "口号先胜", imageSrc: staticFile("images/华为韬定律/scene_6_6_img1.png"), showFrom: 2 }]} anchors={[]} />
            </Sequence>
            <Sequence from={705} durationInFrames={390}>
                <BWCaseBreakdown content={[{"text": "第二，", "startFrame": 0, "durationFrames": 17}, {"text": "它误导资源配置。", "startFrame": 16, "durationFrames": 50}, {"text": "资本市场最爱听故事。", "startFrame": 65, "durationFrames": 55}, {"text": "一听光模块。", "startFrame": 120, "durationFrames": 34}, {"text": "一听韬定律。", "startFrame": 153, "durationFrames": 42}, {"text": "一听改写规则。", "startFrame": 195, "durationFrames": 40}, {"text": "资金就开始沸腾。", "startFrame": 234, "durationFrames": 38}, {"text": "可钱一旦被叙事带跑。", "startFrame": 271, "durationFrames": 51}, {"text": "真正慢的硬骨头，", "startFrame": 321, "durationFrames": 38}, {"text": "就没人愿意啃。", "startFrame": 358, "durationFrames": 31}]} totalDurationFrames={390} title={"误导资源配置"} imageSrc={staticFile("images/华为韬定律/scene_6_7.png")} phases={[{"phaseLabel": "危害点名", "showFrom": 0}, {"phaseLabel": "误导配置", "showFrom": 1}, {"phaseLabel": "资金沸腾", "showFrom": 6}, {"phaseLabel": "无人攻坚", "showFrom": 9}]} />
            </Sequence>
            <Sequence from={1095} durationInFrames={232}>
                <BWPanelGrid content={[{"text": "基础软件慢。", "startFrame": 0, "durationFrames": 42}, {"text": "材料验证慢。", "startFrame": 41, "durationFrames": 40}, {"text": "工艺爬坡慢。", "startFrame": 80, "durationFrames": 34}, {"text": "人才培养慢。", "startFrame": 114, "durationFrames": 34}, {"text": "但这些慢东西，", "startFrame": 148, "durationFrames": 42}, {"text": "才是真科技。", "startFrame": 189, "durationFrames": 42}]} totalDurationFrames={232} panels={[{ src: staticFile("images/华为韬定律/scene_6_10_img0.png"), showFrom: 0, enterEffect: "zoomIn" }, { src: staticFile("images/华为韬定律/scene_6_10_img1.png"), showFrom: 1, enterEffect: "slideLeft" }, { src: staticFile("images/华为韬定律/scene_6_10_img2.png"), showFrom: 2, enterEffect: "fadeIn" }, { src: staticFile("images/华为韬定律/scene_6_10_img3.png"), showFrom: 3, enterEffect: "slideBottom" }]} anchors={[{"text": "真科技", "showFrom": 5, "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={1327} durationInFrames={142}>
                <BWSplitCompare content={[{"text": "概念涨停，", "startFrame": 0, "durationFrames": 34}, {"text": "不等于产业突破。", "startFrame": 33, "durationFrames": 40}, {"text": "市值沸腾，", "startFrame": 73, "durationFrames": 30}, {"text": "不等于晶圆良率。", "startFrame": 102, "durationFrames": 40}]} totalDurationFrames={142} leftSrc={staticFile("images/华为韬定律/scene_6_12_left.png")} rightSrc={staticFile("images/华为韬定律/scene_6_12_right.png")} leftLabel={"概念涨停"} rightLabel={"产业突破"} leftShowFrom={0} rightShowFrom={1} anchors={[]} />
            </Sequence>
            <Sequence from={1469} durationInFrames={367}>
                <BWCaseBreakdown content={[{"text": "第三，", "startFrame": 0, "durationFrames": 20}, {"text": "它制造道德绑架。", "startFrame": 19, "durationFrames": 40}, {"text": "正常的技术质疑，", "startFrame": 59, "durationFrames": 39}, {"text": "很容易被扣帽子。", "startFrame": 97, "durationFrames": 44}, {"text": "你说散热难，", "startFrame": 141, "durationFrames": 31}, {"text": "有人说你不支持国产。", "startFrame": 171, "durationFrames": 47}, {"text": "你说良率低，", "startFrame": 217, "durationFrames": 30}, {"text": "有人说你递刀子。", "startFrame": 247, "durationFrames": 41}, {"text": "你说概念包装，", "startFrame": 287, "durationFrames": 36}, {"text": "有人说你崇洋媚外。", "startFrame": 323, "durationFrames": 43}]} totalDurationFrames={367} title={"制造道德绑架"} imageSrc={staticFile("images/华为韬定律/scene_6_13.png")} phases={[{"phaseLabel": "道德绑架", "showFrom": 1}, {"phaseLabel": "质疑扣帽", "showFrom": 3}, {"phaseLabel": "三重污名", "showFrom": 5}]} anchors={[]} />
            </Sequence>
            <Sequence from={1836} durationInFrames={32}>
                <BWTextFocus content={[{"text": "这就完蛋了。", "startFrame": 0, "durationFrames": 32}]} totalDurationFrames={32} coreSentence={[{"text": "这就完蛋了。", "showFrom": 0, "endFrom": 0}]} coreSentenceAnchors={[]} />
            </Sequence>
            <Sequence from={1868} durationInFrames={238}>
                <BWCauseChain content={[{"text": "科学讨论一旦饭圈化。", "startFrame": 0, "durationFrames": 50}, {"text": "专家会沉默。", "startFrame": 49, "durationFrames": 32}, {"text": "工程师会沉默。", "startFrame": 80, "durationFrames": 34}, {"text": "投资人会装懂。", "startFrame": 114, "durationFrames": 40}, {"text": "最后，", "startFrame": 154, "durationFrames": 15}, {"text": "所有人都在演。", "startFrame": 168, "durationFrames": 31}, {"text": "没有人敢说真话。", "startFrame": 198, "durationFrames": 39}]} totalDurationFrames={238} layout={"horizontal"} nodes={[{ label: "饭圈化", imageSrc: staticFile("images/华为韬定律/scene_6_17_img0.png"), showFrom: 0 }, { label: "研发沉默", imageSrc: staticFile("images/华为韬定律/scene_6_17_img1.png"), showFrom: 1 }, { label: "投资人装懂", imageSrc: staticFile("images/华为韬定律/scene_6_17_img2.png"), showFrom: 3 }, { label: "都是演员", imageSrc: staticFile("images/华为韬定律/scene_6_17_img3.png"), showFrom: 5 }]} anchors={[{"text": "无人说真话", "showFrom": 6, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/华为韬定律/scene_6/scene_6.mp3")} />
        </AbsoluteFill>
    );
};
