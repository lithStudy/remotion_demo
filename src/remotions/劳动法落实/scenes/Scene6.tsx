import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWMethodStack, BWPanelGrid, BWSplitCompare, BWTextFocus } from "../../../components";

// 号召：八小时是底线
const SCENE_DURATION = 164 + 105 + 244 + 242 + 140 + 166;

export const calculateScene6Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene6: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={164}>
                <BWCenterFocus content={[{"text": "最后，", "startFrame": 0, "durationFrames": 15}, {"text": "我必须强调，", "startFrame": 14, "durationFrames": 35}, {"text": "所谓我们必须靠压榨人力，", "startFrame": 49, "durationFrames": 68}, {"text": "完成原始积累。", "startFrame": 116, "durationFrames": 47}]} totalDurationFrames={164} imageSrc={staticFile("images/劳动法落实/scene_6_1.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={164} durationInFrames={105}>
                <BWTextFocus content={[{"text": "理论上是刻舟求剑。", "startFrame": 0, "durationFrames": 48}, {"text": "实践上是饮鸩止渴。", "startFrame": 48, "durationFrames": 57}]} totalDurationFrames={105} coreSentence={[{"text": "理论上是刻舟求剑。", "showFrom": 0}, {"text": "实践上是饮鸩止渴。", "showFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "刻舟求剑", "color": "#EF4444"}, {"coreSentenceAnchor": "饮鸩止渴", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={269} durationInFrames={244}>
                <BWPanelGrid content={[{"text": "只会堆人，堆时间。", "startFrame": 0, "durationFrames": 60}, {"text": "技术创新不动。", "startFrame": 60, "durationFrames": 36}, {"text": "管理升级不动。", "startFrame": 96, "durationFrames": 35}, {"text": "商业模式不动。", "startFrame": 130, "durationFrames": 42}, {"text": "这永远不可能完成产业升级。", "startFrame": 172, "durationFrames": 71}]} totalDurationFrames={244} panels={[{ src: staticFile("images/劳动法落实/scene_6_3_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { src: staticFile("images/劳动法落实/scene_6_3_img1.png"), showFrom: 1, enterEffect: "fadeIn" }, { src: staticFile("images/劳动法落实/scene_6_3_img2.png"), showFrom: 2, enterEffect: "fadeIn" }, { src: staticFile("images/劳动法落实/scene_6_3_img3.png"), showFrom: 3, enterEffect: "fadeIn" }]} anchors={[{"text": "产业升级", "showFrom": 4, "color": "#EF4444", "anim": "spring", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={513} durationInFrames={242}>
                <BWMethodStack content={[{"text": "落实八小时，", "startFrame": 0, "durationFrames": 29}, {"text": "不会制造全民降薪。", "startFrame": 28, "durationFrames": 52}, {"text": "它会把该干的活，分给该有的人。", "startFrame": 79, "durationFrames": 69}, {"text": "它会逼出更多岗位。逼走劣质模式。", "startFrame": 147, "durationFrames": 94}]} totalDurationFrames={242} title={"八小时不降薪"} imageSrc={staticFile("images/劳动法落实/scene_6_5.png")} notes={[{"text": "总工时不变，分配更合理", "showFrom": 1}, {"text": "打破加班文化，创造就业公平", "showFrom": 3}, {"text": "倒逼企业雇佣，淘汰低效模式", "showFrom": 4}]} anchors={[]} />
            </Sequence>
            <Sequence from={755} durationInFrames={140}>
                <BWSplitCompare content={[{"text": "八小时不应该是摆设。", "startFrame": 0, "durationFrames": 57}, {"text": "双休也不应该是福利。", "startFrame": 56, "durationFrames": 51}, {"text": "他们是底线。", "startFrame": 106, "durationFrames": 33}]} totalDurationFrames={140} leftSrc={staticFile("images/劳动法落实/scene_6_6_left.png")} rightSrc={staticFile("images/劳动法落实/scene_6_6_right.png")} leftLabel={"八小时"} rightLabel={"双休"} leftShowFrom={0} rightShowFrom={1} anchors={[{"text": "底线", "showFrom": 2, "color": "#EF4444", "anim": "spring", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={895} durationInFrames={166}>
                <BWTextFocus content={[{"text": "我们需要底线给我们留时间，", "startFrame": 0, "durationFrames": 57}, {"text": "留时间给内需。", "startFrame": 56, "durationFrames": 39}, {"text": "留时间给家庭。", "startFrame": 94, "durationFrames": 35}, {"text": "留时间给创新。", "startFrame": 129, "durationFrames": 36}]} totalDurationFrames={166} coreSentence={[{"text": "我们需要底线给我们留时间，", "showFrom": 0, "endFrom": 0}, {"text": "留时间给内需", "showFrom": 1}, {"text": "留时间给家庭", "showFrom": 2}, {"text": "留时间给创新", "showFrom": 3}]} coreSentenceAnchors={[{"coreSentenceAnchor": "内需", "color": "#EF4444"}, {"coreSentenceAnchor": "家庭", "color": "#EF4444"}, {"coreSentenceAnchor": "创新", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/劳动法落实/scene_6/scene_6.mp3")} />
        </AbsoluteFill>
    );
};
