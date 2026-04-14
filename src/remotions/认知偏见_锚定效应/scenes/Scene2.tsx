import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWConceptCard } from "../../../components";

// 定义与影响
const SCENE_DURATION = 304 + 362 + 172 + 267;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={304}>
                <BWConceptCard content={[{"text": "这在心理学中叫做“锚定效应”：", "startFrame": 0, "durationFrames": 72}, {"text": "人们在做判断时，", "startFrame": 72, "durationFrames": 39}, {"text": "会过度依赖最先接触到的信息（“锚”），", "startFrame": 110, "durationFrames": 100}, {"text": "即使这个信息毫无意义或误导性极强。", "startFrame": 209, "durationFrames": 94}]} totalDurationFrames={304} imageSrc={staticFile("images/认知偏见_锚定效应/scene_2_1.png")} conceptName={"锚定效应"} anchors={[]} />
            </Sequence>
            <Sequence from={304} durationInFrames={362}>
                <BWCenterFocus content={[{"text": "那个999元的原价就是一个沉重的“锚”，", "startFrame": 0, "durationFrames": 96}, {"text": "它像一根无形的铁链死死锁住你。", "startFrame": 95, "durationFrames": 76}, {"text": "一旦你的大脑接受了这个天价设定，", "startFrame": 171, "durationFrames": 69}, {"text": "后面无论价格怎么变，", "startFrame": 240, "durationFrames": 45}, {"text": "只要低于这个数字，", "startFrame": 285, "durationFrames": 36}, {"text": "你都会觉得是优惠。", "startFrame": 321, "durationFrames": 41}]} totalDurationFrames={362} imageSrc={staticFile("images/认知偏见_锚定效应/scene_2_2.png")} enterEffect="slideBottom" anchors={[{"text": "999元的锚", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "接受设定", "showFrom": 2, "color": "#000000", "anim": "slideUp", "audioEffect": "ping"}, {"text": "优惠感", "showFrom": 5, "color": "#000000", "anim": "slideUp", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={666} durationInFrames={172}>
                <BWCenterFocus content={[{"text": "哪怕这件东西的成本只有区区十块钱，", "startFrame": 0, "durationFrames": 81}, {"text": "你依然会为99元的价格欢呼雀跃。", "startFrame": 80, "durationFrames": 91}]} totalDurationFrames={172} imageSrc={staticFile("images/认知偏见_锚定效应/scene_2_3.png")} enterEffect="fadeIn" anchors={[{"text": "成本10块", "showFrom": 0, "color": "#000000", "anim": "highlight", "audioEffect": "ping"}, {"text": "促销99", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "woosh"}]} />
            </Sequence>
            <Sequence from={838} durationInFrames={267}>
                <BWCenterFocus content={[{"text": "这就好比相亲时先给你看张极丑的照片，", "startFrame": 0, "durationFrames": 82}, {"text": "后面再出来个普通人，", "startFrame": 81, "durationFrames": 46}, {"text": "你也觉得眉清目秀。", "startFrame": 127, "durationFrames": 44}, {"text": "我们自以为的理性计算，", "startFrame": 171, "durationFrames": 45}, {"text": "早就被设定了起跑线。", "startFrame": 216, "durationFrames": 51}]} totalDurationFrames={267} imageSrc={staticFile("images/认知偏见_锚定效应/scene_2_4.png")} enterEffect="breathe" anchors={[{"text": "起跑线", "showFrom": 4, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/认知偏见_锚定效应/scene_2/scene_2.mp3")} />
        </AbsoluteFill>
    );
};
