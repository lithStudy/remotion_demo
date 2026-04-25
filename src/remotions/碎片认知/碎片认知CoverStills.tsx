import React from "react";

import { LandscapeCoverPoster, VerticalCoverPoster } from "../../components";
import { 碎片认知_STATIC_COVER_PROPS } from "./碎片认知CoverProps";

/** 1920×1080，`remotion still` 横屏封面 */
export const 碎片认知封面横屏: React.FC = () => (
	<LandscapeCoverPoster {...碎片认知_STATIC_COVER_PROPS} />
);

/** 3:4（1080×1440），`remotion still` 竖屏/抖音封面 */
export const 碎片认知封面竖屏: React.FC = () => (
	<VerticalCoverPoster {...碎片认知_STATIC_COVER_PROPS} />
);
