import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWSourceCitation } from "../../../components";

// 参考资料
const SCENE_DURATION = 212;

export const calculateScene7Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene7: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={212}>
                <BWSourceCitation content={[]} totalDurationFrames={212} sectionTitle={"参考资料"} references={[{"title": "Seres Group Co., Ltd. 2025 Annual Report", "titleZh": "赛力斯2025年报：营收1650.54亿元，归母净利润59.57亿元（净利率约3.6%）", "publisher": "Seres Group / cninfo", "publisherZh": "赛力斯集团 / 巨潮资讯", "year": "2026"}, {"title": "Seres Group 2026 Interim Report: Net Loss of RMB 1.717 Billion", "titleZh": "赛力斯2026年半年报：营收574.93亿元，归母净亏损17.17亿元", "publisher": "Seres Group / WallstreetCN", "publisherZh": "赛力斯集团 / 华尔街见闻", "year": "2026"}, {"title": "Seres Takes Over AITO: Stuck Between Huawei Tax and Xiaokang Legacy", "titleZh": "赛力斯接管问界：技术授权约2%、渠道费约8%，叠加硬件采购俗称「华为税」", "publisher": "Yicai", "publisherZh": "第一财经", "year": "2026"}, {"title": "Seres IPO Prospectus: Largest Supplier Procurement Rose from RMB 5.8bn to 42bn", "titleZh": "赛力斯招股书：向最大供应商（供应商A）采购额由约58亿升至420亿", "publisher": "21st Century Business Herald", "publisherZh": "21世纪经济报道", "year": "2025"}, {"title": "Seres Procurement from Huawei System Reached RMB 56.054 Billion in 2025", "titleZh": "赛力斯2025年向华为体系采购约560.54亿元，约占当年营收三分之一", "publisher": "Yicai / Tencent News", "publisherZh": "第一财经 / 腾讯新闻", "year": "2026"}, {"title": "AITO Accounted for About 70% of HIMA Deliveries in 2025", "titleZh": "2025年问界交付约42.3万辆，约占鸿蒙智行全年交付七成", "publisher": "Time Weekly / Yiche", "publisherZh": "时代周报 / 易车", "year": "2026"}, {"title": "HIMA Five Brands H1 2026: AITO Share About 67%", "titleZh": "2026年上半年鸿蒙智行五界：问界销量占比约67.19%", "publisher": "Tencent News", "publisherZh": "腾讯新闻", "year": "2026"}, {"title": "AITO New Cooperation Model: Seres Leads Product, Brand, Channel and Service", "titleZh": "问界新合作模式：产品定义、设计、营销、渠道与服务由赛力斯主导，华为终端赋能", "publisher": "AITO / HIMA", "publisherZh": "问界汽车 / 鸿蒙智行", "year": "2026"}, {"title": "Huawei Steps Back, Seres Takes Over AITO Operations", "titleZh": "华为退到幕后，赛力斯接住问界：主导权交接与经营边界变化", "publisher": "Jiemian News", "publisherZh": "界面新闻", "year": "2026"}]} />
            </Sequence>

        </AbsoluteFill>
    );
};
