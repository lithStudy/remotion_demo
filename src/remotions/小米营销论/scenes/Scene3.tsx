import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCaseBreakdown, BWCenterFocus, BWQuoteCitation, BWTextFocus } from "../../../components";

// 命名：理工男浪漫
const SCENE_DURATION = 60 + 188 + 210 + 91 + 99;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={60}>
                <BWCenterFocus content={[{"text": "到了今天，", "startFrame": 0, "durationFrames": 30}, {"text": "这种工程师文化一点没变。", "startFrame": 30, "durationFrames": 30}]} totalDurationFrames={60} imageSrc={staticFile("一名工程师坐在监测屏幕前，屏幕上显示电动汽车的电量下降曲线")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={60} durationInFrames={188}>
                <BWCaseBreakdown content={[{"text": "你说你的电池耐用？", "startFrame": 0, "durationFrames": 30}, {"text": "别拿实验室的PPT数据糊弄我，", "startFrame": 30, "durationFrames": 33}, {"text": "咱们直接开个直播。", "startFrame": 63, "durationFrames": 30}, {"text": "高管自己开着车，", "startFrame": 93, "durationFrames": 30}, {"text": "从满电跑到趴窝，", "startFrame": 123, "durationFrames": 30}, {"text": "几十万网友盯着看真实的掉电曲线。", "startFrame": 153, "durationFrames": 35}]} totalDurationFrames={188} title={"电池续航直播验"} imageSrc={staticFile("一位高管坐在电动车驾驶座，手握方向盘，仪表盘电量从100%逐渐降至0%，背景是直播界面，显示大量网友实时观看")} phases={[{"phaseLabel": "质疑续航", "showFrom": 0}, {"phaseLabel": "拒绝纸面", "showFrom": 1}, {"phaseLabel": "直播开验", "showFrom": 2}, {"phaseLabel": "真曲线", "showFrom": 5}]} anchors={[{"text": "掉电曲线", "showFrom": 5, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={248} durationInFrames={210}>
                <BWCaseBreakdown content={[{"text": "你说你的用料扎实？", "startFrame": 0, "durationFrames": 30}, {"text": "好，", "startFrame": 30, "durationFrames": 30}, {"text": "直接把车大卸八块，", "startFrame": 60, "durationFrames": 30}, {"text": "防撞梁多厚、", "startFrame": 90, "durationFrames": 30}, {"text": "电机什么结构、", "startFrame": 120, "durationFrames": 30}, {"text": "线束怎么走的，", "startFrame": 150, "durationFrames": 30}, {"text": "明明白白摆在台面上。", "startFrame": 180, "durationFrames": 30}]} totalDurationFrames={210} title={"用料拆解透明验"} imageSrc={staticFile("一辆汽车大卸八块分解展示，防撞梁、电机、线束等零件整齐摆在台面上供检验")} phases={[{"phaseLabel": "质疑用料", "showFrom": 0}, {"phaseLabel": "动手拆解", "showFrom": 2}, {"phaseLabel": "逐项验明", "showFrom": 3}, {"phaseLabel": "透明收束", "showFrom": 6}]} anchors={[]} />
            </Sequence>
            <Sequence from={458} durationInFrames={91}>
                <BWTextFocus content={[{"text": "这种营销，", "startFrame": 0, "durationFrames": 30}, {"text": "没有任何滤镜，", "startFrame": 30, "durationFrames": 30}, {"text": "也没有任何花里胡哨的形容词。", "startFrame": 60, "durationFrames": 31}]} totalDurationFrames={91} coreSentence={[{"text": "这种营销，", "showFrom": 0}, {"text": "没有任何滤镜，", "showFrom": 1}, {"text": "也没有任何花里胡哨的形容词。", "showFrom": 2}]} coreSentenceAnchors={[]} />
            </Sequence>
            <Sequence from={549} durationInFrames={99}>
                <BWQuoteCitation content={[{"text": "它就是一种极致的理工男浪漫：", "startFrame": 0, "durationFrames": 31}, {"text": "Talk is cheap,", "startFrame": 31, "durationFrames": 31}, {"text": "show me the code.", "startFrame": 62, "durationFrames": 37}]} totalDurationFrames={99} quoteSource={"Linus Torvalds"} showFrom={1} anchors={[]} />
            </Sequence>

        </AbsoluteFill>
    );
};
