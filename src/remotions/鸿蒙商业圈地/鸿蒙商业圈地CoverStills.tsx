import React from "react";

import { LandscapeCoverPoster, VerticalCoverPoster } from "../../components";
import { 鸿蒙商业圈地_STATIC_COVER_PROPS } from "./鸿蒙商业圈地CoverProps";

/** 1920×1080，`remotion still` 横屏封面 */
export const 鸿蒙商业圈地封面横屏: React.FC = () => (
	<LandscapeCoverPoster {...鸿蒙商业圈地_STATIC_COVER_PROPS} />
);

/** 3:4（1080×1440），`remotion still` 竖屏/抖音封面 */
export const 鸿蒙商业圈地封面竖屏: React.FC = () => (
	<VerticalCoverPoster {...鸿蒙商业圈地_STATIC_COVER_PROPS} />
);
