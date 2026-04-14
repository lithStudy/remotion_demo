import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWMethodStack } from "../../../components";

// 召唤：焊死三道防线
const SCENE_DURATION = 132 + 503 + 527 + 419;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={132}>
                <BWCenterFocus content={[{"text": "想在乌合之众里保住清醒的大脑，", "startFrame": 0, "durationFrames": 64}, {"text": " 你必须死死焊住这三道防线：", "startFrame": 63, "durationFrames": 69}]} totalDurationFrames={132} imageSrc={staticFile("images/认知偏见_从众效应/scene_4_1.png")} enterEffect="fadeIn" anchors={[{"text": "清醒的大脑", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={132} durationInFrames={503}>
                <BWMethodStack content={[{"text": "第一，建立“强制隔离期”。", "startFrame": 0, "durationFrames": 76}, {"text": " 在排队狂欢或跟风下单前，", "startFrame": 75, "durationFrames": 70}, {"text": " 强迫自己停机思考三秒钟，", "startFrame": 145, "durationFrames": 73}, {"text": " 反问三个直击灵魂的问题：", "startFrame": 217, "durationFrames": 62}, {"text": "这东西我真的必须买吗？", "startFrame": 278, "durationFrames": 51}, {"text": " 地球上就没有其他平替吗？", "startFrame": 328, "durationFrames": 54}, {"text": " 哪怕店门口半个人影都没有，", "startFrame": 381, "durationFrames": 62}, {"text": " 我也一样会毅然走进去吗？", "startFrame": 442, "durationFrames": 61}]} totalDurationFrames={503} title={"建立强制隔离期"} imageSrc={staticFile("images/认知偏见_从众效应/scene_4_2.png")} notes={[{"text": "停机思考三秒钟", "showFrom": 1}, {"text": "反问直击灵魂的问题", "showFrom": 3}]} anchors={[]} />
            </Sequence>
            <Sequence from={635} durationInFrames={527}>
                <BWMethodStack content={[{"text": "第二，开启反人性预警器。", "startFrame": 0, "durationFrames": 82}, {"text": "对全网跟风爆火保持生理警惕。", "startFrame": 81, "durationFrames": 96}, {"text": " 仔细回想股神巴菲特说的，", "startFrame": 177, "durationFrames": 59}, {"text": " 要在别人贪婪时感受恐惧。", "startFrame": 236, "durationFrames": 78}, {"text": "当一条独木桥挤满狂乱人群时，", "startFrame": 314, "durationFrames": 78}, {"text": " 它通向的往往不是光辉顶点，", "startFrame": 391, "durationFrames": 69}, {"text": " 而是惨烈的大型踩踏现场。", "startFrame": 460, "durationFrames": 67}]} totalDurationFrames={527} title={"开启反人性预警"} imageSrc={staticFile("images/认知偏见_从众效应/scene_4_4.png")} notes={[{"text": "对全网爆火保持生理警惕", "showFrom": 1}, {"text": "别人贪婪时你要感受恐惧", "showFrom": 3}, {"text": "人群的方向往往是踩踏而非顶点", "showFrom": 4}]} anchors={[]} />
            </Sequence>
            <Sequence from={1162} durationInFrames={419}>
                <BWMethodStack content={[{"text": "第三，接受高质量的孤独。", "startFrame": 0, "durationFrames": 71}, {"text": "彻底斩断对群体认同的病态渴望。", "startFrame": 70, "durationFrames": 91}, {"text": " 坦然接受自己和别人的不同，", "startFrame": 161, "durationFrames": 57}, {"text": " 接受不合群带来的短暂焦虑。", "startFrame": 218, "durationFrames": 77}, {"text": "在人云亦云的喧嚣世界里，", "startFrame": 294, "durationFrames": 59}, {"text": " 独立本身就是最昂贵的奢侈品。", "startFrame": 353, "durationFrames": 66}]} totalDurationFrames={419} title={"接受高质量孤独"} imageSrc={staticFile("images/认知偏见_从众效应/scene_4_7.png")} notes={[{"text": "斩断对群体认同的病态渴望", "showFrom": 1}, {"text": "接纳独立的焦虑", "showFrom": 3}, {"text": "独立本身就是最昂贵的奢侈品。", "showFrom": 4}]} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/认知偏见_从众效应/scene_4/scene_4.mp3")} />
        </AbsoluteFill>
    );
};
