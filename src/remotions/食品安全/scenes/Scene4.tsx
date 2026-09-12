import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWSourceCitation } from "../../../components";

// 片尾·参考资料
const SCENE_DURATION = 149;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={149}>
                <BWSourceCitation content={[]} totalDurationFrames={149} sectionTitle={"参考资料"} references={[{"title": "Sanlu tainted milk powder scandal", "titleZh": "三鹿奶粉三聚氰胺事件：新西兰政府介入通报", "publisher": "Ministry for Primary Industries, New Zealand", "publisherZh": "新西兰初级产业部", "year": "2008"}, {"title": "Investigation into mixed transport of edible oil and chemical liquids in tanker trucks", "titleZh": "罐车混装食用油与化工液体未清洗", "publisher": "The Beijing News", "publisherZh": "新京报", "year": "2024"}, {"title": "Illegal preservation treatment of bayberries with excessive pesticides", "titleZh": "泡药杨梅：违规使用保鲜剂与农药", "publisher": "China Food Safety News", "publisherZh": "中国食品安全报", "year": "2024"}, {"title": "Formaldehyde-treated cabbage sold at agricultural markets", "titleZh": "甲醛白菜：检出违规甲醛添加", "publisher": "Local market supervision bureau reports", "publisherZh": "地方市场监管部门通报", "year": "2025"}, {"title": "Food Safety Law of the People's Republic of China", "titleZh": "食品安全法：监管职责与法律责任框架", "publisher": "Standing Committee of the NPC", "publisherZh": "全国人民代表大会常务委员会", "year": "2021"}, {"title": "Road Traffic Safety Law of the People's Republic of China", "titleZh": "道路交通安全法：酒驾醉驾处罚与执法威慑", "publisher": "Standing Committee of the NPC", "publisherZh": "全国人民代表大会常务委员会", "year": "2021"}]} />
            </Sequence>

        </AbsoluteFill>
    );
};
