import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCaseBreakdown, BWCauseChain, BWCenterFocus, BWCognitiveShift, BWConceptCard, BWDosAndDonts, BWMagnifyingGlass, BWPeerInduct, BWTextFocus } from "../../../components";

// 剖析：无赖的三重真相
const SCENE_DURATION = 133 + 185 + 149 + 143 + 283 + 106 + 156 + 244 + 225 + 45 + 190 + 287 + 242 + 194;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={133}>
                <BWTextFocus content={[{"text": "“搞对立”这个词，", "startFrame": 0, "durationFrames": 44}, {"text": "最无赖的地方在于它的定义太模糊了。", "startFrame": 43, "durationFrames": 90}]} totalDurationFrames={133} coreSentence={["“搞对立”", "最无赖的地方在于", "它的定义太模糊了"]} coreSentenceAnchors={[{"coreSentenceAnchor": "无赖", "color": "#EF4444"}, {"coreSentenceAnchor": "定义太模糊", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={133} durationInFrames={185}>
                <BWPeerInduct content={[{"text": "在法律和公德里，", "startFrame": 0, "durationFrames": 44}, {"text": "造谣有事实标准，", "startFrame": 43, "durationFrames": 42}, {"text": "辱骂有言辞标准。", "startFrame": 85, "durationFrames": 54}, {"text": "但什么是对立？", "startFrame": 138, "durationFrames": 46}]} totalDurationFrames={185} premises={[{ imageSrc: staticFile("images/搞对立/scene_2_2_img0.png"), enterEffect: "slideBottom", showFrom: 1 }, { imageSrc: staticFile("images/搞对立/scene_2_2_img1.png"), enterEffect: "slideBottom", showFrom: 2 }]} conclusion={{ imageSrc: staticFile("images/搞对立/scene_2_2.png"), enterEffect: "zoomIn", showFrom: 3, tone: "alert" }} />
            </Sequence>
            <Sequence from={318} durationInFrames={149}>
                <BWCauseChain content={[{"text": "你说“农村医保报销比例该向城市看齐”，", "startFrame": 0, "durationFrames": 92}, {"text": "有人说你制造城乡对立；", "startFrame": 91, "durationFrames": 57}]} totalDurationFrames={149} layout={"horizontal"} nodes={[{ label: "医保同权", imageSrc: staticFile("images/搞对立/scene_2_3_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { label: "城乡对立", imageSrc: staticFile("images/搞对立/scene_2_3_img1.png"), showFrom: 1, enterEffect: "fadeIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={467} durationInFrames={143}>
                <BWCauseChain content={[{"text": "你说“现代西医就是比传统中医有效”，", "startFrame": 0, "durationFrames": 82}, {"text": "有人说你制造中西医对立。", "startFrame": 81, "durationFrames": 62}]} totalDurationFrames={143} layout={"horizontal"} nodes={[{ label: "现代医学更科学", imageSrc: staticFile("images/搞对立/scene_2_4_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { label: "中西医对立", imageSrc: staticFile("images/搞对立/scene_2_4_img1.png"), showFrom: 1, enterEffect: "fadeIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={610} durationInFrames={283}>
                <BWCaseBreakdown content={[{"text": "发现了吗？", "startFrame": 0, "durationFrames": 23}, {"text": "只要你提出的观点触及了某个群体的既得利益，", "startFrame": 22, "durationFrames": 99}, {"text": "或者是撕开了社会本来就存在的伤口，", "startFrame": 120, "durationFrames": 82}, {"text": "这个词就会像回旋镖一样飞向你。", "startFrame": 202, "durationFrames": 81}]} totalDurationFrames={283} title={"回旋镖机制"} imageSrc={staticFile("images/搞对立/scene_2_5.png")} phases={[{"phaseLabel": "发问", "showFrom": 0}, {"phaseLabel": "触及利益", "showFrom": 1}, {"phaseLabel": "撕开伤口", "showFrom": 2}, {"phaseLabel": "回旋镖", "showFrom": 3}]} />
            </Sequence>
            <Sequence from={893} durationInFrames={106}>
                <BWCognitiveShift content={[{"text": "它不解决矛盾，", "startFrame": 0, "durationFrames": 35}, {"text": "它只解决那个指出矛盾的人。", "startFrame": 34, "durationFrames": 71}]} totalDurationFrames={106} notText={"解决矛盾"} butText={"解决指出矛盾的人"} butSrc={staticFile("images/搞对立/scene_2_6.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Sequence from={999} durationInFrames={156}>
                <BWConceptCard content={[{"text": "这个词的第二个无赖之处，", "startFrame": 0, "durationFrames": 52}, {"text": "是它卑劣地混淆了“呈现矛盾”与“制造矛盾”。", "startFrame": 51, "durationFrames": 105}]} totalDurationFrames={156} imageSrc={staticFile("images/搞对立/scene_2_7.png")} conceptName={"呈现 ≠ 制造"} anchors={[]} />
            </Sequence>
            <Sequence from={1155} durationInFrames={244}>
                <BWMagnifyingGlass content={[{"text": "矛盾是本来就存在的，", "startFrame": 0, "durationFrames": 42}, {"text": "就像脓疮长在身上。", "startFrame": 41, "durationFrames": 42}, {"text": "博主的言论只是那把划开脓疮的柳叶刀。", "startFrame": 82, "durationFrames": 91}, {"text": "只有划开他，才能治疗他。", "startFrame": 173, "durationFrames": 70}]} totalDurationFrames={244} anchors={[{"text": "脓疮", "showFrom": 1, "color": "#EF4444", "anim": "popIn", "audioEffect": "ping"}, {"text": "柳叶刀", "showFrom": 2, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={1399} durationInFrames={225}>
                <BWDosAndDonts content={[{"text": "现在的逻辑却是：", "startFrame": 0, "durationFrames": 39}, {"text": "你不划开，", "startFrame": 38, "durationFrames": 31}, {"text": "这病就不存在；", "startFrame": 68, "durationFrames": 35}, {"text": "你一旦划开了，", "startFrame": 103, "durationFrames": 33}, {"text": "脓血流出来了，", "startFrame": 136, "durationFrames": 35}, {"text": "你就是那个“制造伤口”的人。", "startFrame": 171, "durationFrames": 54}]} totalDurationFrames={225} left={{label: "❌ 不划开", src: staticFile("images/搞对立/scene_2_9_left.png"), showFrom: 1 }} right={{label: "❌ 划开被扣帽", src: staticFile("images/搞对立/scene_2_9_right.png"), showFrom: 3 }} />
            </Sequence>
            <Sequence from={1624} durationInFrames={45}>
                <BWTextFocus content={[{"text": "这不就是掩耳盗铃吗？", "startFrame": 0, "durationFrames": 45}]} totalDurationFrames={45} coreSentence={["这不就是掩耳盗铃吗？"]} coreSentenceAnchors={[{"coreSentenceAnchor": "掩耳盗铃", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={1669} durationInFrames={190}>
                <BWCenterFocus content={[{"text": "他们不怪矛盾本身，", "startFrame": 0, "durationFrames": 44}, {"text": "反而怪那个把灯照进黑暗里的人，", "startFrame": 43, "durationFrames": 71}, {"text": "嫌灯光太刺眼，", "startFrame": 114, "durationFrames": 36}, {"text": "嫌阴影太难看。", "startFrame": 150, "durationFrames": 40}]} totalDurationFrames={190} imageSrc={staticFile("images/搞对立/scene_2_11.png")} enterEffect="fadeIn" anchors={[{"text": "灯光太刺眼", "showFrom": 2, "color": "#EF4444", "anim": "highlight"}, {"text": "阴影太难看", "showFrom": 3, "color": "#EF4444", "anim": "highlight"}]} />
            </Sequence>
            <Sequence from={1859} durationInFrames={287}>
                <BWCauseChain content={[{"text": "为什么“搞对立”三个字这么好用？", "startFrame": 0, "durationFrames": 72}, {"text": "因为它是一种情绪化的降维打击。", "startFrame": 72, "durationFrames": 72}, {"text": "一旦给你扣上这顶帽子，", "startFrame": 144, "durationFrames": 50}, {"text": "就意味着剥夺了你进行理性辩论的正当性。", "startFrame": 193, "durationFrames": 94}]} totalDurationFrames={287} layout={"horizontal"} nodes={[{ label: "情绪化", imageSrc: staticFile("images/搞对立/scene_2_12_img0.png"), showFrom: 1, enterEffect: "slideBottom" }, { label: "扣帽子", imageSrc: staticFile("images/搞对立/scene_2_12_img1.png"), showFrom: 2, enterEffect: "zoomIn" }, { label: "剥夺正当性", imageSrc: staticFile("images/搞对立/scene_2_12_img2.png"), showFrom: 3, enterEffect: "slideBottom" }]} anchors={[]} />
            </Sequence>
            <Sequence from={2146} durationInFrames={242}>
                <BWMagnifyingGlass content={[{"text": "无论你的数据多详实、", "startFrame": 0, "durationFrames": 51}, {"text": "逻辑多严密，", "startFrame": 50, "durationFrames": 39}, {"text": "只要对方抛出“你在搞对立”，", "startFrame": 88, "durationFrames": 57}, {"text": "你就瞬间从一个“讨论者”变成了“破坏者”。", "startFrame": 145, "durationFrames": 96}]} totalDurationFrames={242} anchors={[{"text": "“讨论者”变成“破坏者”", "showFrom": 3, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={2388} durationInFrames={194}>
                <BWCognitiveShift content={[{"text": "它不需要讲理，", "startFrame": 0, "durationFrames": 34}, {"text": "它只需要讲“和谐”—", "startFrame": 33, "durationFrames": 42}, {"text": "一种维持表面平静、", "startFrame": 75, "durationFrames": 52}, {"text": "实则扼杀讨论的虚伪和谐。", "startFrame": 126, "durationFrames": 67}]} totalDurationFrames={194} notText={"讲理"} butText={"讲“和谐”"} butSrc={staticFile("images/搞对立/scene_2_14.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/搞对立/scene_2/scene_2.mp3")} />
        </AbsoluteFill>
    );
};
