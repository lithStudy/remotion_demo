import React from "react";

import { NarratorLandscapeShell } from "../../components";
import { 大模型先驱论MainBody } from "./大模型先驱论MainBody";
import { DESIGN_H, DESIGN_W, LANDSCAPE_CONTAIN_SCALE } from "./大模型先驱论Constants";

/** 横屏主片 1920×1080：版心 contain，避免裁切字幕/锚点 */
export const 大模型先驱论Landscape: React.FC = () => {
    return (
        <NarratorLandscapeShell
            designW={DESIGN_W}
            designH={DESIGN_H}
            containScale={LANDSCAPE_CONTAIN_SCALE}
        >
            <大模型先驱论MainBody />
        </NarratorLandscapeShell>
    );
};
