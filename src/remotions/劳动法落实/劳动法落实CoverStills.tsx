import React from "react";

import { LandscapeCoverPoster, VerticalCoverPoster } from "../../components";
import { 劳动法落实_STATIC_COVER_PROPS } from "./劳动法落实CoverProps";

/** 1920×1080，`remotion still` 横屏封面 */
export const 劳动法落实封面横屏: React.FC = () => (
	<LandscapeCoverPoster {...劳动法落实_STATIC_COVER_PROPS} />
);

/** 3:4（1080×1440），`remotion still` 竖屏/抖音封面 */
export const 劳动法落实封面竖屏: React.FC = () => (
	<VerticalCoverPoster {...劳动法落实_STATIC_COVER_PROPS} />
);
