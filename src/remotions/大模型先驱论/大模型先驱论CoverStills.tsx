import React from "react";

import { LandscapeCoverPoster, VerticalCoverPoster } from "../../components";
import { 大模型先驱论_STATIC_COVER_PROPS } from "./大模型先驱论CoverProps";

/** 1920×1080，`remotion still` 横屏封面 */
export const 大模型先驱论封面横屏: React.FC = () => (
	<LandscapeCoverPoster {...大模型先驱论_STATIC_COVER_PROPS} />
);

/** 3:4（1080×1440），`remotion still` 竖屏/抖音封面 */
export const 大模型先驱论封面竖屏: React.FC = () => (
	<VerticalCoverPoster {...大模型先驱论_STATIC_COVER_PROPS} />
);
