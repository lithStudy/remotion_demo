import React from "react";

import { NarratorLandscapeShell } from "../../components";
import { 客户提纯论MainBody } from "./客户提纯论MainBody";
import { DESIGN_H, DESIGN_W, LANDSCAPE_CONTAIN_SCALE } from "./客户提纯论Constants";

/** 横屏主片 1920×1080：版心 contain，避免裁切字幕/锚点 */
export const 客户提纯论Landscape: React.FC = () => {
    return (
        <NarratorLandscapeShell
            designW={DESIGN_W}
            designH={DESIGN_H}
            containScale={LANDSCAPE_CONTAIN_SCALE}
        >
            <客户提纯论MainBody />
        </NarratorLandscapeShell>
    );
};
