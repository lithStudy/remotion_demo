import React from "react";

import { LandscapeCoverPoster, VerticalCoverPoster } from "../../components";
import { 食品安全_STATIC_COVER_PROPS } from "./食品安全CoverProps";

/** 1920×1080，`remotion still` 横屏封面 */
export const 食品安全封面横屏: React.FC = () => (
	<LandscapeCoverPoster {...食品安全_STATIC_COVER_PROPS} />
);

/** 3:4（1080×1440），`remotion still` 竖屏/抖音封面 */
export const 食品安全封面竖屏: React.FC = () => (
	<VerticalCoverPoster {...食品安全_STATIC_COVER_PROPS} />
);
