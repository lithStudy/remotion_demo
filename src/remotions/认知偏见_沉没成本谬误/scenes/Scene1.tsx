import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCauseChain, BWCenterFocus, BWCognitiveShift } from "../../../components";

// 案例引入
const SCENE_DURATION = 278 + 198 + 482 + 190 + 267;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={278}>
                <BWCenterFocus content={[{"text": "看着账户里那只已经腰斩的烂股票，", "startFrame": 0, "durationFrames": 81}, {"text": "你咬紧后槽牙关掉软件，", "startFrame": 80, "durationFrames": 66}, {"text": "在心里默默发狠：", "startFrame": 146, "durationFrames": 47}, {"text": "只要我不割肉，就不算真亏。", "startFrame": 193, "durationFrames": 84}]} totalDurationFrames={278} imageSrc={staticFile("images/认知偏见_沉没成本谬误/scene_1_1.png")} enterEffect="fadeIn" anchors={[{"text": "腰斩", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "不割肉", "showFrom": 3, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={278} durationInFrames={198}>
                <BWCenterFocus content={[{"text": "这种带着“壮士断腕”般悲壮的死扛，", "startFrame": 0, "durationFrames": 80}, {"text": "是不是让你瞬间觉得自己是个极有毅力、", "startFrame": 79, "durationFrames": 78}, {"text": "深谙长期主义的人？", "startFrame": 157, "durationFrames": 41}]} totalDurationFrames={198} imageSrc={staticFile("images/认知偏见_沉没成本谬误/scene_1_2.png")} enterEffect="fadeIn" anchors={[{"text": "壮士断腕", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={476} durationInFrames={482}>
                <BWCauseChain content={[{"text": "这看似无可挑剔的坚持，", "startFrame": 0, "durationFrames": 46}, {"text": "是不是让你在那一刻产生了某种自我感动的幻觉？", "startFrame": 45, "durationFrames": 102}, {"text": "我们总是容易被这种“坚持到底就是胜利”的执念深深麻醉，", "startFrame": 147, "durationFrames": 130}, {"text": "觉得退缩和及时止损就是懦弱的逃兵。", "startFrame": 277, "durationFrames": 93}, {"text": "但其实，", "startFrame": 369, "durationFrames": 23}, {"text": "你正在被一个叫做“过去”的幽灵无情绑架。", "startFrame": 392, "durationFrames": 89}]} totalDurationFrames={482} layout={"horizontal"} nodes={[{ label: "自我感动", imageSrc: staticFile("images/认知偏见_沉没成本谬误/scene_1_3_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { label: "执念麻醉", imageSrc: staticFile("images/认知偏见_沉没成本谬误/scene_1_3_img1.png"), showFrom: 2, enterEffect: "fadeIn" }, { label: "被过去绑架", imageSrc: staticFile("images/认知偏见_沉没成本谬误/scene_1_3_img2.png"), showFrom: 4, enterEffect: "fadeIn" }]} />
            </Sequence>
            <Sequence from={958} durationInFrames={190}>
                <BWCognitiveShift content={[{"text": "这不是因为你对未来抱有确凿的希望，", "startFrame": 0, "durationFrames": 72}, {"text": "而是因为我们根本没有勇气直面已经造成的损失。", "startFrame": 72, "durationFrames": 118}]} totalDurationFrames={190} notText={"抱有确凿希望"} butText={"没有勇气直面"} butSrc={staticFile("images/认知偏见_沉没成本谬误/scene_1_4.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Sequence from={1148} durationInFrames={267}>
                <BWCenterFocus content={[{"text": "为了保护那点脆弱的自尊心，", "startFrame": 0, "durationFrames": 62}, {"text": "为了不让之前的付出变成一个彻头彻尾的笑话，", "startFrame": 61, "durationFrames": 92}, {"text": "我们宁愿自己蒙上眼睛，", "startFrame": 152, "durationFrames": 51}, {"text": "在发臭的泥潭里越陷越深。", "startFrame": 202, "durationFrames": 64}]} totalDurationFrames={267} imageSrc={staticFile("images/认知偏见_沉没成本谬误/scene_1_5.png")} enterEffect="fadeIn" anchors={[{"text": "自尊心", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "越陷越深", "showFrom": 3, "color": "#EF4444", "anim": "highlight", "audioEffect": "woosh"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/认知偏见_沉没成本谬误/scene_1/scene_1.mp3")} />
        </AbsoluteFill>
    );
};
