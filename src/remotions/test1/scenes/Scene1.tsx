import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWAlertStyle, BWChatBubble, BWCognitiveShift, BWMagnifyingGlass, BWMultiImage, BWSplitCompare } from "../../../components";

// 互联网争吵的无力感与情绪共鸣
const SCENE_DURATION = 90 + 60 + 96 + 90 + 150 + 150 + 63;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={90}>
                <BWChatBubble imageSrc={staticFile("困惑的人简笔画图标")} content={[{"text": "最近你有没有这种感觉：", "startFrame": 0, "durationFrames": 30, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}, {"text": "上网刷新闻、看评论区，", "startFrame": 30, "durationFrames": 30, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}, {"text": "血压能瞬间飙升？", "startFrame": 60, "durationFrames": 30, "anchor": "血压飙升", "anchorColor": "#EF4444", "anchorAnim": "popIn", "audioEffect": "impact_thud"}]} totalDurationFrames={90} />
            </Sequence>
            <Sequence from={90} durationInFrames={60}>
                <BWSplitCompare leftSrc={staticFile("一个蓝色背景上，一个简洁明了的问题被一个绿色对勾标记，周围没有杂乱的元素，只显示清晰的逻辑线索")} rightSrc={staticFile("一个红色背景上，无数气泡和文本框相互重叠、交织，充满了问号、感叹号和愤怒的表情符号，形成一片混乱无序的视觉效果")} leftLabel={"问题本身"} rightLabel={"评论区"} content={[{"text": "明明一个挺简单的事儿，", "startFrame": 0, "durationFrames": 30, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}, {"text": "评论区却吵成了一锅粥。", "startFrame": 30, "durationFrames": 30, "anchor": "吵成一锅粥", "anchorColor": "#EF4444", "anchorAnim": "popIn", "audioEffect": "impact_thud"}]} totalDurationFrames={60} />
            </Sequence>
            <Sequence from={150} durationInFrames={96}>
                <BWMultiImage images={[{ src: staticFile("两人面对面坐着，一人摊开文件或图表，另一人做出倾听姿态的剪影"), textIndex: 0 }, { src: staticFile("一张标题夸张的廉价报纸或传单，被一只手粗鲁地扔出，带有弧线运动轨迹的视觉效果"), textIndex: 1 }, { src: staticFile("一张标题夸张的廉价报纸或传单，被一只手粗鲁地扔出，带有弧线运动轨迹的视觉效果"), textIndex: 2 }]} content={[{"text": "你拿证据跟他讲道理，", "startFrame": 0, "durationFrames": 30, "anchor": "证据", "anchorColor": null, "anchorAnim": null, "audioEffect": null}, {"text": "他反手甩给你一个地摊文学链接；", "startFrame": 30, "durationFrames": 33, "anchor": "地摊文学", "anchorColor": null, "anchorAnim": null, "audioEffect": null}, {"text": "他反手甩给你一个地摊文学链接；", "startFrame": 63, "durationFrames": 33, "anchor": "链接", "anchorColor": null, "anchorAnim": null, "audioEffect": null}]} totalDurationFrames={96} />
            </Sequence>
            <Sequence from={246} durationInFrames={90}>
                <BWMagnifyingGlass content={[{"text": "你试图保持客观，", "startFrame": 0, "durationFrames": 30, "anchor": "客观", "anchorColor": "#111111", "anchorAnim": null, "audioEffect": "ping"}, {"text": "结果发现对方只看他想看的，", "startFrame": 30, "durationFrames": 30, "anchor": "只看他想看的", "anchorColor": "#111111", "anchorAnim": null, "audioEffect": "ping"}, {"text": "只听他想听的。", "startFrame": 60, "durationFrames": 30, "anchor": "只听他想听的", "anchorColor": "#111111", "anchorAnim": null, "audioEffect": "ping"}]} totalDurationFrames={90} />
            </Sequence>
            <Sequence from={336} durationInFrames={150}>
                <BWAlertStyle imageSrc={staticFile("一个放大镜在文本中挑剔地搜索细节的示意图")} enterEffect="slideBottom" content={[{"text": "最气人的是，", "startFrame": 0, "durationFrames": 30, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}, {"text": "你发现不管你怎么自证清白，", "startFrame": 30, "durationFrames": 30, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}, {"text": "对方总能从你的话里", "startFrame": 60, "durationFrames": 30, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}, {"text": "抠出几个字来证明你", "startFrame": 90, "durationFrames": 30, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}, {"text": "“屁股歪了”。", "startFrame": 120, "durationFrames": 30, "anchor": "屁股歪了", "anchorColor": "#EF4444", "anchorAnim": "popIn", "audioEffect": "impact_thud"}]} totalDurationFrames={150} />
            </Sequence>
            <Sequence from={486} durationInFrames={150}>
                <BWSplitCompare leftSrc={staticFile("两个角色互相不理解地沟通")} rightSrc={staticFile("一个人感到厌烦和沮丧，背景是混乱的网络符号")} leftLabel={"沟通困境"} rightLabel={"环境恶化"} content={[{"text": "这种“鸡同鸭讲、", "startFrame": 0, "durationFrames": 30, "anchor": "鸡同鸭讲", "anchorColor": "#EF4444", "anchorAnim": "popIn", "audioEffect": "impact_thud"}, {"text": "秀才遇上兵”的无力感，", "startFrame": 30, "durationFrames": 30, "anchor": "秀才遇上兵", "anchorColor": "#EF4444", "anchorAnim": "popIn", "audioEffect": "impact_thud"}, {"text": "是不是让你觉得", "startFrame": 60, "durationFrames": 30, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}, {"text": "现在的互联网环境", "startFrame": 90, "durationFrames": 30, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}, {"text": "简直没法待了？", "startFrame": 120, "durationFrames": 30, "anchor": "没法待了", "anchorColor": "#EF4444", "anchorAnim": "popIn", "audioEffect": "impact_thud"}]} totalDurationFrames={150} />
            </Sequence>
            <Sequence from={636} durationInFrames={63}>
                <BWCognitiveShift notText={"为了真相在讨论"} butText={"为了“输赢”在搏命"} notSrc={"一群人在桌子旁平静地交换文件和证据，桌上放着天平，画面氛围是冷静和求证的。"} butSrc={"两个人面对面激烈地争吵，表情愤怒，身体前倾，仿佛在进行一场搏斗，背景隐约可见一个计分板。"} notContentIndex={0} butContentIndex={1} content={[{"text": "大家好像不再是为了真相在讨论，", "startFrame": 0, "durationFrames": 33, "anchor": "真相", "anchorColor": "#EF4444", "anchorAnim": "popIn", "audioEffect": "impact_thud"}, {"text": "而是在为了“输赢”在搏命。", "startFrame": 33, "durationFrames": 30, "anchor": "输赢", "anchorColor": "#EF4444", "anchorAnim": "popIn", "audioEffect": "impact_thud"}]} totalDurationFrames={63} />
            </Sequence>

        </AbsoluteFill>
    );
};
