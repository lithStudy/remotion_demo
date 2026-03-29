/**
 * CENTER_FOCUS 模板：视觉中心稳定，单图居中展示
 */
import React from "react";
import { AbsoluteFill } from "remotion";
import type { TemplateBaseProps } from "./shared";
import { BWImageBreath } from "./BWImageBreath";
import type { ImageEnterEffect } from "./shared";
import { TemplateContentRenderer } from "./TemplateContentRenderer";

export { centerFocusMeta as templateMeta } from "./template-definitions";

export interface BWCenterFocusProps extends TemplateBaseProps {
	imageSrc: string;
	enterEffect?: ImageEnterEffect;
}

export const BWCenterFocus: React.FC<BWCenterFocusProps> = ({
	imageSrc,
	enterEffect = "breathe",
	content,
	anchors,
	audioSrc,
	children,
	style,
}) => (
	<AbsoluteFill style={style}>
		<BWImageBreath src={imageSrc} enterEffect={enterEffect} content={content} anchors={anchors} />
		<TemplateContentRenderer content={content} anchors={anchors} audioSrc={audioSrc} />
		{children}
	</AbsoluteFill>
);
