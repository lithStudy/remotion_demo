import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWPanelGrid, BWPeerInduct, BWPunchCaption, BWQuoteCitation, BWSplitCompare, BWStepList } from "../../../components";

// 反转：谁在推动国产
const SCENE_DURATION = 163 + 116 + 172 + 223 + 192 + 118 + 402 + 271;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={163}>
                <BWQuoteCitation content={[{"text": "有人会说，", "startFrame": 0, "durationFrames": 26}, {"text": "不管是为了真生存，", "startFrame": 25, "durationFrames": 40}, {"text": "还是为了假脊梁，", "startFrame": 64, "durationFrames": 32}, {"text": "华为不都在为国产贡献力量吗？", "startFrame": 96, "durationFrames": 67}]} totalDurationFrames={163} quoteSource={"常见质疑"} quoteDisplayText={"不管是为了真生存，还是为了假脊梁，华为不都在为国产贡献力量吗？"} showFrom={1} />
            </Sequence>
            <Sequence from={163} durationInFrames={116}>
                <BWPunchCaption content={[{"text": "这话没错。", "startFrame": 0, "durationFrames": 31}, {"text": "但在为国产贡献力量的不只是华为。", "startFrame": 30, "durationFrames": 85}]} totalDurationFrames={116} punches={[{"text": "没错", "showFrom": 0, "enterEffect": "popIn", "tone": "calm"}, {"text": "不只是华为", "showFrom": 1, "enterEffect": "snap", "tone": "alert"}]} anchors={[{"text": "不只是华为", "showFrom": 1, "color": "#EF4444", "anim": "popIn", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={279} durationInFrames={172}>
                <BWCenterFocus content={[{"text": "国产供应链更可控，", "startFrame": 0, "durationFrames": 54}, {"text": "国产技术如果真正发展起来，", "startFrame": 53, "durationFrames": 64}, {"text": "长期性价比也会更高。", "startFrame": 116, "durationFrames": 55}]} totalDurationFrames={172} imageSrc={staticFile("images/华为高价论/scene_4_3.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={451} durationInFrames={223}>
                <BWPanelGrid content={[{"text": "所以小米、", "startFrame": 0, "durationFrames": 30}, {"text": "OPPO、", "startFrame": 29, "durationFrames": 17}, {"text": "vivo、", "startFrame": 45, "durationFrames": 18}, {"text": "联想、", "startFrame": 63, "durationFrames": 20}, {"text": "大疆，", "startFrame": 82, "durationFrames": 21}, {"text": "以及大量你叫不上名字的公司，", "startFrame": 103, "durationFrames": 66}, {"text": "其实都在推动国产替代。", "startFrame": 169, "durationFrames": 54}]} totalDurationFrames={223} panels={[{ src: staticFile("images/华为高价论/scene_4_4_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { src: staticFile("images/华为高价论/scene_4_4_img1.png"), showFrom: 1, enterEffect: "fadeIn" }, { src: staticFile("images/华为高价论/scene_4_4_img2.png"), showFrom: 2, enterEffect: "fadeIn" }, { src: staticFile("images/华为高价论/scene_4_4_img3.png"), showFrom: 3, enterEffect: "slideLeft" }, { src: staticFile("images/华为高价论/scene_4_4_img4.png"), showFrom: 4, enterEffect: "slideLeft" }, { src: staticFile("images/华为高价论/scene_4_4_img5.png"), showFrom: 5, enterEffect: "zoomIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={674} durationInFrames={192}>
                <BWSplitCompare content={[{"text": "区别只在于，", "startFrame": 0, "durationFrames": 33}, {"text": "有些公司把它当成长期产业能力来建设。", "startFrame": 32, "durationFrames": 86}, {"text": "有些公司把它当成营销叙事来出售。", "startFrame": 117, "durationFrames": 75}]} totalDurationFrames={192} leftSrc={staticFile("images/华为高价论/scene_4_5_left.png")} rightSrc={staticFile("images/华为高价论/scene_4_5_right.png")} leftLabel={"长期建设"} rightLabel={"营销叙事"} leftShowFrom={1} rightShowFrom={2} anchors={[]} />
            </Sequence>
            <Sequence from={866} durationInFrames={118}>
                <BWCenterFocus content={[{"text": "推动国产，", "startFrame": 0, "durationFrames": 30}, {"text": "最合理的路径，", "startFrame": 29, "durationFrames": 32}, {"text": "应该是一个循序渐进的过程。", "startFrame": 61, "durationFrames": 57}]} totalDurationFrames={118} imageSrc={staticFile("images/华为高价论/scene_4_6.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={984} durationInFrames={402}>
                <BWStepList content={[{"text": "一边利用全球产业链，", "startFrame": 0, "durationFrames": 52}, {"text": "生产真正有全球竞争力的产品。", "startFrame": 51, "durationFrames": 75}, {"text": "一边卖给全世界的人，", "startFrame": 125, "durationFrames": 44}, {"text": "赚全世界的钱。", "startFrame": 169, "durationFrames": 42}, {"text": "再用这些利润反哺国内研发、", "startFrame": 210, "durationFrames": 64}, {"text": "工艺、材料、设备和人才。", "startFrame": 273, "durationFrames": 70}, {"text": "这才是健康的产业升级。", "startFrame": 343, "durationFrames": 59}]} totalDurationFrames={402} title={"健康的产业升级"} steps={[{"text": "生产竞争力产品", "showFrom": 1}, {"text": "赚全世界的钱", "showFrom": 3}, {"text": "利润反哺产业升级", "showFrom": 4}]} anchors={[]} />
            </Sequence>
            <Sequence from={1386} durationInFrames={271}>
                <BWPeerInduct content={[{"text": "而不是把企业的困境包装成国家的困境。", "startFrame": 0, "durationFrames": 85}, {"text": "把产品的短板包装成精神的长板。", "startFrame": 84, "durationFrames": 87}, {"text": "再通过道德感，", "startFrame": 170, "durationFrames": 1}, {"text": "要求国人为你的生存买单。", "startFrame": 0, "durationFrames": 912}]} totalDurationFrames={271} premises={[{ imageSrc: staticFile("images/华为高价论/scene_4_9_img0.png"), enterEffect: "breathe", showFrom: 0 }, { imageSrc: staticFile("images/华为高价论/scene_4_9_img1.png"), enterEffect: "slideBottom", showFrom: 1 }]} conclusion={{ imageSrc: staticFile("images/华为高价论/scene_4_9.png"), enterEffect: "slideBottom", showFrom: 2, tone: "alert" }} />
            </Sequence>
            <Audio src={staticFile("/audio/华为高价论/scene_4/scene_4.mp3")} />
        </AbsoluteFill>
    );
};
