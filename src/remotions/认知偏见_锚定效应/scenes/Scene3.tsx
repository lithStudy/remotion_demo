import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWTextFocus } from "../../../components";

// 剖析：锚定效应的应用场景
const SCENE_DURATION = 94 + 195 + 359 + 470;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={94}>
                <BWTextFocus content={[{"text": "实际上，", "startFrame": 0, "durationFrames": 21}, {"text": "锚定效应不只是出现在购物上。", "startFrame": 20, "durationFrames": 74}]} totalDurationFrames={94} coreSentence={"锚定效应不只是出现在购物上"} coreSentenceAnchors={[{"coreSentenceAnchor": "不只是", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={94} durationInFrames={195}>
                <BWCenterFocus content={[{"text": "职场谈薪时，", "startFrame": 0, "durationFrames": 36}, {"text": "老板先给你一个人均五千的锚，", "startFrame": 36, "durationFrames": 60}, {"text": "等最后落到“工资六千”时，", "startFrame": 96, "durationFrames": 53}, {"text": "你竟然觉得还真不错呢。", "startFrame": 148, "durationFrames": 46}]} totalDurationFrames={195} imageSrc={staticFile("images/认知偏见_锚定效应/scene_3_2.png")} enterEffect="fadeIn" anchors={[{"text": "人均五千", "showFrom": 1, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}, {"text": "能拿六千", "showFrom": 2, "color": "#000000", "anim": "popIn", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={289} durationInFrames={359}>
                <BWCenterFocus content={[{"text": "去饭店点菜，", "startFrame": 0, "durationFrames": 35}, {"text": "菜单第一页躺着几道几千块的澳洲大龙虾", "startFrame": 34, "durationFrames": 112}, {"text": "它们存在的意义根本不是为了被卖掉，", "startFrame": 146, "durationFrames": 83}, {"text": "而是为了让你觉得后面那道98元的红烧肉", "startFrame": 229, "durationFrames": 86}, {"text": "“简直太亲民了”。", "startFrame": 314, "durationFrames": 45}]} totalDurationFrames={359} imageSrc={staticFile("images/认知偏见_锚定效应/scene_3_3.png")} enterEffect="fadeIn" anchors={[{"text": "首页锚定", "showFrom": 1, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}, {"text": "价格亲民", "showFrom": 3, "color": "#22C55E", "anim": "popIn", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={648} durationInFrames={470}>
                <BWCenterFocus content={[{"text": "甚至在房地产售楼处，", "startFrame": 0, "durationFrames": 51}, {"text": "销售永远会先带你看那套地段差、", "startFrame": 50, "durationFrames": 72}, {"text": "户型烂、", "startFrame": 122, "durationFrames": 24}, {"text": "价格还贵的“垃圾房”，", "startFrame": 146, "durationFrames": 55}, {"text": "等你快崩溃时，", "startFrame": 200, "durationFrames": 40}, {"text": "他再掏出那套所谓的“保留房源”，", "startFrame": 240, "durationFrames": 76}, {"text": "即便它依然溢价严重，", "startFrame": 315, "durationFrames": 53}, {"text": "你也会像抓住了救命稻草一样赶紧签合同。", "startFrame": 367, "durationFrames": 102}]} totalDurationFrames={470} imageSrc={staticFile("images/认知偏见_锚定效应/scene_3_4.png")} enterEffect="slideBottom" anchors={[{"text": "垃圾房", "showFrom": 3, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "保留房源", "showFrom": 5, "color": "#000000", "anim": "popIn", "audioEffect": "ping"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/认知偏见_锚定效应/scene_3/scene_3.mp3")} />
        </AbsoluteFill>
    );
};
