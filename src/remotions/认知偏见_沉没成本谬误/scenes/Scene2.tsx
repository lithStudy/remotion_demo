import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWConceptCard } from "../../../components";

// 概念解析
const SCENE_DURATION = 263 + 365 + 300 + 310 + 117;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={263}>
                <BWConceptCard content={[{"text": "这在决策心理学中叫做“沉没成本谬误”：", "startFrame": 0, "durationFrames": 98}, {"text": "简单来说，", "startFrame": 97, "durationFrames": 32}, {"text": "就是为了打翻的牛奶痛哭流涕，", "startFrame": 128, "durationFrames": 79}, {"text": "结果连手里的面包也弄丢了。", "startFrame": 207, "durationFrames": 56}]} totalDurationFrames={263} imageSrc={staticFile("images/认知偏见_沉没成本谬误/scene_2_1.png")} conceptName={"沉没成本谬误"} anchors={[]} />
            </Sequence>
            <Sequence from={263} durationInFrames={365}>
                <BWCenterFocus content={[{"text": "当我们在一段千疮百孔的感情，", "startFrame": 0, "durationFrames": 70}, {"text": "或者一只跌入谷底的股票上，", "startFrame": 69, "durationFrames": 64}, {"text": "投入了巨大且无法收回的真金白银和时间青春后，", "startFrame": 133, "durationFrames": 116}, {"text": "这些所谓的“前期投入”就变成了一副极其沉重的枷锁。", "startFrame": 248, "durationFrames": 116}]} totalDurationFrames={365} imageSrc={staticFile("images/认知偏见_沉没成本谬误/scene_2_2.png")} enterEffect="fadeIn" anchors={[{"text": "枷锁", "showFrom": 3, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={628} durationInFrames={300}>
                <BWCenterFocus content={[{"text": "理智明明疯狂拉响警报，", "startFrame": 0, "durationFrames": 58}, {"text": "告诉你前面是万丈深渊，", "startFrame": 57, "durationFrames": 64}, {"text": "但你却因为舍不得已经输掉的那点筹码，", "startFrame": 121, "durationFrames": 77}, {"text": "而选择瞎着眼睛继续往无底洞里填坑。", "startFrame": 197, "durationFrames": 103}]} totalDurationFrames={300} imageSrc={staticFile("images/认知偏见_沉没成本谬误/scene_2_3.png")} enterEffect="fadeIn" anchors={[{"text": "继续填坑", "showFrom": 2, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={928} durationInFrames={310}>
                <BWCenterFocus content={[{"text": "这就好比你花重金买了一张午夜场的电影票，", "startFrame": 0, "durationFrames": 83}, {"text": "看了半小时发现是部绝世大烂片。", "startFrame": 82, "durationFrames": 85}, {"text": "但你觉得“无论如何这电影票钱不能白花”，", "startFrame": 167, "durationFrames": 88}, {"text": "于是硬挺着看完了全程。", "startFrame": 254, "durationFrames": 55}]} totalDurationFrames={310} imageSrc={staticFile("images/认知偏见_沉没成本谬误/scene_2_4.png")} enterEffect="fadeIn" anchors={[{"text": "绝世烂片", "showFrom": 1, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}, {"text": "不能白花", "showFrom": 2, "color": "#EF4444", "anim": "spring", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={1238} durationInFrames={117}>
                <BWCenterFocus content={[{"text": "结果呢？", "startFrame": 0, "durationFrames": 22}, {"text": "你不仅亏了钱，", "startFrame": 21, "durationFrames": 35}, {"text": "还搭进去了两小时的宝贵生命", "startFrame": 56, "durationFrames": 61}]} totalDurationFrames={117} imageSrc={staticFile("images/认知偏见_沉没成本谬误/scene_2_5.png")} enterEffect="fadeIn" anchors={[{"text": "亏钱", "showFrom": 1, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}, {"text": "宝贵生命", "showFrom": 2, "color": "#000000", "anim": "popIn", "audioEffect": "ping"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/认知偏见_沉没成本谬误/scene_2/scene_2.mp3")} />
        </AbsoluteFill>
    );
};
