import React from "react";

import { LandscapeCoverPoster, VerticalCoverPoster } from "../../components";
import { Ai普惠执剑人_STATIC_COVER_PROPS } from "./Ai普惠执剑人CoverProps";

/** 1920×1080，`remotion still` 横屏封面 */
export const Ai普惠执剑人封面横屏: React.FC = () => (
	<LandscapeCoverPoster {...Ai普惠执剑人_STATIC_COVER_PROPS} />
);

/** 3:4（1080×1440），`remotion still` 竖屏/抖音封面 */
export const Ai普惠执剑人封面竖屏: React.FC = () => (
	<VerticalCoverPoster {...Ai普惠执剑人_STATIC_COVER_PROPS} />
);
