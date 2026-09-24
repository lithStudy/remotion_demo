import React from "react";

import { NarratorLandscapeShell } from "../../components";
import { 赛力斯之殇MainBody } from "./赛力斯之殇MainBody";
import { DESIGN_H, DESIGN_W, LANDSCAPE_CONTAIN_SCALE } from "./赛力斯之殇Constants";

/** 横屏主片 1920×1080：版心 contain，避免裁切字幕/锚点 */
export const 赛力斯之殇Landscape: React.FC = () => {
    return (
        <NarratorLandscapeShell
            designW={DESIGN_W}
            designH={DESIGN_H}
            containScale={LANDSCAPE_CONTAIN_SCALE}
        >
            <赛力斯之殇MainBody />
        </NarratorLandscapeShell>
    );
};
