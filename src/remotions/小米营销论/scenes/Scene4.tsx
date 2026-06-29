import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCauseChain, BWCenterFocus, BWPanelGrid, BWTextFocus } from "../../../components";

// 反转揭示：高级的底牌
const SCENE_DURATION = 91 + 120 + 150 + 30 + 76 + 90;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={91}>
                <BWCenterFocus content={[{"text": "那些看似高大上的营销，", "startFrame": 0, "durationFrames": 30}, {"text": "往往是在制造信息壁垒，", "startFrame": 30, "durationFrames": 30}, {"text": "让你为了“感觉”去溢价买单。", "startFrame": 60, "durationFrames": 31}]} totalDurationFrames={91} imageSrc={staticFile("一个消费者站在迷雾弥漫的高墙前，高墙由杂乱的数据碎片组成，象征信息壁垒；消费者手中的钞票正递向一个悬浮的、发光的问号形状商品，交易光效暗示溢价，整体氛围压抑神秘")} enterEffect="fadeIn" anchors={[{"text": "信息壁垒", "showFrom": 1, "color": "#EF4444", "anim": "popIn", "audioEffect": null}]} />
            </Sequence>
            <Sequence from={91} durationInFrames={120}>
                <BWCenterFocus content={[{"text": "而小米的拆机、", "startFrame": 0, "durationFrames": 30}, {"text": "跑分、", "startFrame": 30, "durationFrames": 30}, {"text": "续航直播，", "startFrame": 60, "durationFrames": 30}, {"text": "是在打破信息壁垒。", "startFrame": 90, "durationFrames": 30}]} totalDurationFrames={120} imageSrc={staticFile("一部手机被拆开，露出内部精密零件，正在被直播解析的特写")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={211} durationInFrames={150}>
                <BWCauseChain content={[{"text": "它把晦涩难懂的技术，", "startFrame": 0, "durationFrames": 30}, {"text": "扒开了揉碎了端到你面前，", "startFrame": 30, "durationFrames": 30}, {"text": "让你清楚地知道，", "startFrame": 60, "durationFrames": 30}, {"text": "你花的每一块钱，", "startFrame": 90, "durationFrames": 30}, {"text": "到底买到了什么。", "startFrame": 120, "durationFrames": 30}]} totalDurationFrames={150} layout={"horizontal"} nodes={[{ label: "晦涩技术", imageSrc: staticFile("一个被锁链缠绕的复杂齿轮组，表面有问号迷雾"), showFrom: 0, enterEffect: "fadeIn" }, { label: "透明拆解", imageSrc: staticFile("一只手掰开拼图，内部零件飞散重组为清晰图形"), showFrom: 1, enterEffect: "breathe" }, { label: "价值清晰", imageSrc: staticFile("一枚硬币落入透明容器，底部显现对勾图案"), showFrom: 4, enterEffect: "zoomIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={361} durationInFrames={30}>
                <BWTextFocus content={[{"text": "什么是高级？", "startFrame": 0, "durationFrames": 30}]} totalDurationFrames={30} coreSentence={["什么是高级？"]} coreSentenceAnchors={[]} />
            </Sequence>
            <Sequence from={391} durationInFrames={76}>
                <BWPanelGrid content={[{"text": "敢于把底牌翻给消费者看，", "startFrame": 0, "durationFrames": 30}, {"text": "敢于把产品扒光了接受全网拿着放大镜去审视。", "startFrame": 30, "durationFrames": 46}]} totalDurationFrames={76} panels={[{ src: staticFile("一只手将一张背面朝上的底牌翻转过来，牌面正对观众，周围有微弱的光芒"), showFrom: 0, enterEffect: "zoomIn" }, { src: staticFile("一个电子产品外壳被掀开，内部零件裸露，一只巨大的放大镜正聚焦于零件细节，背景中有无数眼睛的虚影"), showFrom: 1, enterEffect: "fadeIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={467} durationInFrames={90}>
                <BWTextFocus content={[{"text": "这，", "startFrame": 0, "durationFrames": 30}, {"text": "才是最大的自信，", "startFrame": 30, "durationFrames": 30}, {"text": "也是最高级的营销。", "startFrame": 60, "durationFrames": 30}]} totalDurationFrames={90} coreSentence={[{"text": "这，才是最大的自信，", "showFrom": 0}, {"text": "也是最高级的营销。", "showFrom": 2}]} coreSentenceAnchors={[]} />
            </Sequence>

        </AbsoluteFill>
    );
};
