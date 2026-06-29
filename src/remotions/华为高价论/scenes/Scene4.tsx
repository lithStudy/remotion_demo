import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWPanelGrid, BWPeerInduct, BWPunchCaption, BWQuoteCitation, BWSplitCompare, BWStepList } from "../../../components";

// 反转：谁在推动国产
const SCENE_DURATION = 166 + 114 + 179 + 228 + 202 + 117 + 406 + 294;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={166}>
                <BWQuoteCitation content={[{"text": "有人会说，", "startFrame": 0, "durationFrames": 30}, {"text": "不管是为了真生存，", "startFrame": 29, "durationFrames": 40}, {"text": "还是为了假脊梁，", "startFrame": 68, "durationFrames": 34}, {"text": "华为不都在为国产贡献力量吗？", "startFrame": 102, "durationFrames": 63}]} totalDurationFrames={166} quoteSource={"常见质疑"} quoteDisplayText={"不管是为了真生存，还是为了假脊梁，华为不都在为国产贡献力量吗？"} showFrom={1} />
            </Sequence>
            <Sequence from={166} durationInFrames={114}>
                <BWPunchCaption content={[{"text": "这话没错。", "startFrame": 0, "durationFrames": 33}, {"text": "但在为国产贡献力量的不只是华为。", "startFrame": 32, "durationFrames": 81}]} totalDurationFrames={114} punches={[{"text": "没错", "showFrom": 0, "enterEffect": "popIn", "tone": "calm"}, {"text": "不只是华为", "showFrom": 1, "enterEffect": "snap", "tone": "alert"}]} anchors={[{"text": "不只是华为", "showFrom": 1, "color": "#EF4444", "anim": "popIn", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={280} durationInFrames={179}>
                <BWCenterFocus content={[{"text": "国产供应链更可控，", "startFrame": 0, "durationFrames": 59}, {"text": "国产技术如果真正发展起来，", "startFrame": 58, "durationFrames": 67}, {"text": "长期性价比也会更高。", "startFrame": 125, "durationFrames": 53}]} totalDurationFrames={179} imageSrc={staticFile("images/华为高价论/scene_4_3.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={459} durationInFrames={228}>
                <BWPanelGrid content={[{"text": "所以小米、", "startFrame": 0, "durationFrames": 33}, {"text": "OPPO、", "startFrame": 32, "durationFrames": 21}, {"text": "vivo、", "startFrame": 53, "durationFrames": 17}, {"text": "联想、", "startFrame": 69, "durationFrames": 22}, {"text": "大疆，", "startFrame": 91, "durationFrames": 20}, {"text": "以及大量你叫不上名字的公司，", "startFrame": 111, "durationFrames": 63}, {"text": "其实都在推动国产替代。", "startFrame": 173, "durationFrames": 55}]} totalDurationFrames={228} panels={[{ src: staticFile("images/华为高价论/scene_4_4_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { src: staticFile("images/华为高价论/scene_4_4_img1.png"), showFrom: 1, enterEffect: "fadeIn" }, { src: staticFile("images/华为高价论/scene_4_4_img2.png"), showFrom: 2, enterEffect: "fadeIn" }, { src: staticFile("images/华为高价论/scene_4_4_img3.png"), showFrom: 3, enterEffect: "slideLeft" }, { src: staticFile("images/华为高价论/scene_4_4_img4.png"), showFrom: 4, enterEffect: "slideLeft" }, { src: staticFile("images/华为高价论/scene_4_4_img5.png"), showFrom: 5, enterEffect: "zoomIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={687} durationInFrames={202}>
                <BWSplitCompare content={[{"text": "区别只在于，", "startFrame": 0, "durationFrames": 34}, {"text": "有些公司把它当成长期产业能力来建设。", "startFrame": 33, "durationFrames": 90}, {"text": "有些公司把它当成营销叙事来出售。", "startFrame": 122, "durationFrames": 79}]} totalDurationFrames={202} leftSrc={staticFile("images/华为高价论/scene_4_5_left.png")} rightSrc={staticFile("images/华为高价论/scene_4_5_right.png")} leftLabel={"长期建设"} rightLabel={"营销叙事"} leftShowFrom={1} rightShowFrom={2} anchors={[]} />
            </Sequence>
            <Sequence from={889} durationInFrames={117}>
                <BWCenterFocus content={[{"text": "推动国产，", "startFrame": 0, "durationFrames": 29}, {"text": "最合理的路径，", "startFrame": 28, "durationFrames": 34}, {"text": "应该是一个循序渐进的过程。", "startFrame": 62, "durationFrames": 54}]} totalDurationFrames={117} imageSrc={staticFile("images/华为高价论/scene_4_6.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={1006} durationInFrames={406}>
                <BWStepList content={[{"text": "一边利用全球产业链，", "startFrame": 0, "durationFrames": 56}, {"text": "生产真正有全球竞争力的产品。", "startFrame": 55, "durationFrames": 75}, {"text": "一边卖给全世界的人，", "startFrame": 130, "durationFrames": 46}, {"text": "赚全世界的钱。", "startFrame": 176, "durationFrames": 40}, {"text": "再用这些利润反哺国内研发、", "startFrame": 215, "durationFrames": 64}, {"text": "工艺、材料、设备和人才。", "startFrame": 278, "durationFrames": 75}, {"text": "这才是健康的产业升级。", "startFrame": 353, "durationFrames": 53}]} totalDurationFrames={406} title={"健康的产业升级"} steps={[{"text": "生产竞争力产品", "showFrom": 1}, {"text": "赚全世界的钱", "showFrom": 3}, {"text": "利润反哺产业升级", "showFrom": 4}]} anchors={[]} />
            </Sequence>
            <Sequence from={1412} durationInFrames={294}>
                <BWPeerInduct content={[{"text": "而不是把企业的困境包装成国家的困境。", "startFrame": 0, "durationFrames": 102}, {"text": "把产品的短板包装成精神的长板。", "startFrame": 101, "durationFrames": 89}, {"text": "再通过道德感，", "startFrame": 189, "durationFrames": 50}, {"text": "要求国人为你的生存买单。", "startFrame": 240, "durationFrames": 65}]} totalDurationFrames={294} premises={[{ imageSrc: staticFile("images/华为高价论/scene_4_9_img0.png"), enterEffect: "breathe", showFrom: 0 }, { imageSrc: staticFile("images/华为高价论/scene_4_9_img1.png"), enterEffect: "slideBottom", showFrom: 1 }]} conclusion={{ imageSrc: staticFile("images/华为高价论/scene_4_9.png"), enterEffect: "slideBottom", showFrom: 2, tone: "alert" }} />
            </Sequence>
            <Audio src={staticFile("/audio/华为高价论/scene_4/scene_4.mp3")} />
        </AbsoluteFill>
    );
};
