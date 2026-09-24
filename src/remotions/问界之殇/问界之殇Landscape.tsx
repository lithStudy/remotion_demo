import React from "react";

import { NarratorLandscapeShell } from "../../components";
import { 问界之殇MainBody } from "./问界之殇MainBody";
import { DESIGN_H, DESIGN_W, LANDSCAPE_CONTAIN_SCALE } from "./问界之殇Constants";

/** 横屏主片 1920×1080：版心 contain，避免裁切字幕/锚点 */
export const 问界之殇Landscape: React.FC = () => {
    return (
        <NarratorLandscapeShell
            designW={DESIGN_W}
            designH={DESIGN_H}
            containScale={LANDSCAPE_CONTAIN_SCALE}
        >
            <问界之殇MainBody />
        </NarratorLandscapeShell>
    );
};
