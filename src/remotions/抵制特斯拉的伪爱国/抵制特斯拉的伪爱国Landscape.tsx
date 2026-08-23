import React from "react";

import { NarratorLandscapeShell } from "../../components";
import { 抵制特斯拉的伪爱国MainBody } from "./抵制特斯拉的伪爱国MainBody";
import { DESIGN_H, DESIGN_W, LANDSCAPE_CONTAIN_SCALE } from "./抵制特斯拉的伪爱国Constants";

/** 横屏主片 1920×1080：版心 contain，避免裁切字幕/锚点 */
export const 抵制特斯拉的伪爱国Landscape: React.FC = () => {
    return (
        <NarratorLandscapeShell
            designW={DESIGN_W}
            designH={DESIGN_H}
            containScale={LANDSCAPE_CONTAIN_SCALE}
        >
            <抵制特斯拉的伪爱国MainBody />
        </NarratorLandscapeShell>
    );
};
