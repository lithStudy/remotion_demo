import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift, BWDosAndDonts, BWMethodStack } from "../../../components";

// 召唤·信息防火墙
const SCENE_DURATION = 145 + 134 + 262 + 333 + 396 + 366 + 175;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={145}>
                <BWDosAndDonts content={[{"text": "普通人把AI当大脑。", "startFrame": 0, "durationFrames": 59}, {"text": "高手把AI当做需要保持距离的合作者。", "startFrame": 58, "durationFrames": 86}]} totalDurationFrames={145} left={{label: "❌ 把AI当大脑", src: staticFile("images/豆包仙人论/scene_3_1_left.png"), showFrom: 0 }} right={{label: "✅ 保持距离合作", src: staticFile("images/豆包仙人论/scene_3_1_right.png"), showFrom: 1 }} />
            </Sequence>
            <Sequence from={145} durationInFrames={134}>
                <BWCenterFocus content={[{"text": "作为一个高手，当你在使用AI时，", "startFrame": 0, "durationFrames": 72}, {"text": "需要建立四层信息防火墙。", "startFrame": 72, "durationFrames": 62}]} totalDurationFrames={134} imageSrc={staticFile("images/豆包仙人论/scene_3_2.png")} enterEffect="fadeIn" anchors={[{"text": "四层信息防火墙", "showFrom": 1, "color": "#000000", "anim": "popIn", "audioEffect": null}]} />
            </Sequence>
            <Sequence from={279} durationInFrames={262}>
                <BWMethodStack content={[{"text": "第一层。交叉比对。", "startFrame": 0, "durationFrames": 60}, {"text": "对关键信息。使用至少两个不同的AI工具。", "startFrame": 60, "durationFrames": 107}, {"text": "再配合搜索引擎的原始网页进行比对。", "startFrame": 166, "durationFrames": 95}]} totalDurationFrames={262} title={"交叉比对"} imageSrc={staticFile("images/豆包仙人论/scene_3_3.png")} notes={[{"text": "不止依赖一个AI", "showFrom": 1}, {"text": "回归原始信源验证", "showFrom": 2}]} anchors={[]} />
            </Sequence>
            <Sequence from={541} durationInFrames={333}>
                <BWMethodStack content={[{"text": "第二层。反向发问。", "startFrame": 0, "durationFrames": 63}, {"text": "当你得到AI的支持性结论后。必须强迫自己提出一个相反的问题。", "startFrame": 62, "durationFrames": 142}, {"text": "例如：如果要证明这个方案不可行。最致命的痛点会是什么？", "startFrame": 204, "durationFrames": 129}]} totalDurationFrames={333} title={"反向发问"} imageSrc={staticFile("images/豆包仙人论/scene_3_4.png")} notes={[{"text": "强迫寻找对立面", "showFrom": 1}, {"text": "提出证伪性问题", "showFrom": 2}]} anchors={[]} />
            </Sequence>
            <Sequence from={874} durationInFrames={396}>
                <BWMethodStack content={[{"text": "第三层。分类建立AI警惕区。", "startFrame": 0, "durationFrames": 90}, {"text": "在容错率极低的专业领域。比如法律合规、财务计算、医药健康。", "startFrame": 89, "durationFrames": 182}, {"text": "自动将AI定位为辅助线索。绝不用作最终结论。", "startFrame": 271, "durationFrames": 125}]} totalDurationFrames={396} title={"AI警惕区"} imageSrc={staticFile("images/豆包仙人论/scene_3_5.png")} notes={[{"text": "法律、财务、医药划入警惕区", "showFrom": 1}, {"text": "只作辅助，不作最终结论", "showFrom": 2}]} anchors={[]} />
            </Sequence>
            <Sequence from={1270} durationInFrames={366}>
                <BWMethodStack content={[{"text": "第四层。保持原始检索习惯。", "startFrame": 0, "durationFrames": 78}, {"text": "每周抽出一部分时间。不使用AI的直接回答。", "startFrame": 77, "durationFrames": 98}, {"text": "而是通过阅读长文章、专业报告或与行业专家交流。", "startFrame": 174, "durationFrames": 131}, {"text": "来获取更深度的输入。", "startFrame": 305, "durationFrames": 60}]} totalDurationFrames={366} title={"保持原始检索习惯"} imageSrc={staticFile("images/豆包仙人论/scene_3_6.png")} notes={[{"text": "每周安排无AI时段", "showFrom": 1}, {"text": "深读与专家交流", "showFrom": 2}]} anchors={[]} />
            </Sequence>
            <Sequence from={1636} durationInFrames={175}>
                <BWCognitiveShift content={[{"text": "这四层防火墙。", "startFrame": 0, "durationFrames": 45}, {"text": "不是在给AI挑刺。", "startFrame": 44, "durationFrames": 49}, {"text": "而是在构建你自己的认知免疫系统。", "startFrame": 93, "durationFrames": 81}]} totalDurationFrames={175} notText={"给AI挑刺"} butText={"构建认知免疫系统"} butSrc={staticFile("images/豆包仙人论/scene_3_7.png")} notContentIndex={1} butContentIndex={2} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/豆包仙人论/scene_3/scene_3.mp3")} />
        </AbsoluteFill>
    );
};
