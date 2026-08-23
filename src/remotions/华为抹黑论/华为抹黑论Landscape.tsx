import React from "react";

import { NarratorLandscapeShell } from "../../components";
import { 华为抹黑论MainBody } from "./华为抹黑论MainBody";
import { DESIGN_H, DESIGN_W, LANDSCAPE_CONTAIN_SCALE } from "./华为抹黑论Constants";

/** 横屏主片 1920×1080：版心 contain，避免裁切字幕/锚点 */
export const 华为抹黑论Landscape: React.FC = () => {
    return (
        <NarratorLandscapeShell
            designW={DESIGN_W}
            designH={DESIGN_H}
            containScale={LANDSCAPE_CONTAIN_SCALE}
        >
            <华为抹黑论MainBody />
        </NarratorLandscapeShell>
    );
};
