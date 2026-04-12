import React from "react";

import { LandscapeCoverPoster, VerticalCoverPoster } from "../../components";
import { 认知偏见可得性启发_STATIC_COVER_PROPS } from "./认知偏见可得性启发CoverProps";

/** 1920×1080，`remotion still` 横屏封面 */
export const 认知偏见可得性启发封面横屏: React.FC = () => (
	<LandscapeCoverPoster {...认知偏见可得性启发_STATIC_COVER_PROPS} />
);

/** 3:4（1080×1440），`remotion still` 竖屏/抖音封面 */
export const 认知偏见可得性启发封面竖屏: React.FC = () => (
	<VerticalCoverPoster {...认知偏见可得性启发_STATIC_COVER_PROPS} />
);
