import React from "react";

import { LandscapeCoverPoster, VerticalCoverPoster } from "../../components";
import { 国产支持论_STATIC_COVER_PROPS } from "./国产支持论CoverProps";

/** 1920×1080，`remotion still` 横屏封面 */
export const 国产支持论封面横屏: React.FC = () => (
	<LandscapeCoverPoster {...国产支持论_STATIC_COVER_PROPS} />
);

/** 3:4（1080×1440），`remotion still` 竖屏/抖音封面 */
export const 国产支持论封面竖屏: React.FC = () => (
	<VerticalCoverPoster {...国产支持论_STATIC_COVER_PROPS} />
);
