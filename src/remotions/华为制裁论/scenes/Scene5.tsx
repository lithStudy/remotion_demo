import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWMethodStack, BWTreeDiagram } from "../../../components";

// 剖析：去华为化原因
const SCENE_DURATION = 200 + 70 + 784 + 202;

export const calculateScene5Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene5: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={200}>
                <BWTreeDiagram content={[{"text": "接下来，", "startFrame": 0, "durationFrames": 16}, {"text": "再说“去华为化”。", "startFrame": 15, "durationFrames": 46}, {"text": "去华为也分为两种原因：", "startFrame": 61, "durationFrames": 57}, {"text": "一种是技术上的，", "startFrame": 117, "durationFrames": 38}, {"text": "一种是法理上的。", "startFrame": 154, "durationFrames": 45}]} totalDurationFrames={200} root={{ label: "抵制华为", showFrom: 0, children: [{ label: "被制裁", showFrom: 0, children: [{ label: "惩罚性制裁", showFrom: 0 }, { label: "制约性制裁", showFrom: 0 }] }, { label: "去华为化", showFrom: 1, children: [{ label: "技术原因", showFrom: 3 }, { label: "法理原因", showFrom: 4 }] }] }} />
            </Sequence>
            <Sequence from={200} durationInFrames={70}>
                <BWCenterFocus content={[{"text": "技术上，", "startFrame": 0, "durationFrames": 21}, {"text": "HCSEC审查事件。", "startFrame": 20, "durationFrames": 49}]} totalDurationFrames={70} imageSrc={staticFile("images/华为制裁论/scene_5_3.png")} enterEffect="fadeIn" anchors={[{"text": "HCSEC", "showFrom": 1, "color": "#000000", "anim": "spring"}]} />
            </Sequence>
            <Sequence from={270} durationInFrames={784}>
                <BWMethodStack content={[{"text": "为了在接纳华为设备与保障国家安全之间寻找平衡，", "startFrame": 0, "durationFrames": 126}, {"text": "英国政府成立了HCSEC，", "startFrame": 125, "durationFrames": 65}, {"text": "来对华为提供的服务进行安全审计，", "startFrame": 189, "durationFrames": 93}, {"text": "结论是，", "startFrame": 282, "durationFrames": 23}, {"text": "华为的软件工程和网络安全能力方面，", "startFrame": 305, "durationFrames": 93}, {"text": "发现了“严重且系统性的缺陷”，", "startFrame": 398, "durationFrames": 73}, {"text": "一方面是代码存在诸多安全漏洞，", "startFrame": 471, "durationFrames": 76}, {"text": "另一方面是华为提供的代码和实际编译的结果不一致，", "startFrame": 546, "durationFrames": 116}, {"text": "相当于华为给人家审计的都不是真实运行的代码。", "startFrame": 661, "durationFrames": 122}]} totalDurationFrames={784} title={"技术审查缺陷"} imageSrc={staticFile("images/华为制裁论/scene_5_4.png")} notes={[{"text": "安全审计", "showFrom": 2}, {"text": "代码漏洞", "showFrom": 5}, {"text": "审查与运行代码不一致", "showFrom": 7}]} />
            </Sequence>
            <Sequence from={1054} durationInFrames={202}>
                <BWCenterFocus content={[{"text": "这种技术层面的不可信，", "startFrame": 0, "durationFrames": 52}, {"text": "为西方政客推动“剥离并替换”计划提供了坚实的技术辩护。", "startFrame": 51, "durationFrames": 151}]} totalDurationFrames={202} imageSrc={staticFile("images/华为制裁论/scene_5_5.png")} enterEffect="fadeIn" anchors={[{"text": "技术层面", "showFrom": 0, "color": "#000000", "anim": "spring"}, {"text": "坚实辩护", "showFrom": 1, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/华为制裁论/scene_5/scene_5.mp3")} />
        </AbsoluteFill>
    );
};
