import React from "react";
import { Audio, staticFile } from "remotion";

export const NARRATOR_BGM_SRC = "audio/effects/Seven_Measured_Breaths.mp3";
export const NARRATOR_BGM_VOLUME = 0.1;

/** 口播视频全局 BGM：壳层与片尾参考资料模板共用同一音轨配置 */
export const NarratorBackgroundMusic: React.FC = () => (
	<Audio
		src={staticFile(NARRATOR_BGM_SRC)}
		loop
		volume={NARRATOR_BGM_VOLUME}
		name="Background music"
	/>
);
