import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift, BWConceptCard, BWQuoteCitation } from "../../../components";

// 引入
const SCENE_DURATION = 117 + 110 + 219 + 182 + 213 + 271;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={117}>
                <BWQuoteCitation content={[{"text": "永远不要和傻子争论，", "startFrame": 0, "durationFrames": 52}, {"text": "因为他真的不知道自己是个傻子。", "startFrame": 51, "durationFrames": 66}]} totalDurationFrames={117} quoteSource={"谚语"} anchors={[]} />
            </Sequence>
            <Sequence from={117} durationInFrames={110}>
                <BWCognitiveShift content={[{"text": "这真不是为了骂人，", "startFrame": 0, "durationFrames": 45}, {"text": "而是一个严肃的心理学结论。", "startFrame": 44, "durationFrames": 65}]} totalDurationFrames={110} notText={"为了骂人"} butText={"心理学结论"} butSrc={staticFile("images/认知偏见_达克效应/scene_1_2.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Sequence from={227} durationInFrames={219}>
                <BWCenterFocus content={[{"text": "1995年，美国有个叫惠勒的男人，", "startFrame": 0, "durationFrames": 82}, {"text": "大白天持枪抢了两家银行。", "startFrame": 81, "durationFrames": 70}, {"text": "有趣的是，", "startFrame": 151, "durationFrames": 29}, {"text": "他根本没有带面罩。", "startFrame": 180, "durationFrames": 39}]} totalDurationFrames={219} imageSrc={staticFile("images/认知偏见_达克效应/scene_1_3.png")} enterEffect="slideLeft" />
            </Sequence>
            <Sequence from={446} durationInFrames={182}>
                <BWQuoteCitation content={[{"text": "而当警察抓到他时，", "startFrame": 0, "durationFrames": 47}, {"text": "他却一脸震惊地说：", "startFrame": 46, "durationFrames": 44}, {"text": "我明明在脸上涂了柠檬汁啊！", "startFrame": 90, "durationFrames": 91}]} totalDurationFrames={182} quoteSource={"惠勒"} quoteDisplayText={"我明明在脸上涂了柠檬汁啊！"} showFrom={2} anchors={[]} />
            </Sequence>
            <Sequence from={628} durationInFrames={213}>
                <BWCenterFocus content={[{"text": "原来，", "startFrame": 0, "durationFrames": 29}, {"text": "他一直以为柠檬汁能做隐形墨水，", "startFrame": 28, "durationFrames": 90}, {"text": "只要涂在脸上，", "startFrame": 117, "durationFrames": 36}, {"text": "摄像头就看不见他。", "startFrame": 153, "durationFrames": 59}]} totalDurationFrames={213} imageSrc={staticFile("images/认知偏见_达克效应/scene_1_5.png")} enterEffect="fadeIn" />
            </Sequence>
            <Sequence from={841} durationInFrames={271}>
                <BWConceptCard content={[{"text": "这个荒诞的行为引起了心理学家达宁和克鲁格的注意。", "startFrame": 0, "durationFrames": 129}, {"text": "他们通过研究发现：", "startFrame": 128, "durationFrames": 50}, {"text": "人的大脑里存在一个Bug，", "startFrame": 177, "durationFrames": 55}, {"text": "叫达克效应。", "startFrame": 232, "durationFrames": 39}]} totalDurationFrames={271} imageSrc={staticFile("images/认知偏见_达克效应/scene_1_6.png")} conceptName={"达克效应"} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/认知偏见_达克效应/scene_1/scene_1.mp3")} />
        </AbsoluteFill>
    );
};
