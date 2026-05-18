import React from "react";

import { LandscapeCoverPoster, VerticalCoverPoster } from "../../components";
import { 抵制特斯拉的伪爱国_STATIC_COVER_PROPS } from "./抵制特斯拉的伪爱国CoverProps";

/** 1920×1080，`remotion still` 横屏封面 */
export const 抵制特斯拉的伪爱国封面横屏: React.FC = () => (
	<LandscapeCoverPoster {...抵制特斯拉的伪爱国_STATIC_COVER_PROPS} />
);

/** 3:4（1080×1440），`remotion still` 竖屏/抖音封面 */
export const 抵制特斯拉的伪爱国封面竖屏: React.FC = () => (
	<VerticalCoverPoster {...抵制特斯拉的伪爱国_STATIC_COVER_PROPS} />
);
