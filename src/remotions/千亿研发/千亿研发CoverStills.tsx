import React from "react";

import { LandscapeCoverPoster, VerticalCoverPoster } from "../../components";
import { 千亿研发_STATIC_COVER_PROPS } from "./千亿研发CoverProps";

/** 1920×1080，`remotion still` 横屏封面 */
export const 千亿研发封面横屏: React.FC = () => (
	<LandscapeCoverPoster {...千亿研发_STATIC_COVER_PROPS} />
);

/** 3:4（1080×1440），`remotion still` 竖屏/抖音封面 */
export const 千亿研发封面竖屏: React.FC = () => (
	<VerticalCoverPoster {...千亿研发_STATIC_COVER_PROPS} />
);
