import React from "react";

import { NarratorLandscapeShell } from "../../components";
import { 豆包仙人论MainBody } from "./豆包仙人论MainBody";
import { DESIGN_H, DESIGN_W, LANDSCAPE_CONTAIN_SCALE } from "./豆包仙人论Constants";

/** 横屏主片 1920×1080：版心 contain，避免裁切字幕/锚点 */
export const 豆包仙人论Landscape: React.FC = () => {
    return (
        <NarratorLandscapeShell
            designW={DESIGN_W}
            designH={DESIGN_H}
            containScale={LANDSCAPE_CONTAIN_SCALE}
        >
            <豆包仙人论MainBody />
        </NarratorLandscapeShell>
    );
};
