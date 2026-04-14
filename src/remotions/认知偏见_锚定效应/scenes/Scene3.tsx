import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWTextFocus } from "../../../components";

// 应用场景
const SCENE_DURATION = 96 + 203 + 354 + 475;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={96}>
                <BWTextFocus content={[{"text": "实际上，", "startFrame": 0, "durationFrames": 24}, {"text": "锚定效应不只是出现在购物上。", "startFrame": 24, "durationFrames": 72}]} totalDurationFrames={96} coreSentence={["锚定效应不只是出现在购物上"]} coreSentenceAnchors={[{"coreSentenceAnchor": "不只是", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={96} durationInFrames={203}>
                <BWCenterFocus content={[{"text": "职场谈薪时，", "startFrame": 0, "durationFrames": 36}, {"text": "老板先给你一个人均五千的锚，", "startFrame": 36, "durationFrames": 68}, {"text": "等最后落到“工资六千”时，", "startFrame": 103, "durationFrames": 53}, {"text": "你竟然觉得还真不错呢。", "startFrame": 155, "durationFrames": 47}]} totalDurationFrames={203} imageSrc={staticFile("images/认知偏见_锚定效应/scene_3_2.png")} enterEffect="fadeIn" anchors={[{"text": "人均五千", "showFrom": 1, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}, {"text": "能拿六千", "showFrom": 2, "color": "#000000", "anim": "popIn", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={299} durationInFrames={354}>
                <BWCenterFocus content={[{"text": "去饭店点菜，", "startFrame": 0, "durationFrames": 39}, {"text": "菜单第一页躺着几道几千块的澳洲大龙虾", "startFrame": 38, "durationFrames": 101}, {"text": "它们存在的意义根本不是为了被卖掉，", "startFrame": 138, "durationFrames": 69}, {"text": "而是为了让你觉得后面那道98元的红烧肉", "startFrame": 207, "durationFrames": 93}, {"text": "“简直太亲民了”。", "startFrame": 299, "durationFrames": 54}]} totalDurationFrames={354} imageSrc={staticFile("images/认知偏见_锚定效应/scene_3_3.png")} enterEffect="fadeIn" anchors={[{"text": "首页锚定", "showFrom": 1, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}, {"text": "价格亲民", "showFrom": 3, "color": "#22C55E", "anim": "popIn", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={653} durationInFrames={475}>
                <BWCenterFocus content={[{"text": "甚至在房地产售楼处，", "startFrame": 0, "durationFrames": 47}, {"text": "销售永远会先带你看那套地段差、", "startFrame": 46, "durationFrames": 79}, {"text": "户型烂、", "startFrame": 125, "durationFrames": 27}, {"text": "价格还贵的“垃圾房”，", "startFrame": 151, "durationFrames": 65}, {"text": "等你快崩溃时，", "startFrame": 216, "durationFrames": 36}, {"text": "他再掏出那套所谓的“保留房源”，", "startFrame": 251, "durationFrames": 73}, {"text": "即便它依然溢价严重，", "startFrame": 324, "durationFrames": 54}, {"text": "你也会像抓住了救命稻草一样赶紧签合同。", "startFrame": 377, "durationFrames": 98}]} totalDurationFrames={475} imageSrc={staticFile("images/认知偏见_锚定效应/scene_3_4.png")} enterEffect="slideBottom" anchors={[{"text": "垃圾房", "showFrom": 3, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "保留房源", "showFrom": 5, "color": "#000000", "anim": "popIn", "audioEffect": "ping"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/认知偏见_锚定效应/scene_3/scene_3.mp3")} />
        </AbsoluteFill>
    );
};
