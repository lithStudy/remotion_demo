import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWSourceCitation } from "../../../components";

// 片尾·参考资料
const SCENE_DURATION = 149;

export const calculateScene6Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene6: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={149}>
                <BWSourceCitation content={[]} totalDurationFrames={149} sectionTitle={"参考资料"} references={[{"title": "La condition postmoderne: rapport sur le savoir", "titleZh": "后现代状态：对元叙事（宏大叙事）合法性的不信任", "publisher": "Jean-François Lyotard · Les Éditions de Minuit", "publisherZh": "让-弗朗索瓦·利奥塔 · 午夜出版社", "year": "1979"}, {"title": "Groundwork of the Metaphysics of Morals", "titleZh": "道德形而上学奠基：人永远是目的，不可仅作手段", "publisher": "Immanuel Kant", "publisherZh": "伊曼努尔·康德", "year": "1785"}, {"title": "The Poverty of Historicism", "titleZh": "历史决定论的贫困：批判以历史必然性牺牲当下具体人的乌托邦构想", "publisher": "Karl Popper · Routledge", "publisherZh": "卡尔·波普尔 · Routledge", "year": "1957"}, {"title": "The Origins of Totalitarianism", "titleZh": "极权主义的起源：极权叙事如何把具体人工具化", "publisher": "Hannah Arendt · Harcourt", "publisherZh": "汉娜·阿伦特 · Harcourt", "year": "1951"}, {"title": "Discipline and Punish: The Birth of the Prison", "titleZh": "规训与惩罚：话语与权力如何定义何为「正当」", "publisher": "Michel Foucault · Gallimard", "publisherZh": "米歇尔·福柯 · 伽利玛出版社", "year": "1975"}, {"title": "The German Ideology", "titleZh": "德意志意识形态：统治阶级思想如何被表述为普遍利益", "publisher": "Karl Marx & Friedrich Engels", "publisherZh": "卡尔·马克思 & 弗里德里希·恩格斯", "year": "1845"}]} />
            </Sequence>

        </AbsoluteFill>
    );
};
