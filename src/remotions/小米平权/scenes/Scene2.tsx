import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWPanelGrid, BWStatCompare, BWTextFocus } from "../../../components";

// 剖析：智能手机平民化困境
const SCENE_DURATION = 122 + 246 + 88 + 156 + 187 + 177 + 66;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={122}>
                <BWCenterFocus content={[{"text": "2011年前，", "startFrame": 0, "durationFrames": 42}, {"text": "普通人想用上智能手机，", "startFrame": 41, "durationFrames": 53}, {"text": "到底有多难？", "startFrame": 93, "durationFrames": 28}]} totalDurationFrames={122} imageSrc={staticFile("images/小米平权/scene_2_1.png")} enterEffect="fadeIn" />
            </Sequence>
            <Sequence from={122} durationInFrames={246}>
                <BWStatCompare content={[{"text": "一部三星手机要四千多，", "startFrame": 0, "durationFrames": 59}, {"text": "一部HTC手机要三千多。", "startFrame": 58, "durationFrames": 64}, {"text": "普通上班族月薪两三千，", "startFrame": 122, "durationFrames": 60}, {"text": "买一部手机等于一两个月工资。", "startFrame": 182, "durationFrames": 63}]} totalDurationFrames={246} bars={[{"label": "三星", "value": 4999, "showFrom": 0}, {"label": "HTC", "value": 3000, "showFrom": 1}]} anchors={[{"text": "一两个月工资", "showFrom": 2, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={368} durationInFrames={88}>
                <BWCenterFocus content={[{"text": "买不起正品，", "startFrame": 0, "durationFrames": 38}, {"text": "只能去买山寨机。", "startFrame": 37, "durationFrames": 51}]} totalDurationFrames={88} imageSrc={staticFile("images/小米平权/scene_2_4.png")} enterEffect="fadeIn" anchors={[{"text": "山寨机", "showFrom": 1, "color": "#EF4444", "anim": "highlight"}]} />
            </Sequence>
            <Sequence from={456} durationInFrames={156}>
                <BWPanelGrid content={[{"text": "那些山寨机，", "startFrame": 0, "durationFrames": 29}, {"text": "屏幕一碰就碎，", "startFrame": 28, "durationFrames": 48}, {"text": "系统卡得要死，", "startFrame": 76, "durationFrames": 34}, {"text": "信号差得经常掉线。", "startFrame": 110, "durationFrames": 46}]} totalDurationFrames={156} panels={[{ src: staticFile("images/小米平权/scene_2_5_img0.png"), showFrom: 1 }, { src: staticFile("images/小米平权/scene_2_5_img1.png"), showFrom: 2 }, { src: staticFile("images/小米平权/scene_2_5_img2.png"), showFrom: 3 }]} />
            </Sequence>
            <Sequence from={612} durationInFrames={187}>
                <BWCenterFocus content={[{"text": "很多打工仔、", "startFrame": 0, "durationFrames": 33}, {"text": "学生、", "startFrame": 32, "durationFrames": 20}, {"text": "老人，", "startFrame": 52, "durationFrames": 22}, {"text": "辛辛苦苦攒钱买一台，", "startFrame": 74, "durationFrames": 53}, {"text": "却连基本的智能功能都用不了。", "startFrame": 126, "durationFrames": 61}]} totalDurationFrames={187} imageSrc={staticFile("images/小米平权/scene_2_6.png")} enterEffect="fadeIn" anchors={[{"text": "打工仔", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "学生", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "老人", "showFrom": 2, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={799} durationInFrames={177}>
                <BWCenterFocus content={[{"text": "那时候微信刚刚起步，", "startFrame": 0, "durationFrames": 48}, {"text": "支付宝主要在电脑上用，", "startFrame": 48, "durationFrames": 53}, {"text": "大多数普通人根本没法顺畅移动支付。", "startFrame": 100, "durationFrames": 77}]} totalDurationFrames={177} imageSrc={staticFile("images/小米平权/scene_2_7.png")} enterEffect="fadeIn" anchors={[{"text": "微信起步", "showFrom": 0, "color": "#000000", "anim": "slideUp"}, {"text": "移动支付", "showFrom": 2, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={976} durationInFrames={66}>
                <BWTextFocus content={[{"text": "门槛不是软件，", "startFrame": 0, "durationFrames": 38}, {"text": "是手机。", "startFrame": 37, "durationFrames": 29}]} totalDurationFrames={66} coreSentence={["门槛不是软件", "是手机"]} coreSentenceAnchors={[{"coreSentenceAnchor": "是手机", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/小米平权/scene_2/scene_2.mp3")} />
        </AbsoluteFill>
    );
};
