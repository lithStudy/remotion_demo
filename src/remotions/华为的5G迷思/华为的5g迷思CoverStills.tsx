import React from "react";

import { LandscapeCoverPoster, VerticalCoverPoster } from "../../components";
import { 华为的5g迷思_STATIC_COVER_PROPS } from "./华为的5g迷思CoverProps";

/** 1920×1080，`remotion still` 横屏封面 */
export const 华为的5g迷思封面横屏: React.FC = () => (
	<LandscapeCoverPoster {...华为的5g迷思_STATIC_COVER_PROPS} />
);

/** 3:4（1080×1440），`remotion still` 竖屏/抖音封面 */
export const 华为的5g迷思封面竖屏: React.FC = () => (
	<VerticalCoverPoster {...华为的5g迷思_STATIC_COVER_PROPS} />
);
