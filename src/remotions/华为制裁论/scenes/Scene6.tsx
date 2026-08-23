import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWDosAndDonts, BWQuoteCitation, BWTextFocus } from "../../../components";

// 剖析：法理风险
const SCENE_DURATION = 72 + 260 + 236 + 208 + 420 + 230;

export const calculateScene6Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene6: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={72}>
                <BWCenterFocus content={[{"text": "法理上，", "startFrame": 0, "durationFrames": 24}, {"text": " 《国家情报法》事件。", "startFrame": 24, "durationFrames": 48}]} totalDurationFrames={72} imageSrc={staticFile("images/华为制裁论/scene_6_3.png")} enterEffect="fadeIn" anchors={[{"text": "国家情报法", "showFrom": 1, "color": "#000000", "anim": "spring"}]} />
            </Sequence>
            <Sequence from={72} durationInFrames={260}>
                <BWQuoteCitation content={[{"text": "2017年，中国通过了《国家情报法》。", "startFrame": 0, "durationFrames": 81}, {"text": "第七条写的是：", "startFrame": 80, "durationFrames": 35}, {"text": "任何组织和公民都应当依法支持、", "startFrame": 115, "durationFrames": 84}, {"text": "协助和配合国家情报工作。", "startFrame": 199, "durationFrames": 61}]} totalDurationFrames={260} quoteSource={"《国家情报法》第七条"} quoteDisplayText={"任何组织和公民都应当依法支持、协助和配合国家情报工作。"} showFrom={2} />
            </Sequence>
            <Sequence from={332} durationInFrames={236}>
                <BWQuoteCitation content={[{"text": "再加上《网络安全法》第二十八条：", "startFrame": 0, "durationFrames": 71}, {"text": "网络运营者应当为公安机关、", "startFrame": 70, "durationFrames": 84}, {"text": "国家安全机关提供技术支持和协助。", "startFrame": 154, "durationFrames": 81}]} totalDurationFrames={236} quoteSource={"《网络安全法》第二十八条"} quoteDisplayText={"网络运营者应当为公安机关、国家安全机关提供技术支持和协助。"} showFrom={1} />
            </Sequence>
            <Sequence from={568} durationInFrames={208}>
                <BWTextFocus content={[{"text": "这两条法律的意思是，", "startFrame": 0, "durationFrames": 50}, {"text": "中国政府有权利要求任何中国企业，", "startFrame": 49, "durationFrames": 81}, {"text": "在必要时为政府提供情报信息，", "startFrame": 129, "durationFrames": 78}]} totalDurationFrames={208} coreSentence={["中国政府有权利要求任何中国企业，", "在必要时为政府提供情报信息，"]} coreSentenceAnchors={[{"coreSentenceAnchor": "任何中国企业", "color": "#EF4444"}, {"coreSentenceAnchor": "情报信息", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={776} durationInFrames={420}>
                <BWDosAndDonts content={[{"text": "站在自己国家的角度来讲这是没问题的，", "startFrame": 0, "durationFrames": 80}, {"text": "国家安全嘛。", "startFrame": 79, "durationFrames": 34}, {"text": "但是站在其他国家这就有问题了，", "startFrame": 112, "durationFrames": 68}, {"text": "理由一样的：", "startFrame": 180, "durationFrames": 32}, {"text": "也是因为国家安全。", "startFrame": 212, "durationFrames": 42}, {"text": "毕竟一个掌握大量通讯基站的公司，", "startFrame": 253, "durationFrames": 69}, {"text": "随时可能向其政府传递情报，", "startFrame": 322, "durationFrames": 65}, {"text": "这谁能接受？", "startFrame": 386, "durationFrames": 34}]} totalDurationFrames={420} left={{label: "本国角度", src: staticFile("images/华为制裁论/scene_6_4_left.png"), showFrom: 0 }} right={{label: "他国角度", src: staticFile("images/华为制裁论/scene_6_4_right.png"), showFrom: 2 }} />
            </Sequence>
            <Sequence from={1196} durationInFrames={230}>
                <BWCenterFocus content={[{"text": "这一法律条文，", "startFrame": 0, "durationFrames": 34}, {"text": "导致了所有的西方国家，即使需要付出相当的代价，", "startFrame": 33, "durationFrames": 112}, {"text": "但都坚定的开始了去华为化，", "startFrame": 145, "durationFrames": 57}, {"text": "去中国化。", "startFrame": 201, "durationFrames": 28}]} totalDurationFrames={230} imageSrc={staticFile("images/华为制裁论/scene_6_6.png")} enterEffect="slideLeft" anchors={[{"text": "去华为化", "showFrom": 2, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "去中国化", "showFrom": 3, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/华为制裁论/scene_6/scene_6.mp3")} />
        </AbsoluteFill>
    );
};
