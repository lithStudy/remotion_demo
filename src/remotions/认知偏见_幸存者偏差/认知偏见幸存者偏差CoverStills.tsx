import React from "react";

import { LandscapeCoverPoster, VerticalCoverPoster } from "../../components";
import { 认知偏见幸存者偏差_STATIC_COVER_PROPS } from "./认知偏见幸存者偏差CoverProps";

/** 1920×1080，`remotion still` 横屏封面 */
export const 认知偏见幸存者偏差封面横屏: React.FC = () => (
	<LandscapeCoverPoster {...认知偏见幸存者偏差_STATIC_COVER_PROPS} />
);

/** 3:4（1080×1440），`remotion still` 竖屏/抖音封面 */
export const 认知偏见幸存者偏差封面竖屏: React.FC = () => (
	<VerticalCoverPoster {...认知偏见幸存者偏差_STATIC_COVER_PROPS} />
);
