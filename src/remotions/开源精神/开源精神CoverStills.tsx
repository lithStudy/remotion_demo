import React from "react";

import { LandscapeCoverPoster, VerticalCoverPoster } from "../../components";
import { 开源精神_STATIC_COVER_PROPS } from "./开源精神CoverProps";

/** 1920×1080，`remotion still` 横屏封面 */
export const 开源精神封面横屏: React.FC = () => (
	<LandscapeCoverPoster {...开源精神_STATIC_COVER_PROPS} />
);

/** 3:4（1080×1440），`remotion still` 竖屏/抖音封面 */
export const 开源精神封面竖屏: React.FC = () => (
	<VerticalCoverPoster {...开源精神_STATIC_COVER_PROPS} />
);
