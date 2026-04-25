import React from "react";

import { LandscapeCoverPoster, VerticalCoverPoster } from "../../components";
import { 小米平权_STATIC_COVER_PROPS } from "./小米平权CoverProps";

/** 1920×1080，`remotion still` 横屏封面 */
export const 小米平权封面横屏: React.FC = () => (
	<LandscapeCoverPoster {...小米平权_STATIC_COVER_PROPS} />
);

/** 3:4（1080×1440），`remotion still` 竖屏/抖音封面 */
export const 小米平权封面竖屏: React.FC = () => (
	<VerticalCoverPoster {...小米平权_STATIC_COVER_PROPS} />
);
