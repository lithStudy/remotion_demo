import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile, Freeze } from "remotion";
import { BWCauseChain, BWCenterFocus, BWPanelGrid, BWTextFocus } from "../../../components";

// 反转揭示：高级的底牌
const SCENE_DURATION = 168 + 139 + 216 + 44 + 180 + 119;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={168}>
                <BWCenterFocus content={[{"text": "那些看似高大上的营销，", "startFrame": 0, "durationFrames": 54}, {"text": "往往是在制造信息壁垒，", "startFrame": 53, "durationFrames": 51}, {"text": "让你为了“感觉”去溢价买单。", "startFrame": 103, "durationFrames": 65}]} totalDurationFrames={168} imageSrc={staticFile("images/小米营销论/scene_4_1.png")} enterEffect="fadeIn" anchors={[{"text": "信息壁垒", "showFrom": 1, "color": "#EF4444", "anim": "popIn", "audioEffect": null}]} />
            </Sequence>
            <Sequence from={168} durationInFrames={139}>
                <BWCenterFocus content={[{"text": "而小米的拆机、", "startFrame": 0, "durationFrames": 40}, {"text": "跑分、", "startFrame": 39, "durationFrames": 19}, {"text": "续航直播，", "startFrame": 57, "durationFrames": 31}, {"text": "是在打破信息壁垒。", "startFrame": 88, "durationFrames": 50}]} totalDurationFrames={139} imageSrc={staticFile("images/小米营销论/scene_4_2.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={307} durationInFrames={216}>
                <BWCauseChain content={[{"text": "它把晦涩难懂的技术，", "startFrame": 0, "durationFrames": 47}, {"text": "扒开了揉碎了端到你面前，", "startFrame": 46, "durationFrames": 57}, {"text": "让你清楚地知道，", "startFrame": 103, "durationFrames": 39}, {"text": "你花的每一块钱，", "startFrame": 141, "durationFrames": 40}, {"text": "到底买到了什么。", "startFrame": 181, "durationFrames": 34}]} totalDurationFrames={216} layout={"horizontal"} nodes={[{ label: "晦涩技术", imageSrc: staticFile("images/小米营销论/scene_4_3_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { label: "透明拆解", imageSrc: staticFile("images/小米营销论/scene_4_3_img1.png"), showFrom: 1, enterEffect: "breathe" }, { label: "价值清晰", imageSrc: staticFile("images/小米营销论/scene_4_3_img2.png"), showFrom: 4, enterEffect: "zoomIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={523} durationInFrames={44}>
                <BWTextFocus content={[{"text": "什么是高级？", "startFrame": 0, "durationFrames": 44}]} totalDurationFrames={44} coreSentence={["什么是高级？"]} coreSentenceAnchors={[]} />
            </Sequence>
            <Sequence from={567} durationInFrames={180}>
                <BWPanelGrid content={[{"text": "敢于把底牌翻给消费者看，", "startFrame": 0, "durationFrames": 68}, {"text": "敢于把产品扒光了接受全网拿着放大镜去审视。", "startFrame": 67, "durationFrames": 112}]} totalDurationFrames={180} panels={[{ src: staticFile("images/小米营销论/scene_4_5_img0.png"), showFrom: 0, enterEffect: "zoomIn" }, { src: staticFile("images/小米营销论/scene_4_5_img1.png"), showFrom: 1, enterEffect: "fadeIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={747} durationInFrames={94}>
                <BWTextFocus content={[{"text": "这，", "startFrame": 0, "durationFrames": 9}, {"text": "才是最大的自信，", "startFrame": 8, "durationFrames": 39}, {"text": "也是最高级的营销。", "startFrame": 46, "durationFrames": 47}]} totalDurationFrames={94} coreSentence={[{"text": "这，才是最大的自信，", "showFrom": 0}, {"text": "也是最高级的营销。", "showFrom": 2}]} coreSentenceAnchors={[]} />
            </Sequence>
            <Sequence from={841} durationInFrames={25}>
                <Freeze frame={93}>
                    <BWTextFocus content={[{"text": "这，", "startFrame": 0, "durationFrames": 9}, {"text": "才是最大的自信，", "startFrame": 8, "durationFrames": 39}, {"text": "也是最高级的营销。", "startFrame": 46, "durationFrames": 47}]} totalDurationFrames={94} coreSentence={[{"text": "这，才是最大的自信，", "showFrom": 0}, {"text": "也是最高级的营销。", "showFrom": 2}]} coreSentenceAnchors={[]} />
                </Freeze>
            </Sequence>
            <Audio src={staticFile("/audio/小米营销论/scene_4/scene_4.mp3")} />
        </AbsoluteFill>
    );
};
