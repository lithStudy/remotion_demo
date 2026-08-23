import React from "react";

import { NarratorLandscapeShell } from "../../components";
import { 为雷军正名MainBody } from "./为雷军正名MainBody";
import { DESIGN_H, DESIGN_W, LANDSCAPE_CONTAIN_SCALE } from "./为雷军正名Constants";

/** 横屏主片 1920×1080：版心 contain，避免裁切字幕/锚点 */
export const 为雷军正名Landscape: React.FC = () => {
    return (
        <NarratorLandscapeShell
            designW={DESIGN_W}
            designH={DESIGN_H}
            containScale={LANDSCAPE_CONTAIN_SCALE}
        >
            <为雷军正名MainBody />
        </NarratorLandscapeShell>
    );
};
