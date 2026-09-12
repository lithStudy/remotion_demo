import React from "react";

import { LandscapeCoverPoster, VerticalCoverPoster } from "../../components";
import { 华为造车论_STATIC_COVER_PROPS } from "./华为造车论CoverProps";

/** 1920×1080，`remotion still` 横屏封面 */
export const 华为造车论封面横屏: React.FC = () => (
	<LandscapeCoverPoster {...华为造车论_STATIC_COVER_PROPS} />
);

/** 3:4（1080×1440），`remotion still` 竖屏/抖音封面 */
export const 华为造车论封面竖屏: React.FC = () => (
	<VerticalCoverPoster {...华为造车论_STATIC_COVER_PROPS} />
);
