import React from "react";

import { LandscapeCoverPoster, VerticalCoverPoster } from "../../components";
import { 为雷军正名_STATIC_COVER_PROPS } from "./为雷军正名CoverProps";

/** 1920×1080，`remotion still` 横屏封面 */
export const 为雷军正名封面横屏: React.FC = () => (
	<LandscapeCoverPoster {...为雷军正名_STATIC_COVER_PROPS} />
);

/** 3:4（1080×1440），`remotion still` 竖屏/抖音封面 */
export const 为雷军正名封面竖屏: React.FC = () => (
	<VerticalCoverPoster {...为雷军正名_STATIC_COVER_PROPS} />
);
