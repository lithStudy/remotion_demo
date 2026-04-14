import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWBeatSequence, BWCauseChain, BWCenterFocus, BWCognitiveShift, BWConceptCard, BWQuoteCitation } from "../../../components";

// 剖析：幸存者偏差
const SCENE_DURATION = 290 + 187 + 105 + 256 + 239 + 443 + 139 + 226;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={290}>
                <BWCauseChain content={[{"text": "我们总是容易被这种传奇故事深深打动，", "startFrame": 0, "durationFrames": 83}, {"text": "觉得只要复制他们的套路就能逆天改命。", "startFrame": 82, "durationFrames": 93}, {"text": "但其实你正在被一种隐秘的“沉默”所欺骗。", "startFrame": 175, "durationFrames": 114}]} totalDurationFrames={290} layout={"horizontal"} nodes={[{ label: "传奇打动", imageSrc: staticFile("images/认知偏见_幸存者偏差/scene_2_1_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { label: "复制套路", imageSrc: staticFile("images/认知偏见_幸存者偏差/scene_2_1_img1.png"), showFrom: 1, enterEffect: "fadeIn" }, { label: "沉默欺骗", imageSrc: staticFile("images/认知偏见_幸存者偏差/scene_2_1_img2.png"), showFrom: 2, enterEffect: "fadeIn" }]} />
            </Sequence>
            <Sequence from={290} durationInFrames={187}>
                <BWCognitiveShift content={[{"text": "这不是因为你见识短浅，", "startFrame": 0, "durationFrames": 51}, {"text": "而是因为这个社会只允许胜利者站在聚光灯下大声喧哗，", "startFrame": 50, "durationFrames": 137}]} totalDurationFrames={187} notText={"见识短浅"} butText={"胜利者被看见"} butSrc={staticFile("images/认知偏见_幸存者偏差/scene_2_2.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Sequence from={477} durationInFrames={105}>
                <BWCenterFocus content={[{"text": "那些失败者的哀鸣，", "startFrame": 0, "durationFrames": 39}, {"text": "早就被掩盖在时代的废墟之下了。", "startFrame": 38, "durationFrames": 67}]} totalDurationFrames={105} imageSrc={staticFile("images/认知偏见_幸存者偏差/scene_2_3.png")} enterEffect="fadeIn" />
            </Sequence>
            <Sequence from={582} durationInFrames={256}>
                <BWConceptCard content={[{"text": "这在逻辑学中叫做“幸存者偏差”：", "startFrame": 0, "durationFrames": 101}, {"text": "简单来说，", "startFrame": 100, "durationFrames": 29}, {"text": "就是死人不会说话，", "startFrame": 128, "durationFrames": 51}, {"text": "只有活下来的“幸存者”让你看到了。", "startFrame": 178, "durationFrames": 77}]} totalDurationFrames={256} imageSrc={staticFile("images/认知偏见_幸存者偏差/scene_2_4.png")} conceptName={"幸存者偏差"} anchors={[]} />
            </Sequence>
            <Sequence from={838} durationInFrames={239}>
                <BWCenterFocus content={[{"text": "我们在总结成功规律时，", "startFrame": 0, "durationFrames": 57}, {"text": "总是习惯性地盯着那些“活下来”的样本，", "startFrame": 56, "durationFrames": 75}, {"text": "却完全忽略了背后庞大到令人绝望的“分母”。", "startFrame": 130, "durationFrames": 108}]} totalDurationFrames={239} imageSrc={staticFile("images/认知偏见_幸存者偏差/scene_2_5.png")} enterEffect="fadeIn" />
            </Sequence>
            <Sequence from={1077} durationInFrames={443}>
                <BWBeatSequence content={[{"text": "那个辍学大佬的成功，", "startFrame": 0, "durationFrames": 51}, {"text": "背后可能是万中无一的运气或时代红利。", "startFrame": 50, "durationFrames": 96}, {"text": "但他绝不会在访谈里告诉你，", "startFrame": 146, "durationFrames": 64}, {"text": "还有十万个和他一样毅然辍学的人，", "startFrame": 209, "durationFrames": 78}, {"text": "此刻正消失在茫茫人海，", "startFrame": 286, "durationFrames": 69}, {"text": "在流水线上日复一日地消磨青春。", "startFrame": 355, "durationFrames": 88}]} totalDurationFrames={443} stages={[{ imageSrc: staticFile("images/认知偏见_幸存者偏差/scene_2_6_img0.png"), enterEffect: "breathe", tone: "calm", showFrom: 1 }, { imageSrc: staticFile("images/认知偏见_幸存者偏差/scene_2_6_img1.png"), enterEffect: "slideBottom", showFrom: 3 }, { imageSrc: staticFile("images/认知偏见_幸存者偏差/scene_2_6_img2.png"), enterEffect: "fadeIn", showFrom: 5 }]} />
            </Sequence>
            <Sequence from={1520} durationInFrames={139}>
                <BWCognitiveShift content={[{"text": "你只看到了飞上天的风口猪，", "startFrame": 0, "durationFrames": 62}, {"text": "却没看到摔死在风口下的尸山血海。", "startFrame": 61, "durationFrames": 78}]} totalDurationFrames={139} notText={"风口猪"} butText={"尸山血海"} butSrc={staticFile("images/认知偏见_幸存者偏差/scene_2_7.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Sequence from={1659} durationInFrames={226}>
                <BWQuoteCitation content={[{"text": "这就好比你在医院门口采访，", "startFrame": 0, "durationFrames": 55}, {"text": "得到的结论永远是“这家医院医术高超”，", "startFrame": 54, "durationFrames": 86}, {"text": "因为治不好的病人根本没机会走出大门。", "startFrame": 139, "durationFrames": 87}]} totalDurationFrames={226} quoteDisplayText={"这家医院医术高超"} quoteSource={"幸存者的采访"} />
            </Sequence>
            <Audio src={staticFile("/audio/认知偏见_幸存者偏差/scene_2/scene_2.mp3")} />
        </AbsoluteFill>
    );
};
