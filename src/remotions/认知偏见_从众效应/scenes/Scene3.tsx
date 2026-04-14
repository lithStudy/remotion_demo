import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCaseBreakdown, BWCenterFocus } from "../../../components";

// 剖析：羊群效应危害
const SCENE_DURATION = 125 + 329 + 399 + 375;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={125}>
                <BWCenterFocus content={[{"text": "这种缺乏理智的羊群行为，", "startFrame": 0, "durationFrames": 55}, {"text": "无所不在的影响你的人生轨迹。", "startFrame": 54, "durationFrames": 70}]} totalDurationFrames={125} imageSrc={staticFile("images/认知偏见_从众效应/scene_3_1.png")} enterEffect="fadeIn" />
            </Sequence>
            <Sequence from={125} durationInFrames={329}>
                <BWCaseBreakdown content={[{"text": " 看朋友圈在讨论牛市已来，", "startFrame": 0, "durationFrames": 57}, {"text": " 听大家都在高喊财富自由，", "startFrame": 56, "durationFrames": 62}, {"text": " 你就掏出所有积蓄跟风入场。", "startFrame": 117, "durationFrames": 64}, {"text": " 你根本不知道，", "startFrame": 181, "durationFrames": 34}, {"text": " 当大妈都来谈论风口时，", "startFrame": 214, "durationFrames": 55}, {"text": " 就是庄家提笼收网的时机", "startFrame": 269, "durationFrames": 59}]} totalDurationFrames={329} title={"韭菜暴富陷阱"} imageSrc={staticFile("images/认知偏见_从众效应/scene_3_2.png")} phases={[{"phaseLabel": "大众情绪", "showFrom": 0}, {"phaseLabel": "跟风入场", "showFrom": 2}, {"phaseLabel": "资本收割", "showFrom": 5}]} anchors={[]} />
            </Sequence>
            <Sequence from={454} durationInFrames={399}>
                <BWCaseBreakdown content={[{"text": " 看同事争相换了最新款手机，", "startFrame": 0, "durationFrames": 67}, {"text": " 背着溢价严重的奢侈品包包。", "startFrame": 66, "durationFrames": 64}, {"text": " 哪怕你还得还高额花呗，", "startFrame": 129, "durationFrames": 69}, {"text": " 也要咬着后槽牙硬挺跟进。", "startFrame": 198, "durationFrames": 69}, {"text": " 因为你打心底里恐惧，", "startFrame": 267, "durationFrames": 47}, {"text": " 一旦脱节就会沦为鄙视链底端。", "startFrame": 314, "durationFrames": 84}]} totalDurationFrames={399} title={"消费主义陷阱"} imageSrc={staticFile("images/认知偏见_从众效应/scene_3_3.png")} phases={[{"phaseLabel": "盲目攀比", "showFrom": 0}, {"phaseLabel": "负债前行", "showFrom": 2}, {"phaseLabel": "精神困境", "showFrom": 4}]} anchors={[]} />
            </Sequence>
            <Sequence from={853} durationInFrames={375}>
                <BWCaseBreakdown content={[{"text": " 当全网都在声讨热点当事人，", "startFrame": 0, "durationFrames": 67}, {"text": " 你连事情真相都没弄清楚，", "startFrame": 66, "durationFrames": 52}, {"text": " 就急不可耐地敲键盘跟风狂骂。", "startFrame": 117, "durationFrames": 73}, {"text": " 你以为自己是在替天行道，", "startFrame": 189, "durationFrames": 56}, {"text": " 其实只是给吃血馒头的号主，", "startFrame": 245, "durationFrames": 65}, {"text": " 贡献了微不足道的流量数据。", "startFrame": 309, "durationFrames": 65}]} totalDurationFrames={375} title={"网络暴力狂欢"} imageSrc={staticFile("images/认知偏见_从众效应/scene_3_4.png")} phases={[{"phaseLabel": "现象", "showFrom": 0}, {"phaseLabel": "盲从", "showFrom": 2}, {"phaseLabel": "反噬", "showFrom": 4}]} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/认知偏见_从众效应/scene_3/scene_3.mp3")} />
        </AbsoluteFill>
    );
};
