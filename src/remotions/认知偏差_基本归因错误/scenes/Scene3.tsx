import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus } from "../../../components";

// 反转：平庸与聪明
const SCENE_DURATION = 61 + 126;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={61}>
                <BWCenterFocus content={[{"text": "所有的平庸者，", "startFrame": 0, "durationFrames": 30}, {"text": "都喜欢在别人身上找主观原因。", "startFrame": 30, "durationFrames": 31}]} totalDurationFrames={61} imageSrc={staticFile("一群人面无表情地坐在办公桌前")} enterEffect="fadeIn" anchors={[{"text": "主观原因", "showFrom": 1, "color": "#000000", "anim": "slideUp", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={61} durationInFrames={126}>
                <BWCenterFocus content={[{"text": "他们甚至会为了维护这种“心理掌控感”，", "startFrame": 0, "durationFrames": 42}, {"text": "强行给别人贴上“没素质、冷血、不负责”的标签。", "startFrame": 42, "durationFrames": 51}, {"text": "而真正的聪明人，只看外部变量。", "startFrame": 93, "durationFrames": 33}]} totalDurationFrames={126} imageSrc={staticFile("一群人互相指责的卡通形象")} enterEffect="fadeIn" anchors={[{"text": "心理掌控感", "showFrom": 0, "color": "#000000", "anim": "spring", "audioEffect": "ping"}, {"text": "贴标签", "showFrom": 1, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}]} />
            </Sequence>

        </AbsoluteFill>
    );
};
