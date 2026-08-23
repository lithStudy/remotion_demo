import React from "react";

import { NarratorLandscapeShell } from "../../components";
import { 小米掀翻蚂蚁市场MainBody } from "./小米掀翻蚂蚁市场MainBody";
import { DESIGN_H, DESIGN_W, LANDSCAPE_CONTAIN_SCALE } from "./小米掀翻蚂蚁市场Constants";

/** 横屏主片 1920×1080：版心 contain，避免裁切字幕/锚点 */
export const 小米掀翻蚂蚁市场Landscape: React.FC = () => {
    return (
        <NarratorLandscapeShell
            designW={DESIGN_W}
            designH={DESIGN_H}
            containScale={LANDSCAPE_CONTAIN_SCALE}
        >
            <小米掀翻蚂蚁市场MainBody />
        </NarratorLandscapeShell>
    );
};
