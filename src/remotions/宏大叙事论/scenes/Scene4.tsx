import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCauseChain, BWChatBubble, BWConceptCard, BWPanelGrid, BWSplitCompare, BWTextFocus } from "../../../components";

// 剖析·免责与空头支票
const SCENE_DURATION = 254 + 196 + 107 + 139 + 68 + 166 + 323 + 146 + 108 + 166;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={254}>
                <BWConceptCard content={[{"text": "宏大叙事的第三个问题，", "startFrame": 0, "durationFrames": 47}, {"text": "是不可证伪的免责护身符。", "startFrame": 46, "durationFrames": 56}, {"text": "这是宏大叙事最阴暗的功能—", "startFrame": 102, "durationFrames": 59}, {"text": "为管理无能和制度缺陷提供终极避难所。", "startFrame": 161, "durationFrames": 93}]} totalDurationFrames={254} imageSrc={staticFile("images/宏大叙事论/scene_4_1.png")} conceptName={"免责护身符"} />
            </Sequence>
            <Sequence from={254} durationInFrames={196}>
                <BWSplitCompare content={[{"text": "决策失误了？", "startFrame": 0, "durationFrames": 33}, {"text": "那是“探索付出的必要学费”。", "startFrame": 32, "durationFrames": 53}, {"text": "分配不公了？", "startFrame": 85, "durationFrames": 33}, {"text": "那是“发展过程中的阶段性阵痛”。", "startFrame": 117, "durationFrames": 78}]} totalDurationFrames={196} leftSrc={staticFile("images/宏大叙事论/scene_4_2_left.png")} rightSrc={staticFile("images/宏大叙事论/scene_4_2_right.png")} leftLabel={"高层的说辞"} rightLabel={"底层的现实"} leftShowFrom={0} rightShowFrom={2} />
            </Sequence>
            <Sequence from={450} durationInFrames={107}>
                <BWPanelGrid content={[{"text": "食品安全出问题、", "startFrame": 0, "durationFrames": 44}, {"text": "维权困难、", "startFrame": 43, "durationFrames": 26}, {"text": "规则被破坏…", "startFrame": 68, "durationFrames": 39}]} totalDurationFrames={107} panels={[{ src: staticFile("images/宏大叙事论/scene_4_3_img0.png"), showFrom: 0, enterEffect: "zoomIn" }, { src: staticFile("images/宏大叙事论/scene_4_3_img1.png"), showFrom: 1, enterEffect: "slideLeft" }, { src: staticFile("images/宏大叙事论/scene_4_3_img2.png"), showFrom: 2, enterEffect: "fadeIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={557} durationInFrames={139}>
                <BWCauseChain content={[{"text": "只要盖上“为了大局”的印章，", "startFrame": 0, "durationFrames": 60}, {"text": "所有的具体责任瞬间被稀释干净。", "startFrame": 60, "durationFrames": 79}]} totalDurationFrames={139} layout={"horizontal"} nodes={[{ label: "盖印", imageSrc: staticFile("images/宏大叙事论/scene_4_4_img0.png"), showFrom: 0, enterEffect: "zoomIn" }, { label: "稀释", imageSrc: staticFile("images/宏大叙事论/scene_4_4_img1.png"), showFrom: 1, enterEffect: "fadeIn" }]} anchors={[{"text": "责任稀释", "showFrom": 1, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={696} durationInFrames={68}>
                <BWTextFocus content={[{"text": "它让你连扣问真相的权利都没有。", "startFrame": 0, "durationFrames": 68}]} totalDurationFrames={68} coreSentence={[{"text": "它让你连扣问真相的权利都没有。", "showFrom": 0, "endFrom": 0}]} coreSentenceAnchors={[]} />
            </Sequence>
            <Sequence from={764} durationInFrames={166}>
                <BWCauseChain content={[{"text": "因为你一开口质问具体问题，", "startFrame": 0, "durationFrames": 60}, {"text": "你就会被扣上“破坏大局”、", "startFrame": 60, "durationFrames": 54}, {"text": " “缺乏大观”的道德帽子。", "startFrame": 113, "durationFrames": 52}]} totalDurationFrames={166} layout={"horizontal"} nodes={[{ label: "开口质问", imageSrc: staticFile("images/宏大叙事论/scene_4_6_img0.png"), showFrom: 0, enterEffect: "zoomIn" }, { label: "被扣大帽", imageSrc: staticFile("images/宏大叙事论/scene_4_6_img1.png"), showFrom: 1, enterEffect: "zoomIn" }, { label: "道德帽子", imageSrc: staticFile("images/宏大叙事论/scene_4_6_img2.png"), showFrom: 2, enterEffect: "zoomIn" }]} anchors={[{"text": "道德帽子", "showFrom": 2, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={930} durationInFrames={323}>
                <BWConceptCard content={[{"text": "宏大叙事的第四个问题，", "startFrame": 0, "durationFrames": 52}, {"text": "是兑现期无限推迟的远期空头支票。", "startFrame": 51, "durationFrames": 93}, {"text": "它永远在用一个遥不可及、", "startFrame": 143, "durationFrames": 47}, {"text": "无法验证的“美好未来”，", "startFrame": 190, "durationFrames": 44}, {"text": "强行清零你眼下具体的合法权益。", "startFrame": 233, "durationFrames": 89}]} totalDurationFrames={323} imageSrc={staticFile("images/宏大叙事论/scene_4_7.png")} conceptName={"空头支票"} />
            </Sequence>
            <Sequence from={1253} durationInFrames={146}>
                <BWChatBubble content={[{"text": "他们会告诉你：", "startFrame": 0, "durationFrames": 30}, {"text": "再忍一忍，为了下一代；", "startFrame": 29, "durationFrames": 58}, {"text": "再等一等，为了长远发展。", "startFrame": 87, "durationFrames": 59}]} totalDurationFrames={146} bubbles={[{ bubbleText: "再忍一忍，为了下一代；", showFrom: 1, align: "left" }, { bubbleText: "再等一等，为了长远发展。", showFrom: 2, align: "left" }]} />
            </Sequence>
            <Sequence from={1399} durationInFrames={108}>
                <BWTextFocus content={[{"text": "但当下这一代人的尊严和生存，", "startFrame": 0, "durationFrames": 59}, {"text": "难道就该被白白牺牲吗？", "startFrame": 58, "durationFrames": 49}]} totalDurationFrames={108} coreSentence={[{"text": "但当下这一代人的尊严和生存，", "showFrom": 0, "endFrom": 1}, {"text": "难道就该被白白牺牲吗？", "showFrom": 1, "endFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "尊严和生存", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={1507} durationInFrames={166}>
                <BWTextFocus content={[{"text": "一个连当下具体的个人都无法保障的叙事，", "startFrame": 0, "durationFrames": 87}, {"text": "凭什么让人相信它能兑现美好的未来？", "startFrame": 86, "durationFrames": 79}]} totalDurationFrames={166} coreSentence={[{"text": "无法保障当下的叙事，", "showFrom": 0}, {"text": "如何兑现美好的未来？", "showFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "当下的叙事", "color": "#EF4444"}, {"coreSentenceAnchor": "美好的未来", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/宏大叙事论/scene_4/scene_4.mp3")} />
        </AbsoluteFill>
    );
};
