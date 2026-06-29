import React from "react";

import { LandscapeCoverPoster, VerticalCoverPoster } from "../../components";
import { 模型论_STATIC_COVER_PROPS } from "./模型论CoverProps";

/** 1920×1080，`remotion still` 横屏封面 */
export const 模型论封面横屏: React.FC = () => (
	<LandscapeCoverPoster {...模型论_STATIC_COVER_PROPS} />
);

/** 3:4（1080×1440），`remotion still` 竖屏/抖音封面 */
export const 模型论封面竖屏: React.FC = () => (
	<VerticalCoverPoster {...模型论_STATIC_COVER_PROPS} />
);
