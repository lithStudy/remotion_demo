import React from "react";

import { NarratorLandscapeShell } from "../../components";
import { Ai普惠执剑人MainBody } from "./Ai普惠执剑人MainBody";
import { DESIGN_H, DESIGN_W, LANDSCAPE_CONTAIN_SCALE } from "./Ai普惠执剑人Constants";

/** 横屏主片 1920×1080：版心 contain，避免裁切字幕/锚点 */
export const Ai普惠执剑人Landscape: React.FC = () => {
    return (
        <NarratorLandscapeShell
            designW={DESIGN_W}
            designH={DESIGN_H}
            containScale={LANDSCAPE_CONTAIN_SCALE}
        >
            <Ai普惠执剑人MainBody />
        </NarratorLandscapeShell>
    );
};
