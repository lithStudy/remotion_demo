import React from "react";

import { NarratorLandscapeShell } from "../../components";
import { 宏大叙事论MainBody } from "./宏大叙事论MainBody";
import { DESIGN_H, DESIGN_W, LANDSCAPE_CONTAIN_SCALE } from "./宏大叙事论Constants";

/** 横屏主片 1920×1080：版心 contain，避免裁切字幕/锚点 */
export const 宏大叙事论Landscape: React.FC = () => {
    return (
        <NarratorLandscapeShell
            designW={DESIGN_W}
            designH={DESIGN_H}
            containScale={LANDSCAPE_CONTAIN_SCALE}
        >
            <宏大叙事论MainBody />
        </NarratorLandscapeShell>
    );
};
