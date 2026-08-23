import React from "react";

import { NarratorLandscapeShell } from "../../components";
import { 劳动法落实MainBody } from "./劳动法落实MainBody";
import { DESIGN_H, DESIGN_W, LANDSCAPE_CONTAIN_SCALE } from "./劳动法落实Constants";

/** 横屏主片 1920×1080：版心 contain，避免裁切字幕/锚点 */
export const 劳动法落实Landscape: React.FC = () => {
    return (
        <NarratorLandscapeShell
            designW={DESIGN_W}
            designH={DESIGN_H}
            containScale={LANDSCAPE_CONTAIN_SCALE}
        >
            <劳动法落实MainBody />
        </NarratorLandscapeShell>
    );
};
