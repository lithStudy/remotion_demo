import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCauseChain, BWCenterFocus, BWChatBubble, BWCognitiveShift, BWConceptCard, BWPanelGrid, BWSplitCompare } from "../../../components";

// 剖析：你的税收是支持本源
const SCENE_DURATION = 149 + 216 + 173 + 341 + 236 + 242 + 143 + 213;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={149}>
                <BWChatBubble content={[{"text": "你说这是国家的支持，不是我个人的。", "startFrame": 0, "durationFrames": 86}, {"text": "我一定要为国家做贡献？ ", "startFrame": 85, "durationFrames": 64}]} totalDurationFrames={149} bubbles={[{ bubbleText: "这是国家的支持，不是我个人的。", showFrom: 0, align: "left" }, { bubbleText: "我一定要为国家做贡献。", showFrom: 1, align: "left" }]} />
            </Sequence>
            <Sequence from={149} durationInFrames={216}>
                <BWCenterFocus content={[{"text": "但你有没有想过，", "startFrame": 0, "durationFrames": 46}, {"text": "这些动辄几百亿的钱，", "startFrame": 45, "durationFrames": 59}, {"text": "到底是从哪里来的？", "startFrame": 104, "durationFrames": 51}, {"text": "难道是印钞机里印出来的吗？", "startFrame": 154, "durationFrames": 62}]} totalDurationFrames={216} imageSrc={staticFile("images/国产支持论/scene_3_2.png")} enterEffect="zoomIn" anchors={[{"text": "几百亿", "showFrom": 1, "color": "#EF4444", "anim": "popIn", "audioEffect": "ping"}, {"text": "印钞机", "showFrom": 3, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={365} durationInFrames={173}>
                <BWCognitiveShift content={[{"text": "并不是。 ", "startFrame": 0, "durationFrames": 35}, {"text": "这些都是你的钱，", "startFrame": 34, "durationFrames": 45}, {"text": "是从每一个普通老百姓身上，", "startFrame": 79, "durationFrames": 54}, {"text": "实打实凑出来的。", "startFrame": 133, "durationFrames": 39}]} totalDurationFrames={173} notText={"不是印钞机"} butText={"是你的钱"} butSrc={staticFile("images/国产支持论/scene_3_3.png")} notContentIndex={0} butContentIndex={1} />
            </Sequence>
            <Sequence from={538} durationInFrames={341}>
                <BWPanelGrid content={[{"text": "你去超市买大米，", "startFrame": 0, "durationFrames": 38}, {"text": "你去小店买包盐，", "startFrame": 37, "durationFrames": 38}, {"text": "你每天出门坐公交，", "startFrame": 74, "durationFrames": 46}, {"text": "你换季买衣服买裤子，", "startFrame": 120, "durationFrames": 54}, {"text": "你咬牙贷款买房买车。", "startFrame": 173, "durationFrames": 56}, {"text": "甚至你打开电灯用的每一度电，", "startFrame": 229, "durationFrames": 67}, {"text": "里面都已经包含了税！", "startFrame": 295, "durationFrames": 45}]} totalDurationFrames={341} panels={[{ src: staticFile("images/国产支持论/scene_3_4_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { src: staticFile("images/国产支持论/scene_3_4_img1.png"), showFrom: 1, enterEffect: "fadeIn" }, { src: staticFile("images/国产支持论/scene_3_4_img2.png"), showFrom: 2, enterEffect: "fadeIn" }, { src: staticFile("images/国产支持论/scene_3_4_img3.png"), showFrom: 3, enterEffect: "fadeIn" }, { src: staticFile("images/国产支持论/scene_3_4_img4.png"), showFrom: 4, enterEffect: "fadeIn" }, { src: staticFile("images/国产支持论/scene_3_4_img5.png"), showFrom: 5, enterEffect: "fadeIn" }]} />
            </Sequence>
            <Sequence from={879} durationInFrames={236}>
                <BWConceptCard content={[{"text": "在我们国家，", "startFrame": 0, "durationFrames": 29}, {"text": "最大的税种叫增值税。", "startFrame": 28, "durationFrames": 60}, {"text": "只要你在这个国家生活，", "startFrame": 88, "durationFrames": 51}, {"text": "只要你在花钱消费，", "startFrame": 138, "durationFrames": 43}, {"text": "你就无时无刻不在交税。", "startFrame": 181, "durationFrames": 55}]} totalDurationFrames={236} imageSrc={staticFile("images/国产支持论/scene_3_6.png")} conceptName={"增值税"} />
            </Sequence>
            <Sequence from={1115} durationInFrames={242}>
                <BWCauseChain content={[{"text": "国家把你的这些税收，", "startFrame": 0, "durationFrames": 47}, {"text": "汇聚到一起。", "startFrame": 46, "durationFrames": 36}, {"text": "通过政策的精准滴灌，", "startFrame": 82, "durationFrames": 62}, {"text": "流向了那些真正需要国家支持的国产品牌。", "startFrame": 144, "durationFrames": 98}]} totalDurationFrames={242} layout={"horizontal"} nodes={[{ label: "个人税收", imageSrc: staticFile("images/国产支持论/scene_3_7_img0.png"), showFrom: 0 }, { label: "汇聚", imageSrc: staticFile("images/国产支持论/scene_3_7_img1.png"), showFrom: 1 }, { label: "精准滴灌", imageSrc: staticFile("images/国产支持论/scene_3_7_img2.png"), showFrom: 2 }, { label: "国产品牌", imageSrc: staticFile("images/国产支持论/scene_3_7_img3.png"), showFrom: 3 }]} />
            </Sequence>
            <Sequence from={1357} durationInFrames={143}>
                <BWCognitiveShift content={[{"text": "如果政策没有流向他们？", "startFrame": 0, "durationFrames": 51}, {"text": "那不好意思，", "startFrame": 50, "durationFrames": 26}, {"text": "他就是不需要国家特别支持的企业。", "startFrame": 75, "durationFrames": 68}]} totalDurationFrames={143} notText={"需要国家特别支持"} butText={"无需国家特别支持"} butSrc={staticFile("images/国产支持论/scene_3_8.png")} notContentIndex={0} butContentIndex={2} />
            </Sequence>
            <Sequence from={1500} durationInFrames={213}>
                <BWSplitCompare content={[{"text": "如果他们一边享受着国家的政策，", "startFrame": 0, "durationFrames": 59}, {"text": "一边还恬不知耻的打着爱国的旗号让你再出一次钱，", "startFrame": 58, "durationFrames": 95}, {"text": "那他们就是最无底线的骗子。", "startFrame": 153, "durationFrames": 59}]} totalDurationFrames={213} leftSrc={staticFile("images/国产支持论/scene_3_9_left.png")} rightSrc={staticFile("images/国产支持论/scene_3_9_right.png")} leftLabel={"享受政策"} rightLabel={"爱国要钱"} leftShowFrom={0} rightShowFrom={1} anchors={[{"text": "无底线的骗子", "showFrom": 2, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/国产支持论/scene_3/scene_3.mp3")} />
        </AbsoluteFill>
    );
};
