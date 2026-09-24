import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWBeatSequence, BWCauseChain, BWCenterFocus, BWCognitiveShift, BWConceptCard, BWDosAndDonts, BWSplitCompare, BWTextFocus, BWTreeDiagram } from "../../../components";

// 剖析：幸存者偏差
const SCENE_DURATION = 86 + 155 + 147 + 81 + 164 + 123 + 69 + 80 + 251 + 113 + 81;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={86}>
                <BWTreeDiagram content={[{"text": "第二类则更隐蔽：", "startFrame": 0, "durationFrames": 45}, {"text": "幸存者偏差。", "startFrame": 44, "durationFrames": 41}]} totalDurationFrames={86} root={{ label: "糟粕的延续", showFrom: 0, children: [{ label: "强权的需要", showFrom: 0 }, { label: "幸存者偏差", showFrom: 1 }] }} />
            </Sequence>
            <Sequence from={86} durationInFrames={155}>
                <BWBeatSequence content={[{"text": "二战返航的飞机，机翼上到处是洞。", "startFrame": 0, "durationFrames": 75}, {"text": "有人下意识会觉得：", "startFrame": 75, "durationFrames": 39}, {"text": "机翼需要加固。", "startFrame": 113, "durationFrames": 42}]} totalDurationFrames={155} stages={[{ imageSrc: staticFile("images/千年传承论/scene_3_2_img0.png"), enterEffect: "zoomIn", tone: "calm", showFrom: 0 }, { imageSrc: staticFile("images/千年传承论/scene_3_2_img1.png"), enterEffect: "zoomIn", tone: "alert", showFrom: 1 }, { imageSrc: staticFile("images/千年传承论/scene_3_2_img2.png"), enterEffect: "zoomIn", tone: "alert", showFrom: 2 }]} anchors={[]} />
            </Sequence>
            <Sequence from={241} durationInFrames={147}>
                <BWDosAndDonts content={[{"text": "实际上，", "startFrame": 0, "durationFrames": 23}, {"text": "能被看到的都是幸存者。", "startFrame": 22, "durationFrames": 57}, {"text": "打中引擎的根本没能回来。", "startFrame": 79, "durationFrames": 68}]} totalDurationFrames={147} left={{label: "❌ 战死者", src: staticFile("images/千年传承论/scene_3_3_left.png"), showFrom: 2 }} right={{label: "✅ 幸存者", src: staticFile("images/千年传承论/scene_3_3_right.png"), showFrom: 1 }} />
            </Sequence>
            <Sequence from={388} durationInFrames={81}>
                <BWConceptCard content={[{"text": "中医争议，", "startFrame": 0, "durationFrames": 24}, {"text": "就是最典型的幸存者偏差。", "startFrame": 23, "durationFrames": 57}]} totalDurationFrames={81} imageSrc={staticFile("images/千年传承论/scene_3_4.png")} conceptName={"中医争议"} />
            </Sequence>
            <Sequence from={469} durationInFrames={164}>
                <BWSplitCompare content={[{"text": "运气好治好一个，", "startFrame": 0, "durationFrames": 38}, {"text": "立牌匾、", "startFrame": 37, "durationFrames": 17}, {"text": "传神医；", "startFrame": 53, "durationFrames": 26}, {"text": "运气不好治废一堆，", "startFrame": 78, "durationFrames": 41}, {"text": "没记录、", "startFrame": 118, "durationFrames": 21}, {"text": "埋尘埃。", "startFrame": 139, "durationFrames": 25}]} totalDurationFrames={164} leftSrc={staticFile("images/千年传承论/scene_3_5_left.png")} rightSrc={staticFile("images/千年传承论/scene_3_5_right.png")} leftLabel={"扬名"} rightLabel={"湮灭"} leftShowFrom={0} rightShowFrom={3} anchors={[]} />
            </Sequence>
            <Sequence from={633} durationInFrames={123}>
                <BWCognitiveShift content={[{"text": "表面看是个个灵验，", "startFrame": 0, "durationFrames": 52}, {"text": "实际上却是死掉的没法说话。", "startFrame": 51, "durationFrames": 72}]} totalDurationFrames={123} notText={"表面灵验"} butText={"死者沉默"} butSrc={staticFile("images/千年传承论/scene_3_6.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Sequence from={756} durationInFrames={69}>
                <BWTextFocus content={[{"text": "传的不是神奇，", "startFrame": 0, "durationFrames": 33}, {"text": "是幸存的故事。", "startFrame": 32, "durationFrames": 36}]} totalDurationFrames={69} coreSentence={[{"text": "传的不是神奇，", "showFrom": 0, "endFrom": 0}, {"text": "是幸存的故事。", "showFrom": 1, "endFrom": 1}]} />
            </Sequence>
            <Sequence from={825} durationInFrames={80}>
                <BWConceptCard content={[{"text": "风水玄学，", "startFrame": 0, "durationFrames": 30}, {"text": "也是相同的幸存者偏差。", "startFrame": 29, "durationFrames": 51}]} totalDurationFrames={80} imageSrc={staticFile("images/千年传承论/scene_3_8.png")} conceptName={"风水玄学"} />
            </Sequence>
            <Sequence from={905} durationInFrames={251}>
                <BWCauseChain content={[{"text": "有人做了大官，回家一看：", "startFrame": 0, "durationFrames": 69}, {"text": "祖坟有龙脉之象。", "startFrame": 68, "durationFrames": 46}, {"text": "于是写书、立传、到处讲风水重要，", "startFrame": 114, "durationFrames": 98}, {"text": "于是人尽皆知。", "startFrame": 211, "durationFrames": 40}]} totalDurationFrames={251} layout={"horizontal"} nodes={[{ label: "官成归乡", imageSrc: staticFile("images/千年传承论/scene_3_9_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { label: "龙脉之象", imageSrc: staticFile("images/千年传承论/scene_3_9_img1.png"), showFrom: 1, enterEffect: "zoomIn" }, { label: "著书立传", imageSrc: staticFile("images/千年传承论/scene_3_9_img2.png"), showFrom: 2, enterEffect: "slideLeft" }, { label: "人尽皆知", imageSrc: staticFile("images/千年传承论/scene_3_9_img3.png"), showFrom: 3, enterEffect: "fadeIn" }]} anchors={[{"text": "龙脉", "showFrom": 1, "color": "#000000", "anim": "highlight"}]} />
            </Sequence>
            <Sequence from={1156} durationInFrames={113}>
                <BWCenterFocus content={[{"text": "贫苦百姓呢？", "startFrame": 0, "durationFrames": 38}, {"text": "祖坟就算骑在龙头上，", "startFrame": 37, "durationFrames": 47}, {"text": "也没人知道。", "startFrame": 84, "durationFrames": 29}]} totalDurationFrames={113} imageSrc={staticFile("images/千年传承论/scene_3_10.png")} enterEffect="fadeIn" anchors={[{"text": "没人知道", "showFrom": 2, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={1269} durationInFrames={81}>
                <BWTextFocus content={[{"text": "传的不是灵验，", "startFrame": 0, "durationFrames": 39}, {"text": "是大官的音量。", "startFrame": 38, "durationFrames": 43}]} totalDurationFrames={81} coreSentence={[{"text": "传的不是灵验，", "showFrom": 0, "endFrom": 0}, {"text": "是大官的音量。", "showFrom": 1, "endFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "大官的音量", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/千年传承论/scene_3/scene_3.mp3")} />
        </AbsoluteFill>
    );
};
