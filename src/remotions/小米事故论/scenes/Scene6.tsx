import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWSourceCitation } from "../../../components";

// 片尾·参考资料
const SCENE_DURATION = 161;

export const calculateScene6Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene6: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={161}>
                <BWSourceCitation content={[]} totalDurationFrames={161} sectionTitle={"参考资料"} references={[{"title": "2025 China New Energy Vehicle Initial Quality Study (NEV-IQS)", "titleZh": "2025中国新能源汽车新车质量研究：小米SU7获大型纯电动细分市场第一", "publisher": "J.D. Power", "publisherZh": "J.D. Power（君迪）", "year": "2025"}, {"title": "Xiaomi Auto Cumulative Deliveries Surpass 600,000 Units", "titleZh": "小米汽车累计交付突破60万台（2025年全年交付超41万）", "publisher": "Xiaomi Auto / Gasgoo", "publisherZh": "小米汽车 / 盖世汽车", "year": "2026"}, {"title": "Xiaomi Clarifies Forged Insurance Refusal Notices and Claim-Rate Rumors", "titleZh": "小米辟谣：拒保通知系伪造；“出险率是同价位数倍”毫无依据，已报案", "publisher": "Xiaomi Spokesperson / National Business Daily", "publisherZh": "小米公司发言人 / 每日经济新闻", "year": "2025"}, {"title": "Xiaomi Response on Zhanjiang SU7 Fire Cause", "titleZh": "湛江SU7事故：初步了解为电动二轮车锂电池挤压起火再引燃事故车辆", "publisher": "Xiaomi Auto / China Financial Information Network", "publisherZh": "小米汽车 / 中国金融信息网", "year": "2025"}, {"title": "Xiaomi Statement on SU7 Collision and Fire on Deshang Expressway, Tongling", "titleZh": "安徽铜陵德上高速SU7碰撞起火：事故前NOA行驶，碰撞后起火，配合警方调查", "publisher": "Xiaomi Spokesperson / Cailian Press", "publisherZh": "小米公司发言人 / 财联社", "year": "2025"}, {"title": "National Fire and Rescue Administration: Q1 Traffic Tool and NEV Fire Statistics", "titleZh": "国家消防救援局/应急管理部：一季度交通工具火灾与新能源汽车火灾通报口径", "publisher": "National Fire and Rescue Administration / MEM", "publisherZh": "国家消防救援局 / 应急管理部", "year": "2022"}, {"title": "Public Media Tracking of Xiaomi SU7 Fire Incidents in 2025", "titleZh": "公开报道梳理：2025年小米SU7相关火情多为碰撞后起火或外部火源等复杂诱因", "publisher": "BitAuto / Multiple public reports", "publisherZh": "易车 / 多家公开报道汇总", "year": "2025"}]} />
            </Sequence>

        </AbsoluteFill>
    );
};
