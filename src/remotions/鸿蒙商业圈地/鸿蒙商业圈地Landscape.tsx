import React from "react";

import { NarratorLandscapeShell } from "../../components";
import { 鸿蒙商业圈地MainBody } from "./鸿蒙商业圈地MainBody";
import { DESIGN_H, DESIGN_W, LANDSCAPE_CONTAIN_SCALE } from "./鸿蒙商业圈地Constants";

/** 横屏主片 1920×1080：版心 contain，避免裁切字幕/锚点 */
export const 鸿蒙商业圈地Landscape: React.FC = () => {
    return (
        <NarratorLandscapeShell
            designW={DESIGN_W}
            designH={DESIGN_H}
            containScale={LANDSCAPE_CONTAIN_SCALE}
            showBrandMark={false}
        >
            <鸿蒙商业圈地MainBody />
        </NarratorLandscapeShell>
    );
};
