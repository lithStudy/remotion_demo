import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWChecklistReveal, BWCognitiveShift, BWDosAndDonts } from "../../../components";

// 正名：燃烧的理工男
const SCENE_DURATION = 150 + 310 + 204 + 199 + 260;

export const calculateScene5Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene5: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={150}>
                <BWCenterFocus content={[{"text": "大家似乎忘了，", "startFrame": 0, "durationFrames": 38}, {"text": "雷军原本，", "startFrame": 37, "durationFrames": 27}, {"text": "其实是个写代码写到半夜的内向程序员。", "startFrame": 63, "durationFrames": 87}]} totalDurationFrames={150} imageSrc={staticFile("images/为雷军正名/scene_5_1.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={150} durationInFrames={310}>
                <BWChecklistReveal content={[{"text": "一个早就财务自由的IT大佬，", "startFrame": 0, "durationFrames": 64}, {"text": "为了把产品卖出去，", "startFrame": 63, "durationFrames": 47}, {"text": "逼着自己学乔布斯演讲，", "startFrame": 110, "durationFrames": 53}, {"text": "逼着自己接受全网的鬼畜恶搞，", "startFrame": 162, "durationFrames": 68}, {"text": "甚至弯下腰去给买车的用户拉车门。", "startFrame": 230, "durationFrames": 80}]} totalDurationFrames={310} title={"程序员的逆袭"} rows={[{"text": "学乔布斯式演讲", "showFrom": 2}, {"text": "接住全网鬼畜", "showFrom": 3}, {"text": "弯腰给用户拉门", "showFrom": 4}]} />
            </Sequence>
            <Sequence from={460} durationInFrames={204}>
                <BWCognitiveShift content={[{"text": "你觉得这叫“做戏”？", "startFrame": 0, "durationFrames": 49}, {"text": "我看到的，", "startFrame": 48, "durationFrames": 23}, {"text": "是一个愿意放下所有身段，", "startFrame": 71, "durationFrames": 56}, {"text": "把个人IP燃烧到极致的孤勇者。", "startFrame": 127, "durationFrames": 77}]} totalDurationFrames={204} notText={"做戏博眼球"} butText={"燃尽自我的孤勇者"} butSrc={staticFile("images/为雷军正名/scene_5_3.png")} notContentIndex={0} butContentIndex={3} anchors={[]} />
            </Sequence>
            <Sequence from={664} durationInFrames={199}>
                <BWDosAndDonts content={[{"text": "他当然懂营销。", "startFrame": 0, "durationFrames": 38}, {"text": "但他的营销里，极少无脑吹嘘。", "startFrame": 37, "durationFrames": 77}, {"text": "更多的是事实说话，佐以数据支撑。", "startFrame": 113, "durationFrames": 85}]} totalDurationFrames={199} left={{label: "❌ 无脑吹嘘", src: staticFile("images/为雷军正名/scene_5_4_left.png"), showFrom: 1 }} right={{label: "✅ 事实与数据", src: staticFile("images/为雷军正名/scene_5_4_right.png"), showFrom: 2 }} />
            </Sequence>
            <Sequence from={863} durationInFrames={260}>
                <BWCenterFocus content={[{"text": "你可以不喜欢他略显笨拙的套路，", "startFrame": 0, "durationFrames": 76}, {"text": "但你无法否认，", "startFrame": 75, "durationFrames": 37}, {"text": "这个一边挨骂一边死磕的理工男，", "startFrame": 111, "durationFrames": 77}, {"text": "真的推动了中国科技平权的进程。", "startFrame": 187, "durationFrames": 73}]} totalDurationFrames={260} imageSrc={staticFile("images/为雷军正名/scene_5_5.png")} enterEffect="zoomIn" anchors={[{"text": "科技平权", "showFrom": 3, "color": "#EF4444", "anim": "popIn", "audioEffect": null}]} />
            </Sequence>
            <Audio src={staticFile("/audio/为雷军正名/scene_5/scene_5.mp3")} />
        </AbsoluteFill>
    );
};
