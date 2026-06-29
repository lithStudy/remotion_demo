import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWKpiHero, BWMethodStack, BWProgressRing } from "../../../components";

// 剖析：商品税收链条
const SCENE_DURATION = 120 + 202 + 224 + 270 + 191 + 219 + 151 + 73;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={120}>
                <BWCenterFocus content={[{"text": "给你算一笔硬核的账。", "startFrame": 0, "durationFrames": 51}, {"text": "假设你买了一件一百多块钱的衣服。", "startFrame": 50, "durationFrames": 69}]} totalDurationFrames={120} imageSrc={staticFile("images/纳税人/scene_3_1.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={120} durationInFrames={202}>
                <BWMethodStack content={[{"text": "第一步，", "startFrame": 0, "durationFrames": 20}, {"text": "原材料采购成本40元，", "startFrame": 19, "durationFrames": 70}, {"text": "进口棉花关税4.4元，", "startFrame": 89, "durationFrames": 65}, {"text": "增值税5.2元", "startFrame": 153, "durationFrames": 48}]} totalDurationFrames={202} title={"原材料成本构成"} imageSrc={staticFile("images/纳税人/scene_3_2.png")} notes={[{"text": "进口棉花关税4.4元", "showFrom": 2}, {"text": "增值税5.2元", "showFrom": 3}]} anchors={[]} />
            </Sequence>
            <Sequence from={322} durationInFrames={224}>
                <BWMethodStack content={[{"text": "第二步，", "startFrame": 0, "durationFrames": 26}, {"text": "原材料运输成本10元，", "startFrame": 25, "durationFrames": 63}, {"text": "公路运输增值税0.9元，", "startFrame": 87, "durationFrames": 69}, {"text": "燃油消费税0.8元", "startFrame": 156, "durationFrames": 68}]} totalDurationFrames={224} title={"原材料运输税费"} imageSrc={staticFile("images/纳税人/scene_3_3.png")} notes={[{"text": "公路运输增值税0.9元", "showFrom": 2}, {"text": "运输燃油消费税0.8元", "showFrom": 3}]} anchors={[]} />
            </Sequence>
            <Sequence from={546} durationInFrames={270}>
                <BWMethodStack content={[{"text": "第三步，", "startFrame": 0, "durationFrames": 27}, {"text": "生产制作成本30元，", "startFrame": 26, "durationFrames": 60}, {"text": "加工各环节增值税3.9元，", "startFrame": 86, "durationFrames": 87}, {"text": "企业所得税按利润比例算1.5元", "startFrame": 172, "durationFrames": 98}]} totalDurationFrames={270} title={"生产制作环节税费"} imageSrc={staticFile("images/纳税人/scene_3_4.png")} notes={[{"text": "增值税3.9元", "showFrom": 2}, {"text": "企业所得税1.5元", "showFrom": 3}]} anchors={[]} />
            </Sequence>
            <Sequence from={816} durationInFrames={191}>
                <BWMethodStack content={[{"text": "第四步，", "startFrame": 0, "durationFrames": 25}, {"text": "成品运输成本5元，", "startFrame": 24, "durationFrames": 55}, {"text": "增值税0.45元，燃油消费税0.4元。", "startFrame": 78, "durationFrames": 112}]} totalDurationFrames={191} title={"成品运输税收"} imageSrc={staticFile("images/纳税人/scene_3_5.png")} notes={[{"text": "增值税0.45元", "showFrom": 2}, {"text": "燃油消费税0.4元", "showFrom": 2}]} anchors={[]} />
            </Sequence>
            <Sequence from={1007} durationInFrames={219}>
                <BWMethodStack content={[{"text": "第五步，", "startFrame": 0, "durationFrames": 21}, {"text": "零售销售 利润25元，", "startFrame": 20, "durationFrames": 70}, {"text": "缴纳3.25元的增值税与1.25元的企业所得税", "startFrame": 90, "durationFrames": 128}]} totalDurationFrames={219} title={"零售税负拆解"} imageSrc={staticFile("images/纳税人/scene_3_6.png")} notes={[{"text": "增值税3.25元", "showFrom": 2}, {"text": "企业所得税1.25元", "showFrom": 2}]} anchors={[]} />
            </Sequence>
            <Sequence from={1226} durationInFrames={151}>
                <BWKpiHero content={[{"text": "最终税负构成：", "startFrame": 0, "durationFrames": 49}, {"text": "直接税20.20元，", "startFrame": 48, "durationFrames": 55}, {"text": "间接税4.25元", "startFrame": 102, "durationFrames": 48}]} totalDurationFrames={151} blocks={[{"value": 20.2, "suffix": "元", "label": "直接税", "decimalPlaces": 2, "showFrom": 1}, {"value": 4.25, "suffix": "元", "label": "间接税", "decimalPlaces": 2, "showFrom": 2}]} anchors={[{"text": "最终税负构成", "showFrom": 0, "color": "#000000", "anim": "slideUp", "audioEffect": null}]} />
            </Sequence>
            <Sequence from={1377} durationInFrames={73}>
                <BWProgressRing content={[{"text": "最高纳税总占比 24%", "startFrame": 0, "durationFrames": 73}]} totalDurationFrames={73} blocks={[{"percent": 24, "label": "最高纳税总占比", "showFrom": 0}]} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/纳税人/scene_3/scene_3.mp3")} />
        </AbsoluteFill>
    );
};
