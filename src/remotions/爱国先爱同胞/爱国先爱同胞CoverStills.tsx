import React from "react";

import { LandscapeCoverPoster, VerticalCoverPoster } from "../../components";
import { 爱国先爱同胞_STATIC_COVER_PROPS } from "./爱国先爱同胞CoverProps";

/** 1920×1080，`remotion still` 横屏封面 */
export const 爱国先爱同胞封面横屏: React.FC = () => (
	<LandscapeCoverPoster {...爱国先爱同胞_STATIC_COVER_PROPS} />
);

/** 3:4（1080×1440），`remotion still` 竖屏/抖音封面 */
export const 爱国先爱同胞封面竖屏: React.FC = () => (
	<VerticalCoverPoster {...爱国先爱同胞_STATIC_COVER_PROPS} />
);
