import React from "react";
import { Composition } from "remotion";
import type { AnyZodObject } from "zod";

export type NarratorTopicCompositionsProps = {
	/** 选题 id；竖屏 / 封面仍沿用「{id}竖屏」「{id}封面横屏」「{id}封面竖屏」 */
	id: string;
	landscape: React.ComponentType;
	vertical: React.ComponentType;
	durationInFrames: number;
	schema: AnyZodObject;
	fps?: number;
	coverLandscape?: React.ComponentType;
	coverVertical?: React.ComponentType;
};

/**
 * 口播选题四入口注册：横屏主片、竖屏主片、横屏封面 still、竖屏封面 still。
 * Root 每个选题只挂一次；侧边栏与 CLI 仍是四个独立 Composition id。
 */
export const NarratorTopicCompositions: React.FC<NarratorTopicCompositionsProps> = ({
	id,
	landscape,
	vertical,
	durationInFrames,
	schema,
	fps = 30,
	coverLandscape,
	coverVertical,
}) => {
	const asComp = (c: React.ComponentType) =>
		c as React.ComponentType<Record<string, unknown>>;

	return (
		<>
			<Composition
				id={`${id}横屏`}
				component={asComp(landscape)}
				durationInFrames={durationInFrames}
				fps={fps}
				width={1920}
				height={1080}
				schema={schema}
				defaultProps={{}}
			/>
			<Composition
				id={`${id}竖屏`}
				component={asComp(vertical)}
				durationInFrames={durationInFrames}
				fps={fps}
				width={1080}
				height={1920}
				schema={schema}
				defaultProps={{}}
			/>
			{coverLandscape ? (
				<Composition
					id={`${id}封面横屏`}
					component={asComp(coverLandscape)}
					durationInFrames={1}
					fps={fps}
					width={1920}
					height={1080}
					defaultProps={{}}
				/>
			) : null}
			{coverVertical ? (
				<Composition
					id={`${id}封面竖屏`}
					component={asComp(coverVertical)}
					durationInFrames={1}
					fps={fps}
					width={1080}
					height={1440}
					defaultProps={{}}
				/>
			) : null}
		</>
	);
};
