import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift, BWConceptCard, BWQuoteCitation } from "../../../components";

// 剖析：幸存者偏差
const SCENE_DURATION = 80 + 192 + 95 + 118 + 70 + 128 + 65 + 112;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={80}>
                <BWCenterFocus content={[{"text": "我们总是容易被这种传奇故事深深打动，", "startFrame": 0, "durationFrames": 40}, {"text": "觉得只要复制他们的套路就能逆天改命。", "startFrame": 40, "durationFrames": 40}]} totalDurationFrames={80} imageSrc={staticFile("一个人看着一个传奇故事，思考的样子")} enterEffect="fadeIn" anchors={[{"text": "逆天改命", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={80} durationInFrames={192}>
                <BWCognitiveShift content={[{"text": "但其实你正在被一种隐秘的“沉默”所欺骗。", "startFrame": 0, "durationFrames": 44}, {"text": "这不是因为你见识短浅，", "startFrame": 44, "durationFrames": 30}, {"text": "而是因为这个社会只允许胜利者站在聚光灯下大声喧哗，", "startFrame": 74, "durationFrames": 55}, {"text": "而失败者的哀鸣，", "startFrame": 129, "durationFrames": 30}, {"text": "早就被掩盖在时代的废墟之下了。", "startFrame": 159, "durationFrames": 33}]} totalDurationFrames={192} notText={"见识短浅"} butText={"社会的允许"} butSrc={staticFile("聚光灯照亮舞台中央的成功者")} notContentIndex={1} butContentIndex={2} anchors={[]} />
            </Sequence>
            <Sequence from={272} durationInFrames={95}>
                <BWConceptCard content={[{"text": "这在逻辑学中叫做“幸存者偏差”：", "startFrame": 0, "durationFrames": 35}, {"text": "简单来说，", "startFrame": 35, "durationFrames": 30}, {"text": "就是死人永远不会说话。", "startFrame": 65, "durationFrames": 30}]} totalDurationFrames={95} imageSrc={staticFile("人群中部分人被聚光灯照亮的简笔画")} conceptName={"幸存者偏差"} anchors={[]} />
            </Sequence>
            <Sequence from={367} durationInFrames={118}>
                <BWCenterFocus content={[{"text": "我们在总结成功规律时，", "startFrame": 0, "durationFrames": 30}, {"text": "总是习惯性地盯着那些“活下来”的样本，", "startFrame": 30, "durationFrames": 42}, {"text": "却完全忽略了背后庞大到令人绝望的“分母”。", "startFrame": 72, "durationFrames": 46}]} totalDurationFrames={118} imageSrc={staticFile("人们拿着放大镜寻找线索的抽象画")} enterEffect="fadeIn" anchors={[{"text": "幸存者偏差", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={485} durationInFrames={70}>
                <BWCenterFocus content={[{"text": "那个辍学大佬的成功，", "startFrame": 0, "durationFrames": 30}, {"text": "背后可能是万中无一的运气或时代红利。", "startFrame": 30, "durationFrames": 40}]} totalDurationFrames={70} imageSrc={staticFile("一个中年男人看着电脑屏幕，屏幕上是股票曲线图")} enterEffect="breathe" anchors={[{"text": "幸存者偏差", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={555} durationInFrames={128}>
                <BWCenterFocus content={[{"text": "但他绝不会在访谈里告诉你，", "startFrame": 0, "durationFrames": 30}, {"text": "还有十万个和他一样毅然辍学的人，", "startFrame": 30, "durationFrames": 35}, {"text": "此刻正消失在茫茫人海，", "startFrame": 65, "durationFrames": 30}, {"text": "在流水线上日复一日地消磨青春。", "startFrame": 95, "durationFrames": 33}]} totalDurationFrames={128} imageSrc={staticFile("流水线上忙碌的工人的黑白速写")} enterEffect="fadeIn" anchors={[{"text": "幸存者偏差", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "流水线", "showFrom": 3, "color": "#000000", "anim": "slideUp", "audioEffect": "woosh"}]} />
            </Sequence>
            <Sequence from={683} durationInFrames={65}>
                <BWCognitiveShift content={[{"text": "你只看到了飞上天的风口猪，", "startFrame": 0, "durationFrames": 30}, {"text": "却没看到摔死在风口下的尸山血海。", "startFrame": 30, "durationFrames": 35}]} totalDurationFrames={65} notText={"风口猪"} butText={"尸山血海"} butSrc={staticFile("无数尸体堆积成山的悲惨景象")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Sequence from={748} durationInFrames={112}>
                <BWQuoteCitation content={[{"text": "这就好比你在医院门口采访，", "startFrame": 0, "durationFrames": 30}, {"text": "得到的结论永远是“这家医院医术高超”，", "startFrame": 30, "durationFrames": 42}, {"text": "因为治不好的病人根本没机会走出大门。", "startFrame": 72, "durationFrames": 40}]} totalDurationFrames={112} quoteSource={"街头采访"} anchors={[]} />
            </Sequence>

        </AbsoluteFill>
    );
};
