import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCauseChain, BWCenterFocus, BWQuoteCitation } from "../../../components";

// 引入·爱国支持逻辑
const SCENE_DURATION = 130 + 138 + 111 + 188;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={130}>
                <BWQuoteCitation content={[{"text": "我一定要无条件支持国产！ ", "startFrame": 0, "durationFrames": 66}, {"text": " 他做的再烂，", "startFrame": 65, "durationFrames": 18}, {"text": "我也要买，", "startFrame": 82, "durationFrames": 20}, {"text": "因为我爱国！", "startFrame": 102, "durationFrames": 27}]} totalDurationFrames={130} quoteDisplayText={"我一定要无条件支持国产！他做的再烂，我也要买，因为我爱国！"} quoteSource={"爱国情怀"} anchors={[]} />
            </Sequence>
            <Sequence from={130} durationInFrames={138}>
                <BWCenterFocus content={[{"text": "这种声音，", "startFrame": 0, "durationFrames": 24}, {"text": "你一定不陌生。", "startFrame": 24, "durationFrames": 35}, {"text": "这套逻辑听起来非常朴素，", "startFrame": 58, "durationFrames": 51}, {"text": "甚至很感人：", "startFrame": 109, "durationFrames": 29}]} totalDurationFrames={138} imageSrc={staticFile("images/国产情怀的谎言/scene_1_2.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={268} durationInFrames={111}>
                <BWCauseChain content={[{"text": "我花钱支持，", "startFrame": 0, "durationFrames": 36}, {"text": "企业拿钱搞研发，", "startFrame": 36, "durationFrames": 34}, {"text": "国产就能崛起。", "startFrame": 69, "durationFrames": 42}]} totalDurationFrames={111} layout={"horizontal"} nodes={[{ label: "花钱支持", imageSrc: staticFile("images/国产情怀的谎言/scene_1_3_img0.png"), showFrom: 0 }, { label: "企业研发", imageSrc: staticFile("images/国产情怀的谎言/scene_1_3_img1.png"), showFrom: 1 }, { label: "国产崛起", imageSrc: staticFile("images/国产情怀的谎言/scene_1_3_img2.png"), showFrom: 2 }]} anchors={[]} />
            </Sequence>
            <Sequence from={379} durationInFrames={188}>
                <BWCenterFocus content={[{"text": "我很尊重这种赤诚，", "startFrame": 0, "durationFrames": 51}, {"text": "但我不得不提醒你：", "startFrame": 50, "durationFrames": 38}, {"text": "这里面有一个非常危险的、", "startFrame": 87, "durationFrames": 55}, {"text": "理想化的错误逻辑。", "startFrame": 141, "durationFrames": 46}]} totalDurationFrames={188} imageSrc={staticFile("images/国产情怀的谎言/scene_1_4.png")} enterEffect="slideBottom" anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/国产情怀的谎言/scene_1/scene_1.mp3")} />
        </AbsoluteFill>
    );
};
