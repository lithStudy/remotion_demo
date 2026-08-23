import React from "react";

import { NarratorLandscapeShell } from "../../components";
import { 智驾论之瓶颈MainBody } from "./智驾论之瓶颈MainBody";
import { DESIGN_H, DESIGN_W, LANDSCAPE_CONTAIN_SCALE } from "./智驾论之瓶颈Constants";

/** 横屏主片 1920×1080：版心 contain，避免裁切字幕/锚点 */
export const 智驾论之瓶颈Landscape: React.FC = () => {
    return (
        <NarratorLandscapeShell
            designW={DESIGN_W}
            designH={DESIGN_H}
            containScale={LANDSCAPE_CONTAIN_SCALE}
        >
            <智驾论之瓶颈MainBody />
        </NarratorLandscapeShell>
    );
};
