import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift, BWConceptCard, BWKpiHero, BWMethodStack, BWTextFocus } from "../../../components";

// 剖析
const SCENE_DURATION = 60 + 213 + 145 + 84 + 125 + 277 + 221 + 307 + 266 + 179 + 275 + 140;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={60}>
                <BWCenterFocus content={[{"text": "这三件事，", "startFrame": 0, "durationFrames": 26}, {"text": "看完就清楚了。", "startFrame": 25, "durationFrames": 35}]} totalDurationFrames={60} imageSrc={staticFile("images/智驾兜底论/scene_2_1.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={60} durationInFrames={213}>
                <BWMethodStack content={[{"text": "第一，", "startFrame": 0, "durationFrames": 18}, {"text": "你要先买高阶功能包。", "startFrame": 17, "durationFrames": 40}, {"text": "这不是白送。", "startFrame": 56, "durationFrames": 42}, {"text": "不是全员覆盖。", "startFrame": 98, "durationFrames": 39}, {"text": "你要先掏一笔钱，", "startFrame": 136, "durationFrames": 34}, {"text": "才有资格谈所谓兜底。", "startFrame": 170, "durationFrames": 43}]} totalDurationFrames={213} title={"先掏钱才有兜底资格"} imageSrc={staticFile("images/智驾兜底论/scene_2_2.png")} notes={[{"text": "高阶功能包前提", "showFrom": 1}, {"text": "先掏钱", "showFrom": 4}]} anchors={[]} />
            </Sequence>
            <Sequence from={273} durationInFrames={145}>
                <BWKpiHero content={[{"text": "6月底前，", "startFrame": 0, "durationFrames": 28}, {"text": "一次买断3.2万。", "startFrame": 27, "durationFrames": 58}, {"text": "7月1日涨到3.6万。", "startFrame": 85, "durationFrames": 60}]} totalDurationFrames={145} blocks={[{"value": 3.2, "suffix": "万", "label": "6月底前", "showFrom": 1, "decimalPlaces": 1}, {"value": 3.6, "suffix": "万", "label": "7月1日", "showFrom": 2, "decimalPlaces": 1}]} anchors={[]} />
            </Sequence>
            <Sequence from={418} durationInFrames={84}>
                <BWKpiHero content={[{"text": "为了这个权益，", "startFrame": 0, "durationFrames": 32}, {"text": "你还要多付4000。", "startFrame": 31, "durationFrames": 53}]} totalDurationFrames={84} blocks={[{"value": 4000, "showFrom": 1, "label": "额外费用", "useGrouping": false, "decimalPlaces": 0}]} anchors={[]} />
            </Sequence>
            <Sequence from={502} durationInFrames={125}>
                <BWConceptCard content={[{"text": "所谓多出来的兜底，", "startFrame": 0, "durationFrames": 38}, {"text": "本质上就是用这4000块，", "startFrame": 37, "durationFrames": 46}, {"text": "买了个智驾补充险。", "startFrame": 82, "durationFrames": 42}]} totalDurationFrames={125} imageSrc={staticFile("images/智驾兜底论/scene_2_5.png")} conceptName={"智驾补充险"} anchors={[]} />
            </Sequence>
            <Sequence from={627} durationInFrames={277}>
                <BWMethodStack content={[{"text": "第二，", "startFrame": 0, "durationFrames": 18}, {"text": "并不是优先赔付。", "startFrame": 17, "durationFrames": 45}, {"text": "出事故以后，", "startFrame": 62, "durationFrames": 31}, {"text": "先走交强险。", "startFrame": 92, "durationFrames": 33}, {"text": "再走商业险。", "startFrame": 125, "durationFrames": 36}, {"text": "两层保险都赔不够了。", "startFrame": 161, "durationFrames": 67}, {"text": "才轮到所谓的兜底。", "startFrame": 227, "durationFrames": 49}]} totalDurationFrames={277} title={"赔付顺序"} imageSrc={staticFile("images/智驾兜底论/scene_2_6.png")} notes={[{"text": "先走交强险", "showFrom": 3}, {"text": "再走商业险", "showFrom": 4}, {"text": "两层不够才兜底", "showFrom": 5}]} anchors={[]} />
            </Sequence>
            <Sequence from={904} durationInFrames={221}>
                <BWCognitiveShift content={[{"text": "厂家不是第一责任人。", "startFrame": 0, "durationFrames": 52}, {"text": "你自己的保险，", "startFrame": 51, "durationFrames": 34}, {"text": "才是第一层。", "startFrame": 85, "durationFrames": 33}, {"text": "智驾的问题，", "startFrame": 117, "durationFrames": 30}, {"text": "依然还是让你来先承担损失。", "startFrame": 147, "durationFrames": 74}]} totalDurationFrames={221} notText={"厂家第一责任人"} butText={"你的保险第一层"} butSrc={staticFile("images/智驾兜底论/scene_2_7.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Sequence from={1125} durationInFrames={307}>
                <BWMethodStack content={[{"text": "第三，", "startFrame": 0, "durationFrames": 19}, {"text": "这个所谓兜底，", "startFrame": 18, "durationFrames": 38}, {"text": "也不是无条件全包。", "startFrame": 55, "durationFrames": 39}, {"text": "要正常使用智驾。", "startFrame": 94, "durationFrames": 48}, {"text": "那么什么叫正常？", "startFrame": 142, "durationFrames": 38}, {"text": "谁来定义正常？", "startFrame": 179, "durationFrames": 38}, {"text": "谁能确认是否正常？", "startFrame": 217, "durationFrames": 51}, {"text": "都是厂家说了算。", "startFrame": 267, "durationFrames": 40}]} totalDurationFrames={307} title={"不是无条件全包"} imageSrc={staticFile("images/智驾兜底论/scene_2_8.png")} notes={[{"text": "需正常使用智驾", "showFrom": 3}, {"text": "正常如何定义", "showFrom": 4}, {"text": "厂家说了算", "showFrom": 7}]} anchors={[]} />
            </Sequence>
            <Sequence from={1432} durationInFrames={266}>
                <BWKpiHero content={[{"text": "而且巡航场景里，", "startFrame": 0, "durationFrames": 43}, {"text": "小额车损还有500元门槛。", "startFrame": 42, "durationFrames": 68}, {"text": "大额车损，", "startFrame": 110, "durationFrames": 27}, {"text": "只是按车损险赔付金额的10%补。", "startFrame": 136, "durationFrames": 79}, {"text": "最高不超过5万元。", "startFrame": 215, "durationFrames": 51}]} totalDurationFrames={266} blocks={[{"value": 500, "suffix": "元", "label": "小额车损门槛", "showFrom": 1, "decimalPlaces": 0}, {"value": 10, "suffix": "%", "label": "大额车损补足", "showFrom": 3, "decimalPlaces": 0}, {"value": 5, "suffix": "万", "label": "赔付上限", "showFrom": 4, "decimalPlaces": 0}]} anchors={[]} />
            </Sequence>
            <Sequence from={1698} durationInFrames={179}>
                <BWCenterFocus content={[{"text": "另外，人员和三者损失，", "startFrame": 0, "durationFrames": 64}, {"text": "也是超出强制险和商业险上限之后，", "startFrame": 63, "durationFrames": 82}, {"text": "才按规则补。", "startFrame": 145, "durationFrames": 34}]} totalDurationFrames={179} imageSrc={staticFile("images/智驾兜底论/scene_2_10.png")} enterEffect="fadeIn" anchors={[{"text": "超出上限", "showFrom": 1, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={1877} durationInFrames={275}>
                <BWKpiHero content={[{"text": "而商业三者险，", "startFrame": 0, "durationFrames": 41}, {"text": "100万起步基本是标配", "startFrame": 40, "durationFrames": 62}, {"text": "加上交强险20万，", "startFrame": 101, "durationFrames": 46}, {"text": "绝大多数事故，", "startFrame": 147, "durationFrames": 33}, {"text": "这两层就够了。", "startFrame": 180, "durationFrames": 32}, {"text": "更别说辅助驾驶的场景了。", "startFrame": 211, "durationFrames": 64}]} totalDurationFrames={275} blocks={[{"value": 100, "suffix": "万", "label": "商业三者险", "showFrom": 1, "decimalPlaces": 0}, {"value": 20, "suffix": "万", "label": "交强险", "showFrom": 2, "decimalPlaces": 0}]} anchors={[{"text": "这两层就够了", "showFrom": 4, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={2152} durationInFrames={140}>
                <BWTextFocus content={[{"text": "额外的保险当然有价值。", "startFrame": 0, "durationFrames": 58}, {"text": "可它不是兜底。", "startFrame": 57, "durationFrames": 33}, {"text": "它叫智驾险加强版。", "startFrame": 89, "durationFrames": 50}]} totalDurationFrames={140} coreSentence={[{"text": "额外的保险当然有价值。", "showFrom": 0, "endFrom": 1}, {"text": "可它不是兜底。", "showFrom": 1}, {"text": "它叫智驾险加强版。", "showFrom": 2}]} coreSentenceAnchors={[{"coreSentenceAnchor": "补差", "color": "#EF4444"}, {"coreSentenceAnchor": "第三层保障", "color": "#EF4444"}, {"coreSentenceAnchor": "智驾险加强版", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/智驾兜底论/scene_2/scene_2.mp3")} />
        </AbsoluteFill>
    );
};
