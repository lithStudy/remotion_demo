import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWTextFocus } from "../../../components";

// 关注真实的社会进步
const SCENE_DURATION = 151 + 141 + 196 + 174;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={151}>
                <BWCenterFocus content={[{"text": "以后如果再看到任何宏大叙事下的平均数，", "startFrame": 0, "durationFrames": 86}, {"text": "请务必保持最冷酷的警惕。", "startFrame": 85, "durationFrames": 66}]} totalDurationFrames={151} imageSrc={staticFile("images/平均数陷阱/scene_3_1.png")} enterEffect="fadeIn" anchors={[{"text": "宏大叙事", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "平均数", "showFrom": 0, "color": "#000000", "anim": "popIn", "audioEffect": null}, {"text": "警惕", "showFrom": 1, "color": "#EF4444", "anim": "highlight", "audioEffect": null}]} />
            </Sequence>
            <Sequence from={151} durationInFrames={141}>
                <BWCenterFocus content={[{"text": "不要再为那些，", "startFrame": 0, "durationFrames": 35}, {"text": "根本无法代表你生活轨迹的虚高数据感到任何抱歉。", "startFrame": 34, "durationFrames": 106}]} totalDurationFrames={141} imageSrc={staticFile("images/平均数陷阱/scene_3_2.png")} enterEffect="fadeIn" anchors={[{"text": "虚高数据", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={292} durationInFrames={196}>
                <BWTextFocus content={[{"text": "我们要明白，", "startFrame": 0, "durationFrames": 28}, {"text": "真正的社会进步和文明底线，", "startFrame": 27, "durationFrames": 72}, {"text": "绝不仅仅是极少数权贵的天花板被无限拉高，", "startFrame": 99, "durationFrames": 96}]} totalDurationFrames={196} coreSentence={"社会进步不是权贵天花板被拉高"} />
            </Sequence>
            <Sequence from={488} durationInFrames={174}>
                <BWTextFocus content={[{"text": "而是大多数普通人脚踩着的那块泥泞地板，", "startFrame": 0, "durationFrames": 102}, {"text": "能被坚定而稳稳地托起。", "startFrame": 101, "durationFrames": 72}]} totalDurationFrames={174} coreSentence={"而是多数人的泥泞地板被托起"} />
            </Sequence>
            <Audio src={staticFile("/audio/平均数陷阱/scene_3/scene_3.mp3")} />
        </AbsoluteFill>
    );
};
