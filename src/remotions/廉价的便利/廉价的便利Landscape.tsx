import React from "react";

import { NarratorLandscapeShell } from "../../components";
import { 廉价的便利MainBody } from "./廉价的便利MainBody";
import { DESIGN_H, DESIGN_W, LANDSCAPE_CONTAIN_SCALE } from "./廉价的便利Constants";

/** 横屏主片 1920×1080：版心 contain，避免裁切字幕/锚点 */
export const 廉价的便利Landscape: React.FC = () => {
    return (
        <NarratorLandscapeShell
            designW={DESIGN_W}
            designH={DESIGN_H}
            containScale={LANDSCAPE_CONTAIN_SCALE}
        >
            <廉价的便利MainBody />
        </NarratorLandscapeShell>
    );
};
