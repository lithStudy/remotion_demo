import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWKpiHero, BWMethodStack, BWProgressRing } from "../../../components";

// 剖析：商品税收链条
const SCENE_DURATION = 122 + 218 + 226 + 250 + 194 + 215 + 150 + 79;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={122}>
                <BWCenterFocus content={[{"text": "给你算一笔硬核的账。", "startFrame": 0, "durationFrames": 52}, {"text": "假设你买了一件一百多块钱的衣服。", "startFrame": 51, "durationFrames": 71}]} totalDurationFrames={122} imageSrc={staticFile("images/纳税人/scene_3_1.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={122} durationInFrames={218}>
                <BWMethodStack content={[{"text": "第一步，", "startFrame": 0, "durationFrames": 22}, {"text": "原材料采购成本40元，", "startFrame": 21, "durationFrames": 72}, {"text": "进口棉花关税4.4元，", "startFrame": 93, "durationFrames": 74}, {"text": "增值税5.2元", "startFrame": 166, "durationFrames": 51}]} totalDurationFrames={218} title={"原材料成本构成"} imageSrc={staticFile("images/纳税人/scene_3_2.png")} notes={[{"text": "进口棉花关税4.4元", "showFrom": 2}, {"text": "增值税5.2元", "showFrom": 3}]} anchors={[]} />
            </Sequence>
            <Sequence from={340} durationInFrames={226}>
                <BWMethodStack content={[{"text": "第二步，", "startFrame": 0, "durationFrames": 25}, {"text": "原材料运输成本10元，", "startFrame": 24, "durationFrames": 63}, {"text": "公路运输增值税0.9元，", "startFrame": 86, "durationFrames": 77}, {"text": "燃油消费税0.8元", "startFrame": 162, "durationFrames": 64}]} totalDurationFrames={226} title={"原材料运输税费"} imageSrc={staticFile("images/纳税人/scene_3_3.png")} notes={[{"text": "公路运输增值税0.9元", "showFrom": 2}, {"text": "运输燃油消费税0.8元", "showFrom": 3}]} anchors={[]} />
            </Sequence>
            <Sequence from={566} durationInFrames={250}>
                <BWMethodStack content={[{"text": "第三步，", "startFrame": 0, "durationFrames": 23}, {"text": "生产制作成本30元，", "startFrame": 22, "durationFrames": 62}, {"text": "加工各环节增值税3.9元，", "startFrame": 84, "durationFrames": 75}, {"text": "企业所得税按利润比例算1.5元", "startFrame": 158, "durationFrames": 92}]} totalDurationFrames={250} title={"生产制作环节税费"} imageSrc={staticFile("images/纳税人/scene_3_4.png")} notes={[{"text": "增值税3.9元", "showFrom": 2}, {"text": "企业所得税1.5元", "showFrom": 3}]} anchors={[]} />
            </Sequence>
            <Sequence from={816} durationInFrames={194}>
                <BWMethodStack content={[{"text": "第四步，", "startFrame": 0, "durationFrames": 25}, {"text": "成品运输成本5元，", "startFrame": 24, "durationFrames": 62}, {"text": "增值税0.45元，燃油消费税0.4元。", "startFrame": 85, "durationFrames": 108}]} totalDurationFrames={194} title={"成品运输税收"} imageSrc={staticFile("images/纳税人/scene_3_5.png")} notes={[{"text": "增值税0.45元", "showFrom": 2}, {"text": "燃油消费税0.4元", "showFrom": 2}]} anchors={[]} />
            </Sequence>
            <Sequence from={1010} durationInFrames={215}>
                <BWMethodStack content={[{"text": "第五步，", "startFrame": 0, "durationFrames": 20}, {"text": "零售销售 利润25元，", "startFrame": 19, "durationFrames": 74}, {"text": "缴纳3.25元的增值税与1.25元的企业所得税", "startFrame": 92, "durationFrames": 123}]} totalDurationFrames={215} title={"零售税负拆解"} imageSrc={staticFile("images/纳税人/scene_3_6.png")} notes={[{"text": "增值税3.25元", "showFrom": 2}, {"text": "企业所得税1.25元", "showFrom": 2}]} anchors={[]} />
            </Sequence>
            <Sequence from={1225} durationInFrames={150}>
                <BWKpiHero content={[{"text": "最终税负构成：", "startFrame": 0, "durationFrames": 48}, {"text": "直接税20.20元，", "startFrame": 47, "durationFrames": 54}, {"text": "间接税4.25元", "startFrame": 101, "durationFrames": 48}]} totalDurationFrames={150} blocks={[{"value": 20.2, "suffix": "元", "label": "直接税", "decimalPlaces": 2, "showFrom": 1}, {"value": 4.25, "suffix": "元", "label": "间接税", "decimalPlaces": 2, "showFrom": 2}]} anchors={[{"text": "最终税负构成", "showFrom": 0, "color": "#000000", "anim": "slideUp", "audioEffect": null}]} />
            </Sequence>
            <Sequence from={1375} durationInFrames={79}>
                <BWProgressRing content={[{"text": "最高纳税总占比 24%", "startFrame": 0, "durationFrames": 79}]} totalDurationFrames={79} blocks={[{"percent": 24, "label": "最高纳税总占比", "showFrom": 0}]} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/纳税人/scene_3/scene_3.mp3")} />
        </AbsoluteFill>
    );
};
