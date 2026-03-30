import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWChatBubble, BWMagnifyingGlass } from "../../../components";

// 引出恐慌与焦虑
const SCENE_DURATION = 242 + 593;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={242}>
                <BWChatBubble content={[{"text": "你是不是也有过这种感觉？", "startFrame": 0, "durationFrames": 30}, {"text": "一提到坐飞机，", "startFrame": 30, "durationFrames": 30}, {"text": "心里就有点打鼓，", "startFrame": 60, "durationFrames": 30}, {"text": "脑子里下意识闪过坠机的新闻；", "startFrame": 90, "durationFrames": 31}, {"text": "一刷短视频，", "startFrame": 121, "durationFrames": 30}, {"text": "感觉某些国家天天都在零元购、", "startFrame": 151, "durationFrames": 31}, {"text": "街头枪战，", "startFrame": 182, "durationFrames": 30}, {"text": "觉得这世界实在太危险了。", "startFrame": 212, "durationFrames": 30}]} totalDurationFrames={242} imageSrc={staticFile("images/template/scene1_1.png")} anchors={[]} />
            </Sequence>
            <Sequence from={242} durationInFrames={593}>
                <BWMagnifyingGlass content={[{"text": "产生这种强烈的恐慌感和焦虑感，", "startFrame": 0, "durationFrames": 33}, {"text": "真不能怪咱们胆小，", "startFrame": 33, "durationFrames": 30}, {"text": "更不是咱们缺乏常识。", "startFrame": 63, "durationFrames": 30}, {"text": "要怪，", "startFrame": 93, "durationFrames": 30}, {"text": "就怪那些深谙流量密码的媒体算法，", "startFrame": 123, "durationFrames": 35}, {"text": "以及咱们人类大脑底层的出厂设置。", "startFrame": 158, "durationFrames": 35}, {"text": "你想啊，", "startFrame": 193, "durationFrames": 30}, {"text": "为了博眼球，", "startFrame": 223, "durationFrames": 30}, {"text": "媒体永远只会放大报道极端事件，", "startFrame": 253, "durationFrames": 33}, {"text": "“安全到达”永远上不了热搜，", "startFrame": 286, "durationFrames": 31}, {"text": "“机毁人亡”才会全网推送。", "startFrame": 317, "durationFrames": 30}, {"text": "再加上现在的算法，", "startFrame": 347, "durationFrames": 30}, {"text": "你越是害怕、", "startFrame": 377, "durationFrames": 30}, {"text": "越是愤怒多看了一眼，", "startFrame": 407, "durationFrames": 30}, {"text": "它就越是铺天盖地给你推。", "startFrame": 437, "durationFrames": 30}, {"text": "这其实是一套把人性弱点研究到极致的注意力收割术，", "startFrame": 467, "durationFrames": 53}, {"text": "咱们普通人就是这样不知不觉被困在了一个人为制造的“信息恐怖屋”里。", "startFrame": 520, "durationFrames": 73}]} totalDurationFrames={593} anchors={[{"text": "恐慌感", "showFrom": 0, "color": "#EF4444", "anim": "popIn", "audioEffect": "ping"}, {"text": "焦虑感", "showFrom": 0, "color": "#EF4444", "anim": "popIn", "audioEffect": "ping"}, {"text": "流量密码", "showFrom": 4, "color": "#000000", "anim": "spring", "audioEffect": "woosh"}, {"text": "出厂设置", "showFrom": 5, "color": "#000000", "anim": "spring", "audioEffect": "woosh"}, {"text": "博眼球", "showFrom": 7, "color": null, "anim": "highlight", "audioEffect": null}, {"text": "极端事件", "showFrom": 8, "color": "#EF4444", "anim": "slideUp", "audioEffect": null}, {"text": "安全到达", "showFrom": 9, "color": "#000000", "anim": null, "audioEffect": null}, {"text": "机毁人亡", "showFrom": 10, "color": "#EF4444", "anim": "slideUp", "audioEffect": null}, {"text": "注意力收割术", "showFrom": 15, "color": "#000000", "anim": "spring", "audioEffect": "woosh"}, {"text": "信息恐怖屋", "showFrom": 16, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}]} />
            </Sequence>

        </AbsoluteFill>
    );
};
