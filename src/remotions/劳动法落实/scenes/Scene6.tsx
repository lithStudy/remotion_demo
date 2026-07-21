import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWMethodStack, BWPanelGrid, BWSplitCompare, BWTextFocus } from "../../../components";

// 号召：八小时是底线
const SCENE_DURATION = 138 + 101 + 234 + 231 + 119 + 189;

export const calculateScene6Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene6: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={138}>
                <BWCenterFocus content={[{"text": "最后，", "startFrame": 0, "durationFrames": 16}, {"text": "我必须强调，", "startFrame": 15, "durationFrames": 35}, {"text": "所谓我们必须靠压榨人力，", "startFrame": 50, "durationFrames": 56}, {"text": "完成原始积累。", "startFrame": 105, "durationFrames": 32}]} totalDurationFrames={138} imageSrc={staticFile("images/劳动法落实/scene_6_1.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={138} durationInFrames={101}>
                <BWTextFocus content={[{"text": "理论上是刻舟求剑。", "startFrame": 0, "durationFrames": 46}, {"text": "实践上是饮鸩止渴。", "startFrame": 45, "durationFrames": 55}]} totalDurationFrames={101} coreSentence={[{"text": "理论上是刻舟求剑。", "showFrom": 0}, {"text": "实践上是饮鸩止渴。", "showFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "刻舟求剑", "color": "#EF4444"}, {"coreSentenceAnchor": "饮鸩止渴", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={239} durationInFrames={234}>
                <BWPanelGrid content={[{"text": "只会堆人，堆时间。", "startFrame": 0, "durationFrames": 54}, {"text": "技术创新不动。", "startFrame": 53, "durationFrames": 42}, {"text": "管理升级不动。", "startFrame": 94, "durationFrames": 38}, {"text": "商业模式不动。", "startFrame": 131, "durationFrames": 35}, {"text": "这永远不可能完成产业升级。", "startFrame": 165, "durationFrames": 68}]} totalDurationFrames={234} panels={[{ src: staticFile("images/劳动法落实/scene_6_3_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { src: staticFile("images/劳动法落实/scene_6_3_img1.png"), showFrom: 1, enterEffect: "fadeIn" }, { src: staticFile("images/劳动法落实/scene_6_3_img2.png"), showFrom: 2, enterEffect: "fadeIn" }, { src: staticFile("images/劳动法落实/scene_6_3_img3.png"), showFrom: 3, enterEffect: "fadeIn" }]} anchors={[{"text": "产业升级", "showFrom": 4, "color": "#EF4444", "anim": "spring", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={473} durationInFrames={231}>
                <BWMethodStack content={[{"text": "落实八小时，", "startFrame": 0, "durationFrames": 29}, {"text": "不会制造全民降薪。", "startFrame": 28, "durationFrames": 45}, {"text": "它会把该干的活，分给该有的人。", "startFrame": 73, "durationFrames": 77}, {"text": "它会逼出更多岗位。逼走劣质模式。", "startFrame": 149, "durationFrames": 81}]} totalDurationFrames={231} title={"八小时不降薪"} imageSrc={staticFile("images/劳动法落实/scene_6_5.png")} notes={[{"text": "总工时不变，分配更合理", "showFrom": 1}, {"text": "打破加班文化，创造就业公平", "showFrom": 3}, {"text": "倒逼企业雇佣，淘汰低效模式", "showFrom": 4}]} anchors={[]} />
            </Sequence>
            <Sequence from={704} durationInFrames={119}>
                <BWSplitCompare content={[{"text": "八小时不应该是摆设。", "startFrame": 0, "durationFrames": 46}, {"text": "双休也不应该是福利。", "startFrame": 45, "durationFrames": 46}, {"text": "他们是底线。", "startFrame": 91, "durationFrames": 28}]} totalDurationFrames={119} leftSrc={staticFile("images/劳动法落实/scene_6_6_left.png")} rightSrc={staticFile("images/劳动法落实/scene_6_6_right.png")} leftLabel={"八小时"} rightLabel={"双休"} leftShowFrom={0} rightShowFrom={1} anchors={[{"text": "底线", "showFrom": 2, "color": "#EF4444", "anim": "spring", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={823} durationInFrames={189}>
                <BWTextFocus content={[{"text": "我们需要底线给我们留时间，", "startFrame": 0, "durationFrames": 56}, {"text": "留时间给内需。", "startFrame": 55, "durationFrames": 38}, {"text": "留时间给家庭。", "startFrame": 93, "durationFrames": 50}, {"text": "留时间给创新。", "startFrame": 142, "durationFrames": 47}]} totalDurationFrames={189} coreSentence={[{"text": "我们需要底线给我们留时间，", "showFrom": 0, "endFrom": 0}, {"text": "留时间给内需", "showFrom": 1}, {"text": "留时间给家庭", "showFrom": 2}, {"text": "留时间给创新", "showFrom": 3}]} coreSentenceAnchors={[{"coreSentenceAnchor": "内需", "color": "#EF4444"}, {"coreSentenceAnchor": "家庭", "color": "#EF4444"}, {"coreSentenceAnchor": "创新", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/劳动法落实/scene_6/scene_6.mp3")} />
        </AbsoluteFill>
    );
};
