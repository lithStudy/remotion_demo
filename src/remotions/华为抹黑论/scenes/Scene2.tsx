import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWDosAndDonts } from "../../../components";

// 剖析：抹黑与事实清单
const SCENE_DURATION = 181 + 244 + 259 + 200 + 200 + 154 + 216 + 198 + 251 + 200 + 154 + 203 + 210 + 272;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={181}>
                <BWDosAndDonts content={[{"text": "说华为的手机很垃圾，", "startFrame": 0, "durationFrames": 51}, {"text": "这是抹黑；", "startFrame": 50, "durationFrames": 28}, {"text": "说华为手机P10混用闪存芯片，", "startFrame": 77, "durationFrames": 75}, {"text": "这是讲事实。", "startFrame": 151, "durationFrames": 29}]} totalDurationFrames={181} left={{label: "❌ 手机很垃圾", src: staticFile("images/华为抹黑论/scene_2_1_left.png"), showFrom: 0 }} right={{label: "✅ P10混用闪存", src: staticFile("images/华为抹黑论/scene_2_1_right.png"), showFrom: 2 }} anchors={[]} />
            </Sequence>
            <Sequence from={181} durationInFrames={244}>
                <BWDosAndDonts content={[{"text": "说华为手机质量有问题，", "startFrame": 0, "durationFrames": 58}, {"text": "这是抹黑；", "startFrame": 57, "durationFrames": 29}, {"text": "说华为Mate 20Pro存在大规模明显的绿屏缺陷，", "startFrame": 86, "durationFrames": 122}, {"text": "这是讲事实。", "startFrame": 207, "durationFrames": 36}]} totalDurationFrames={244} left={{label: "❌ 质量有问题", src: staticFile("images/华为抹黑论/scene_2_2_left.png"), showFrom: 0 }} right={{label: "✅ Mate20绿屏缺陷", src: staticFile("images/华为抹黑论/scene_2_2_right.png"), showFrom: 2 }} anchors={[]} />
            </Sequence>
            <Sequence from={425} durationInFrames={259}>
                <BWDosAndDonts content={[{"text": "说华为虚假宣传，", "startFrame": 0, "durationFrames": 51}, {"text": "这是抹黑；", "startFrame": 50, "durationFrames": 31}, {"text": "说华为P9用单反相机的照片充当手机拍摄的效果图宣传，", "startFrame": 80, "durationFrames": 144}, {"text": "这是讲事实。", "startFrame": 224, "durationFrames": 34}]} totalDurationFrames={259} left={{label: "❌ 虚假宣传", src: staticFile("images/华为抹黑论/scene_2_3_left.png"), showFrom: 0 }} right={{label: "✅ P9单反冒充拍照", src: staticFile("images/华为抹黑论/scene_2_3_right.png"), showFrom: 2 }} anchors={[]} />
            </Sequence>
            <Sequence from={684} durationInFrames={200}>
                <BWDosAndDonts content={[{"text": "说华为喜欢造假，", "startFrame": 0, "durationFrames": 42}, {"text": "这是抹黑；", "startFrame": 41, "durationFrames": 31}, {"text": "说华为P30 Pro拍月亮用AI伪造照片，", "startFrame": 72, "durationFrames": 96}, {"text": "这是讲事实。", "startFrame": 168, "durationFrames": 32}]} totalDurationFrames={200} left={{label: "❌ 喜欢造假", src: staticFile("images/华为抹黑论/scene_2_4_left.png"), showFrom: 0 }} right={{label: "✅ P30 AI伪造月亮", src: staticFile("images/华为抹黑论/scene_2_4_right.png"), showFrom: 2 }} anchors={[]} />
            </Sequence>
            <Sequence from={884} durationInFrames={200}>
                <BWDosAndDonts content={[{"text": "说华为不守法，", "startFrame": 0, "durationFrames": 35}, {"text": "这是抹黑；", "startFrame": 34, "durationFrames": 30}, {"text": "说华为倒卖被美国严令禁止的商品到伊朗，", "startFrame": 64, "durationFrames": 101}, {"text": "这是讲事实。", "startFrame": 164, "durationFrames": 35}]} totalDurationFrames={200} left={{label: "❌ 不守法", src: staticFile("images/华为抹黑论/scene_2_5_left.png"), showFrom: 0 }} right={{label: "✅ 倒卖禁品到伊朗", src: staticFile("images/华为抹黑论/scene_2_5_right.png"), showFrom: 2 }} anchors={[]} />
            </Sequence>
            <Sequence from={1084} durationInFrames={154}>
                <BWDosAndDonts content={[{"text": "说华为依靠抄袭起家，", "startFrame": 0, "durationFrames": 52}, {"text": "这是抹黑；", "startFrame": 51, "durationFrames": 26}, {"text": "说华为复制思科源代码，", "startFrame": 76, "durationFrames": 47}, {"text": "这是讲事实。", "startFrame": 123, "durationFrames": 31}]} totalDurationFrames={154} left={{label: "❌ 抄袭起家", src: staticFile("images/华为抹黑论/scene_2_6_left.png"), showFrom: 0 }} right={{label: "✅ 复制思科源码", src: staticFile("images/华为抹黑论/scene_2_6_right.png"), showFrom: 2 }} anchors={[]} />
            </Sequence>
            <Sequence from={1238} durationInFrames={216}>
                <BWDosAndDonts content={[{"text": "说华为搞间谍战，", "startFrame": 0, "durationFrames": 46}, {"text": "这是抹黑；", "startFrame": 45, "durationFrames": 31}, {"text": "说华为窃取摩托罗拉专有无线网络切换技术，", "startFrame": 76, "durationFrames": 105}, {"text": "这是讲事实。", "startFrame": 181, "durationFrames": 34}]} totalDurationFrames={216} left={{label: "❌ 搞间谍战", src: staticFile("images/华为抹黑论/scene_2_7_left.png"), showFrom: 0 }} right={{label: "✅ 窃取摩托罗拉技术", src: staticFile("images/华为抹黑论/scene_2_7_right.png"), showFrom: 2 }} anchors={[]} />
            </Sequence>
            <Sequence from={1454} durationInFrames={198}>
                <BWDosAndDonts content={[{"text": "说华为低质高价，", "startFrame": 0, "durationFrames": 44}, {"text": "这是抹黑；", "startFrame": 43, "durationFrames": 34}, {"text": "说华为把六八零芯片的手机卖2000，", "startFrame": 77, "durationFrames": 83}, {"text": "这是讲事实。", "startFrame": 160, "durationFrames": 37}]} totalDurationFrames={198} left={{label: "❌ 低质高价", src: staticFile("images/华为抹黑论/scene_2_8_left.png"), showFrom: 0 }} right={{label: "✅ 680芯片卖2000", src: staticFile("images/华为抹黑论/scene_2_8_right.png"), showFrom: 2 }} anchors={[]} />
            </Sequence>
            <Sequence from={1652} durationInFrames={251}>
                <BWDosAndDonts content={[{"text": "说华为不遵守劳动法，", "startFrame": 0, "durationFrames": 51}, {"text": "这是抹黑；", "startFrame": 50, "durationFrames": 32}, {"text": "说华为用奋斗者协议让员工自愿放弃带薪年休假工资，", "startFrame": 81, "durationFrames": 136}, {"text": "这是讲事实。", "startFrame": 217, "durationFrames": 34}]} totalDurationFrames={251} left={{label: "❌ 不遵守劳动法", src: staticFile("images/华为抹黑论/scene_2_9_left.png"), showFrom: 0 }} right={{label: "✅ 奋斗者协议放弃年假", src: staticFile("images/华为抹黑论/scene_2_9_right.png"), showFrom: 2 }} anchors={[]} />
            </Sequence>
            <Sequence from={1903} durationInFrames={200}>
                <BWDosAndDonts content={[{"text": "说华为心黑手辣，", "startFrame": 0, "durationFrames": 44}, {"text": "这是抹黑；", "startFrame": 43, "durationFrames": 31}, {"text": "说华为将李洪元无端扣押251天，", "startFrame": 74, "durationFrames": 91}, {"text": "这是讲事实。", "startFrame": 164, "durationFrames": 35}]} totalDurationFrames={200} left={{label: "❌ 心黑手辣", src: staticFile("images/华为抹黑论/scene_2_10_left.png"), showFrom: 0 }} right={{label: "✅ 李洪元扣押251天", src: staticFile("images/华为抹黑论/scene_2_10_right.png"), showFrom: 2 }} anchors={[]} />
            </Sequence>
            <Sequence from={2103} durationInFrames={154}>
                <BWDosAndDonts content={[{"text": "说华为喜欢剥削员工，", "startFrame": 0, "durationFrames": 42}, {"text": "这是抹黑；", "startFrame": 41, "durationFrames": 24}, {"text": "说华为大量使用外包OD，", "startFrame": 65, "durationFrames": 58}, {"text": "这是讲事实。", "startFrame": 123, "durationFrames": 31}]} totalDurationFrames={154} left={{label: "❌ 剥削员工", src: staticFile("images/华为抹黑论/scene_2_11_left.png"), showFrom: 0 }} right={{label: "✅ 大量外包OD", src: staticFile("images/华为抹黑论/scene_2_11_right.png"), showFrom: 2 }} anchors={[]} />
            </Sequence>
            <Sequence from={2257} durationInFrames={203}>
                <BWDosAndDonts content={[{"text": "说华为不尊重知识产权，", "startFrame": 0, "durationFrames": 59}, {"text": "这是抹黑；", "startFrame": 58, "durationFrames": 27}, {"text": "说华为通过修改安卓源代码宣称自研，", "startFrame": 85, "durationFrames": 86}, {"text": "这是讲事实。", "startFrame": 170, "durationFrames": 33}]} totalDurationFrames={203} left={{label: "❌ 不尊重知识产权", src: staticFile("images/华为抹黑论/scene_2_12_left.png"), showFrom: 0 }} right={{label: "✅ 改安卓称自研", src: staticFile("images/华为抹黑论/scene_2_12_right.png"), showFrom: 2 }} anchors={[]} />
            </Sequence>
            <Sequence from={2460} durationInFrames={210}>
                <BWDosAndDonts content={[{"text": "说华为惯用行贿手段，", "startFrame": 0, "durationFrames": 51}, {"text": "这是抹黑；", "startFrame": 50, "durationFrames": 30}, {"text": "说华为贿赂中国移动重庆公司董事长沈长富，", "startFrame": 79, "durationFrames": 99}, {"text": "这是讲事实。", "startFrame": 177, "durationFrames": 33}]} totalDurationFrames={210} left={{label: "❌ 惯用行贿", src: staticFile("images/华为抹黑论/scene_2_13_left.png"), showFrom: 0 }} right={{label: "✅ 贿赂沈长富", src: staticFile("images/华为抹黑论/scene_2_13_right.png"), showFrom: 2 }} anchors={[]} />
            </Sequence>
            <Sequence from={2670} durationInFrames={272}>
                <BWDosAndDonts content={[{"text": "说华为惯用套壳换标手段忽悠消费者，", "startFrame": 0, "durationFrames": 107}, {"text": "这是抹黑；", "startFrame": 106, "durationFrames": 37}, {"text": "说华为用400块的联想套壳华为卖2000，", "startFrame": 142, "durationFrames": 96}, {"text": "这是讲事实。", "startFrame": 238, "durationFrames": 33}]} totalDurationFrames={272} left={{label: "❌ 套壳换标忽悠", src: staticFile("images/华为抹黑论/scene_2_14_left.png"), showFrom: 0 }} right={{label: "✅ 400块联想套壳卖2000", src: staticFile("images/华为抹黑论/scene_2_14_right.png"), showFrom: 2 }} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/华为抹黑论/scene_2/scene_2.mp3")} />
        </AbsoluteFill>
    );
};
