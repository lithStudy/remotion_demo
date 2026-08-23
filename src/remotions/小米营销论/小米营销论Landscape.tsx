import React from "react";

import { NarratorLandscapeShell } from "../../components";
import { 小米营销论MainBody } from "./小米营销论MainBody";
import { DESIGN_H, DESIGN_W, LANDSCAPE_CONTAIN_SCALE } from "./小米营销论Constants";

/** 横屏主片 1920×1080：版心 contain，避免裁切字幕/锚点 */
export const 小米营销论Landscape: React.FC = () => {
    return (
        <NarratorLandscapeShell
            designW={DESIGN_W}
            designH={DESIGN_H}
            containScale={LANDSCAPE_CONTAIN_SCALE}
        >
            <小米营销论MainBody />
        </NarratorLandscapeShell>
    );
};
