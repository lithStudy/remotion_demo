import React from "react";

import { LandscapeCoverPoster, VerticalCoverPoster } from "../../components";
import { 国产情怀的谎言_STATIC_COVER_PROPS } from "./国产情怀的谎言CoverProps";

/** 1920×1080，`remotion still` 横屏封面 */
export const 国产情怀的谎言封面横屏: React.FC = () => (
	<LandscapeCoverPoster {...国产情怀的谎言_STATIC_COVER_PROPS} />
);

/** 3:4（1080×1440），`remotion still` 竖屏/抖音封面 */
export const 国产情怀的谎言封面竖屏: React.FC = () => (
	<VerticalCoverPoster {...国产情怀的谎言_STATIC_COVER_PROPS} />
);
