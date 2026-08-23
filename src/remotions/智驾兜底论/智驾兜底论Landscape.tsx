import React from "react";

import { NarratorLandscapeShell } from "../../components";
import { 智驾兜底论MainBody } from "./智驾兜底论MainBody";
import { DESIGN_H, DESIGN_W, LANDSCAPE_CONTAIN_SCALE } from "./智驾兜底论Constants";

/** 横屏主片 1920×1080：版心 contain，避免裁切字幕/锚点 */
export const 智驾兜底论Landscape: React.FC = () => {
    return (
        <NarratorLandscapeShell
            designW={DESIGN_W}
            designH={DESIGN_H}
            containScale={LANDSCAPE_CONTAIN_SCALE}
        >
            <智驾兜底论MainBody />
        </NarratorLandscapeShell>
    );
};
